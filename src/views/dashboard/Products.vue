<template>
  <div>
    <div class="text-end my-2">
      <button
        @click="openModal(true)"
        class=" btn btn-primary btn-sm"
        type="button"
      >
        新增產品
      </button>
    </div>

    <product-modal
      :product="tempProduct"
      @updateProduct="updateProduct"
      ref="productModal"
    ></product-modal>
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
            <button
              @click="openModal(false, item)"
              class="btn btn-outline-success btn-sm m-1"
            >
              編輯
            </button>

            <button
              @click="openDelModal(item)"
              class="btn btn-outline-danger btn-sm m-1"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <delete-modal
      @deleteProduct="deleteProduct"
      :product="tempProduct"
      ref="delModal"
    ></delete-modal>
  </div>
</template>
<script>
import ProductModal from "./ProductModal.vue";
import DeleteModal from "./DeleteModal.vue";

export default {
  components: { ProductModal, DeleteModal },
  name: "Products",
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false, //判斷是否為新增產品
    };
  },
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        //若為新增
        this.tempProduct = { imagesUrl: [] };
      } else {
        //若為編輯
        //this.tempProduct = { ...item };
        this.tempProduct = JSON.parse(JSON.stringify(item)); //深拷貝 （imagesUrl為陣列，使item為多層物件）
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempProduct = JSON.parse(JSON.stringify(item));
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
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
    updateProduct(item) {
      this.tempProduct = item; //將內部傳來的參數存為tempProduct

      //新增產品
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";

      //編輯產品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      this.axios[httpMethod](api, { data: this.tempProduct }).then(
        (response) => {
          if (response.data.success) {
            this.$refs.productModal.hideModal(); //關閉modal
            this.getProducts(); //取得最新products資料
          }
          console.log(response.data.message);
        }
      );
    },
    deleteProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.$refs.delModal.hideModal();
          this.getProducts();
        }
      });
    },
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
