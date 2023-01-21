import mysql from 'mysql';
import { randomBytes } from 'crypto';
import { Buffer } from 'buffer';

let config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db name"
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