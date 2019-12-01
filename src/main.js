import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
