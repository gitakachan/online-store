import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("../views/seller/login/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/seller/dashboard/Dashboard.vue"),
    children: [
      {
        path: "",
        redirect: "/dashboard/products",
      },
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
    ],
  },
  {
    path: "/store",
    component: () => import("../views/buyer/userboard/Userboard.vue"),
    children: [
      {
        path: "",
        redirect: "/store/home",
      },
      {
        path: "home",
        component: () => import("../views/buyer/userboard/home/Home.vue"),
      },
      {
        path: "about",
        component: () => import("../views/buyer/userboard/about/About.vue"),
      },
      {
        path: "products",
        component: () =>
          import("../views/buyer/userboard/products/Products.vue"),
      },
      {
        path: "products/:productId",
        name: "productDetail",
        component: () => import("../views/buyer/userboard/product/Product.vue"),
        props: (route) => {
          return {
            id: route.params.productId,
          };
        },
      },
      {
        path: "cart",
        component: () => import("../views/buyer/userboard/cart/Cart.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
