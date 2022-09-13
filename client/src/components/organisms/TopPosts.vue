<template>
  <section class="top_posts_wrapper">
    <h4>인기허브글</h4>
    <ul v-for="(postItem, index) in postItems" :key="index">
      <li>
        <TopPostItem
          :title="postItem.title"
          :author="postItem.author"
          :rank="index + 1"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopPostItem from "@/components/molecules/TopPostItem.vue";

interface PostItem {
  title: string;
  author: string;
  category: string;
}

interface State {
  postItems: PostItem[];
}

export default defineComponent({
  name: "top-posts",
  components: {
    TopPostItem,
  },
  data(): State {
    return {
      postItems: [
        {
          title:
            "제2의 인생살겠다며 '미우새' 하차한 배우 엄마, 두달 만에 이렇게 됐다.",
          author: "머니그라운드",
          category: "라이프",
        },
        {
          title:
            "근육 때문에 옷도 잘 못 입는다는 여배우의 뒤태에 모두가 놀랐다.",
          author: "머니그라운드",
          category: "연예",
        },
        {
          title: "아들아 50대에 비참해지지 않으려면 제발 지금 '이것'해라",
          author: "북적북적",
          category: "라이프",
        },
        {
          title:
            "첫사랑 붙잡으려 촬영 도중 제주도까지 찾아갔다는 배우의 현재모습",
          author: "머니그라운드",
          category: "연예",
        },
        {
          title:
            "'펜트하우스' 하은별 역으로 데뷔한 신인 여배우의 확 달라진 최근 모습",
          author: "머니그라운드",
          category: "연예",
        },
        {
          title:
            "'100kg->27kg 감량' 서재경 '의료사고로 父잃고 母는 혈액암 투병'",
          author: "OSEN",
          category: "연예",
        },
        {
          title:
            "'DMZ 평화의 길 방문 신청하세요' 금강산을 볼 수 있는 코스 개방!",
          author: "도서출판 길벗",
          category: "여행",
        },
        {
          title: "한국 야구 초토화시킨 일본 야구 6승 투수의 '마구'",
          author: "오마이뉴스",
          category: "이슈",
        },
        {
          title: "'Find Dining' | 여행길에서 만난 우연한 행운",
          author: "중앙일보",
          category: "푸드",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.top_posts_wrapper {
  @include hub-setion-wrapper;
  background-color: white;
  margin-top: 8px;
  border: 1px solid blue;

  h4 {
    margin-top: 2vw;
    margin-bottom: 3vw;
  }
}
</style>
