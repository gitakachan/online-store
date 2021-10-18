<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <RouterView />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/seller/NavBar.vue";
import mitt from "mitt";
const emitter = mitt();

export default {
  name: "Dashboard",
  components: {
    NavBar,
  },
  provide() {
    return {
      emitter,
      resMsg: this.resMsg,
    };
  },
  methods: {
    resMsg(response, title = "更新") {
      if (response.data.success) {
        emitter.emit("pushMessage", {
          style: "success",
          title: `${title}成功`,
        });
      } else {
        let msg = response.data.message;
        if (typeof msg === "string") {
          msg = [msg];
        }
        emitter.emit("pushMessage", {
          style: "danger",
          title: `${title}失敗`,
          content: msg.join("、"),
        });
      }
    },
  },
  created() {
    const token = document.cookie.replace(
      // eslint-disable-next-line
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`; // 檢查用戶是否仍持續登入
    this.axios.post(api).then((response) => {
      if (!response.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>
