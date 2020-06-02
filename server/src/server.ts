import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('linguagem de usuario');

    response.json([
        'Luiz',
        'Felipe',
        'Pacheco',
        'Eleoterio',
        'Taynara'
    ]);
})

app.listen(3000)