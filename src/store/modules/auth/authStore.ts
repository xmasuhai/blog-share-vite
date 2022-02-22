import auth from '@/api/auth';
import {/*Store,*/ Module, ActionContext} from 'vuex';
import {responseData} from '@/types/responseData';
import RootStateTypes from '@/store/interface';
import AuthModulesTypes from '@/store/modules/auth/interface';

// const TestModule: Module<TestModulesTypes, RootStateTypes>
// 第一个泛型参数为当前子模块的state类型定义
// 第二个参数为根级state的类型定义
// 只要定义了state的类型，在所有使用state的地方均会自动推断，不需要在定义

export interface authState {
  user: string | null,
  isLogin: boolean
}

type ActionContextType = ActionContext<AuthModulesTypes, RootStateTypes>;

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

const authModule: Module<AuthModulesTypes, RootStateTypes> = {
  state,
  getters,
  mutations,
  actions,
};

export default authModule;
