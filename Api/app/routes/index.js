'use strict';

const express	 	= require('express');
const router 		= express.Router();
const redisClient = require('../databases/redis');
const pool = require('../databases/postgres')

// get users
router.get('/',async function(req, res, next) {
	res.status(200).send( { "message": "Hello World" })

});

router.get('/status',async function(req, res, next) {
    const postgresQuery = 'SELECT date_trunc(\'second\', current_timestamp - pg_postmaster_start_time()) as uptime;';
    const result = await pool.query(postgresQuery);
    const uptime = result.rows[0].uptime;
    const uptimeString = () => {
        let time = '';

        time += uptime.hours ? `${uptime.hours}h ` : '';
        time += uptime.minutes ? `${uptime.minutes}m ` : '';
        time += uptime.seconds ? `${uptime.seconds}s` : '';

        return time
    };
	res.status(200).send( {
        "status": "OK",
        "postgresUptime": uptimeString(),
        "redisConnectedClients": Number(redisClient.server_info.connected_clients)
       }
       )

});

module.exports = router;