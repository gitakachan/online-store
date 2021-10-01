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

    <div class="row py-5">
      <div
        class="product col-12 col-md-4 mb-4"
        v-for="item in likedList"
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
                <span class="badge bg-danger me-2">{{ item.area }}</span>
                <span class="badge bg-success me-2">{{ item.category }}</span>
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
    <loading :active="isLoading"></loading>
    <toast-list></toast-list>
  </div>
</template>
<script>
import ToastList from "@/components/responseMessages/ToastList.vue";
import imgSquareMixin from "@/mixins/imgSquareMixin.js";
import priceStyleMixin from "@/mixins/priceStyleMixin.js";
import likedProductMixin from "@/mixins/likedProductMixin.js";
export default {
  name: "Liked",
  mixins: [imgSquareMixin, priceStyleMixin, likedProductMixin],
  inject: ["emitter"],
  components: { ToastList },
  data() {
    return {
      isLoading: false,
      products: [],
      imgRefs: [],
    };
  },
  computed: {
    likedList() {
      return this.products.filter((item) => {
        return this.likedStorage.indexOf(item.id) > -1;
      });
    },
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
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
<style lang="scss" scoped>
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
