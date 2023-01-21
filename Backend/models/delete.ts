import config from "../config/config";

export const deleteData = (req: any, res: any) => {

    const identifier = req.query.uniqueID;
    let sql = `DELETE FROM data WHERE data_permalink = "${identifier}"`;
    config.query(sql, (error) => {
        if (error) throw error;
        res.status(200).send({
            success: "true",
            message: "data record deleted successfully"
        });
    });

}