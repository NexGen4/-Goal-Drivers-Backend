import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM bid_product WHERE product_id="+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);

            res.send(result)

        });
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}