//get all prisons
router.get('/', (req, res) => {
    Prisondb
        .getall()
        .then(prisons => {
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

// get all inmates
router.get('/inmates', (req, res) => {
    Prisondb
        .getallinmates()
        .then(prisons => {
            res.status(200).json(prisons)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})




