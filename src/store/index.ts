import {InjectionKey} from 'vue';
import {createStore, Store, useStore as baseUseStore} from 'vuex';
import authStore from '@/store/modules/auth/';
import blogStore from '@/store/modules/blog/';
import RootStateTypes from '@/store/interface';

// 定义 injection key 在注册store时需要用到 app.use(store, key);
export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

// 创建一个新的 store 实例
export const store = createStore<RootStateTypes>({
  modules: {
    authStore,
    blogStore,
  }
});

export function useStore() {
  return baseUseStore<RootStateTypes>(key);
}
