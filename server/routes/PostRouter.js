const express = require('express')
const postsController = require('../controllers/PostController')
const router = express.Router()

router.get('/home', postsController.getAllUserPosts)

router.get('/home', postsController.getPostById)

router.post('/home', postsController.createPost)

router.put('/home', postsController.updatePostById)

router.delete('/home', postsController.deletePostById)

module.exports = router;