var colors = require('./color');
var picture = require('./picture');
var fonts = require('./font');
var hex = require('./utils').randomHex;
module.exports = function (conf, next) {
	
	conf = conf || {};
	
	if (!conf.width) {
		conf.width = 100;
	}
	if(!conf.font) {
		conf.font = new fonts.Bariol(68);
	}
	picture(conf).one(function (img) {
		next(img);
	});

};