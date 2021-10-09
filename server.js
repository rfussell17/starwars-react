
const express = require('express');
const app = express();

const port = 5000;

app.get('/api/characters',(req, res) => {
    const characters = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Kim', lastName: 'Rae'},
        {id: 3, firstName: 'Ted', lastName: 'Mi'},
    ];
    
    res.json(characters);
})

app.listen(port, ()=> console.log(`Server started on port ${port}`));