<template>
  <nav :class="{ nav_fixed: showElementFixed }">
    <Carousel
      :breakpoints="breakpoints"
      :style="{ width: '100%' }"
      :transition="100"
    >
      <Slide v-for="(menuItem, idx) in menuItems" :key="idx">
        <span
          class="navi_item"
          @click="onClickMenu(idx)"
          @keydown="onClickMenu(idx)"
          :class="{ on_tab: isCurrentTab(idx) }"
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
  showElementFixed: boolean;
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
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset <= 48) {
        this.showElementFixed = false;
        return;
      }

      this.showElementFixed = true;
    });
  },
  methods: {
    onClickMenu(idx: number) {
      this.selectedMenuItemIndex = idx;
    },
    isCurrentTab(idx: number) {
      return this.selectedMenuItemIndex === idx;
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
      showElementFixed: false,
      breakpoints: {
        325: {
          itemsToShow: 7.5,
          snapAlign: "start",
        },
        455: {
          itemsToShow: 9,
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
  @include top-bottom-border-line;
  height: 45px;
  background-color: white;
  display: flex;
  align-items: center;
}

.nav_fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.navi_item {
  font-weight: bold;
  font-size: 1.05rem;
}
</style>
