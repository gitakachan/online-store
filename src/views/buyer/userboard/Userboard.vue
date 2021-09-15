<template>
  <div>
    <nav-bar></nav-bar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import mitt from "mitt";
const emitter = mitt();

import NavBar from "@/components/buyer/NavBar.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    ToastList,
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
  },
};
</script>
<style lang="scss" scoped></style>
