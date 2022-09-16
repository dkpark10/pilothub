<template>
  <div class="carousel_track">
    <div
      class="carousel_slide"
      @mousemove="onMouseMove"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-carousel",
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    onMouseDown() {
      this.isClicked = true;
    },
    onMouseUp() {
      this.isClicked = false;
    },
    onMouseMove(e: Event) {
      console.log(e, "모바일은 이벤트 명이 다르다 이말이야");
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel_track {
  display: flex;
  position: relative;
  overflow: hidden;
  border: 1px solid chartreuse;
}

.carousel_slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
