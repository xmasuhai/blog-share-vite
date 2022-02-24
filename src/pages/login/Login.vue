<script setup lang="ts" name="Login">
import UserInput from '@/components/user-authentication/UserInput.vue';
import UserSubmitBtnTip from '@/components/user-authentication/UserSubmitBtnTip.vue';
import {ref,} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from '@/store';
import {logString} from '@/store/modules/auth/interface';

const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const asyncLogin = (logString: logString) => {
  return store.dispatch('login', logString);
};

const onLogin = (logString: logString) => {
  asyncLogin(logString)
    .then((/*res*/) => {
      /* res 不用再处理 已存入 store */
      // 成功，跳转首页
      router.push({path: '/'});
      // console.log('store.state.authStore.user', store.state.authStore.user);
      // console.log('store.state.authStore.isLogin', store.state.authStore.isLogin);
    }, /* 失败，不跳转 */);
};

</script>

<template>
  <section class="login">
    <UserInput title="用户名"
               errorText="当前用户名已注册"
               v-model:username="username"/>

    <UserInput title="密码"
               inputType="password"
               errorText="当前用户名或密码不匹配"
               v-model:password="password"
               @keyup.enter="onLogin({username, password})"/>

    <UserSubmitBtnTip btnName="立即登录"
                      tipText="没有账号？"
                      linkTo="/register"
                      linkText="注册新用户"
                      @click="onLogin({username, password})"/>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

.login,
.register {
  align-items: center;
  display: grid;
  justify-content: center;
  padding-top: 30px;

  :deep(.name),
  :deep(.password) {
    margin: 10px 0 5px;
  }

  :deep(.error) {
    color: $color-warn;
    font-size: 12px;
    margin: 5px 0;
  }

  :deep(.user-input) {
    width: 400px;
  }

  :deep(.register-btn) {
    justify-self: start;
    margin-top: 10px;
  }

  :deep(.notice) {
    color: $text-lighter-color;
    font-size: 12px;
    margin-top: 30px;
    text-align: center;

    .to-login,
    .to-register {
      color: $theme-color;
    }

  }

}

</style>
