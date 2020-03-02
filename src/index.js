
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) return 0;
    let minimum = array[0];
    for (let i = 0; i < array.length; i++){
      minimum = Math.min(minimum, array[i]);
  } 
  return minimum;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) return 0;
    let maximum = array[0];
    for (let i = 0; i < array.length; i++){
      maximum = Math.max(maximum, array[i]);
  }
  return maximum;
}


exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length) return 0; 
  let sum = array.reduce((sum, current) => sum + current, 0);
  return sum / array.length;
}

