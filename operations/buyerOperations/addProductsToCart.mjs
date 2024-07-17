import {connection_function} from '../../service/connection.mjs'

async function addToCart(product_ids , res , i , buyer_id , connection){
    console.log(i)
    if(i===product_ids.length){
        res.send("success")
        return;
    }
    else{
        var sql = "INSERT INTO cart (buyer_id , product_id) " + "VALUES ("+product_ids[i]+","+buyer_id+")"
        connection.query(sql, function (err, result, fields) {
        if (err) {res.send(err)}
        else{
            console.log(product_ids)
            addToCart(product_ids , res , i+1 , connection)
        }
        });
    }
}

export async function operation(req, res, product_id , buyer_id, quantity){
    console.log("Adding product to cart")
    try{
        const connection = connection_function()
        var sql = "INSERT INTO cart (buyer_id , product_id, quantity) " + "VALUES ("+buyer_id+","+product_id+", ,"+quantity+")"
        connection.query(sql, function (err, result, fields) {
            console.log(result)
            /*if (err) {
                // res.send(err)
                return res.send(err.message);
            } else{
                return res.send("Product added to cart!");
                // res.send("success")
            }*/
        });
    } catch{
        console.log("catch")
        res.send("internal sql error")
        return
    }
}