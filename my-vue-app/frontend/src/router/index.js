import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Orders from "../pages/Orders.vue";
import Auth from "../pages/Auth.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/auth", name: "Auth", component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
