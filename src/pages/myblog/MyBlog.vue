<script setup lang="ts" name="MyBlog">
</script>

<template>

  <section class="user-info">
    <img src="https://cn.gravatar.com/avatar/1?s=128&d=identicon"
         alt=""
         class="avatar"/>
    <h3 class="name">
      若愚
    </h3>
  </section>

  <section>
    <article class="item">
      <div class="date">
        <span :class="['day', 'dateItem']">20</span>
        <span class="date-item">5月</span>
        <span class="date-item">2021</span>
      </div>

      <h3 class="title">
        前端异步解密
      </h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
      <div class="actions">
        <router-link to="/edit">
          编辑
        </router-link>
        <a href="#"
           class="delete">
          删除
        </a>
      </div>
    </article>

    <article class="item">
      <div class="date">
        <span :class="['day', 'dateItem']">
          20
        </span>
        <span class="date-item">5月</span>
        <span class="date-item">2021</span>
      </div>

      <h3 class="title">
        前端异步解密
      </h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
      <div class="actions">
        <router-link to="/edit">
          编辑
        </router-link>
        <a href="#"
           class="delete">
          删除
        </a>
      </div>
    </article>
  </section>

</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

.user-info {
  border-bottom: 1px solid #ebebeb;
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

  .name {
    grid-column: 2;
    grid-row: 1;
    margin-top: 10px;
  }
}

section .item {
  display: grid;
  grid: auto  auto auto / 80px 1fr;
  margin: 20px 0;

  .date {
    grid-column: 1;
    grid-row: 1 / span 3;
    justify-self: center;
    text-align: center;
    color: $text-lighter-color;

    .date-item {
      display: block;
    }

    .day {
      font-size: 40px;
    }
  }

  .title {
    font-weight: bold;
    grid-column: 2;
    grid-row: 1;
  }

  .article {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0;
  }

  .actions {
    font-size: 12px;
    grid-column: 2;
    grid-row: 3;

    .delete {
      color: $theme-lighter-color;
      margin-left: 1em;
    }

  }

}

</style>
