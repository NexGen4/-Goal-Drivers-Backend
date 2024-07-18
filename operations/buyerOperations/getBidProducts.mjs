import { connection_function } from '../../service/connection.mjs';

export async function operation(req, res) {
    const connection = connection_function();
    try {
        connection.query("SELECT * FROM product WHERE type = 'bid'", function (err, result, fields) {
            if (err) res.send(err);
            else {
                const product_ids = [];
                const response = [];

                for (let i in result) {
                    product_ids.push(result[i].product_id);
                }

                connection.query("SELECT * FROM rating", function (err, result2, fields) {
                    if (err) res.send(err);
                    else {
                        console.log(result2);

                        for (let i in result2) {
                            const index = result.findIndex(object => object.product_id === result2[i].product_id);

                            if (index !== -1) {
                                result[index].rate = parseInt(result2[i].rating);
                            }
                        }

                        res.send(result);
                    }
                });
            }
        });
    } catch (err) {
        console.log("catch", err);
        res.send("not valid");
        return;
    }
}
