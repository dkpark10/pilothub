import { Module } from "vuex";
import { RootState } from "@/store/index";

export const SET_COMMENT_LENGTH = "SET_COMMENT_LENGTH";

export interface CommentStatus {
  length: number;
}

export const commentModule: Module<CommentStatus, RootState> = {
  state: (): CommentStatus => ({
    length: 0,
  }),
  mutations: {
    [SET_COMMENT_LENGTH](state, len: number) {
      state.length = len;
    },
  },
  actions: {
    setCommentLength({ commit }, len: number) {
      commit(SET_COMMENT_LENGTH, len);
    },
  },
};
