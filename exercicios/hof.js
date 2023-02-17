// // Exemplo 1

function sum (a, b, res) {
   let op = res(a, b)
   return op
}  

console.log(sum(6, 8, function(x, y){
   return x * y
}))


// Exemplo 2

function potencia(base){
   return function (exp){
      return Math.pow(base, exp)
   }
}

console.log(potencia(5) (3))
