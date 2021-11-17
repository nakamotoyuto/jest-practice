type MatcherObject = {
  a?: number,
  b?: number,
}

type MatcherFunctionType = {
  (obj: MatcherObject): MatcherObject[]
}

const MatcherFunction: MatcherFunctionType = (obj) => {
  const data:MatcherObject[] = [{a: 1}]
  data.push(obj)
  return data
}

module.exports = MatcherFunction
