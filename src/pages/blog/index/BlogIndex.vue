<script setup lang="ts" name="BlogIndex">
import {Button, message} from 'ant-design-vue';
import {inject} from 'vue';

const popMessage = inject<typeof message>('$message');
</script>

<template>
  <Button class="tempBtn" @click="popMessage.error('这是一条错误消息', 2)">
    博客首页
  </Button>
</template>

<style lang="scss" scoped>
@import '../../../assets/style/main.scss';

.tempBtn {
  @extend %blog-btn;
}

</style>
