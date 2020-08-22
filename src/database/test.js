const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: 'Mari Costa',
        avatar: 'https://avatars0.githubusercontent.com/u/36991426?s=460&u=e4e4013a0122e443e7464eb0d5e55263b843d882&v=4',
        whatsapp: '99809787867678587',
        bio: 'Instrutor de artes e quimica',
    }

    classValue = {
        subject: 1,
        cost: '40',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor, junto com seus dados

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
   // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"

    `)

    //console.log(selectClassesSchedules)
})