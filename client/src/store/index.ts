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

import { SecondModule, ISecondModule } from "@/store/module2/index";
import { ThirdModule, IThirdModule } from "@/store/module3/index";
import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";

export interface RootState {
  ModuleUserInfo: userInfoType;
  secondModule: ISecondModule;
  thirdModule: IThirdModule;
  fontSizeModule: FontSizeState;
}

export const key: InjectionKey<Store<RootState>> = Symbol("store key");

const store = createStore({
  modules: {
    ModuleUserInfo,
    SecondModule,
    fontSizeModule,
  },
});

export default store;
