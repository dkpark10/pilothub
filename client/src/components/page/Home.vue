<template>
  <Header />
  <main>
    <div v-if="mainLoading && !mainError">
      <Spinner />
    </div>
    <div v-else-if="mainData !== undefined">
      <MainContent :mainData="(mainData as PostItem[])" />
    </div>
    <div v-else>
      <Error />
    </div>
    <TagContent />
  </main>
  <TopPosts />
  <Footer />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, PropType, ref } from "vue";
import Header from "@/components/organisms/Header.vue";
import MainContent from "@/components/organisms/MainContent.vue";
import TopPosts from "@/components/organisms/TopPosts.vue";
import TagContent from "@/components/organisms/TagContents.vue";
import Footer from "@/components/organisms/Footer.vue";
import Spinner from "@/components/atoms/Spinner.vue";
import Error from "@/components/atoms/Error.vue";
import { useFetch } from "@/hooks/index";
import { BASE_URL } from "@/utils";
import { PostItem } from "custom-type";

export default defineComponent({
  name: "app",
  components: {
    MainContent,
    TopPosts,
    TagContent,
    Footer,
    Header,
    Spinner,
    Error,
  },
  setup() {
    const [mainData, mainLoading, mainError] = useFetch<PostItem[]>(
      `${BASE_URL}/post/main`
    );

    return {
      mainData,
      mainLoading,
      mainError,
    };
  },
});
</script>

<style lang="scss" scoped></style>
