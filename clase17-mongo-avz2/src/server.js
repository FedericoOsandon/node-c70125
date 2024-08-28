const express = require('express')
const handlebars = require('express-handlebars')
const appRouter = require('./router/index.js')
const { connectDB } = require('./config/index.js')

const app  = express()
const PORT = 8080 

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'public'))
connectDB()

// motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(appRouter)

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Servidor escuchando en el puoerto ${PORT}`)
})