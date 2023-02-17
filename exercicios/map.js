//
const itens = ['Caneta', 'Livro', 'Borracha', 'lapis']

const firstWord = (w) => w[0]

console.log(itens.map(firstWord))

// 

const nums = [10, 2, 6, 9, 8]

const mult = (n) => n * 2 

const resultado = nums.map(mult)

console.log(resultado)


// 

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.48},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]


console.log(carrinho.map((item) => item.nome))

console.log(carrinho.map((item) => item.qtde * item.preco))





