<template>
  <section>
    <div class="comment_sort">
      <button>최신순</button>
      <button>과거순</button>
      <button>추천순</button>
      <button>반대순</button>
    </div>
    <ul
      v-for="({ author, description, date, like, hate }, idx) in data"
      :key="idx"
    >
      <li>
        <CommentItem
          :author="author"
          :description="description"
          :date="date"
          :like="like"
          :hate="hate"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CommentItem from "@/components/molecules/CommentItem.vue";
import CommentData from "@/assets/hubmock/Comment";

export default defineComponent({
  name: "comment-list",
  components: {
    CommentItem,
  },
  setup() {
    const data = reactive(CommentData);
    return {
      data,
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
    margin-right: 1vw;
    color: $font-color;
    font-size: 0.85rem;
  }
}

.main_color {
  background-color: $main-color;
}
</style>
