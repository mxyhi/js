// @ts-nocheck
Array.prototype.my_findLastIndex = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  for (let index = this.length - 1; index >= 0; index--) {
    if (callback.call(thisArgs, this[index], index, this)) {
      return index;
    }
  }
  return -1;
};

let arr = [22, 100, 23.12, 123];

console.log(
  arr.my_findLastIndex(function (element) {
    console.log(this);
    return element > 122;
  }, 123)
);

console.log(
  arr.findLastIndex(function (item) {
    console.log(this);
    return item > 122;
  }, 123)
);
