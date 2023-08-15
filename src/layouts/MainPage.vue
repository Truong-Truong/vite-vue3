<template>
  <div class="row">
    <router-view> </router-view>
    <div id="id-global-footer" class="footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  components: {},

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
