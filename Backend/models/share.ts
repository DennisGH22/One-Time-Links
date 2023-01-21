import { BinaryLike, createCipheriv } from "crypto";
import { cryptoObj } from "../config/config";
import config from "../config/config";

export const shareData = (req: { body: any; }, res: any) => {

    let data = req.body.data;
    let url = req.body.data_permalink;

    const encrypt = (message: BinaryLike) => {
        let cipher = createCipheriv(cryptoObj.algorithm, cryptoObj.key, cryptoObj.iv);
        let encrypted = cipher.update(message);
        encrypted = cryptoObj.constructor.concat([encrypted, cipher.final()]);

        return `${cryptoObj.iv.toString('hex')}:${encrypted.toString('hex')}`;
    }

    let sql = "INSERT INTO data (data, data_permalink) VALUES (?)";
    config.query(sql, [[encrypt(data), url]], (error) => {
        if (error) throw error;
        res.status(200).send({
            success: "true",
            message: "data recorded successfully"
        });
    });
    
}