import auth from '@/api/auth';
import {responseData, userAuthInfo} from '@/types/responseData';
import RootStateTypes from '@/store/interface';
import {Module} from 'vuex';
import AuthModuleTypes, {ActionContextType} from '@/store/modules/auth/interface';

const state = (): AuthModuleTypes => {
  return {
    userData: null,
    isLogin: false
  };
};

const getters = {
  // 计算属性监听变化
  userData: (state: AuthModuleTypes) => state.userData,
  isLogin: (state: AuthModuleTypes) => state.isLogin
};

const mutations = {
  setUser(state: AuthModuleTypes, payload: AuthModuleTypes) {
    state.userData = payload.userData;
  },

  setLogin(state: AuthModuleTypes, payload: AuthModuleTypes) {
    state.isLogin = payload.isLogin;
  }
};

const actions = {
  login({commit}: ActionContextType, {username, password}: userAuthInfo): Promise<responseData> {
    return auth.login({username, password})
      .then(res => {
        commit('setUser', {userData: res.data});
        commit('setLogin', {isLogin: true});
        return res;
      });
  },
  async register({commit}: ActionContextType, {username, password}: userAuthInfo): Promise<responseData> {
    let res = await auth.register({username, password});
    commit('setUser', {userData: res.data});
    commit('setLogin', {isLogin: true});
    return res;
  },
  async logout({commit}: ActionContextType) {
    await auth.logout();
    // 注销用户
    commit('setUser', {userData: null});
    commit('setLogin', {isLogin: false});
  },
  async checkLogin({commit, state}: ActionContextType): (Promise<Boolean>) {
    // 已处于登录状态，直接返回 true，短路先验
    if (state.isLogin) return true;

    // 处于非登录状态
    // 向服务器发出 auth.getInfo() 请求，验证用户是否处于登录状态
    const res = await auth.getInfo();

    // 将返回结果的 user 和 isLogin 设置到 本地状态
    commit('setLogin', {isLogin: res.isLogin});
    if (!res.isLogin) return false;
    commit('setUser', {userData: res.data});
    return true;
  }
};

const authModule: Module<AuthModuleTypes, RootStateTypes> = {
  state,
  getters,
  mutations,
  actions,
};

export default authModule;
