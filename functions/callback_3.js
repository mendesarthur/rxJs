//Exemplo I

const nums = [1, 2, 3, 4, 5]

const dobro = (n) => n * 2 

console.log(nums.map(dobro))


//Exemplo II

const nomes = ['Ana', 'Bia', 'Rafa', 'Ruth', 'José']

const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)


//Exemplo III

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.48},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]


// const getObj = (obj) => obj.nome

// const resposta = carrinho.map(getObj)

// console.log(resposta)


// const getTotal = item => item.qtde * item.preco

// const totais = carrinho.map(getTotal)

// console.log(totais)


// Exemplo IV

Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
       const resultado =  fn(this[i], i, this)      
        novoArray.push(`==>${resultado}`)
    }
    return novoArray
} 

const getObj = (obj) => obj.nome

const resposta = carrinho.meuMap(getObj)

console.log(resposta)


const getTotal = item => item.qtde * item.preco

const totais = carrinho.meuMap(getTotal)

console.log(totais)
