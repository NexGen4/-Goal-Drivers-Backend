import {connection_function} from '../service/connection.mjs'
var connection = connection_function()

export function createTables(connection) {
  const queries = [
    `CREATE TABLE IF NOT EXISTS product (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      admin_status VARCHAR(255),
      type VARCHAR(255),
      name VARCHAR(255),
      description VARCHAR(255),
      seller_id INT,
      amount INT,
      price DOUBLE,
      image LONGTEXT,
      date DATE
    )`,
    `CREATE TABLE IF NOT EXISTS bid_product (
      product_id INT AUTO_INCREMENT  PRIMARY KEY,
      name VARCHAR(255),
      status VARCHAR(255),
      base_price INT,
      end_time TIME,
      winner_id INT,
      seller_id INT,
      image LONGTEXT,
      date DATE
    )`,
    `CREATE TABLE IF NOT EXISTS buyer_bid (
      id INT AUTO_INCREMENT PRIMARY KEY,
      bid INT,
      buyer_id INT,
      product_id INT
    )`,
    `CREATE TABLE IF NOT EXISTS review (
      review_id INT AUTO_INCREMENT PRIMARY KEY,
      comment VARCHAR(255),
      user_id INT,
      product_id INT,
      status BOOLEAN
    )`,
    `CREATE TABLE IF NOT EXISTS user (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      firstname VARCHAR(255),
      lastname VARCHAR(255),
      password VARCHAR(255),
      email VARCHAR(255),
      role VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS cart (
      cart_id INT AUTO_INCREMENT PRIMARY KEY,
      buyer_id INT,
      product_id INT,
      qty INT
    )`,
    `CREATE TABLE IF NOT EXISTS help (
      id INT AUTO_INCREMENT PRIMARY KEY,
      question VARCHAR(255),
      answer VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS request_meeting (
      request_id INT AUTO_INCREMENT PRIMARY KEY,
      buyer_id INT,
      seller_id INT,
      seller_status VARCHAR(255),
      full_name VARCHAR(255),
      contact VARCHAR(255),
      email VARCHAR(255),
      request VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS request_demo (
      request_id INT AUTO_INCREMENT PRIMARY KEY,
      buyer_id INT,
      full_name VARCHAR(255),
      contact VARCHAR(255),
      email VARCHAR(255),
      request VARCHAR(255),
      businessLocation VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS delivery (
      delivery_id INT AUTO_INCREMENT PRIMARY KEY,
      firstname VARCHAR(255),
      lastname VARCHAR(255),
      district VARCHAR(255),
      address VARCHAR(255),
      contact VARCHAR(255),
      province VARCHAR(255),
      landmarks VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS sale (
      sale_id INT AUTO_INCREMENT PRIMARY KEY,
      amount INT,
      name VARCHAR(255),
      product_id INT,
      buyer_id INT,
      price DOUBLE
    )`,
    `CREATE TABLE IF NOT EXISTS pending_password (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255),
      password VARCHAR(255)
    )`,
    `CREATE TABLE IF NOT EXISTS rating (
      rating_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      rating DOUBLE,
      amount INT
    )`,
    `CREATE TABLE IF NOT EXISTS feedback (
      feedback_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      comment VARCHAR(255),
      user_id INT
    )`,
    `CREATE TABLE IF NOT EXISTS otp (
      otp_id INT AUTO_INCREMENT PRIMARY KEY,
      otp VARCHAR(255),
      email VARCHAR(255)
    )`
  ];

  queries.forEach((query) => {
    connection.query(query, function (err, result) {
      if (err) throw err;
      console.log(`Table created or already exists : ${query.split(' ')[2]}`);
    });
  });
}