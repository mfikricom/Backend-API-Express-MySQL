import Post from "../models/PostModel.js";

export const getPosts = async(req, res) =>{
    try {
        const response = await Post.findAll();
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
