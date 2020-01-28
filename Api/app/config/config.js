'use strict';


var init = function () {
	if(process.env.NODE_ENV === 'production') {
		return {
			db: {
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				host: process.env.DB_HOST,
				port: process.env.DB_PORT,
				name: process.env.DB_NAME
			},
			redis: {
				host: process.env.REDIS_HOST,
			}
		}
	}
	else {
		return require('./config.json');
	}

}


module.exports = init();