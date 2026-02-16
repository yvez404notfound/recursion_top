const mergeSort = function (arr) {
	if (arr >= 1) return arr;

	if (arr.length > 2) {
		const l = mergeSort([...arr.slice(0, Math.floor(arr.length / 2))]);
		const r = mergeSort([...arr.slice(Math.ceil(arr.length) / 2, arr.length)]);

		let i = 0,
			j = 0,
			lr = [];
		while (i <= l.length - 1 && j <= r.length - 1) {
			if (l[i] < r[j]) {
				lr.push(l[i]);
				i++;
				continue;
			}
			lr.push(r[j]);
			j++;
		}

		i <= l.length - 1 ? lr.push(...l.slice(i)) : lr.push(...r.slice(j));

		return (arr = [...lr]);
	}

	if (arr[0] > arr[1]) {
		[arr[0], arr[1]] = [arr[1], arr[0]];
	}

	return arr;
};

module.exports = mergeSort;
