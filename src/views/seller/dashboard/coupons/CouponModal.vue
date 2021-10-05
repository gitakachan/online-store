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
              <span>{{ status }}優惠券</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <Form v-slot="{ errors, validate }">
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="title" class="form-label fw-bold">標題*</label>
                    <Field
                      id="title"
                      name="標題"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標題"
                      rules="required"
                      :class="{ 'is-invalid': errors['標題'] }"
                      v-model="tempCoupon.title"
                    ></Field>
                    <error-message
                      name="標題"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <div class="row gx-2">
                    <div class="mb-3 col-md-6">
                      <label for="percent" class="form-label fw-bold"
                        >折扣百分比* ({{ 100 - tempCoupon.percent }}%
                        off)</label
                      >
                      <Field
                        id="percent"
                        name="比例"
                        type="number"
                        class="form-control"
                        placeholder="請輸入折扣百分比"
                        rules="required|between:1,100"
                        :class="{ 'is-invalid': errors['比例'] }"
                        v-model="tempCoupon.percent"
                      ></Field>
                      <error-message
                        name="比例"
                        class="invalid-feedback"
                      ></error-message>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="code" class="form-label fw-bold"
                        >優惠碼*</label
                      >
                      <Field
                        id="code"
                        name="優惠碼"
                        type="text"
                        class="form-control"
                        placeholder="請輸入優惠碼"
                        rules="required|max:10"
                        :class="{ 'is-invalid': errors['優惠碼'] }"
                        v-model="tempCoupon.code"
                      ></Field>
                      <error-message
                        name="優惠碼"
                        class="invalid-feedback"
                      ></error-message>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="date" class="form-label fw-bold"
                        >到期日*</label
                      >
                      <v-date-picker
                        v-model="tempCoupon.due_date"
                        :min-date="new Date()"
                      >
                        <template v-slot="{ inputValue, inputEvents }">
                          <input
                            class="form-control"
                            :value="inputValue"
                            v-on="inputEvents"
                            id="date"
                          />
                        </template>
                      </v-date-picker>
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
                @click="
                  validate();
                  checkStatus();
                "
                type="button"
                class="btn btn-primary"
                :disabled="submitBtn"
              >
                確認
              </button>
            </div>
          </Form>
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
  mixins: [ModalMixin],
  props: {
    coupon: {
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
      tempCoupon: {},
      submitBtn: false,
    };
  },
  methods: {
    getUnixDate,
    getFormDate,
    checkStatus() {
      this.$emit("updateCoupon", this.tempCoupon);
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      if (!this.tempCoupon.due_date) {
        this.tempCoupon.due_date = new Date();
      } else {
        //unix time stamp -> formDate
        this.tempCoupon.due_date = this.getFormDate(this.tempCoupon.due_date);
      }
      if (!this.tempCoupon.title) {
        this.tempCoupon.title = "";
      }
      if (!this.tempCoupon.code) {
        this.tempCoupon.code = "";
      }
      if (!this.tempCoupon.is_enabled) {
        this.tempCoupon.is_enabled = 0;
      }
    },
    tempCoupon: {
      deep: true,
      handler() {
        for (let item in this.tempCoupon) {
          if (!this.tempCoupon[item]) {
            this.submitBtn = true;
          } else {
            this.submitBtn = false;
          }
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped></style>
