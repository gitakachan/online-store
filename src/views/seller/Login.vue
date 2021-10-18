<template>
  <div
    class="vh-100 d-flex align-items-center"
    :style="{
      backgroundImage: 'url(' + require('@/assets/imgs/login/bg.jpeg') + ')',
    }"
  >
    <div class="container py-6">
      <div class="row">
        <div class="col col-md-10 col-xl-8 mx-auto">
          <div class="content px-3 py-5 rounded-3">
            <h1 class="fs-3 pb-3 fw-lighter eng">
              <span class="d-none d-md-inline-block">此頁面</span
              >僅供VNEXT管理員登入
            </h1>
            <h2 class="fs-5 pb-3 fw-lighter">
              若您為訪客：<router-link
                to="/store/home"
                class="text-success fw-normal"
                >點這裡回首頁</router-link
              >
            </h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  :class="{ 'text-danger': error }"
                  >Email<span v-show="error">有誤，請再試一次</span></label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  :class="{ 'border-danger': error }"
                  v-model="user.username"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                  :class="{ 'text-danger': error }"
                  >密碼<span v-show="error">有誤，請再試一次</span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="user.password"
                  :class="{ 'border-danger': error }"
                />
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-primary">登入</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Loading :active="isLoading" />
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoading: false,
      error: false,
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.axios.post(api, this.user).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push("/dashboard/products");
        } else {
          this.error = true;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  letter-spacing: 5px;

  .content {
    background-color: rgba($color: #fff, $alpha: 0.9);
  }
}
</style>
