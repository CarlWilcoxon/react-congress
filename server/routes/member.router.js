const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  console.log("request:" + req)

  // async function getMember() {
  //   console.log("Request:" + req)
  //   // const response = await fetch("https://api.propublica.org/congress/v1/members/A000374.json")
  // }
  res.sendStatus(200)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
