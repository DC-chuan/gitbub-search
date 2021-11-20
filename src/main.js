import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 开启事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')