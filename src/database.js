const mongoose = require('mongoose');
//Necesita un par de configuraciones si no te va dar un erro de consola
//Es solo para el funcionamiento de la biblioteca
mongoose.connect('mongodb+srv://wilson:406954@cluster0-fduun.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
    