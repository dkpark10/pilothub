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

import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { userInfoType } from "@/store//autho/autho.type";
import { ModuleUserInfo } from "@/store/autho/index";

import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";

export interface RootState {
  ModuleUserInfo: userInfoType;
  fontSizeModule: FontSizeState;
}

const store = createStore({
  modules: {
    fontSizeModule,
  },
});

export default store;
