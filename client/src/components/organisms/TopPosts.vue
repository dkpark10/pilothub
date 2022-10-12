<template>
  <section class="top_posts_wrapper">
    <h4>인기허브글</h4>
    <ul v-for="(postItem, idx) in postItems" :key="idx">
      <li>
        <PostInfo
          :show-rank="true"
          :title="postItem.title"
          :author="postItem.author"
        >
          <span> {{ postItem.rank }} </span>
        </PostInfo>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import { RankedPostItem } from "custom-type";
import { BASE_URL } from "@/utils/index";

export default defineComponent({
  name: "top-posts",
  components: {
    PostInfo,
  },
  setup() {
    const postItems = ref<RankedPostItem[]>([]);

    onMounted(async () => {
      const { data } = await axios.get<RankedPostItem[]>(
        `${BASE_URL}/post/ranking`
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
.top_posts_wrapper {
  @include hub-setion-wrapper;
  background-color: white;
  margin-top: 10px;

  h4 {
    margin-bottom: 3vw;
  }
}

ul li {
  padding: 11px 0;
  border-top: 1px solid $line-color;
}
</style>
