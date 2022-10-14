import { createStore } from "vuex";
import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";
import { currentTabModule, CurrentTabState } from "@/store/tab/index";

export interface RootState {
  fontSizeModule: FontSizeState;
  currentTabModule: CurrentTabState;
}

export default () => {
  return createStore({
    modules: {
      fontSizeModule,
      currentTabModule,
    },
  });
};
