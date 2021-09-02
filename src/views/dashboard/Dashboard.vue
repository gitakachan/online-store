<template>
  <div>dashboard</div>
</template>
<script>
export default {
  name: "Dashboard",
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
