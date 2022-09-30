<template>
  <div class="img_wrapper" :style="style">
    <Skeleton v-show="loading" />
    <div class="error_msg_wrapper" v-show="error">
      <span>이미지를 불러오는데 실패하였습니다.</span>
    </div>
    <img :src="src" @load="onLoad" :alt="alt" @error="onError" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Skeleton from "@/components/atoms/Skeleton.vue";

interface Status {
  loading: boolean;
  error: boolean;
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
      loading: true,
      error: false,
      style: {
        width: this.$props.width || "100%",
        height: this.$props.height || "100%",
      },
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = false;
      }, 700);
    },
    onError() {
      this.error = true;
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

  .error_msg_wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid $darker-gray;
    color: $font-color;
    text-align: center;
    @include flex-align-items-center;
  }
}
</style>
