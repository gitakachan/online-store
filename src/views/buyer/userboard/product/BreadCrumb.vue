<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a @click.prevent="" href="#">所有產品</a>
      </li>
      <li class="breadcrumb-item">
        <a @click.prevent="" href="#">{{ area }}</a>
      </li>
      <li class="breadcrumb-item">
        <a @click.prevent="" href="#">{{ category }}</a>
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
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
