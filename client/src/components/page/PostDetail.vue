<template>
  <section>
    <Header />
    <h1>{{ postId }}</h1>
    <Comment />
    <FooterNavigator />
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRecentPosts, RECENT_POST_KEY } from "@/hooks/use_recent_post";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import FooterNavigator from "@/components/molecules/FooterNavigator.vue";
import Comment from "@/components/organisms/Comment.vue";

interface Status {
  postId: number;
}

export default defineComponent({
  name: "post-detail-page",
  components: {
    Footer,
    Header,
    FooterNavigator,
    Comment,
  },
  setup(): Status {
    const route = useRoute();
    const postId = Number(route.params.id);
    const recentPost = useRecentPosts();

    const setRecentPost = () => {
      if (recentPost === null) {
        localStorage.setItem(RECENT_POST_KEY, JSON.stringify([postId]));
        return;
      }

      const newRecentPost = recentPost.filter((item) => item !== postId);
      newRecentPost.push(postId);

      localStorage.setItem(RECENT_POST_KEY, JSON.stringify(newRecentPost));
    };

    onMounted(() => {
      setRecentPost();
    });

    return {
      postId,
    };
  },
});
</script>

<style lang="scss"></style>
