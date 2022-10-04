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
    </div>
    <div class="comment_handler">
      <span>답글달기</span>
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
  },
  setup(props) {
    const parsedAuthor = computed(() => `${props.author?.slice(0, -3)}****`);

    return {
      parsedAuthor,
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
