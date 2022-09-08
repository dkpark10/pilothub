<template>
  <div class="header_top">
    <div class="header_item_wrapper left">
      <div class="logo_wrapper">
        <div class="logo"></div>
      </div>
      <span>허브</span>
    </div>
    <div class="header_item_wrapper right">
      <button type="button" name="search_keyword_button" @click="openSearchBar">
        <div class="glass"></div>
      </button>
      <hamburger />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hamburger from "@/components/atoms/Hamburger.vue";

export default defineComponent({
  name: "header-top",
  components: {
    hamburger: Hamburger,
  },
  methods: {
    openSearchBar() {
      console.log("...test");
    },
  },
});
</script>

<style lang="scss" scoped>
.header_top {
  @include flex-space-between-align-center;
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

.logo,
.glass {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_header_190402.png?v=1661217438830");
}

.logo {
  width: 18px;
  height: 18px;
  background-position: 0 0;
  background-size: 101px 85px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.glass {
  width: 20px;
  height: 19px;
  overflow: hidden;
  background-position: -25px -22px;
  background-size: 101px 85px;
  display: block;
}
</style>
