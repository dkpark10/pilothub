<template>
  <div class="img_wrapper" :style="style">
    <img :src="src" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "image-container",
  props: {
    src: {
      type: Object as PropType<string>,
      required: true,
    },
    width: {
      type: Object as PropType<string>,
    },
    height: {
      type: Object as PropType<string>,
    },
  },
  data() {
    return {
      style: {
        width: this.$props.width || "100%",
        height: this.$props.height || "100%",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.img_wrapper {
  display: inline-block;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
