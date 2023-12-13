// build your `Resource` model here
// build your `Resource` model here
const db = require('../../data/dbConfig')


async function getResources() {
    const resources = await db('resources');
    return resources;
}

async function getResourceById(id) {
    const [resource] = await db('resources').where('resource_id', id);
    return resource;
}

async function addResource(resource) {
    const [id] = await db('resources').insert(resource);
    const newResource = getResourceById(id);
    return newResource;
}


module.exports = {
    getResources,
    addResource
}
