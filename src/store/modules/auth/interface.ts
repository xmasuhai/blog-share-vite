// 定义了modules子模块后会发现
// 使用的时候会提示类型报错
// 如 modules: { testModule { state: {name: age }}}
//
// store.state.testModule.name 调用时就会出现类型报错, 但是值是存在的
// 可以使用如下方式处理 定义 modules 中子模块

import {ActionContext} from 'vuex';
import RootStateTypes from '@/store/interface';

export default interface AuthModuleTypes {
  user: string | null,
  isLogin: boolean
}

// const TestModule: Module<TestModulesTypes, RootStateTypes>
// 第一个泛型参数为当前子模块的state类型定义
// 第二个参数为根级state的类型定义
// 只要定义了state的类型，在所有使用state的地方均会自动推断，不需要在定义
export type ActionContextType = ActionContext<AuthModuleTypes, RootStateTypes>;

export type authState = AuthModuleTypes
