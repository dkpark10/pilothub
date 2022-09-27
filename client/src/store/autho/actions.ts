import { ActionTree, ActionContext } from "vuex";
import { RootState } from "@/store";
import { Mutations } from "./mutation";
import { MutationType } from "./mutation.type";
import { userInfoType } from "./autho.type";
import { ActionType } from "./actions.type";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<userInfoType, RootState>, "commit">;

export interface Actions {
  [ActionType.login](
    { commit }: AugmentedActionContext,
    payload: userInfoType
  ): void;
}

export const actions: ActionTree<userInfoType, RootState> & Actions = {
  [ActionType.login]({ commit, state, rootState }, payload) {
    console.log("로그인", state, rootState);
    commit(MutationType.LOGIN, payload);
  },
};
