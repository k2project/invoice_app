const Company = require('../models/company.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.company_add = function (req, res) {
    let company = new Company(
        {
            name: req.body.name,
        }
    );

    company.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Company Created successfully')
    })
};
