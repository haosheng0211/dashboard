<template>
  <v-list-item color="primary" link :to="{ name: route.path }" exact>
    <v-list-item-action>
      <v-icon v-text="route.icon" />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="route.name" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MenuConfig } from "@/types";

@Component({
  components: {}
})
export default class MenuChild extends Vue {
  @Prop({ required: true }) route?: MenuConfig;
}
</script>
