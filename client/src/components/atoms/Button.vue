<template>
  <button :style="style">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Unit = "px" | "%" | "vw" | "vh" | "vmin" | "vmax";
type SizeUnit = `${number}${Unit}`;

interface Status {
  style: {
    width: SizeUnit;
    height: SizeUnit;
    backgroundColor: string;
    color: string;
  };
}

export default defineComponent({
  name: "button-component",
  props: {
    width: {
      type: Object as PropType<SizeUnit>,
    },
    height: {
      type: Object as PropType<SizeUnit>,
    },
    backgroundColor: {
      type: Object as PropType<string>,
    },
    fontColor: {
      type: Object as PropType<string>,
    },
  },
  data(): Status {
    return {
      style: {
        width: this.$props.width || "100%",
        height: this.$props.height || "100%",
        backgroundColor: this.$props.backgroundColor || "none",
        color: this.$props.fontColor || "black",
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
