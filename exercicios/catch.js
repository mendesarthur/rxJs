function nome(nome){
    return new Promise((resolve, reject) =>{
        if(nome == 'Arthur'){
            resolve(nome)
        }
        else{
            reject('404')
        }
    })
}
nome('Art').then((data) => {
    return data.toUpperCase()
}).then(d => console.log(d))
.catch(err => console.log(`${err}: Usuário não encontrado`))