<template>
  <div>
    <div class="content">
      <div :style="{ backgroundColor: 'white', height: '100%' }">
        <!-- <Loading /> -->
        <div class="dx-container">
          <div class="dx-content">
            <div class="dx-content-main">
              <router-view> </router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="id-global-footer" class="footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { RouteRecordName, useRoute } from "vue-router";

export default defineComponent({
  name: "MainPage",
  components: {},

  setup() {
    const route = useRoute();
    console.log('main page');
    return {};
  }
});
</script>
<style lang="scss" scoped></style>
