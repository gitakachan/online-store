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
          <!-- 價格 -->
          <div class="price d-flex align-items-end mb-3">
            <h6 class="text-decoration-line-through text-secondary">
              {{ origin_price }}
            </h6>
            <h4 class="ms-3">{{ price }}</h4>
          </div>
          <!-- 數量 -->
          <div class="quantity d-flex align-items-center">
            <div>
              <span class="d-block">數量：</span>
            </div>
            <div class="input-group input-group-sm w-25">
              <button
                class="btn btn-sm btn-outline-secondary"
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
                class="btn btn-sm btn-outline-secondary"
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
          <!-- 按鈕 -->
          <div class="d-grid gap-2 my-3">
            <button class="btn btn-primary" type="button">收藏商品</button>
            <button class="btn btn-primary" type="button">放入購物車</button>
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
export default {
  components: { Images, BreadCrumb },
  name: "Product",
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
      },
      tooLess: false,
      content: "",
      description: "",
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
.quantity {
  button:focus,
  input:focus {
    box-shadow: none;
  }
}
</style>
