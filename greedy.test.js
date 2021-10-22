const { makeChange, makeChangeBruteForce, makeChangeBruteForce2, makeChangeBruteForce3 } = require("./greedy")


describe("greedy", () => {
  test("make change", () => {
    expect(makeChange(40, [5, 10, 25])).toEqual(3)
    expect(makeChange(12, [1, 6, 10])).toEqual(3)
  })

  test("make change (brute force)", () => {
    expect(makeChangeBruteForce(3, [1, 2])).toEqual(2)
    expect(makeChangeBruteForce(12, [1, 6, 10])).toEqual(2)
    expect(makeChangeBruteForce(22, [1, 6, 10])).toEqual(3)
  })

  test("make change (brute force v2)", () => {
    expect(makeChangeBruteForce2(3, [1, 2])).toEqual(2)
    expect(makeChangeBruteForce2(12, [1, 6, 10])).toEqual(2)
    expect(makeChangeBruteForce2(22, [1, 6, 10])).toEqual(3)
  })

  test("make change (brute force v3) with caching", () => {
    expect(makeChangeBruteForce3(3, [1, 2])).toEqual(2)
    expect(makeChangeBruteForce3(12, [1, 6, 10])).toEqual(2)
    expect(makeChangeBruteForce3(22, [1, 6, 10])).toEqual(3)
    expect(makeChangeBruteForce3(52, [1, 6, 10])).toEqual(6)
  })
})