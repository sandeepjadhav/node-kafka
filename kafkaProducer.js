require('dotenv').config();
const kafka = require('kafka-node');

const kafkaHost = process.env.KAFKA_HOST;
const topic = process.env.KAFKA_TOPIC;

const client = new kafka.KafkaClient({ kafkaHost });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('Kafka producer is ready');
});

producer.on('error', (err) => {
  console.error('Producer error:', err);
});

const sendMessage = (message) => {
  return new Promise((resolve, reject) => {
    const payloads = [
      { topic, messages: JSON.stringify(message) }
    ];

    producer.send(payloads, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { sendMessage };
