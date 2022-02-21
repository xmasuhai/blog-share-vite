import auth from '@/api/auth';
import {Store} from 'vuex';
import {responseData} from '@/types/responseData';

// 用户名

type authState = {
  user: string | null,
  isLogin: boolean
}

const state = () => {
  return {
    user: null,
    isLogin: false
  };
};

const getters = {
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
  login({commit}: Store<unknown>, {username, password}: Record<string, string>): Promise<void | authState> {
    return auth.login({username, password})
      .then(res => {
        commit('setUser', {user: res.data});
        commit('setLogin', {isLogin: true});
      });
  },

  async register({commit}: Store<unknown>, {username, password}: Record<string, string>): Promise<responseData> {
    let res = await auth.register({username, password});
    commit('setUser', {user: res.data});
    commit('setLogin', {isLogin: true});
    return res.data;
  },

  async logout({commit}: Store<unknown>) {
    await auth.logout();
    commit('setUser', {user: null});
    commit('setLogin', {isLogin: false});
  },

  async checkLogin({commit, state}: Store<authState>): (Promise<Boolean>) {
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

export default {
  state,
  getters,
  mutations,
  actions,
};
