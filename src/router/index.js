import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Property from "../views/Property.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/properties",
    name: "Properties",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Properties.vue"),
  },
  {
    path: "/single",
    name: "Property",
    component: Property,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
