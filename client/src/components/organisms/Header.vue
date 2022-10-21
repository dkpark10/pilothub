<template>
  <header>
    <HeaderTop
      :is-shown-search-bar="isShownSearchBar"
      @show-search-bar="showSearchBar"
      @close-search-bar="closeSearchBar"
    />
    <HeaderBottom />
    <SearchBar v-show="isShownSearchBar" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderBottom from "@/components/molecules/HeaderBottom.vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";

const isShownSearchBar = ref(false);
const showSearchBar = () => {
  isShownSearchBar.value = true;
};

const closeSearchBar = () => {
  isShownSearchBar.value = false;
};
</script>

<style lang="scss" scoped>
header {
  background-color: white;
}
</style>
