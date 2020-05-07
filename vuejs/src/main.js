import Vue from 'vue';
import App from './App.vue';

const axios = require('axios').default;

Vue.config.productionTip = false;

new Vue({
  mounted() {
    axios
      .get('https://projet7oc.com/data.json')
      // eslint-disable-next-line
      .then((response) => (console.log(this.data = response)));
  },
  render: (h) => h(App),
}).$mount('#app');
