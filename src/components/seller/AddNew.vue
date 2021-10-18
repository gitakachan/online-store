<template>
  <div class="text-end my-2">
    <button
      @click="$emit('openModal', true)"
      class="btn btn-primary btn-sm"
      type="button"
    >
      <slot name="title" />
    </button>
  </div>
</template>
<script>
export default {
  name: "AddNew",
};
</script>
<style lang="scss" scoped></style>
