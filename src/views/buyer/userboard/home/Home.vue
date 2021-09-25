<template>
  <div>
    <div class="position-relative">
      <div class="content position-absolute top-50 start-50 translate-middle">
        <h1 class="eng fw-lighter text-white text-center">
          / Make your <span class="text-primary">next</span> trip awesome /
        </h1>
        <router-link
          to="/store/about"
          class="d-block text-white fw-lighter text-center text-decoration-none mt-4"
          >關於我們</router-link
        >
        <router-link
          to="/store/vnIntro"
          class="d-block text-white fw-lighter text-center text-decoration-none mt-2"
          >越南簡介</router-link
        >
        <router-link
          to="/store/products"
          class="d-block text-white fw-lighter text-center text-decoration-none mt-2"
          >查看行程</router-link
        >
      </div>
      <div class="d-xl-none">
        <video autoplay muted loop class="mobile vw-100 vh-100">
          <source
            src="https://media.githubusercontent.com/media/gitakachan/online-store/main/src/assets/videos/vietnamMobile.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="d-none d-xl-block">
        <video autoplay muted loop class="laptop vw-100 vh-100">
          <source
            src="https://media.githubusercontent.com/media/gitakachan/online-store/main/src/assets/videos/vietnam.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.content {
  z-index: 100;
  h1 {
    padding: 10px;
  }

  a:hover {
    animation: text 0.5s infinite alternate;
  }
}

video {
  object-fit: cover;
  vertical-align: bottom;
}

@keyframes text {
  0% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(-4px);
  }
}
</style>
