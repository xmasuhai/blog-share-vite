<script setup lang="ts" name="BlogHeader">
import {Button,} from 'ant-design-vue';

</script>

<template>
  <header class="blog-header">
    <h1>Let's share</h1>
    <p>精品博客汇聚</p>
    <div class="btns">
      <Button>立即登录</Button>
      <Button>注册账号</Button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

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
  padding: 0 12% 30px;

  h1 {
    @extend %h1-style;
    margin: 60px 0 0;
  }

  p {
    color: $white;
    margin: 15px 0 0;
  }

  .btns {
    margin-top: 20px;

    button {
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
}

</style>