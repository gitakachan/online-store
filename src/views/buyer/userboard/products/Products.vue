<template>
  <div>
    <div class="container">
      <div class="row my-4 ">
        <div
          class="product col-6 col-md-4 col-lg-3 my-2 "
          v-for="item in products"
          :key="item.id"
        >
          <div>
            <div class="card">
              <img
                :src="item.imagesUrl[0]"
                class="align-bottom card-img-top"
                alt="產品圖片"
                :ref="setImgRef"
              />
              <div class="card-body">
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
import imgSquareMixin from "@/mixins/imgSquareMixin.js";
export default {
  name: "Products",
  components: { Pagination, ToastList },
  mixins: [imgSquareMixin],
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      imgRefs: [],
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.pagination = response.data.pagination;
          this.products = response.data.products;

          //避免imagesUrl為undefined
          this.products.forEach((element) => {
            if (element.imagesUrl == undefined) {
              element.imagesUrl = [];
            }
          });
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
img {
  object-fit: cover;
}
</style>
