<script setup lang="ts" name="ArticleTextarea">
import {ref,} from 'vue';
import {Button, Textarea} from 'ant-design-vue';

const description = ref('');
const articleText = ref('');

const props = defineProps({
  title: String,
  btnText: String,
});

</script>

<template>

  <section class="create">

    <h1 class="article">
      {{ title }}
    </h1>

    <h3>文章标题</h3>
    <Textarea placeholder="限30个字"
              auto-size/>
    <p class="msg">
      限30个字
    </p>

    <h3>内容简介</h3>
    <Textarea v-model="description"
              placeholder="限30个字"
              :auto-size="{minRows: 2, maxRows: 3}"/>
    <p class="msg">
      限30个字
    </p>

    <h3>文章内容</h3>
    <Textarea v-model="articleText"
              placeholder="限30000个字"
              :auto-size="{minRows: 5, maxRows: 8}"/>
    <p class="msg">
      限30000个字
    </p>

    <Button class="blog-btn">
      {{ btnText }}
    </Button>

  </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

.create,
.edit {
  padding-bottom: 30px;

  .article {
    text-align: center;
  }

  .msg {
    color: $text-lighter-color;
    font-size: 12px;
    text-align: right;
  }

}
</style>