import authStore from '@/store/modules/authStore';
import blogStore from '@/store/modules/blogStore';
import {InjectionKey} from 'vue';
import {createStore, Store, useStore as baseUseStore} from 'vuex';

// 为 store state 声明类型

/*
export interface State {
  count: number;
}
*/

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

const modules = {
  authStore,
  blogStore,
};

// 通过 infer 获取 单个store 的 state 的类型
type StoreState<T> = T extends { state: infer S } ? S : T; /* 当类型 T 兼容 { state: infer S } 时，返回state的类型S */
// 原始类型为：{ state: { a, b... }
// StoreState<T>为： { a, b... }

// 替换 modules 的 value 的类型，重新组织成正确的类型
//  替换类型 T 的 value 的类型成 StoreState
type ModulesState<T> = {
  [key in keyof T]: StoreState<T[key]>
}

export type State = ModulesState<typeof modules>;
// 原始类型为: { moduleA: { state: { cateA, cateB ... };
// 新类型State为：{ moduleA: { cateA, cateB ... };

export default createStore<State>({
  modules
});

// 创建一个新的 store 实例
export const store = createStore<State>({
  modules,
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
