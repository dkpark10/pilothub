import { MutationTree } from "vuex";
import { userInfoType } from "./autho.type";
import { MutationType } from "./mutation.type";

export type Mutations<S = userInfoType> = {
  [MutationType.LOGIN](state: S, payload: userInfoType): void;
};

export const mutations: MutationTree<userInfoType> & Mutations = {
  [MutationType.LOGIN](state: userInfoType) {
    console.log("??????>>", state);
  },
};
