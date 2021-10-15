<template>
  <div>
    <nav-bar class="sticky-top"></nav-bar>
    <div>
      <router-view></router-view>
    </div>
    <user-footer></user-footer>
    <back-to-top-btn></back-to-top-btn>
  </div>
</template>
<script>
import mitt from "mitt"

import NavBar from "@/components/buyer/NavBar.vue"
import UserFooter from "../../../components/buyer/UserFooter.vue"
import BackToTopBtn from "../../../components/buyer/BackToTopBtn.vue"
const emitter = mitt()

export default {
  name: "Dashboard",
  components: {
    NavBar,
    UserFooter,
    BackToTopBtn
  },
  provide () {
    // 讓內部子組件都可使用emitter，避免重複引入
    return {
      emitter,
      resMsg: this.resMsg
    }
  },
  methods: {
    resMsg (response, title = "更新") {
      if (response.data.success) {
        emitter.emit("pushMessage", {
          style: "success",
          title: `${title}成功`
        })
      } else {
        let msg = response.data.message
        if (typeof msg === "string") {
          msg = [msg]
        }
        emitter.emit("pushMessage", {
          style: "danger",
          title: `${title}失敗`,
          content: msg.join("、")
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
