/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("project_id");
        table.string("project_name", 200).notNullable();
        table.string("project_description", 400);
        table.boolean("project_completed").defaultTo(0).notNullable();
    });
    await knex.schema.createTable("resources", (table) => {
        table.increments("resource_id");
        table.string("resource_name", 200).notNullable().unique();
        table.string("resource_description", 400);
    });
    await knex.schema.createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 400).notNullable()
        table.string('task_notes', 400)
        table.boolean('task_completed').defaultTo(false).notNullable()
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    });

    await knex.schema.createTable('project_resources', table => {
        table.increments()
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
