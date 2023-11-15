const express = require('express');
const router =  express.Router();

const chooseUsController = require('../controllers/chooseUs');

router.get('/', chooseUsController.get);
router.get('/:id', chooseUsController.getSingle);
router.post('/',chooseUsController.post);
router.put('/:_id', chooseUsController.put);
router.delete('/:_id', chooseUsController.delete);

module.exports = router;
