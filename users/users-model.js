const db = require('../database/dbConfig.js');


module.exports = {
    findPrisonById,
    addperson,
    getall,
    findById,
    insert,
    getallinmates,
    remove,
    update,
    updateprison,
    gone,
    insertPrison,
    getallById,
    getPrisonsByUser,
    addprisonwid,
    getalltheusers,
    goneuser

};

//GET ALL PRISONS
function getall() {
    return db("prisons")
}




//find prison by id
function findPrisonById(id) {
    return db('prisons')
        .where({ id })
        .select("*")
        .first()
}


//GET PRISONS BY ID
function getallById(id) {
    return db("prisons").where("id", id).select("*").first();

}


// //GET ALL PRISONS
// function getall() {
//     return db("prisons")
// }

//get all inmates

function getallinmates(prison_id) {

    return db("inmates")
    .where({prison_id})
}



// select * from inmates
// where prison_id == 2;


//FIND PRISONER BY ID
function findById(id) {
    return db("inmates")
        .where("id", id)
        .first();
}
//ADD PRISONER basic

function insert(person) {
    return db('inmates')
        .insert(person, 'id')

}

// add a prison

function insertPrison(prison) {
    return db('prisons')
        .insert(prison, 'id')

}







//add an inmate with id same 


function addperson(person, prison_id) {
    return db('inmates')
        .insert({ prison_id, ...person }, 'id')
        .then(([id]) => {
            return findById(id)
        })

}



//remove inmate

function remove(id) {
    return db('inmates')
        .where('id', id)
        .del();
}

//update inmate
function update(id, changes) {
    return db('inmates')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.findById(id) : null));
}


//update prison
function updateprison(id, changes) {
    return db('prisons')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.getallById(id) : null));
}




//remove prison

function gone(id) {
    return db('prisons')
        .where('id', id)
        .del();
}

//Get all users

function getalltheusers () {
    return db("users")
}


//(GET all prisons by user ID)
function getPrisonsByUser(user_id) {

    return db("prisons")
    .where({user_id})
}


//add an prison with id same 


function addprisonwid(prison, user_id) {
    return db('prisons')
        .insert({ user_id, ...prison }, 'id')
        .then(([id]) => {
            return findByUserId(id)
        })

}

//FIND USER BY ID
function findByUserId(id) {
    return db("users")
        .where("id", id)
        .first();
}

//remove user

function goneuser(id) {
    return db('users')
        .where('id', id)
        .del();
}