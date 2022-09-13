<template>
  <article>
    <img :src="imgUrl" />
    <div>{{ title }}</div>
    <div>{{ author }}</div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "tag-content-card",
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
  color: red;
  border: 1px solid violet;
}
</style>
