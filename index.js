function iterativeLog(array) {
  array.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  });
}

function iterate(callback) {
  array = [527, 9762, 290, 1646, 9734];
  array.forEach(item => {
    callback(item);
  });
  return array;
}

function doToArray(array, callback) {
  array.forEach(item => {
    callback(item);
  });
}
