<script setup lang="ts" name="Register">
import {ref} from 'vue';
import UserInput from '@/components/user-authentication/UserInput.vue';
import UserSubmitBtnTip from '@/components/user-authentication/UserSubmitBtnTip.vue';

const username = ref('');
const password = ref('');

</script>

<template>
  <section class="login">
    <UserInput title="用户名"
               errorText="当前用户名已注册"
               :doubleBind="username"/>

    <UserInput title="密码"
               inputType="password"
               errorText="当前用户名或密码不匹配"
               :doubleBind="password"/>

    <UserInput title="确认密码"
               inputType="password"
               placeholder="请重复输入一遍密码"
               errorText="两次密码输入不一致"/>

    <UserSubmitBtnTip btnName="立即注册"
                      tipText="已有账号？"
                      linkTo="/login"
                      linkText="立即登录"/>
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
