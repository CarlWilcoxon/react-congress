const express = require('express');
const { resetWarningCache } = require('prop-types');
const router = express.Router();

const imageFolder = '/Users/raven/Documents/Solo/JavaScript/quick-app/public/images';

// only contains Ace-Jack currently
const cardList = [
  'AC', 'AD', 'AH', 'AS',
  'KC', 'KD', 'KH', 'KS',
  'QC', 'QD', 'QH', 'QS',
  'JC', 'JD', 'JH', 'JS',
];

/**
 * GET route template
 */
router.get('/images/back', (req, res) => {
  // GET route code here
  res.sendFile('/grumpy-card-back.jpeg', {root: imageFolder});
});

router.get('/images/load/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  console.log('cardId: ' + id);

  // make sure it is a valid card
  if (cardList.includes(id)) {
    res.sendFile(`/card-faces/${id}.svg`, {root: imageFolder})
  }
  else
  {
    // A good server always gives a response
    res.status(404)
  }
})


module.exports = router;
