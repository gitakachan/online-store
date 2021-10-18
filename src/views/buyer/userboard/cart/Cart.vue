<template>
  <div>
    <Loading :active="isLoading" />
    <ToastList />
    <div class="container min-vh-80">
      <CenteredHeader :title="'購物車'" />
      <div class="d-flex justify-content-center mt-4">
        <div v-show="cartItems.length === 0">
          <h2 class="mb-3">購物車內尚無任何商品</h2>
          <router-link
            class="text-decoration-none d-block text-center"
            to="/store/products"
            ><i class="bi bi-arrow-up-right"></i>回去逛逛</router-link
          >
        </div>
        <table
          v-show="cartItems.length !== 0"
          class="table align-middle table-fit"
        >
          <thead>
            <tr>
              <th scope="col">商品</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="item-title" @click="backToProduct(item.product_id)">
                {{ item.product.title }}
              </td>
              <td class="num">{{ item.product.price.toLocaleString() }}</td>
              <td>
                <div class="input-group">
                  <input
                    v-model="item.qty"
                    @change="updateCart(item.id, item.qty)"
                    min="1"
                    type="number"
                    class="form-control shadow-none num"
                    placeholder="數量"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text bg-primary" id="basic-addon1">{{
                    item.product.unit
                  }}</span>
                </div>
              </td>
              <td>
                <button @click="deleteCart(item.id)" class="btn text-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td class="no-border" colspan="4">
                <h3 class="text-end">
                  小計：
                  <span class="num"> NT {{ total.toLocaleString() }} 元</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td class="no-border" colspan="4">
                <div class="text-end">
                  <router-link
                    to="/store/checkout"
                    tag="button"
                    type="button"
                    class="btn btn-info"
                  >
                    <i class="bi bi-cart-check"></i> 去結帳
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import CenteredHeader from "@/components/buyer/CenteredHeader.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";

export default {
  name: "Cart",
  inject: ["emitter", "resMsg"],
  components: { CenteredHeader, ToastList },
  data() {
    return {
      cartItems: [],
      total: 0,
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

          // 傳送給navbar icon
          this.emitter.emit("cartLength", this.cartItems.length);
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
            this.resMsg(response, "更新");
          }
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.getCart();
          this.resMsg(response, "刪除");
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
    &.item-title {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
