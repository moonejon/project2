require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "exampledb",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: process.env.MYSQL_USER || "travis",
    password: process.env.MYSQL_PASSWORD || "",
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false,
    operatorsAliases: false
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    operatorsAliases: false
  }
};
