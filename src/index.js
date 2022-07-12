const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require("./routes/naves")

const app = express()

//middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get('/', (req, res) => {
    res.send("Api")
})

// conexion mongodb
mongoose
    .connect('mongodb+srv://Stiven073120:2q6b6N6SvuAskYNz@cluster0.vo0vt.mongodb.net/PruebaDB?retryWrites=true&w=majority')
    .then(() => console.log('conectado a MongoDB'))
    .catch((error) => console.log(error));

app.listen(3009, () => console.log('Servidor corriendo: http://localhost:3009/'))