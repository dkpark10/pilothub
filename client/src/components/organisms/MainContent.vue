<template>
  <div class="main_content_wrapper">
    <Carousel
      :style="{ width: '100%' }"
      :transition="100"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(menuItem, idx) in mainItems" :key="idx">
        <div class="main_content_item_wrapper">
          <div class="overlay" />
          <strong class="main_content_text">
            {{ firstLineParsingTitle(menuItem.title) }}
            <br />
            {{ secondLineParsingTitle(menuItem.title) }}
          </strong>
          <div class="author_wrapper">
            <em>by</em>
            {{ menuItem.author }}
          </div>
          <ImageContainer :src="menuItem.imgUrl" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ImageContainer from "@/components/atoms/ImageContainer.vue";

interface MainItem {
  title: string;
  author: string;
  imgUrl: string;
}

interface State {
  breakpoints: {
    [width: number]: {
      itemsToShow: number;
      snapAlign: string;
    };
  };
  mainItems: MainItem[];
}

export default defineComponent({
  name: "main-content",
  components: {
    Carousel,
    Slide,
    ImageContainer,
  },
  data(): State {
    return {
      breakpoints: {
        1: {
          itemsToShow: 1.2,
          snapAlign: "start",
        },
      },
      mainItems: [
        {
          title: "출연료 얼마나 받길래\n연애예능 출연 하나?",
          author: "머그타임즈",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/09/13/08/3bf0a18f280b403bb2a16456ce30b967.jpg",
        },
        {
          title: "경기 불황 속 주목받아\n8만대 팔린 차",
          author: "한국경제",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/30/14/679dbe12f948435ea2885acda054c633.jpg",
        },
        {
          title: "예쁜 얼굴에 속았다\n엔딩 요정의 반전",
          author: "YTN",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/24/15/15bd72fce6ea434aac22af4805384a63.jpg",
        },
        {
          title: "400년 역사 숲 드디어\n일반인에 개방했다",
          author: "트래비 매거진",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/25/13/49f3899ac0324ac5b089d164b41d165d.jpg",
        },
        {
          title: "박세리, 김연아, 이승엽...\n은퇴 선수들의 재산은",
          author: "머니그라운드",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/09/13/08/a90b68fcaabe4296b2e30efc80e339fa.jpg",
        },
        {
          title: "왼쪽은 고택, 오른쪽은 현대\n세상에 이런 집이",
          author: "PHM ZINE",
          imgUrl:
            "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/25/13/f53b0c1a3cfa4e9e81a5fe6a5a60d802_640x480c.jpg",
        },
      ],
    };
  },
  methods: {
    firstLineParsingTitle(title: string) {
      return title.split("\n")[0];
    },
    secondLineParsingTitle(title: string) {
      return title.split("\n")[1];
    },
  },
});
</script>

<style lang="scss" scoped>
.main_content_wrapper {
  padding: 2vw 0 0 2vw;
}

.main_content_item_wrapper {
  position: relative;
  height: 100%;
}

.overlay {
  @include overlay;
}

.main_content_text {
  @include absolute-center;
  border: 1px solid red;
  color: white;
  font-size: 1.1rem;
  width: 67%;
}

.author_wrapper {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.81);

  em {
    color: rgba(255, 255, 255, 0.67);
  }
}
</style>
