<template>
  <div class="header_top">
    <div class="header_item_wrapper left">
      <div class="logo_wrapper">
        <ZoomLogo />
      </div>
      <span>허브</span>
    </div>
    <div class="header_item_wrapper right" v-if="!isShownSearchBar">
      <button type="button" name="open_search_bar" @click="openSearchBar">
        <Magnifier />
      </button>
      <Hamburger />
    </div>
    <div class="header_item_wrapper" :style="{ paddingRight: '12px' }" v-else>
      <button type="button" name="close_search_bar" @click="closeSearchBar">
        <Close />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Hamburger from "@/components/atoms/Hamburger.vue";
import Magnifier from "@/components/atoms/Magnifier.vue";
import ZoomLogo from "@/components/atoms/ZumLogo.vue";
import Close from "@/components/atoms/Close.vue";

export default defineComponent({
  name: "header-top",
  props: {
    isShownSearchBar: {
      type: Object as PropType<boolean>,
    },
  },
  components: {
    Hamburger,
    Magnifier,
    Close,
    ZoomLogo,
  },
  methods: {
    openSearchBar() {
      this.$emit("showSearchBar");
    },
    closeSearchBar() {
      this.$emit("closeSearchBar");
    },
  },
});
</script>

<style lang="scss" scoped>
.header_top {
  @include flex-space-between-align-center;
  padding-right: 6px;
}

.header_item_wrapper {
  @include flex-space-between-align-center;
  color: $mobile-main-color;
  font-size: 1.3rem;
}

.left {
  width: 98px;
}

.right {
  padding: 0 7px;
  width: 68px;
}

.logo_wrapper {
  width: 48px;
  height: 48px;
  position: relative;
  display: inline-block;
  background-color: $mobile-main-color;
}
</style>
