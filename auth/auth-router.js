const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const Users = require('./auth-model.js');


// Endpoint 5 /register
router.post('/register', (req, res) => {
  let user = req.body;

 if(!user.email || !user.password){
   res.status(400).json({message:"Must provide email and password"})
 }

  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;
  

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      
       
      res.status(500).json({message:"Error occured"});
    });
  
});

// Endpoint 6 /login
router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        
        const token = getJwtToken(user); 

        
        res.status(200).json({
          message: `Welcome ${user.email}!`, 
          token 
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json({message: "Could not add user"});
    });
});


function getJwtToken(email) {
  const payload = {
    email,
   
  }

  const secret = process.env.JWT_SECRET || 'prisoner skills secret word is safe';

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options)
}

module.exports = router;
