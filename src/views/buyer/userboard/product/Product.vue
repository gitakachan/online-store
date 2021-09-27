<template>
  <div>
    <div class="container p-5">
      <bread-crumb
        :area="product.area"
        :category="product.category"
      ></bread-crumb>
      <div class="row">
        <div class="col-12 col-md-6 mb-4">
          <images :imagesUrl="product.imagesUrl"></images>
        </div>
        <div class="col-12 col-md-6">
          <!-- 標題 -->
          <h1 class="mb-3">{{ product.title }}</h1>
          <div class="tag mb-3">
            <span class="badge bg-warning">{{ product.area }}</span> &nbsp;
            <span class="badge bg-info">{{ product.tag }}</span>
          </div>
          <!-- 地點 -->
          <div class="mb-2">
            <i class="bi bi-geo-alt"></i> {{ product.location }}
          </div>
          <!-- 標籤 -->

          <!-- 每週出團日 -->
          <div class="mb-3">
            <i class="bi bi-calendar-check"></i> {{ weekdays }}
          </div>
          <!-- 數量 -->
          <div class="quantity d-flex align-items-center mb-2">
            <div>
              <span>數量：</span>
            </div>
            <div class="input-group input-group-sm w-25">
              <button
                class="btn btn-sm btn-outline-secondary shadow-none"
                type="button"
                @click="deductQunatity"
              >
                -
              </button>
              <input
                v-model.number="order.quantity"
                type="text"
                class="form-control text-center"
              />

              <button
                class="btn btn-sm btn-outline-secondary shadow-none"
                type="button"
                @click="addQuantity"
              >
                +
              </button>
            </div>
            <div class="ms-2">{{ product.unit }}</div>
            <div class="text-danger ms-2" v-show="tooLess">
              不得小於1
            </div>
          </div>
          <!-- 日期選擇 -->
          <calender
            @selectDate="selectDate"
            :notAvalible="product.notAvalibleWeekday"
            :min_date="min_date"
            :max_date="max_date"
            class="mb-4"
          ></calender>
          <!-- 價格 -->
          <div class="price d-flex justify-content-end align-items-end mb-3">
            <h6 class="text-decoration-line-through text-secondary">
              {{ origin_price }}
            </h6>
            <h3 class="ms-3">{{ price }}</h3>
          </div>
          <!-- 按鈕 -->
          <div class="d-grid gap-2 my-3">
            <button class="btn btn-primary shadow-none" type="button">
              <i class="bi bi-heart"></i> 收藏商品
            </button>
            <button
              @click="addCart(product.id, order.quantity)"
              :disabled="!order.date || addCartLoading"
              class="btn btn-primary shadow-none"
              type="button"
            >
              <div
                v-show="this.addCartLoading"
                class="spinner-border spinner-border-sm me-3"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <i class="bi bi-cart"></i> 放入購物車
            </button>
          </div>
        </div>

        <!-- 商品內容 -->
        <div class="content">
          <h4>商品/行程內容</h4>
          <hr />
          <p class="m-3" v-html="content"></p>
        </div>
        <!-- 商品描述 -->
        <div class="description">
          <h4>商品/行程介紹</h4>
          <hr />
          <p class="m-3" v-html="description"></p>
        </div>
      </div>
    </div>
    <loading :active="isLoading"></loading>
  </div>
</template>
<script>
import Images from "./Images.vue";
import BreadCrumb from "./BreadCrumb.vue";
import Calender from "./Calender.vue";
import { getWeekdayText } from "@/methods/weekday.js";
export default {
  name: "Product",
  components: { Images, BreadCrumb, Calender },
  props: {
    id: {
      required: true,
    },
  },
  computed: {
    price() {
      return "NT$" + " " + this.product.price.toLocaleString() + " " + "/人";
    },
    origin_price() {
      return (
        "NT$" + " " + this.product.origin_price.toLocaleString() + " " + "/人"
      );
    },
  },
  data() {
    return {
      product: {
        ImagesUrl: [],
        price: 0,
        origin_price: 0,
      },
      isLoading: false,
      order: {
        quantity: 1,
        date: new Date(),
      },
      tooLess: false,
      content: "",
      description: "",
      weekdays: "",
      min_date: "",
      max_date: "",
      addCartLoading: false,
    };
  },

  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
          this.content = this.fixTextArea(this.product.content);
          this.description = this.fixTextArea(this.product.description);
          this.weekdays = this.getWeekdays(this.product.weekdays);
          if (!this.product.min_date) {
            //若無指定起始日，則為今天開始
            this.min_date = new Date();
          } else {
            let origin_min_date = new Date(this.product.min_date);
            let today = new Date();
            //如果後台設定起始日期早於今日 則起始日設為今日
            if (origin_min_date < today) {
              this.min_date = today;
            } else {
              this.min_date = this.product.min_date;
            }
          }

          if (!this.product.max_date) {
            //若無指定截止日，則為一年後（不寫死，可一直延後）
            this.max_date = new Date().setFullYear(
              new Date().getFullYear() + 1
            );
          } else {
            // let origin_max_date = new Date(this.product.max_date);
            // let today = new Date();
            // //如果後台設定最晚日期早於今日 則？  (這裡無法控制後台disable product
            // if (origin_max_date < today) {
            //   this.max_date = today;
            // } else {
            //   this.max_date = this.product.max_date;
            // }
            this.max_date = this.product.max_date;
          }
        }
      });
    },
    addQuantity() {
      this.order.quantity++;
    },
    deductQunatity() {
      if (this.order.quantity > 1) {
        this.order.quantity--;
      } else if (this.order.quantity <= 1) {
        this.tooLess = true;
      }
    },
    fixTextArea(str) {
      str = str.replace(/\n/g, "<br />");
      return str;
    },
    selectDate(date) {
      this.order.date = date;
    },
    getWeekdays(arr) {
      let str = "";
      if (arr.length === 7) {
        str = "每天 ";
      } else {
        arr = this.getWeekdayText(arr);
        str = `每週 ${arr.join("、")}`;
      }
      if (
        this.product.category === "門票" ||
        this.product.category === "餐飲"
      ) {
        return (str += " 可使用");
      } else {
        return (str += " 出發");
      }
    },
    getWeekdayText,
    addCart(id, qty) {
      this.addCartLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios
        .post(api, { data: { product_id: id, qty: qty } })
        .then((response) => {
          if (response.data.success) {
            this.addCartLoading = false;
          }
        });
    },
  },
  watch: {
    "order.quantity"() {
      if (this.order.quantity < 1) {
        this.order.quantity = 1;
        this.tooLess = true;
      } else {
        this.tooLess = false;
      }
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/helpers/myVariables.scss";
</style>
