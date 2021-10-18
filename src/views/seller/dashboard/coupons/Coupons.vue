<template>
  <div>
    <AddNew @openModal="openModal">
      <template v-slot:title>新增優惠券</template>
    </AddNew>
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
        <tr v-for="item in coupons" :key="item.id">
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
    <CouponModal
      :coupon="tempCoupon"
      :status="isNew ? '新增' : '編輯'"
      @updateCoupon="updateCoupon"
      ref="couponModal"
    />
    <DeleteModal
      @delete="deleteCoupon"
      :title="tempCoupon.title"
      :id="tempCoupon.id"
      :name="'優惠券'"
      ref="delModal"
    />
    <ToastList />
    <Pagination @updatePage="getCoupons" :page="pagination" />
    <Loading :active="isLoading" />
  </div>
</template>
<script>
import Pagination from "@/components/pagination/Pagination.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import AddNew from "@/components/seller/AddNew.vue";
import DeleteModal from "@/components/seller/DeleteModal.vue";
import CouponModal from "./CouponModal.vue";

import { getUnixDate, getFormDate } from "@/methods/date";

export default {
  name: "Coupons",
  components: { Pagination, ToastList, AddNew, DeleteModal, CouponModal },
  inject: ["resMsg"],
  data() {
    return {
      coupons: [],
      tempCoupon: {},
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
        this.tempCoupon = {
          percent: 100,
          is_enabled: 0,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempCoupon = JSON.parse(JSON.stringify(item));
    },
    getCoupons(page = 1) {
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
    updateCoupon(item) {
      this.tempCoupon = item;
      this.isLoading = true;

      // 把回傳的日期轉換回unix time stamp
      this.tempCoupon.due_date = this.getUnixDate(this.tempCoupon.due_date);

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
            this.getCoupons(this.pagination.current_page);
            this.tempCoupon = {};
          }
          this.$refs.couponModal.hideModal();
          this.resMsg(response);
        }
      );
    },
    deleteCoupon(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.isLoading = true;
      this.axios.delete(api).then((response) => {
        if (response.data.success) {
          this.$refs.delModal.hideModal();
          this.isLoading = false;
          this.getCoupons(this.pagination.current_page);
        }
        this.resMsg(response, "刪除");
      });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
<style lang="scss" scoped></style>
