<template>
  <v-list-item
    v-if="route.meta.show"
    color="primary"
    link
    :to="{ name: route.name }"
    exact
  >
    <v-list-item-action>
      <v-icon v-text="route.meta.icon" />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="route.meta.title" />
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
