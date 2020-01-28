const redis = require('redis');
const config = require('../config/config');
const client = redis.createClient({ host: config.redis.host });

client.on('connect', () => {
    console.log("Redis database started!")
})

module.exports = client