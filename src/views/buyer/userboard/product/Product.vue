<template>
  <div>
    <div class="container-fluid p-5">
      <div class="row">
        <div class="col-12 col-md-6">
          <images :imagesUrl="product.imagesUrl"></images>
        </div>

        <div class="col-12 col-md-6">
          <!-- 標題 -->
          <h1>{{ product.title }}</h1>
          <!-- 價格 -->
          <div class="price d-flex align-items-end my-3">
            <h4>{{ price }}</h4>
            <h6 class="text-decoration-line-through ms-3">
              {{ origin_price }}
            </h6>
          </div>
          <!-- 數量 -->
          <div class="quantity">
            <div class="row">
              <div
                class="col-3 d-flex justify-content-center align-items-center"
              >
                <span>數量</span>
              </div>
              <div class="col-3">
                <div class="input-group input-group-sm">
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
              </div>
              <div class="col  d-flex align-items-center">
                <span v-show="tooLess" class="hint">不得小於1</span>
                <span v-show="tooMany" class="hint">不得超過庫存</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span>目前剩餘 {{ product.quantity + product.unit }}</span>
              </div>
            </div>
          </div>
          <!-- 按鈕 -->
          <div class="d-grid gap-2 my-3">
            <button class="btn btn-primary" type="button">收藏商品</button>
            <button class="btn btn-primary" type="button">放入購物車</button>
          </div>
          <!-- 商品內容 -->
          <div class="content ">
            <h4>商品內容物</h4>
            <hr />
            <p class="m-3">{{ product.content }}</p>
          </div>
          <!-- 商品描述 -->
          <div class="description">
            <h4>商品介紹</h4>
            <hr />
            <p class="m-3">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <loading :active="isLoading"></loading>
  </div>
</template>
<script>
import Images from "./Images.vue";
export default {
  components: { Images },
  name: "Product",
  props: {
    id: {
      required: true,
    },
  },
  computed: {
    price() {
      return "NT$" + " " + this.product.price.toLocaleString();
    },
    origin_price() {
      return "NT$" + " " + this.product.origin_price.toLocaleString();
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
      tooMany: false,
      tooLess: false,
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
        }
      });
    },
    addQuantity() {
      if (this.order.quantity < this.product.quantity) {
        this.order.quantity++;
        this.tooMany = false;
        this.tooLess = false;
      } else {
        this.tooMany = true;
      }
    },
    deductQunatity() {
      if (this.order.quantity > 1) {
        this.order.quantity--;
        this.tooLess = false;
        this.tooMany = false;
      } else if (this.order.quantity === 1) {
        this.tooLess = true;
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
