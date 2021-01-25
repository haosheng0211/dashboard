<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped app>
      <Menu />
    </v-navigation-drawer>
    <v-app-bar color="primary" app dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <h5>管理系統平台</h5>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import Menu from "./menu/menu.vue";

@Component({
  components: { Menu }
})
export default class Dashboard extends Vue {
  @Provide() drawer = false;

  created() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp;
  }
}
</script>
