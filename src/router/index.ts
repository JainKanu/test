import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import UsersView from "../views/Users.vue";
import FormPageView from "../views/FormPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "users",
    component: UsersView,
  },
  {
    path: "/form-page",
    name: "form-page",
    component: FormPageView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
