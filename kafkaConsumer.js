require('dotenv').config();
const kafka = require('kafka-node');

const kafkaHost = process.env.KAFKA_HOST;
const topic = process.env.KAFKA_TOPIC;

const client = new kafka.KafkaClient({ kafkaHost });

const consumer = new kafka.Consumer(
  client,
  [{ topic, partition: 0 }],
  { autoCommit: true }
);

consumer.on('message', (message) => {
  console.log('Received message:', JSON.stringify(message));
});

consumer.on('error', (err) => {
  console.error('Consumer error:', err);
});

module.exports = consumer;
