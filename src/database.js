const { Pool } = require("pg");

const POSTGRE_URL = "postgresql://postgres:123@localhost:5432/oscar2024";

const database = new Pool({
  connectionString: POSTGRE_URL,
});

module.exports = database;