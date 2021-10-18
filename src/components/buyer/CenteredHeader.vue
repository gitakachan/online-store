<template>
  <div class="header py-4">
    <div class="position-relative m-4">
      <div class="progress" style="height: 1px;">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 100%;"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h1
        class="position-absolute top-0 start-50 bg-white px-3 translate-middle text-nowrap"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped></style>
