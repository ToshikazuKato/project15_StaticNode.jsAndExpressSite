const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


//In the router.get this will grab the data for which project is chosen.
//This information gets sent to project.pug
/* Dynamic route for each project */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const prj = projects[id];

    console.log(prj);

    res.render('project', { prj } );
});


module.exports = router;
