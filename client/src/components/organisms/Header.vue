<template>
  <header>
    <HeaderTop
      :isShownSearchBar="isShownSearchBar"
      @show-search-bar="showSearchBar"
      @close-search-bar="closeSearchBar"
    />
    <HeaderBottom />
    <SearchBar v-show="isShownSearchBar" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBottom from "@/components/molecules/HeaderBottom.vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import Carousel from "@/components/atoms/Carousel.vue";

interface State {
  isShownSearchBar: boolean;
}

export default defineComponent({
  name: "header-component",
  components: {
    HeaderTop,
    HeaderBottom,
    SearchBar,
    Carousel,
  },
  data(): State {
    return {
      isShownSearchBar: false,
    };
  },
  methods: {
    showSearchBar() {
      this.isShownSearchBar = true;
    },
    closeSearchBar() {
      this.isShownSearchBar = false;
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: white;
}
</style>
