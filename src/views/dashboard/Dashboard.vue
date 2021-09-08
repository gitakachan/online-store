<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import mitt from "mitt";
const emitter = mitt();

import NavBar from "./NavBar.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    ToastList,
  },
  provide() { //讓內部子組件都可使用emitter，避免重複引入
    return {
      emitter,
    };
  },
  mounted() {
    //得到名为hexToken的cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common["Authorization"] = token;
    const api = `${process.env.VUE_APP_API}api/user/check`; //檢查用戶是否仍持續登入
    this.axios.post(api).then((response) => {
      if (!response.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>
