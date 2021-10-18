<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item text-secondary">所有行程</li>
      <li class="breadcrumb-item text-secondary">
        {{ area }}
      </li>
      <li class="breadcrumb-item text-secondary">{{ category }}</li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "ProductsBreadCrumb",
  props: {
    area: {
      default: "",
      type: String
    },
    category: {
      default: "",
      type: String
    }
  },
  data () {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
