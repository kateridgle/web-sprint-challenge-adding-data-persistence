// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then (items => {
            res.status(200).json(items)
        })
        .catch (next)
})

router.post('/', (req, res, next) => {
    Project.postProjects(req.body)
        .then (item => {
            res.status(201).json(item)
        })
        .catch (next)    
})


module.exports = router