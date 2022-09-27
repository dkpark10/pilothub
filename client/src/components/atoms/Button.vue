<template>
  <button type="button" :style="style">
    <slot name="content" />
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
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;

  &:hover {
    background-color: v-bind(backgroundColor);
  }
}
</style>
