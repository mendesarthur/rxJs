// Somar (3) (4)
    function somar(a = 0){
        return function(b = 0){
            return function(c = 0){
                return a + b + c
            }
        }
    }
    const somarAB = somar (3) (4)
    console.log(somarAB(12))

// Calcular (3) (7) (fn)

function calcular(x){
    return function (y){
        return function(fn){
            return fn(x, y)
        }
    }
}
    
function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

const r1 = calcular (10) (5) (subtrair)
const r2 = calcular (10) (5) (multiplicar)

console.log(r1)
console.log(r2)