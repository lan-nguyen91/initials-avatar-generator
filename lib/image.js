var colors = require('./color')
var picture = require('./picture')
var fonts = require('./font')
var hex = require('./utils').randomHex;
var fs = require('fs')
module.exports = function (conf, next) {


	var configs = conf || { type: 'comic' };
	if (!configs.width) {
		configs.width = 100;
	}
	picture(configs).one(function (img) {
		next(img);
	});

};