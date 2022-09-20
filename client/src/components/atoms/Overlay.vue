<template>
  <div class="overlay" :style="style" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Status {
  style: {
    zIndex: number;
  };
}

export default defineComponent({
  name: "overlay-component",
  props: {
    zIndex: {
      type: Object as PropType<number>,
    },
  },
  data(): Status {
    return {
      style: {
        zIndex: this.$props.zIndex || 0,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  background-color: $overlay-background-color;
  opacity: 0.4;
  position: fixed;
}
</style>
