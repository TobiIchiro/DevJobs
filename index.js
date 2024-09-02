import express from 'express';
import {engine} from 'express-handlebars';
import router from './routes/index.js';

const app = express();


//Definiendo handlebars como templete engine
app.engine('handlebars',engine({
    defaultLayout: 'main'
}))
app.set('view engine','handlebars')
app.set('views','./views')

//Archivos estáticos
app.use(express.static('public'))


app.use('/',router)

const puerto = process.env.PUERTO || 5000;
app.listen(puerto, () => {
    console.log(`El servidor funciona en el puerto ${puerto}`)
})