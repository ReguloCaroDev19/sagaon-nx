const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	password: '1234',
	host: 'localhost',
	port: 6000,
	database: 'postgres'
});

module.exports = {
	query: (text, params) => pool.query(text, params)
};
