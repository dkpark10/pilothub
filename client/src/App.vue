<template>
  <main>
    <Header />
    <TagContent />
    <TopPosts />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";
import TopPosts from "@/components/organisms/TopPosts.vue";
import TagContent from "@/components/organisms/TagContents.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
    TopPosts,
    TagContent,
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
  background-color: #ededed;
}

button {
  border: none;
  background-color: transparent;
}
</style>
