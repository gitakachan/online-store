<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a
          class="text-decoration-none text-secondary"
          @click.prevent="goTo('所有區域', '所有分類')"
          href="#"
          >所有產品</a
        >
      </li>
      <li class="breadcrumb-item">
        <a
          class="text-decoration-none text-secondary"
          @click.prevent="goTo(area, '所有分類')"
          href="#"
          >{{ area }}</a
        >
      </li>
      <li class="breadcrumb-item">
        <a
          class="text-decoration-none text-secondary"
          @click.prevent="goTo(area, category)"
          href="#"
          >{{ category }}</a
        >
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    area: {
      required: true,
    },
    category: {
      required: true,
    },
  },
  inject: ["emitter"],
  data() {
    return {};
  },
  methods: {
    goTo(area, category) {
      this.emitter.emit("setOption", {
        area: area,
        category: category,
      });
      this.$router.push("/store/products");
    },
  },
};
</script>
<style lang="scss" scoped></style>
