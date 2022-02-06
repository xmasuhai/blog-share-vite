import {ref, defineComponent} from 'vue';
import {Button} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const msg = ref(`'Hello Vue 3.0 + Vite!'`);

export default defineComponent({
  component: Button,
  render: () => (
    <>
      <Button>123</Button>
      <h1>{msg}</h1>
    </>
  ),
});
