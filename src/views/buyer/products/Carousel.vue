<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in carousel"
        :key="item.title"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img
          :src="require('@/assets/imgs/productsCarousel/' + item.src + '.jpeg')"
          class="d-block w-100"
          :alt="item.title"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      carousel: [
        { title: "惠安古城", src: "hoian" },
        { title: "美奈沙丘", src: "muine" },
        { title: "咖啡公寓", src: "coffeeApartment" },
        { title: "下龍灣", src: "halongbay" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.carousel-item img {
  height: 60vh;
  object-fit: cover;
}
</style>
