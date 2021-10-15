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
      <div class="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1563354860-799d15199ac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          class="d-block w-100"
          alt="惠安古城"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>惠安古城</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1587890799275-ba5614bf3d2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          class="d-block w-100"
          alt="美奈沙丘"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>美奈沙丘</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1602646993776-5dd8e166e6fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          class="d-block w-100"
          alt="胡志明市咖啡公寓"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>胡志明市咖啡公寓</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1605645854141-9f81b7f47fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2590&q=80"
          class="d-block w-100"
          alt="下龍灣"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>下龍灣</h5>
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
  name: "",
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.carousel-item img {
  height: 60vh;
  object-fit: cover;
}
</style>
