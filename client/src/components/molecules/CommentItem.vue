<template>
  <div class="comment_item_wrapper">
    <div class="comment_author">
      <span class="dot" />
      {{ parsedAuthor }}
    </div>
    <div class="comment_description">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="comment_date">
      {{ date }}
      <button @click="deleteComment">삭제</button>
    </div>
    <div class="comment_handler">
      <span></span>
      <div class="likehate">
        <button>
          <Like />
        </button>
        <span>{{ like }}</span>
        <button>
          <Hate />
        </button>
        <span>{{ hate }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import Like from "@/components/atoms/Like.vue";
import Hate from "@/components/atoms/Hate.vue";
import { Comment } from "custom-type";

export default defineComponent({
  name: "comment-item",
  components: {
    Like,
    Hate,
  },
  props: {
    author: {
      type: Object as PropType<string>,
      require: true,
    },
    description: {
      type: Object as PropType<string>,
      require: true,
    },
    date: {
      type: Object as PropType<string>,
      require: true,
    },
    like: {
      type: Object as PropType<number>,
      require: true,
    },
    hate: {
      type: Object as PropType<number>,
      require: true,
    },
    commentId: {
      type: Object as PropType<Comment["commentId"]>,
      require: true,
    },
  },
  setup(props) {
    const parsedAuthor = computed(() => `${props.author?.slice(0, -3)}****`);
    const deleteComment = () => {
      console.log(`이 댓글은 삭제한다. ${props.commentId}`);
    };

    return {
      parsedAuthor,
      deleteComment,
    };
  },
});
</script>

<style lang="scss" scoped>
.dot {
  display: inline-block;
  background-color: $main-color;
  border-color: $main-color;
  width: 7px;
  height: 7px;
  border: 1px solid #dadada;
  border-radius: 4px;
}

.comment_item_wrapper {
  padding: 8px 0;
  background-color: white;
  border-bottom: 1px solid $darker-gray;
}

.comment_author {
  color: $main-color;
  font-weight: bold;
  font-size: 0.86rem;
}

.comment_description {
  margin: 1% 0;
  font-size: 0.94rem;
}

.comment_date {
  font-size: 0.73rem;
  color: $light-font-color;

  button {
    font-size: inherit;
    color: inherit;
  }
}

.comment_handler {
  @include flex-space-between;
  margin: 2% 0;
  font-size: 0.8rem;

  .likehate {
    width: 25%;
    @include flex-space-evenly;
  }
}
</style>
