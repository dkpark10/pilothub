<template>
  <div class="comment_write_wrapper">
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
      <div class="button_wrapper">
        <span />
        <Button
          @click="submitComment"
          class="main_color"
          type="submit"
          color="white"
          width="59px"
          height="28px"
          borderRadius="18px"
        >
          등록
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, Ref } from "vue";
import { useInput } from "@/hooks/useinput";
import Button from "@/components/atoms/Button.vue";

interface Status {
  comment: Ref<string>;
  onChangeComment: (e: Event) => void;
  submitComment: () => void;
}

export default defineComponent({
  name: "comment-write",
  components: {
    Button,
  },
  setup(): Status {
    const [comment, onChangeComment] = useInput(
      "",
      (value) => value.length > 1000
    );

    const submitComment = async () => {
      await axios.post("http://localhost:3000/comment", {
        author: "wakandadeveloper",
        description: comment.value,
      });
    };

    return {
      comment,
      onChangeComment,
      submitComment,
    };
  },
});
</script>

<style lang="scss" scoped>
.comment_write_wrapper {
  @include mob-hub-padding;
  padding-top: 15px;
  background-color: white;
}

.comment_header {
  @include flex-space-between-align-center;
  .left {
    font-weight: bold;
  }

  .right {
    font-weight: normal;
    font-size: 0.9rem;
  }
}

.textarea_header {
  @include flex-space-between-align-center;
  border-top: 1px solid $darker-gray;
  margin: 7px 0;
  height: 32px;
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

.button_wrapper {
  margin-top: 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.main_color {
  background-color: $main-color;
}
</style>
