---
title: Function
description: 实现call,apply,bind,显式绑定
---

## `call`

```js
Function.prototype.my_call = function (thisArg = window, ...args) {
  thisArg = typeof thisArg === "object" ? thisArg : Object(thisArg);
  const FN = Symbol();
  thisArg[FN] = this;
  const RESULT = thisArg[FN](...args);
  delete thisArg[FN];
  return RESULT;
};
```

## `apply`

```js
Function.prototype.my_apply = function (thisArg = window, args) {
  thisArg = typeof thisArg === "object" ? thisArg : Object(thisArg);
  const FN = Symbol();
  thisArg[FN] = this;
  const RESULT = thisArg[FN](...args);
  delete thisArg[FN];
  return RESULT;
};
```

## `bind`

```js
Function.prototype.my_bind = function (thisArg = window, ...args) {
  thisArg = typeof thisArg === "object" ? thisArg : Object(thisArg);
  const foo = this;
  return function (...myArgs) {
    const FN = Symbol();
    thisArg[FN] = foo;
    const RESULT = thisArg[FN](...args, ...myArgs);
    delete thisArg[FN];
    return RESULT;
  };
};
```
