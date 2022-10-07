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
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import FooterNavigator from "@/components/molecules/FooterNavigator.vue";
import CommentWrite from "@/components/organisms/CommentWrite.vue";
import CommentList from "@/components/organisms/CommentList.vue";
import { PostId } from "custom-type";

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

    return {
      postId,
    };
  },
});
</script>

<style lang="scss"></style>
