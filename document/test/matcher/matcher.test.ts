const matcher = require('../../matcher')
const notMatcher = require('../../notMatcher')
// todo使う時 describeで囲う
// itでテスト書く
describe('object assignment', () => {
  it('オブジェクトを渡す オブジェクトを比較 ', () => {
    expect(matcher({b: 2})).toEqual([{a:1}, {b:2}])
  });
});

describe('引数で持たせたnumberが、10じゃないかチェック', () => {
  it('numberを比較し、違うパターンかチェック', () => {
    expect(notMatcher(1)).not.toBe(true)
  })
  it('numberを比較し、10であればtrueを返す', () => {
    expect(notMatcher(10)).not.toBe(false)
  })
})
