<template>
  <div class="carousel_track">
    <div class="carousel_slide" @mousedown="onMouseDown" @mouseup="onMouseUp">
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
