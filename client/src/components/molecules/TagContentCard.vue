<template>
  <article>
    <ImageContainer height="120px" :src="(imgUrl as string)" :alt="title" />
    <strong class="title_wrapper">{{ title }}</strong>
    <div class="author_wrapper">
      <em>by</em>
      {{ author }}
    </div>
  </article>
</template>

<script lang="ts">
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "tag-content-card",
  components: {
    ImageContainer,
  },
  props: {
    imgUrl: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
});
</script>

<style lang="scss" scoped>
strong {
  @include word-ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: $font-color;
  font-weight: normal;
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
