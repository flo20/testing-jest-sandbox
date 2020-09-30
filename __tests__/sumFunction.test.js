"use strict";

const functions = require("../sumFunction");

describe("Test if functions are defined", () => {
  test("function sum is defined", () => {
    expect(functions.sum).toBeDefined();
  });
});

describe("test sum with testcases", () => {
  const testCases = [
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testCases)("sum(%s, %s) = %s", (a, b, expected) => {
    expect(functions.sum(a, b)).toBe(expected);
  });
});
describe("test sum with floating point testcases", () => {
  const testCases = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, -2.5, -5],
    [2.5, 2.5, 5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testCases)("sum(%s, %s) = %s", (a, b, expected) => {
    expect(functions.sum(a, b)).toBeCloseTo(expected);
  });
});
