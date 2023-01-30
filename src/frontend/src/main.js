import Vue from 'vue';
import App from '@/App.vue';

import store from '@/store';

import '@/plugins/ui';
import '@/plugins/vuePlugins';
import '@/common/directives/clickOutside';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
