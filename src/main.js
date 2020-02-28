import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import app from './app.vue';
import router from './router';
import store from './store';
import dateFilter from './filters/dateFilter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.filter('date', dateFilter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
