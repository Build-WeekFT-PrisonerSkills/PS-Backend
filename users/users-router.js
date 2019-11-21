const router = require('express').Router();

const PrisonSkillsDb = require('./users-model.js');

const restricted = require('../auth/authenticate-middleware.js')




// Endpoint 1 '/api/users/' (GET all prisons)
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

// Endpoi '/api/users/' (GET all users)
router.get('/userlist', (req, res) => {
    PrisonSkillsDb
        .getalltheusers()
        .then(prisons => {
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Endpoint 2 '/api/users/:id' (GET prison by id)
router.get('/:id',(req, res) => {

    const { id } = req.params;
    PrisonSkillsDb
        .getallById(id)
        .then(prisons => {
        
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Endpoint 3 '/api/users/:id/inmates' (GET all inmates by prison ID)
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

// Endpoint 4 '/api/users/inmates/:id' (GET inmate by id)
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

// ***Endpoints 5 and 6 are in the auth-router.js file (register and login)*** //

// Endpoint 7 Add Prison
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

// Endpoint 8 '/api/users/:id' (PUT update prison)
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const { body } = req;

    PrisonSkillsDb.updateprison(id, body)

        .then(prison => {
            ! prison ? res.status(400).json({message: "Prison does not exist"}) :

            res.status(200).json(prison);
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({ error: "There was an error while updating the inmate to the database" })
        })
})

// Endpoint 9 '/api/users/:id' (DELETE prison)
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

// Endpoint 10 '/api/users/inmates' (POST inmate)
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

// Endpoint 11 '/api/users/inmates:id' (PUT update an inmate)
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

// Endpoint 12 '/api/users/inmates/:id' (DELETE inmate)
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





// 14 Endpoint (GET all prisons by user ID)
router.get('/:id/prisons', (req, res) => {
    const {id} = req.params;
    PrisonSkillsDb
        .getPrisonsByUser(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})






// Endpoint 15 ADD prison to user with matching id
router.post('/:id/prisons', restricted, (req, res) => {
    const newPrison = req.body;
    const { id } = req.params;
    PrisonSkillsDb
        .addprisonwid(newPrison, id)
        .then(prison => {
            res.status(201).json(prison)
        })

})


// ADD Inmate to prison with matching id
// router.post('/:id/inmates', restricted, (req, res) => {
//     const newInmate = req.body;
//     const { id } = req.params;
//     PrisonSkillsDb
//         .addperson(newInmate, id)
//         .then(inmate => {
//             res.status(201).json(inmate)
//         })

// })


//Middleware

// function ValidatePrison(req, res, next) {
//     const { id } = req.params;
//     PrisonSkillsDb.getallById(id)
       

//     .then(prisons => {
//         if ( ! prisons) {
//             res.status(400).json({message: "Prison does not exist"}) 
//         } else {
//             next()
//         }
//     })

        

// };



/////////////////////////








module.exports = router;