<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-primary shadow-sm">
      <div class="container-fluid">
        <router-link to="/store/home" class="navbar-brand" href="#"
          ><img class="logo" src="~@/assets/imgs/logo.png" alt=""
        /></router-link>
        <div class="d-md-none flex-grow-1 text-end">
          <router-link
            to="/store/cart"
            class="text-dark position-relative cart"
            href="#"
            ><i class="bi bi-cart3 text fs-5"></i>
            <span
              class="
                cart-qty
                num
                rounded-circle
                bg-danger
                text-white
                position-absolute
                top-0
                start-100
                translate-middle
              "
              >{{ cartQty }}</span
            >
          </router-link>
          <router-link to="/store/liked" class="text-dark px-3" href="#"
            ><i class="bi bi-heart-fill text-danger fs-5"></i
          ></router-link>
        </div>

        <button
          ref="collapseBtn"
          class="navbar-toggler shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="toggler-icon bi bi-list text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex justify-content-end w-100">
            <router-link
              v-for="item in navItem"
              :key="item.path"
              :to="`/store/${item.path}`"
              @click="collapse"
              class="nav-link px-3 fs-5"
              href="#"
              >{{ item.title }}</router-link
            >
            <router-link
              to="/store/cart"
              @click="collapse"
              class="nav-link cart d-none d-md-block px-3"
              href="#"
              ><span class="position-relative"
                ><i class="bi bi-cart3 text-dark fs-5"></i>
                <span
                  class="
                    cart-qty
                    num
                    rounded-circle
                    bg-danger
                    text-white
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                  "
                  >{{ cartQty }}</span
                >
              </span>
            </router-link>
            <router-link
              to="/store/liked"
              @click="collapse"
              class="nav-link d-none d-md-block px-3"
              href="#"
              ><i class="bi bi-heart-fill text-danger fs-5"></i
            ></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import navBarCollapse from "@/mixins/navBarCollapse.js";
export default {
  name: "NavBar",
  mixins: [navBarCollapse],
  inject: ["emitter"],
  data() {
    return {
      itemLength: 0,
      navItem: [
        { path: "home", title: "首頁" },
        { path: "products", title: "行程＆票券" },
        { path: "vnIntro", title: "越南新手旅遊攻略" },
        { path: "about", title: "關於我們" },
      ],
    };
  },
  computed: {
    cartQty() {
      this.emitter.on("cartLength", (length) => {
        this.itemLength = length;
      });
      return this.itemLength;
    },
  },
  mounted() {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
    this.axios.get(api).then((response) => {
      if (response.data.success) {
        const cartItems = response.data.data.carts;
        // 傳送給navbar icon
        this.emitter.emit("cartLength", cartItems.length);
      }
    });
  },
};
</script>
<style lang="scss" scoped>
a {
  font-weight: 100;
  &.nav-link.router-link-active {
    color: #000;
    font-weight: 300;
  }

  &.cart {
    .cart-qty {
      font-weight: normal;
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
}

.logo {
  width: 100px;
}
.toggler-icon {
  text-shadow: #444 1px 0.3px 0.6px;
}
</style>
