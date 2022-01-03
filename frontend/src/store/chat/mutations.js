export function newMessage(state, message) {
  state.messages.push(message);
}

export function emptyChat(state) {
  console.log("emptyChat");
  state.messages = [];
}

export function newMessages(state, messages) {
  state.messages = messages;
}
