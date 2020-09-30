"use strict";
const { TestScheduler } = require("jest");
//This demo shows the order in which testes are run
//This is actually tests nothing
//this is the structure of testing
//but only prints out the console

beforeAll(() => {
  console.log("beforeAll", "init before all tests".toUpperCase());
});

afterAll(() => {
  console.log("afterAll", "cleaning after all tests".toUpperCase());
});

test("This is not in test suit", () => {
  console.log("Test", "just some test");
});

//test suit

describe("This is a test suite", () => {
  beforeEach(() => {
    console.log("beforeEach", "init test in suite 1 before every test");
  });

  afterEach(() => {
    console.log("after each", "cleaning after every test in suite 1");
  });
  test("run test A of the first suite", () => {
    console.log("test A");
  });
  test("run test B of the first suite", () => {
    console.log("test B");
  });
  test("run test C of the first suite", () => {
    console.log("test C");
  });
});

describe("This is another suite (suite 2)", () => {
  beforeAll(() => {
    console.log("beforeAll2", "init before all tests in suite 2");
  });
  afterAll(() => {
    console.log("afterAll2", "cleaning after all tests in suite 2");
  });

  describe('This is the first "subsuite"', () => {
    test("testD of the firts subsuite of suite 2", () => {
      console.log("Test D");
    });

    test("testE of the firts subsuite of suite 2", () => {
      console.log("testE");
    });
  });
  describe("This is the second subsuite of suite 2", () => {
    beforeEach(() => {
      console.log("beforeEach", "init test in subsuite 2 of suite 2");
    });
    test("testF of the second subsuite of suite 2", () => {
      console.log("Test F");
    });
    test("Test G of second subsuite of suite 2", () => {
      console.log("test G");
    });
  });
});

describe("This tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }
    test("test if function throws an exception", () => {
        expect(() => testFunction()).toThrow("This is an exception")
    })
});

// describe("This suite tests an asynchronous functions", () => {
//   function testFunction() {
//     throw Error("This is an exception");
//   }
//     test("test if function throws an exception", () => {
//         expect(() => testFunction()).toThrow("This is an exception")
//     })
// });


describe("Test with array of test values", () => {
  const testValues = [
    ["first", "second", "firstsecond"],
    ["je", "st", "jest"],
  ];
  const concat = (part1, part2) => part1 + part2;

  test.each(testValues)("%s and %s = %s", (a, b, expected) => {
    expect(concat(a, b)).toBe(expected);
  });

  //following are different ways to do the same as with test.each
  test("first and second = firstsecond", () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });

  test("je and st = jest", () => {
    expect(concat("je", "st")).toBe("jest");
  });

  test(`${testValues[0][0]} and ${testValues[0][1]}=${testValues[0][2]}`, () => {
    expect(concat(testValues[0][0], testValues[0][1])).toBe(testValues[0][2]);
  });

  for (let value of testValues) {
    test(`${value[0]} and ${value[1]}=${value[2]}`, () => {
      expect(concat(value[0], value[1])).toBe(value[2]);
    });
  }
});