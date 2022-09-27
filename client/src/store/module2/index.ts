import { Module, ActionContext } from "vuex";
import { RootState } from "../index";

export interface ISecondModule {
  count: number;
}

export const SecondModule: Module<ISecondModule, RootState> = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    doubleCount(state, getters, rootState) {
      // 다른 store state 추론 가능
      console.log(rootState.secondModule.count);
      return state.count * 2;
    },
  },
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.secondModule.count) % 2 === 1) {
        commit("increment");
      }
    },
  },
};
