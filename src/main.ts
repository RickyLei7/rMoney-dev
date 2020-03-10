import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 999);
  }, 0);

};

if (document.documentElement.clientWidth > 500) {
  window.alert('For the best experience, please use your cell phone.');
  const img = document.createElement('img');
  img.src = './QRCode.jpeg';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%, -50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}
