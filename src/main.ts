import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from '~/App.vue';
import router from '~/router';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App).use(router).use(createPinia()).use(createHead()).use(Antd);

router.isReady().then(() => app.mount('#app'));
