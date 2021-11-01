function isInRange(value, range) {
  return value >= range.min && value <= range.max;
  // return true if the value is in range
  //
  // value is a number
  // range is an object, has two props: min, max

  //   if (value >= range.min && value <= range.max) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  isInRange(4, { min: 0, max: 5 }) // should return true
  isInRange(4, { min: 4, max: 5 }) // should return true
  isInRange(4, { min: 6, max: 10 }) // should return false
  isInRange(5, { min: 5, max: 5 }) // should return true


