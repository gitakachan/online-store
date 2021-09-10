<template>
  <div>
    <div class="container">
      <div class="row my-4">
        <div
          v-for="item in products"
          :key="item.id"
          class="product-container col-6 col-md-4 col-lg-3 my-2"
        >
          <div class="product">
            <div class="card">
              <div class="card-body">
                <div class="img-container">
                  <!-- <img
                    :src="item.imagesUrl[0]"
                    class="card-img-top"
                    alt="產品圖片"
                  /> -->
                </div>
                <p class="card-text">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading :active="isLoading"></loading>
    <pagination :page="pagination" @updatePage="getProducts"></pagination>
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import Pagination from "@/components/pagination/Pagination.vue";
export default {
  name: "Products",
  components: { Pagination, ToastList },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        console.log(response);
        this.isLoading = false;
        if (response.data.success) {
          this.pagination = response.data.pagination;
          this.products = response.data.products;
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped></style>
