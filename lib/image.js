var colors = require('./color');
var picture = require('./picture');
var fonts = require('./font');
var hex = require('./utils').randomHex;
module.exports = function () {
	return {
		generate: function (conf, next) {

			conf = conf || {};

			if (!conf.width) {
				conf.width = 100;
			}
			if (!conf.font) {
				conf.font = new fonts.Bariol(68);
			}

			if (!conf.color) {
				conf.color = "#3214FF";
			}
			picture(conf).one(function (img) {
				next(img);
			});

		}
	}
};