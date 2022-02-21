<script setup lang="ts" name="UserInput">
import {ref} from 'vue';
import {Input} from 'ant-design-vue';

interface Props {
  title: string,
  isDisabled?: boolean,
  inputType?: string,
  placeholder?: string,
  errorText: string,
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  isDisabled: false,
  inputType: 'text',
  placeholder: '',
  errorText: '',
});

const {title,/* isDisabled, */inputType, placeholder, errorText,} = toRefs(props);

const emit = defineEmits(['update:username', 'update:password']);

const changeValue = (e: Event) => {
  // console.log('value', e);
  emit('update:username', e); // 以前是 `this.$emit('input', title)`
  emit('update:password', e); // 以前是 `this.$emit('input', title)`
};

</script>

<template>
  <div>
    <label :for="title">
      <h4 :class="inputType">
        {{ title }}
      </h4>
      <Input :type="inputType"
             :placeholder="placeholder ?? this.title"
             :id="title"
             @input="changeValue"
             class="user-input"/>
    </label>
    <p class="error">
      {{ errorText }}
    </p>
  </div>
</template>
