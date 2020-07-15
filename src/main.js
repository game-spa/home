import './set-public-path';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    vuetify,
  },
});

export const {bootstrap, mount, unmount} = vueLifecycles;
