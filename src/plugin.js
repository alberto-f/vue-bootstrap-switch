const VueBootstrapSwitch = require('./vue-bootstrap-switch.vue');

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-bootstrap-switch', VueBootstrapSwitch.default);
  }
};