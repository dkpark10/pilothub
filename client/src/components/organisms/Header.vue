<template>
  <header>
    <HeaderTop />
    <HeaderBottom />
    <SearchBar />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBottom from "@/components/molecules/HeaderBottom.vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";

export default defineComponent({
  name: "header-component",
  components: {
    HeaderTop,
    HeaderBottom,
    SearchBar,
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: white;
}
</style>
