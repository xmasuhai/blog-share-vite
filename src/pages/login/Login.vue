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

const defaultUsername = ref('admin001');
const defaultPassword = ref('123456');

const userLoginInfo = computed(() => {
  return {
    username: username.value,
    password: password.value
  };
});

// 从Store注册登录方法
const asyncLogin = (logString: logString) => {
  return store.dispatch('login', logString);
};

// 发起登录请求
const onLogin = async (logString: logString) => {
  await asyncLogin(logString);
  // 成功，跳转首页
  await router.push({path: '/'});
};

</script>

<template>
  <section class="login">
    <UserInput title="用户名"
               errorText="当前用户名已注册"
               v-model:username="username"
               :placeholder="`默认登录名：${defaultUsername}`"/>

    <UserInput title="密码"
               inputType="password"
               errorText="当前用户名或密码不匹配"
               v-model:password="password"
               @keyup.enter="onLogin({username, password})"
               :placeholder="`默认密码：${defaultPassword}`"/>

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
