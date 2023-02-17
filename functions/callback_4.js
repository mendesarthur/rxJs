// Exemplo I
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.48},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const qtdeMaiorQueZero = item => item.qtde > 2


const itensValidos = carrinho.filter(qtdeMaiorQueZero)

// console.log(itensValidos)

// Exemplo II

const getItens = item => item.nome
const qtdMaiorQueZero = item => item.qtde > 2
// const qtdMaiorIgualAZero = item => item.qtde >= 0 
// const qtdMuitoGrande = item => item.qtde >= 1000

const nomeItensValidos = carrinho
.filter(qtdeMaiorQueZero)
.map(getItens)

console.log(nomeItensValidos)


// Exemplo III

Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(` ==> ${this[i]}`)
        }
    }
    return novoArray
}

const nomeItensValidos2 = carrinho
.meuFilter(qtdeMaiorQueZero)
.map(getItens)