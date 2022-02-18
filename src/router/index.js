import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "Products",
    component: ProductList,
  },
  {
    path: "/products/:prodId",
    name: "Detail",
    props: true,
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/TheCheckout.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "Not Found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
