<script setup lang="ts" name="BlogHeader">
import {useStore} from '@/store';
import {Button,} from 'ant-design-vue';

const store = useStore();

const getUser = computed(() => {
  return store.getters.userData;
});

const getIsLogin = computed(() => {
  return store.getters.isLogin;
});

const checkLogin = () => {
  return store.dispatch('checkLogin');
};

const logout = () => {
  return store.dispatch('logout');
};

checkLogin();

</script>

<template>
  <header :class="{
    'blog-header': true,
    'login': getIsLogin
  }">
    <h1>
      Let's share
    </h1>
    <p v-show="!getIsLogin">精品博客汇聚</p>
    <div v-if="getIsLogin" class="user">
      <router-link to="/create">
        <i class="edit-icon">
          <SvgIcon name="create"
                   color="white"
                   tipText="创建博客"></SvgIcon>
        </i>
      </router-link>
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

    <div v-if="!getIsLogin" class="btns">

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
@import "src/assets/style/variables";
@import "../assets/style/blog-article";

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

  .user {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;

    .edit-icon {
      color: $white;
      font-size: 24px;
    }

    .avatar {
      border: 1px solid $white;
      border-radius: 50%;
      height: 40px;
      margin-left: 15px;
      width: 40px;

      &:hover + ul {
        display: block;
      }
    }

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid $text-color;
      margin: 0;
      padding: 0;
      background-color: $white;
      top: 100%;
      transform: translateX(50%);

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

  }
}

</style>
