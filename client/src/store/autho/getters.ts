import { GetterTree } from "vuex";
import { RootState } from "@/store";
import { userInfoType } from "./autho.type";

export type Getters = {
  userIdGetters(
    state: userInfoType,
    getters: RootState,
    rootState: RootState
  ): string;
};

export const getters: GetterTree<userInfoType, RootState> & Getters = {
  userIdGetters: (
    state: userInfoType,
    getters: RootState,
    rootState: RootState
  ) => {
    console.log("getter", getters);
    console.log(rootState);
    return state.userId;
  },
};
