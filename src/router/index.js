import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Property from "../views/Property.vue";
import Main from "@/layouts/Main";
import Dashboard from "@/views/admin/Dashboard";
import Listings from "@/views/admin/Listings";

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
  {
    path: '/admin',
    redirect: '/dashboard',
    name: 'Admin',
    component: Main,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/listings',
        name: 'Listings',
        component: Listings,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
