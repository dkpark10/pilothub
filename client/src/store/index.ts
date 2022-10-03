// import { createStore } from "vuex";

// export interface RootState {
//   fontSizeState: FontSizeState;
// }

// const store = createStore({
//   modules: {
//     fontSizeModuleStore,
//   },
// });

// export default store;

import { createStore } from "vuex";
import { userInfoType } from "@/store//autho/autho.type";
import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";

export interface RootState {
  ModuleUserInfo: userInfoType;
  fontSizeModule: FontSizeState;
}

export default () => {
  return createStore({
    modules: {
      fontSizeModule,
    },
  });
};
