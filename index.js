const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from my personal smarty planet!!! It's so cool to be here...")
})

const users =[
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888'},
    {id: 2, name: 'Rabana', email: 'rabana@gmail.com', phone: '0178888888'},
    {id: 3, name: 'Sana', email: 'sana@gmail.com', phone: '0178888844'},
    {id: 4, name: 'Saba', email: 'saba@gmail.com', phone: '017884667'},
    {id: 5, name: 'Ana', email: 'ana@gmail.com', phone: '0178888367'},
    {id: 6, name: 'Rana', email: 'rana@gmail.com', phone: '01788444488'},
    {id: 7, name: 'Kaiba', email: 'kaiba@gmail.com', phone: '0172358888'}
]
app.get('/users', (req, res) =>{

    if(req.query.name){
     const search = req.query.name.toLowerCase();
     const matched = users.filter(user => user.name.toLowerCase().includes(search))
     res.send(matched);
    }
    else{
        res.send(users)
    }
    

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request' ,req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges', 'Goava', 'Banana']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
})

app.listen(port, () => {
    console.log('Listenning to port', port)
})