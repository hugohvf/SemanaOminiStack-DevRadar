const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://hugohvf:emoymGULZxYK7sRA@cluster0-c53fz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parãmetros: 

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params ( Identificar um recurso na alteração ou remoção)
// Body request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
