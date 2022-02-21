<script setup lang="ts" name="BlogDetail">
</script>

<template>

  <section class="user-blog">
    <img src="https://cn.gravatar.com/avatar/1?s=128&d=identicon"
         alt=""
         class="avatar"/>
    <h3 class="title">前端异步大揭秘</h3>
    <p class="user">
      <router-link to="/user"
                   class="user-page">
        若愚
      </router-link>
      发布于3天前
    </p>
  </section>

  <section class="article">
    <h1>CSS 网格布局学习指南</h1>
    <p>文章正文,省略一万字...</p>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

.user-blog {
  border-bottom: 1px solid $text-info-color;
  display: grid;
  grid: auto auto / 80px 1fr;
  margin-top: 30px;
  padding-bottom: 20px;

  .avatar {
    border-radius: 50%;
    grid-column: 1;
    grid-row: 1 / span 2;
    height: 60px;
    width: 60px;
  }

  .title {
    grid-column: 2;
    grid-row: 1;
    margin: 5px 0;

  }

  .user {
    color: $text-lighter-color;
    font-size: 12px;
    grid-column: 2;
    grid-row: 2;
    margin-top: 0;

    &-page {
      color: $theme-color;
      text-decoration: none;
    }
  }
}

.article {
  padding: 10px 0;
}

</style>
