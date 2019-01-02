var express = require('express')
var router = express.Router()
const Task = require('../model/Task')


//Get all Tasks
router.get('/tasks', (req,res)=>{
    Task.findAll()
    .then( tasks=>{
        res.json( tasks )
    })
    .catch(err=>{
        res.send('error: '+err)
    })
})

//Add task
router.post('/task', (req,res)=>{
    if( !req.body.task ){
        res.status(400)
        res.json({
            error :"Bad Data"
        })
    }else{
        Task.create(req.body)
        .then( ()=>{
            res.send("Task Added")
        })
        .catch(err => {
            res.send("Ops! "+err)
        })
    }
})

//Delete task
router.delete('/task/:id', (req, res)=>{
    Task.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.send('Task deleted')
    })
    .catch(err =>{
        res.send("Ops, error when delete task: "+err)
    })
})

//Update task
router.put('/task/:id', (req, res)=>{
    if( !req.body.task ){
        res.status(400)
        res.json({
            error : "Bad data"
        })
    }else{
        Task.update(
            {
                id : req.body.id,
                task : req.body.task,
                category : req.body.category,
            },
            {
                where : { id : req.params.id }
            }
        )
        .then(()=>{
            res.send("Task updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router