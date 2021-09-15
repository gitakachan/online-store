<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">所有行程</a></li>
      <li class="breadcrumb-item">
        <a href="#">{{ area }}</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ category }}</li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "ProductsBreadCrumb",
  props: {
    area: {
      default: "",
      type: String,
    },
    category: {
      default: "",
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
