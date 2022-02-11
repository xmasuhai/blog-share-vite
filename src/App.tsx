import {defineComponent, provide} from 'vue';

// Comps
import Layout from '@/components/Layout.vue';

// UI lib
import {message} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 用defineComponent定义组件且要导出
export default defineComponent({
  name: 'App',
  setup(/*props, ctx*/) {
    // 将 message 方法挂载在全局
    provide('$message', message);
  },
  render: () => {
    return (
      <>
        <Layout/>
      </>
    );
  },
});
