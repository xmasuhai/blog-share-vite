import auth from '@/api/auth';
import {responseData, userAuthInfo} from '@/types/responseData';
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
  login({commit}: ActionContextType, {username, password}: userAuthInfo): Promise<responseData> {
    return auth.login({username, password})
      .then(res => {
        commit('setUser', {user: res.data.username});
        commit('setLogin', {isLogin: true});
        // console.log('res.data', res.data);
        // console.log('res', res);
        return res;
      });
  },
  async register({commit}: ActionContextType, {username, password}: userAuthInfo): Promise<responseData> {
    let res = await auth.register({username, password});
    commit('setUser', {user: res.data.username});
    commit('setLogin', {isLogin: true});
    return res;
  },

  async logout({commit}: ActionContextType) {
    await auth.logout();
    commit('setUser', {user: null});
    commit('setLogin', {isLogin: false});
  },

  async checkLogin({commit, state}: ActionContextType): (Promise<Boolean>) {
    // 已处于登录状态，直接返回 true
    if (state.isLogin) return true;
    // 服务器 验证用户是否处于登录状态
    const res = await auth.getInfo();
    // 将返回结果的 isLogin 设置到 本地状态
    commit('setLogin', {isLogin: res.isLogin});
    if (!res.isLogin) return false;
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
