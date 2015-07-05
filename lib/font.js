var path = require('path')
var base = path.normalize(__dirname + path.sep + ".." + path.sep + "fonts" + path.sep);
var util = require('util')

var Font = function (size) {
	this.fontsize = size * 0.8;
	this.offset = {
		x: Number.parseInt(size / 2 - this.fontsize / 4 - size * 0.05),
		y: Number.parseInt(size / 2 + this.fontsize / 2 - size * 0.1)
	};
};


var Bariol = function (size) {
	Font.call(this, size);
	this.file = base + "Bariol.otf";
};

var Din = function (size) {
	Font.call(this, size);
	this.file = base + "DIN.otf";
};


var get = function (f, width) {
	if (typeof f != 'string')
		return null;
	switch (f.toUpperCase()) {
		case 'BARIOL':
			return new Bariol(width);
		case 'DIN':
			return new Din(width);
		default:
			return new Din(width);
	}
};

exports.Din = Din;
exports.Bariol = Bariol;
exports.get = get;

