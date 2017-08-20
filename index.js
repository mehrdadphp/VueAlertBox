import VMAlert from './compoents/Alert/VMAlert.vue'

const index = {
  install(Vue , options ) {
    Vue.component('VMAlert', VMAlert);
  }
};

export default index;