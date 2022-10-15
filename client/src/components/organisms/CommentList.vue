<template>
  <section v-if="!loading && commentData?.length">
    <div class="comment_sort">
      <button
        type="button"
        :class="{ on_tab: isCurrentTab(0) }"
        @click="commentSortByDate(true, 0)"
      >
        최신순
      </button>
      <button
        type="button"
        :class="{ on_tab: isCurrentTab(1) }"
        @click="commentSortByDate(false, 1)"
      >
        과거순
      </button>
    </div>
    <ul
      v-for="(
        { author, description, date, like, hate, id }, idx
      ) in commentData"
      :key="idx"
    >
      <li>
        <CommentItem
          :commentId="id"
          :postId="postId"
          :author="author"
          :description="description"
          :date="date"
          :like="like"
          :hate="hate"
        />
      </li>
    </ul>
  </section>
  <section class="no_comment" v-else-if="error">
    <Sweat />
    <span>댓글을 불러오지 못했습니다.</span>
  </section>
  <section class="no_comment" v-else>
    <Sweat />
    <span>아직 댓글이 없습니다.</span>
  </section>
</template>

<script setup lang="ts">
import { defineProps, onUpdated, ref } from "vue";
import CommentItem from "@/components/molecules/CommentItem.vue";
import Sweat from "@/components/atoms/Sweat.vue";
import { PostId, Comment } from "custom-type";
import { BASE_URL, calculDate } from "@/utils/index";
import { useFetch } from "@/hooks/index";
import { useStore } from "vuex";
import { RootState } from "@/store";
import { SET_COMMENT_LENGTH } from "@/store/comment";
import { computed } from "@vue/reactivity";

interface Props {
  postId: PostId;
}

const store = useStore<RootState>();
const props = defineProps<Props>();
const currentSortStatus = ref(0);
const GET_COMMENT_URL = `${BASE_URL}/comment/${props.postId}`;
const [commentData, loading, error] = useFetch<Comment[]>(GET_COMMENT_URL);

const isCurrentTab = (state: number) => state === currentSortStatus.value;

const commentSortByDate = (asc: boolean, nextSortStatus: number) => {
  currentSortStatus.value = nextSortStatus;
  commentData.value = commentData.value?.sort((prev, next) => {
    return asc
      ? calculDate(prev.date) - calculDate(next.date)
      : calculDate(next.date) - calculDate(prev.date);
  });
};

onUpdated(() => {
  if (commentData.value) {
    store.commit(SET_COMMENT_LENGTH, commentData.value.length);
  }
});
</script>

<style lang="scss" scoped>
section {
  @include mob-hub-padding;
  background-color: white;
}

.comment_sort {
  @include flex-align-items-center;
  height: 38px;
  border-bottom: 1px solid $darker-gray;

  button {
    margin-right: 2vw;
    color: $font-color;
    font-size: 0.88rem;
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

.on_tab {
  font-weight: bold;
}
</style>
