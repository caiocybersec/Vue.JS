var obj = {a: 1}

var vm = new Vue ({
  data:
    data,
})

// É uma referência ao mesmo objeto!
console.log(vm.a == data.a) //true
