/***********************************************************************
Write a function `dynamicIntervalCount` that accepts a callback, delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should run indefinitely and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:
//function intervalCount(cb, delay, amt) {
  const intervalObj = setInterval(function () {
    cb();
    amt -= 1;
    if (!amt) {
      clearInterval(intervalObj);
    }
  }, delay)
}

***********************************************************************/


function dynamicIntervalCount(cb, delay, amt) {
  if (!amt) {
    return setInterval(cb, delay);
  }
  const intervalObj = setInterval(function () {
    cb();
    amt -= 1;
    if (!amt) {
      clearInterval(intervalObj);
    }
  }, delay)
}

dynamicIntervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
  console.log('hi');
}, 500, 13); // prints 'hi' at 500ms intervals indefinitely

///console.log(timeoutObject); // Timeout { ... }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
