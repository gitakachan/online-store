<template>
  <div class="container ps-0">
    <div class="row gy-4">
      <div v-for="item in imgs" :key="item" class="col-md-6">
        <div class="p-2 border border-white">
          <img
            class="img-fluid"
            :src="require('@/assets/imgs/' + item)"
            alt="圖片"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Images",
  props: {
    imgs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
