import config from "../config/config";

export const validatePath = (req: { query: { indentifier: any; }; }, res: any) => {
    
    let path = req.query.indentifier;
    let sql = `SELECT * FROM data WHERE data_permalink = "${path}"`;
    config.query(sql, (error, result) => {
        if (error) throw error;
        res.status(200).send({
            count: result.length
        });
    });
}