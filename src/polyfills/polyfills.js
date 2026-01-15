Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

Array.prototype.myReduce = function (callback, initial) {
  let accum = initial;
  for (let i = 0; i < this.length; i++) {
    accum = accum ? callback(accum, this[i], i, this) : this[i];
  }
  return accum;
};

Function.prototype.myCall = function (ctx = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not a function");
  ctx.fn = this;
  ctx.fn(...args);
};

Function.prototype.myApply = function (ctx = {}, args = []) {
  if (typeof this !== "function") throw new Error(this + " is not function");
  if (!Array.isArray(args)) throw new Error(args + " Not Array");
  ctx.fn = this;
  ctx.fn(...args);
};

Function.prototype.myBind = function (ctx = {}, ...args) {
  if (typeof this !== "function") throw new Error("Not a function");
  ctx.fn = this;
  return function (...restArgs) {
    return ctx.fn(...args, ...restArgs);
  };
};

function myDebounce(fun, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}

const myThrottle = (callback, delay) => {
  const last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    callback(...args);
  };
};

function once(func, ctx) {
  let value;
  if (func) {
    value = func.apply(ctx || this, arguments);
    func = null;
  }
  return value;
}
