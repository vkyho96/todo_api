const express = require("express");
app = express();
const PORT = 3000;
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => { 
    res.send("index route");
});

app.use('/api/todos', todoRoutes);



app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});