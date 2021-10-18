<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>成立時間</th>
          <th>商品</th>
          <th>金額</th>
          <th>付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="[
            item.is_done
              ? 'bg-light text-secondary text-decoration-line-through'
              : '',
          ]"
        >
          <td class="num">{{ getFormDate(item.create_at) }}</td>
          <td>
            <ul>
              <li v-for="(productItem, key) in item.products" :key="key">
                {{ productItem.product.title }}
                <span class="text-secondary fst-italic num"
                  >x{{ productItem.qty }}</span
                >
              </li>
            </ul>
          </td>
          <td class="num">{{ item.total.toLocaleString() }}元</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-muted">未付款</span>
          </td>
          <td>
            <button
              @click="openModal(item)"
              class="btn btn-outline-success btn-sm m-1"
            >
              檢視
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
    <OrderModal
      :order="tempOrder"
      :status="'編輯'"
      @updateOrder="updateOrder"
      ref="orderModal"
    />
    <DeleteModal
      @delete="deleteOrder"
      :title="tempOrder.id"
      :id="tempOrder.id"
      :name="'訂單'"
      ref="delModal"
    />
    <ToastList />
    <Pagination @updatePage="getOrders" :page="pagination" />
    <Loading :active="isLoading" />
  </div>
</template>
<script>
import Pagination from "@/components/pagination/Pagination.vue";
import ToastList from "@/components/responseMessages/ToastList.vue";
import DeleteModal from "@/components/seller/DeleteModal.vue";

import OrderModal from "./OrderModal.vue";

import { getFormDate } from "@/methods/date";

export default {
  name: "Orders",
  components: { Pagination, ToastList, DeleteModal, OrderModal },
  inject: ["resMsg"],
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getFormDate,
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.showModal();
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempOrder = JSON.parse(JSON.stringify(item));
    },
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.orders = response.data.orders;
          this.pagination = response.data.pagination;
        }
      });
    },
    updateOrder(item) {
      this.tempOrder = item;
      this.isLoading = true;

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.axios.put(api, { data: this.tempOrder }).then((response) => {
        if (response.data.success) {
          this.getOrders();
          this.tempOrder = {};
        }
        this.isLoading = false;
        this.$refs.orderModal.hideModal();
        this.resMsg(response);
      });
    },
    deleteOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
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
