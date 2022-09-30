<template>
  <div class="postitem_wrapper">
    <div class="rank_wrapper">
      {{ rank }}
    </div>
    <div class="title_wrapper">
      <strong :style="titleStyle">
        {{ title }}
      </strong>
      <div class="author_wrapper" :style="authorStyle">
        <em>by</em>
        {{ author }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, CSSProperties } from "vue";
import { useFontSize } from "@/hooks/usefontsize";

interface Status {
  titleStyle: Ref<CSSProperties>;
  authorStyle: Ref<CSSProperties>;
}

export default defineComponent({
  name: "top-post-item",
  props: {
    rank: {
      type: Object as PropType<number>,
    },
    title: {
      type: Object as PropType<string>,
    },
    author: {
      type: Object as PropType<string>,
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
.postitem_wrapper {
  height: 70px;
  display: flex;
  border-top: 1px solid $line-color;
  align-items: center;
}

.rank_wrapper {
  color: $mobile-main-color;
  font-size: 1.12rem;
  width: 24px;
  position: relative;
  top: -9px;
}

.title_wrapper {
  @include word-ellipsis;
  white-space: nowrap;
  width: 100%;

  strong {
    font-weight: normal;
    color: $font-color;
  }
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
