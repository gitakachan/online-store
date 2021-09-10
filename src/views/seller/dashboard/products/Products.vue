<template>
  <div>
    <loading :active="isLoading"></loading>
    <div>
      <add-new @openModal="openModal">
        <template v-slot:title>新增產品</template>
      </add-new>

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
            <td>{{ item.origin_price.toLocaleString() }}</td>
            <td>{{ item.price.toLocaleString() }}</td>
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
      <product-modal
        :product="tempProduct"
        @updateProduct="updateProduct"
        ref="productModal"
      ></product-modal>
      <delete-modal
        @delete="deleteProduct"
        :item="tempProduct"
        ref="delModal"
      ></delete-modal>
      <toast-list></toast-list>
      <pagination @updatePage="getProducts" :page="pagination"></pagination>
    </div>
  </div>
</template>
<script>
import ProductModal from "./ProductModal.vue";
import DeleteModal from "@/components/seller/DeleteModal.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import Pagination from "@/components/seller/Pagination.vue";
import AddNew from "@/components/seller/AddNew.vue";

export default {
  components: { ProductModal, DeleteModal, ToastList, Pagination, AddNew },
  name: "Products",
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false, //判斷是否為新增產品
      isLoading: false,
    };
  },
  inject: ["resMsg"],
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        //若為新增
        this.tempProduct = { imagesUrl: [] };
      } else {
        //若為編輯
        this.tempProduct = JSON.parse(JSON.stringify(item)); //深拷貝 （imagesUrl為陣列，使item為多層物件）
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempProduct = JSON.parse(JSON.stringify(item));
    },
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        } else {
          this.$router.push("/login");
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item; //將內部傳來的參數存為tempProduct
      this.isLoading = true;

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
          this.isLoading = false;
          if (response.data.success) {
            this.getProducts(); //取得最新products資料
          }
          this.resMsg(response);
          this.$refs.productModal.hideModal(); //關閉modal
        }
      );
    },
    deleteProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.isLoading = true;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.$refs.delModal.hideModal();
          this.isLoading = false;
          this.getProducts();
        }
        this.resMsg(response, "刪除");
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
