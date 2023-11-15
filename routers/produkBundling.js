const express = require('express');
const router =  express.Router();

const produkBundlingController = require('../controllers/produkBundling');

router.get('/', produkBundlingController.get);
router.get('/:id', produkBundlingController.getSingle);
router.post('/',produkBundlingController.post);
router.put('/:_id', produkBundlingController.put);
router.delete('/:_id', produkBundlingController.delete);

module.exports = router;
