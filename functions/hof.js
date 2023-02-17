// Retorna outra função
function pot(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

console.log(pot(5) (2))


// Passa uma função como parametro

function calc (x, y, op){
    let res =  op(x, y)
    return res
}

function somar(k, j){
    return k + j
}

const mult = (a, b) => a * b

console.log(calc(11, 2, function(a, b){
    return a / b
}))