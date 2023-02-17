const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.48},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const total = (item) => item.qtde * item.preco


const somar = (acc, el) =>{
    console.log(`${acc} + ${el}`)
    return acc + el
}



const totais = carrinho
.map(total)
.reduce(somar, 0)


console.log(totais)


