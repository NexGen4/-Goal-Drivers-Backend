import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()

    const sql = "SELECT * FROM bid_product WHERE product_id = ?";
    const params = [req.params.product_id];

    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            res.send(err);
        } else {

            const sql1 = "SELECT * FROM user WHERE user_id = ?";
            const params1 = [result[0].seller_id];

            connection.query(sql1, params1, function (err, result2, fields) {
                if (err) {
                    res.send(err);
                } else {

                    sendMail_noAttach(result2[0].email, "About product", req.params.text);
                    res.send('Email sent');
                }
            });
        }
    });

}