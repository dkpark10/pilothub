<template>
  <section class="tag_content_wrapper">
    <h4>
      {{ tagContents[0].tagTitle }}
    </h4>
    <div class="tag_content">
      <ul v-for="(item, index) in tagContents[0].content" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>
      {{ tagContents[1].tagTitle }}
    </h4>
    <div class="tag_content">
      <ul v-for="(item, index) in tagContents[1].content" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>
      {{ tagContents[2].tagTitle }}
    </h4>
    <div class="tag_content">
      <ul v-for="(item, index) in tagContents[2].content" :key="index">
        <li>
          <TagContentCard
            :imgUrl="item.imgUrl"
            :title="item.title"
            :author="item.author"
            :webkitLineClamp="2"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";

interface TagContent {
  readonly tagTitle: string;
  readonly content: {
    title: string;
    author: string;
    imgUrl: string;
  }[];
}

interface State {
  tagContents: TagContent[];
}

export default defineComponent({
  name: "tag-contents",
  components: {
    TagContentCard,
  },
  data(): State {
    return {
      tagContents: [
        {
          tagTitle: "#주부",
          content: [
            {
              title: "바쁜 주부들을 위해 간단 레시피를 소개합니다",
              author: "중앙일보",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/12/21/14/e972c6a0cfdd4a43867b58456a26f2cf.jpg",
            },
            {
              title:
                "누구나 작가가 될 수 있다? 웹소설 작가로 2라운드를 사는 주부들",
              author: "전성기",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/22/13/b6aa0b87d3ce4aefb9c48ac1a98c90e0.jpg",
            },
            {
              title:
                "전업주부로 생활하고 있다는 개그맨 '요즘 왜 일 안하냐고요?'",
              author: "스마트인컴",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/baac98e6d538497fb9cf40da82432d83.jpg",
            },
            {
              title:
                "전업주부가 어떻게 1년 6개월 만에공인중개사 사무소를 성공시켰을까?",
              author: "전성기",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/20/17/6628359ff6dc476595c59327d9c95c5a.jpg",
            },
          ],
        },
        {
          tagTitle: "#나는_내일_연차",
          content: [
            {
              title: "연휴도 막바지니까 당일치기 먹방 코스!",
              author: "반려생활",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/22/10/4949f483302c48e69cc6c2a1306c1184.jpg",
            },
            {
              title: "연차 상관없이 일 잘하는 사람들의 특징",
              author: "북적북적",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/02/09/14/efe17b1405bf4fbba9c6e8a35c3c77c0_640x480c.jpeg",
            },
            {
              title: "연휴, 휴가철 이후 내 자동차 관리",
              author: "쉐어하우스",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2020/10/12/14/656a47d8f0c748ce8ca2f8167c7e197d.jpg",
            },
            {
              title: "근교 여행지로 추천! 당일치기 뚝딱 가볼까",
              author: "스마트라이프",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/21/11/86a61663ff0d46d3879533eab725afc0_640x480c.jpg",
            },
          ],
        },
        {
          tagTitle: "#급찐_급빠",
          content: [
            {
              title: "아침마다 '이 부위'문지르면 다이어트가 된다!?",
              author: "마음건강 길",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/09/29/11/f51996f1dd0f4ca1aa1f24207430ed96_640x480c.jpg",
            },
            {
              title: "요즘 인기인 그릭 요거트의 각광받는 비법",
              author: "리얼푸드",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/18/09/17b84c2c385b4766a80e23d0614ecb22_640x480c.jpg",
            },
            {
              title: "이 자리 지압했더니 지방분해 효과 있었다!",
              author: "아시아투데이",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/07/09/921a8717807d442e9e35c5f04ae6372c.jpg",
            },
            {
              title: "살 뺀다고 이 운동만 했다간 힘만 듭니다",
              author: "한국일보",
              imgUrl:
                "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/02/14/17/3318ff5ef11b4a5b98399fe4ee27fc8f.jpg",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.tag_content_wrapper {
  @include hub-setion-wrapper;
  background-color: white;

  h4 {
    color: $mobile-main-color;
    margin-bottom: 3vw;
  }
}

.tag_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 8px;
}
</style>
