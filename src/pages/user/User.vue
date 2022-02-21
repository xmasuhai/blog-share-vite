<script setup lang="ts" name="User">
</script>

<template>

  <section class="userInfo">
    <img src="https://cn.gravatar.com/avatar/1?s=128&d=identicon"
         alt="avatar"
         class="avatar"/>
    <h3 class="name">若愚</h3>
  </section>

  <section>
    <div class="item">
      <div class="date">
        <span :class="['day', 'date-item']">20</span>
        <span class="date-item">5月</span>
        <span class="date-item">2021</span>
      </div>
      <h3 class="title">前端异步解密</h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
      <div class="actions">
        <span>阅读量</span>
        <a href="#"
           class="delete">
          查看博客详情&gt;&gt;&gt;
        </a>
      </div>
    </div>

    <div class="item">
      <div class="date">
        <span :class="['day', 'date-item']">20</span>
        <span class="date-item">5月</span>
        <span class="date-item">2021</span>
      </div>
      <h3 class="title">前端异步解密</h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
      <div class="actions">
        <span>阅读量</span>
        <a href="#"
           class="delete">
          查看博客详情&gt;&gt;&gt;
        </a>
      </div>
    </div>

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

    .date-item {
      color: $text-lighter-color;
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
