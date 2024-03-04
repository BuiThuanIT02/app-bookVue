import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ProductDetail from "../views/ProductDetail.vue";
const routes = [
  {
    path: "/",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/dang-nhap",
    component: Login,
  },
  {
    path: "/chi-tiet",
    component: ProductDetail,
  },
  {
    path: "/chi-tiet",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
