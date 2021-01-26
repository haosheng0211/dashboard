import api from "@/apis";
import { MenuConfig } from "@/types";

export default {
  namespaced: true,
  state: {
    value: []
  },
  mutations: {
    SET_ROUTE(state: { value: Array<MenuConfig> }, payload: MenuConfig) {
      const children: Array<MenuConfig> = [];
      if (payload.children?.length) {
        payload.children.map((route: MenuConfig) => {
          children.push({
            path: route.path,
            name: route.name,
            meta: route.meta,
            component: () => import(`@/pages/${route.component}.vue`)
          });
        });
      }
      state.value.push({
        path: payload.path,
        name: payload.name,
        meta: payload.meta,
        component: () => import(`@/pages/${payload.component}.vue`),
        children: children
      });
    },
    CLEAR_ROUTE(state: { value: Array<MenuConfig> }) {
      state.value = [];
    }
  },
  getters: {
    value: (state: { value: Array<MenuConfig> }) => {
      return state.value;
    }
  },
  actions: {
    loading: async ({
      commit,
      state
    }: {
      commit: Function;
      state: {
        value: Array<MenuConfig>;
      };
    }) => {
      if (!state.value.length) {
        await commit("CLEAR_ROUTE");
        const response = await api.menu.index();
        response.data.map((route: MenuConfig) => {
          commit("SET_ROUTE", route);
        });
      }
    }
  }
};
