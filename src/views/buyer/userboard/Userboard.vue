<template>
  <div>
    <nav-bar class="sticky-top"></nav-bar>
    <div>
      <router-view></router-view>
    </div>
    <user-footer></user-footer>
    <button
      @click="scrollToTop"
      class="btn-lg bg-warning m-3 border-0 position-fixed position-absolute bottom-0 end-0"
    >
      <i class="bi bi-chevron-up"></i>
    </button>
  </div>
</template>
<script>
import mitt from "mitt";
const emitter = mitt();

import NavBar from "@/components/buyer/NavBar.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import UserFooter from "../../../components/buyer/UserFooter.vue";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    ToastList,
    UserFooter,
  },
  provide() {
    //讓內部子組件都可使用emitter，避免重複引入
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
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped></style>
