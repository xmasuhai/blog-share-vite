import auth from '@/api/auth';
import {responseData} from '@/types/responseData';
import RootStateTypes from '@/store/interface';
import {Module} from 'vuex';
import AuthModuleTypes, {authState, ActionContextType} from '@/store/modules/auth/interface';

const state = () => {
  return {
    user: null,
    isLogin: false
  };
};

const getters = {
  // 计算属性监听变化
  user: (state: authState) => state.user,
  isLogin: (state: authState) => state.isLogin
};

const mutations = {
  setUser(state: authState, payload: authState) {
    state.user = payload.user;
  },

  setLogin(state: authState, payload: authState) {
    state.isLogin = payload.isLogin;
  }
};

const actions = {
  login({commit}: ActionContextType, {username, password}: Record<string, string>): Promise<void | authState> {
    return auth.login({username, password})
      .then(res => {
        commit('setUser', {user: res.data});
        commit('setLogin', {isLogin: true});
      });
  },

  async register({commit}: ActionContextType, {username, password}: Record<string, string>): Promise<responseData> {
    let res = await auth.register({username, password});
    commit('setUser', {user: res.data});
    commit('setLogin', {isLogin: true});
    return res.data;
  },

  async logout({commit}: ActionContextType) {
    await auth.logout();
    commit('setUser', {user: null});
    commit('setLogin', {isLogin: false});
  },

  async checkLogin({commit, state}: ActionContextType): (Promise<Boolean>) {
    if (state.isLogin) return true;
    let res = await auth.getInfo();
    commit('setLogin', {isLogin: res.data.isLogin});
    if (!res.data.isLogin) return false;
    commit('setUser', {user: res.data});
    return true;
  }

  /*
    this.logout().then(isLogin=>{

    })

  */
};

const authModule: Module<AuthModuleTypes, RootStateTypes> = {
  state,
  getters,
  mutations,
  actions,
};

export default authModule;