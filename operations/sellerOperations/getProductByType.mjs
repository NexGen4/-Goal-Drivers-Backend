import { connection_function } from '../../service/connection.mjs';

export async function operation(req, res) {
    const connection = connection_function();
    try {
        connection.query("SELECT * FROM product WHERE type ='"+req.params.type+"'"+" AND seller_id ='"+req.params.seller_id+"'", function (err, result, fields) {
            if (err) return res.send(err);

            res.send(result)
        });
    } catch (error) {
        console.log("catch");
        res.send("not valid");
    }
}
