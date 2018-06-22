const job = require('../models').Todo;

module.exports = {
    create(req,res){
        return Todo
            .create({
                designation: req.body.designation,
                level: req.body.level,
                status: req.body.status,
                location: req.body.location,
                salary: req.body.salary,
                skills: req.body.skills,
                hiringmanager: req.body.hiringmanager,
                experience: req.body.experience
            })
            .then(jobs => res.status(201).send(jobs))
            .catch(error => res.status(400).send(error));
    },

};
