const mergeSort = require("./mergeSort");
// or: import mergeSort from './mergeSort';

describe("Merge Sort", () => {
	test("sorts an unsorted array of numbers", () => {
		expect(mergeSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
	});

	test("sorts an already sorted array", () => {
		expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});

	test("sorts a reverse sorted array", () => {
		expect(mergeSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
	});

	test("handles negative numbers", () => {
		expect(mergeSort([3, -1, -7, 4, 2])).toEqual([-7, -1, 2, 3, 4]);
	});

	test("handles duplicate values", () => {
		expect(mergeSort([4, 1, 3, 4, 2, 1])).toEqual([1, 1, 2, 3, 4, 4]);
	});

	test("handles single element array", () => {
		expect(mergeSort([42])).toEqual([42]);
	});

	test("handles empty array", () => {
		expect(mergeSort([])).toEqual([]);
	});

	test("does not mutate the original array", () => {
		const arr = [5, 2, 8, 1];
		const copy = [...arr];
		mergeSort(arr);
		expect(arr).toEqual(copy);
	});

	test("handles large array", () => {
		const largeArray = Array.from({ length: 1000 }, () =>
			Math.floor(Math.random() * 10000),
		);
		const sorted = [...largeArray].sort((a, b) => a - b);
		expect(mergeSort(largeArray)).toEqual(sorted);
	});
});
