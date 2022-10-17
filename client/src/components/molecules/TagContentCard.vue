<template>
  <article>
    <ImageContainer height="120px" :src="(imgUrl as string)" :alt="title" />
    <strong class="title_wrapper" :style="titleStyle">{{ title }}</strong>
    <div class="author_wrapper" :style="authorStyle">
      <em>by</em>
      {{ author }}
    </div>
  </article>
</template>

<script lang="ts">
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import { CSSProperties, defineComponent, Ref } from "vue";
import { useFontSize } from "@/hooks/use_fontsize";

interface Status {
  titleStyle: Ref<CSSProperties>;
  authorStyle: Ref<CSSProperties>;
}

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
    webkitLineClamp: {
      type: Number,
    },
  },
  setup(): Status {
    const titleStyle = useFontSize(15);
    const authorStyle = useFontSize(12);

    return {
      titleStyle,
      authorStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
strong {
  @include word-ellipsis;
  color: $font-color;
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: v-bind(webkitLineClamp);
  -webkit-box-orient: vertical;
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
