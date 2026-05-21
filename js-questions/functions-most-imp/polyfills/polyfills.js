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
//debounce in a react-component, based on search-input key-strokes
/*
useEffect(() => {
  let timer = setTimeout(() => {
    //function/event-handler goes here
  }, delay);
  return () => {
    clearTimeout(timer);
  };
}, [input]);*/

const myThrottle = (callback, delay) => {
  const last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    callback(...args);
  };
};

function once(func, cxt) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(cxt || this, arguments);
      func = null;
    }
    return ran;
  };
}

//simple-one without apply or context
function once2(fun) {
  let ran;
  return function (...args) {
    console.log(fun);
    if (fun) {
      ran = fun(...args);
      fun = null;
    }
    return ran;
  };
}

//another approach
function once3(func) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    // Subsequent calls return the cached result
    return result;
  };
}

//memoize a function for expensive computations.
function memoize(func, ctx) {
  let memo = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (memo[key]) {
      console.log(memo[key]);
    } else {
      memo[key] = func.call(ctx || this, ...args);
    }
    return memo[key];
  };
}

//array.forEach(callback): it runs the passed callback function on every element of the array. Used for side-effects like logging, DOM manipulation etc.
Array.prototype.myForEach = function (callback) {
  for (let idx = 0; idx < this.length; idx++) {
    callback(this[idx], idx, this);
  }
};

["My", "Name", "is", "Rahul"].myForEach((elm, i, arr) => {
  console.log(elm, i, arr);
});
