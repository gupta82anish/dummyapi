const jobsController = require('../controllers').addjobs;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message:'SHOW THINGS'
    }))

    app.post('/addjobs',jobsController.create);
};
