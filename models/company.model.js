const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name: {type: String, required: true, max: 100},
    invoices:{type: Array},
});


// Export the model
module.exports = mongoose.model('Company', CompanySchema);
