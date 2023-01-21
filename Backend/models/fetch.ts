import { createDecipheriv } from "crypto";
import { cryptoObj } from "../config/config";
import config from "../config/config";
export const fetchData = (req: any, res: any) => {

    let data: string;
    let uniqueID = req.query.uniqueID;
    let sql = `SELECT data FROM data WHERE data_permalink = "${uniqueID}"`;
    config.query(sql, (error, result) => {
        if (error) throw error;
        result.forEach((obj: { data: string; }) => {
            data = obj.data;
        });
        
        const decrypt = (message: any) => {
            let messageArray = message.split(':');
            let iv = cryptoObj.constructor.from(messageArray.shift(), 'hex');
            let encrypted = cryptoObj.constructor.from(messageArray.join(':'), 'hex');

            let decipher = createDecipheriv(cryptoObj.algorithm, cryptoObj.key, iv);
            let decrypted = decipher.update(encrypted);

            decrypted = cryptoObj.constructor.concat([decrypted, decipher.final()]);

            return decrypted.toString();
        }

        res.status(200).send({
            data: decrypt(data)
        });
    });
    
}