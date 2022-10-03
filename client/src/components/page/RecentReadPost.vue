<template>
  <section>
    <Header />
    <h1>최근 읽은 글</h1>
    <div v-for="(item, idx) in recentReadPosts" :key="idx">
      <div>{{ item }}</div>
    </div>
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import { useRecentPosts } from "@/hooks/use_recent_post";

export default defineComponent({
  name: "recent-read-post",
  components: {
    Footer,
    Header,
  },
  setup() {
    const recentReadPosts = ref(useRecentPosts());
    return {
      recentReadPosts,
    };
  },
});
</script>

<style lang="scss"></style>
