const express = require('express');
const router =  express.Router();

const partnerController = require('../controllers/partner');

router.get('/', partnerController.get);
router.get('/:id', partnerController.getSingle);
router.post('/',partnerController.post);
router.put('/:_id', partnerController.put);
router.delete('/:_id', partnerController.delete);

module.exports = router;
