---
title: Array
description: 实现Array部分实例方法
---

## `entries`

```js
Array.prototype.my_entries = function () {
  this[Symbol.iterator] = function () {
    const thisArg = this;
    let index = 0;
    return {
      next() {
        if (index < thisArg.length) {
          return {
            value: [index, thisArg[index++]],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  };

  return this[Symbol.iterator]();
};
```

## `every`

```js
Array.prototype.my_every = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  for (let index = 0; index < this.length; index++) {
    if (!callback.call(thisArgs, this[index], index, this)) {
      return false;
    }
  }
  return true;
};
```

## `filter`

```js
Array.prototype.my_filter = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(thisArgs, this[index], index, this)) {
      newArr.push(this[index]);
    }
  }
  return newArr;
};
```

## `find`

```js
Array.prototype.my_find = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  for (let index = 0; index < this.length; index++) {
    if (callback.call(thisArgs, this[index], index, this)) {
      return this[index];
    }
  }
  return undefined;
};
```

## `findLast`

```js
Array.prototype.my_findLast = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  for (let index = this.length - 1; index >= 0; index--) {
    if (callback.call(thisArgs, this[index], index, this)) {
      return this[index];
    }
  }
  return undefined;
};
```

## `findLastIndex`

```js
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
```

## `findIndex`

```js
Array.prototype.my_findIndex = function (callback, thisArgs = globalThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  for (let index = 0; index < this.length; index++) {
    if (callback.call(thisArgs, this[index], index, this)) {
      return index;
    }
  }
  return -1;
};
```
