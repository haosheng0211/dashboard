import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import store from "./store";
import api from "./apis";
import vuetify from "./plugins/vuetify";

Vue.prototype.$api = api;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(app)
}).$mount("#app");
