<template>
  <div class="container">
    <CenteredHeader :title="'收藏列表'" />
    <ProductList :target="likedList" :gridItemClass="['col-12', 'col-md-4']" />
    <div v-show="this.likedList.length === 0" class="pt-5 pb-8 text-center">
      <h2 class="pb-4">目前尚無收藏的商品</h2>
      <h3>
        <router-link to="/store/products" class="text-info"
          ><i class="bi bi-arrow-up-right"></i> 回去逛逛</router-link
        >
      </h3>
    </div>
    <Loading :active="isLoading" />
    <ToastList />
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import ProductList from "@/components/buyer/ProductList.vue";
import CenteredHeader from "@/components/buyer/CenteredHeader.vue";
import likedProductMixin from "@/mixins/likedProductMixin.js";

export default {
  name: "Liked",
  mixins: [likedProductMixin], // likedList更新的依據
  inject: ["emitter"],
  components: { ToastList, ProductList, CenteredHeader },
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  computed: {
    likedList() {
      // 依照加入收藏列表的先後順序排列
      const arr = [];
      this.likedStorage.forEach((likedItem) => {
        this.products.forEach((productItem, index) => {
          if (productItem.id === likedItem) {
            arr.push(this.products[index]);
          }
        });
      });
      return arr.reverse(); // (後加入在前)
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

          // 避免imagesUrl為undefined
          this.products.forEach((element) => {
            if (element.imagesUrl === undefined) {
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
