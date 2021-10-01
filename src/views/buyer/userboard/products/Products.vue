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
            <!-- 注意：頁數是從1開始，但陣列是從0開始 -->
            <product-list
              :target="filterProducts[currentPage - 1]"
              :gridItemClass="['col-12', 'col-md-6']"
            ></product-list>
          </div>
        </div>
      </div>
      <loading :active="isLoading"></loading>
      <pagination :page="pagination" @updatePage="updatePage"></pagination>
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
      products: [], //暫存每次遠端資料回傳的products
      isLoading: false,
      selectArea: "所有區域",
      selectCategory: "所有分類",
      newProducts: [],
      currentPage: 0,
      totalPages: 0,
      totalProducts: [], //獲取每頁的products後全部裝在totalProducts
    };
  },
  computed: {
    filterProducts() {
      this.currentPage = 1;
      this.newProducts = []; //將符合filter的product分配到各自的分頁（最終回傳的數據）
      let tempProducts = []; //裝符合filter的product(無分頁)
      tempProducts = this.totalProducts.filter((item) => {
        if (
          this.selectArea === "所有區域" &&
          this.selectCategory === "所有分類"
        ) {
          return item;
        } else if (
          this.selectArea === "所有區域" &&
          this.selectCategory !== "所有分類"
        ) {
          return item.category === this.selectCategory;
        } else if (
          this.selectArea !== "所有區域" &&
          this.selectCategory === "所有分類"
        ) {
          return item.area === this.selectArea;
        } else if (
          this.selectArea !== "所有區域" &&
          this.selectCategory !== "所有分類"
        ) {
          return (
            item.area == this.selectArea && item.category == this.selectCategory
          );
        }
      });
      tempProducts.forEach((item, i) => {
        if (i % 4 == 0) {
          this.newProducts.push([]); //每4筆資料新增一頁
        }
        const page = parseInt(i / 4); //這筆資料該放在第幾頁（parseInt回傳整數）
        this.newProducts[page].push(item);
      });
      return this.newProducts;
    },
    pagination() {
      //傳入pagination組件
      return {
        current_page: this.currentPage,
        total_pages: this.filterProducts.length,
      };
    },
  },
  watch: {
    //mounted後會修改totalPages，看總頁數減去已獲取的第一頁後還有幾頁，就跑幾圈獲取剩餘的每頁資料，全部加入totalProducts
    totalPages() {
      for (let i = 2; i <= this.totalPages; i++) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${i}`;
        this.isLoading = true;
        this.axios.get(api).then((response) => {
          this.isLoading = false;
          if (response.data.success) {
            let products = response.data.products;
            //避免imagesUrl為undefined
            products.forEach((element) => {
              if (element.imagesUrl == undefined) {
                element.imagesUrl = [];
              }
            });
            this.totalProducts = [...this.totalProducts, ...products];
          }
        });
      }
    },
  },
  methods: {
    setArea(item) {
      this.selectArea = item;
    },
    setCategory(item) {
      this.selectCategory = item;
    },
    updatePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    //先獲取第一頁資料
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=1`;
    this.isLoading = true;
    this.axios.get(api).then((response) => {
      this.isLoading = false;
      if (response.data.success) {
        this.totalPages = response.data.pagination.total_pages; //總共有幾頁每頁十筆的資料
        this.currentPage = 1;
        let products = response.data.products;
        //避免imagesUrl為undefined
        products.forEach((element) => {
          if (element.imagesUrl == undefined) {
            element.imagesUrl = [];
          }
        });
        this.totalProducts = [...products]; //加入第一頁獲得的資料
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>
