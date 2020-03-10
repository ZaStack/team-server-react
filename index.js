const express = require('express');
const server = express();

const PORT = 5000;
server.use(express.json());


let books = [
    {
        id: 1,
        title: 'Vader rules',
        year: 1975
    },
    {
        id: 2,
        title: 'vader is the bets boss ever',
        year: 1977
    },
    {
        id: 3,
        title: 'vader did nothing wrong',
        year: 1981
    }
];

server.get('/api/books', (req, res) => {
    res.status(200).json(books)
});

server.listen(PORT, () => {
    console.log(`\n server is listening on ${PORT} \n`);
});
