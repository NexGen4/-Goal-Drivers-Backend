import {connection_function} from '../../service/connection.mjs'
import {pdfCreate} from '../systemOperations/index.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()

    try{
        connection.query("UPDATE bid_product SET winner_id="+req.params.winner_id+" WHERE product_id="+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);
            sendMail_noAttach(req.params.email , "Confirm Winner" ,"You win the bid for product -> "+req.params.product_id + "  You can redirect to the confirm order through this url "+ " http://localhost:3000/confirm-order/"+req.params.product_id )
            res.send('Email sent to the winner')

        });
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}