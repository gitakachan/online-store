<template>
  <div>
    <loading :active="isLoading"></loading>
    <div class="container">
      <centered-header :title="'付款'"></centered-header>
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
                <tr v-for="item in orderItems" :key="item.id">
                  <td>
                    {{ item.product.title }}
                  </td>
                  <td class="num">{{ item.product.price.toLocaleString() }}</td>
                  <td class="num">{{ item.qty }}</td>
                </tr>
                <tr>
                  <td class="no-border" colspan="4">
                    <h3 class="text-end">
                      總金額：<span class="num"
                        >NT {{ total.toLocaleString() }}</span
                      >
                      元
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
          <ul class="order-detail list-group list-group-flush mx-auto">
            <li class="list-group-item">
              <span class="fw-bold">姓名：</span> {{ user.name }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">電話：</span> {{ user.tel }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">地址：</span> {{ user.address }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Email：</span> {{ user.email }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">備註：</span> {{ user.message }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">付款方式：</span>{{ payment_method }}
            </li>
            <li class="list-group-item">
              <div v-show="!this.is_paid">
                狀態：<span class="text-danger">未付款</span>
              </div>
              <div v-show="this.is_paid">
                狀態： <span class="text-success">付款成功！</span>
                <span class="text-secondary"
                  >已於{{ getFormDate(paid_date) }}完成付款</span
                >
              </div>
            </li>
            <li v-show="!this.is_paid" class="list-group-item">
              <div class="text-end">
                <button
                  type="button"
                  @click="submitPayment()"
                  class="btn btn-info"
                >
                  <i class="bi bi-check"></i> 確認付款
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getFormDate } from "@/methods/date.js";
import CenteredHeader from "../../../../components/buyer/CenteredHeader.vue";

export default {
  name: "Payment",
  components: { CenteredHeader },

  data () {
    return {
      isLoading: false,
      orderId: "",
      orderItems: [],
      user: {},
      total: 0,
      payment_method: "",
      is_paid: false,
      paid_date: ""
    };
  },
  methods: {
    getOrder () {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          const order = response.data.order;
          const user = order.user;

          this.orderItems = order.products;
          this.total = order.total;
          this.is_paid = order.is_paid;
          this.paid_date = order.paid_date;

          this.user = user;
          this.payment_method = user.payment_method;
        }
        this.isLoading = false;
      });
    },
    submitPayment () {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          this.getOrder();
        }
        this.isLoading = false;
      });
    },
    getFormDate
  },
  mounted () {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
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

.order-detail {
  max-width: 500px;
}
</style>
