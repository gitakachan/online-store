import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/seller/login/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/seller/dashboard/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/seller/dashboard/products/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/seller/dashboard/orders/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/seller/dashboard/coupons/Coupons.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
