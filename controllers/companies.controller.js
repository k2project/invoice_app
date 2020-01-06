const Company = require('../models/company.model');


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

exports.company_details = function (req, res) {
    Company.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.company_update = function (req, res) {
    Company.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.company_delete = function (req, res) {
    Company.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
