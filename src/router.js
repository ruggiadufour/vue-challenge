import Vue from "vue";
import Router from "vue-router";
import Search from "./components/Search.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
  ],
});
