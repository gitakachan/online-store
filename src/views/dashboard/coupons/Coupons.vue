<template>
  <div>
    <loading :active="isLoading"></loading>
    <add-new @openModal="openModal">
      <template v-slot:title>新增優惠券</template>
    </add-new>
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
        <!-- title(String)、is_enabled(Number)、percent(Number)、due_date(Number)、code(String) 為必填欄位 -->
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date }}</td>
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

    <coupon-modal
      :coupon="tempCoupon"
      @updateCoupon="updateCoupon"
      ref="couponModal"
    ></coupon-modal>
    <delete-modal
      @delete="deleteCoupon"
      :item="tempCoupon"
      ref="delModal"
    ></delete-modal>
    <toast-list></toast-list>
    <pagination @updatePage="getCoupons" :page="pagination"></pagination>
  </div>
</template>
<script>
import Pagination from "../Pagination.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import AddNew from "../AddNew.vue";
import DeleteModal from "../DeleteModal.vue";
import CouponModal from "./CouponModal.vue";

export default {
  name: "Coupons",
  components: { Pagination, ToastList, AddNew, DeleteModal, CouponModal },

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
    openModal(isNew, item) {
      if (isNew) {
        // 若為新增;
        this.tempCoupon = {
          percent: 100,
          is_enabled: 0,
        };
      } else {
        //若為編輯
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempCoupon = JSON.parse(JSON.stringify(item));
    },
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.coupons = response.data.coupons;
          this.pagination = response.data.pagination;
        }
        this.$resMsgMethods(response);
      });
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      this.isLoading = true;
      //新增產品
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = "post";

      //編輯產品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = "put";
      }

      this.axios[httpMethod](api, { data: this.tempCoupon }).then(
        (response) => {
          this.isLoading = false;
          console.log(response.data.message);
          if (response.data.success) {
            this.getCoupons();
            this.tempCoupon = {};
          }
          this.$refs.couponModal.hideModal(); //關閉modal
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
          this.getCoupons();
        }
        this.$resMsgMethods(response);
      });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
<style lang="scss" scoped></style>
