import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Post = db.define('posts',{
    post: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Post;

(async()=>{
    await db.sync();
})();