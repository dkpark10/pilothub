import { Ref, ref, CSSProperties, computed } from "vue";
import { RootState } from "@/store/index";
import { useStore } from "vuex";

export const useFontSize = (defaultSize: number): Ref<CSSProperties> => {
  const store = useStore<RootState>();
  const { fontSizeRatio } = store.state.fontSizeModule;

  const style = ref({
    fontSize: computed(() => `${fontSizeRatio * defaultSize}px`),
  });

  return style;
};
