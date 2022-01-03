<template>
  <q-card class="q-ma-md box" style="width: 300px">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      height="300px"
      infinite
    >
      <q-carousel-slide
        v-for="(slide, index) in props.row.fotos"
        :key="index"
        :name="index + 1"
        :img-src="'https://coderhouse-ecommerce.s3.amazonaws.com/' + slide"
      ></q-carousel-slide>
    </q-carousel>
    <q-list dense>
      <q-item v-for="col in props.cols" :key="col.name">
        <q-item-section>
          <q-item-label>{{ col.label }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ col.value }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-card-actions>
      <q-btn flat @click="addProduct(props.row._id)"> Add to Cart </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["props"],
  data() {
    return {
      getShade: false,
      slide: 1,
    };
  },
  methods: {
    addProduct(id) {
      const token = localStorage.getItem("token");
      this.$axios({
        method: "put",
        url: "/api/cart/add",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          product: id,
          qty: 1,
        },
      })
        .then(() => {
          this.$q.notify({
            position: "bottom-right",
            color: "positive",
            message: "Added to cart",
          });
        })
        .catch((err) => {
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
<style scoped>
.box {
  transition: box-shadow 0.3s;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  float: center;
}
.box:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>
