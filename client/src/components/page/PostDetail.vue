<template>
  <section>
    <Header />
    <article>
      <div v-show="!loading && post !== undefined">
        <ImageContainer
          :src="(post?.imgUrl as string)"
          :alt="(post?.title as string)"
          width="100%"
          height="160px"
        />
        <div class="title">{{ post?.title as string }}</div>
        <div class="author">{{ post?.author as string }}</div>
      </div>
    </article>
    <CommentWrite :post-id="postId" />
    <CommentList :post-id="postId" />
    <FooterNavigator />
    <Footer />
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import FooterNavigator from "@/components/molecules/FooterNavigator.vue";
import CommentWrite from "@/components/organisms/CommentWrite.vue";
import CommentList from "@/components/organisms/CommentList.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import { PostId, PostItem } from "custom-type";
import { useRecentPosts, RECENT_POST_KEY } from "@/hooks/use_recent_post";
import { BASE_URL } from "@/utils";

export default defineComponent({
  name: "post-detail-page",
  components: {
    Footer,
    Header,
    FooterNavigator,
    CommentWrite,
    CommentList,
    ImageContainer,
  },
  setup() {
    const route = useRoute();
    const postId = route.params.id as PostId;

    const recentPost = useRecentPosts();
    const post = ref<PostItem>();
    const loading = ref(true);
    const error = ref(true);

    const duplicateRecentPostCheck = (postList: string[], postId: string) => {
      return postList.filter((item) => item !== postId);
    };

    const fetchPost = async () => {
      try {
        const { data } = await axios.get<PostItem>(
          `${BASE_URL}/post/${postId}`
        );
        post.value = data;
        loading.value = false;
      } catch (e) {
        error.value = true;
      }
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
      fetchPost();
    });

    return {
      postId,
      post,
      loading,
      error,
    };
  },
});
</script>

<style lang="scss">
article {
  margin: 2vh 0;
  background-color: white;
}

.title {
  @include mob-hub-padding;
  font-size: 1.2rem;
  font-weight: bold;
}

.author {
  @include mob-hub-padding;
  text-align: center;
  color: $main-color;
  font-weight: bold;
  margin: 1vh 0;
}
</style>
