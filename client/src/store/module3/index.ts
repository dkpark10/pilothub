import { Module } from "vuex";
import { RootState } from "@/store/index";

export interface IThirdModule {
  answer: string;
}

export const ThirdModule: Module<IThirdModule, RootState> = {
  namespaced: true,
  state: (): IThirdModule => ({
    answer: "",
  }),
  getters: {
    getAnswer: (state, getters, rootState): string => {
      // rootState를 통해 다른 모듈 state 추론이 가능하다.
      console.log(rootState);
      return state.answer;
    },
  },
  mutations: {},
};
