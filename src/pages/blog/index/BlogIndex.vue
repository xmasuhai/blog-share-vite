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
        文章标题
        <span class="date">日期</span>
      </h3>
      <p class="article">
        正文，最多显示前200字
      </p>
    </div>

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
        文章标题
        <span class="date">日期</span>
      </h3>
      <p class="article">
        正文，最多显示前200字
      </p>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

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

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      figcaption {
        font-size: 12px;
        color: $theme-lighter-color;
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
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }

  }
}

</style>
