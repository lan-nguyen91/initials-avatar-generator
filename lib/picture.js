var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });
var colors = require('./color');
var path = require('path');

module.exports = function (cf) {
	var width = cf.width;
	var color = colors.set(cf.color);
	var text = cf.text;
	var font = cf.font;
	var one = function (cb) {
		var words = text.split("")[0]
		if (words.charCodeAt(0) < 128)
			words = words.toUpperCase()
		var image = gm(width, width, color)
			.fill(colors.WHITE)
			.font(font.file)
			.fontSize(font.fontsize)
			.drawText(font.offset.x, font.offset.y, words);
		cb(image);
		
	};

	return {
		one: one
	};
};