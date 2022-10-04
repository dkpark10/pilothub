<template>
  <Header />
  <main>
    <MainContent />
    <TagContent />
  </main>
  <TopPosts />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";
import MainContent from "@/components/organisms/MainContent.vue";
import TopPosts from "@/components/organisms/TopPosts.vue";
import TagContent from "@/components/organisms/TagContents.vue";
import Footer from "@/components/organisms/Footer.vue";

export default defineComponent({
  name: "app",
  components: {
    MainContent,
    TopPosts,
    TagContent,
    Footer,
    Header,
  },
});
</script>

<style lang="scss"></style>
