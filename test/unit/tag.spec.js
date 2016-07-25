var Vue = require('vue')
var Tag = require('../../src/Tag.vue')

describe('tag.vue', function(){

  it('should have correct message', function(){
    expect(Tag.data().msg).toBe('hello vue')
  })

  it('should render corrent message',function(){
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        test: Tag
      }
    }).$mount()
    expect(vm.$el.querySelector('.__tag').textContent.trim()).toBe('hello vue')
  })

  it('should fetch data',function(){
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        test: Tag
      }
    }).$mount()
    expect(vm.$children[0].fetch()).toBe('hello data')
  })
})
