<template>
  <button type="button" :style="style">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, CSSProperties, PropType } from "vue";

interface Status {
  style?: CSSProperties;
}

export default defineComponent({
  name: "button-component",
  data(): Status {
    return {
      style: {
        width: this.$props.width || "100%",
        height: this.$props.height || "100%",
        backgroundColor: this.$props.backgroundColor || "none",
        color: this.$props.color || "black",
        borderRadius: this.$props.borderRadius || "none",
      },
    };
  },
  props: {
    width: {
      type: Object as PropType<CSSProperties["width"]>,
    },
    height: {
      type: Object as PropType<CSSProperties["height"]>,
    },
    backgroundColor: {
      type: Object as PropType<CSSProperties["backgroundColor"]>,
    },
    color: {
      type: Object as PropType<CSSProperties["color"]>,
    },
    borderRadius: {
      type: Object as PropType<CSSProperties["borderRadius"]>,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
}
</style>
