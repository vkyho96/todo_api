const express = require('express');
const router = express.Router();
const db = require('../models');
var helpers = require("../helpers/todos");


router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)


router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)



module.exports = router;