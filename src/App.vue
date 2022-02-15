<script setup lang="ts" name="App">
import {provide} from 'vue';

// Comps
import Layout from '@/components/Layout.vue';

// UI lib
import {message} from 'ant-design-vue';

// UI lib CSS Style
import 'ant-design-vue/es/button/style/index.css';
import 'ant-design-vue/es/message/style/index.css';

// 将 message 方法挂载在全局
provide('$message', message);

/*pnpm dev
// temp
import axios from 'axios';
axios.post('/auth/register')
  .then(res => {
    console.log('res', res)
  })
*/

</script>

<template>
  <Layout/>
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>