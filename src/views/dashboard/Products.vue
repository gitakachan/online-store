<template>
  <div>
    <div class="text-end my-2">
      <button
        @click="$refs.productModal.showModal" 
        class=" btn btn-primary btn-sm"
        type="button"
      >
        新增產品
      </button>
    </div>

    <product-modal ref="productModal"></product-modal>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>類別</th>
          <th class="name">產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>上架</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td class="name">{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-success btn-sm m-1">
              編輯
            </button>

            <button class="btn btn-outline-danger btn-sm m-1">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ProductModal from "./ProductModal.vue";

export default {
  components: { ProductModal },
  name: "Products",
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    // getPage() {
    //   const api = `${process.env.VUE_APP_API}api/:api_path/admin/products?page=:page`;
    //   this.axios.post(api, this.user).then((response) => {
    //     if (response.data.success) {
    //       const { token, expired } = response.data;
    //       document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    //       this.$router.push("/dashboard/products");
    //     }
    //   });
    // },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  tr {
    display: flex;
    th,
    td {
      flex: 1;
      &.name {
        flex: 3;
      }
    }
  }
}
</style>
