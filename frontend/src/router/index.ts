import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Dashboard from "../views/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home, // La vista principal
  },
  {
    path: "/login",
    name: "Login",
    component: Login, // Vista de login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard, // Vista de dashboard (requiere autenticación)
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.meta.requiresAuth && !token) {
    next({ name: "Login" }); // Redirigir al login si no está autenticado
  } else {
    next();
  }
});

export default router;
