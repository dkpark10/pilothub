<template>
  <header>
    <HeaderTop
      :isShownSearchBar="isShownSearchBar"
      @show-search-bar="showSearchBar"
      @close-search-bar="closeSearchBar"
    />
    <HeaderBottom />
    <SearchBar v-show="isShownSearchBar" />
    <Carousel v-show="seenMyCarousel">
      <div v-for="(item, idx) in itemList" :key="idx">
        <span>{{ item }}</span>
      </div>
    </Carousel>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBottom from "@/components/molecules/HeaderBottom.vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import Carousel from "@/components/atoms/Carousel.vue";

interface State {
  itemList: string[];
  seenMyCarousel: boolean;
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
      itemList: Array.from({ length: 16 }, (v, i) => `아템${i + 1}`),
      seenMyCarousel: false,
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
