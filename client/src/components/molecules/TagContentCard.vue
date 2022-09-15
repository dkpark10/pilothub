<template>
  <article>
    <Image :src="(imgUrl as string)" />
    <div class="title_wrapper">{{ title }}</div>
    <div class="author_wrapper">
      <em>by</em>
      {{ author }}
    </div>
  </article>
</template>

<script lang="ts">
import Image from "@/components/atoms/Image.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "tag-content-card",
  components: {
    Image,
  },
  props: {
    imgUrl: {
      type: Object as PropType<string>,
    },
    title: {
      type: Object as PropType<string>,
    },
    author: {
      type: Object as PropType<string>,
    },
  },
});
</script>

<style lang="scss" scoped>
article {
  width: 45vw;
}

.title_wrapper {
  @include word-ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
