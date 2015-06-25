var path = require('path')
var base = path.normalize(process.cwd() + path.sep + "fonts" + path.sep);
var base = path.normalize(__dirname + path.sep + ".." + path.sep + "fonts" + path.sep);
var util = require('util')

var Font = function (size) {
	this.fontsize = size * 0.8;
	this.offset = {
		x: Number.parseInt(size / 2 - this.fontsize / 4 - size * 0.05),
		y: Number.parseInt(size / 2 + this.fontsize / 2 - size * 0.1)
	};
};

function EnFont(size) {
	Font.call(this, size);
	this.file = base + "Bariol.otf";
}


util.inherits(EnFont, Font);



var Bariol = function (size) {
	EnFont.call(this, size);
};

var Din = function (size) {
	EnFont.call(this, size);
	this.file = base + "DIN.otf";
};


util.inherits(Bariol, EnFont);
util.inherits(Din, EnFont);


var getfromtext = function (text, width) {
	return new Din(width);
};
var get = function (f, width) {
	if (f == null)
		return null
	switch (f.toUpperCase()) {
		case 'BARIOL':
			return new Bariol(width);
		case 'DIN':
			return new Din(width);
		default:
			return null;
	}
};

exports.Din = Din;
exports.Bariol = Bariol;
exports.get = get;
exports.getfromtext = getfromtext;
