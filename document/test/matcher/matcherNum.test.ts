test('two plus two', () => {
  const value = 2 + 2;
  // 実際値 = value
  // 実際値 > 期待値
  expect(value).toBeGreaterThan(3);
  // 実際値 <= 期待値
  expect(value).toBeGreaterThanOrEqual(3.5);
  // 実際値 < 期待値
  expect(value).toBeLessThan(5);
  // 実際値 >= 期待値
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});