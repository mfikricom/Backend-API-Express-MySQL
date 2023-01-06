import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','postgres','root',{
    host: '127.0.0.1',
    dialect: 'postgres',
    "port": 5432
});

export default db;