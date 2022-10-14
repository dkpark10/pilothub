import { Module } from "vuex";
import { RootState } from "@/store/index";
import { NavUrl } from "custom-type";

export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export interface CurrentTabState {
  currentTab: NavUrl;
}

export const currentTabModule: Module<CurrentTabState, RootState> = {
  state: (): CurrentTabState => ({
    currentTab: "/",
  }),
  mutations: {
    [SET_CURRENT_TAB](state, tab: NavUrl) {
      state.currentTab = tab;
    },
  },
  actions: {
    setCurrentTab({ commit }, tab: NavUrl) {
      commit(SET_CURRENT_TAB, tab);
    },
  },
};
