<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              刪除商品？
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            確定永久刪除商品 <span class="fw-bold">{{ product.title }}</span> ?
            (刪除後即無法復原)
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              @click="$emit('deleteProduct', product.id)"
              type="button"
              class="btn btn-danger"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/ModalMixin";
export default {
  name: "DeleteModal",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modal: {},
    };
  },
  mixins: [ModalMixin],
};
</script>
<style lang="scss" scoped></style>
