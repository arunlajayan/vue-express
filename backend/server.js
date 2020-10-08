const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const PORT = 30000;
var messages = ["well", "hi"]
app.get('/messages', (req, res) => {

    res.send(messages);
})
app.post('/messages', (req, res) => {
    let msg = req.body
    console.log(msg)
    messages.push(msg.messages)
    res.json(msg);
    console.log(messages);
})
app.listen(PORT, () => console.log('app running'))