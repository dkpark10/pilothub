<template>
  <footer>
    <div class="footer_top">
      <div>
        <button class="footer_button" :style="{ width: '32px' }">
          <Refresh />
        </button>
      </div>
      <div class="font_size_controller_wrapper">
        <button
          class="footer_button"
          @click="decreaseFontSize"
          :style="{ width: '43px' }"
        >
          <FontSmaller />
        </button>
        <button
          class="footer_button"
          @click="increaseFontSize"
          :style="{ width: '44px' }"
        >
          <FontLouder />
        </button>
      </div>
    </div>
    <div>
      <div class="footer_bottom" :style="{ height: '44px' }">
        <div class="footer_bottom_content1">
          <button class="footer_button" :style="{ padding: '0 10px' }">
            로그인
          </button>
          <button class="footer_button" :style="{ padding: '0 10px' }">
            pc버전
          </button>
          <button class="footer_button" :style="{ padding: '0 10px' }">
            맨 위로
          </button>
        </div>
      </div>
      <div class="footer_bottom" :style="{ height: '24px' }">
        <div class="footer_bottom_content2">
          <span>이용약관 | 고객정보처리방침 | 고객센터</span>
        </div>
      </div>
      <div class="footer_bottom" :style="{ height: '24px' }">
        <div class="footer_bottom_content2 bold">
          <span>@Zum internet</span>
        </div>
      </div>
    </div>
    <h1>{{ fontSize }}</h1>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import Refresh from "@/components/atoms/Refresh.vue";
import FontLouder from "@/components/atoms/FontLouder.vue";
import FontSmaller from "@/components/atoms/FontSmaller.vue";
import { SET_FONT_SIZE } from "@/store/fontsize/index";
import { RootState } from "@/store/index";
import { useStore } from "vuex";

interface State {
  fontSize: ComputedRef<number>;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

export default defineComponent({
  name: "footer-component",
  components: {
    Refresh,
    FontLouder,
    FontSmaller,
  },
  setup(): State {
    const store = useStore<RootState>();

    const fontSize = computed(() => store.state.fontSizeModule.fontSizeRatio);

    const increaseFontSize = () => {
      store.commit(SET_FONT_SIZE, 1);
    };

    const decreaseFontSize = () => {
      store.commit(SET_FONT_SIZE, -1);
    };

    return {
      fontSize,
      increaseFontSize,
      decreaseFontSize,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  padding: 0 3vw;
  padding-bottom: 1vh;
}

.footer_top {
  @include flex-space-between;
  border-bottom: 1px solid $darker-gray;
  padding: 10px 0;
}

.font_size_controller_wrapper {
  @include flex-align-items-center;
}

.footer_bottom {
  position: relative;

  .footer_bottom_content1 {
    @include absolute-center;
    @include flex-space-between;
    width: 55vw;
  }

  .footer_bottom_content2 {
    @include absolute-center;
    @include flex-justify-content-center;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    width: 52vw;
  }

  .bold {
    font-weight: bold;
    font-size: 0.8rem;
  }
}

.footer_button {
  @include flex-center;
  height: 30px;
  background-color: white;
  border: 1px solid $darker-gray;
  color: $light-font-color;
}
</style>
