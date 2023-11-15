const express = require('express');
const router =  express.Router();

const tentangKamiController = require('../controllers/tentangKami')

router.get('/', tentangKamiController.get);
router.get('/:id', tentangKamiController.getSingle);
router.post('/',tentangKamiController.post);
router.put('/:_id', tentangKamiController.put);
router.delete('/:_id', tentangKamiController.delete);

module.exports = router;