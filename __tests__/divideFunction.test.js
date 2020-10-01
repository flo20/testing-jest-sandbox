"use strict";

const functions = require("../divideFunction");

describe("Test if functions are defined", () => {
  test("function divide is defined", () => {
    expect(functions.divide).toBeDefined();
  });
});

describe("test division with common testcases", () => {
  const testCases = [
    [1, 2, 0.5],
    [4, 2, 2],
    [-4, 2, -2],
    [4, -2, -2],
    [-4, -2, 2],
    [3, 3, 1],
    [2.5, 3.5, 2.5 / 3.5],
    [2.5, 3, 0.8333],
  ];

  test.each(testCases)("divide(%s, %s) = %s", (a, b, expected) => {
    expect(functions.divide(a, b)).toBeCloseTo(expected);
  });
});

describe("Division of two numbers", () => {
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
    "divide(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.divide(a, b).toThrow(expected));
    }
  );
});

describe("Test division special cases", () => {
  const testCases = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
    [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
    [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
  ];
  test.each(testCases)(
    "divide(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.divide(a, b).toThrow(expected));
    }
  );
});
