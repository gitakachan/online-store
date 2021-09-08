import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/dashboard/products/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/dashboard/orders/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/dashboard/coupons/Coupons.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
