<template>
  <Header />
  <main>
    <div class="tag_content_wrapper">
      <div class="page_title">인기 허브글</div>
      <ul v-for="(item, idx) in data" :key="idx">
        <li>
          <ImageContainer :src="item.imgUrl" :alt="item.title" />
          <PostInfo :title="item.title" :author="item.author">
            <span> {{ item.rank }} </span>
          </PostInfo>
        </li>
      </ul>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Header from "@/components/organisms/Header.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import Footer from "@/components/organisms/Footer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import RankingPost, { RankPostItem } from "@/assets/hubmock/RankPost";

interface Status {
  data: RankPostItem[];
}

export default defineComponent({
  name: "ranking-page",
  components: {
    Footer,
    Header,
    ImageContainer,
    PostInfo,
  },
  setup(): Status {
    const data = reactive(RankingPost);
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag_content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
}
.page_title {
  font-size: 1.1rem;
  font-weight: bold;
  color: $font-color;
  margin-bottom: 13px;
}

ul li {
  margin-bottom: 15px;
}
</style>
