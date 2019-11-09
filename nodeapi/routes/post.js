const express = require('express');
const {getPosts, createPost} = require('../controllers/post');
const validator = require('../helpers/request-data-validator');

router = express.Router();
router.get('/', getPosts);
router.post('/post', validator.createPostvalidator, createPost);

module.exports = router;