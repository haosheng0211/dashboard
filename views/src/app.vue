<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  metaInfo() {
    return {
      title: this.title + "｜管理平台"
    };
  }
})
export default class App extends Vue {
  get title() {
    return this.$route.meta.title;
  }
}
</script>
