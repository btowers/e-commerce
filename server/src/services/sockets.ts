import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';

import http from 'http';
import config from '../config';
import { userS } from '../models/user/user.service';
import { productS } from '../models/product/product.service';
import { orderS } from '../models/order/order.service';
import { cartS } from '../models/cart/cart.service';
import { formatMessage, formatMessages } from '../utils/formatter';
import { messageS } from '../models/message/message.service';

export const initWsServer = (server: http.Server) => {
  const io = new Server(server);
  io.on('connection', (socket: Socket) => {
    socket.on(
      'new-message',
      async (message: { name: string; text: string; token: string }) => {
        try {
          const decode = jwt.verify(message.token, config.JWT_SECRET_KEY);
          const userId = decode.sub!.toString();
          const user = await userS.getUserById(userId);
          if (!user) {
            socket.emit('chatMessage', {
              username: 'Server',
              text: 'Usuario no encontrado',
            });
            return;
          } else {
            await messageS.createMessage(userId, {
              text: message.text,
              sent: true,
            });
            switch (message.text.toLowerCase()) {
              case 'stock':
                productS
                  .getProducts()
                  .then((products) => {
                    const stock = products.map((product) => {
                      return {
                        nombre: product.nombre,
                        stock: product.stock,
                      };
                    });
                    const message = {
                      subject: 'stock',
                      data: stock,
                      sent: false,
                    };
                    const formattedMessage = formatMessage(message);
                    messageS.createMessage(userId, formattedMessage);
                    socket.emit('resp-message', formattedMessage);
                  })
                  .catch((err) => {});
                break;
              case 'orden':
                orderS
                  .getOrders()
                  .then((orders) => {
                    const message = {
                      subject: 'orden',
                      data: orders[orders.length - 1],
                      sent: false,
                    };
                    const formattedMessage = formatMessage(message);
                    messageS.createMessage(userId, formattedMessage);
                    socket.emit('resp-message', formattedMessage);
                  })
                  .catch((err) => {});
                break;
              case 'carrito':
                cartS
                  .getCart(userId)
                  .then((cart: any) => {
                    if (cart.products.length == 0) {
                      const message = {
                        subject: 'default',
                        sent: false,
                        data: 'No hay productos en el carrito',
                      };
                      const formattedMessage = formatMessage(message);
                      messageS.createMessage(userId, formattedMessage);
                      socket.emit('resp-message', formattedMessage);
                      return;
                    }

                    const products = cart.products.map((item: any) => {
                      return {
                        nombre: item.product.nombre,
                        precio: item.product.precio,
                        cantidad: item.qty,
                      };
                    });
                    const message = {
                      subject: 'carrito',
                      data: products,
                      sent: false,
                    };
                    const formattedMessage = formatMessage(message);
                    messageS.createMessage(userId, formattedMessage);
                    socket.emit('resp-message', formattedMessage);
                  })
                  .catch((err) => {});
                break;
              default:
                const message = {
                  subject: 'default',
                  sent: false,
                  data: 'Hola! No he podido comprender tu mensaje. Por favor ingresa una de las siguientes opciones:\n\nStock: Para conocer nustro stock actual.\nOrden: Para conocer la informacion de tu ultima orden.\nCarrito: Para conocer el estado actual de tu carrito.',
                };
                const formattedMessage = formatMessage(message);
                messageS.createMessage(userId, formattedMessage);
                socket.emit('resp-message', formattedMessage);
                break;
            }
          }
        } catch (err) {
          // err
        }
      }
    );

    socket.on('messageRequest', async (message: { token: string }) => {
      try {
        const decode = jwt.verify(message.token, config.JWT_SECRET_KEY);
        const userId = decode.sub!.toString();
        const user = await userS.getUserById(userId);
        if (!user) {
          socket.emit('resp-message', {
            username: 'Server',
            text: 'Usuario no encontrado',
          });
          return;
        }
        const messages = await messageS.getMessages(userId);
        const formattedMessages = formatMessages(messages);
        socket.emit('stored-messages', formattedMessages);
      } catch (err) {
        // err
      }
    });
  });

  return io;
};
