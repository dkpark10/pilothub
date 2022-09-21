<template>
  <div class="postitem_wrapper">
    <div class="rank_wrapper">
      {{ rank }}
    </div>
    <div class="title_wrapper">
      <strong>
        {{ title }}
      </strong>
      <div class="author_wrapper">
        <em>by</em>
        {{ author }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "top-post-item",
  props: {
    rank: {
      type: Number,
    },
    title: {
      type: String,
    },
    author: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.postitem_wrapper {
  height: 70px;
  display: flex;
  border-top: 1px solid $line-color;
  padding: 3vw 0px;
}

.rank_wrapper {
  color: $mobile-main-color;
  font-size: 1.1rem;
  width: 24px;
  line-height: 20px;
}

.title_wrapper {
  @include word-ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 1.02rem;

  strong {
    font-weight: normal;
  }
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
