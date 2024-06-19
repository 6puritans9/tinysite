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

export async function createUser(name: string, password: string) {
	const connection = await connectDB();

	try {
		const [result] = await connection.execute('INSERT INTO users (name, password) VALUES (?, ?)', [
			name,
			password
		]);
		await connection.end();
		return result;
	} catch (error: any) {
		await connection.end();
		throw new Error(`Error creating user: ${error.message}`);
	}
}

export async function getUserByName(name: string) {
	const connection = await connectDB();

	try {
		const [rows] = await connection.query('SELECT id, name, password FROM users WHERE name = ?', [
			name
		]);
		await connection.end();
		return rows[0];
	} catch (error: any) {
		await connection.end();
		throw new Error(`Error fetching user: ${error.message}`);
	}
}
