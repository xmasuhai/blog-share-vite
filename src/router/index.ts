import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'BlogIndex',
    // import('') 必须是静态字符串，不可动态拼接
    // The above dynamic import cannot be analyzed by vite
    component: () => import('@/pages/blog/index/BlogIndex.vue'), // 注意这里如果是.vue文件必须要带上 文件后缀.vue
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/register/Register.vue'),
  },
  {
    path: '/detail/:blogId',
    name: 'BlogDetail',
    component: () => import('@/pages/blog/detail/BlogDetail.vue'),
  },
  {
    path: '/create',
    name: 'CreateBlog',
    component: () => import('@/pages/blog/create/CreateBlog.vue'),
    // 只有经过身份验证的用户才能创建帖子
    meta: {requiresAuth: true},
  },
  {
    path: '/edit/:blogId',
    name: 'EditBlog',
    component: () => import('@/pages/blog/edit/EditBlog.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('@/pages/user/User.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/myblog',
    name: 'MyBlog',
    component: () => import('@/pages/myblog/MyBlog.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '@/pages/About')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
