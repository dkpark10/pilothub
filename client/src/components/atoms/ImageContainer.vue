<template>
  <div class="img_wrapper" :style="style">
    <Skeleton v-if="!isLoad" />
    <img :src="src" @load="onLoad" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Skeleton from "@/components/atoms/Skeleton.vue";

interface Status {
  isLoad: boolean;
  style: {
    width: string;
    height: string;
  };
}

export default defineComponent({
  name: "image-container",
  components: {
    Skeleton,
  },
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
    alt: {
      type: Object as PropType<string>,
    },
  },
  data(): Status {
    return {
      isLoad: false,
      style: {
        width: this.$props.width || "100%",
        height: this.$props.height || "100%",
      },
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.isLoad = true;
      }, 700);
      // this.isLoad = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.img_wrapper {
  display: inline-block;
  overflow: hidden;

  img,
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
