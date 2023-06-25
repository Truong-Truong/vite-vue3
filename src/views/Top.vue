<template>
  <div class="top container">
    <HelloWorld msg="lqtruong" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/Top/HelloWorld.vue";
import { getBase, postBase } from "@/services/top";
console.log("top page");
async function init() {
  const res = await getBase();
  console.log(res);
}
init();
</script>

<style lang="scss" scoped></style>
