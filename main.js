var Vue = require('vue')
var Tag = require('./components/Tag.vue');

var app = new Vue({
  el: '#el',
  components: {
    tag: Tag
  }
})
