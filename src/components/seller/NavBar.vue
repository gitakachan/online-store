<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/dashboard/products" class="navbar-brand" href="#"
          >後台管理</router-link
        >
        <button
          ref="collapseBtn"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex w-100">
            <router-link
              v-for="item in navItem"
              :key="item.path"
              :to="`/dashboard/${item.path}`"
              @click="collapse"
              class="nav-link"
              href="#"
              >{{ item.title }}</router-link
            >
            <a class="nav-link ms-md-auto" href="#" @click.prevent="logOut"
              >登出</a
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
  data() {
    return {
      navItem: [
        {
          path: "products",
          title: "產品",
        },
        {
          path: "orders",
          title: "訂單",
        },
        {
          path: "coupons",
          title: "優惠券",
        },
      ],
    };
  },
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push("/login"); // 登出成功跳轉至登入頁面
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
a.nav-link.router-link-active {
  color: #000;
}
</style>
