<template>
  <div>
    <carousel></carousel>
    <div class="container my-4">
      <products-bread-crumb
        :area="selectArea"
        :category="selectCategory"
      ></products-bread-crumb>
      <div class="row gx-0">
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
                <div class="card h-100">
                  <router-link
                    class="img-container position-relative"
                    :to="{
                      path: '/store/products/' + `${item.id}`,
                    }"
                  >
                    <img
                      :src="item.imagesUrl[0]"
                      class="align-bottom card-img-top"
                      alt="產品圖片"
                      :ref="setImgRef"
                    />
                  </router-link>
                  <div class="card-body">
                    <h3>{{ item.title }}</h3>
                    <div class="card-text">
                      <div class="description">
                        {{ item.short_description }}
                      </div>
                      <div
                        class="price d-flex align-items-end flex-md-column-reverse align-items-md-start"
                      >
                        <div class="me-3 fs-4">
                          {{
                            "NT$" +
                              " " +
                              item.price.toLocaleString() +
                              " " +
                              "/人"
                          }}
                        </div>
                        <div class="text-decoration-line-through">
                          {{
                            "NT$" +
                              " " +
                              item.origin_price.toLocaleString() +
                              " " +
                              "/人"
                          }}
                        </div>
                      </div>
                      <div class="tag">
                        <span class="badge bg-info">{{ item.tag }}</span>
                      </div>
                      <div class="label mt-2 d-flex align-items-center">
                        <span class="badge bg-secondary me-2">{{
                          item.area
                        }}</span>
                        <span class="badge bg-secondary me-2">{{
                          item.category
                        }}</span>
                        <button
                          type="button"
                          class="add-cart btn btn-sm btn-outline-danger me-2 mb-2 ms-auto"
                        >
                          like
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer p-0">
                    <div class="fw-bold w-100">
                      <button class="btn btn-warning w-100 rounded-0">
                        看詳細行程
                      </button>
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
    </div>
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import Pagination from "@/components/pagination/Pagination.vue";

import Carousel from "../products/Carousel.vue";
import ProductsBreadCrumb from "../products/ProductsBreadCrumb.vue";

import imgSquareMixin from "@/mixins/imgSquareMixin.js";
import Dropdown from "../products/Dropdown.vue";
import SideBar from "../products/SideBar.vue";

export default {
  name: "Products",
  components: {
    Pagination,
    ToastList,
    Carousel,
    ProductsBreadCrumb,
    Dropdown,
    SideBar,
  },
  mixins: [imgSquareMixin],
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
.img-container {
  &::before {
    content: "";
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
      background-color: rgba(0, 0, 0, 0.3);
      transition: background-color, 0.2s ease-in;
    }
  }
}
.tag {
  width: 100%;
  height: 1rem;
}
</style>
