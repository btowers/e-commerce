/**
 *
 * @param {object} message
 * @return {object}
 */
export function formatMessage(message: any): object {
  let formattedMessage = '';
  switch (message.subject) {
    case 'carrito':
      message.data.forEach((element: any) => {
        formattedMessage +=
          ' Producto: ' +
          element.nombre +
          ' Cantidad: ' +
          element.cantidad +
          ' Precio: ' +
          element.precio +
          '\n';
      });
      break;
    case 'stock':
      message.data.forEach((element: any) => {
        formattedMessage +=
          ' Producto: ' + element.nombre + ' Stock: ' + element.stock + '\n';
      });
      break;
    case 'orden':
      formattedMessage +=
        ' Orden: ' +
        message.data._id +
        ' Total: ' +
        message.data.total +
        ' Estado: ' +
        message.data.status +
        '\n';
      break;
    default:
      formattedMessage = message.data;
  }
  const msg = {
    sent: message.sent,
    text: formattedMessage,
  };

  return msg;
}

/**
 *
 * @param {any} messages
 * @return {object}
 */
export function formatMessages(messages: any): Array<object> {
  const reversedArray = messages.reverse();
  return reversedArray.map((message: any) => {
    return {
      sent: message.type === 'sistema' ? false : true,
      text: message.message,
    };
  });
}
