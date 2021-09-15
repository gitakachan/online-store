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
        <div class="col-12 d-md-none mb-4">
          <div class="d-flex">
            <!-- 區域 -->
            <div class="dropdown me-3">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ selectArea }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li v-for="item in areas" :key="item.id">
                  <button
                    type="button"
                    @click="setArea(item)"
                    class="dropdown-item"
                  >
                    {{ item.title }}
                  </button>
                </li>
              </ul>
            </div>
            <!-- 分類 -->
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ selectCategory }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li v-for="item in categories" :key="item.id">
                  <button
                    type="button"
                    @click="setCategory(item)"
                    class="dropdown-item"
                  >
                    {{ item.title }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 d-md-none mb-4"></div>
        <!-- 桌機side-bar -->
        <div class="d-none d-md-block col-sm-3">
          <!-- 區域 -->
          <div class="card me-5 mb-4">
            <ul class="area-side-bar list-group list-group-flush">
              <li
                v-for="item in areas"
                :key="item.id"
                class="list-group-item"
                @click="setArea(item)"
                :class="{ selected: selectArea === item.title }"
              >
                {{ item.title }}
              </li>
            </ul>
          </div>
          <!-- 分類 -->
          <div class="card me-5">
            <ul class="category-side-bar list-group list-group-flush">
              <li
                v-for="item in categories"
                :key="item.id"
                class="list-group-item"
                @click="setCategory(item)"
                :class="{ selected: selectCategory === item.title }"
              >
                {{ item.title }}
              </li>
            </ul>
          </div>
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
                <div>
                  <div class="card">
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
                      <div class="position-absolute bottom-0 end-0 d-flex">
                        <button
                          type="button"
                          class="add-cart btn btn-sm btn-outline-danger me-2 mb-2 flex-grow-1"
                        >
                          like
                        </button>
                        <button
                          type="button"
                          class="add-cart btn btn-sm btn-outline-warning me-2 mb-2 flex-grow-1"
                        >
                          cart
                        </button>
                      </div>
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
                        <div class="label mt-2">
                          <span class="badge bg-secondary me-2">{{
                            item.area
                          }}</span>
                          <span class="badge bg-secondary">{{
                            item.category
                          }}</span>
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

export default {
  name: "Products",
  components: { Pagination, ToastList, Carousel, ProductsBreadCrumb },
  mixins: [imgSquareMixin],
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      imgRefs: [],
      selectArea: "所有區域",
      selectCategory: "所有分類",
      areas: [
        {
          id: "all",
          title: "所有區域",
        },
        {
          id: "north",
          title: "北越",
        },
        {
          id: "central",
          title: "南越",
        },
        {
          id: "south",
          title: "中越",
        },
        {
          id: "island",
          title: "離島",
        },
      ],
      categories: [
        {
          id: "all",
          title: "所有分類",
        },
        {
          id: "food",
          title: "餐飲",
        },
        {
          id: "transport",
          title: "交通",
        },
        {
          id: "tour",
          title: "一日遊、多日遊",
        },
        {
          id: "ticket",
          title: "門票",
        },
        {
          id: "outdoor",
          title: "戶外活動",
        },
        {
          id: "experience",
          title: "特殊體驗",
        },
      ],
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
      this.selectArea = item.title;
    },
    setCategory(item) {
      this.selectCategory = item.title;
    },
  },
  mounted() {
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

.selected {
  background-color: rgb(233, 136, 136);
  transition: 0.4s ease;
}
</style>
