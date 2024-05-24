new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` aponta para a instância
    console.log('a é: ' + this.a)
  }
})
// => "a é: 1"