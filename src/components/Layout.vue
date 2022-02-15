<script setup lang="ts" name="Layout">
// Comps
import BlogHeader from '@/components/BlogHeader.vue';
import BlogFooter from '@/components/BlogFooter.vue';

</script>

<template>
  <div class="layout">
    <BlogHeader/>
    <main class="blog-main">
      <router-view/>
    </main>
    <BlogFooter/>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-areas: "header header header"
                       ".      main  ."
                       "footer footer footer";
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  :deep(.blog-header) {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  .blog-main {
    grid-area: main;
  }

  :deep(.blog-footer) {
    align-self: end;
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }

}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 10px auto 10px;

    :deep(.blog-header),
    :deep(.blog-footer) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

}

</style>