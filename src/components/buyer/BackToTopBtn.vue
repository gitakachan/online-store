<template>
  <div class="position-fixed position-absolute bottom-0 end-0">
    <button @click="scrollToTop" class="btn-lg bg-light m-3 border-0">
      <i class="bi bi-chevron-up"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "BackToTopBtn",
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped></style>
