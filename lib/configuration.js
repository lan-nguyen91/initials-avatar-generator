module.exports = function (conf) {
	
	conf = conf || {};

	if (!conf.width) {
		conf.width = 100;
	}
	if (!conf.font) {
		conf.font = "bariol";
	}

	if (!conf.color) {
		conf.color = "#3214FF";
	}
	
	if (!conf.text) {
		conf.text = "I.E.";
	}
	
	return conf;
};