import {connection_function} from '../../service/connection.mjs'
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

export async function operation(req , res){
    const connection = connection_function()

    try{

        connection.query("SELECT * FROM product WHERE seller_id='"+req.params.seller_id+"'", function (err, result, fields) {
            if (err) res.send(err);
            else{
                // res.send(result)
                connection.query("SELECT email FROM user WHERE user_id='"+req.params.seller_id+"'", function (err, result, fields) {
                    if (err) res.send(err);
                    else{
                        console.log(result)
                        // res.send(result)
                        // sendEmail()
                    }
                });
            }
        });
    }
    catch{
        console.log("catch")
        res.send("not valid")
        return
    }
}

function sendEmail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
    };

    return transporter.sendMail(mailOptions);
}