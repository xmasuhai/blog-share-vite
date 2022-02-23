import {InjectionKey} from 'vue';
import {createStore, Store, useStore as baseUseStore} from 'vuex';
import authStore from '@/store/modules/auth/';
import blogStore from '@/store/modules/blog/';
import RootStateTypes from '@/store/interface';

// 定义 injection key 在注册store时需要用到 app.use(store, key);
export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

/*

const modules = {
  authStore,
  blogStore,
};

type modulesState = {
  [key in keyof typeof modules]: Exclude<Exclude<typeof modules[key]['state'], undefined>, () => any>
}
// 为 store state 声明类型
export interface State extends modulesState{}


// 通过 infer 获取 单个store 的 state 的类型
type StoreState<T> = T extends { state: infer S } ? S : T; /!* 当类型 T 兼容 { state: infer S } 时，返回state的类型S *!/
// 原始类型为：{ state: { a, b... }
// StoreState<T>为： { a, b... }

// 替换 modules 的 value 的类型，重新组织成正确的类型
//  替换类型 T 的 value 的类型成 StoreState
type ModulesState<T> = {
  [key in keyof T]?: StoreState<T[key]>
}

export type State = ModulesState<typeof modules>;
// 原始类型为: { moduleA: { state: { cateA, cateB ... };
// 新类型State为：{ moduleA: { cateA, cateB ... };

export default createStore<State>({
  modules
});

*/

// 创建一个新的 store 实例
export const store = createStore<RootStateTypes>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    authStore,
    blogStore,
  }
});

// 定义自己的 `useStore` 组合式函数
/* vue组件setup中使用
* import { useStore } from '@/store';
* const store = useStore(key); // 可实现调用
*
* */

export function useStore() {
  return baseUseStore<RootStateTypes>(key);
}

/*
export function useMyStore() {
  return baseUseStore<RootStateTypes>(key);
}
*/
