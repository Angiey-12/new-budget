// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import './assets/fontawesome-free-5.11.2-web/css/all.min.css'

import './directives/directives'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
