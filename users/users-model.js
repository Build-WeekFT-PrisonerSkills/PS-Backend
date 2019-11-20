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

};

//GET ALL PRISONS
function getall() {
    return db("prisons").select( "id","prisonName",)
}

//find prison by id
function findPrisonById(id) {
    return db('prisons')
        .where({ id })
        .select('id', 'email', 'name')
        .first()
}


//GET PRISONS BY ID
function getallById(id) {
    return db("prisons").where("id", id).select("prisonName","city").first();

}


//GET ALL PRISONS
function getall() {
    return db("prisons").select("id", "prisonName")
}

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
