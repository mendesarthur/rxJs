const primeiroElemento = arrayOustring => arrayOustring[0]
const letraMaiuscula = letra => letra.toUpperCase()


new Promise(function(resolve) {
    resolve(['bna', 'Bia', 'Carlos', 'Daniel'])
})

    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)