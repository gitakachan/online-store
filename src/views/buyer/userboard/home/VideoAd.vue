<template>
  <div class="position-relative">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h1 class="title text-white text-center">
        Make your next trip awesome
      </h1>
    </div>
    <div class="d-xl-none">
      <video autoplay muted loop class="mobile vw-100 vh-100">
        <source src="@/assets/videos/vietnamMobile.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="d-none d-xl-block">
      <video autoplay muted loop class="laptop vw-100 vh-100">
        <source src="@/assets/videos/vietnam.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoAd",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
h1 {
  padding: 10px;
  box-shadow: 0 0 20px 10px rgb(250, 247, 247);
}
video {
  object-fit: cover;
}
</style>
