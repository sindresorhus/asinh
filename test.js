'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
var negativeZero = require('negative-zero');
Math.asinh = undefined;
var asinh = require('./');

test(function (t) {
	t.assert(numberIsNan(asinh(NaN)));
	t.assert(positiveZero(asinh(+0)));
	t.assert(negativeZero(asinh(-0)));
	t.assert(asinh(Infinity) === Infinity);
	t.assert(asinh(-Infinity) === -Infinity);
	t.assert(asinh(0) === 0);
	t.assert(asinh(1234) === 7.811163549201245);
	t.assert(asinh(9.99) === 2.997227420191335);
	t.assert(asinh(1e150) === 346.0809111296668);
	t.assert(asinh(-1e7) === -16.811242831518268);
	t.assert(asinh(1e7) === 16.811242831518268);
	t.end();
});
