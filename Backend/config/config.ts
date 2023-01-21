import mysql from 'mysql';
import { randomBytes } from 'crypto';
import { Buffer } from 'buffer';

let config = mysql.createConnection({
    host: process.env.HOST_ID,
    user: process.env.USER_ID,
    password: process.env.USER_KEY,
    database: process.env.DB_ID
});

config.connect((error) => {
    if (error) throw error;
    console.log("connected");
});

export const cryptoObj = {
    algorithm: "aes-256-cbc",
    key: Buffer.from("Replace with your key"),
    iv: randomBytes(16),
    constructor: Buffer
}

export default config;