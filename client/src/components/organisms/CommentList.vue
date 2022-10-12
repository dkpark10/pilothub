<template>
  <section v-if="commentData.length">
    <div class="comment_sort">
      <button>최신순</button>
      <button>과거순</button>
      <button>추천순</button>
      <button>반대순</button>
    </div>
    <ul
      v-for="(
        { author, description, date, like, hate, commentId }, idx
      ) in commentData"
      :key="idx"
    >
      <li>
        <CommentItem
          :commentId="commentId"
          :author="author"
          :description="description"
          :date="date"
          :like="like"
          :hate="hate"
        />
      </li>
    </ul>
  </section>
  <section class="no_comment" v-else>
    <Sweat />
    <span>아직 댓글이 없습니다.</span>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, ref, onMounted, PropType } from "vue";
import CommentItem from "@/components/molecules/CommentItem.vue";
import Sweat from "@/components/atoms/Sweat.vue";
import { PostId, Comment } from "custom-type";

export default defineComponent({
  name: "comment-list",
  components: {
    CommentItem,
    Sweat,
  },
  props: {
    postId: {
      type: Object as PropType<PostId>,
    },
  },
  setup(props) {
    const commentData = ref<Comment[]>([]);

    const fetchComment = async () => {
      const { data } = await axios.get<Comment[]>(
        `http://localhost:3000/comment/${props.postId}`
      );
      commentData.value = data;
      console.log(commentData.value);
    };

    onMounted(() => {
      fetchComment();
    });

    return {
      commentData,
    };
  },
});
</script>
<style lang="scss" scoped>
section {
  @include mob-hub-padding;
  background-color: white;
}

.comment_sort {
  @include flex-align-items-center;
  height: 32px;
  border-bottom: 1px solid $darker-gray;

  button {
    margin-right: 2vw;
    color: $font-color;
    font-size: 0.85rem;
  }
}

.main_color {
  background-color: $main-color;
}

.no_comment {
  height: 65px;
  @include flex-center;
  font-size: 0.85rem;
  color: $font-color;
}
</style>
