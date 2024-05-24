
var vm = new Vue({
  el: '#exemplo',
  data: {
    data1: { a: 1 },
    data2: { a: 1 }
  },
  watch: {
    'data1.a': function(newValue, oldValue) {
      console.log('Valor de data1.a mudou de', oldValue, 'para', newValue);
    },
  },

})

vm.data1.a = 2

//será chamada a função em watch pois o valor foi alterado