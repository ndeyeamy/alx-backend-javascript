export default function divideFunction(numerator, denominator) {
  return denominator === 0 ? new Error('cannot divde by 0') : numerator / denominator;
}
