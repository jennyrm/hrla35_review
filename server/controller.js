const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent()
        .then((results) => res.json(results))
        .catch((err) => res.status(400).send('oh no'))
    },
    post: (req, res) => {
      let name = req.body;
      let imgurl = req.body.imgurl;
      helper.students.postName({name, imgurl})
        .then(() => res.status(201).send('posted'))
        .catch((error) => res.status(400).send(err))
    },
    update: (req, res) => {
      let name = req.body.name;
      let _id = req.params.id;
      helper.students.updateName({_id}, {name})
      .then(() => res.status(201).send('updated'))
      .catch((error) => res.status(400).send(err))
    }
  }
};

module.exports = controller