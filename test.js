import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import negativeZero from 'negative-zero';

Math.asinh = undefined;
const m = require('./');

test(t => {
	t.true(numberIsNan(m(NaN)));
	t.true(positiveZero(m(+0)));
	t.true(negativeZero(m(-0)));
	t.is(m(Infinity), Infinity);
	t.is(m(-Infinity), -Infinity);
	t.is(m(0), 0);
	t.is(m(1234), 7.811163549201245);
	t.is(m(9.99), 2.997227420191335);
	t.is(m(1e150), 346.0809111296668);
	t.is(m(-1e7), -16.811242831518268);
	t.is(m(1e7), 16.811242831518268);
});
