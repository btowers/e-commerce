import { formatMessage, formatMessages } from '../../utils/formatter';

describe('New Message Formatter', () => {
  it('Should format Cart response message', () => {
    const message = {
      subject: 'carrito',
      data: [{ nombre: 'Producto', cantidad: 1, precio: 1 }],
      sent: false,
    };
    const formattedMessage = formatMessage(message);
    expect(formattedMessage).toEqual({
      sent: false,
      text: ' Producto: Producto Cantidad: 1 Precio: 1\n',
    });
  });
  it('Should format Order response message', () => {
    const message = {
      subject: 'orden',
      data: {
        _id: '61c9c6386153c142394bc438',
        total: 1,
        status: 'generado',
      },
      sent: false,
    };
    const formattedMessage = formatMessage(message);
    expect(formattedMessage).toEqual({
      sent: false,
      text: ' Orden: 61c9c6386153c142394bc438 Total: 1 Estado: generado\n',
    });
  });
  it('Should format Stock response message', () => {
    const message = {
      subject: 'stock',
      data: [{ nombre: 'Producto', stock: 1 }],
      sent: false,
    };
    const formattedMessage = formatMessage(message);
    expect(formattedMessage).toEqual({
      sent: false,
      text: ' Producto: Producto Stock: 1\n',
    });
  });
});

describe('Stored Messages Formatter', () => {
  it('Should format the array of messages stored in the DB', () => {
    const messages = [
      {
        type: 'sistema',
        message:
          ' Producto: Short Stock: 181 Producto: Short Stock: 148 Producto: Camisa Stock: 92',
      },
      {
        type: 'usuario',
        message: 'Carrito',
      },
    ];
    const formattedMessages = formatMessages(messages);
    expect(formattedMessages).toEqual([
      {
        sent: true,
        text: 'Carrito',
      },
      {
        sent: false,
        text: ' Producto: Short Stock: 181 Producto: Short Stock: 148 Producto: Camisa Stock: 92',
      },
    ]);
  });
});
