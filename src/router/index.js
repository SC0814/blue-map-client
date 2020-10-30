import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/detail",
      component: () => import("../views/Detail.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/add.vue"),
    },
  ],
});

export default router;