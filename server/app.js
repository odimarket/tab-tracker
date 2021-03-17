const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Your user ${req.body.email} was registered!`
    })
});

const PORT = 8081 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});