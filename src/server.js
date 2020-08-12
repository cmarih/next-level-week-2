//dados
const proffys = [ 
    {
    name: "name",
    avatar:"https://avatars0.githubusercontent.com/u/36991426?s=460&u=e4e4013a0122e443e7464eb0d5e55263b843d882&v=4",
    whatsapp:'98798657674764',
    bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laborátorio e por mudar a vida das pessoas atráves de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
    subject: "Artes",
    cost:"40",
    weekday:[],
    time_from:[720],
    time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Química",
    "Geografia",
    "História",
    "Matemática",
    "Português",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//fncionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    console.log(data)

//Adiconar dados a lista de proffys
    proffys.push(data)
    return res.render("give-classes.html", {subjects, weekdays})
}
//Servidor
const express = require('express')
const server = express()

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
//configuração de arquivos estáticos (css, script, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start servidor
.listen(5500)