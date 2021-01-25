<template>
  <v-list-group v-model="active">
    <template v-slot:activator>
      <v-list-item-action>
        <v-icon v-text="route.icon" />
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="route.name" />
      </v-list-item-content>
    </template>
    <MenuChild
      v-for="children in route.children"
      :key="children.name"
      :route="children"
    />
  </v-list-group>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue, Watch } from "vue-property-decorator";
import { MenuConfig } from "@/types";
import MenuChild from "./menu-child.vue";

@Component({
  components: { MenuChild }
})
export default class MenuGroup extends Vue {
  @Prop({ required: true }) route?: MenuConfig;
  @Provide() active = false;

  @Watch("$route")
  handleRoute() {
    this.handleActive();
  }

  handleActive() {
    this.active =
      this.route?.children?.some(route => route.path === this.$route.name) ||
      false;
  }

  created() {
    this.handleActive();
  }
}
</script>
