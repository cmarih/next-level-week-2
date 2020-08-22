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

function getSubject(subjectNumber){
    const position = +subjectNumber - 1

    return subjects [position]
}

//conversão de horas em minutos
function convertHoursToMinutes(time){
    const [hour, minutes] = time.split (":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}