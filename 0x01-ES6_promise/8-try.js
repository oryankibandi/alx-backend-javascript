export default function divideFunction(numerator, denominator) {
  try {
    if (parseInt(denominator) == 0) throw Error('cannot divide by 0');

    return (parseInt(numerator) / parseInt(denominator));
  } catch {
    throw Error('cannot divide by 0');
  }
}
