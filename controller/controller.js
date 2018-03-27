const members = require('../models/members_array');


module.exports.fetchMembers = function (req, res) {
    res.render('main_pg', {members: members});
}

