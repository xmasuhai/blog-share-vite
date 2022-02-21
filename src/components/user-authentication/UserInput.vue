<script setup lang="ts" name="UserInput">
import {Input} from 'ant-design-vue';

interface Props {
  title: string,
  isDisabled?: boolean,
  inputType?: string,
  placeholder?: string,
  errorText: string,
  doubleBind: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  isDisabled: false,
  inputType: 'text',
  placeholder: '',
  errorText: '',
  doubleBind: '',

});

const {title,/* isDisabled, */inputType, placeholder, errorText, doubleBind,} = toRefs(props);

</script>

<template>
  <label :for="title">
    <h4 :class="inputType">
      {{ title }}
    </h4>
    <Input v-model="doubleBind"
           :type="inputType"
           :placeholder="placeholder ?? this.title"
           :id="title"
           class="user-input"/>
  </label>
  <p class="error">
    {{ errorText }}
  </p>
</template>
