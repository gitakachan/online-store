<template>
  <div class="toast-container position-fixed top-0 end-0">
    <toast v-for="(item, index) in messages" :key="index" :msg="item"></toast>
  </div>
</template>
<script>
import Toast from "./Toast.vue";
export default {
  components: { Toast },
  name: "ToastList",
  data() {
    return {
      messages: [],
    };
  },
  inject: ["emitter"],
  mounted() {
    this.emitter.on("pushMessage", (message) => {
      this.messages.push(message);
    });
  },
};
</script>
<style lang="scss" scoped>
.toast-container {
  margin-top: 65px;
}
</style>
