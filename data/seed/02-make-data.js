const projects = [
    {project_name: 'code', project_description: 'learn to code', project_completed: false},
    {project_name: 'sleep', project_description: 'go to bed', project_completed: false},
    {project_name: 'meal', project_description: 'make food to eat', project_completed: false},
  ]
  
  const resources = [
    {resource_name: 'laptop', resource_description: 'small computer'},
    {resource_name: 'pillow', resource_description: 'cotton filled sack'},
    {resource_name: 'spaghetti', resource_description: 'noodles and meat sauce'},
  ]
  
  const tasks = [
    {task_description: 'type a bunch', task_notes: 'no notes', task_completed: 'false', project_id: 1},
    {task_description: 'lie down', task_notes: 'no notes', task_completed: 'false', project_id: 2},
    {task_description: 'prepare food', task_notes: 'no notes', task_completed: 'false', project_id: 2},
    {task_description: 'eat food', task_notes: 'no notes', task_completed: 'false', project_id: 3},
    {task_description: 'clean dishes', task_notes: 'no notes', task_completed: 'false', project_id: 3},
  ]
  
  const projectResources = [
    {project_id: 1, resource_id: 1},
    {project_id: 2, resource_id: 2},
    {project_id: 2, resource_id: 3},
    {project_id: 3, resource_id: 1},
    {project_id: 3, resource_id: 3},
  
  ]
  
  
  
  exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(projectResources)
  };