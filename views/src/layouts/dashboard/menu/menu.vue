<template>
  <v-list dense nav>
    <template v-for="route in routes">
      <MenuGroup v-if="hasChildren(route)" :key="route.name" :route="route" />
      <MenuChild v-else :key="route.name" :route="route" />
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { MenuConfig } from "@/types";
import MenuChild from "@/layouts/dashboard/menu/menu-child.vue";
import MenuGroup from "@/layouts/dashboard/menu/menu-group.vue";

@Component({
  components: { MenuChild, MenuGroup }
})
export default class Menu extends Vue {
  @Provide() routes: Array<MenuConfig> = [];

  hasChildren(route: MenuConfig) {
    return route?.children && route.children.length;
  }

  created() {
    this.routes = this.$store.getters["routes/value"];
  }
}
</script>
