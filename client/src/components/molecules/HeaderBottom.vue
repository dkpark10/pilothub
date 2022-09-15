<template>
  <nav>
    <!-- <ul v-for="(menuItem, idx) in menuItems" :key="idx">
      <li
        @click="onClickMenu(idx)"
        @keydown="onClickMenu(idx)"
        :class="{ on_tab: selectedMenuItemIndex === idx }"
      >
        {{ menuItem }}
      </li>
    </ul> -->
    <Carousel :breakpoints="breakpoints">
      <Slide v-for="(menuItem, idx) in menuItems" :key="idx">
        <span
          @click="onClickMenu(idx)"
          @keydown="onClickMenu(idx)"
          :class="{ on_tab: selectedMenuItemIndex === idx }"
        >
          {{ menuItem }}
        </span>
      </Slide>
    </Carousel>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

interface State {
  menuItems: string[];
  selectedMenuItemIndex: number;
  breakpoints: {
    [key: number]: {
      itemsToShow: number;
      snapAlign: string;
    };
  };
}

export default defineComponent({
  name: "header-bottom",
  components: {
    Carousel,
    Slide,
  },
  methods: {
    onClickMenu(idx: number) {
      this.selectedMenuItemIndex = idx;
    },
  },
  data(): State {
    return {
      menuItems: [
        "홈",
        "라이프",
        "푸드",
        "여행",
        "컬쳐",
        "테크",
        "비즈",
        "이슈",
        "연예",
      ],
      selectedMenuItemIndex: 0,
      breakpoints: {
        325: {
          itemsToShow: 7,
          snapAlign: "start",
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.on_tab {
  color: $main-color;
  font-weight: bold;
}

nav {
  height: 45px;
  border: 1px solid salmon;
}

// nav {
//   @include flex-space-between-align-center;
//   @include top-bottom-border-line;
//   color: $font-color;
//   padding: 12px;
//   height: 45px;
//   font-weight: bold;
//   background-color: white;
//   border: 1px solid yellow;

//   & ul li {
//     margin: 0 5px;
//   }
// }
</style>
