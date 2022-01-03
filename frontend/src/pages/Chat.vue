<template>
  <q-page class="flex flex-center">
    <q-card>
      <div class="q-pa-md">
        <q-scroll-area style="height: 350px; width: 800px">
          <q-chat-message
            v-for="(message, index) in messages"
            :key="index"
            :sent="message.sent"
          >
            {{ message.text }}
          </q-chat-message>
        </q-scroll-area>
        <div class="q-my-md" style="width: 100%">
          <q-input v-model="text" outlined @keyup.enter="sendMessage" />
          <q-btn
            class="q-mt-md"
            @click="sendMessage"
            color="primary"
            label="Enviar"
            :loading="btnLoading"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {
      text: "",
      btnLoading: false,
    };
  },
  created() {
    console.log("messageRequest");
    this.$socket.emit("messageRequest", {
      token: localStorage.getItem("token"),
    });
  },

  computed: {
    messages() {
      const gg = this.$store.state.chat.messages.map((message) => {
        return {
          sent: message.sent,
          text: message.text,
        };
      });
      return gg;
    },
  },

  methods: {
    sendMessage() {
      console.log("SENDING MESSAGE");
      console.log(localStorage.getItem("token"));
      this.$store.commit("chat/newMessage", { text: this.text, sent: true });
      const message = {
        text: this.text,
        token: localStorage.getItem("token"),
      };
      this.$socket.emit("new-message", message);
      this.text = "";
    },
  },
};
</script>
