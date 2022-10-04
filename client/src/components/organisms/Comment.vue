<template>
  <section>
    <div class="comment_header">
      <span class="left">전체 댓글 6</span>
      <span class="right">내 댓글</span>
    </div>
    <div>
      <div class="textarea_header">
        <span class="user">dkpark10</span>
        <span class="comment_length">{{ comment.length }} / 1000</span>
      </div>
      <textarea :value="comment" @input="onChangeComment" />
      <Button
        class="main_color"
        color="white"
        width="59px"
        height="28px"
        borderRadius="18px"
      >
        등록
      </Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, Ref } from "vue";
import { useInput } from "@/hooks/useinput";
import Button from "@/components/atoms/Button.vue";

interface Status {
  comment: Ref<string>;
  onChangeComment: (e: Event) => void;
}

export default defineComponent({
  name: "comment-component",
  components: {
    Button,
  },
  setup(): Status {
    const [comment, onChangeComment] = useInput(
      "",
      (value) => value.length > 10
    );

    return {
      comment,
      onChangeComment,
    };
  },
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
  margin-bottom: 16px;

  .left {
    font-weight: bold;
  }

  .right {
    font-weight: normal;
    font-size: 0.9rem;
  }
}

.textarea_header {
  @include mob-hub-padding;
  @include flex-space-between-align-center;
  border-top: 1px solid $darker-gray;
  margin: 7px 0;
  height: 34px;
  color: $font-color;

  .user {
    color: $main-color;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .comment_length {
    font-size: 0.84rem;
  }
}

textarea {
  @include mob-hub-padding;
  @include flex-space-between-align-center;
  width: 100%;
  height: 112px;
  border: none;
  border-bottom: 1px solid $darker-gray;
  resize: none;

  &:focus {
    outline: none;
  }
}

.main_color {
  background-color: $main-color;
}
</style>
