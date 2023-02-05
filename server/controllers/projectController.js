const db = require('../models/projectModels');

const projectController = {};

projectController.createProject = (req, res, next) => {
    
    //persist cookie
    const id = req.cookies.ssid;
    
    //grab number of entries for table
    const numText = `SELECT COUNT(*) FROM project`;

    const { _id, projectName, projectDescription} = req.body;

    db
      .query(numText)
      .then(data => {
        const numOfEntries = data.rows[0].count;
        console.log(numOfEntries);
        res.locals.newEntry = Number(numOfEntries) + 1;
            const text = `INSERT INTO project (_id, projectName, projectDescription)
                VALUES ('${Number(numOfEntries) + 1}', '${projectName}', '${projectDescription}')`;
                db
                .query(text)
                .then(newData => {
                    const projectArray = newData.rows;
                    res.locals.projects = projectArray;
                    res.locals.testing = 'TEST TO SEE IF IT WORKS';
                    next();
                })
                .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
    
    
      
  };

  module.exports = projectController;