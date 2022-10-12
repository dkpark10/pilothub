<template>
  <HeaderTop />
  <main>
    <div class="tag_content_wrapper">
      <div class="page_title">인기 허브글</div>
      <ul v-for="(item, idx) in postItems" :key="idx">
        <li>
          <ImageContainer
            width="100%"
            height="160px"
            :src="item.imgUrl"
            :alt="item.title"
          />
          <PostInfo :show-rank="true" :title="item.title" :author="item.author">
            <span> {{ item.rank }} </span>
          </PostInfo>
        </li>
      </ul>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import Footer from "@/components/organisms/Footer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import { RankedPostItem } from "custom-type";

export default defineComponent({
  name: "ranking-page",
  components: {
    Footer,
    HeaderTop,
    ImageContainer,
    PostInfo,
  },
  setup() {
    const postItems = ref<RankedPostItem[]>([]);

    onMounted(async () => {
      const { data } = await axios.get<RankedPostItem[]>(
        "http://localhost:3000/post/ranking"
      );
      postItems.value = data.map((item, idx) => ({
        ...item,
        rank: idx + 1,
      }));
    });

    return {
      postItems,
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
