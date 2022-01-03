import { boot } from "quasar/wrappers";
import { io } from "socket.io-client";

console.log(process.env.NODE_ENV);

const URL = "https://brian-coder.herokuapp.com/";

const socket = io(URL, { autoConnect: true });

//socket.connect();

export default boot(({ app, store }) => {
  socket.on("resp-message", function (data) {
    console.log(data);
    store.commit("chat/newMessage", data);
  });

  socket.on("stored-messages", function (data) {
    console.log(data);
    store.commit("chat/newMessages", data);
  });

  app.config.globalProperties.$socket = socket;
});

export { socket };
