import { createStore } from "vuex";
import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";
import { currentTabModule, CurrentTabState } from "@/store/tab/index";
import { commentModule, CommentStatus } from "@/store/comment/index";

export interface RootState {
  fontSizeModule: FontSizeState;
  currentTabModule: CurrentTabState;
  commentModule: CommentStatus;
}

export default () => {
  return createStore({
    modules: {
      fontSizeModule,
      currentTabModule,
      commentModule,
    },
  });
};
