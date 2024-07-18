import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()

    console.log(req.body)

    try{
        const sql = "INSERT INTO cart (buyer_id, product_id, qty) VALUES (?, ?, ?)";
        const params = [req.body.buyer_id, req.body.product_id, req.body.qty];

        connection.query(sql, params, function (err, result2, fields) {
            if (err) {
                res.send(err);
            } else {
                res.send("Product added to cart!");
            }
        });
    }catch(e){
        console.log("catch")
        res.send(e.message)
        return
    }
}

// export async function operation(req, res, product_id , buyer_id, quantity){
//     console.log("Adding product to cart")
//     try{
//         const connection = connection_function()
//         var sql = "INSERT INTO cart (buyer_id , product_id, quantity) " + "VALUES ("+buyer_id+","+product_id+", ,"+quantity+")"
//         connection.query(sql, function (err, result, fields) {
//             console.log(result)
//             /*if (err) {
//                 // res.send(err)
//                 return res.send(err.message);
//             } else{
//                 return res.send("Product added to cart!");
//                 // res.send("success")
//             }*/
//         });
//     } catch{
//         console.log("catch")
//         res.send("internal sql error")
//         return
//     }
// }