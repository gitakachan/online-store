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
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{ status }}訂單</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="num">
                  訂單成立時間：{{ getFormDate(tempOrder.create_at) }}
                </div>
                <div class="num">訂單編號：{{ tempOrder.id }}</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_paid"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="is_paid">
                    <span> 付款已完成</span>
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_done"
                    v-model="tempOrder.is_done"
                  />
                  <label class="form-check-label" for="is_done">
                    訂單已完成
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>商品</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tempOrder.products" :key="item.id">
                      <td>
                        {{ item.product.title }}
                        <span class="text-secondary fst-italic num"
                          >x{{ item.product.num }}</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              @click="$emit('updateOrder', tempOrder)"
              type="button"
              class="btn btn-primary"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/ModalMixin";
import { getFormDate } from "@/methods/date";
export default {
  name: "OrderModal",
  mixins: [ModalMixin],
  props: {
    order: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modal: {},
      tempOrder: {},
    };
  },
  methods: {
    getFormDate,
  },
  watch: {
    order() {
      this.tempOrder = this.order;
    },
  },
};
</script>
<style lang="scss" scoped></style>
