<template>
  <button type="button" :style="style">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, CSSProperties, PropType } from "vue";

export default defineComponent({
  name: "button-component",
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
  setup(props) {
    return {
      style: {
        width: props.width || "100%",
        height: props.height || "100%",
        backgroundColor: props.backgroundColor || "none",
        color: props.color || "black",
        borderRadius: props.borderRadius || "none",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
}
</style>
