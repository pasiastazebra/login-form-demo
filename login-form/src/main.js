import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/form_components/SignUp.vue";
import SignIn from "./components/form_components/SignIn.vue";

const routes = [
  {
    path: "/",
    component: SignUp,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft faster animate__faster",
      leaveClass: "animate__animated animate__fadeOutRight faster animate__faster"
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: {
      enterClass: "animate__animated animate__fadeInRight animate__faster",
      leaveClass: "animate__animated animate__fadeOutLeft animate__faster"
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



createApp(App)
  .use(router)
  .mount("#app");