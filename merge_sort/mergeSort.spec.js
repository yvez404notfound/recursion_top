const mergeSort = require("./mergeSort");

describe("Merge Sort", () => {
	test("List: [1,5,1,8,2,5,9,4]", () => {
		expect(mergeSort([1, 5, 1, 8, 2, 5, 9, 4])).toBe("mergeSort");
	});
});
