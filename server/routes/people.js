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

router.post('/search-fit', function async(req, res, next) {
  job = req.body.job;
  filters = req.body.filters;
  peopleController.searchFits(job, filters).then((people) => {
    res.send(people);
  }, (err) => {
    res.send('Failed obtaining best fits')
  })
});

router.post('/search-best-fit', function async(req, res, next) {
  job = req.body.job;
  filters = req.body.filters;
  peopleController.searchBestFits(filters).then((people) => {
    peopleController.findBestFit(job, people).then((bestFit => {
      res.send(bestFit);
    }));
  }, (err) => {
    res.send('Failed obtaining best fit')
  })
});

module.exports = router;
