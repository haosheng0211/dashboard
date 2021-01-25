import Vue from "vue";
import Vuetify from "vuetify";
import zhHant from "vuetify/src/locale/zh-Hant";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#409EFF",
        secondary: "#909399",
        error: "#F56C6C",
        info: "#909399",
        success: "#67C23A",
        warning: "#E6A23C"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zhHant"
  }
});
