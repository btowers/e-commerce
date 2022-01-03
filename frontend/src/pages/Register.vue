<template>
  <q-page class="flex flex-center">
    <q-form class="q-gutter-md">
      <q-card class="my-card q-pa-md">
        <q-card-section horizontal>
          <q-card-section style="width: 100%">
            <q-input
              v-model="user.nombre"
              name="nombre"
              label="Nombre"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.email"
              type="email"
              name="email"
              label="Email"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.password"
              :type="isPwd ? 'password' : 'text'"
              name="password"
              label="Contraseña"
              :rules="[(val) => !!val || 'Field is required']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              v-model="user.confirmPassword"
              :type="isPwd ? 'password' : 'text'"
              name="passwordRepeat"
              label="Repita Contraseña"
              :rules="[(val) => !!val || 'Field is required']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-separator vertical />
          <q-card-section style="width: 100%">
            <q-input
              mask="(##) ####-####"
              v-model="user.telefono"
              name="telefono"
              label="Teléfono"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.direccion.calle"
              name="calle"
              label="Calle"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.direccion.altura"
              name="altura"
              label="Altura"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input v-model="user.direccion.cp" name="cp" label="CP" />
            <q-input v-model="user.direccion.piso" name="piso" label="Piso" />
            <q-input
              v-model="user.direccion.departamento"
              name="departamento"
              label="Departamento"
            />
          </q-card-section>
        </q-card-section>
        <q-card-section>
          <div class="row justify-end q-gutter-sm">
            <div>
              <router-link to="/login">Login</router-link>
            </div>
            <div>
              <q-btn
                @click="onSubmit"
                color="primary"
                label="Register"
                :loading="loadingBtn"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      user: {
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
        direccion: {
          calle: "",
          altura: "",
          cp: "",
          piso: "",
          departamento: "",
        },
        telefono: "",
      },
      loadingBtn: false,
      isPwd: true,
    };
  },
  methods: {
    async onSubmit() {
      this.loadingBtn = true;
      await axios
        .post("/api/user/signup", this.user)
        .then((res) => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
      this.loadingBtn = false;
    },
  },
};
</script>
<style lang="css" scoped>
.my-card {
  width: 800px;
}
</style>
