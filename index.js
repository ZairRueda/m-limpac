// Este es el archivo de configuracion

let express = require("express")
let app = express()
let path = require('path')

// Esta configuracion sirve para que podamos entender los datos del formulario
app.use(express.urlencoded({extended: false}))

// Para decirle que el servidor tambien entiende formato json
app.use(express.json())

// Esta es la froma de traer rutas a produccion
app.use(require('./routes/index'))

// La definicion de donde sera la carpeta proncipal a la que acceda el servidor
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000")
})