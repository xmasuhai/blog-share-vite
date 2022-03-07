// 定义 root 顶层 state 的数据类型， 在 store/interface.ts 中
// 比如在state上定义属性 test 的类型, 然后默认导出该类型定义
import AuthModuleTypes from '@/store/modules/auth/interface';
import BlogModuleTypes from '@/store/modules/blog/interface';

export default interface RootStateTypes {
    authStore: AuthModuleTypes;
    blogStore: BlogModuleTypes;
}
