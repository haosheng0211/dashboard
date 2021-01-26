import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: []
});
router.onReady(async () => {
  await store.dispatch("routes/loading");
  await router.addRoutes([
    {
      path: "/",
      component: () => import("@/layouts/dashboard/dashboard.vue"),
      children: [...store.getters["routes/value"]]
    }
  ]);
});
export default router;
