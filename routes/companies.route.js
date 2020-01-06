const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const companies_controller = require('../controllers/companies.controller');


// a simple test url to check that all of our files are communicating correctly.

router.post('/add', companies_controller.company_add);
router.get('/:id', companies_controller.company_details);
router.put('/:id/update', companies_controller.company_update);
router.delete('/:id/delete', companies_controller.company_delete);
module.exports = router;
