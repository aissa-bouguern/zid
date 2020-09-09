import Vue from 'vue';

import { BootstrapVue } from 'bootstrap-vue';
import VueCompositionApi from '@vue/composition-api';

import PaimentOptions from './pages/PaimentOptions.vue';

// Plugins
Vue.use(BootstrapVue);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(PaimentOptions),
}).$mount('#app');
