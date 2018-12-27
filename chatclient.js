var mqtt = require('mqtt');
const fs = require('fs');
const readline = require('readline');
var client = mqtt.connect('mqtt://test.mosquitto.org:1883');
const rl = readline.createInterface({
input:process.stdin,
output:process.stdout
});
var userName = 'Unknown';
client.on('connect', () => {
console.log('Connected to Chat Server');
client.subscribe('chat');
rl.question('Enter your name:', (answer) => {
userName=answer;
rl.on('line', (input) => {
client.publish('chat',userName+" says : "+input);
});
});

});
client.on('close', () => {
console.log('Chat Server closed');
});
client.on('message', (topic, message) => {
console.log(message.toString());
});
