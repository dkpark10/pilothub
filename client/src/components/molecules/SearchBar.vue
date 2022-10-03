<template>
  <div class="search_bar">
    <label for="search">
      <input type="text" name="search" placeholder="허브글, 채널 검색" />
    </label>
    <div class="magnifier_wrapper">
      <button type="button" name="search_keyword_button">
        <Magnifier />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Magnifier from "@/components/atoms/Magnifier.vue";

export default defineComponent({
  name: "search-bar",
  components: {
    Magnifier,
  },
});
</script>

<style lang="scss" scoped>
.search_bar {
  color: $mobile-main-color;
  height: 46px;
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
  height: 76%;
  padding: 0 8px;
  font-weight: bold;
}

.magnifier_wrapper {
  background-color: white;
  position: absolute;
  left: 90%;
  top: 32%;
}
</style>
