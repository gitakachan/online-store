<template>
  <div>
    <div>{{ product }}</div>
    <loading :active="isLoading"></loading>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss" scoped></style>
