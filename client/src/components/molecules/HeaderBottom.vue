<template>
  <nav class="category_menu">
    <ul v-for="(menuItem, idx) in menuItems" :key="idx">
      <li
        @click="onClickMenu(idx)"
        @keydown="onClickMenu(idx)"
        :class="{ on_tab: selectedMenuItemIndex === idx }"
      >
        {{ menuItem }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface State {
  menuItems: string[];
  selectedMenuItemIndex: number;
}

export default defineComponent({
  name: "header-bottom",
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
    };
  },
});
</script>

<style lang="scss" scoped>
.on_tab {
  color: $main-color;
  font-weight: bold;
}

.category_menu {
  @include flex-space-between-align-center;
  color: $font-color;
  padding: 12px;
  height: 45px;
  font-weight: bold;
  @include top-bottom-border-line;

  & ul li {
    border: 1px solid yellow;
    margin: 0 5px;
  }
}
</style>
