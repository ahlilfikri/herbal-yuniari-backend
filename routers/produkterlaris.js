const express = require('express');
const router =  express.Router();

const produkTerlarisController = require('../controllers/produkTerlaris');

router.get('/', produkTerlarisController.get);
router.get('/:id', produkTerlarisController.getSingle);
router.post('/',produkTerlarisController.post);
router.put('/:_id', produkTerlarisController.put);
router.delete('/:_id', produkTerlarisController.delete);

module.exports = router;
