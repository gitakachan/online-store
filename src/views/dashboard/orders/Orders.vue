<template>
  <div>
    <loading :active="isLoading"></loading>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ getFormDate(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button
              @click="openModal(false, item)"
              class="btn btn-outline-success btn-sm m-1"
            >
              編輯
            </button>

            <button
              @click="openDelModal(item)"
              class="btn btn-outline-danger btn-sm m-1"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <order-modal
      :coupon="tempOrder"
      @updateCoupon="updateOrder"
      ref="orderModal"
    ></order-modal>
    <delete-modal
      @delete="deleteOrder"
      :item="tempOrder"
      ref="delModal"
    ></delete-modal>
    <toast-list></toast-list>
    <pagination @updatePage="getOrders" :page="pagination"></pagination>
  </div>
</template>
<script>
import Pagination from "../Pagination.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import AddNew from "../AddNew.vue";
import DeleteModal from "../DeleteModal.vue";
import OrderModal from "./OrderModal.vue";

import { getUnixDate, getFormDate } from "@/methods/date";

export default {
  name: "Orders",
  components: { Pagination, ToastList, AddNew, DeleteModal, OrderModal },
  inject: ["resMsg"],
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
      isNew: false,
    };
  },
  methods: {
    getUnixDate,
    getFormDate,
    openModal(isNew, item) {
      if (isNew) {
        this.tempOrder = {};
      } else {
        this.tempOrder = { ...item };
      }
      this.isNew = isNew;
      this.$refs.orderModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempOrder = JSON.parse(JSON.stringify(item));
    },
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.coupons = response.data.coupons;
          this.pagination = response.data.pagination;
        }
      });
    },
    updateOrder(item) {
      this.tempOrder = item;
      this.isLoading = true;

      //把回傳的日期轉換回unix time stamp
      this.tempOrder.due_date = this.getUnixDate(this.tempOrder.due_date);

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = "post";

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = "put";
      }

      this.axios[httpMethod](api, { data: this.tempCoupon }).then(
        (response) => {
          this.isLoading = false;
          if (response.data.success) {
            this.getCoupons();
            this.tempOrder = {};
          }
          this.$refs.couponModal.hideModal();
          this.resMsg(response);
        }
      );
    },
    deleteOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.isLoading = true;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.$refs.delModal.hideModal();
          this.isLoading = false;
          this.getOrders();
        }
        this.resMsg(response, "刪除");
      });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
<style lang="scss" scoped></style>
