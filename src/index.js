module.exports = function getZerosCount(number) {
	var x = 5;
	var res = 0;

	while (x <= number) {
		res += Math.floor(number / x);
		x *= 5;
	}

	return res;
}
