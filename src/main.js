import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Aside ,Header,Main,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'


Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(Button)
Vue.use(Radio)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)



new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
