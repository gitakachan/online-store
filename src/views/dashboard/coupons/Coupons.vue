<template>
  <div>
    <loading :active="isLoading"></loading>
    <add-new>
      <template @openModal="openModal" v-slot:title>新增優惠券</template>
    </add-new>
    <table class="table table-hover">
      <thead>
        <tr>
          <th @click="test">名稱</th>
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
          <td>{{ item.percent }}</td>
          <td>{{ item.price.due_date() }}</td>
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
    <!-- <product-modal
      :product="tempProduct"
      @updateProduct="updateProduct"
      ref="productModal"
    ></product-modal>
    <delete-modal
      @deleteProduct="deleteProduct"
      :product="tempProduct"
      ref="delModal"
    ></delete-modal> -->
    <toast-list></toast-list>
    <pagination @updatePage="getCoupons" :page="pagination"></pagination>
  </div>
</template>
<script>
import Pagination from "../Pagination.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import AddNew from "../AddNew.vue";

export default {
  name: "Coupons",
  components: { Pagination, ToastList, AddNew },
 // inject: ["emitter"],
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
    successMsg() {
      this.emitter.emit("pushMessage", {
        style: "success",
        title: "更新成功",
      });
    },
    // failMsg(responseMsg) {
    //   this.emitter.emit("pushMessage", {
    //     style: "danger",
    //     title: "更新失敗",
    //     content: responseMsg.join("、"),
    //   });
    // },
    test() {
      //  this.$resMsgMethods({ data: { success: true } });
      this.successMsg();
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
<style lang="scss" scoped></style>
