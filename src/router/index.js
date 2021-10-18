import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/store/home" },
  {
    path: "/login",
    component: () => import("../views/seller/login/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/seller/dashboard/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () =>
          import("../views/seller/dashboard/products/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/seller/dashboard/orders/Orders.vue"),
      },
      {
        path: "coupons",
        component: () =>
          import("../views/seller/dashboard/coupons/Coupons.vue"),
      },
      {
        path: "/dashboard/:pathMatch(.*)*",
        redirect: "/dashboard/products",
      },
    ],
  },
  {
    path: "/store",
    component: () => import("../views/buyer/Userboard.vue"),
    children: [
      {
        path: "home",
        component: () => import("../views/buyer/home/Home.vue"),
      },
      {
        path: "about",
        component: () => import("../views/buyer/about/About.vue"),
      },
      {
        path: "vnIntro",
        component: () => import("../views/buyer/vnIntro/VnIntro.vue"),
      },
      {
        path: "products",
        component: () => import("../views/buyer/products/Products.vue"),
      },
      {
        path: "products/:productId",
        name: "productDetail",
        component: () => import("../views/buyer/product/Product.vue"),
        props: (route) => {
          return {
            id: route.params.productId,
          };
        },
      },
      {
        path: "cart",
        component: () => import("../views/buyer/cart/Cart.vue"),
      },
      {
        path: "liked",
        component: () => import("../views/buyer/liked/Liked.vue"),
      },
      {
        path: "checkout",
        component: () => import("../views/buyer/checkout/CheckOut.vue"),
      },
      {
        path: "payment/:orderId",
        component: () => import("../views/buyer/payment/Payment.vue"),
      },
      {
        path: "/store/:pathMatch(.*)*",
        redirect: "/store/home",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/store/home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0;
  next();
});

export default router;
