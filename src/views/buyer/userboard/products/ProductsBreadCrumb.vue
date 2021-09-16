<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">所有行程</li>
      <li class="breadcrumb-item">
        {{ area }}
      </li>
      <li class="breadcrumb-item">{{ category }}</li>
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
