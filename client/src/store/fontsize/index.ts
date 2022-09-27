import { Module, ActionContext } from "vuex";
import { RootState } from "@/store/index";

export const SET_FONT_SIZE = "INCREASE_FONT_SIZE";

export interface FontSizeState {
  fontSizeRatio: number;
}

export const fontSizeModule: Module<FontSizeState, RootState> = {
  state: (): FontSizeState => ({
    fontSizeRatio: 1,
  }),
  mutations: {
    [SET_FONT_SIZE](state, value: number) {
      state.fontSizeRatio += value;
    },
  },
  getters: {
    getFontSizeRatio(state): FontSizeState["fontSizeRatio"] {
      return state.fontSizeRatio;
    },
  },
  actions: {
    setFontSize({ commit }, value: number) {
      commit(SET_FONT_SIZE, value);
    },
  },
};
