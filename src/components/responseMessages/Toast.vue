<template>
  <div
    ref="toast"
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <div class="colorLabel rounded me-2" :class="style"></div>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div v-show="msg.content" class="toast-body">{{ msg.content }}</div>
  </div>
</template>
<script>
import Toast from "bootstrap/js/dist/toast";
export default {
  name: "Toast",
  props: {
    msg: {
      required: true
    }
  },
  data () {
    return {};
  },
  computed: {
    style () {
      return `bg-${this.msg.style}`;
    }
  },
  mounted () {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 7000
    });
    toast.show();
  }
};
</script>
<style lang="scss" scoped>
.toast {
  .colorLabel {
    width: 20px;
    height: 20px;
  }
}
</style>
