import Post from "../models/PostModel.js";
import db from "../config/Database.js";

export const getPosts = async(req, res) =>{
    try {
        const response = await Post.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostsWithUserName = async(req, res) =>{
   var v_query = "SELECT  posts.post, posts.likes, users.name, posts.\"createdAt\", posts.\"updatedAt\" FROM posts left join users on posts.user_id = users.id"

    try {
        const response = await db.query(v_query, { raw: false });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = async(req, res) =>{
    try {
        await Post.create(req.body);
        res.status(201).json({msg: "Post Created"});
    } catch (error) {
        console.log(error.message);
    }
}
