<script setup lang="ts">
</script>

<template>
  <footer class="blog-footer">
    <p>BlogFooter</p>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import 'src/assets/style/variables.scss';

.blog-footer {
  background-color: $bg-color-footer;
  color: $font-color-footer;
  font-size: 13px;
  padding: 10px;
  text-align: center;
}
</style>