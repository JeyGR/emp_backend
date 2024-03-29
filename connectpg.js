const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: "dpg-cndctpqcn0vc73f62dpg-a.oregon-postgres.render.com",
  user: "library_da10_user",
  port: "5432",
  password: process.env.PASS,
  database: "emp_details",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { client };
