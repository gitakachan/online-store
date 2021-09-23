<template>
  <div>
    <loading :active="isLoading"></loading>
    <div class="container">
      <h1 class="text-center my-4">結帳</h1>
      <div class="row">
        <div class="col-xl-6">
          <h2 class="text-center">訂單內容</h2>
          <div class="d-flex justify-content-center mt-1">
            <table class="table align-middle table-fit">
              <thead>
                <tr>
                  <th scope="col">商品</th>
                  <th scope="col">單價</th>
                  <th scope="col" class="text-nowrap">數量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td @click="backToProduct(item.product_id)">
                    {{ item.product.title }}
                  </td>
                  <td>{{ item.product.price }}</td>
                  <td>{{ item.qty + item.product.unit }}</td>
                </tr>
                <tr>
                  <td class="no-border" colspan="4">
                    <div class="input-group">
                      <input
                        v-model="code"
                        type="text"
                        class="form-control shadow-none"
                        placeholder="輸入優惠券"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        @click="addCoupon"
                        class="btn btn-outline-secondary shadow-none"
                        type="button"
                        id="button-addon2"
                      >
                        使用優惠券
                      </button>
                    </div>
                    <span
                      :class="[isSuccess ? 'text-success' : 'text-danger']"
                      >{{ codeMessage }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="no-border" colspan="3">
                    <h3
                      class="text-end"
                      :class="{
                        'text-decoration-line-through': useCode,
                        'text-secondary': useCode,
                      }"
                    >
                      總計：NT {{ total.toLocaleString() }} 元
                    </h3>
                  </td>
                </tr>
                <tr v-show="this.useCode">
                  <td class="no-border" colspan="4">
                    <h3 class="text-end">
                      折扣後：NT {{ final_total.toLocaleString() }} 元
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td class="no-border" colspan="3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-xl-6"></div>
      </div>

      <div class="text-end">
        <router-link
          to="/store/checkout"
          tag="button"
          type="button"
          class="btn btn-info"
        >
          <i class="bi bi-check"></i> 送出訂單
        </router-link>
      </div>
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
      useCode: false,
      code: "",
      codeMessage: "",
      isSuccess: false,
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
    backToProduct(id) {
      this.$router.push(`/store/products/${id}`);
    },
    addCoupon() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.axios
        .post(api, {
          data: {
            code: this.code,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.useCode = true;
            this.getCart();
          } else {
            this.useCode = false;
          }
          this.isLoading = false;
          this.isSuccess = response.data.success;
          this.codeMessage = response.data.message;
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
table.table-fit {
  width: auto !important;
  table-layout: auto !important;

  thead th,
  tfoot th {
    width: auto !important;
  }
  tbody td {
    width: auto !important;
    &.no-border {
      border-bottom: none;
    }
  }
}
</style>
