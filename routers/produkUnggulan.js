const express = require('express');
const router =  express.Router();

const produkUnggulanController = require('../controllers/produkUnggulan');

router.get('/', produkUnggulanController.get);
router.get('/:id', produkUnggulanController.getSingle);
router.post('/',produkUnggulanController.post);
router.put('/:_id', produkUnggulanController.put);
router.delete('/:_id', produkUnggulanController.delete);

module.exports = router;
