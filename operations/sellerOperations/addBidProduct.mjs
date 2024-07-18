import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    function formatEndTime(date, durationInHours) {
        /*if (!(date instanceof Date)){
          throw new Error('Invalid "date" argument. You must pass a date instance')
        }
        var today = new Date();
        var time = today.getHours()+req.body.duration + ":" + today.getMinutes() + ":" + today.getSeconds();
        return ${time}*/

        if (!(date instanceof Date)) {
            throw new Error('Invalid "date" argument. You must pass a date instance');
        }

        const durationInMilliseconds = durationInHours * 60 * 60 * 1000; // Convert hours to milliseconds
        const endTime = new Date(date.getTime() + durationInMilliseconds);

        const hours = String(endTime.getHours()).padStart(2, '0');
        const minutes = String(endTime.getMinutes()).padStart(2, '0');
        const seconds = String(endTime.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    try{

        let host = "http://localhost:3002/"


        let imgURL = host + req.files[0].destination+req.files[0].filename;

        var sql = "INSERT INTO product (admin_status, type, name, description, seller_id, amount, price, image, date) " +
            "VALUES ('pending', 'bid', '" + req.body.name + "', '" + req.body.description + "', " +
            req.body.seller_id + ", " + req.body.amount + ", " + req.body.base_price + ", '" + imgURL + "', " +
            "NOW())";

        connection.query(sql, function (err, result, fields) {
            if (err) res.send(err);
            else{
                // var current_time = format(new Date)
                // Calculate the end time
                const current_time = formatEndTime(new Date(), req.body.duration); // Assuming duration is in hours
                console.log(current_time)

                var sql = "INSERT INTO bid_product (product_id, name, status, base_price, seller_id, end_time, image, date) " +
                    "VALUES (" + result.insertId + ", '" + req.body.name + "', 'ongoing', " + req.body.base_price + ", " +
                    req.body.seller_id + ", '" + current_time + "', '" + imgURL + "', NOW())";

                connection.query(sql, function (err, result2, fields) {
                    if (err) res.send(err);
                    else{

                        var sql2 = "INSERT INTO rating (product_id, rating, amount) " + "VALUES ("+result.insertId+" , 0 , 0)"
                        connection.query(sql2, function (err, result2, fields) {
                            if (err) {
                                console.error(err);
                                return res.status(500).send(err.message); // Send exact error message
                            } else {
                                res.send("success");
                            }
                        });
                    }
                });
            }
        });
    }
    catch(e){
        console.log("catch")
        console.log(e)
        res.send("not valid")
        return
    }
}