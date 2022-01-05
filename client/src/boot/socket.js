import { boot } from 'quasar/wrappers';
import { io } from 'socket.io-client';
// import dotenv from 'dotenv';
// dotenv.config({ path: '../.env' });

//const URL ='localhost:' + (process.env.PORT||'8080');

const socket = io('/', { autoConnect: true });

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
