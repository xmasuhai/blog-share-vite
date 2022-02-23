<script setup lang="ts" name="BlogIndex">

</script>

<template>
  <section class="blog-post">

    <div class="item">
      <figure class="avatar">
        <img class="img"
             src="https://cn.gravatar.com/avatar/1?s=128&d=identicon"
             alt=""/>
        <figcaption>
          姓名
        </figcaption>
      </figure>
      <h3 class="title">
        前端异步大揭秘
        <span class="date">3天前</span>
      </h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node
        用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
    </div>

    <div class="item">
      <figure class="avatar">
        <img class="img"
             src="https://cn.gravatar.com/avatar/1?s=128&d=identicon"
             alt=""/>
        <figcaption class="info">
          姓名
        </figcaption>
      </figure>
      <h3 class="title">
        文章标题
        <span class="date">3天前</span>
      </h3>
      <p class="article">
        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node
        用于解决回调的co
        模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...
      </p>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

%user-quicklook {
  .img {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .info {
    color: $theme-lighter-color;
    font-size: 12px;
  }
}

.blog-post {
  .item {
    display: grid;
    grid: auto auto / 80px 1fr;
    margin: 20px 0;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      margin-left: 0;
      text-align: center;

      @at-root & {
        @extend %user-quicklook;
      }
    }

    .title {
      grid-column: 2;
      grid-row: 1;

      & > .date {
        color: $theme-lighter-color;
        font-size: 12px;
        font-weight: normal;

      }
    }

    .article {
      font-weight: lighter;
      grid-column: 2;
      grid-row: 2;
      height: 65px;
      margin-top: 0;

      // 多行文字省略
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

  }
}

</style>
