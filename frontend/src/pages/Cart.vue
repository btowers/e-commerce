<template>
  <q-page class="flex justify-center">
    <div class="q-pa-md" style="width: 800px">
      <q-table
        title="Carrito"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :loading="loading"
        no-data-label="No se encontraron productos en el carrito..."
      >
        <template v-slot:body="props">
          <q-tr>
            <q-td>
              <q-avatar>
                <img
                  :src="
                    'https://coderhouse-ecommerce.s3.amazonaws.com/' +
                    props.row.product.fotos[0]
                  "
                />
              </q-avatar>
            </q-td>
            <q-td>
              <q-truncate>
                {{ props.row.product.nombre }}
              </q-truncate>
            </q-td>
            <q-td>
              <q-truncate>{{ props.row.product.descripcion }}</q-truncate>
            </q-td>
            <q-td>{{ props.row.qty }}</q-td>
            <q-td>{{ "$ " + props.row.product.precio }}</q-td>
            <q-td>
              <q-btn
                @click="removeItem(props.row)"
                flat
                round
                color="red"
                icon="delete"
              />
            </q-td>
          </q-tr>
        </template>
        <template v-slot:bottom-row>
          <q-tr v-if="rows.length > 0">
            <q-td colspan="100%">
              <sapn> <b>Total:</b> $ {{ total }}</sapn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <div style="width: 100% flex justify-right">
        <q-btn
          class="q-mt-md"
          @click="buy"
          color="primary"
          label="Comprar"
          :loading="btnLoading"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      btnLoading: false,
      loading: false,
      total: 0,
      rows: [],
      columns: [
        {
          name: "imagen",
          required: true,
          label: "",
          align: "left",
          sortable: false,
        },
        {
          name: "nombre",
          required: true,
          label: "Nombre",
          align: "left",
        },
        {
          name: "descripcion",
          label: "Descripción",
          align: "left",
        },
        {
          name: "qty",
          label: "Cantidad",
          field: "qty",
          align: "left",
        },
        {
          name: "precio",
          label: "Precio",
          align: "left",
        },
        {
          name: "remove",
          label: "",
        },
      ],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.loading = true;
      this.$axios({
        url: "/api/cart",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          this.rows = res.data.data.products;
          this.total = res.data.data.products.reduce((acc, cur) => {
            return acc + cur.product.precio * cur.qty;
          }, 0);
          this.loading = false;
        })
        .catch((err) => {
          this.rows = [];
          this.loading = false;
        });
    },

    async buy() {
      this.btnLoading = true;
      await this.$axios
        .post(
          "/api/cart/submit",
          { products: "brian" },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.$q.notify({
            position: "bottom-right",
            color: "positive",
            message: "Cart has been submitted",
          });
          this.btnLoading = false;
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            position: "bottom-right",
            color: "negative",
            message: "Cart has not been submitted",
          });
          this.btnLoading = false;
        });
    },

    async removeItem(item) {
      this.btnLoading = true;

      const body = {
        product: item.product._id,
        qty: item.qty,
      };
      console.log(body);
      await this.$axios
        .post("/api/cart/delete", body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.$q.notify({
            position: "bottom-right",
            color: "positive",
            message: "Item has been removed from cart",
          });
          this.btnLoading = false;
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            position: "bottom-right",
            color: "negative",
            message: "Item has not been removed from cart",
          });
          this.btnLoading = false;
        });
    },
  },
};
</script>
