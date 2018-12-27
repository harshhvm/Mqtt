var mqtt = require('mqtt');
const fs = require('fs');
var client = mqtt.connect('mqtt://test.mosquitto.org:1883');
client.on('connect', () => {
console.log('Connected to Chat Server');
client.subscribe('chat');
});
client.on('close', () => {
console.log('Chat Server closed');
});
client.on('message', (topic, message) => {
console.log(message);
});
