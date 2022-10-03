<template>
  <div>
    <Overlay @click="closeSideMenu" :zIndex="1" />
    <nav>
      <ul>
        <router-link to="/">
          <li>허브홈</li>
        </router-link>
        <router-link to="/ranking">
          <li>인기 허브 글</li>
        </router-link>
        <li>최근 읽은 글</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Overlay from "@/components/atoms/Overlay.vue";

export default defineComponent({
  name: "side-menu",
  components: {
    Overlay,
  },
  methods: {
    closeSideMenu() {
      this.$emit("close-side-menu");
    },
  },
});
</script>

<style lang="scss" scoped>
.side_menu_wrapper {
  display: flex;
}

nav {
  width: 41%;
  height: 100%;
  position: fixed;
  background-color: white;
  color: $mobile-main-color;
  top: 0;
  left: 59%;
  z-index: 2;
  font-size: 1.1rem;
  padding: 20px;

  ul li {
    margin: 10px 0px;
  }
}

a {
  color: $mobile-main-color;
}
</style>
