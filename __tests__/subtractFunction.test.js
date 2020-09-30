"use strict";

const functions = require("../subtractFunctions");

describe("Test if functions are defined", () => {
  test("function subtract is defined", () => {
    expect(functions.subtract).toBeDefined();
  });
});

describe("test subtract with testcases", () => {
  const testCases = [
    [1, 1, 0],
    [2, 3, -1],
    [-2, -4, 2],
    [-2, 4, -6],
    [2, -4, 6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
  ];

  test.each(testCases)("subtract(%s, %s) = %s", (a, b, expected) => {
    expect(functions.subtract(a, b)).toBe(expected);
  });
});

describe("Difference of two numbers", () => {
  const testCases = [
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-3, 2.5, -0.5],
    [-3, -2.5, -0.5],
    [-2.5, -2.5, 0],
    [2.5, 2.5, 0],
    [-2.5, 2.5, -5],
    [2.4, -2.5, 4.9],
  ];

  test.each(testCases)(
    "subtract(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.subtract(a, b).toThrow(expected));
    }
  );
});

describe("Parameter are not numbers in subtract", () => {
  const testCases = [
    ["a", 2, "only numbers allowed"],
    [1, "a", "only numbers allowed"],
    ["a", "b", "only numbers allowed"],
    [" ", " ", "only numbers allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];
  test.each(testCases)(
    "subtract(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.subtract(a, b).toThrow(expected));
    }
  );
});
