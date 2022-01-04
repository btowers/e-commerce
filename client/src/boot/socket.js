import { boot } from 'quasar/wrappers';
import { io } from 'socket.io-client';

const URL = process.env.ENV=='localhost' ? 'localhost:8080' : 'https://brian-coder.herokuapp.com';

const socket = io(URL, { autoConnect: true });

export default boot(({ app, store }) => {
  socket.on('resp-message', function (data) {
    store.commit('chat/newMessage', data);
  });

  socket.on('stored-messages', function (data) {
    store.commit('chat/newMessages', data);
  });

  app.config.globalProperties.$socket = socket;
});

export { socket };
