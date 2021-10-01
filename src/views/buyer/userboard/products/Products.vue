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
            <div class="row">
              <div
                class="product col-12 col-md-6 mb-4"
                v-for="item in products"
                :key="item.id"
              >
                <div class="card gray-box-shadow rounded-0 h-100">
                  <router-link
                    class="img-container position-relative"
                    :to="{
                      path: '/store/products/' + `${item.id}`,
                    }"
                  >
                    <img
                      :src="item.imagesUrl[0]"
                      class="align-bottom card-img-top rounded-0"
                      alt="產品圖片"
                      :ref="setImgRef"
                    />
                  </router-link>
                  <div class="card-body">
                    <h3 class="mb-2">{{ item.title }}</h3>
                    <div class="card-text">
                      <div class="description mb-2">
                        {{ item.short_description }}
                      </div>
                      <div
                        class="price d-flex align-items-end flex-md-column-reverse align-items-md-start"
                      >
                        <div
                          v-html="priceStyle(item.price, item.unit)"
                          class="me-3 fs-4"
                        ></div>
                        <div
                          v-html="priceStyle(item.origin_price, item.unit)"
                          class="text-decoration-line-through text-secondary"
                        ></div>
                      </div>
                      <div class="tag mb-3">
                        <span class="badge bg-warning">{{ item.tag }}</span>
                      </div>
                      <div class="label mt-2 d-flex align-items-center">
                        <span class="badge bg-danger me-2">{{
                          item.area
                        }}</span>
                        <span class="badge bg-success me-2">{{
                          item.category
                        }}</span>
                        <a
                          @click.prevent="addLiked(item.id)"
                          class="add-liked ms-auto me-2"
                          ><i
                            :class="likedStatus(item.id)"
                            class="bi bi-heart-fill text-white"
                          ></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer p-0">
                    <div class="fw-bold w-100">
                      <router-link
                        :to="{
                          path: `/store/products/${item.id}`,
                        }"
                        tag="button"
                        class="btn btn-primary w-100 rounded-0"
                      >
                        <i class="bi bi-eye"></i> 看詳細行程
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

import Carousel from "../products/Carousel.vue";
import ProductsBreadCrumb from "../products/ProductsBreadCrumb.vue";
import Dropdown from "../products/Dropdown.vue";
import SideBar from "../products/SideBar.vue";

import imgSquareMixin from "@/mixins/imgSquareMixin.js";
import priceStyleMixin from "@/mixins/priceStyleMixin.js";
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
  },
  mixins: [imgSquareMixin, priceStyleMixin, likedProductMixin],
  inject: ["emitter"],
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      imgRefs: [],
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
<style lang="scss" scoped>
@import "~@/assets/scss/helpers/myVariables.scss";
.product .card {
  .img-container {
    &::before {
      content: "";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
    img {
      object-fit: cover;
    }
    &:hover {
      &::before {
        content: "點我看詳細行程";
        font-size: 20px;
        font-weight: 100;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.2s ease-in;
      }
    }
  }
  .tag {
    width: 100%;
    height: 1rem;
  }
}
</style>
