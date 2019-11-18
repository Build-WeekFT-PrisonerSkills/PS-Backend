const router = require('express').Router();

const PrisonSkillsDb = require('./users-model.js');

const restricted = require('../auth/authenticate-middleware.js')




//get all prisons
router.get('/', (req, res) => {
    PrisonSkillsDb
        .getall()
        .then(prisons => {
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

// ADD Inmate to prison with matching id
router.post('/:id/inmates', restricted, (req, res) => {
    const newInmate = req.body;
    const { id } = req.params;
    PrisonSkillsDb
        .addperson(newInmate, id)
        .then(inmate => {
            res.status(201).json(inmate)
        })

})

// POST inmate
router.post('/inmates', restricted, (req, res) => {

    PrisonSkillsDb.insert(req.body)

        .then(person => {
            res.status(201).json(person);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ error: "There was an error while saving the inmate to the database" })
        })

})




// get all inmates by prison ID

router.get('/:id/inmates', (req, res) => {
    const {id} = req.params;
    PrisonSkillsDb
        .getallinmates(id)
      
        .then(prisons => {
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})


//get prison by id
router.get('/:id', (req, res) => {

    const { id } = req.params;
    PrisonSkillsDb
        .getallById(id)
        .then(prisons => {
            ! prisons ? res.status(400).json({message: "Prison does not exist"}) :
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

//get inmate by id

router.get('/inmates/:id', (req, res) => {

    const { id } = req.params;
    PrisonSkillsDb
        .findById(id)
        
        .then(inmates => {
            ! inmates ? res.status(400).json({message: "Inmate does not exist"}) :
            res.status(200).json(inmates)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})





//Add Prison
router.post('/prison', restricted, (req, res) => {

    PrisonSkillsDb.insertPrison(req.body)

        .then(prison => {
            res.status(201).json(prison);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ error: "There was an error while saving the prison to the database" })
        })

})




//delete inmate

router.delete('/inmates/:id', restricted, (req, res) => {
    const id = req.params.id;
    PrisonSkillsDb.remove(id)

        .then(inmate => {
            ! inmate ? res.status(400).json({message: "Inmate does not exist"}) :

            res.status(200).json({ message: 'Deleted' });


        })
        .catch(err => {
            console.log('error', err);
            res.status(404).json({ error: "The inmate could not be removed" })
        })
})



//Delete prison
router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;
    PrisonSkillsDb.gone(id)

        .then(prison => {
            ! prison ? res.status(400).json({message: "Prison does not exist"}) :

            res.status(200).json({ message: 'Deleted' });


        })
        .catch(err => {
            console.log('error', err);
            res.status(404).json({ error: "The prison could not be removed" })
        })
})


//update inmate
router.put('/inmates/:id', restricted, (req, res) => {
    const id = req.params.id;
    const { body } = req;

    PrisonSkillsDb.update(id, body)

        .then(inmate => {
            ! inmate ? res.status(400).json({message: "Prison does not exist"}) :
            res.status(200).json(inmate);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ error: "There was an error while updating the inmate to the database" })
        })


});

 //update prison
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const { body } = req;

    PrisonSkillsDb.updateprison(id, body)

        .then(prison => {
            ! prison ? res.status(400).json({message: "Inmate does not exist"}) :

            res.status(200).json(prison);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ error: "There was an error while updating the inmate to the database" })
        })


});





module.exports = router;