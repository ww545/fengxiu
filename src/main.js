import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axios as http } from './utils/http'
import VueAxios from 'vue-axios'
import { Button } from 'vant';
const app = createApp(App);
const plus =[
    Button, 
]
plus.forEach(p => {
    app.use(p);
});
app.provide('phttp', http)
app.config.globalProperties.$http= http;
app.use(store).use(router).use(VueAxios, http).mount('#app')
