<template>
  <section>
    <div class="comment_header">
      <span class="left">전체 댓글 6</span>
      <span class="right">내 댓글</span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "comment-component",
});
</script>

<style lang="scss" scoped>
section {
  @include margin-y-axis;
  background-color: white;
  padding: 20px 0;
}

.comment_header {
  @include mob-hub-padding;
  @include flex-space-between-align-center;
  border: 1px solid red;
  margin-bottom: 20px;

  .left {
    font-weight: bold;
  }

  .right {
    font-weight: normal;
    font-size: 0.9rem;
  }
}
</style>
