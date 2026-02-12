const { fibs, fibsRec } = require("./fibs");

describe("Fibonacci Sequence", () => {
	test("Iteration: 0", () => {
		expect(fibs(0)).toEqual([0]);
	});

	test("Iteration: 1", () => {
		expect(fibs(1)).toEqual([0, 1]);
	});

	test("Iteration: 8", () => {
		expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
	});

	test("Iteration: 16", () => {
		expect(fibs(16)).toEqual([
			0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
		]);
	});

	test("Negative numbers", () => {
		expect(fibs(-1)).toBeUndefined();
	});
});

describe("Fibonacci Sequence (Recursive)", () => {
	test("Iteration: 0", () => {
		expect(fibsRec(0)).toBe(0);
	});

	test("Iteration: 1", () => {
		expect(fibsRec(1)).toBe(1);
	});

	test("Iteration: 8", () => {
		expect(fibsRec(8)).toBe(21);
	});

	test("Iteration: 16", () => {
		expect(fibsRec(16)).toBe(987);
	});

	test("Negative numbers", () => {
		expect(fibsRec(-5)).toBe(5);
	});
});
