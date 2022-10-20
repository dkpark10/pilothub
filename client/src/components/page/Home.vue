<template>
  <Header />
  <main>
    <MainContent />
    <TagContent />
  </main>
  <TopPosts />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import MainContent from "@/components/organisms/MainContent.vue";
import TopPosts from "@/components/organisms/TopPosts.vue";
import TagContent from "@/components/organisms/TagContents.vue";
import { RootState } from "@/store/index";
import { useStore } from "vuex";
import { SET_CURRENT_TAB } from "@/store/ui";

export default defineComponent({
  name: "App",
  components: {
    MainContent,
    TopPosts,
    TagContent,
  },
  setup() {
    const store = useStore<RootState>();
    onMounted(() => {
      store.commit(SET_CURRENT_TAB, "/");
    });
  },
});
</script>

<style lang="scss" scoped></style>
