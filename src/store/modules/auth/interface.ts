// 定义了modules子模块后会发现
// 使用的时候会提示类型报错
// 如 modules: { testModule { state: {name: age }}}
//
// store.state.testModule.name 调用时就会出现类型报错, 但是值是存在的
// 可以使用如下方式处理 定义 modules 中子模块

export default interface AuthModuleTypes {
  user: string | null,
  isLogin: boolean
}
