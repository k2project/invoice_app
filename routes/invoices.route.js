const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const invoices_controller = require('../controllers/invoices.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', invoices_controller.test);
router.post('/add', invoices_controller.company_add);
module.exports = router;
