<template>
  <div class="container">
    <div class="header pt-5">
      <div class="position-relative m-4">
        <div class="progress" style="height: 1px;">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100%;"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h1
          class="position-absolute top-0 start-50 bg-white px-3 translate-middle  rounded-pill"
        >
          收藏列表
        </h1>
      </div>
    </div>
    <product-list
      class="py-5"
      :target="likedList"
      :gridItemClass="['col-12', 'col-md-4']"
    ></product-list>
    <div v-show="this.likedList.length === 0" class="pt-5 pb-8 text-center">
      <h2 class="pb-4">目前尚無收藏的商品</h2>
      <h3>
        <router-link to="/store/products" class="text-info"
          ><i class="bi bi-arrow-up-right"></i> 去逛逛</router-link
        >
      </h3>
    </div>
    <loading :active="isLoading"></loading>
    <toast-list></toast-list>
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import ProductList from "@/components/buyer/ProductList.vue";

import likedProductMixin from "@/mixins/likedProductMixin.js";
export default {
  name: "Liked",
  mixins: [likedProductMixin], //likedList更新的依據
  inject: ["emitter"],
  components: { ToastList, ProductList },
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  computed: {
    likedList() {
      //依照加入收藏列表的先後順序排列
      let arr = [];
      this.likedStorage.forEach((likedItem) => {
        this.products.forEach((productItem, index) => {
          if (productItem.id === likedItem) {
            arr.push(this.products[index]);
          }
        });
      });
      return arr.reverse(); //(後加入在前)
    },
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
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
<style lang="scss" scoped></style>
