<template>
  <HeaderTop />
  <div class="title_wrapper">
    <span>최근 읽은 글</span>
  </div>
  <main v-if="data">
    <div class="content_wrapper">
      <ul v-for="(item, idx) in data" :key="idx">
        <li>
          <ImageContainer height="160px" :src="item.imgUrl" :alt="item.title" />
          <PostInfo
            :showRank="false"
            :title="item.title"
            :author="item.author"
          />
        </li>
      </ul>
    </div>
  </main>
  <main v-else>
    <div class="content_wrapper">읽은 글이 없습니다.</div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import Footer from "@/components/organisms/Footer.vue";
import { mockData } from "@/assets/hubmock/index";
import { useRecentPosts } from "@/hooks/use_recent_post";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import { NavName, PostItem } from "custom-type";

export default defineComponent({
  name: "recent-read-post",
  components: {
    Footer,
    HeaderTop,
    ImageContainer,
    PostInfo,
  },
  setup() {
    const findRecentPost = () => {
      const recentReadPosts = useRecentPosts();
      if (recentReadPosts === null) {
        return undefined;
      }

      return recentReadPosts.map((postId): PostItem => {
        const category = postId.split("_")[0];

        return mockData[category as NavName].find(
          (postItem) => postItem.postId === postId
        ) as PostItem;
      });
    };

    const data = findRecentPost();
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.title_wrapper {
  color: $mobile-main-color;
  font-size: 1.45rem;
  font-weight: normal;
  position: relative;
  height: 80px;

  span {
    @include absolute-center;
  }
}
.content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
  text-align: v-bind("data ? 'none' : 'center'");
}

ul li {
  margin-bottom: 15px;
}
</style>
