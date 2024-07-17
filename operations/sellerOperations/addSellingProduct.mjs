import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        console.log(req.body)

        var sql = "INSERT INTO product (admin_status, type, name, description, seller_id, amount, price, image, date) " +
            "VALUES ('pending', 'selling', '" + req.body.name + "', '" + req.body.description + "', " +
            req.body.seller_id + ", " + req.body.amount + ", " + req.body.price + ", '" + req.body.image + "', " +
            "NOW())";

        connection.query(sql, function (err, result, fields) {
            console.log(result);

            // if (err) res.send(err);
            if (err) {
                console.error(err);
                return res.status(500).send(err.message); // Send exact error message
            }

            var sql2 = "INSERT INTO rating (product_id, rating, amount) " + "VALUES ("+result.insertId+" , 0 , 0)"
            connection.query(sql2, function (err, result2, fields) {
                if (err) {
                    console.error(err);
                    return res.status(500).send(err.message); // Send exact error message
                } else {
                    res.send("success");
                }
            });
        });
        
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}