---
title: 实现Promise
description: 用原生js简易的实现Promise
---

## 实现代码

```js
class MyPromise {
  #PENDING = "pending";
  #FULFILLED = "fulfilled";
  #REJECTED = "rejected";
  #TASK_LIST = [];
  #status = this.#PENDING;
  #result = null;
  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  get status() {
    return this.#status;
  }

  #resolve(value) {
    if (this.#status !== this.#PENDING) return;
    this.#status = this.#FULFILLED;
    this.#result = value;
    for (let task; (task = this.#TASK_LIST.shift()); ) {
      task.onFulfilled(value);
    }
  }

  #reject(reason) {
    if (this.#status !== this.#PENDING) return;
    this.#status = this.#REJECTED;
    this.#result = reason;
    for (let task; (task = this.#TASK_LIST.shift()); ) {
      task.onRejected(reason);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : reason => {
            throw reason;
          };
    return new MyPromise((resolve, reject) => {
      switch (this.#status) {
        case this.#FULFILLED:
          queueMicrotask(() => {
            try {
              const result = onFulfilled(this.#result);
              if (
                result instanceof MyPromise ||
                (typeof result === "object" &&
                  typeof result.then === "function")
              ) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          });
          break;
        case this.#REJECTED:
          queueMicrotask(() => {
            try {
              const result = onRejected(this.#result);
              if (
                result instanceof MyPromise ||
                (typeof result === "object" &&
                  typeof result.then === "function")
              ) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          });
          break;
        case this.#PENDING:
          this.#TASK_LIST.push({
            onFulfilled(value) {
              queueMicrotask(() => {
                try {
                  const result = onFulfilled(value);
                  if (
                    result instanceof MyPromise ||
                    (typeof result === "object" &&
                      typeof result.then === "function")
                  ) {
                    result.then(resolve, reject);
                  } else {
                    resolve(result);
                  }
                } catch (error) {
                  reject(error);
                }
              });
            },
            onRejected(reason) {
              queueMicrotask(() => {
                try {
                  const result = onRejected(reason);
                  if (
                    result instanceof MyPromise ||
                    (typeof result === "object" &&
                      typeof result.then === "function")
                  ) {
                    result.then(resolve, reject);
                  } else {
                    resolve(result);
                  }
                } catch (error) {
                  reject(error);
                }
              });
            },
          });
          break;
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      reason =>
        MyPromise.reject(onFinally()).then(() => {
          throw reason;
        })
    );
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(values) {
    return new MyPromise((resolve, reject) => {
      const cacheList = [];
      const _cache = [];
      for (let i = 0; i < values.length; i++) {
        const promise = values[i];
        if (
          promise instanceof MyPromise ||
          (typeof promise === "object" && typeof promise.then === "function")
        ) {
          promise.then(
            value => {
              _cache.push(value);
              cacheList[i] = value;
              if (_cache.length === values.length) {
                resolve(cacheList);
              }
            },
            reason => {
              reject(reason);
            }
          );
        } else {
          _cache.push(promise);
          cacheList[i] = promise;
        }
      }
    });
  }

  static race(values) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        const promise = values[i];
        if (
          promise instanceof MyPromise ||
          (typeof promise === "object" && typeof promise.then === "function")
        ) {
          promise.then(
            value => {
              resolve(value);
            },
            reason => {
              reject(reason);
            }
          );
          continue;
        } else {
          resolve(promise);
          continue;
        }
      }
    });
  }

  static allSettled(values) {
    return new MyPromise((resolve, reject) => {
      const cacheList = [];
      const _cache = [];
      for (let i = 0; i < values.length; i++) {
        const promise = values[i];
        if (promise instanceof MyPromise) {
          promise.then(
            value => {
              _cache.push(i);
              cacheList[i] = { status: promise.status, value };
              if (_cache.length === values.length) {
                resolve(cacheList);
              }
            },
            reason => {
              _cache.push(i);
              cacheList[i] = { status: promise.status, reason };
              if (_cache.length === values.length) {
                resolve(cacheList);
              }
            }
          );
        }
      }
    });
  }
}
```
