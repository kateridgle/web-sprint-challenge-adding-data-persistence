// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then (item => {
            res.status(200).json(item)
        })
        .catch (next)
})

router.post('/', (req, res, next) => {
    Task.postTask(req.body)
        .then (item => {
            res.status(201).json(item)
        })
        .catch (next)
})

module.exports = router