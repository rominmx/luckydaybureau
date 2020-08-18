import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

/**
 * TODO
 * Dark mode
 * Mobile version
 * Burger menu
 * Lazy loading for images
 * Change background on different pages
 */
