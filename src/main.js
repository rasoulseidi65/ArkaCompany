import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import VueMaterial from 'vue-material-rtl'
import 'vue-material/dist/vue-material.css' //Created by rtlcss.com
import axios from 'axios'
// import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);
import CKEditor from '@ckeditor/ckeditor5-vue';






axios.defaults.baseURL=''
Vue.use( CKEditor );
Vue.use(VueResource)
Vue.http.options.route=''
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.config.productionTip = false
const router=new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }
    if (to.hash){
      return {selector:to.hash}
    }
    return{x:0,y:0}
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
