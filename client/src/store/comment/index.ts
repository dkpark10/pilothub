import { Module } from "vuex";
import { RootState } from "@/store/index";
import { BASE_URL } from "@/utils";
import { PostId, Comment } from "custom-type";
import { calculDate, httpFetchData } from "@/utils/index";

export const SET_COMMENT_DATA = "SET_COMMENT_DATA";
export const SORT_COMMENT_DATA = "SORT_COMMENT_DATA";
export const SET_ERROR = "SET_ERROR";

export const GET_COMMENT_LIST_ACTION = "getCommentList";

export interface CommentStatus {
  length: number;
  error: boolean;
  commentData: Comment[];
}

export const commentModule: Module<CommentStatus, RootState> = {
  state: (): CommentStatus => ({
    length: 0,
    commentData: [],
    error: false,
  }),
  mutations: {
    [SET_COMMENT_DATA](state, payload: Comment[]) {
      state.commentData = payload;
      state.length = payload.length;
    },
    [SORT_COMMENT_DATA](state, asc: boolean) {
      state.commentData = state.commentData.sort((prev, next) => {
        return asc
          ? calculDate(prev.date) - calculDate(next.date)
          : calculDate(next.date) - calculDate(prev.date);
      });
    },
    [SET_ERROR](state) {
      state.error = true;
    },
  },
  actions: {
    async [GET_COMMENT_LIST_ACTION]({ commit }, postid: PostId) {
      try {
        const GET_COMMENT_URL = `${BASE_URL}/comment/${postid}`;
        const { data } = await httpFetchData<Comment[]>(GET_COMMENT_URL);
        commit(SET_COMMENT_DATA, data);
      } catch (e: any) {
        console.error(e);
      }
    },
  },
};
