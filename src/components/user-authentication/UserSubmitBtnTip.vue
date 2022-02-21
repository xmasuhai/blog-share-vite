<script setup lang="ts" name="UserSubmitBtnTip">
import {Button} from 'ant-design-vue';
import {toRefs} from 'vue';

interface Props {
  btnName: string,
  tipText: string,
  linkTo: string,
  linkText: string,
}

const props = withDefaults(defineProps<Props>(), {
  btnName: '',
  tipText: '',
  linkTo: '',
  linkText: '',
});

const {btnName, tipText, linkTo, linkText,} = toRefs(props);

</script>

<template>
  <div>
    <Button :class="['register-btn', 'blog-btn']">
      {{ btnName }}
    </Button>
    <p class="notice">
      {{ tipText }}
      <router-link :to="linkTo"
                   class="to-login">
        {{ linkText }}
      </router-link>
    </p>
  </div>
</template>
