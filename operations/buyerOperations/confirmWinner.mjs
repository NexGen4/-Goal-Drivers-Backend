import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()

    const sql = "UPDATE bid_product SET winner_id = ?, date = NOW() WHERE product_id = ?";
    const params = [req.params.winner_id, req.params.product_id];

    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            res.send(err);
        } else {
            sendMail_noAttach(req.params.email, "Confirm Winner", "You win the bid for product -> " + req.params.product_id + "  You can redirect to the confirm order through this url " + " http://localhost:3000/confirm-order/" + req.params.product_id);
            res.send('Email sent to the winner');
        }
    });

}