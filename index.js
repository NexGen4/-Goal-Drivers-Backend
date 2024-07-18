import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import admin_router from './routes/adminRoute/Route.mjs'
import buyer_router from './routes/buyerRoute/Route.mjs'
import seller_router from './routes/sellerRoute/Route.mjs'
import user_router from './routes/userRoute/Route.mjs'
import payment_router from './routes/pament/Route.mjs'
import { connection_function } from './service/connection.mjs';
import createTables from './mysql/create_tables.js';
import path from "path";
import {fileURLToPath} from "url";  // Correct import for default export

var app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json())

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use('/api/admin',admin_router)
app.use('/api/seller',seller_router)
app.use('/api/buyer',buyer_router)
app.use('/api/user',user_router)
app.use('/api/payment',payment_router)

// Connect to the database and create tables
// var connection = connection_function();
// createTables(connection);  // Call the function to create tables

app.listen(process.env.PORT,()=>{
    console.log('server started in port : ',process.env.PORT)
})