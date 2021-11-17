type SumType = {
  (a: number, b:number): number
}

const sum:SumType = (a, b) => {
  return a + b
}
module.exports = sum
