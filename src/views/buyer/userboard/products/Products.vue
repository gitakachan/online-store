<template>
  <div>
    <carousel></carousel>
    <div class="container my-4">
      <products-bread-crumb
        :area="selectArea"
        :category="selectCategory"
      ></products-bread-crumb>
      <div class="row gx-0 mb-5">
        <!-- 手機dropdown -->
        <div class="col-12 d-md-none mb-2">
          <dropdown
            :selectArea="selectArea"
            :selectCategory="selectCategory"
            @setArea="setArea"
            @setCategory="setCategory"
          ></dropdown>
        </div>
        <!-- 桌機side-bar -->
        <div class="d-none d-md-block col-sm-3">
          <side-bar
            :selectArea="selectArea"
            :selectCategory="selectCategory"
            @setArea="setArea"
            @setCategory="setCategory"
          ></side-bar>
        </div>

        <!-- 商品列 -->
        <div class="col-12 col-md-9">
          <div class="container">
            <product-list
              :target="products"
              :gridItemClass="['col-12', 'col-md-6']"
            ></product-list>
          </div>
        </div>
      </div>
      <loading :active="isLoading"></loading>
      <pagination :page="pagination" @updatePage="getProducts"></pagination>
      <toast-list></toast-list>
    </div>
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import ProductList from "@/components/buyer/ProductList.vue";

import Carousel from "../products/Carousel.vue";
import ProductsBreadCrumb from "../products/ProductsBreadCrumb.vue";
import Dropdown from "../products/Dropdown.vue";
import SideBar from "../products/SideBar.vue";

import likedProductMixin from "@/mixins/likedProductMixin.js";

export default {
  name: "Products",
  components: {
    Pagination,
    ToastList,
    Carousel,
    ProductsBreadCrumb,
    Dropdown,
    SideBar,
    ToastList,
    ProductList,
  },
  mixins: [likedProductMixin],
  inject: ["emitter"],
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      selectArea: "所有區域",
      selectCategory: "所有分類",
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
    setArea(item) {
      this.selectArea = item;
    },
    setCategory(item) {
      this.selectCategory = item;
    },
  },
  mounted() {
    this.emitter.on("setOption", (data) => {
      this.selectArea = data.area;
      this.selectCategory = data.category;
      console.log(data);
    });
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped></style>
