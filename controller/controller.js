const members = require('../models/members_array');


module.exports.fetchMembers = function (req, res) {
    res.render('ejs/main_pg', {members: members});
}

module.exports.match_game = function (req,res) {
    res.render('ejs/Game_match');

};