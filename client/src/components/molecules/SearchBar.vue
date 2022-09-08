<template>
  <div class="search_bar">
    <label for="search">
      <input type="text" name="search" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "search-bar",
});
</script>

<style lang="scss" scoped>
.search_bar {
  color: $mobile-main-color;
  height: 45px;
  border: 1px solid red;
  position: relative;
}

input[type="text"] {
  outline: none;
  border: 2px solid $mobile-main-color;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 94vw;
  height: 66%;
}
</style>
