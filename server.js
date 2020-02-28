const http = require('http')
const url = require('url')
const petshop = require('./petshop')

// CRIANDO UM SERVIDOR
server = http.createServer((req, res) => {
    
    let urlCompleta = url.parse(req.url, true)
    console.log(urlCompleta)

    if(urlCompleta.pathname == "/"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Voce está na página inicial!")
        res.end()
    }

    if(urlCompleta.pathname== "/home"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Você está dentro do sistema petshop! AUUUUUUUUUUU")
        res.end()
    }


    if(urlCompleta.pathname == "/pet/adicionar"){
        if(petshop.adicionarPets(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("O pet foi cadastrado com sucesso!")
        }else{
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'})
            res.end("Erro ao tentar cadastrar um pet")
        }   
    }
})


server.listen(3000, "localhost")