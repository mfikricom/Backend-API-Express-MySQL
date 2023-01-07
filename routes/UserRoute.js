import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import {
    getPosts,
    createPost,
    getPostsWithUserName
} from "../controllers/PostController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/posts', getPosts);
router.get('/postsWithName', getPostsWithUserName);
router.post('/posts', createPost);

export default router;