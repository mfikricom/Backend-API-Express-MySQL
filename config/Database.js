import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
    "port": 5432
});

export default db;