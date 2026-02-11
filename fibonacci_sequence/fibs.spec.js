const fibs = require("./fibs");

describe("Fibonacci Sequence", () => {
	test("Iteration: 1n", () => {
		expect(fibs()).toBe("fibs");
	});
});
