const members = require('../models/members_array');

module.exports.comingSoon = function (req, res) {
    res.render('main_pg');
}

module.exports.fetchMembers = function (req, res) {
    res.render('members_pg', {members: members});
}

