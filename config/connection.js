const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host:'localhost',
    dialect: 'mysql',
    host:  '127.0.0.1'
});
};

module.exports = sequelize;
// module.exports = {
//     HOST: "us-cdbr-east-05.cleardb.net",
//     USER: "bd4138b73e4e0a",
//     PASSWORD: "f1a2048e",
//     DB: "heroku_1c97565e8eb2718"
// }