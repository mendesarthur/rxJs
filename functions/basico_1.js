let a = 9

console.log(a)

// Function Declaration

function bomDia(){
    console.log("Bom, dia!")
}

bomDia()

// Function expression

const boaTarde = function(){
    console.log("Boa, tarde!")
}

let x = boaTarde()
console.log(x)


// return Function

function somar(a = 0, b = 0){
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 6, 7, 8)
console.log(resultado)

resultado = somar(3)
console.log(resultado)
