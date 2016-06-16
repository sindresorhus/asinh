'use strict';
var isFinite = require('is-finite');

module.exports = Math.asinh || function asinh(x) {
	if (x === 0 || !isFinite(x)) {
		return x;
	}

	return x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt((x * x) + 1));
};
