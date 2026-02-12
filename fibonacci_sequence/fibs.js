const fibs = function (n) {
	if (n < 0) return;
	if (n === 0) return [0];
	if (n === 1) return [0, 1];

	let sequence = [];
	for (let i = 0; i < n - 1; i++) {
		if (sequence.length === 0) sequence.push(0);
		sequence.push((sequence[i - 1] ?? 1) + sequence[i]);
	}

	return sequence;
};

const fibsRec = function (n) {
	if (n > 1) return fibsRec(n - 1) + fibsRec(n - 2);
	return n;
};

module.exports = {
	fibs,
	fibsRec,
};
