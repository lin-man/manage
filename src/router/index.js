import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem("token");
  if (token) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
