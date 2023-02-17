function exec(fn, a, b){
    return fn(a,b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)
const subtrair = (w, z) => w - z 


exec(somarNoTerminal, 50, 70)
exec(subtrairNoTerminal, 90, 30)

const r = exec(subtrair, 70, 50)

console.log(r)

setInterval(() => {
    console.log('Executando em 3 segundos')
}, 3000)