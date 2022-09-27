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
    <h1>{{ fontSizeRatio }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, PropType, ref, Ref } from "vue";
import { RootState } from "@/store/index";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

interface Status {
  fontSizeRatio: Ref<string>;
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
    const store = useStore<RootState>();
    const fontSizeRatio = computed(
      () => `${store.state.fontSizeModule.fontSizeRatio * 15}px`
    );

    return {
      fontSizeRatio,
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
