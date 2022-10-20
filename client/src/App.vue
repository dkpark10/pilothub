<template>
  <metainfo />
  <div id="app">
    <Header />
    <router-view :key="route.fullPath" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
  setup() {
    useMeta({
      title: "hub줌 클론",
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "세상의 변화와 취향을 담은 웰메이드 콘텐츠를 만나보세요!",
        },
      ],
    });
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  vertical-align: baseline;
}

body {
  background-color: #eef0f2;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: $nav-font-color;
}
</style>
