<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-primary shadow-sm">
      <div class="container-fluid">
        <router-link to="/store/home" class="navbar-brand" href="#"
          ><img class="logo" src="~@/assets/imgs/logo.png" alt=""
        /></router-link>

        <button
          ref="collapseBtn"
          class="navbar-toggler shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="toggler-icon bi bi-list text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex justify-content-end w-100">
            <router-link
              to="/store/home"
              @click="collapse"
              class="nav-link"
              href="#"
              >首頁</router-link
            >
            <router-link
              to="/store/products"
              @click="collapse"
              class="nav-link"
              href="#"
              >行程＆票券</router-link
            >
            <router-link
              to="/store/vnIntro"
              @click="collapse"
              class="nav-link"
              href="#"
              >越南新手旅遊攻略</router-link
            >
            <router-link
              to="/store/about"
              @click="collapse"
              class="nav-link"
              href="#"
              >關於我們</router-link
            >
            <router-link
              to="/store/cart"
              @click="collapse"
              class="nav-link"
              href="#"
              >購物車</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import navBarCollapse from "@/mixins/navBarCollapse.js";
export default {
  name: "NavBar",
  mixins: [navBarCollapse],
};
</script>
<style lang="scss" scoped>
a.nav-link.router-link-active {
  color: #000;
}
.logo {
  width: 100px;
}
.toggler-icon {
  text-shadow: #444 1px 0.3px 0.6px;
}
</style>
