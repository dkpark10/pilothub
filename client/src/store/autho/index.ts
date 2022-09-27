import { Module } from "vuex";
import { state } from "./state";
import { mutations } from "./mutation";
import { actions } from "./actions";
import { getters } from "./getters";
import { userInfoType } from "./autho.type";
import { RootState } from "../index";

export const ModuleUserInfo: Module<userInfoType, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
