<template>
  <section>
    <Header />
    <h1>{{ postId }}</h1>
    <CommentWrite />
    <CommentList />
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
import CommentWrite from "@/components/organisms/CommentWrite.vue";
import CommentList from "@/components/organisms/CommentList.vue";

interface Status {
  postId: number;
}

export default defineComponent({
  name: "post-detail-page",
  components: {
    Footer,
    Header,
    FooterNavigator,
    CommentWrite,
    CommentList,
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
