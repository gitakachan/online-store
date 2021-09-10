<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/store/home" class="navbar-brand" href="#"
          >Store</router-link
        >
        <button
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
            <router-link to="/store/home" class="nav-link" href="#"
              >首頁</router-link
            >
            <router-link to="/store/about" class="nav-link" href="#"
              >關於</router-link
            >
            <router-link to="/store/products" class="nav-link" href="#"
              >產品</router-link
            >
            <router-link to="/store/cart" class="nav-link" href="#"
              >購物車</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.axios
        .post(api)
        .then((response) => {
          if (response.data.success) {
            this.$router.push("/login"); //登出成功跳轉至登入頁面
          }
        })
        .catch((e) => {
          console.log(e);
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
