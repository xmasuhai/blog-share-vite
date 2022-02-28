<script setup lang="ts" name="SvgIcon">
import {computed} from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  tipText: {
    type: String,
    default: '',
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

</script>

<template>
  <ruby class="ruby">
    <svg class="icon" aria-hidden="true">
      <use :href="symbolId" :fill="color"/>
    </svg>
    <!--    <rt class="tips">{{ tipText }}</rt>-->
  </ruby>
</template>

<style lang="scss" scoped>
.ruby {
  ruby-position: under;
  position: relative;

  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;

    &:hover + .tips {
      opacity: 1;
    }
  }

  .tips {
    position: absolute;
    transform: translateY(30%);
    opacity: 0;
    transition: all .5s;
  }

}

</style>
