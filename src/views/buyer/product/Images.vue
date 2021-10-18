<template>
  <div class="img-container">
    <!-- carousel -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        <div
          v-for="(item, index) in imagesUrl"
          :key="item"
          class="carousel-item"
          :class="{ active: index === isActive }"
        >
          <img
            :ref="setImgRef"
            :src="item"
            class="d-block w-100"
            :alt="`產品圖片：${title}`"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        @click="resetImgSize(), prevClick()"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        @click="resetImgSize(), nextClick()"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- preview imgs-->
    <div class="preview-imgs">
      <div class="row mt-2 d-flex justify-content-center">
        <div v-for="(item, index) in imagesUrl" :key="item" class="col-2">
          <div class="position-relative">
            <span :class="{ mask: index === isActive }"></span>
            <img
              :ref="setImgRef"
              class="w-100 img-fluid"
              :src="item"
              alt="產品圖片縮圖"
              @click="isActive = index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgSquareMixin from "@/mixins/imgSquareMixin.js";
export default {
  name: "Images",
  mixins: [imgSquareMixin],
  props: {
    imagesUrl: {
      required: true,
    },
    title: {
      required: true,
    },
  },
  data() {
    return {
      isActive: 0,
      imgRefs: [],
    };
  },
  methods: {
    prevClick() {
      if (this.isActive !== 0) {
        this.isActive--;
      } else {
        this.isActive = this.imagesUrl.length - 1;
      }
    },
    nextClick() {
      if (this.isActive !== this.imagesUrl.length - 1) {
        this.isActive++;
      } else {
        this.isActive = 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  border: 3px solid rgb(49, 130, 181);
}
</style>
