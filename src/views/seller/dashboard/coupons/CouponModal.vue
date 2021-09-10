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
              <span>新增優惠券</span>
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
              <div class="col">
                <div class="mb-3">
                  <label for="title" class="form-label fw-bold">標題*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempCoupon.title"
                  />
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="percent" class="form-label fw-bold"
                      >折扣百分比*</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="percent"
                      placeholder="請輸入百分比"
                      v-model.number="tempCoupon.percent"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="code" class="form-label fw-bold">優惠碼*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="code"
                      placeholder="請輸入優惠碼"
                      v-model.number="tempCoupon.code"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="date" class="form-label fw-bold">到期日*</label>
                    <input
                      class="form-control"
                      id="date"
                      type="date"
                      v-model="tempCoupon.due_date"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        id="is_enabled"
                        v-model="tempCoupon.is_enabled"
                      />
                      <label class="form-check-label" for="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
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
              @click="$emit('updateCoupon', tempCoupon)"
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
import { getUnixDate, getFormDate } from "@/methods/date";
export default {
  name: "CouponModal",
  props: {
    coupon: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      modal: {},
      tempCoupon: {},
    };
  },
  methods: {
    getUnixDate,
    getFormDate,
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      
      //unix time stamp -> formDate
      this.tempCoupon.due_date = this.getFormDate(this.tempCoupon.due_date);
    },
  },
  mixins: [ModalMixin],
};
</script>
<style lang="scss" scoped></style>
