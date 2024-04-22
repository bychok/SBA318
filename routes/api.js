const express = require("express");
const router = express.Router();

// Sample Data Categories: Users, Posts, Comments
let users = [{ id: 1, name: "Alice" }];
let posts = [{ id: 1, title: "Hello World", userId: 1 }];
let comments = [{ id: 1, postId: 1, content: "Great post!" }];

// Users Routes
router.get("/users", (req, res) => res.json(users));
router.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Posts Routes
router.get("/posts", (req, res) => {
  const { userId } = req.query;
  const filteredPosts = userId
    ? posts.filter((p) => p.userId === parseInt(userId))
    : posts;
  res.json(filteredPosts);
});
router.post("/posts", (req, res) => {
  const { title, userId } = req.body;
  const newPost = { id: posts.length + 1, title, userId };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Comments Routes
router.get("/comments", (req, res) => res.json(comments));
router.post("/comments", (req, res) => {
  const { content, postId } = req.body;
  const newComment = { id: comments.length + 1, postId, content };
  comments.push(newComment);
  res.status(201).json(newComment);
});

module.exports = router;
