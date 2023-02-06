const db = require('../models/projectModels');

const projectController = {};

projectController.createProject = (req, res, next) => {
  //grab number of entries for table
  const numText = `SELECT COUNT(*) FROM project`;

  const { projectName, projectDescription } = req.body;

  db.query(numText)
    .then((data) => {
      const numOfEntries = data.rows[0].count;
      console.log(numOfEntries);
      //the _id will always match up with the id being pushed onto projects array within mongo
      res.locals.newEntry = Number(numOfEntries) + 1;
      const text = `INSERT INTO project (_id, projectName, projectDescription)
                VALUES ('${
                  Number(numOfEntries) + 1
                }', '${projectName}', '${projectDescription}')`;
      db.query(text)
        .then((newData) => {
          const projectArray = newData.rows;
          res.locals.projects = projectArray;
          //store email to projToUser
          const projToUserText = `INSERT INTO projectToUser (projectId, userId) VALUES (${
            Number(numOfEntries) + 1
          }, '${res.locals.userSession.email}')`;
          db.query(projToUserText)
            .then((finData) => {
              console.log('success in assigning user to project in SQL');
              next();
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

projectController.addUserToProject = (req, res, next) => {
  const { email, project } = req.body;

  const text = `INSERT INTO projectToUser (projectId, userId) VALUES (${Number(
    project
  )}, '${email}')`;

  db.query(text)
    .then((data) => {
      console.log(data);
      console.log('successfully created to do list within project');

      res.locals.newUser = { email, project };
      next();
    })
    .catch((e) => console.log(e));
};

projectController.createToDo = (req, res, next) => {
  const { name, project, description } = JSON.parse(req.body);

  const text = `INSERT INTO toDoList (name, projectId, description) VALUES ('${name}', ${project}, '${description}')`;

  db.query(text)
    .then((data) => {
      console.log(data);
      console.log('successfully created to do list within project');

      res.locals.toDo = { name, description };
      next();
    })
    .catch((e) => console.log(e));
};

projectController.markTaskComplete = (req, res, next) => {
  const { project, name } = req.body;

  const text = `UPDATE task SET completed = true WHERE projectid = ${project} AND taskName = '${name}'`;

  db.query(text)
    .then((data) => {
      console.log(data);
      console.log('successfully marked task as complete');
      res.locals.completed = { project, name };
      next();
    })
    .catch((e) => console.log(e));
};

projectController.createTask = (req, res, next) => {
  const { name, description, date, list, project, assigned, completed } =
    req.body;

  const text = `INSERT INTO task (taskName, taskDescription, dueDate, toDoList, projectId, assignedTo, completed) 
    VALUES ('${name}', '${description}', '${date}', ${list}, ${project}, '${assigned}', ${completed})`;

  db.query(text)
    .then((data) => {
      console.log(data);
      console.log('successfully created and assigned task');
      res.locals.task = { name, description, assigned };
      next();
    })
    .catch((e) => console.log(e));
};

projectController.getProjects = (req, res, next) => {
  //use email to get corresponding projects
  const email = res.locals.userSession.email;

  const text = `SELECT projectToUser.projectid FROM projectToUser WHERE userid = '${email}'`;

    db
      .query(text)
      .then(data => {
        console.log(data.rows);
        const projects = data.rows
        console.log('successfully grabbed corresponding projects');
        res.locals.projects = projects;
        //console.log(res.locals.projects, 'this is current obj')
        const newText = `SELECT * FROM project`;
        db
      .query(newText)
      .then(allProjectData => {
        //console.log(allProjectData.rows, 'this is all project data');
        for(let i = 0; i < allProjectData.rows.length; i++){
            for(const item of res.locals.projects){
                if(item.projectid == allProjectData.rows[i]._id ){
                    item.projectname = allProjectData.rows[i].projectname;
                    item.projectdescription = allProjectData.rows[i].projectdescription
                }
            }
        }
        console.log(res.locals.projects, 'this is updated')
        next();
            
      })
      .catch(e => console.log(e));
            
      })
      .catch(e => console.log(e));
     
  };

projectController.getToDos = (req, res, next) => {
  const { project } = req.params;
  const text = `SELECT * FROM toDoList WHERE projectid = ${project}`;

  db.query(text)
    .then((data) => {
      //console.log(data);
      const toDos = data.rows;
      console.log('successfully grabbed todos for corresponding project');
      res.locals.toDos = { toDos };
      console.log('todos from db', res.locals.toDos);
      next();
    })
    .catch((e) => console.log(e));
};

projectController.getTasks = (req, res, next) => {
  const { project } = req.body;

  const text = `SELECT * FROM task WHERE projectid = ${project}`;

  db.query(text)
    .then((data) => {
      //console.log(data);
      const tasks = data.rows;
      console.log('successfully grabbed tasks for corresponding project');
      res.locals.tasks = { tasks };
      next();
    })
    .catch((e) => console.log(e));
};

module.exports = projectController;
