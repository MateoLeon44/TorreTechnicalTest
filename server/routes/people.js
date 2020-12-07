const express = require('express');
const people = require('../controllers/people');
const router = express.Router();
const peopleController = require('../controllers/people');

/* GET users listing. */
router.post('/add-people', async function (req, res, next) {
  try {
    const people = await peopleController.requestPeople();
    peopleController.addToDatabase(people).then(() => {
      res.send('success');
    })
  }
  catch (reject) {
    res.send(reject)
  }
});

router.post('/search-fit', function(req,res,next){
  job = req.body.job;
  
});

module.exports = router;
