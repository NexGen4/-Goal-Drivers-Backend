import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM buyer_bid WHERE buyer_id="+req.params.buyer_id, function (err, result, fields) {
            if (err) res.send(err);

            res.send(result);
        });
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}