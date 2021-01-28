<template>
  <v-breadcrumbs v-if="hidden" class="breadcrumbs" :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item exact :to="item.to">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

type BreadcrumbObject = {
  text: string;
  to: {
    name: string;
  };
};
type RouteConfig = {
  name?: string;
  path?: string;
};
@Component
export default class Breadcrumb extends Vue {
  get items() {
    const data: Array<BreadcrumbObject> = [
      {
        text: "首頁",
        to: { name: "dashboard" }
      }
    ];
    console.log(data);
    this.$route.matched.map(route => {
      if (route.meta?.title) {
        data.push({
          text: route.meta.title,
          to: { name: route.name || "exception" }
        });
      }
    });
    return data;
  }

  get hidden() {
    return this.$route.name !== "dashboard";
  }
}
</script>
<style>
ul.breadcrumbs {
  padding: 18px 12px 0;
}
</style>
