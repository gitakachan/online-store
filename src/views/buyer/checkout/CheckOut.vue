<template>
  <div>
    <Loading :active="isLoading" />
    <div class="container">
      <CenteredHeader :title="'填寫訂單資料'" />
      <div class="row pb-7">
        <div class="col-lg-6">
          <h2 class="text-center">訂單內容</h2>
          <div class="d-flex justify-content-center mt-1">
            <table class="table align-middle table-fit">
              <thead>
                <tr>
                  <th scope="col">商品</th>
                  <th scope="col">單價</th>
                  <th scope="col" class="text-nowrap">數量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td @click="backToProduct(item.product_id)">
                    {{ item.product.title }}
                  </td>
                  <td class="num">{{ item.product.price.toLocaleString() }}</td>
                  <td>
                    <span class="num">{{ item.qty }}</span
                    >{{ item.product.unit }}
                  </td>
                </tr>
                <tr>
                  <td class="no-border" colspan="4">
                    <div class="input-group">
                      <input
                        v-model="code"
                        type="text"
                        class="form-control shadow-none"
                        placeholder="輸入優惠券"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        @click="addCoupon"
                        class="btn btn-outline-secondary shadow-none"
                        type="button"
                        id="button-addon2"
                      >
                        使用優惠券
                      </button>
                    </div>
                    <span
                      :class="[isSuccess ? 'text-success' : 'text-danger']"
                      >{{ codeMessage }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="no-border" colspan="3">
                    <h3
                      class="text-end"
                      :class="{
                        'text-decoration-line-through': useCode,
                        'text-secondary': useCode,
                      }"
                    >
                      總計：<span class="num">
                        NT {{ total.toLocaleString() }}</span
                      >
                      元
                    </h3>
                  </td>
                </tr>
                <tr v-show="this.useCode">
                  <td class="no-border" colspan="4">
                    <h3 class="text-end">
                      折扣後：NT {{ final_total.toLocaleString() }} 元
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td class="no-border" colspan="3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="text-center">訂購人資料</h2>
          <div class="form-container mx-auto">
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
                  v-model="user.email"
                />
                <ErrorMessage name="email" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="user.name"
                  :class="{ 'is-invalid': errors['姓名'] }"
                />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">電話</label>
                <Field
                  id="tel"
                  name="電話"
                  type="number"
                  class="form-control"
                  placeholder="請輸入電話"
                  v-model.number="user.tel"
                  :rules="{
                    regex:
                      /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/,
                    required: true,
                  }"
                  :class="{ 'is-invalid': errors['電話'] }"
                />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <Field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  placeholder="請輸入台灣地址或越南當地住宿地址"
                  v-model="user.address"
                  rules="required"
                  :class="{ 'is-invalid': errors['地址'] }"
                />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">付款方式</label>
                <Field
                  id="payment"
                  name="付款方式"
                  class="form-control"
                  v-model="user.payment_method"
                  as="select"
                  :class="{ 'is-invalid': errors['付款方式'] }"
                  rules="required"
                >
                  <option disabled value="">請選擇付款方式</option>
                  <option value="ATM轉帳">ATM轉帳</option>
                  <option value="信用卡">信用卡</option>
                </Field>
                <ErrorMessage name="付款方式" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="msg" class="form-label">留言</label>
                <Field
                  as="textarea"
                  id="msg"
                  name="留言"
                  type="text"
                  class="form-control"
                  placeholder="請輸入留言"
                  v-model="message"
                />
              </div>

              <div class="text-end">
                <button
                  type="button"
                  @click="
                    submitOrder();
                    validate();
                  "
                  class="btn btn-primary"
                >
                  <i class="bi bi-check"></i> 送出訂單
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CenteredHeader from "@/components/buyer/CenteredHeader.vue";
export default {
  name: "CheckOut",
  components: { CenteredHeader },
  data() {
    return {
      cartItems: [],
      total: 0,
      final_total: 0,
      isLoading: false,
      useCode: false,
      code: "",
      codeMessage: "",
      isSuccess: false,
      user: {
        email: "",
        name: "",
        tel: "",
        address: "",
        payment_method: "",
      },
      message: "",
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.cartItems = response.data.data.carts;
          this.total = response.data.data.total;
          this.final_total = response.data.data.final_total;
          if (this.cartItems.length === 0) {
            this.$router.push("/store/products");
          }
        }
      });
    },
    updateCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios
        .put(api, { data: { product_id: id, qty: qty } })
        .then((response) => {
          if (response.data.success) {
            this.getCart();
          }
        });
    },
    backToProduct(id) {
      this.$router.push(`/store/products/${id}`);
    },
    addCoupon() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.axios
        .post(api, {
          data: {
            code: this.code,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.useCode = true;
            this.getCart();
          } else {
            this.useCode = false;
          }
          this.isLoading = false;
          this.isSuccess = response.data.success;
          this.codeMessage = response.data.message;
        });
    },
    submitOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios
        .post(api, {
          data: {
            user: this.user,
            message: this.message,
          },
        })
        .then((response) => {
          if (response.data.success) {
            this.$router.push(`/store/payment/${response.data.orderId}`);
          }
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
table.table-fit {
  width: auto !important;
  table-layout: auto !important;

  thead th,
  tfoot th {
    width: auto !important;
  }
  tbody td {
    width: auto !important;
    &.no-border {
      border-bottom: none;
    }
  }
}

.form-container {
  max-width: 500px;

  textarea {
    height: 120px;
  }
}
</style>
