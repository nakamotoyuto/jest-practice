const sumTest = require('../sum')

test('sum関数 1 + 2 = 3', () => {
  expect(sumTest(1, 2)).toBe(3)
})
