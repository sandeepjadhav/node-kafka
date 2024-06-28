require('dotenv').config();
const express = require('express');
const { sendMessage } = require('./kafkaProducer.js');
const consumer = require('./kafkaConsumer.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/send', async (req, res) => {
    const message = req.body;
    try {
        const result = await sendMessage(message);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

consumer.on('message', (message) => {
    console.log('Received message in server:', JSON.stringify(message));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
