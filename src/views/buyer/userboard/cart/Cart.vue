<template>
  <div>
    <loading :active="isLoading"></loading>
    <div class="container-fluid">
      <h1>購物車</h1>
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">商品</th>
            <th scope="col">單價</th>
            <th scope="col">數量</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td @click="backToProduct(item.product_id)">
              {{ item.product.title }}
            </td>
            <td>{{ item.product.price }}</td>
            <td>
              <div class="input-group">
                <input
                  v-model="item.qty"
                  @change="updateCart(item.id, item.qty)"
                  min="1"
                  type="number"
                  class="form-control"
                  placeholder="數量"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span class="input-group-text" id="basic-addon1">{{
                  item.product.unit
                }}</span>
              </div>
            </td>
            <td>
              <button @click="deleteCart(item.id)" class="btn text-danger">
                <i class="bi bi-cart-dash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-end">總計：NTD {{ total.toLocaleString() }} 元</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [],
      total: 0,
      final_total: 0,
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.cartItems = response.data.data.carts;
          this.total = response.data.data.total;
          this.final_total = response.data.data.final_total;
        }
      });
    },
    updateCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios
        .put(api, { data: { product_id: id, qty: qty } })
        .then((response) => {
          if (response.data.success) {
            this.getCart();
          }
        });
    },
    deleteCart(id) {
      console.log(id);
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.getCart();
        }
      });
    },
    backToProduct(id) {
      this.$router.push(`/store/products/${id}`);
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped></style>
