<template>
  <nav :class="{ nav_fixed: showElementFixed }">
    <Carousel
      :breakpoints="breakpoints"
      :style="{ width: '100%' }"
      :transition="100"
    >
      <Slide v-for="(menuItem, idx) in menuItems" :key="idx">
        <router-link :to="menuItem.url">
          <span
            class="navi_item"
            @click="onClickMenu(idx)"
            @keydown="onClickMenu(idx)"
            :class="{ on_tab: isCurrentTab(menuItem.url) }"
          >
            {{ menuItem.text }}
          </span>
        </router-link>
      </Slide>
    </Carousel>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

type NavText =
  | "홈"
  | "라이프"
  | "푸드"
  | "여행"
  | "컬처"
  | "테크"
  | "비즈"
  | "이슈"
  | "연예";
type NavUrl =
  | "/"
  | "/life"
  | "/food"
  | "/trip"
  | "/culture"
  | "/tech"
  | "/biz"
  | "/issue"
  | "/entertainment";

interface MenuItem {
  text: NavText;
  url: NavUrl;
}

interface State {
  menuItems: MenuItem[];
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
    document.addEventListener("scroll", this.onScrollEvent);
  },
  unmounted() {
    document.removeEventListener("scroll", this.onScrollEvent);
  },
  methods: {
    onClickMenu(idx: number) {
      this.selectedMenuItemIndex = idx;
    },
    isCurrentTab(url: string) {
      return this.$route.path === url;
    },
    onScrollEvent() {
      if (window.pageYOffset <= 48) {
        this.showElementFixed = false;
        return;
      }

      this.showElementFixed = true;
    },
  },
  data(): State {
    return {
      menuItems: [
        {
          text: "홈",
          url: "/",
        },
        {
          text: "라이프",
          url: "/life",
        },
        {
          text: "푸드",
          url: "/food",
        },
        {
          text: "여행",
          url: "/trip",
        },
        {
          text: "컬처",
          url: "/culture",
        },
        {
          text: "테크",
          url: "/tech",
        },
        {
          text: "비즈",
          url: "/biz",
        },
        {
          text: "이슈",
          url: "/issue",
        },
        {
          text: "연예",
          url: "/entertainment",
        },
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

a {
  color: $nav-font-color;
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
