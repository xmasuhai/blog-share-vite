<script setup lang="ts" name="BlogHeader">
import {Button,} from 'ant-design-vue';
import {useStore} from '@/store';

const store = useStore();

const getUser = computed(() => {
  return store.state.authStore.user;
});

const getIsLogin = computed(() => {
  return store.state.authStore.isLogin;
});

const checkLogin = () => {return store.dispatch('checkLogin');};

const logout = () => {return store.dispatch('logout');};

checkLogin();

</script>

<template>
  <header :class="{
    'blog-header': true,
    'login': getIsLogin
  }">
    <h1>Let's share</h1>
    <p v-if="!getIsLogin">精品博客汇聚</p>
    <div v-if="getIsLogin" class="user">
      <i>123</i>
      <img class="avatar"
           :src="getUser.avatar"
           :alt="getUser.username"
           :title="getUser.username"/>
      <ul>
        <li>
          <router-link to="myBlog">我的主页</router-link>
        </li>
        <li>
          <a href="#" @click="logout">注销</a>
        </li>
      </ul>
    </div>

    <div v-else-if="!getIsLogin" class="btns">

      <Button class="blog-btn">
        <router-link to="/login">
          立即登录
        </router-link>
      </Button>

      <Button class="blog-btn">
        <router-link to="/register">
          注册账号
        </router-link>
      </Button>

    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';
@import '../assets/style/blog-article';

%h1-style {
  color: $white;
  font-size: 40px;
  text-transform: uppercase;
}

.blog-header {
  // 默认为未登录状态
  background: $bg-color-veg;
  display: grid;
  justify-items: center;
  padding: 0 12% 0;

  h1 {
    @extend %h1-style;
    margin: 60px 0 0;
  }

  p {
    color: $white;
    margin: 15px 0 0;
  }

  .btns {
    margin: {
      top: 20px;
      bottom: 30px;
    }

    button {
      @extend %blog-btn;
      margin: 20px 5px 0;
    }
  }

}

// 切换为登录状态 覆盖未登录状态样式
.login {
  align-items: center;
  display: flex;

  h1 {
    @extend %h1-style;
    flex: 1;
    margin: 0;
    padding: 0;
  }

  .edit-icon {
    color: $white;
    font-size: 30px;
  }

  .avatar {
    border: 1px solid $white;
    border-radius: 50%;
    height: 40px;
    margin-left: 15px;
    width: 40px;
  }

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }

    }

    &:hover ul {
      display: block;
    }
  }
}

</style>
