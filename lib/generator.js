var picture = require('./picture');
var configuration = require('./configuration');
var fonts = require('./font');
var gm = require('gm').subClass({ imageMagick: true });

module.exports.AvatarGenerator = function () {
	var generateImage = function generateImage(config, next) {
		var text = config.text;
		var font = fonts.get(config.font);
		var words = text.toUpperCase();
		var width = config.width;
		
		var image = gm(width, width, config.color)
			.fill("#FFFFFF")
			.font(font.file)
			.fontSize(font.fontsize)
			.drawText(0, 0, words, 'Center');
		next(image);
	};


	return {
		generate: function (conf, next) {
			var config = configuration(conf);
			generateImage(config, next);
		}
	};
};