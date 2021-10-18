<template>
  <div class="row">
    <div
      class="product mb-4"
      :class="gridItemClass"
      v-for="item in target"
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
            :alt="`產品圖片：${item.title}`"
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
              class="
                price
                d-flex
                align-items-end
                flex-md-column-reverse
                align-items-md-start
              "
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
              <span class="badge bg-primary-d-200">{{ item.tag }}</span>
            </div>
            <div class="label mt-2 d-flex align-items-center">
              <span class="badge bg-primary-d-400 me-2">{{ item.area }}</span>
              <span class="badge bg-primary-d-600 me-2">{{
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
</template>
<script>
import imgSquareMixin from "@/mixins/imgSquareMixin.js";
import priceStyleMixin from "@/mixins/priceStyleMixin.js";
import likedProductMixin from "@/mixins/likedProductMixin.js";
export default {
  name: "ProductList",
  mixins: [imgSquareMixin, priceStyleMixin, likedProductMixin],
  props: {
    target: {
      type: Array,
      default() {
        return [];
      },
    },
    gridItemClass: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      imgRefs: [],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/helpers/_myVariables.scss";
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
