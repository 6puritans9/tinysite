import mysql from 'mysql2/promise';

export async function connectDB() {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'bbs'
	});

	return connection;
}
