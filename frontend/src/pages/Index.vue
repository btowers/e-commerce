<template>
  <q-page class="flex justify-center">
    <div class="q-pa-md" style="width: 1400px">
      <div class="row">
        <div class="col-3">
          <q-input
            outlined
            v-model="nombre"
            label="Nombre"
            @keyup.enter="getProducts"
            dense
          />
        </div>
      </div>
      <q-table
        grid
        title="Productos"
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-header
        :pagination="pagination"
        :loading="loading"
        no-data-label="No se encontraron productos..."
      >
        <template v-slot:item="props">
          <ProductCard :props="props" />
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  name: "Index",
  data() {
    return {
      pagination: {
        rowsPerPage: 50,
      },
      nombre: "",
      codigo: "",
      slide: 1,
      precio: { min: 0, max: 10000 },
      rows: [],
      columns: [
        {
          name: "nombre",
          label: "Nombre",
          field: "nombre",
          align: "left",
          required: true,
          sortable: true,
        },
        {
          name: "descripcion",
          align: "center",
          label: "Descripción",
          field: "descripcion",
          sortable: true,
        },
        {
          name: "precio",
          label: "Precio",
          field: "precio",
          format: (val) => `$ ${val}`,
          sortable: true,
        },
        {
          name: "stock",
          label: "Stock",
          field: "stock",
          format: (val) => `${val} un.`,
          sortable: true,
        },
      ],
      loading: false,
    };
  },
  created() {
    this.getProducts();
  },
  watch: {
    precio() {
      this.getProducts();
    },
  },
  methods: {
    async getProducts() {
      this.loading = true;
      let query = {};
      if (this.nombre != "") query["nombre"] = this.nombre;
      if (this.codigo != "") query["codigo"] = this.codigo;
      if (this.precio.min >= 0) query["minPrice"] = this.precio.min;
      if (this.precio.max >= 0) query["maxPrice"] = this.precio.max;

      const path = "/api/products";
      await this.$axios
        .get(path, null, {
          params: query,
        })
        .then((response) => {
          this.rows = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.rows = [];
        });
      this.loading = false;
    },
  },
};
</script>
