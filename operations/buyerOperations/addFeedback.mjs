import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        const sql = "INSERT INTO feedback (product_id, comment, user_id) VALUES (?, ?, ?)";
        const params = [req.body.product_id, req.body.comment, req.body.user_id];

        connection.query(sql, params, function (err, result2, fields) {
            if (err) {
                res.send(err);
            } else {
                res.send("success");
            }
        });


    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}