type NotMatcherFuntionType = {
  (num: number): boolean
}

const NotMatcherFunction: NotMatcherFuntionType = (num) => {
  if (num === 10) {
    return true
  }
  return false
}

module.exports = NotMatcherFunction


