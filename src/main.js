import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import cartpageVue from "./pages/cartPage.vue";
import productPageVue from "./pages/productPage.vue";


const router = new VueRouter({
  mode: 'history',
    routes: [
        {path: '/', component: productPageVue},
        {path: '/cart', component: cartpageVue}
    ]
})
Vue.use(VueRouter); 
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
