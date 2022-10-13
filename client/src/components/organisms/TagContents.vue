<template>
  <section class="tag_content_wrapper">
    <h4>#{{ channelTitle(0) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(0, 4)" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>#{{ channelTitle(4) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(4, 8)" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>#{{ channelTitle(8) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(8)" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import { useFetch } from "@/hooks/index";
import { BASE_URL } from "@/utils";
import { PostItem } from "custom-type";

export default defineComponent({
  name: "tag-contents",
  components: {
    TagContentCard,
  },
  setup() {
    const CHANNEL_URL = `${BASE_URL}/post/channel`;
    const [channelData, loading, error] = useFetch<PostItem[]>(CHANNEL_URL);

    const channelTitle = (idx: number) => {
      if (channelData.value) {
        return channelData.value[idx].postId.split("_")[0];
      }
      return "";
    };

    return {
      channelTitle,
      channelData,
      loading,
      error,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag_content_wrapper {
  @include hub-setion-wrapper;
  background-color: white;

  h4 {
    color: $mobile-main-color;
    margin-bottom: 3vw;
  }
}

.tag_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 8px;
}
</style>
