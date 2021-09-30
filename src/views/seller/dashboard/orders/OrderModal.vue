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
            <h4 class="modal-title" id="exampleModalLabel">
              <span>{{ status }}訂單狀態</span>
            </h4>
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
                <div class="num">
                  總金額：{{ tempOrder.total.toLocaleString() }}元
                </div>
              </div>
              <!-- 付款狀態 -->
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_paid"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="is_paid">
                    <span>付款狀態：</span>
                    <span class="text-success" v-if="tempOrder.is_paid"
                      >已完成</span
                    >
                    <span class="text-danger" v-else>未完成</span>
                  </label>
                </div>
              </div>
              <!-- 訂單狀態 -->
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_done"
                    v-model="tempOrder.is_done"
                  />
                  <label class="form-check-label" for="is_done">
                    <span>訂單狀態：</span>
                    <span class="text-success" v-if="tempOrder.is_done"
                      >已完成</span
                    >
                    <span class="text-danger" v-else>未完成</span>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <!-- 商品列表 -->
            <div class="row">
              <div class="col-12">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th><h5>商品：</h5></th>
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
            <hr />

            <!-- 訂單資料 -->
            <div class="row">
              <div class="col-12">
                <div class="user">
                  <h5 class="pb-2">訂單資料：</h5>
                  <!-- 修改或重置 -->
                  <div class="form-check form-check-inline">
                    <input
                      v-model="infoStatus"
                      class="form-check-input"
                      type="radio"
                      name="infoStatus"
                      id="edit"
                      value="edit"
                    />
                    <label class="form-check-label" for="edit">修改</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="infoStatus"
                      class="form-check-input"
                      type="radio"
                      name="infoStatus"
                      id="reset"
                      value="reset"
                    />
                    <label class="form-check-label" for="reset">還原</label>
                  </div>
                  <!--form -->
                  <Form v-slot="{ errors, validate }">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="請輸入 Email"
                        :class="{ 'is-invalid': errors['email'] }"
                        rules="email|required"
                        v-model="tempOrder.user.email"
                        :disabled="!allowEditInfo"
                      ></Field>
                      <error-message
                        name="email"
                        class="invalid-feedback"
                      ></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="name" class="form-label">姓名</label>
                      <Field
                        id="name"
                        name="姓名"
                        type="text"
                        class="form-control"
                        placeholder="請輸入姓名"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        rules="required"
                        v-model="tempOrder.user.name"
                        :disabled="!allowEditInfo"
                      ></Field>
                      <error-message
                        name="姓名"
                        class="invalid-feedback"
                      ></error-message>
                    </div>

                    <div class="mb-3">
                      <label for="phone" class="form-label">電話</label>
                      <Field
                        id="tel"
                        name="電話"
                        type="text"
                        class="form-control"
                        placeholder="請輸入電話"
                        :class="{ 'is-invalid': errors['電話'] }"
                        :rules="{
                          regex: /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/,
                          required: true,
                        }"
                        v-model="tempOrder.user.tel"
                        :disabled="!allowEditInfo"
                      ></Field>
                      <error-message
                        name="電話"
                        class="invalid-feedback"
                      ></error-message>
                    </div>

                    <div class="mb-3">
                      <label for="address" class="form-label">地址</label>
                      <Field
                        id="address"
                        name="地址"
                        type="text"
                        class="form-control"
                        placeholder="請輸入地址"
                        rules="required"
                        :class="{ 'is-invalid': errors['地址'] }"
                        v-model="tempOrder.user.address"
                        :disabled="!allowEditInfo"
                      ></Field>
                      <error-message
                        name="地址"
                        class="invalid-feedback"
                      ></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="payment" class="form-label">付款方式</label>
                      <Field
                        id="payment"
                        name="付款方式"
                        class="form-control"
                        as="select"
                        :class="{ 'is-invalid': errors['付款方式'] }"
                        rules="required"
                        v-model="tempOrder.user.payment_method"
                        :disabled="!allowEditInfo"
                      >
                        <option disabled value="">請選擇付款方式</option>
                        <option value="ATM轉帳">ATM轉帳</option>
                        <option value="信用卡">信用卡</option>
                      </Field>
                      <error-message
                        name="付款方式"
                        class="invalid-feedback"
                      ></error-message>
                    </div>
                    <button
                      class="btn btn-sm btn-success"
                      type="button"
                      @click="validate(), checkInfo(errors)"
                      :disabled="!allowEditInfo"
                    >
                      確認修改
                    </button>
                  </Form>
                </div>
              </div>
            </div>
            <hr />
            <!-- 後台備註 -->
            <div class="row">
              <div class="col-12">
                <h5 class="pb-2">後台備註：</h5>
                <textarea
                  class="form-control"
                  placeholder="後台備註"
                  id="sellerNote"
                  style="height: 100px"
                ></textarea>
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
              :disabled="allowEditInfo"
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
      tempOrder: {
        total: 0,
        id: "",
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          payment_method: "",
        },
      },
      infoStatus: "",
      allowEditInfo: false,
    };
  },
  methods: {
    getFormDate,
    checkInfo(e) {
      // console.log(Object.keys(e).length); //錯誤的物件長度
      if (Object.keys(e).length === 0) {
        this.allowEditInfo = false;
        this.infoStatus = "";
      }
    },
  },
  watch: {
    order() {
      this.tempOrder = JSON.parse(JSON.stringify(this.order));
      if (!this.tempOrder.total) {
        this.tempOrder.total = 0;
      }
      if (!this.tempOrder.user) {
        this.tempOrder.user = {
          name: "",
          email: "",
          tel: "",
          address: "",
          payment_method: "",
        };
      }
    },
    infoStatus() {
      if (this.infoStatus === "edit") {
        this.allowEditInfo = true;
      } else if (this.infoStatus === "reset") {
        this.allowEditInfo = false;
        this.tempOrder.user = JSON.parse(JSON.stringify(this.order.user));
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
