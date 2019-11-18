exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('email', 128)
            .notNullable()
            .unique();
        tbl.string('password', 128).notNullable();


    })


        .createTable("prisons", tbl => {
            tbl.increments();

            tbl.string('prisonName', 128);
            tbl.string('address', 128)
            tbl.string('phone', 128)
            tbl.string('city', 128)
            tbl.string('state', 128)
            tbl.string('zipcode', 128)

        })

        .createTable("inmates", tbl => {
            tbl.increments();

            tbl.string("inmateFirstName", 255)

            tbl.string("inmateLastName", 255)

            tbl.integer("prison_id")
                .unsigned()
                .references("id")
                .inTable("prisons")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")



            tbl.string("skillset", 255)

            tbl.string("age", 255)

            tbl.string("workExperience", 255)

            tbl.string("image", 255)

            tbl.boolean("available").defaultTo(false).notNullable

        })

        .createTable("prison_users", tbl => {
            tbl.increments();



            tbl.integer("prison_id")
                .unsigned()
                .references("id")
                .inTable("prisons")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")



        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('prison_users')
        .dropTableIfExists('inmates')
        .dropTableIfExists('prisons')
        .dropTableIfExists('users');
};
