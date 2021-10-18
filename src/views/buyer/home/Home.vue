<template>
  <div>
    <div class="position-relative">
      <div class="content position-absolute top-50 start-50 translate-middle">
        <h1 class="eng fw-lighter text-white text-center pb-5">
          / Make your <span class="text-primary">next</span> trip awesome /
        </h1>
        <router-link
          v-for="item in navItem"
          :key="item.path"
          :to="`/store/${item.path}`"
          class="
            d-block
            text-white
            fw-lighter
            text-center text-decoration-none
            mt-2
          "
          >{{ item.title }}</router-link
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
    return {
      navItem: [
        { path: "about", title: "關於我們" },
        { path: "vnIntro", title: "越南新手旅遊攻略" },
        { path: "products", title: "行程＆票券" },
      ],
    };
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
