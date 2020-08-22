//Servidor
const express = require('express')
const server = express()

const  {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require ('./pages')

//template engine
//Importar nunjucks
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache:true,
})

//inicio do servidor
server
//receber dados requy.body
.use(express.urlencoded({extended:true}))
//configuração de arquivos estáticos (css, script, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start servidor
.listen(5500)