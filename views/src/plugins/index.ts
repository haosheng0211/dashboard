import Vue from "vue";
import VueMeta from "./vue-meta";
import Vuetify from "./vuetify";
import ElementUI from "./element";
import api from "@/apis";

Vue.prototype.$api = api;
Vue.use(VueMeta);
Vue.use(ElementUI);
export const vuetify = Vuetify;
