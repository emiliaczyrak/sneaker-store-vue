import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import NotFound from "../pages/NotFound.vue";

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
    component: () => import("../components/ProductDetail.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../components/TheCheckout.vue"),
  },
  { path: "/:notFound(.*)", name: "Not Found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
