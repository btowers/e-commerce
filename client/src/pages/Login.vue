<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <q-input v-model="user.email" label="Usuario" />
        <q-input
          v-model="user.password"
          :type="isPwd ? 'password' : 'text'"
          label="Contraseña"
        />
        <div class="row justify-between q-py-sm">
          <div>
            <q-btn
              @click="loginUser"
              color="primary"
              label="Login"
              :loading="loading"
            />
          </div>
          <div class="q-pt-md">
            <router-link to="/register">Register</router-link>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapMutate } from "vuex";
export default {
  name: "Login",
  data() {
    return { loading: false, isPwd: true, user: { email: "", password: "" } };
  },

  methods: {
    loginUser() {
      this.loading = true;
      this.$axios
        .post("/api/user/login", this.user)
        .then((res) => {
          this.loading = false;
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            this.$socket.connect();
            //     this.$store.commit("authentication/setJwtToken", res.data.token);
            this.$router.push("/");
          } else {
            this.$q.notify({
              position: "bottom-right",
              color: "negative",
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.$q.notify({
            position: "bottom-right",
            color: "negative",
            message: err.message,
          });
        });
    },
  },
};
</script>
<style lang="css" scoped>
.my-card {
  width: 400px;
}
</style>
