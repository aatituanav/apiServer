const express = require('express');
const morgan = require('morgan');
const cors=require("cors");
const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.set('json spaces', 2);
app.set('port', process.env.port || 4000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions))


app.use(require('./routes/users.js'))

app.listen(`${app.get(`port`)}`, () => {
    console.log(`Servidor en puerto ${app.get(`port`)}`)
})




