<template>
  <section>
    <Header />
    <h1>{{ postId }}</h1>
    <CommentWrite :post-id="postId" />
    <CommentList :post-id="postId" />
    <FooterNavigator />
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import FooterNavigator from "@/components/molecules/FooterNavigator.vue";
import CommentWrite from "@/components/organisms/CommentWrite.vue";
import CommentList from "@/components/organisms/CommentList.vue";
import { PostId } from "custom-type";
import { useRecentPosts, RECENT_POST_KEY } from "@/hooks/use_recent_post";

export default defineComponent({
  name: "post-detail-page",
  components: {
    Footer,
    Header,
    FooterNavigator,
    CommentWrite,
    CommentList,
  },
  setup() {
    const route = useRoute();
    const postId = route.params.id as PostId;

    const recentPost = useRecentPosts();
    const duplicateRecentPostCheck = (postList: string[], postId: string) => {
      return postList.filter((item) => item !== postId);
    };

    const setRecentPost = () => {
      if (typeof window === "undefined") {
        return;
      }

      if (recentPost === null) {
        localStorage.setItem(RECENT_POST_KEY, JSON.stringify([postId]));
        return;
      }

      const newRecentPost = duplicateRecentPostCheck(recentPost, postId);
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
