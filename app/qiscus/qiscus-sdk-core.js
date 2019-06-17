(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("QiscusSDKCore", [], factory);
	else if(typeof exports === 'object')
		exports["QiscusSDKCore"] = factory();
	else
		root["QiscusSDKCore"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bl/bl.js":
/*!*******************************!*\
  !*** ./node_modules/bl/bl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DuplexStream = __webpack_require__(/*! readable-stream/duplex */ "./node_modules/readable-stream/duplex-browser.js")
  , util         = __webpack_require__(/*! util */ "./node_modules/util/util.js")
  , Buffer       = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer


function BufferList (callback) {
  if (!(this instanceof BufferList))
    return new BufferList(callback)

  this._bufs  = []
  this.length = 0

  if (typeof callback == 'function') {
    this._callback = callback

    var piper = function piper (err) {
      if (this._callback) {
        this._callback(err)
        this._callback = null
      }
    }.bind(this)

    this.on('pipe', function onPipe (src) {
      src.on('error', piper)
    })
    this.on('unpipe', function onUnpipe (src) {
      src.removeListener('error', piper)
    })
  } else {
    this.append(callback)
  }

  DuplexStream.call(this)
}


util.inherits(BufferList, DuplexStream)


BufferList.prototype._offset = function _offset (offset) {
  var tot = 0, i = 0, _t
  if (offset === 0) return [ 0, 0 ]
  for (; i < this._bufs.length; i++) {
    _t = tot + this._bufs[i].length
    if (offset < _t || i == this._bufs.length - 1)
      return [ i, offset - tot ]
    tot = _t
  }
}


BufferList.prototype.append = function append (buf) {
  var i = 0

  if (Buffer.isBuffer(buf)) {
    this._appendBuffer(buf);
  } else if (Array.isArray(buf)) {
    for (; i < buf.length; i++)
      this.append(buf[i])
  } else if (buf instanceof BufferList) {
    // unwrap argument into individual BufferLists
    for (; i < buf._bufs.length; i++)
      this.append(buf._bufs[i])
  } else if (buf != null) {
    // coerce number arguments to strings, since Buffer(number) does
    // uninitialized memory allocation
    if (typeof buf == 'number')
      buf = buf.toString()

    this._appendBuffer(Buffer.from(buf));
  }

  return this
}


BufferList.prototype._appendBuffer = function appendBuffer (buf) {
  this._bufs.push(buf)
  this.length += buf.length
}


BufferList.prototype._write = function _write (buf, encoding, callback) {
  this._appendBuffer(buf)

  if (typeof callback == 'function')
    callback()
}


BufferList.prototype._read = function _read (size) {
  if (!this.length)
    return this.push(null)

  size = Math.min(size, this.length)
  this.push(this.slice(0, size))
  this.consume(size)
}


BufferList.prototype.end = function end (chunk) {
  DuplexStream.prototype.end.call(this, chunk)

  if (this._callback) {
    this._callback(null, this.slice())
    this._callback = null
  }
}


BufferList.prototype.get = function get (index) {
  return this.slice(index, index + 1)[0]
}


BufferList.prototype.slice = function slice (start, end) {
  if (typeof start == 'number' && start < 0)
    start += this.length
  if (typeof end == 'number' && end < 0)
    end += this.length
  return this.copy(null, 0, start, end)
}


BufferList.prototype.copy = function copy (dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart != 'number' || srcStart < 0)
    srcStart = 0
  if (typeof srcEnd != 'number' || srcEnd > this.length)
    srcEnd = this.length
  if (srcStart >= this.length)
    return dst || Buffer.alloc(0)
  if (srcEnd <= 0)
    return dst || Buffer.alloc(0)

  var copy   = !!dst
    , off    = this._offset(srcStart)
    , len    = srcEnd - srcStart
    , bytes  = len
    , bufoff = (copy && dstStart) || 0
    , start  = off[1]
    , l
    , i

  // copy/slice everything
  if (srcStart === 0 && srcEnd == this.length) {
    if (!copy) { // slice, but full concat if multiple buffers
      return this._bufs.length === 1
        ? this._bufs[0]
        : Buffer.concat(this._bufs, this.length)
    }

    // copy, need to copy individual buffers
    for (i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff)
      bufoff += this._bufs[i].length
    }

    return dst
  }

  // easy, cheap case where it's a subset of one of the buffers
  if (bytes <= this._bufs[off[0]].length - start) {
    return copy
      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
      : this._bufs[off[0]].slice(start, start + bytes)
  }

  if (!copy) // a slice, we need something to copy in to
    dst = Buffer.allocUnsafe(len)

  for (i = off[0]; i < this._bufs.length; i++) {
    l = this._bufs[i].length - start

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start)
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes)
      break
    }

    bufoff += l
    bytes -= l

    if (start)
      start = 0
  }

  return dst
}

BufferList.prototype.shallowSlice = function shallowSlice (start, end) {
  start = start || 0
  end = end || this.length

  if (start < 0)
    start += this.length
  if (end < 0)
    end += this.length

  var startOffset = this._offset(start)
    , endOffset = this._offset(end)
    , buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1)

  if (endOffset[1] == 0)
    buffers.pop()
  else
    buffers[buffers.length-1] = buffers[buffers.length-1].slice(0, endOffset[1])

  if (startOffset[1] != 0)
    buffers[0] = buffers[0].slice(startOffset[1])

  return new BufferList(buffers)
}

BufferList.prototype.toString = function toString (encoding, start, end) {
  return this.slice(start, end).toString(encoding)
}

BufferList.prototype.consume = function consume (bytes) {
  while (this._bufs.length) {
    if (bytes >= this._bufs[0].length) {
      bytes -= this._bufs[0].length
      this.length -= this._bufs[0].length
      this._bufs.shift()
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes)
      this.length -= bytes
      break
    }
  }
  return this
}


BufferList.prototype.duplicate = function duplicate () {
  var i = 0
    , copy = new BufferList()

  for (; i < this._bufs.length; i++)
    copy.append(this._bufs[i])

  return copy
}


BufferList.prototype.destroy = function destroy () {
  this._bufs.length = 0
  this.length = 0
  this.push(null)
}


;(function () {
  var methods = {
      'readDoubleBE' : 8
    , 'readDoubleLE' : 8
    , 'readFloatBE'  : 4
    , 'readFloatLE'  : 4
    , 'readInt32BE'  : 4
    , 'readInt32LE'  : 4
    , 'readUInt32BE' : 4
    , 'readUInt32LE' : 4
    , 'readInt16BE'  : 2
    , 'readInt16LE'  : 2
    , 'readUInt16BE' : 2
    , 'readUInt16LE' : 2
    , 'readInt8'     : 1
    , 'readUInt8'    : 1
  }

  for (var m in methods) {
    (function (m) {
      BufferList.prototype[m] = function (offset) {
        return this.slice(offset, offset + methods[m])[m](0)
      }
    }(m))
  }
}())


module.exports = BufferList


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/core-util-is/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/d/auto-bind.js":
/*!*************************************!*\
  !*** ./node_modules/d/auto-bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copy             = __webpack_require__(/*! es5-ext/object/copy */ "./node_modules/es5-ext/object/copy.js")
  , normalizeOptions = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , ensureCallable   = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , map              = __webpack_require__(/*! es5-ext/object/map */ "./node_modules/es5-ext/object/map.js")
  , callable         = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue       = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")

  , bind = Function.prototype.bind, defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, options) {
	var value = validValue(desc) && callable(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
		desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty(this, name, desc);
		return this[name];
	};
	return dgs;
};

module.exports = function (props/*, options*/) {
	var options = normalizeOptions(arguments[1]);
	if (options.resolveContext != null) ensureCallable(options.resolveContext);
	return map(props, function (desc, name) { return define(name, desc, options); });
};


/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , isCallable    = __webpack_require__(/*! es5-ext/object/is-callable */ "./node_modules/es5-ext/object/is-callable.js")
  , contains      = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js")

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/date-fns/compare_asc/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/compare_asc/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "./node_modules/date-fns/compare_desc/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/compare_desc/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_months/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_months/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_milliseconds/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/difference_in_months/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_months/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarMonths = __webpack_require__(/*! ../difference_in_calendar_months/index.js */ "./node_modules/date-fns/difference_in_calendar_months/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_seconds/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(/*! ../compare_desc/index.js */ "./node_modules/date-fns/compare_desc/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__(/*! ../difference_in_seconds/index.js */ "./node_modules/date-fns/difference_in_seconds/index.js")
var differenceInMonths = __webpack_require__(/*! ../difference_in_months/index.js */ "./node_modules/date-fns/difference_in_months/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_to_now/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words_to_now/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__(/*! ../distance_in_words/index.js */ "./node_modules/date-fns/distance_in_words/index.js")

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(/*! ../get_day_of_year/index.js */ "./node_modules/date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ "./node_modules/date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var isValid = __webpack_require__(/*! ../is_valid/index.js */ "./node_modules/date-fns/is_valid/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfYear = __webpack_require__(/*! ../start_of_year/index.js */ "./node_modules/date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_valid/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(/*! ../../_lib/build_formatting_tokens_reg_exp/index.js */ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/en/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(/*! ./build_distance_in_words_locale/index.js */ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__(/*! ./build_format_locale/index.js */ "./node_modules/date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_year/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "./node_modules/duplexify/index.js":
/*!*****************************************!*\
  !*** ./node_modules/duplexify/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, process) {var stream = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js")
var eos = __webpack_require__(/*! end-of-stream */ "./node_modules/end-of-stream/index.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var shift = __webpack_require__(/*! stream-shift */ "./node_modules/stream-shift/index.js")

var SIGNAL_FLUSH = (Buffer.from && Buffer.from !== Uint8Array.from)
  ? Buffer.from([0])
  : new Buffer([0])

var onuncork = function(self, fn) {
  if (self._corked) self.once('uncork', fn)
  else fn()
}

var autoDestroy = function (self, err) {
  if (self._autoDestroy) self.destroy(err)
}

var destroyer = function(self, end) {
  return function(err) {
    if (err) autoDestroy(self, err.message === 'premature close' ? null : err)
    else if (end && !self._ended) self.end()
  }
}

var end = function(ws, fn) {
  if (!ws) return fn()
  if (ws._writableState && ws._writableState.finished) return fn()
  if (ws._writableState) return ws.end(fn)
  ws.end()
  fn()
}

var toStreams2 = function(rs) {
  return new (stream.Readable)({objectMode:true, highWaterMark:16}).wrap(rs)
}

var Duplexify = function(writable, readable, opts) {
  if (!(this instanceof Duplexify)) return new Duplexify(writable, readable, opts)
  stream.Duplex.call(this, opts)

  this._writable = null
  this._readable = null
  this._readable2 = null

  this._autoDestroy = !opts || opts.autoDestroy !== false
  this._forwardDestroy = !opts || opts.destroy !== false
  this._forwardEnd = !opts || opts.end !== false
  this._corked = 1 // start corked
  this._ondrain = null
  this._drained = false
  this._forwarding = false
  this._unwrite = null
  this._unread = null
  this._ended = false

  this.destroyed = false

  if (writable) this.setWritable(writable)
  if (readable) this.setReadable(readable)
}

inherits(Duplexify, stream.Duplex)

Duplexify.obj = function(writable, readable, opts) {
  if (!opts) opts = {}
  opts.objectMode = true
  opts.highWaterMark = 16
  return new Duplexify(writable, readable, opts)
}

Duplexify.prototype.cork = function() {
  if (++this._corked === 1) this.emit('cork')
}

Duplexify.prototype.uncork = function() {
  if (this._corked && --this._corked === 0) this.emit('uncork')
}

Duplexify.prototype.setWritable = function(writable) {
  if (this._unwrite) this._unwrite()

  if (this.destroyed) {
    if (writable && writable.destroy) writable.destroy()
    return
  }

  if (writable === null || writable === false) {
    this.end()
    return
  }

  var self = this
  var unend = eos(writable, {writable:true, readable:false}, destroyer(this, this._forwardEnd))

  var ondrain = function() {
    var ondrain = self._ondrain
    self._ondrain = null
    if (ondrain) ondrain()
  }

  var clear = function() {
    self._writable.removeListener('drain', ondrain)
    unend()
  }

  if (this._unwrite) process.nextTick(ondrain) // force a drain on stream reset to avoid livelocks

  this._writable = writable
  this._writable.on('drain', ondrain)
  this._unwrite = clear

  this.uncork() // always uncork setWritable
}

Duplexify.prototype.setReadable = function(readable) {
  if (this._unread) this._unread()

  if (this.destroyed) {
    if (readable && readable.destroy) readable.destroy()
    return
  }

  if (readable === null || readable === false) {
    this.push(null)
    this.resume()
    return
  }

  var self = this
  var unend = eos(readable, {writable:false, readable:true}, destroyer(this))

  var onreadable = function() {
    self._forward()
  }

  var onend = function() {
    self.push(null)
  }

  var clear = function() {
    self._readable2.removeListener('readable', onreadable)
    self._readable2.removeListener('end', onend)
    unend()
  }

  this._drained = true
  this._readable = readable
  this._readable2 = readable._readableState ? readable : toStreams2(readable)
  this._readable2.on('readable', onreadable)
  this._readable2.on('end', onend)
  this._unread = clear

  this._forward()
}

Duplexify.prototype._read = function() {
  this._drained = true
  this._forward()
}

Duplexify.prototype._forward = function() {
  if (this._forwarding || !this._readable2 || !this._drained) return
  this._forwarding = true

  var data

  while (this._drained && (data = shift(this._readable2)) !== null) {
    if (this.destroyed) continue
    this._drained = this.push(data)
  }

  this._forwarding = false
}

Duplexify.prototype.destroy = function(err) {
  if (this.destroyed) return
  this.destroyed = true

  var self = this
  process.nextTick(function() {
    self._destroy(err)
  })
}

Duplexify.prototype._destroy = function(err) {
  if (err) {
    var ondrain = this._ondrain
    this._ondrain = null
    if (ondrain) ondrain(err)
    else this.emit('error', err)
  }

  if (this._forwardDestroy) {
    if (this._readable && this._readable.destroy) this._readable.destroy()
    if (this._writable && this._writable.destroy) this._writable.destroy()
  }

  this.emit('close')
}

Duplexify.prototype._write = function(data, enc, cb) {
  if (this.destroyed) return cb()
  if (this._corked) return onuncork(this, this._write.bind(this, data, enc, cb))
  if (data === SIGNAL_FLUSH) return this._finish(cb)
  if (!this._writable) return cb()

  if (this._writable.write(data) === false) this._ondrain = cb
  else cb()
}

Duplexify.prototype._finish = function(cb) {
  var self = this
  this.emit('preend')
  onuncork(this, function() {
    end(self._forwardEnd && self._writable, function() {
      // haxx to not emit prefinish twice
      if (self._writableState.prefinished === false) self._writableState.prefinished = true
      self.emit('prefinish')
      onuncork(self, cb)
    })
  })
}

Duplexify.prototype.end = function(data, enc, cb) {
  if (typeof data === 'function') return this.end(null, null, data)
  if (typeof enc === 'function') return this.end(data, null, enc)
  this._ended = true
  if (data) this.write(data)
  if (!this._writableState.ending) this.write(SIGNAL_FLUSH)
  return stream.Writable.prototype.end.call(this, cb)
}

module.exports = Duplexify

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/end-of-stream/index.js":
/*!*********************************************!*\
  !*** ./node_modules/end-of-stream/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var once = __webpack_require__(/*! once */ "./node_modules/once/once.js");

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		if (readable && !(rs && rs.ended)) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && ws.ended)) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ "./node_modules/es5-ext/array/#/clear.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/array/#/clear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/
// closure_goog_array_array.js.html#goog.array.clear



var value = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js");

module.exports = function () {
	value(this).length = 0;
	return this;
};


/***/ }),

/***/ "./node_modules/es5-ext/array/#/e-index-of.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/array/#/e-index-of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN       = __webpack_require__(/*! ../../number/is-nan */ "./node_modules/es5-ext/number/is-nan/index.js")
  , toPosInt          = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , value             = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , indexOf           = Array.prototype.indexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs               = Math.abs
  , floor             = Math.floor;

module.exports = function (searchElement /*, fromIndex*/) {
	var i, length, fromIndex, val;
	if (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments);

	length = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (numberIsNaN(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/array/from/is-implemented.js")()
	? Array.from
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/array/from/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === "dwa"));
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator
  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isFunction     = __webpack_require__(/*! ../../function/is-function */ "./node_modules/es5-ext/function/is-function.js")
  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , callable       = __webpack_require__(/*! ../../object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue     = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , isValue        = __webpack_require__(/*! ../../object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString       = __webpack_require__(/*! ../../string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity
module.exports = function (arrayLike /*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array(length = arrayLike.length);
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString
  , id = objToString.call(
	(function () {
		return arguments;
	})()
);

module.exports = function (value) {
	return objToString.call(value) === id;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call(__webpack_require__(/*! ./noop */ "./node_modules/es5-ext/function/noop.js"));

module.exports = function (value) {
	return typeof value === "function" && objToString.call(value) === id;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/math/sign/is-implemented.js")()
	? Math.sign
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/math/sign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return (sign(10) === 1) && (sign(-20) === -1);
};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return value > 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/number/is-nan/is-implemented.js")()
	? Number.isNaN
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/number/is-nan/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") return false;
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sign = __webpack_require__(/*! ../math/sign */ "./node_modules/es5-ext/math/sign/index.js")

  , abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./to-integer */ "./node_modules/es5-ext/number/to-integer.js")

  , max = Math.max;

module.exports = function (value) {
 return max(0, toInteger(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/object/_iterate.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/_iterate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order



var callable                = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , value                   = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , bind                    = Function.prototype.bind
  , call                    = Function.prototype.call
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb /*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")()
	? Object.assign
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/copy.js":
/*!*********************************************!*\
  !*** ./node_modules/es5-ext/object/copy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFrom  = __webpack_require__(/*! ../array/from */ "./node_modules/es5-ext/array/from/index.js")
  , assign = __webpack_require__(/*! ./assign */ "./node_modules/es5-ext/object/assign/index.js")
  , value  = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js");

module.exports = function (obj/*, propertyNames, options*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/create.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/object/create.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Workaround for http://code.google.com/p/v8/issues/detail?id=2804



var create = Object.create, shim;

if (!__webpack_require__(/*! ./set-prototype-of/is-implemented */ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()) {
	shim = __webpack_require__(/*! ./set-prototype-of/shim */ "./node_modules/es5-ext/object/set-prototype-of/shim.js");
}

module.exports = (function () {
	var nullObject, polyProps, desc;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	polyProps = {};
	desc = {
		configurable: false,
		enumerable: false,
		writable: true,
		value: undefined
	};
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create(prototype === null ? nullObject : prototype, props);
	};
}());


/***/ }),

/***/ "./node_modules/es5-ext/object/for-each.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/for-each.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./_iterate */ "./node_modules/es5-ext/object/_iterate.js")("forEach");


/***/ }),

/***/ "./node_modules/es5-ext/object/is-callable.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/is-callable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var map = { function: true, object: true };

module.exports = function (value) {
	return (isValue(value) && map[typeof value]) || false;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/map.js":
/*!********************************************!*\
  !*** ./node_modules/es5-ext/object/map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callable = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , forEach  = __webpack_require__(/*! ./for-each */ "./node_modules/es5-ext/object/for-each.js")
  , call     = Function.prototype.call;

module.exports = function (obj, cb /*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, targetObj, index) {
		result[key] = call.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/primitive-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = Array.prototype.forEach, create = Object.create;

// eslint-disable-next-line no-unused-vars
module.exports = function (arg /*, …args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) {
		set[name] = true;
	});
	return set;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()
	? Object.setPrototypeOf
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/set-prototype-of/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/*!************************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/is-implemented.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};

module.exports = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== "function") return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/shim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint no-proto: "off" */

// Big thanks to @WebReflection for sorting this out
// https://gist.github.com/WebReflection/5593554



var isObject        = __webpack_require__(/*! ../is-object */ "./node_modules/es5-ext/object/is-object.js")
  , value           = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , objIsPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty  = Object.defineProperty
  , nullDesc        = {
	configurable: true,
	enumerable: false,
	writable: true,
	value: undefined
}
  , validate;

validate = function (obj, prototype) {
	value(obj);
	if (prototype === null || isObject(prototype)) return obj;
	throw new TypeError("Prototype must be null or an object");
};

module.exports = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
}(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };

		return false;
	})()
));

__webpack_require__(/*! ../create */ "./node_modules/es5-ext/object/create.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")()
	? String.prototype.contains
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};


/***/ }),

/***/ "./node_modules/es6-iterator/array.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , contains       = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js")
  , d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , Symbol         = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js")
  , Iterator       = __webpack_require__(/*! ./ */ "./node_modules/es6-iterator/index.js");

var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
	Iterator.call(this, arr);
	if (!kind) kind = "value";
	else if (contains.call(kind, "key+value")) kind = "key+value";
	else if (contains.call(kind, "key")) kind = "key";
	else kind = "value";
	defineProperty(this, "__kind__", d("", kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(Iterator.prototype, {
	_resolve: d(function (i) {
		if (this.__kind__ === "value") return this.__list__[i];
		if (this.__kind__ === "key+value") return [i, this.__list__[i]];
		return i;
	})
});
defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));


/***/ }),

/***/ "./node_modules/es6-iterator/for-of.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/for-of.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , callable    = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , get         = __webpack_require__(/*! ./get */ "./node_modules/es6-iterator/get.js");

var isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;

module.exports = function (iterable, cb /*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray(iterable) || isArguments(iterable)) mode = "array";
	else if (isString(iterable)) mode = "string";
	else iterable = get(iterable);

	callable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
			}
			call.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};


/***/ }),

/***/ "./node_modules/es6-iterator/get.js":
/*!******************************************!*\
  !*** ./node_modules/es6-iterator/get.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments    = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isString       = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , ArrayIterator  = __webpack_require__(/*! ./array */ "./node_modules/es6-iterator/array.js")
  , StringIterator = __webpack_require__(/*! ./string */ "./node_modules/es6-iterator/string.js")
  , iterable       = __webpack_require__(/*! ./valid-iterable */ "./node_modules/es6-iterator/valid-iterable.js")
  , iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};


/***/ }),

/***/ "./node_modules/es6-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clear    = __webpack_require__(/*! es5-ext/array/#/clear */ "./node_modules/es5-ext/array/#/clear.js")
  , assign   = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , value    = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , d        = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , autoBind = __webpack_require__(/*! d/auto-bind */ "./node_modules/d/auto-bind.js")
  , Symbol   = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js");

var defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;

module.exports = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
	defineProperties(this, {
		__list__: d("w", value(list)),
		__context__: d("w", context),
		__nextIndex__: d("w", 0)
	});
	if (!context) return;
	callable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties(
	Iterator.prototype,
	assign(
		{
			_next: d(function () {
				var i;
				if (!this.__list__) return undefined;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
				return undefined;
			}),
			next: d(function () {
				return this._createResult(this._next());
			}),
			_createResult: d(function (i) {
				if (i === undefined) return { done: true, value: undefined };
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d(function (i) {
				return this.__list__[i];
			}),
			_unBind: d(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d(function () {
				return "[object " + (this[Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d(function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty(this, "__redo__", d("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d(function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) this.__redo__[j] = --redo;
				}, this);
			}),
			_onClear: d(function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty(
	Iterator.prototype,
	Symbol.iterator,
	d(function () {
		return this;
	})
);


/***/ }),

/***/ "./node_modules/es6-iterator/is-iterable.js":
/*!**************************************************!*\
  !*** ./node_modules/es6-iterator/is-iterable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isValue     = __webpack_require__(/*! es5-ext/object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ "./node_modules/es5-ext/string/is-string.js");

var iteratorSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator
  , isArray        = Array.isArray;

module.exports = function (value) {
	if (!isValue(value)) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return typeof value[iteratorSymbol] === "function";
};


/***/ }),

/***/ "./node_modules/es6-iterator/string.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/string.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols



var setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , Symbol         = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js")
  , Iterator       = __webpack_require__(/*! ./ */ "./node_modules/es6-iterator/index.js");

var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
	str = String(str);
	Iterator.call(this, str);
	defineProperty(this, "__length__", d("", str.length));
};
if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(Iterator.prototype, {
	_next: d(function () {
		if (!this.__list__) return undefined;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
		return undefined;
	}),
	_resolve: d(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
		return char;
	})
});
defineProperty(StringIterator.prototype, Symbol.toStringTag, d("c", "String Iterator"));


/***/ }),

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-iterator/valid-iterable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isIterable = __webpack_require__(/*! ./is-iterable */ "./node_modules/es6-iterator/is-iterable.js");

module.exports = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};


/***/ }),

/***/ "./node_modules/es6-map/index.js":
/*!***************************************!*\
  !*** ./node_modules/es6-map/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-map/is-implemented.js")() ? Map : __webpack_require__(/*! ./polyfill */ "./node_modules/es6-map/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-map/is-implemented.js":
/*!************************************************!*\
  !*** ./node_modules/es6-map/is-implemented.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var map, iterator, result;
	if (typeof Map !== 'function') return false;
	try {
		// WebKit doesn't support arguments and crashes
		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
	} catch (e) {
		return false;
	}
	if (String(map) !== '[object Map]') return false;
	if (map.size !== 3) return false;
	if (typeof map.clear !== 'function') return false;
	if (typeof map.delete !== 'function') return false;
	if (typeof map.entries !== 'function') return false;
	if (typeof map.forEach !== 'function') return false;
	if (typeof map.get !== 'function') return false;
	if (typeof map.has !== 'function') return false;
	if (typeof map.keys !== 'function') return false;
	if (typeof map.set !== 'function') return false;
	if (typeof map.values !== 'function') return false;

	iterator = map.entries();
	result = iterator.next();
	if (result.done !== false) return false;
	if (!result.value) return false;
	if (result.value[0] !== 'raz') return false;
	if (result.value[1] !== 'one') return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-map/is-native-implemented.js":
/*!*******************************************************!*\
  !*** ./node_modules/es6-map/is-native-implemented.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Exports true if environment provides native `Map` implementation,
// whatever that is.



module.exports = (function () {
	if (typeof Map === 'undefined') return false;
	return (Object.prototype.toString.call(new Map()) === '[object Map]');
}());


/***/ }),

/***/ "./node_modules/es6-map/lib/iterator-kinds.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-map/lib/iterator-kinds.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js")('key',
	'value', 'key+value');


/***/ }),

/***/ "./node_modules/es6-map/lib/iterator.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-map/lib/iterator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf    = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , d                 = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , Iterator          = __webpack_require__(/*! es6-iterator */ "./node_modules/es6-iterator/index.js")
  , toStringTagSymbol = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").toStringTag
  , kinds             = __webpack_require__(/*! ./iterator-kinds */ "./node_modules/es6-map/lib/iterator-kinds.js")

  , defineProperties = Object.defineProperties
  , unBind = Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
	Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__values__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

MapIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(MapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__values__[i];
		if (this.__kind__ === 'key') return this.__list__[i];
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	toString: d(function () { return '[object Map Iterator]'; })
});
Object.defineProperty(MapIterator.prototype, toStringTagSymbol,
	d('c', 'Map Iterator'));


/***/ }),

/***/ "./node_modules/es6-map/polyfill.js":
/*!******************************************!*\
  !*** ./node_modules/es6-map/polyfill.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clear          = __webpack_require__(/*! es5-ext/array/#/clear */ "./node_modules/es5-ext/array/#/clear.js")
  , eIndexOf       = __webpack_require__(/*! es5-ext/array/#/e-index-of */ "./node_modules/es5-ext/array/#/e-index-of.js")
  , setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ "./node_modules/es5-ext/object/set-prototype-of/index.js")
  , callable       = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue     = __webpack_require__(/*! es5-ext/object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , ee             = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js")
  , Symbol         = __webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js")
  , iterator       = __webpack_require__(/*! es6-iterator/valid-iterable */ "./node_modules/es6-iterator/valid-iterable.js")
  , forOf          = __webpack_require__(/*! es6-iterator/for-of */ "./node_modules/es6-iterator/for-of.js")
  , Iterator       = __webpack_require__(/*! ./lib/iterator */ "./node_modules/es6-map/lib/iterator.js")
  , isNative       = __webpack_require__(/*! ./is-native-implemented */ "./node_modules/es6-map/is-native-implemented.js")

  , call = Function.prototype.call
  , defineProperties = Object.defineProperties, getPrototypeOf = Object.getPrototypeOf
  , MapPoly;

module.exports = MapPoly = function (/*iterable*/) {
	var iterable = arguments[0], keys, values, self;
	if (!(this instanceof MapPoly)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf && (Map !== MapPoly)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable != null) iterator(iterable);
	defineProperties(self, {
		__mapKeysData__: d('c', keys = []),
		__mapValuesData__: d('c', values = [])
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = validValue(value)[0];
		value = value[1];
		if (eIndexOf.call(keys, key) !== -1) return;
		keys.push(key);
		values.push(value);
	}, self);
	return self;
};

if (isNative) {
	if (setPrototypeOf) setPrototypeOf(MapPoly, Map);
	MapPoly.prototype = Object.create(Map.prototype, {
		constructor: d(MapPoly)
	});
}

ee(defineProperties(MapPoly.prototype, {
	clear: d(function () {
		if (!this.__mapKeysData__.length) return;
		clear.call(this.__mapKeysData__);
		clear.call(this.__mapValuesData__);
		this.emit('_clear');
	}),
	delete: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return false;
		this.__mapKeysData__.splice(index, 1);
		this.__mapValuesData__.splice(index, 1);
		this.emit('_delete', index, key);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	forEach: d(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator, result;
		callable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			call.call(cb, thisArg, this.__mapValuesData__[result],
				this.__mapKeysData__[result], this);
			result = iterator._next();
		}
	}),
	get: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return;
		return this.__mapValuesData__[index];
	}),
	has: d(function (key) {
		return (eIndexOf.call(this.__mapKeysData__, key) !== -1);
	}),
	keys: d(function () { return new Iterator(this, 'key'); }),
	set: d(function (key, value) {
		var index = eIndexOf.call(this.__mapKeysData__, key), emit;
		if (index === -1) {
			index = this.__mapKeysData__.push(key) - 1;
			emit = true;
		}
		this.__mapValuesData__[index] = value;
		if (emit) this.emit('_add', index, key);
		return this;
	}),
	size: d.gs(function () { return this.__mapKeysData__.length; }),
	values: d(function () { return new Iterator(this, 'value'); }),
	toString: d(function () { return '[object Map]'; })
}));
Object.defineProperty(MapPoly.prototype, Symbol.iterator, d(function () {
	return this.entries();
}));
Object.defineProperty(MapPoly.prototype, Symbol.toStringTag, d('c', 'Map'));


/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-symbol/is-implemented.js")() ? Symbol : __webpack_require__(/*! ./polyfill */ "./node_modules/es6-symbol/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol = __webpack_require__(/*! ./validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js")

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "./node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d        = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/is_js/is.js":
/*!**********************************!*\
  !*** ./node_modules/is_js/is.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * is.js 0.8.0
 * Author: Aras Atasaygin
 */

// AMD with global, Node, or global
;(function(root, factory) {    // eslint-disable-line no-extra-semi
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.is = factory());
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function() {

    // Baseline
    /* -------------------------------------------------------------------------- */

    // define 'is' object and current version
    var is = {};
    is.VERSION = '0.8.0';

    // define interfaces
    is.not = {};
    is.all = {};
    is.any = {};

    // cache some methods to call later on
    var toString = Object.prototype.toString;
    var slice = Array.prototype.slice;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // helper function which reverses the sense of predicate result
    function not(func) {
        return function() {
            return !func.apply(null, slice.call(arguments));
        };
    }

    // helper function which call predicate function per parameter and return true if all pass
    function all(func) {
        return function() {
            var params = getParams(arguments);
            var length = params.length;
            for (var i = 0; i < length; i++) {
                if (!func.call(null, params[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // helper function which call predicate function per parameter and return true if any pass
    function any(func) {
        return function() {
            var params = getParams(arguments);
            var length = params.length;
            for (var i = 0; i < length; i++) {
                if (func.call(null, params[i])) {
                    return true;
                }
            }
            return false;
        };
    }

    // build a 'comparator' object for various comparison checks
    var comparator = {
        '<': function(a, b) { return a < b; },
        '<=': function(a, b) { return a <= b; },
        '>': function(a, b) { return a > b; },
        '>=': function(a, b) { return a >= b; }
    }

    // helper function which compares a version to a range
    function compareVersion(version, range) {
        var string = (range + '');
        var n = +(string.match(/\d+/) || NaN);
        var op = string.match(/^[<>]=?|/)[0];
        return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
    }

    // helper function which extracts params from arguments
    function getParams(args) {
        var params = slice.call(args);
        var length = params.length;
        if (length === 1 && is.array(params[0])) {    // support array
            params = params[0];
        }
        return params;
    }

    // Type checks
    /* -------------------------------------------------------------------------- */

    // is a given value Arguments?
    is.arguments = function(value) {    // fallback check is for IE
        return toString.call(value) === '[object Arguments]' ||
            (value != null && typeof value === 'object' && 'callee' in value);
    };

    // is a given value Array?
    is.array = Array.isArray || function(value) {    // check native isArray first
        return toString.call(value) === '[object Array]';
    };

    // is a given value Boolean?
    is.boolean = function(value) {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
    };

    // is a given value Char?
    is.char = function(value) {
        return is.string(value) && value.length === 1;
    };

    // is a given value Date Object?
    is.date = function(value) {
        return toString.call(value) === '[object Date]';
    };

    // is a given object a DOM node?
    is.domNode = function(object) {
        return is.object(object) && object.nodeType > 0;
    };

    // is a given value Error object?
    is.error = function(value) {
        return toString.call(value) === '[object Error]';
    };

    // is a given value function?
    is['function'] = function(value) {    // fallback check is for IE
        return toString.call(value) === '[object Function]' || typeof value === 'function';
    };

    // is given value a pure JSON object?
    is.json = function(value) {
        return toString.call(value) === '[object Object]';
    };

    // is a given value NaN?
    is.nan = function(value) {    // NaN is number :) Also it is the only value which does not equal itself
        return value !== value;
    };

    // is a given value null?
    is['null'] = function(value) {
        return value === null;
    };

    // is a given value number?
    is.number = function(value) {
        return is.not.nan(value) && toString.call(value) === '[object Number]';
    };

    // is a given value object?
    is.object = function(value) {
        return Object(value) === value;
    };

    // is a given value RegExp?
    is.regexp = function(value) {
        return toString.call(value) === '[object RegExp]';
    };

    // are given values same type?
    // prevent NaN, Number same type check
    is.sameType = function(value, other) {
        var tag = toString.call(value);
        if (tag !== toString.call(other)) {
            return false;
        }
        if (tag === '[object Number]') {
            return !is.any.nan(value, other) || is.all.nan(value, other);
        }
        return true;
    };
    // sameType method does not support 'all' and 'any' interfaces
    is.sameType.api = ['not'];

    // is a given value String?
    is.string = function(value) {
        return toString.call(value) === '[object String]';
    };

    // is a given value undefined?
    is.undefined = function(value) {
        return value === void 0;
    };

    // is a given value window?
    // setInterval method is only available for window object
    is.windowObject = function(value) {
        return value != null && typeof value === 'object' && 'setInterval' in value;
    };

    // Presence checks
    /* -------------------------------------------------------------------------- */

    //is a given value empty? Objects, arrays, strings
    is.empty = function(value) {
        if (is.object(value)) {
            var length = Object.getOwnPropertyNames(value).length;
            if (length === 0 || (length === 1 && is.array(value)) ||
                    (length === 2 && is.arguments(value))) {
                return true;
            }
            return false;
        }
        return value === '';
    };

    // is a given value existy?
    is.existy = function(value) {
        return value != null;
    };

    // is a given value falsy?
    is.falsy = function(value) {
        return !value;
    };

    // is a given value truthy?
    is.truthy = not(is.falsy);

    // Arithmetic checks
    /* -------------------------------------------------------------------------- */

    // is a given number above minimum parameter?
    is.above = function(n, min) {
        return is.all.number(n, min) && n > min;
    };
    // above method does not support 'all' and 'any' interfaces
    is.above.api = ['not'];

    // is a given number decimal?
    is.decimal = function(n) {
        return is.number(n) && n % 1 !== 0;
    };

    // are given values equal? supports numbers, strings, regexes, booleans
    // TODO: Add object and array support
    is.equal = function(value, other) {
        // check 0 and -0 equity with Infinity and -Infinity
        if (is.all.number(value, other)) {
            return value === other && 1 / value === 1 / other;
        }
        // check regexes as strings too
        if (is.all.string(value, other) || is.all.regexp(value, other)) {
            return '' + value === '' + other;
        }
        if (is.all.boolean(value, other)) {
            return value === other;
        }
        return false;
    };
    // equal method does not support 'all' and 'any' interfaces
    is.equal.api = ['not'];

    // is a given number even?
    is.even = function(n) {
        return is.number(n) && n % 2 === 0;
    };

    // is a given number finite?
    is.finite = isFinite || function(n) {
        return is.not.infinite(n) && is.not.nan(n);
    };

    // is a given number infinite?
    is.infinite = function(n) {
        return n === Infinity || n === -Infinity;
    };

    // is a given number integer?
    is.integer = function(n) {
        return is.number(n) && n % 1 === 0;
    };

    // is a given number negative?
    is.negative = function(n) {
        return is.number(n) && n < 0;
    };

    // is a given number odd?
    is.odd = function(n) {
        return is.number(n) && n % 2 === 1;
    };

    // is a given number positive?
    is.positive = function(n) {
        return is.number(n) && n > 0;
    };

    // is a given number above maximum parameter?
    is.under = function(n, max) {
        return is.all.number(n, max) && n < max;
    };
    // least method does not support 'all' and 'any' interfaces
    is.under.api = ['not'];

    // is a given number within minimum and maximum parameters?
    is.within = function(n, min, max) {
        return is.all.number(n, min, max) && n > min && n < max;
    };
    // within method does not support 'all' and 'any' interfaces
    is.within.api = ['not'];

    // Regexp checks
    /* -------------------------------------------------------------------------- */
    // Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
    // Scott Gonzalez: Email address validation

    // dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
    // eppPhone match extensible provisioning protocol format
    // nanpPhone match north american number plan format
    // time match hours, minutes, and seconds, 24-hour clock
    var regexes = {
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, // eslint-disable-line no-control-regex
        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
        hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
    };

    function regexpCheck(regexp, regexes) {
        is[regexp] = function(value) {
            return regexes[regexp].test(value);
        };
    }

    // create regexp checks methods from 'regexes' object
    for (var regexp in regexes) {
        if (regexes.hasOwnProperty(regexp)) {
            regexpCheck(regexp, regexes);
        }
    }

    // simplify IP checks by calling the regex helpers for IPv4 and IPv6
    is.ip = function(value) {
        return is.ipv4(value) || is.ipv6(value);
    };

    // String checks
    /* -------------------------------------------------------------------------- */

    // is a given string or sentence capitalized?
    is.capitalized = function(string) {
        if (is.not.string(string)) {
            return false;
        }
        var words = string.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.length) {
                var chr = word.charAt(0);
                if (chr !== chr.toUpperCase()) {
                    return false;
                }
            }
        }
        return true;
    };

    // is string end with a given target parameter?
    is.endWith = function(string, target) {
        if (is.not.string(string)) {
            return false;
        }
        target += '';
        var position = string.length - target.length;
        return position >= 0 && string.indexOf(target, position) === position;
    };
    // endWith method does not support 'all' and 'any' interfaces
    is.endWith.api = ['not'];

    // is a given string include parameter target?
    is.include = function(string, target) {
        return string.indexOf(target) > -1;
    };
    // include method does not support 'all' and 'any' interfaces
    is.include.api = ['not'];

    // is a given string all lowercase?
    is.lowerCase = function(string) {
        return is.string(string) && string === string.toLowerCase();
    };

    // is a given string palindrome?
    is.palindrome = function(string) {
        if (is.not.string(string)) {
            return false;
        }
        string = string.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        var length = string.length - 1;
        for (var i = 0, half = Math.floor(length / 2); i <= half; i++) {
            if (string.charAt(i) !== string.charAt(length - i)) {
                return false;
            }
        }
        return true;
    };

    // is a given value space?
    // horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
    is.space = function(value) {
        if (is.not.char(value)) {
            return false;
        }
        var charCode = value.charCodeAt(0);
        return (charCode > 8 && charCode < 14) || charCode === 32;
    };

    // is string start with a given target parameter?
    is.startWith = function(string, target) {
        return is.string(string) && string.indexOf(target) === 0;
    };
    // startWith method does not support 'all' and 'any' interfaces
    is.startWith.api = ['not'];

    // is a given string all uppercase?
    is.upperCase = function(string) {
        return is.string(string) && string === string.toUpperCase();
    };

    // Time checks
    /* -------------------------------------------------------------------------- */

    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    // is a given dates day equal given day parameter?
    is.day = function(date, day) {
        return is.date(date) && day.toLowerCase() === days[date.getDay()];
    };
    // day method does not support 'all' and 'any' interfaces
    is.day.api = ['not'];

    // is a given date in daylight saving time?
    is.dayLightSavingTime = function(date) {
        var january = new Date(date.getFullYear(), 0, 1);
        var july = new Date(date.getFullYear(), 6, 1);
        var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
        return date.getTimezoneOffset() < stdTimezoneOffset;
    };

    // is a given date future?
    is.future = function(date) {
        var now = new Date();
        return is.date(date) && date.getTime() > now.getTime();
    };

    // is date within given range?
    is.inDateRange = function(date, start, end) {
        if (is.not.date(date) || is.not.date(start) || is.not.date(end)) {
            return false;
        }
        var stamp = date.getTime();
        return stamp > start.getTime() && stamp < end.getTime();
    };
    // inDateRange method does not support 'all' and 'any' interfaces
    is.inDateRange.api = ['not'];

    // is a given date in last month range?
    is.inLastMonth = function(date) {
        return is.inDateRange(date, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
    };

    // is a given date in last week range?
    is.inLastWeek = function(date) {
        return is.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
    };

    // is a given date in last year range?
    is.inLastYear = function(date) {
        return is.inDateRange(date, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
    };

    // is a given date in next month range?
    is.inNextMonth = function(date) {
        return is.inDateRange(date, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
    };

    // is a given date in next week range?
    is.inNextWeek = function(date) {
        return is.inDateRange(date, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
    };

    // is a given date in next year range?
    is.inNextYear = function(date) {
        return is.inDateRange(date, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
    };

    // is the given year a leap year?
    is.leapYear = function(year) {
        return is.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    };

    // is a given dates month equal given month parameter?
    is.month = function(date, month) {
        return is.date(date) && month.toLowerCase() === months[date.getMonth()];
    };
    // month method does not support 'all' and 'any' interfaces
    is.month.api = ['not'];

    // is a given date past?
    is.past = function(date) {
        var now = new Date();
        return is.date(date) && date.getTime() < now.getTime();
    };

    // is a given date in the parameter quarter?
    is.quarterOfYear = function(date, quarter) {
        return is.date(date) && is.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
    };
    // quarterOfYear method does not support 'all' and 'any' interfaces
    is.quarterOfYear.api = ['not'];

    // is a given date indicate today?
    is.today = function(date) {
        var now = new Date();
        var todayString = now.toDateString();
        return is.date(date) && date.toDateString() === todayString;
    };

    // is a given date indicate tomorrow?
    is.tomorrow = function(date) {
        var now = new Date();
        var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
        return is.date(date) && date.toDateString() === tomorrowString;
    };

    // is a given date weekend?
    // 6: Saturday, 0: Sunday
    is.weekend = function(date) {
        return is.date(date) && (date.getDay() === 6 || date.getDay() === 0);
    };

    // is a given date weekday?
    is.weekday = not(is.weekend);

    // is a given dates year equal given year parameter?
    is.year = function(date, year) {
        return is.date(date) && is.number(year) && year === date.getFullYear();
    };
    // year method does not support 'all' and 'any' interfaces
    is.year.api = ['not'];

    // is a given date indicate yesterday?
    is.yesterday = function(date) {
        var now = new Date();
        var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
        return is.date(date) && date.toDateString() === yesterdayString;
    };

    // Environment checks
    /* -------------------------------------------------------------------------- */

    var freeGlobal = is.windowObject(typeof global == 'object' && global) && global;
    var freeSelf = is.windowObject(typeof self == 'object' && self) && self;
    var thisGlobal = is.windowObject(typeof this == 'object' && this) && this;
    var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

    var document = freeSelf && freeSelf.document;
    var previousIs = root.is;

    // store navigator properties to use later
    var navigator = freeSelf && freeSelf.navigator;
    var appVersion = (navigator && navigator.appVersion || '').toLowerCase();
    var userAgent = (navigator && navigator.userAgent || '').toLowerCase();
    var vendor = (navigator && navigator.vendor || '').toLowerCase();

    // is current device android?
    is.android = function() {
        return /android/.test(userAgent);
    };
    // android method does not support 'all' and 'any' interfaces
    is.android.api = ['not'];

    // is current device android phone?
    is.androidPhone = function() {
        return /android/.test(userAgent) && /mobile/.test(userAgent);
    };
    // androidPhone method does not support 'all' and 'any' interfaces
    is.androidPhone.api = ['not'];

    // is current device android tablet?
    is.androidTablet = function() {
        return /android/.test(userAgent) && !/mobile/.test(userAgent);
    };
    // androidTablet method does not support 'all' and 'any' interfaces
    is.androidTablet.api = ['not'];

    // is current device blackberry?
    is.blackberry = function() {
        return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
    };
    // blackberry method does not support 'all' and 'any' interfaces
    is.blackberry.api = ['not'];

    // is current browser chrome?
    // parameter is optional
    is.chrome = function(range) {
        var match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
        return match !== null && compareVersion(match[1], range);
    };
    // chrome method does not support 'all' and 'any' interfaces
    is.chrome.api = ['not'];

    // is current device desktop?
    is.desktop = function() {
        return is.not.mobile() && is.not.tablet();
    };
    // desktop method does not support 'all' and 'any' interfaces
    is.desktop.api = ['not'];

    // is current browser edge?
    // parameter is optional
    is.edge = function(range) {
        var match = userAgent.match(/edge\/(\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // edge method does not support 'all' and 'any' interfaces
    is.edge.api = ['not'];

    // is current browser firefox?
    // parameter is optional
    is.firefox = function(range) {
        var match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // firefox method does not support 'all' and 'any' interfaces
    is.firefox.api = ['not'];

    // is current browser internet explorer?
    // parameter is optional
    is.ie = function(range) {
        var match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // ie method does not support 'all' and 'any' interfaces
    is.ie.api = ['not'];

    // is current device ios?
    is.ios = function() {
        return is.iphone() || is.ipad() || is.ipod();
    };
    // ios method does not support 'all' and 'any' interfaces
    is.ios.api = ['not'];

    // is current device ipad?
    // parameter is optional
    is.ipad = function(range) {
        var match = userAgent.match(/ipad.+?os (\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // ipad method does not support 'all' and 'any' interfaces
    is.ipad.api = ['not'];

    // is current device iphone?
    // parameter is optional
    is.iphone = function(range) {
        // original iPhone doesn't have the os portion of the UA
        var match = userAgent.match(/iphone(?:.+?os (\d+))?/);
        return match !== null && compareVersion(match[1] || 1, range);
    };
    // iphone method does not support 'all' and 'any' interfaces
    is.iphone.api = ['not'];

    // is current device ipod?
    // parameter is optional
    is.ipod = function(range) {
        var match = userAgent.match(/ipod.+?os (\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // ipod method does not support 'all' and 'any' interfaces
    is.ipod.api = ['not'];

    // is current operating system linux?
    is.linux = function() {
        return /linux/.test(appVersion);
    };
    // linux method does not support 'all' and 'any' interfaces
    is.linux.api = ['not'];

    // is current operating system mac?
    is.mac = function() {
        return /mac/.test(appVersion);
    };
    // mac method does not support 'all' and 'any' interfaces
    is.mac.api = ['not'];

    // is current device mobile?
    is.mobile = function() {
        return is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone();
    };
    // mobile method does not support 'all' and 'any' interfaces
    is.mobile.api = ['not'];

    // is current state offline?
    is.offline = not(is.online);
    // offline method does not support 'all' and 'any' interfaces
    is.offline.api = ['not'];

    // is current state online?
    is.online = function() {
        return !navigator || navigator.onLine === true;
    };
    // online method does not support 'all' and 'any' interfaces
    is.online.api = ['not'];

    // is current browser opera?
    // parameter is optional
    is.opera = function(range) {
        var match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // opera method does not support 'all' and 'any' interfaces
    is.opera.api = ['not'];

    // is current browser phantomjs?
    // parameter is optional
    is.phantom = function(range) {
        var match = userAgent.match(/phantomjs\/(\d+)/);
        return match !== null && compareVersion(match[1], range);
    };
    // phantom method does not support 'all' and 'any' interfaces
    is.phantom.api = ['not'];

    // is current browser safari?
    // parameter is optional
    is.safari = function(range) {
        var match = userAgent.match(/version\/(\d+).+?safari/);
        return match !== null && compareVersion(match[1], range);
    };
    // safari method does not support 'all' and 'any' interfaces
    is.safari.api = ['not'];

    // is current device tablet?
    is.tablet = function() {
        return is.ipad() || is.androidTablet() || is.windowsTablet();
    };
    // tablet method does not support 'all' and 'any' interfaces
    is.tablet.api = ['not'];

    // is current device supports touch?
    is.touchDevice = function() {
        return !!document && ('ontouchstart' in freeSelf ||
            ('DocumentTouch' in freeSelf && document instanceof DocumentTouch));
    };
    // touchDevice method does not support 'all' and 'any' interfaces
    is.touchDevice.api = ['not'];

    // is current operating system windows?
    is.windows = function() {
        return /win/.test(appVersion);
    };
    // windows method does not support 'all' and 'any' interfaces
    is.windows.api = ['not'];

    // is current device windows phone?
    is.windowsPhone = function() {
        return is.windows() && /phone/.test(userAgent);
    };
    // windowsPhone method does not support 'all' and 'any' interfaces
    is.windowsPhone.api = ['not'];

    // is current device windows tablet?
    is.windowsTablet = function() {
        return is.windows() && is.not.windowsPhone() && /touch/.test(userAgent);
    };
    // windowsTablet method does not support 'all' and 'any' interfaces
    is.windowsTablet.api = ['not'];

    // Object checks
    /* -------------------------------------------------------------------------- */

    // has a given object got parameterized count property?
    is.propertyCount = function(object, count) {
        if (is.not.object(object) || is.not.number(count)) {
            return false;
        }
        var n = 0;
        for (var property in object) {
            if (hasOwnProperty.call(object, property) && ++n > count) {
                return false;
            }
        }
        return n === count;
    };
    // propertyCount method does not support 'all' and 'any' interfaces
    is.propertyCount.api = ['not'];

    // is given object has parameterized property?
    is.propertyDefined = function(object, property) {
        return is.object(object) && is.string(property) && property in object;
    };
    // propertyDefined method does not support 'all' and 'any' interfaces
    is.propertyDefined.api = ['not'];

    // Array checks
    /* -------------------------------------------------------------------------- */

    // is a given item in an array?
    is.inArray = function(value, array) {
        if (is.not.array(array)) {
            return false;
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    };
    // inArray method does not support 'all' and 'any' interfaces
    is.inArray.api = ['not'];

    // is a given array sorted?
    is.sorted = function(array, sign) {
        if (is.not.array(array)) {
            return false;
        }
        var predicate = comparator[sign] || comparator['>='];
        for (var i = 1; i < array.length; i++) {
            if (!predicate(array[i], array[i - 1])) {
                return false;
            }
        }
        return true;
    };

    // API
    // Set 'not', 'all' and 'any' interfaces to methods based on their api property
    /* -------------------------------------------------------------------------- */

    function setInterfaces() {
        var options = is;
        for (var option in options) {
            if (hasOwnProperty.call(options, option) && is['function'](options[option])) {
                var interfaces = options[option].api || ['not', 'all', 'any'];
                for (var i = 0; i < interfaces.length; i++) {
                    if (interfaces[i] === 'not') {
                        is.not[option] = not(is[option]);
                    }
                    if (interfaces[i] === 'all') {
                        is.all[option] = all(is[option]);
                    }
                    if (interfaces[i] === 'any') {
                        is.any[option] = any(is[option]);
                    }
                }
            }
        }
    }
    setInterfaces();

    // Configuration methods
    // Intentionally added after setInterfaces function
    /* -------------------------------------------------------------------------- */

    // change namespace of library to prevent name collisions
    // var preferredName = is.setNamespace();
    // preferredName.odd(3);
    // => true
    is.setNamespace = function() {
        root.is = previousIs;
        return this;
    };

    // set optional regexes to methods
    is.setRegexp = function(regexp, name) {
        for (var r in regexes) {
            if (hasOwnProperty.call(regexes, r) && (name === r)) {
                regexes[r] = regexp;
            }
        }
    };

    return is;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/mqtt-packet/constants.js":
/*!***********************************************!*\
  !*** ./node_modules/mqtt-packet/constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer

/* Protocol - protocol constants */
var protocol = module.exports

/* Command code => mnemonic */
protocol.types = {
  0: 'reserved',
  1: 'connect',
  2: 'connack',
  3: 'publish',
  4: 'puback',
  5: 'pubrec',
  6: 'pubrel',
  7: 'pubcomp',
  8: 'subscribe',
  9: 'suback',
  10: 'unsubscribe',
  11: 'unsuback',
  12: 'pingreq',
  13: 'pingresp',
  14: 'disconnect',
  15: 'reserved'
}

/* Mnemonic => Command code */
protocol.codes = {}
for (var k in protocol.types) {
  var v = protocol.types[k]
  protocol.codes[v] = k
}

/* Header */
protocol.CMD_SHIFT = 4
protocol.CMD_MASK = 0xF0
protocol.DUP_MASK = 0x08
protocol.QOS_MASK = 0x03
protocol.QOS_SHIFT = 1
protocol.RETAIN_MASK = 0x01

/* Length */
protocol.LENGTH_MASK = 0x7F
protocol.LENGTH_FIN_MASK = 0x80

/* Connack */
protocol.SESSIONPRESENT_MASK = 0x01
protocol.SESSIONPRESENT_HEADER = Buffer.from([protocol.SESSIONPRESENT_MASK])
protocol.CONNACK_HEADER = Buffer.from([protocol.codes['connack'] << protocol.CMD_SHIFT])

/* Connect */
protocol.USERNAME_MASK = 0x80
protocol.PASSWORD_MASK = 0x40
protocol.WILL_RETAIN_MASK = 0x20
protocol.WILL_QOS_MASK = 0x18
protocol.WILL_QOS_SHIFT = 3
protocol.WILL_FLAG_MASK = 0x04
protocol.CLEAN_SESSION_MASK = 0x02
protocol.CONNECT_HEADER = Buffer.from([protocol.codes['connect'] << protocol.CMD_SHIFT])

function genHeader (type) {
  return [0, 1, 2].map(function (qos) {
    return [0, 1].map(function (dup) {
      return [0, 1].map(function (retain) {
        var buf = new Buffer(1)
        buf.writeUInt8(
          protocol.codes[type] << protocol.CMD_SHIFT |
          (dup ? protocol.DUP_MASK : 0) |
          qos << protocol.QOS_SHIFT | retain, 0, true)
        return buf
      })
    })
  })
}

/* Publish */
protocol.PUBLISH_HEADER = genHeader('publish')

/* Subscribe */
protocol.SUBSCRIBE_HEADER = genHeader('subscribe')

/* Unsubscribe */
protocol.UNSUBSCRIBE_HEADER = genHeader('unsubscribe')

/* Confirmations */
protocol.ACKS = {
  unsuback: genHeader('unsuback'),
  puback: genHeader('puback'),
  pubcomp: genHeader('pubcomp'),
  pubrel: genHeader('pubrel'),
  pubrec: genHeader('pubrec')
}

protocol.SUBACK_HEADER = Buffer.from([protocol.codes['suback'] << protocol.CMD_SHIFT])

/* Protocol versions */
protocol.VERSION3 = Buffer.from([3])
protocol.VERSION4 = Buffer.from([4])

/* QoS */
protocol.QOS = [0, 1, 2].map(function (qos) {
  return Buffer.from([qos])
})

/* Empty packets */
protocol.EMPTY = {
  pingreq: Buffer.from([protocol.codes['pingreq'] << 4, 0]),
  pingresp: Buffer.from([protocol.codes['pingresp'] << 4, 0]),
  disconnect: Buffer.from([protocol.codes['disconnect'] << 4, 0])
}


/***/ }),

/***/ "./node_modules/mqtt-packet/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/mqtt-packet/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer
var writeToStream = __webpack_require__(/*! ./writeToStream */ "./node_modules/mqtt-packet/writeToStream.js")
var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")

function generate (packet) {
  var stream = new Accumulator()
  writeToStream(packet, stream)
  return stream.concat()
}

function Accumulator () {
  this._array = new Array(20)
  this._i = 0
}

inherits(Accumulator, EE)

Accumulator.prototype.write = function (chunk) {
  this._array[this._i++] = chunk
  return true
}

Accumulator.prototype.concat = function () {
  var length = 0
  var lengths = new Array(this._array.length)
  var list = this._array
  var pos = 0
  var i
  var result

  for (i = 0; i < list.length && list[i] !== undefined; i++) {
    if (typeof list[i] !== 'string') lengths[i] = list[i].length
    else lengths[i] = Buffer.byteLength(list[i])

    length += lengths[i]
  }

  result = Buffer.allocUnsafe(length)

  for (i = 0; i < list.length && list[i] !== undefined; i++) {
    if (typeof list[i] !== 'string') {
      list[i].copy(result, pos)
      pos += lengths[i]
    } else {
      result.write(list[i], pos)
      pos += lengths[i]
    }
  }

  return result
}

module.exports = generate


/***/ }),

/***/ "./node_modules/mqtt-packet/mqtt.js":
/*!******************************************!*\
  !*** ./node_modules/mqtt-packet/mqtt.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parser = __webpack_require__(/*! ./parser */ "./node_modules/mqtt-packet/parser.js")
exports.generate = __webpack_require__(/*! ./generate */ "./node_modules/mqtt-packet/generate.js")
exports.writeToStream = __webpack_require__(/*! ./writeToStream */ "./node_modules/mqtt-packet/writeToStream.js")


/***/ }),

/***/ "./node_modules/mqtt-packet/numbers.js":
/*!*********************************************!*\
  !*** ./node_modules/mqtt-packet/numbers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer
var max = 65536
var cache = {}

function generateBuffer (i) {
  var buffer = Buffer.allocUnsafe(2)
  buffer.writeUInt8(i >> 8, 0)
  buffer.writeUInt8(i & 0x00FF, 0 + 1)

  return buffer
}

function generateCache () {
  for (var i = 0; i < max; i++) {
    cache[i] = generateBuffer(i)
  }
}

module.exports = {
  cache: cache,
  generateCache: generateCache,
  generateNumber: generateBuffer
}


/***/ }),

/***/ "./node_modules/mqtt-packet/packet.js":
/*!********************************************!*\
  !*** ./node_modules/mqtt-packet/packet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


function Packet () {
  this.cmd = null
  this.retain = false
  this.qos = 0
  this.dup = false
  this.length = -1
  this.topic = null
  this.payload = null
}

module.exports = Packet


/***/ }),

/***/ "./node_modules/mqtt-packet/parser.js":
/*!********************************************!*\
  !*** ./node_modules/mqtt-packet/parser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bl = __webpack_require__(/*! bl */ "./node_modules/bl/bl.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter
var Packet = __webpack_require__(/*! ./packet */ "./node_modules/mqtt-packet/packet.js")
var constants = __webpack_require__(/*! ./constants */ "./node_modules/mqtt-packet/constants.js")

function Parser () {
  if (!(this instanceof Parser)) return new Parser()

  this._states = [
    '_parseHeader',
    '_parseLength',
    '_parsePayload',
    '_newPacket'
  ]

  this._resetState()
}

inherits(Parser, EE)

Parser.prototype._resetState = function () {
  this.packet = new Packet()
  this.error = null
  this._list = bl()
  this._stateCounter = 0
}

Parser.prototype.parse = function (buf) {
  if (this.error) this._resetState()

  this._list.append(buf)

  while ((this.packet.length !== -1 || this._list.length > 0) &&
         this[this._states[this._stateCounter]]() &&
         !this.error) {
    this._stateCounter++

    if (this._stateCounter >= this._states.length) this._stateCounter = 0
  }

  return this._list.length
}

Parser.prototype._parseHeader = function () {
  // There is at least one byte in the buffer
  var zero = this._list.readUInt8(0)
  this.packet.cmd = constants.types[zero >> constants.CMD_SHIFT]
  this.packet.retain = (zero & constants.RETAIN_MASK) !== 0
  this.packet.qos = (zero >> constants.QOS_SHIFT) & constants.QOS_MASK
  this.packet.dup = (zero & constants.DUP_MASK) !== 0

  this._list.consume(1)

  return true
}

Parser.prototype._parseLength = function () {
  // There is at least one byte in the list
  var bytes = 0
  var mul = 1
  var length = 0
  var result = true
  var current

  while (bytes < 5) {
    current = this._list.readUInt8(bytes++)
    length += mul * (current & constants.LENGTH_MASK)
    mul *= 0x80

    if ((current & constants.LENGTH_FIN_MASK) === 0) break
    if (this._list.length <= bytes) {
      result = false
      break
    }
  }

  if (result) {
    this.packet.length = length
    this._list.consume(bytes)
  }

  return result
}

Parser.prototype._parsePayload = function () {
  var result = false

  // Do we have a payload? Do we have enough data to complete the payload?
  // PINGs have no payload
  if (this.packet.length === 0 || this._list.length >= this.packet.length) {
    this._pos = 0

    switch (this.packet.cmd) {
      case 'connect':
        this._parseConnect()
        break
      case 'connack':
        this._parseConnack()
        break
      case 'publish':
        this._parsePublish()
        break
      case 'puback':
      case 'pubrec':
      case 'pubrel':
      case 'pubcomp':
        this._parseMessageId()
        break
      case 'subscribe':
        this._parseSubscribe()
        break
      case 'suback':
        this._parseSuback()
        break
      case 'unsubscribe':
        this._parseUnsubscribe()
        break
      case 'unsuback':
        this._parseUnsuback()
        break
      case 'pingreq':
      case 'pingresp':
      case 'disconnect':
        // These are empty, nothing to do
        break
      default:
        this._emitError(new Error('Not supported'))
    }

    result = true
  }

  return result
}

Parser.prototype._parseConnect = function () {
  var protocolId // Protocol ID
  var clientId // Client ID
  var topic // Will topic
  var payload // Will payload
  var password // Password
  var username // Username
  var flags = {}
  var packet = this.packet

  // Parse protocolId
  protocolId = this._parseString()

  if (protocolId === null) return this._emitError(new Error('Cannot parse protocolId'))
  if (protocolId !== 'MQTT' && protocolId !== 'MQIsdp') {
    return this._emitError(new Error('Invalid protocolId'))
  }

  packet.protocolId = protocolId

  // Parse constants version number
  if (this._pos >= this._list.length) return this._emitError(new Error('Packet too short'))

  packet.protocolVersion = this._list.readUInt8(this._pos)

  if (packet.protocolVersion !== 3 && packet.protocolVersion !== 4) {
    return this._emitError(new Error('Invalid protocol version'))
  }

  this._pos++

  if (this._pos >= this._list.length) {
    return this._emitError(new Error('Packet too short'))
  }

  // Parse connect flags
  flags.username = (this._list.readUInt8(this._pos) & constants.USERNAME_MASK)
  flags.password = (this._list.readUInt8(this._pos) & constants.PASSWORD_MASK)
  flags.will = (this._list.readUInt8(this._pos) & constants.WILL_FLAG_MASK)

  if (flags.will) {
    packet.will = {}
    packet.will.retain = (this._list.readUInt8(this._pos) & constants.WILL_RETAIN_MASK) !== 0
    packet.will.qos = (this._list.readUInt8(this._pos) &
                          constants.WILL_QOS_MASK) >> constants.WILL_QOS_SHIFT
  }

  packet.clean = (this._list.readUInt8(this._pos) & constants.CLEAN_SESSION_MASK) !== 0
  this._pos++

  // Parse keepalive
  packet.keepalive = this._parseNum()
  if (packet.keepalive === -1) return this._emitError(new Error('Packet too short'))

  // Parse clientId
  clientId = this._parseString()
  if (clientId === null) return this._emitError(new Error('Packet too short'))
  packet.clientId = clientId

  if (flags.will) {
    // Parse will topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse will topic'))
    packet.will.topic = topic

    // Parse will payload
    payload = this._parseBuffer()
    if (payload === null) return this._emitError(new Error('Cannot parse will payload'))
    packet.will.payload = payload
  }

  // Parse username
  if (flags.username) {
    username = this._parseString()
    if (username === null) return this._emitError(new Error('Cannot parse username'))
    packet.username = username
  }

  // Parse password
  if (flags.password) {
    password = this._parseBuffer()
    if (password === null) return this._emitError(new Error('Cannot parse password'))
    packet.password = password
  }

  return packet
}

Parser.prototype._parseConnack = function () {
  var packet = this.packet

  if (this._list.length < 2) return null

  packet.sessionPresent = !!(this._list.readUInt8(this._pos++) & constants.SESSIONPRESENT_MASK)
  packet.returnCode = this._list.readUInt8(this._pos)

  if (packet.returnCode === -1) return this._emitError(new Error('Cannot parse return code'))
}

Parser.prototype._parsePublish = function () {
  var packet = this.packet
  packet.topic = this._parseString()

  if (packet.topic === null) return this._emitError(new Error('Cannot parse topic'))

  // Parse messageId
  if (packet.qos > 0) if (!this._parseMessageId()) { return }

  packet.payload = this._list.slice(this._pos, packet.length)
}

Parser.prototype._parseSubscribe = function () {
  var packet = this.packet
  var topic
  var qos

  if (packet.qos !== 1) {
    return this._emitError(new Error('Wrong subscribe header'))
  }

  packet.subscriptions = []

  if (!this._parseMessageId()) { return }

  while (this._pos < packet.length) {
    // Parse topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse topic'))

    qos = this._list.readUInt8(this._pos++)

    // Push pair to subscriptions
    packet.subscriptions.push({ topic: topic, qos: qos })
  }
}

Parser.prototype._parseSuback = function () {
  this.packet.granted = []

  if (!this._parseMessageId()) { return }

  // Parse granted QoSes
  while (this._pos < this.packet.length) {
    this.packet.granted.push(this._list.readUInt8(this._pos++))
  }
}

Parser.prototype._parseUnsubscribe = function () {
  var packet = this.packet

  packet.unsubscriptions = []

  // Parse messageId
  if (!this._parseMessageId()) { return }

  while (this._pos < packet.length) {
    var topic

    // Parse topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse topic'))

    // Push topic to unsubscriptions
    packet.unsubscriptions.push(topic)
  }
}

Parser.prototype._parseUnsuback = function () {
  if (!this._parseMessageId()) return this._emitError(new Error('Cannot parse messageId'))
}

Parser.prototype._parseMessageId = function () {
  var packet = this.packet

  packet.messageId = this._parseNum()

  if (packet.messageId === null) {
    this._emitError(new Error('Cannot parse messageId'))
    return false
  }

  return true
}

Parser.prototype._parseString = function (maybeBuffer) {
  var length = this._parseNum()
  var result
  var end = length + this._pos

  if (length === -1 || end > this._list.length || end > this.packet.length) return null

  result = this._list.toString('utf8', this._pos, end)
  this._pos += length

  return result
}

Parser.prototype._parseBuffer = function () {
  var length = this._parseNum()
  var result
  var end = length + this._pos

  if (length === -1 || end > this._list.length || end > this.packet.length) return null

  result = this._list.slice(this._pos, end)

  this._pos += length

  return result
}

Parser.prototype._parseNum = function () {
  if (this._list.length - this._pos < 2) return -1

  var result = this._list.readUInt16BE(this._pos)
  this._pos += 2

  return result
}

Parser.prototype._newPacket = function () {
  if (this.packet) {
    this._list.consume(this.packet.length)
    this.emit('packet', this.packet)
  }

  this.packet = new Packet()

  return true
}

Parser.prototype._emitError = function (err) {
  this.error = err
  this.emit('error', err)
}

module.exports = Parser


/***/ }),

/***/ "./node_modules/mqtt-packet/writeToStream.js":
/*!***************************************************!*\
  !*** ./node_modules/mqtt-packet/writeToStream.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocol = __webpack_require__(/*! ./constants */ "./node_modules/mqtt-packet/constants.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer
var empty = Buffer.allocUnsafe(0)
var zeroBuf = Buffer.from([0])
var numbers = __webpack_require__(/*! ./numbers */ "./node_modules/mqtt-packet/numbers.js")
var nextTick = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js").nextTick

var numCache = numbers.cache
var generateNumber = numbers.generateNumber
var generateCache = numbers.generateCache
var writeNumber = writeNumberCached
var toGenerate = true

function generate (packet, stream) {
  if (stream.cork) {
    stream.cork()
    nextTick(uncork, stream)
  }

  if (toGenerate) {
    toGenerate = false
    generateCache()
  }

  switch (packet.cmd) {
    case 'connect':
      return connect(packet, stream)
    case 'connack':
      return connack(packet, stream)
    case 'publish':
      return publish(packet, stream)
    case 'puback':
    case 'pubrec':
    case 'pubrel':
    case 'pubcomp':
    case 'unsuback':
      return confirmation(packet, stream)
    case 'subscribe':
      return subscribe(packet, stream)
    case 'suback':
      return suback(packet, stream)
    case 'unsubscribe':
      return unsubscribe(packet, stream)
    case 'pingreq':
    case 'pingresp':
    case 'disconnect':
      return emptyPacket(packet, stream)
    default:
      stream.emit('error', new Error('Unknown command'))
      return false
  }
}
/**
 * Controls numbers cache.
 * Set to "false" to allocate buffers on-the-flight instead of pre-generated cache
 */
Object.defineProperty(generate, 'cacheNumbers', {
  get: function () {
    return writeNumber === writeNumberCached
  },
  set: function (value) {
    if (value) {
      if (!numCache || Object.keys(numCache).length === 0) toGenerate = true
      writeNumber = writeNumberCached
    } else {
      toGenerate = false
      writeNumber = writeNumberGenerated
    }
  }
})

function uncork (stream) {
  stream.uncork()
}

function connect (opts, stream) {
  var settings = opts || {}
  var protocolId = settings.protocolId || 'MQTT'
  var protocolVersion = settings.protocolVersion || 4
  var will = settings.will
  var clean = settings.clean
  var keepalive = settings.keepalive || 0
  var clientId = settings.clientId || ''
  var username = settings.username
  var password = settings.password

  if (clean === undefined) clean = true

  var length = 0

  // Must be a string and non-falsy
  if (!protocolId ||
     (typeof protocolId !== 'string' && !Buffer.isBuffer(protocolId))) {
    stream.emit('error', new Error('Invalid protocolId'))
    return false
  } else length += protocolId.length + 2

  // Must be 3 or 4
  if (protocolVersion !== 3 && protocolVersion !== 4) {
    stream.emit('error', new Error('Invalid protocol version'))
    return false
  } else length += 1

  // ClientId might be omitted in 3.1.1, but only if cleanSession is set to 1
  if ((typeof clientId === 'string' || Buffer.isBuffer(clientId)) &&
     (clientId || protocolVersion === 4) && (clientId || clean)) {
    length += clientId.length + 2
  } else {
    if (protocolVersion < 4) {
      stream.emit('error', new Error('clientId must be supplied before 3.1.1'))
      return false
    }
    if ((clean * 1) === 0) {
      stream.emit('error', new Error('clientId must be given if cleanSession set to 0'))
      return false
    }
  }

  // Must be a two byte number
  if (typeof keepalive !== 'number' ||
      keepalive < 0 ||
      keepalive > 65535 ||
      keepalive % 1 !== 0) {
    stream.emit('error', new Error('Invalid keepalive'))
    return false
  } else length += 2

  // Connect flags
  length += 1

  // If will exists...
  if (will) {
    // It must be an object
    if (typeof will !== 'object') {
      stream.emit('error', new Error('Invalid will'))
      return false
    }
    // It must have topic typeof string
    if (!will.topic || typeof will.topic !== 'string') {
      stream.emit('error', new Error('Invalid will topic'))
      return false
    } else {
      length += Buffer.byteLength(will.topic) + 2
    }

    // Payload
    if (will.payload && will.payload) {
      if (will.payload.length >= 0) {
        if (typeof will.payload === 'string') {
          length += Buffer.byteLength(will.payload) + 2
        } else {
          length += will.payload.length + 2
        }
      } else {
        stream.emit('error', new Error('Invalid will payload'))
        return false
      }
    } else {
      length += 2
    }
  }

  // Username
  var providedUsername = false
  if (username != null) {
    if (isStringOrBuffer(username)) {
      providedUsername = true
      length += Buffer.byteLength(username) + 2
    } else {
      stream.emit('error', new Error('Invalid username'))
      return false
    }
  }

  // Password
  if (password != null) {
    if (!providedUsername) {
      stream.emit('error', new Error('Username is required to use password'))
      return false
    }

    if (isStringOrBuffer(password)) {
      length += byteLength(password) + 2
    } else {
      stream.emit('error', new Error('Invalid password'))
      return false
    }
  }

  // Generate header
  stream.write(protocol.CONNECT_HEADER)

  // Generate length
  writeLength(stream, length)

  // Generate protocol ID
  writeStringOrBuffer(stream, protocolId)
  stream.write(
    protocolVersion === 4 ? protocol.VERSION4 : protocol.VERSION3
  )

  // Connect flags
  var flags = 0
  flags |= (username != null) ? protocol.USERNAME_MASK : 0
  flags |= (password != null) ? protocol.PASSWORD_MASK : 0
  flags |= (will && will.retain) ? protocol.WILL_RETAIN_MASK : 0
  flags |= (will && will.qos) ? will.qos << protocol.WILL_QOS_SHIFT : 0
  flags |= will ? protocol.WILL_FLAG_MASK : 0
  flags |= clean ? protocol.CLEAN_SESSION_MASK : 0

  stream.write(Buffer.from([flags]))

  // Keepalive
  writeNumber(stream, keepalive)

  // Client ID
  writeStringOrBuffer(stream, clientId)

  // Will
  if (will) {
    writeString(stream, will.topic)
    writeStringOrBuffer(stream, will.payload)
  }

  // Username and password
  if (username != null) {
    writeStringOrBuffer(stream, username)
  }
  if (password != null) {
    writeStringOrBuffer(stream, password)
  }
  // This is a small packet that happens only once on a stream
  // We assume the stream is always free to receive more data after this
  return true
}

function connack (opts, stream) {
  var settings = opts || {}
  var rc = settings.returnCode

  // Check return code
  if (typeof rc !== 'number') {
    stream.emit('error', new Error('Invalid return code'))
    return false
  }

  stream.write(protocol.CONNACK_HEADER)
  writeLength(stream, 2)
  stream.write(opts.sessionPresent ? protocol.SESSIONPRESENT_HEADER : zeroBuf)

  return stream.write(Buffer.from([rc]))
}

function publish (opts, stream) {
  var settings = opts || {}
  var qos = settings.qos || 0
  var retain = settings.retain ? protocol.RETAIN_MASK : 0
  var topic = settings.topic
  var payload = settings.payload || empty
  var id = settings.messageId

  var length = 0

  // Topic must be a non-empty string or Buffer
  if (typeof topic === 'string') length += Buffer.byteLength(topic) + 2
  else if (Buffer.isBuffer(topic)) length += topic.length + 2
  else {
    stream.emit('error', new Error('Invalid topic'))
    return false
  }

  // Get the payload length
  if (!Buffer.isBuffer(payload)) length += Buffer.byteLength(payload)
  else length += payload.length

  // Message ID must a number if qos > 0
  if (qos && typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else if (qos) length += 2

  // Header
  stream.write(protocol.PUBLISH_HEADER[qos][opts.dup ? 1 : 0][retain ? 1 : 0])

  // Remaining length
  writeLength(stream, length)

  // Topic
  writeNumber(stream, byteLength(topic))
  stream.write(topic)

  // Message ID
  if (qos > 0) writeNumber(stream, id)

  // Payload
  return stream.write(payload)
}

/* Puback, pubrec, pubrel and pubcomp */
function confirmation (opts, stream) {
  var settings = opts || {}
  var type = settings.cmd || 'puback'
  var id = settings.messageId
  var dup = (settings.dup && type === 'pubrel') ? protocol.DUP_MASK : 0
  var qos = 0

  if (type === 'pubrel') qos = 1

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  }

  // Header
  stream.write(protocol.ACKS[type][qos][dup][0])

  // Length
  writeLength(stream, 2)

  // Message ID
  return writeNumber(stream, id)
}

function subscribe (opts, stream) {
  var settings = opts || {}
  var dup = settings.dup ? protocol.DUP_MASK : 0
  var id = settings.messageId
  var subs = settings.subscriptions

  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else length += 2

  // Check subscriptions
  if (typeof subs === 'object' && subs.length) {
    for (var i = 0; i < subs.length; i += 1) {
      var itopic = subs[i].topic
      var iqos = subs[i].qos

      if (typeof itopic !== 'string') {
        stream.emit('error', new Error('Invalid subscriptions - invalid topic'))
        return false
      }
      if (typeof iqos !== 'number') {
        stream.emit('error', new Error('Invalid subscriptions - invalid qos'))
        return false
      }

      length += Buffer.byteLength(itopic) + 2 + 1
    }
  } else {
    stream.emit('error', new Error('Invalid subscriptions'))
    return false
  }

  // Generate header
  stream.write(protocol.SUBSCRIBE_HEADER[1][dup ? 1 : 0][0])

  // Generate length
  writeLength(stream, length)

  // Generate message ID
  writeNumber(stream, id)

  var result = true

  // Generate subs
  for (var j = 0; j < subs.length; j++) {
    var sub = subs[j]
    var jtopic = sub.topic
    var jqos = sub.qos

    // Write topic string
    writeString(stream, jtopic)

    // Write qos
    result = stream.write(protocol.QOS[jqos])
  }

  return result
}

function suback (opts, stream) {
  var settings = opts || {}
  var id = settings.messageId
  var granted = settings.granted

  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else length += 2

  // Check granted qos vector
  if (typeof granted === 'object' && granted.length) {
    for (var i = 0; i < granted.length; i += 1) {
      if (typeof granted[i] !== 'number') {
        stream.emit('error', new Error('Invalid qos vector'))
        return false
      }
      length += 1
    }
  } else {
    stream.emit('error', new Error('Invalid qos vector'))
    return false
  }

  // header
  stream.write(protocol.SUBACK_HEADER)

  // Length
  writeLength(stream, length)

  // Message ID
  writeNumber(stream, id)

  return stream.write(Buffer.from(granted))
}

function unsubscribe (opts, stream) {
  var settings = opts || {}
  var id = settings.messageId
  var dup = settings.dup ? protocol.DUP_MASK : 0
  var unsubs = settings.unsubscriptions

  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else {
    length += 2
  }
  // Check unsubs
  if (typeof unsubs === 'object' && unsubs.length) {
    for (var i = 0; i < unsubs.length; i += 1) {
      if (typeof unsubs[i] !== 'string') {
        stream.emit('error', new Error('Invalid unsubscriptions'))
        return false
      }
      length += Buffer.byteLength(unsubs[i]) + 2
    }
  } else {
    stream.emit('error', new Error('Invalid unsubscriptions'))
    return false
  }

  // Header
  stream.write(protocol.UNSUBSCRIBE_HEADER[1][dup ? 1 : 0][0])

  // Length
  writeLength(stream, length)

  // Message ID
  writeNumber(stream, id)

  // Unsubs
  var result = true
  for (var j = 0; j < unsubs.length; j++) {
    result = writeString(stream, unsubs[j])
  }

  return result
}

function emptyPacket (opts, stream) {
  return stream.write(protocol.EMPTY[opts.cmd])
}

/**
 * calcLengthLength - calculate the length of the remaining
 * length field
 *
 * @api private
 */
function calcLengthLength (length) {
  if (length >= 0 && length < 128) return 1
  else if (length >= 128 && length < 16384) return 2
  else if (length >= 16384 && length < 2097152) return 3
  else if (length >= 2097152 && length < 268435456) return 4
  else return 0
}

function genBufLength (length) {
  var digit = 0
  var pos = 0
  var buffer = Buffer.allocUnsafe(calcLengthLength(length))

  do {
    digit = length % 128 | 0
    length = length / 128 | 0
    if (length > 0) digit = digit | 0x80

    buffer.writeUInt8(digit, pos++)
  } while (length > 0)

  return buffer
}

/**
 * writeLength - write an MQTT style length field to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <Number> length - length (>0)
 * @returns <Number> number of bytes written
 *
 * @api private
 */

var lengthCache = {}
function writeLength (stream, length) {
  var buffer = lengthCache[length]

  if (!buffer) {
    buffer = genBufLength(length)
    if (length < 16384) lengthCache[length] = buffer
  }

  stream.write(buffer)
}

/**
 * writeString - write a utf8 string to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> string - string to write
 * @return <Number> number of bytes written
 *
 * @api private
 */

function writeString (stream, string) {
  var strlen = Buffer.byteLength(string)
  writeNumber(stream, strlen)

  stream.write(string, 'utf8')
}

/**
 * writeNumber - write a two byte number to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> number - number to write
 * @return <Number> number of bytes written
 *
 * @api private
 */
function writeNumberCached (stream, number) {
  return stream.write(numCache[number])
}
function writeNumberGenerated (stream, number) {
  return stream.write(generateNumber(number))
}

/**
 * writeStringOrBuffer - write a String or Buffer with the its length prefix
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> toWrite - String or Buffer
 * @return <Number> number of bytes written
 */
function writeStringOrBuffer (stream, toWrite) {
  if (typeof toWrite === 'string') {
    writeString(stream, toWrite)
  } else if (toWrite) {
    writeNumber(stream, toWrite.length)
    stream.write(toWrite)
  } else writeNumber(stream, 0)
}

function byteLength (bufOrString) {
  if (!bufOrString) return 0
  else if (bufOrString instanceof Buffer) return bufOrString.length
  else return Buffer.byteLength(bufOrString)
}

function isStringOrBuffer (field) {
  return typeof field === 'string' || field instanceof Buffer
}

module.exports = generate


/***/ }),

/***/ "./node_modules/mqtt/lib/client.js":
/*!*****************************************!*\
  !*** ./node_modules/mqtt/lib/client.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

/**
 * Module dependencies
 */
var events = __webpack_require__(/*! events */ "./node_modules/events/events.js")
var Store = __webpack_require__(/*! ./store */ "./node_modules/mqtt/lib/store.js")
var eos = __webpack_require__(/*! end-of-stream */ "./node_modules/end-of-stream/index.js")
var mqttPacket = __webpack_require__(/*! mqtt-packet */ "./node_modules/mqtt-packet/mqtt.js")
var Writable = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js").Writable
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var reInterval = __webpack_require__(/*! reinterval */ "./node_modules/reinterval/index.js")
var validations = __webpack_require__(/*! ./validations */ "./node_modules/mqtt/lib/validations.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var setImmediate = global.setImmediate || function (callback) {
  // works in node v0.8
  process.nextTick(callback)
}
var defaultConnectOptions = {
  keepalive: 60,
  reschedulePings: true,
  protocolId: 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  clean: true,
  resubscribe: true
}

function defaultId () {
  return 'mqttjs_' + Math.random().toString(16).substr(2, 8)
}

function sendPacket (client, packet, cb) {
  client.emit('packetsend', packet)

  var result = mqttPacket.writeToStream(packet, client.stream)

  if (!result && cb) {
    client.stream.once('drain', cb)
  } else if (cb) {
    cb()
  }
}

function flush (queue) {
  if (queue) {
    Object.keys(queue).forEach(function (messageId) {
      if (typeof queue[messageId] === 'function') {
        queue[messageId](new Error('Connection closed'))
        delete queue[messageId]
      }
    })
  }
}

function storeAndSend (client, packet, cb) {
  client.outgoingStore.put(packet, function storedPacket (err) {
    if (err) {
      return cb && cb(err)
    }
    sendPacket(client, packet, cb)
  })
}

function nop () {}

/**
 * MqttClient constructor
 *
 * @param {Stream} stream - stream
 * @param {Object} [options] - connection options
 * (see Connection#connect)
 */
function MqttClient (streamBuilder, options) {
  var k
  var that = this

  if (!(this instanceof MqttClient)) {
    return new MqttClient(streamBuilder, options)
  }

  this.options = options || {}

  // Defaults
  for (k in defaultConnectOptions) {
    if (typeof this.options[k] === 'undefined') {
      this.options[k] = defaultConnectOptions[k]
    } else {
      this.options[k] = options[k]
    }
  }

  this.options.clientId = (typeof this.options.clientId === 'string') ? this.options.clientId : defaultId()

  this.streamBuilder = streamBuilder

  // Inflight message storages
  this.outgoingStore = this.options.outgoingStore || new Store()
  this.incomingStore = this.options.incomingStore || new Store()

  // Should QoS zero messages be queued when the connection is broken?
  this.queueQoSZero = this.options.queueQoSZero === undefined ? true : this.options.queueQoSZero

  // map of subscribed topics to support reconnection
  this._resubscribeTopics = {}

  // map of a subscribe messageId and a topic
  this.messageIdToTopic = {}

  // Ping timer, setup in _setupPingTimer
  this.pingTimer = null
  // Is the client connected?
  this.connected = false
  // Are we disconnecting?
  this.disconnecting = false
  // Packet queue
  this.queue = []
  // connack timer
  this.connackTimer = null
  // Reconnect timer
  this.reconnectTimer = null
  /**
   * MessageIDs starting with 1
   * ensure that nextId is min. 1, see https://github.com/mqttjs/MQTT.js/issues/810
   */
  this.nextId = Math.max(1, Math.floor(Math.random() * 65535))

  // Inflight callbacks
  this.outgoing = {}

  // Mark connected on connect
  this.on('connect', function () {
    if (this.disconnected) {
      return
    }

    this.connected = true
    var outStore = this.outgoingStore.createStream()

    this.once('close', remove)
    outStore.on('end', function () {
      that.removeListener('close', remove)
    })
    outStore.on('error', function (err) {
      that.removeListener('close', remove)
      that.emit('error', err)
    })

    function remove () {
      outStore.destroy()
      outStore = null
    }

    function storeDeliver () {
      // edge case, we wrapped this twice
      if (!outStore) {
        return
      }

      var packet = outStore.read(1)
      var cb

      if (!packet) {
        // read when data is available in the future
        outStore.once('readable', storeDeliver)
        return
      }

      // Avoid unnecessary stream read operations when disconnected
      if (!that.disconnecting && !that.reconnectTimer) {
        cb = that.outgoing[packet.messageId]
        that.outgoing[packet.messageId] = function (err, status) {
          // Ensure that the original callback passed in to publish gets invoked
          if (cb) {
            cb(err, status)
          }

          storeDeliver()
        }
        that._sendPacket(packet)
      } else if (outStore.destroy) {
        outStore.destroy()
      }
    }

    // start flowing
    storeDeliver()
  })

  // Mark disconnected on stream close
  this.on('close', function () {
    this.connected = false
    clearTimeout(this.connackTimer)
  })

  // Setup ping timer
  this.on('connect', this._setupPingTimer)

  // Send queued packets
  this.on('connect', function () {
    var queue = this.queue

    function deliver () {
      var entry = queue.shift()
      var packet = null

      if (!entry) {
        return
      }

      packet = entry.packet

      that._sendPacket(
        packet,
        function (err) {
          if (entry.cb) {
            entry.cb(err)
          }
          deliver()
        }
      )
    }

    deliver()
  })

  var firstConnection = true
  // resubscribe
  this.on('connect', function () {
    if (!firstConnection &&
        this.options.clean &&
        Object.keys(this._resubscribeTopics).length > 0) {
      if (this.options.resubscribe) {
        this._resubscribeTopics.resubscribe = true
        this.subscribe(this._resubscribeTopics)
      } else {
        this._resubscribeTopics = {}
      }
    }

    firstConnection = false
  })

  // Clear ping timer
  this.on('close', function () {
    if (that.pingTimer !== null) {
      that.pingTimer.clear()
      that.pingTimer = null
    }
  })

  // Setup reconnect timer on disconnect
  this.on('close', this._setupReconnect)

  events.EventEmitter.call(this)

  this._setupStream()
}
inherits(MqttClient, events.EventEmitter)

/**
 * setup the event handlers in the inner stream.
 *
 * @api private
 */
MqttClient.prototype._setupStream = function () {
  var connectPacket
  var that = this
  var writable = new Writable()
  var parser = mqttPacket.parser(this.options)
  var completeParse = null
  var packets = []

  this._clearReconnect()

  this.stream = this.streamBuilder(this)

  parser.on('packet', function (packet) {
    packets.push(packet)
  })

  function nextTickWork () {
    process.nextTick(work)
  }

  function work () {
    var packet = packets.shift()
    var done = completeParse

    if (packet) {
      that._handlePacket(packet, nextTickWork)
    } else {
      completeParse = null
      done()
    }
  }

  writable._write = function (buf, enc, done) {
    completeParse = done
    parser.parse(buf)
    work()
  }

  this.stream.pipe(writable)

  // Suppress connection errors
  this.stream.on('error', nop)

  // Echo stream close
  eos(this.stream, this.emit.bind(this, 'close'))

  // Send a connect packet
  connectPacket = Object.create(this.options)
  connectPacket.cmd = 'connect'
  // avoid message queue
  sendPacket(this, connectPacket)

  // Echo connection errors
  parser.on('error', this.emit.bind(this, 'error'))

  // many drain listeners are needed for qos 1 callbacks if the connection is intermittent
  this.stream.setMaxListeners(1000)

  clearTimeout(this.connackTimer)
  this.connackTimer = setTimeout(function () {
    that._cleanUp(true)
  }, this.options.connectTimeout)
}

MqttClient.prototype._handlePacket = function (packet, done) {
  this.emit('packetreceive', packet)

  switch (packet.cmd) {
    case 'publish':
      this._handlePublish(packet, done)
      break
    case 'puback':
    case 'pubrec':
    case 'pubcomp':
    case 'suback':
    case 'unsuback':
      this._handleAck(packet)
      done()
      break
    case 'pubrel':
      this._handlePubrel(packet, done)
      break
    case 'connack':
      this._handleConnack(packet)
      done()
      break
    case 'pingresp':
      this._handlePingresp(packet)
      done()
      break
    default:
      // do nothing
      // maybe we should do an error handling
      // or just log it
      break
  }
}

MqttClient.prototype._checkDisconnecting = function (callback) {
  if (this.disconnecting) {
    if (callback) {
      callback(new Error('client disconnecting'))
    } else {
      this.emit('error', new Error('client disconnecting'))
    }
  }
  return this.disconnecting
}

/**
 * publish - publish <message> to <topic>
 *
 * @param {String} topic - topic to publish to
 * @param {String, Buffer} message - message to publish
 * @param {Object} [opts] - publish options, includes:
 *    {Number} qos - qos level to publish on
 *    {Boolean} retain - whether or not to retain the message
 *    {Boolean} dup - whether or not mark a message as duplicate
 * @param {Function} [callback] - function(err){}
 *    called when publish succeeds or fails
 * @returns {MqttClient} this - for chaining
 * @api public
 *
 * @example client.publish('topic', 'message');
 * @example
 *     client.publish('topic', 'message', {qos: 1, retain: true, dup: true});
 * @example client.publish('topic', 'message', console.log);
 */
MqttClient.prototype.publish = function (topic, message, opts, callback) {
  var packet

  // .publish(topic, payload, cb);
  if (typeof opts === 'function') {
    callback = opts
    opts = null
  }

  // default opts
  var defaultOpts = {qos: 0, retain: false, dup: false}
  opts = xtend(defaultOpts, opts)

  if (this._checkDisconnecting(callback)) {
    return this
  }

  packet = {
    cmd: 'publish',
    topic: topic,
    payload: message,
    qos: opts.qos,
    retain: opts.retain,
    messageId: this._nextId(),
    dup: opts.dup
  }

  switch (opts.qos) {
    case 1:
    case 2:

      // Add to callbacks
      this.outgoing[packet.messageId] = callback || nop
      this._sendPacket(packet)
      break
    default:
      this._sendPacket(packet, callback)
      break
  }

  return this
}

/**
 * subscribe - subscribe to <topic>
 *
 * @param {String, Array, Object} topic - topic(s) to subscribe to, supports objects in the form {'topic': qos}
 * @param {Object} [opts] - optional subscription options, includes:
 *    {Number} qos - subscribe qos level
 * @param {Function} [callback] - function(err, granted){} where:
 *    {Error} err - subscription error (none at the moment!)
 *    {Array} granted - array of {topic: 't', qos: 0}
 * @returns {MqttClient} this - for chaining
 * @api public
 * @example client.subscribe('topic');
 * @example client.subscribe('topic', {qos: 1});
 * @example client.subscribe({'topic': 0, 'topic2': 1}, console.log);
 * @example client.subscribe('topic', console.log);
 */
MqttClient.prototype.subscribe = function () {
  var packet
  var args = Array.prototype.slice.call(arguments)
  var subs = []
  var obj = args.shift()
  var resubscribe = obj.resubscribe
  var callback = args.pop() || nop
  var opts = args.pop()
  var invalidTopic
  var that = this

  delete obj.resubscribe

  if (typeof obj === 'string') {
    obj = [obj]
  }

  if (typeof callback !== 'function') {
    opts = callback
    callback = nop
  }

  invalidTopic = validations.validateTopics(obj)
  if (invalidTopic !== null) {
    setImmediate(callback, new Error('Invalid topic ' + invalidTopic))
    return this
  }

  if (this._checkDisconnecting(callback)) {
    return this
  }

  var defaultOpts = { qos: 0 }
  opts = xtend(defaultOpts, opts)

  if (Array.isArray(obj)) {
    obj.forEach(function (topic) {
      if (that._resubscribeTopics[topic] < opts.qos ||
          !that._resubscribeTopics.hasOwnProperty(topic) ||
          resubscribe) {
        subs.push({
          topic: topic,
          qos: opts.qos
        })
      }
    })
  } else {
    Object
      .keys(obj)
      .forEach(function (k) {
        if (that._resubscribeTopics[k] < obj[k] ||
            !that._resubscribeTopics.hasOwnProperty(k) ||
            resubscribe) {
          subs.push({
            topic: k,
            qos: obj[k]
          })
        }
      })
  }

  packet = {
    cmd: 'subscribe',
    subscriptions: subs,
    qos: 1,
    retain: false,
    dup: false,
    messageId: this._nextId()
  }

  if (!subs.length) {
    callback(null, [])
    return
  }

  // subscriptions to resubscribe to in case of disconnect
  if (this.options.resubscribe) {
    var topics = []
    subs.forEach(function (sub) {
      if (that.options.reconnectPeriod > 0) {
        that._resubscribeTopics[sub.topic] = sub.qos
        topics.push(sub.topic)
      }
    })
    that.messageIdToTopic[packet.messageId] = topics
  }

  this.outgoing[packet.messageId] = function (err, packet) {
    if (!err) {
      var granted = packet.granted
      for (var i = 0; i < granted.length; i += 1) {
        subs[i].qos = granted[i]
      }
    }

    callback(err, subs)
  }

  this._sendPacket(packet)

  return this
}

/**
 * unsubscribe - unsubscribe from topic(s)
 *
 * @param {String, Array} topic - topics to unsubscribe from
 * @param {Function} [callback] - callback fired on unsuback
 * @returns {MqttClient} this - for chaining
 * @api public
 * @example client.unsubscribe('topic');
 * @example client.unsubscribe('topic', console.log);
 */
MqttClient.prototype.unsubscribe = function (topic, callback) {
  var packet = {
    cmd: 'unsubscribe',
    qos: 1,
    messageId: this._nextId()
  }
  var that = this

  callback = callback || nop

  if (this._checkDisconnecting(callback)) {
    return this
  }

  if (typeof topic === 'string') {
    packet.unsubscriptions = [topic]
  } else if (typeof topic === 'object' && topic.length) {
    packet.unsubscriptions = topic
  }

  if (this.options.resubscribe) {
    packet.unsubscriptions.forEach(function (topic) {
      delete that._resubscribeTopics[topic]
    })
  }

  this.outgoing[packet.messageId] = callback

  this._sendPacket(packet)

  return this
}

/**
 * end - close connection
 *
 * @returns {MqttClient} this - for chaining
 * @param {Boolean} force - do not wait for all in-flight messages to be acked
 * @param {Function} cb - called when the client has been closed
 *
 * @api public
 */
MqttClient.prototype.end = function (force, cb) {
  var that = this

  if (typeof force === 'function') {
    cb = force
    force = false
  }

  function closeStores () {
    that.disconnected = true
    that.incomingStore.close(function () {
      that.outgoingStore.close(function () {
        if (cb) {
          cb.apply(null, arguments)
        }
        that.emit('end')
      })
    })
    if (that._deferredReconnect) {
      that._deferredReconnect()
    }
  }

  function finish () {
    // defer closesStores of an I/O cycle,
    // just to make sure things are
    // ok for websockets
    that._cleanUp(force, setImmediate.bind(null, closeStores))
  }

  if (this.disconnecting) {
    return this
  }

  this._clearReconnect()

  this.disconnecting = true

  if (!force && Object.keys(this.outgoing).length > 0) {
    // wait 10ms, just to be sure we received all of it
    this.once('outgoingEmpty', setTimeout.bind(null, finish, 10))
  } else {
    finish()
  }

  return this
}

/**
 * removeOutgoingMessage - remove a message in outgoing store
 * the outgoing callback will be called withe Error('Message removed') if the message is removed
 *
 * @param {Number} mid - messageId to remove message
 * @returns {MqttClient} this - for chaining
 * @api public
 *
 * @example client.removeOutgoingMessage(client.getLastMessageId());
 */
MqttClient.prototype.removeOutgoingMessage = function (mid) {
  var cb = this.outgoing[mid]
  delete this.outgoing[mid]
  this.outgoingStore.del({messageId: mid}, function () {
    cb(new Error('Message removed'))
  })
  return this
}

/**
 * reconnect - connect again using the same options as connect()
 *
 * @param {Object} [opts] - optional reconnect options, includes:
 *    {Store} incomingStore - a store for the incoming packets
 *    {Store} outgoingStore - a store for the outgoing packets
 *    if opts is not given, current stores are used
 * @returns {MqttClient} this - for chaining
 *
 * @api public
 */
MqttClient.prototype.reconnect = function (opts) {
  var that = this
  var f = function () {
    if (opts) {
      that.options.incomingStore = opts.incomingStore
      that.options.outgoingStore = opts.outgoingStore
    } else {
      that.options.incomingStore = null
      that.options.outgoingStore = null
    }
    that.incomingStore = that.options.incomingStore || new Store()
    that.outgoingStore = that.options.outgoingStore || new Store()
    that.disconnecting = false
    that.disconnected = false
    that._deferredReconnect = null
    that._reconnect()
  }

  if (this.disconnecting && !this.disconnected) {
    this._deferredReconnect = f
  } else {
    f()
  }
  return this
}

/**
 * _reconnect - implement reconnection
 * @api privateish
 */
MqttClient.prototype._reconnect = function () {
  this.emit('reconnect')
  this._setupStream()
}

/**
 * _setupReconnect - setup reconnect timer
 */
MqttClient.prototype._setupReconnect = function () {
  var that = this

  if (!that.disconnecting && !that.reconnectTimer && (that.options.reconnectPeriod > 0)) {
    if (!this.reconnecting) {
      this.emit('offline')
      this.reconnecting = true
    }
    that.reconnectTimer = setInterval(function () {
      that._reconnect()
    }, that.options.reconnectPeriod)
  }
}

/**
 * _clearReconnect - clear the reconnect timer
 */
MqttClient.prototype._clearReconnect = function () {
  if (this.reconnectTimer) {
    clearInterval(this.reconnectTimer)
    this.reconnectTimer = null
  }
}

/**
 * _cleanUp - clean up on connection end
 * @api private
 */
MqttClient.prototype._cleanUp = function (forced, done) {
  if (done) {
    this.stream.on('close', done)
  }

  if (forced) {
    if ((this.options.reconnectPeriod === 0) && this.options.clean) {
      flush(this.outgoing)
    }
    this.stream.destroy()
  } else {
    this._sendPacket(
      { cmd: 'disconnect' },
      setImmediate.bind(
        null,
        this.stream.end.bind(this.stream)
      )
    )
  }

  if (!this.disconnecting) {
    this._clearReconnect()
    this._setupReconnect()
  }

  if (this.pingTimer !== null) {
    this.pingTimer.clear()
    this.pingTimer = null
  }

  if (done && !this.connected) {
    this.stream.removeListener('close', done)
    done()
  }
}

/**
 * _sendPacket - send or queue a packet
 * @param {String} type - packet type (see `protocol`)
 * @param {Object} packet - packet options
 * @param {Function} cb - callback when the packet is sent
 * @api private
 */
MqttClient.prototype._sendPacket = function (packet, cb) {
  if (!this.connected) {
    if (((packet.qos || 0) === 0 && this.queueQoSZero) || packet.cmd !== 'publish') {
      this.queue.push({ packet: packet, cb: cb })
    } else if (packet.qos > 0) {
      cb = this.outgoing[packet.messageId]
      this.outgoingStore.put(packet, function (err) {
        if (err) {
          return cb && cb(err)
        }
      })
    } else if (cb) {
      cb(new Error('No connection to broker'))
    }

    return
  }

  // When sending a packet, reschedule the ping timer
  this._shiftPingInterval()

  switch (packet.cmd) {
    case 'publish':
      break
    case 'pubrel':
      storeAndSend(this, packet, cb)
      return
    default:
      sendPacket(this, packet, cb)
      return
  }

  switch (packet.qos) {
    case 2:
    case 1:
      storeAndSend(this, packet, cb)
      break
    /**
     * no need of case here since it will be caught by default
     * and jshint comply that before default it must be a break
     * anyway it will result in -1 evaluation
     */
    case 0:
      /* falls through */
    default:
      sendPacket(this, packet, cb)
      break
  }
}

/**
 * _setupPingTimer - setup the ping timer
 *
 * @api private
 */
MqttClient.prototype._setupPingTimer = function () {
  var that = this

  if (!this.pingTimer && this.options.keepalive) {
    this.pingResp = true
    this.pingTimer = reInterval(function () {
      that._checkPing()
    }, this.options.keepalive * 1000)
  }
}

/**
 * _shiftPingInterval - reschedule the ping interval
 *
 * @api private
 */
MqttClient.prototype._shiftPingInterval = function () {
  if (this.pingTimer && this.options.keepalive && this.options.reschedulePings) {
    this.pingTimer.reschedule(this.options.keepalive * 1000)
  }
}
/**
 * _checkPing - check if a pingresp has come back, and ping the server again
 *
 * @api private
 */
MqttClient.prototype._checkPing = function () {
  if (this.pingResp) {
    this.pingResp = false
    this._sendPacket({ cmd: 'pingreq' })
  } else {
    // do a forced cleanup since socket will be in bad shape
    this._cleanUp(true)
  }
}

/**
 * _handlePingresp - handle a pingresp
 *
 * @api private
 */
MqttClient.prototype._handlePingresp = function () {
  this.pingResp = true
}

/**
 * _handleConnack
 *
 * @param {Object} packet
 * @api private
 */

MqttClient.prototype._handleConnack = function (packet) {
  var rc = packet.returnCode
  var errors = [
    '',
    'Unacceptable protocol version',
    'Identifier rejected',
    'Server unavailable',
    'Bad username or password',
    'Not authorized'
  ]

  clearTimeout(this.connackTimer)

  if (rc === 0) {
    this.reconnecting = false
    this.emit('connect', packet)
  } else if (rc > 0) {
    var err = new Error('Connection refused: ' + errors[rc])
    err.code = rc
    this.emit('error', err)
  }
}

/**
 * _handlePublish
 *
 * @param {Object} packet
 * @api private
 */
/*
those late 2 case should be rewrite to comply with coding style:

case 1:
case 0:
  // do not wait sending a puback
  // no callback passed
  if (1 === qos) {
    this._sendPacket({
      cmd: 'puback',
      messageId: mid
    });
  }
  // emit the message event for both qos 1 and 0
  this.emit('message', topic, message, packet);
  this.handleMessage(packet, done);
  break;
default:
  // do nothing but every switch mus have a default
  // log or throw an error about unknown qos
  break;

for now i just suppressed the warnings
*/
MqttClient.prototype._handlePublish = function (packet, done) {
  done = typeof done !== 'undefined' ? done : nop
  var topic = packet.topic.toString()
  var message = packet.payload
  var qos = packet.qos
  var mid = packet.messageId
  var that = this

  switch (qos) {
    case 2:
      this.incomingStore.put(packet, function (err) {
        if (err) {
          return done(err)
        }
        that._sendPacket({cmd: 'pubrec', messageId: mid}, done)
      })
      break
    case 1:
      // emit the message event
      this.emit('message', topic, message, packet)
      this.handleMessage(packet, function (err) {
        if (err) {
          return done(err)
        }
        // send 'puback' if the above 'handleMessage' method executed
        // successfully.
        that._sendPacket({cmd: 'puback', messageId: mid}, done)
      })
      break
    case 0:
      // emit the message event
      this.emit('message', topic, message, packet)
      this.handleMessage(packet, done)
      break
    default:
      // do nothing
      // log or throw an error about unknown qos
      break
  }
}

/**
 * Handle messages with backpressure support, one at a time.
 * Override at will.
 *
 * @param Packet packet the packet
 * @param Function callback call when finished
 * @api public
 */
MqttClient.prototype.handleMessage = function (packet, callback) {
  callback()
}

/**
 * _handleAck
 *
 * @param {Object} packet
 * @api private
 */

MqttClient.prototype._handleAck = function (packet) {
  /* eslint no-fallthrough: "off" */
  var mid = packet.messageId
  var type = packet.cmd
  var response = null
  var cb = this.outgoing[mid]
  var that = this

  if (!cb) {
    // Server sent an ack in error, ignore it.
    return
  }

  // Process
  switch (type) {
    case 'pubcomp':
      // same thing as puback for QoS 2
    case 'puback':
      // Callback - we're done
      delete this.outgoing[mid]
      this.outgoingStore.del(packet, cb)
      break
    case 'pubrec':
      response = {
        cmd: 'pubrel',
        qos: 2,
        messageId: mid
      }

      this._sendPacket(response)
      break
    case 'suback':
      delete this.outgoing[mid]
      if (packet.granted.length === 1 && (packet.granted[0] & 0x80) !== 0) {
        // suback with Failure status
        var topics = this.messageIdToTopic[mid]
        if (topics) {
          topics.forEach(function (topic) {
            delete that._resubscribeTopics[topic]
          })
        }
      }
      cb(null, packet)
      break
    case 'unsuback':
      delete this.outgoing[mid]
      cb(null)
      break
    default:
      that.emit('error', new Error('unrecognized packet type'))
  }

  if (this.disconnecting &&
      Object.keys(this.outgoing).length === 0) {
    this.emit('outgoingEmpty')
  }
}

/**
 * _handlePubrel
 *
 * @param {Object} packet
 * @api private
 */
MqttClient.prototype._handlePubrel = function (packet, callback) {
  callback = typeof callback !== 'undefined' ? callback : nop
  var mid = packet.messageId
  var that = this

  var comp = {cmd: 'pubcomp', messageId: mid}

  that.incomingStore.get(packet, function (err, pub) {
    if (!err && pub.cmd !== 'pubrel') {
      that.emit('message', pub.topic, pub.payload, pub)
      that.incomingStore.put(packet, function (err) {
        if (err) {
          return callback(err)
        }
        that.handleMessage(pub, function (err) {
          if (err) {
            return callback(err)
          }
          that._sendPacket(comp, callback)
        })
      })
    } else {
      that._sendPacket(comp, callback)
    }
  })
}

/**
 * _nextId
 * @return unsigned int
 */
MqttClient.prototype._nextId = function () {
  // id becomes current state of this.nextId and increments afterwards
  var id = this.nextId++
  // Ensure 16 bit unsigned int (max 65535, nextId got one higher)
  if (this.nextId === 65536) {
    this.nextId = 1
  }
  return id
}

/**
 * getLastMessageId
 * @return unsigned int
 */
MqttClient.prototype.getLastMessageId = function () {
  return (this.nextId === 1) ? 65535 : (this.nextId - 1)
}

module.exports = MqttClient

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mqtt/lib/connect/index.js":
/*!************************************************!*\
  !*** ./node_modules/mqtt/lib/connect/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var MqttClient = __webpack_require__(/*! ../client */ "./node_modules/mqtt/lib/client.js")
var Store = __webpack_require__(/*! ../store */ "./node_modules/mqtt/lib/store.js")
var url = __webpack_require__(/*! url */ "./node_modules/url/url.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var protocols = {}

if (process.title !== 'browser') {
  protocols.mqtt = __webpack_require__(/*! ./tcp */ "./node_modules/mqtt/lib/connect/tcp.js")
  protocols.tcp = __webpack_require__(/*! ./tcp */ "./node_modules/mqtt/lib/connect/tcp.js")
  protocols.ssl = __webpack_require__(/*! ./tls */ "./node_modules/mqtt/lib/connect/tls.js")
  protocols.tls = __webpack_require__(/*! ./tls */ "./node_modules/mqtt/lib/connect/tls.js")
  protocols.mqtts = __webpack_require__(/*! ./tls */ "./node_modules/mqtt/lib/connect/tls.js")
} else {
  protocols.wx = __webpack_require__(/*! ./wx */ "./node_modules/mqtt/lib/connect/wx.js")
  protocols.wxs = __webpack_require__(/*! ./wx */ "./node_modules/mqtt/lib/connect/wx.js")
}

protocols.ws = __webpack_require__(/*! ./ws */ "./node_modules/mqtt/lib/connect/ws.js")
protocols.wss = __webpack_require__(/*! ./ws */ "./node_modules/mqtt/lib/connect/ws.js")

/**
 * Parse the auth attribute and merge username and password in the options object.
 *
 * @param {Object} [opts] option object
 */
function parseAuthOptions (opts) {
  var matches
  if (opts.auth) {
    matches = opts.auth.match(/^(.+):(.+)$/)
    if (matches) {
      opts.username = matches[1]
      opts.password = matches[2]
    } else {
      opts.username = opts.auth
    }
  }
}

/**
 * connect - connect to an MQTT broker.
 *
 * @param {String} [brokerUrl] - url of the broker, optional
 * @param {Object} opts - see MqttClient#constructor
 */
function connect (brokerUrl, opts) {
  if ((typeof brokerUrl === 'object') && !opts) {
    opts = brokerUrl
    brokerUrl = null
  }

  opts = opts || {}

  if (brokerUrl) {
    var parsed = url.parse(brokerUrl, true)
    if (parsed.port != null) {
      parsed.port = Number(parsed.port)
    }

    opts = xtend(parsed, opts)

    if (opts.protocol === null) {
      throw new Error('Missing protocol')
    }
    opts.protocol = opts.protocol.replace(/:$/, '')
  }

  // merge in the auth options if supplied
  parseAuthOptions(opts)

  // support clientId passed in the query string of the url
  if (opts.query && typeof opts.query.clientId === 'string') {
    opts.clientId = opts.query.clientId
  }

  if (opts.cert && opts.key) {
    if (opts.protocol) {
      if (['mqtts', 'wss', 'wxs'].indexOf(opts.protocol) === -1) {
        switch (opts.protocol) {
          case 'mqtt':
            opts.protocol = 'mqtts'
            break
          case 'ws':
            opts.protocol = 'wss'
            break
          case 'wx':
            opts.protocol = 'wxs'
            break
          default:
            throw new Error('Unknown protocol for secure connection: "' + opts.protocol + '"!')
        }
      }
    } else {
      // don't know what protocol he want to use, mqtts or wss
      throw new Error('Missing secure protocol key')
    }
  }

  if (!protocols[opts.protocol]) {
    var isSecure = ['mqtts', 'wss'].indexOf(opts.protocol) !== -1
    opts.protocol = [
      'mqtt',
      'mqtts',
      'ws',
      'wss',
      'wx',
      'wxs'
    ].filter(function (key, index) {
      if (isSecure && index % 2 === 0) {
        // Skip insecure protocols when requesting a secure one.
        return false
      }
      return (typeof protocols[key] === 'function')
    })[0]
  }

  if (opts.clean === false && !opts.clientId) {
    throw new Error('Missing clientId for unclean clients')
  }

  if (opts.protocol) {
    opts.defaultProtocol = opts.protocol
  }

  function wrapper (client) {
    if (opts.servers) {
      if (!client._reconnectCount || client._reconnectCount === opts.servers.length) {
        client._reconnectCount = 0
      }

      opts.host = opts.servers[client._reconnectCount].host
      opts.port = opts.servers[client._reconnectCount].port
      opts.protocol = (!opts.servers[client._reconnectCount].protocol ? opts.defaultProtocol : opts.servers[client._reconnectCount].protocol)
      opts.hostname = opts.host

      client._reconnectCount++
    }

    return protocols[opts.protocol](client, opts)
  }

  return new MqttClient(wrapper, opts)
}

module.exports = connect
module.exports.connect = connect
module.exports.MqttClient = MqttClient
module.exports.Store = Store

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mqtt/lib/connect/tcp.js":
/*!**********************************************!*\
  !*** ./node_modules/mqtt/lib/connect/tcp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var net = __webpack_require__(/*! net */ 3)

/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function buildBuilder (client, opts) {
  var port, host
  opts.port = opts.port || 1883
  opts.hostname = opts.hostname || opts.host || 'localhost'

  port = opts.port
  host = opts.hostname

  return net.createConnection(port, host)
}

module.exports = buildBuilder


/***/ }),

/***/ "./node_modules/mqtt/lib/connect/tls.js":
/*!**********************************************!*\
  !*** ./node_modules/mqtt/lib/connect/tls.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tls = __webpack_require__(/*! tls */ 4)

function buildBuilder (mqttClient, opts) {
  var connection
  opts.port = opts.port || 8883
  opts.host = opts.hostname || opts.host || 'localhost'

  opts.rejectUnauthorized = opts.rejectUnauthorized !== false

  delete opts.path

  connection = tls.connect(opts)
  /* eslint no-use-before-define: [2, "nofunc"] */
  connection.on('secureConnect', function () {
    if (opts.rejectUnauthorized && !connection.authorized) {
      connection.emit('error', new Error('TLS not authorized'))
    } else {
      connection.removeListener('error', handleTLSerrors)
    }
  })

  function handleTLSerrors (err) {
    // How can I get verify this error is a tls error?
    if (opts.rejectUnauthorized) {
      mqttClient.emit('error', err)
    }

    // close this connection to match the behaviour of net
    // otherwise all we get is an error from the connection
    // and close event doesn't fire. This is a work around
    // to enable the reconnect code to work the same as with
    // net.createConnection
    connection.end()
  }

  connection.on('error', handleTLSerrors)
  return connection
}

module.exports = buildBuilder


/***/ }),

/***/ "./node_modules/mqtt/lib/connect/ws.js":
/*!*********************************************!*\
  !*** ./node_modules/mqtt/lib/connect/ws.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var websocket = __webpack_require__(/*! websocket-stream */ "./node_modules/websocket-stream/stream.js")
var urlModule = __webpack_require__(/*! url */ "./node_modules/url/url.js")
var WSS_OPTIONS = [
  'rejectUnauthorized',
  'ca',
  'cert',
  'key',
  'pfx',
  'passphrase'
]
var IS_BROWSER = process.title === 'browser'

function buildUrl (opts, client) {
  var url = opts.protocol + '://' + opts.hostname + ':' + opts.port + opts.path
  if (typeof (opts.transformWsUrl) === 'function') {
    url = opts.transformWsUrl(url, opts, client)
  }
  return url
}

function setDefaultOpts (opts) {
  if (!opts.hostname) {
    opts.hostname = 'localhost'
  }
  if (!opts.port) {
    if (opts.protocol === 'wss') {
      opts.port = 443
    } else {
      opts.port = 80
    }
  }
  if (!opts.path) {
    opts.path = '/'
  }

  if (!opts.wsOptions) {
    opts.wsOptions = {}
  }
  if (!IS_BROWSER && opts.protocol === 'wss') {
    // Add cert/key/ca etc options
    WSS_OPTIONS.forEach(function (prop) {
      if (opts.hasOwnProperty(prop) && !opts.wsOptions.hasOwnProperty(prop)) {
        opts.wsOptions[prop] = opts[prop]
      }
    })
  }
}

function createWebSocket (client, opts) {
  var websocketSubProtocol =
    (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
      ? 'mqttv3.1'
      : 'mqtt'

  setDefaultOpts(opts)
  var url = buildUrl(opts, client)
  return websocket(url, [websocketSubProtocol], opts.wsOptions)
}

function buildBuilder (client, opts) {
  return createWebSocket(client, opts)
}

function buildBuilderBrowser (client, opts) {
  if (!opts.hostname) {
    opts.hostname = opts.host
  }

  if (!opts.hostname) {
    // Throwing an error in a Web Worker if no `hostname` is given, because we
    // can not determine the `hostname` automatically.  If connecting to
    // localhost, please supply the `hostname` as an argument.
    if (typeof (document) === 'undefined') {
      throw new Error('Could not determine host. Specify host manually.')
    }
    var parsed = urlModule.parse(document.URL)
    opts.hostname = parsed.hostname

    if (!opts.port) {
      opts.port = parsed.port
    }
  }
  return createWebSocket(client, opts)
}

if (IS_BROWSER) {
  module.exports = buildBuilderBrowser
} else {
  module.exports = buildBuilder
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mqtt/lib/connect/wx.js":
/*!*********************************************!*\
  !*** ./node_modules/mqtt/lib/connect/wx.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global wx */
var socketOpen = false
var socketMsgQueue = []

function sendSocketMessage (msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data: msg.buffer || msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}

function WebSocket (url, protocols) {
  var ws = {
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,
    readyState: socketOpen ? 1 : 0,
    send: sendSocketMessage,
    close: wx.closeSocket,
    onopen: null,
    onmessage: null,
    onclose: null,
    onerror: null
  }

  wx.connectSocket({
    url: url,
    protocols: protocols
  })
  wx.onSocketOpen(function (res) {
    ws.readyState = ws.OPEN
    socketOpen = true
    for (var i = 0; i < socketMsgQueue.length; i++) {
      sendSocketMessage(socketMsgQueue[i])
    }
    socketMsgQueue = []

    ws.onopen && ws.onopen.apply(ws, arguments)
  })
  wx.onSocketMessage(function (res) {
    ws.onmessage && ws.onmessage.apply(ws, arguments)
  })
  wx.onSocketClose(function () {
    ws.onclose && ws.onclose.apply(ws, arguments)
    ws.readyState = ws.CLOSED
    socketOpen = false
  })
  wx.onSocketError(function () {
    ws.onerror && ws.onerror.apply(ws, arguments)
    ws.readyState = ws.CLOSED
    socketOpen = false
  })

  return ws
}

var websocket = __webpack_require__(/*! websocket-stream */ "./node_modules/websocket-stream/stream.js")

function buildUrl (opts, client) {
  var protocol = opts.protocol === 'wxs' ? 'wss' : 'ws'
  var url = protocol + '://' + opts.hostname + opts.path
  if (opts.port && opts.port !== 80 && opts.port !== 443) {
    url = protocol + '://' + opts.hostname + ':' + opts.port + opts.path
  }
  if (typeof (opts.transformWsUrl) === 'function') {
    url = opts.transformWsUrl(url, opts, client)
  }
  return url
}

function setDefaultOpts (opts) {
  if (!opts.hostname) {
    opts.hostname = 'localhost'
  }
  if (!opts.path) {
    opts.path = '/'
  }

  if (!opts.wsOptions) {
    opts.wsOptions = {}
  }
}

function createWebSocket (client, opts) {
  var websocketSubProtocol =
    (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
      ? 'mqttv3.1'
      : 'mqtt'

  setDefaultOpts(opts)
  var url = buildUrl(opts, client)
  return websocket(WebSocket(url, [websocketSubProtocol]))
}

function buildBuilder (client, opts) {
  opts.hostname = opts.hostname || opts.host

  if (!opts.hostname) {
    throw new Error('Could not determine host. Specify host manually.')
  }

  return createWebSocket(client, opts)
}

module.exports = buildBuilder


/***/ }),

/***/ "./node_modules/mqtt/lib/store.js":
/*!****************************************!*\
  !*** ./node_modules/mqtt/lib/store.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * Module dependencies
 */
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

var Readable = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js").Readable
var streamsOpts = { objectMode: true }
var defaultStoreOptions = {
  clean: true
}

/**
 * es6-map can preserve insertion order even if ES version is older.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Description
 * It should be noted that a Map which is a map of an object, especially
 * a dictionary of dictionaries, will only map to the object's insertion
 * order. In ES2015 this is ordered for objects but for older versions of
 * ES, this may be random and not ordered.
 *
 */
var Map = __webpack_require__(/*! es6-map */ "./node_modules/es6-map/index.js")

/**
 * In-memory implementation of the message store
 * This can actually be saved into files.
 *
 * @param {Object} [options] - store options
 */
function Store (options) {
  if (!(this instanceof Store)) {
    return new Store(options)
  }

  this.options = options || {}

  // Defaults
  this.options = xtend(defaultStoreOptions, options)

  this._inflights = new Map()
}

/**
 * Adds a packet to the store, a packet is
 * anything that has a messageId property.
 *
 */
Store.prototype.put = function (packet, cb) {
  this._inflights.set(packet.messageId, packet)

  if (cb) {
    cb()
  }

  return this
}

/**
 * Creates a stream with all the packets in the store
 *
 */
Store.prototype.createStream = function () {
  var stream = new Readable(streamsOpts)
  var destroyed = false
  var values = []
  var i = 0

  this._inflights.forEach(function (value, key) {
    values.push(value)
  })

  stream._read = function () {
    if (!destroyed && i < values.length) {
      this.push(values[i++])
    } else {
      this.push(null)
    }
  }

  stream.destroy = function () {
    if (destroyed) {
      return
    }

    var self = this

    destroyed = true

    process.nextTick(function () {
      self.emit('close')
    })
  }

  return stream
}

/**
 * deletes a packet from the store.
 */
Store.prototype.del = function (packet, cb) {
  packet = this._inflights.get(packet.messageId)
  if (packet) {
    this._inflights.delete(packet.messageId)
    cb(null, packet)
  } else if (cb) {
    cb(new Error('missing packet'))
  }

  return this
}

/**
 * get a packet from the store.
 */
Store.prototype.get = function (packet, cb) {
  packet = this._inflights.get(packet.messageId)
  if (packet) {
    cb(null, packet)
  } else if (cb) {
    cb(new Error('missing packet'))
  }

  return this
}

/**
 * Close the store
 */
Store.prototype.close = function (cb) {
  if (this.options.clean) {
    this._inflights = null
  }
  if (cb) {
    cb()
  }
}

module.exports = Store

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/mqtt/lib/validations.js":
/*!**********************************************!*\
  !*** ./node_modules/mqtt/lib/validations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Validate a topic to see if it's valid or not.
 * A topic is valid if it follow below rules:
 * - Rule #1: If any part of the topic is not `+` or `#`, then it must not contain `+` and '#'
 * - Rule #2: Part `#` must be located at the end of the mailbox
 *
 * @param {String} topic - A topic
 * @returns {Boolean} If the topic is valid, returns true. Otherwise, returns false.
 */
function validateTopic (topic) {
  var parts = topic.split('/')

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '+') {
      continue
    }

    if (parts[i] === '#') {
      // for Rule #2
      return i === parts.length - 1
    }

    if (parts[i].indexOf('+') !== -1 || parts[i].indexOf('#') !== -1) {
      return false
    }
  }

  return true
}

/**
 * Validate an array of topics to see if any of them is valid or not
  * @param {Array} topics - Array of topics
 * @returns {String} If the topics is valid, returns null. Otherwise, returns the invalid one
 */
function validateTopics (topics) {
  if (topics.length === 0) {
    return 'empty_topic_list'
  }
  for (var i = 0; i < topics.length; i++) {
    if (!validateTopic(topics[i])) {
      return topics[i]
    }
  }
  return null
}

module.exports = {
  validateTopics: validateTopics
}


/***/ }),

/***/ "./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(/*! wrappy */ "./node_modules/wrappy/wrappy.js")
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ "./node_modules/process-nextick-args/index.js":
/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = true && exports &&
		!exports.nodeType && exports;
	var freeModule = true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/readable-stream/duplex-browser.js":
/*!********************************************************!*\
  !*** ./node_modules/readable-stream/duplex-browser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");


/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
/*!************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

var Readable = __webpack_require__(/*! ./_stream_readable */ "./node_modules/readable-stream/lib/_stream_readable.js");
var Writable = __webpack_require__(/*! ./_stream_writable */ "./node_modules/readable-stream/lib/_stream_writable.js");

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
/*!*****************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ "./node_modules/readable-stream/lib/_stream_transform.js");

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(/*! util */ 1);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(/*! ./internal/streams/BufferList */ "./node_modules/readable-stream/lib/internal/streams/BufferList.js");
var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
/*!***************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ "./node_modules/util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
/*!*************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
var util = __webpack_require__(/*! util */ 2);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;


/***/ }),

/***/ "./node_modules/readable-stream/readable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/readable-stream/lib/_stream_passthrough.js");


/***/ }),

/***/ "./node_modules/reinterval/index.js":
/*!******************************************!*\
  !*** ./node_modules/reinterval/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ReInterval (callback, interval, args) {
  var self = this;

  this._callback = callback;
  this._args = args;

  this._interval = setInterval(callback, interval, this._args);

  this.reschedule = function (interval) {
    // if no interval entered, use the interval passed in on creation
    if (!interval)
      interval = self._interval;

    if (self._interval)
      clearInterval(self._interval);
    self._interval = setInterval(self._callback, interval, self._args);
  };

  this.clear = function () {
    if (self._interval) {
      clearInterval(self._interval);
      self._interval = undefined;
    }
  };
  
  this.destroy = function () {
    if (self._interval) {
      clearInterval(self._interval);
    }
    self._callback = undefined;
    self._interval = undefined;
    self._args = undefined;
  };
}

function reInterval () {
  if (typeof arguments[0] !== 'function')
    throw new Error('callback needed');
  if (typeof arguments[1] !== 'number')
    throw new Error('interval needed');

  var args;

  if (arguments.length > 0) {
    args = new Array(arguments.length - 2);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 2];
    }
  }

  return new ReInterval(arguments[0], arguments[1], args);
}

module.exports = reInterval;


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stream-shift/index.js":
/*!********************************************!*\
  !*** ./node_modules/stream-shift/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = shift

function shift (stream) {
  var rs = stream._readableState
  if (!rs) return null
  return rs.objectMode ? stream.read() : stream.read(getStateLength(rs))
}

function getStateLength (state) {
  if (state.buffer.length) {
    // Since node 6.3.0 state.buffer is a BufferList not an array
    if (state.buffer.head) {
      return state.buffer.head.data.length
    }

    return state.buffer[0].length
  }

  return state.length
}


/***/ }),

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/superagent/lib/agent-base.js":
/*!***************************************************!*\
  !*** ./node_modules/superagent/lib/agent-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var RequestBase = __webpack_require__(/*! ./request-base */ "./node_modules/superagent/lib/request-base.js");
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");
var ResponseBase = __webpack_require__(/*! ./response-base */ "./node_modules/superagent/lib/response-base.js");
var Agent = __webpack_require__(/*! ./agent-base */ "./node_modules/superagent/lib/agent-base.js");

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),

/***/ "./node_modules/superagent/lib/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/superagent/lib/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/superagent/lib/request-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/superagent/lib/request-base.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),

/***/ "./node_modules/superagent/lib/response-base.js":
/*!******************************************************!*\
  !*** ./node_modules/superagent/lib/response-base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/lib/utils.js");

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
};


/***/ }),

/***/ "./node_modules/superagent/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/superagent/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/websocket-stream/stream.js":
/*!*************************************************!*\
  !*** ./node_modules/websocket-stream/stream.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var Transform = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js").Transform
var duplexify = __webpack_require__(/*! duplexify */ "./node_modules/duplexify/index.js")
var WS = __webpack_require__(/*! ws */ "./node_modules/websocket-stream/ws-fallback.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer

module.exports = WebSocketStream

function buildProxy (options, socketWrite, socketEnd) {
  var proxy = new Transform({
    objectMode: options.objectMode
  })

  proxy._write = socketWrite
  proxy._flush = socketEnd

  return proxy
}

function WebSocketStream(target, protocols, options) {
  var stream, socket

  var isBrowser = process.title === 'browser'
  var isNative = !!global.WebSocket
  var socketWrite = isBrowser ? socketWriteBrowser : socketWriteNode

  if (protocols && !Array.isArray(protocols) && 'object' === typeof protocols) {
    // accept the "options" Object as the 2nd argument
    options = protocols
    protocols = null

    if (typeof options.protocol === 'string' || Array.isArray(options.protocol)) {
      protocols = options.protocol;
    }
  }

  if (!options) options = {}

  if (options.objectMode === undefined) {
    options.objectMode = !(options.binary === true || options.binary === undefined)
  }

  var proxy = buildProxy(options, socketWrite, socketEnd)

  if (!options.objectMode) {
    proxy._writev = writev
  }

  // browser only: sets the maximum socket buffer size before throttling
  var bufferSize = options.browserBufferSize || 1024 * 512

  // browser only: how long to wait when throttling
  var bufferTimeout = options.browserBufferTimeout || 1000

  // use existing WebSocket object that was passed in
  if (typeof target === 'object') {
    socket = target
  // otherwise make a new one
  } else {
    // special constructor treatment for native websockets in browsers, see
    // https://github.com/maxogden/websocket-stream/issues/82
    if (isNative && isBrowser) {
      socket = new WS(target, protocols)
    } else {
      socket = new WS(target, protocols, options)
    }

    socket.binaryType = 'arraybuffer'
  }

  // was already open when passed in
  if (socket.readyState === socket.OPEN) {
    stream = proxy
  } else {
    stream = duplexify.obj()
    socket.onopen = onopen
  }

  stream.socket = socket

  socket.onclose = onclose
  socket.onerror = onerror
  socket.onmessage = onmessage

  proxy.on('close', destroy)

  var coerceToBuffer = !options.objectMode

  function socketWriteNode(chunk, enc, next) {
    // avoid errors, this never happens unless
    // destroy() is called
    if (socket.readyState !== socket.OPEN) {
      next()
      return
    }

    if (coerceToBuffer && typeof chunk === 'string') {
      chunk = Buffer.from(chunk, 'utf8')
    }
    socket.send(chunk, next)
  }

  function socketWriteBrowser(chunk, enc, next) {
    if (socket.bufferedAmount > bufferSize) {
      setTimeout(socketWriteBrowser, bufferTimeout, chunk, enc, next)
      return
    }

    if (coerceToBuffer && typeof chunk === 'string') {
      chunk = Buffer.from(chunk, 'utf8')
    }

    try {
      socket.send(chunk)
    } catch(err) {
      return next(err)
    }

    next()
  }

  function socketEnd(done) {
    socket.close()
    done()
  }

  function onopen() {
    stream.setReadable(proxy)
    stream.setWritable(proxy)
    stream.emit('connect')
  }

  function onclose() {
    stream.end()
    stream.destroy()
  }

  function onerror(err) {
    stream.destroy(err)
  }

  function onmessage(event) {
    var data = event.data
    if (data instanceof ArrayBuffer) data = Buffer.from(data)
    else data = Buffer.from(data, 'utf8')
    proxy.push(data)
  }

  function destroy() {
    socket.close()
  }

  // this is to be enabled only if objectMode is false
  function writev (chunks, cb) {
    var buffers = new Array(chunks.length)
    for (var i = 0; i < chunks.length; i++) {
      if (typeof chunks[i].chunk === 'string') {
        buffers[i] = Buffer.from(chunks[i], 'utf8')
      } else {
        buffers[i] = chunks[i].chunk
      }
    }

    this._write(Buffer.concat(buffers), 'binary', cb)
  }

  return stream
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/websocket-stream/ws-fallback.js":
/*!******************************************************!*\
  !*** ./node_modules/websocket-stream/ws-fallback.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
}

module.exports = ws


/***/ }),

/***/ "./node_modules/wrappy/wrappy.js":
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, license, main, browser, files, scripts, devDependencies, dependencies, babel, default */
/***/ (function(module) {

module.exports = {"name":"qiscus-sdk-core","version":"2.8.13-0","description":"Qiscus Web SDK Core","license":"MIT","main":"lib/index.js","browser":"dist/qiscus-sdk-core.js","files":["lib","dist"],"scripts":{"build":"npm-run-all --parallel build:node build:web","build:dev":"npm-run-all --parallel build:node build:web:dev","build:node":"babel -d lib src","build:web":"webpack --env.production --env.target=web","build:web:dev":"webpack --env.development --env.target=web","dev":"webpack --env.development --progress --colors --watch","test":"mocha --require @babel/register --colors 'test/**/*test.js'","test:watch":"npm run test -- -w","clean":"rimraf dist"},"devDependencies":{"@babel/cli":"^7.4.3","@babel/core":"^7.1.2","@babel/plugin-transform-runtime":"^7.4.3","@babel/polyfill":"^7.0.0","@babel/preset-env":"^7.1.0","@babel/register":"^7.4.4","babel-eslint":"^8.0.0","babel-loader":"^8.0.4","babel-minify-webpack-plugin":"^0.2.0","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-date-fns":"^0.1.0","chai":"^4.1.2","chai-spies":"^1.0.0","esdoc":"^1.0.2","esdoc-standard-plugin":"^1.0.0","eslint":"^4.19.1","eslint-config-standard":"^12.0.0","eslint-loader":"^1.9.0","eslint-plugin-import":"^2.16.0","eslint-plugin-node":"^8.0.1","eslint-plugin-promise":"^4.0.1","eslint-plugin-standard":"^4.0.0","mocha":"^5.2.0","npm-run-all":"^4.1.5","rimraf":"^2.6.3","webpack":"^4.22.0","webpack-bundle-analyzer":"^2.10.1","webpack-cli":"^3.1.2"},"dependencies":{"@babel/runtime":"^7.4.3","date-fns":"^1.28.5","is_js":"^0.9.0","mitt":"^1.1.3","mqtt":"^2.18.1","superagent":"^3.6.3"},"babel":{"presets":[["@babel/preset-env",{"modules":"auto"}]],"plugins":["@babel/plugin-transform-runtime","babel-plugin-add-module-exports","date-fns"]}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
/* harmony import */ var is_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! is_js */ "./node_modules/is_js/is.js");
/* harmony import */ var is_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_Comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/Comment */ "./src/lib/Comment.js");
/* harmony import */ var _lib_Room__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/Room */ "./src/lib/Room.js");
/* harmony import */ var _lib_adapters_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/adapters/http */ "./src/lib/adapters/http.js");
/* harmony import */ var _lib_adapters_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/adapters/auth */ "./src/lib/adapters/auth.js");
/* harmony import */ var _lib_adapters_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/adapters/user */ "./src/lib/adapters/user.js");
/* harmony import */ var _lib_adapters_room__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/adapters/room */ "./src/lib/adapters/room.js");
/* harmony import */ var _lib_adapters_mqtt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/adapters/mqtt */ "./src/lib/adapters/mqtt.js");
/* harmony import */ var _lib_adapters_custom_event__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/adapters/custom-event */ "./src/lib/adapters/custom-event.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);





















/**
 * Qiscus Web SDK Core Class
 *
 * @export
 * @class QiscusSDK
 * @extends {EventEmitter}
 */

var QiscusSDK =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of QiscusSDK.
   * @memberof QiscusSDK
   */
  function QiscusSDK() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, QiscusSDK);

    this.events = Object(mitt__WEBPACK_IMPORTED_MODULE_7__["default"])();
    this.rooms = [];
    this.selected = null;
    this.room_name_id_map = {};
    this.pendingCommentId = 0;
    this.uploadedFiles = [];
    this.chatmateStatus = null;
    this.version = "WEB_".concat(_package_json__WEBPACK_IMPORTED_MODULE_20__.version);
    this.userData = {}; // SDK Configuration

    this.AppId = null;
    this.baseURL = 'https://api.qiscus.com';
    this.uploadURL = "".concat(this.baseURL, "/api/v2/sdk/upload");
    this.mqttURL = 'wss://mqtt.qiscus.com:1886/mqtt';
    this.HTTPAdapter = null;
    this.realtimeAdapter = null;
    this.customEventAdapter = null;
    this.isInit = false;
    this.isSynced = false;
    this.sync = 'socket'; // possible values 'socket', 'http', 'both'

    this.httpsync = null;
    this.eventsync = null;
    this.extras = null;
    this.last_received_comment_id = 0;
    this.googleMapKey = '';
    this.options = {
      avatar: true // UI related Properties

    };
    this.UI = {};
    this.mode = 'widget';
    this.avatar = true;
    this.plugins = [];
    this.isLogin = false;
    this.isLoading = false;
    this.isInit = false;
    this.emoji = false;
    this.isTypingStatus = '';
    this.customTemplate = false;
    this.templateFunction = null;
    this.debugMode = false;
    this.debugMQTTMode = false; // to prevent double receive newmessages callback

    this.lastReceiveMessages = [];
  }
  /**
   * Initializing the SDK, set Event Listeners (callbacks)
   * @param {any} config - Qiscus SDK Configurations
   * @return {void}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(QiscusSDK, [{
    key: "init",
    value: function init(config) {
      // set AppID
      if (!config.AppId) throw new Error('Please provide valid AppId');
      this.AppId = config.AppId;
      if (config.baseURL) this.baseURL = config.baseURL;
      if (config.mqttURL) this.mqttURL = config.mqttURL;
      if (config.uploadURL) this.uploadURL = config.uploadURL;
      if (config.sync) this.sync = config.sync;
      if (config.mode) this.mode = config.mode;
      if (config.googleMapKey) this.googleMapKey = config.googleMapKey;

      if (config.allowedFileTypes) {
        this.allowedFileTypes = config.allowedFileTypes;
      } // Let's initialize the app based on options


      if (config.options) {
        this.options = Object.assign({}, this.options, config.options);
      }

      if (config.customTemplate) this.customTemplate = config.customTemplate;

      if (config.templateFunction) {
        this.templateFunction = config.templateFunction;
      } // set Event Listeners


      this.setEventListeners(); // mini garbage collector
      // setInterval(this.clearRoomsCache.bind(this), 90000);
    }
  }, {
    key: "readComment",
    value: function readComment(roomId, commentId) {
      var isSelected = this.selected && this.selected.id === roomId || false;
      var isChannel = this.selected && this.selected.isChannel || false;
      if (!isSelected || isChannel) return false;
      this.userAdapter.updateCommentStatus(roomId, commentId, null);
    }
  }, {
    key: "receiveComment",
    value: function receiveComment(roomId, commentId) {
      var isChannel = this.selected ? this.selected.isChannel : false;
      if (isChannel) return false;
      this.userAdapter.updateCommentStatus(roomId, null, commentId);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      var self = this;
      self.events.on('start-init', function (response) {
        self.HTTPAdapter = new _lib_adapters_http__WEBPACK_IMPORTED_MODULE_13__["default"]({
          baseURL: self.baseURL,
          AppId: self.AppId,
          userId: self.user_id,
          version: self.version
        });
        self.HTTPAdapter.setToken(self.userData.token);
        self.authAdapter = new _lib_adapters_auth__WEBPACK_IMPORTED_MODULE_14__["default"](self.HTTPAdapter);
      });
      self.events.on('room-changed', function (room) {
        _this.logging('room changed', room);

        if (self.options.roomChangedCallback) {
          self.options.roomChangedCallback(room);
        }
      });
      self.events.on('file-uploaded', function (url) {
        if (self.options.fileUploadedCallback) {
          self.options.fileUploadedCallback(url);
        }
      });
      self.events.on('profile-updated', function (user) {
        self.username = user.name;
        self.avatar_url = user.avatar_url;

        if (self.options.updateProfileCallback) {
          self.options.updateProfileCallback(user);
        }
      });
      /**
       * This event will be called when there's new post messages
       * @param {string} data - JSON Response from SYNC API / MQTT
       * @return {void}
       */

      self.events.on('newmessages', function (comments) {
        // let's convert the data into something we can use
        // first we need to make sure we sort this data out based on room_id
        _this.logging('newmessages', comments);

        if (_this.lastReceiveMessages.length > 0 && _this.lastReceiveMessages[0].unique_temp_id === comments[0].unique_temp_id) {
          _this.logging('lastReceiveMessages double', comments);

          return;
        }

        _this.lastReceiveMessages = comments;

        self._callNewMessagesCallback(comments);

        comments.forEach(function (comment) {
          // we have this comment, so means it's already delivered, update it's delivered status
          self.receiveComment(comment.room_id, comment.id);
          var isActiveRoom = self.selected ? comment.room_id === self.selected.id : false;
          var isAlreadyRead = comment.id <= self.last_received_comment_id; // kalau comment ini ada di currently selected

          if (isActiveRoom) {
            var selected = self.selected;
            var lastComment = self.selected.comments[self.selected.comments.length - 1]; // kirim event read kalau ini bukan komen kita sendiri

            if (!isAlreadyRead && self.user_id !== comment.email) self.readComment(comment.room_id, comment.id); // pastiin sync

            var roomLastCommentId = lastComment.id;
            var commentBeforeThis = self.selected.comments.find(function (c) {
              return c.id === lastComment.comment_before_id;
            });

            if (!commentBeforeThis) {
              _this.logging('comment before id not found! ', comment.comment_before_id); // need to fix, these method does not work


              self.synchronize(roomLastCommentId);
            } // pastikan dulu komen ini komen baru, klo komen lama ga usah panggil cb


            var pendingComment = new _lib_Comment__WEBPACK_IMPORTED_MODULE_11__["default"](comment); // fetch the comment inside the room

            selected.receiveComment(pendingComment);
            selected.last_comment_id = pendingComment.id;
            selected.last_comment_message = pendingComment.message;
          } // let's update last_received_comment_id


          self.updateLastReceivedComment(comment.id);

          _this.sortComments();
        });
      });
      /**
       * This event will be called when login is sucess
       * Basically, it sets up necessary properties for qiscusSDK
       */

      self.events.on('login-success', function (response) {
        _this.logging('login-success', response);

        var mqttURL = self.mqttURL;
        self.isLogin = true;
        self.userData = response.user;
        self.last_received_comment_id = self.userData.last_comment_id; // now that we have the token, etc, we need to set all our adapters
        // /////////////// API CLIENT /////////////////

        self.HTTPAdapter = new _lib_adapters_http__WEBPACK_IMPORTED_MODULE_13__["default"]({
          baseURL: self.baseURL,
          AppId: self.AppId,
          userId: self.user_id,
          version: self.version
        });
        self.HTTPAdapter.setToken(self.userData.token); // ////////////// CORE BUSINESS LOGIC ////////////////////////

        self.userAdapter = new _lib_adapters_user__WEBPACK_IMPORTED_MODULE_15__["default"](self.HTTPAdapter);
        self.roomAdapter = new _lib_adapters_room__WEBPACK_IMPORTED_MODULE_16__["default"](self.HTTPAdapter);
        self.realtimeAdapter = new _lib_adapters_mqtt__WEBPACK_IMPORTED_MODULE_17__["default"](mqttURL, self);
        self.realtimeAdapter.subscribeUserChannel();
        setInterval(function () {
          return _this.realtimeAdapter.publishPresence(_this.user_id);
        }, 3500);
        if (self.sync === 'http' || self.sync === 'both') self.activateSync();

        if (self.options.loginSuccessCallback) {
          self.options.loginSuccessCallback(response);
        }

        self.customEventAdapter = Object(_lib_adapters_custom_event__WEBPACK_IMPORTED_MODULE_18__["default"])(self.realtimeAdapter, self.user_id);
      });
      /**
       * Called when there's something wrong when connecting to qiscus SDK
       */

      self.events.on('login-error', function (error) {
        if (self.options.loginErrorCallback) {
          self.options.loginErrorCallback(error);
        }
      });
      self.events.on('room-cleared', function (room) {
        // find room
        if (self.selected) {
          var currentRoom = self.selected;

          if (self.selected.unique_id === room.unique_id) {
            self.selected = null;
            self.selected = currentRoom;
          }
        }

        if (self.options.roomClearedCallback) self.options.roomClearedCallback(room);
      });
      self.events.on('comment-deleted', function (data) {
        // get to the room id and delete the comment
        var roomId = data.roomId,
            commentUniqueIds = data.commentUniqueIds,
            isForEveryone = data.isForEveryone,
            isHard = data.isHard;

        if (self.selected && self.selected.id === roomId) {
          // loop through the array of unique_ids
          commentUniqueIds.map(function (id) {
            var commentToBeFound = self.selected.comments.findIndex(function (comment) {
              return comment.unique_id === id;
            });

            if (commentToBeFound > -1) {
              if (isHard) {
                self.selected.comments.splice(commentToBeFound, 1);
              } else {
                self.selected.comments[commentToBeFound].message = 'this message has been deleted';
              }
            }
          });
        }

        if (self.options.commentDeletedCallback) {
          self.options.commentDeletedCallback(data);
        }
      });
      /**
       * Called when the comment has been delivered
       */

      self.events.on('comment-delivered', function (response) {
        self.logging('comment-delivered', response);
        console.log('before response checking');
        if (!response) return false;
        console.log('after response checking', self.options.commentDeliveredCallback);

        if (self.options.commentDeliveredCallback) {
          console.log('inside callback check');
          return self.options.commentDeliveredCallback(response);
        } // find comment with the id or unique id listed from response
        // const commentToFind = self.selected.comments.find(comment =>
        //   comment.id === response.id || comment.uniqueId === response.uniqueId);

      });
      /**
       * Called when a comment has been read
       */

      self.events.on('comment-read', function (response) {
        self.logging('comment-read', response);

        if (self.options.commentReadCallback) {
          self.options.commentReadCallback(response);
        }
      });
      /**
       * Called when new chatroom has been created
       */

      self.events.on('chat-room-created', function (response) {
        self.isLoading = false;

        if (self.options.chatRoomCreatedCallback) {
          self.options.chatRoomCreatedCallback(response);
        }
      });
      /**
       * Called when a new room with type of group has been created
       */

      self.events.on('group-room-created', function (response) {
        self.isLoading = false;

        if (self.options.groupRoomCreatedCallback) {
          self.options.groupRoomCreatedCallback(response);
        }
      });
      /**
       * Called when user clicked on Chat SDK Header
       */

      self.events.on('header-clicked', function (response) {
        if (self.options.headerClickedCallback) {
          self.options.headerClickedCallback(response);
        }
      });
      /**
       * Called when there's new presence data of currently subscribed target user (last seen timestamp)
       * @param {string} data MQTT Payload with format of "x:xxxxxxxxxxxxx"
       */

      self.events.on('presence', function (data) {
        var payload = data.split(':');

        if (self.chatmateStatus !== payload[0]) {
          self.chatmateStatus = payload[0] === 1 ? 'Online' : "Last seen ".concat(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_10___default()(Number(payload[1].substring(0, 13))));
        }

        if (self.options.presenceCallback) self.options.presenceCallback(data);
      });
      self.events.on('typing', function (data) {
        if (self.options.typingCallback) self.options.typingCallback(data);
      });
      /**
       * Called when user clicked on Message Info
       */

      self.events.on('message-info', function (response) {
        if (self.options.messageInfoCallback) {
          self.options.messageInfoCallback(response);
        }
      });
      /**
       * Called when new particant was added into a group
       */

      self.events.on('participants-added', function (response) {
        var _this$selected$partic;

        if (response == null || _this.selected == null) return;

        (_this$selected$partic = _this.selected.participants).push.apply(_this$selected$partic, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(response));
      });
      /**
       * Called when particant was removed from a group
       */

      self.events.on('participants-removed', function (response) {
        if (response == null || _this.selected == null) return;

        var participants = _this.selected.participants.filter(function (participant) {
          return response.indexOf(participant.email) <= -1;
        });

        _this.selected.participants = participants;
      });
      /**
       * Called when user was added to blocked list
       */

      self.events.on('block-user', function (response) {
        if (self.options.blockUserCallback) {
          self.options.blockUserCallback(response);
        }
      });
      /**
       * Called when user was removed from blocked list
       */

      self.events.on('unblock-user', function (response) {
        if (self.options.unblockUserCallback) {
          self.options.unblockUserCallback(response);
        }
      });
    }
  }, {
    key: "onReconnectMqtt",
    value: function onReconnectMqtt() {
      if (!this.selected) return;
      if (this.options.onReconnectCallback) this.options.onReconnectedCallback();
      this.loadComments(this.selected.id);
    }
  }, {
    key: "_callNewMessagesCallback",
    value: function _callNewMessagesCallback(comments) {
      if (this.options.newMessagesCallback) {
        this.options.newMessagesCallback(comments);
      } // let's sort the comments

    }
  }, {
    key: "updateLastReceivedComment",
    value: function updateLastReceivedComment(id) {
      if (this.last_received_comment_id < id) this.last_received_comment_id = id;
    }
    /**
     * Setting Up User Credentials for next API Request
     * @param {string} userId - client userId (will be used for login or register)
     * @param {string} key - client unique key
     * @param {string} username - client username
     * @param {string} avatar_url - the url for chat avatar (optional)
     * @return {void}
     */

  }, {
    key: "setUser",
    value: function setUser(userId, key, username, avatarURL, extras) {
      var self = this;
      self.events.emit('start-init');
      self.user_id = userId;
      self.key = key;
      self.username = username;
      self.avatar_url = avatarURL;
      var params = {
        email: this.user_id,
        password: this.key,
        username: this.username,
        extras: extras ? JSON.stringify(extras) : null
      };
      if (this.avatar_url) params.avatar_url = this.avatar_url;
      return self.authAdapter.loginOrRegister(params).then(function (response) {
        self.isInit = true;
        self.events.emit('login-success', response);
      }, function (error) {
        return self.events.emit('login-error', error);
      });
    }
  }, {
    key: "setUserWithIdentityToken",
    value: function setUserWithIdentityToken(data) {
      if (!data || !('user' in data)) return this.events.emit('login-error', data);
      this.email = data.user.email;
      this.user_id = data.user.email;
      this.key = data.identity_token;
      this.username = data.user.username;
      this.avatar_url = data.user.avatar_url;
      this.isInit = true;
      this.events.emit('login-success', data);
    }
  }, {
    key: "logout",
    value: function logout() {
      this.selected = null;
      this.isInit = false;
      this.isLogin = false;
      this.userData = {};
      this.realtimeAdapter.disconnect();
    } // Activate Sync Feature if `http` or `both` is chosen as sync value when init

  }, {
    key: "activateSync",
    value: function activateSync() {
      var self = this;
      if (self.isSynced) return false;
      self.isSynced = true;
      self.httpsync = setInterval(function () {
        return self.synchronize();
      }, 3500);
      self.eventsync = setInterval(function () {
        return self.synchronizeEvent();
      }, 3500);
    }
  }, {
    key: "disableSync",
    value: function disableSync() {
      var self = this;
      self.isSynced = false;
      clearInterval(self.httpsync);
      clearInterval(self.eventsync);
    }
    /**
     * This method let us get new comments from server
     * If comment count > 0 then we have new message
     */

  }, {
    key: "synchronize",
    value: function synchronize(lastId) {
      var _this2 = this;

      var idToBeSynced = lastId || this.last_received_comment_id;
      this.userAdapter.sync(idToBeSynced).then(function (comments) {
        if (!comments) return false;
        if (comments.length > 0) _this2.events.emit('newmessages', comments);
      }).catch(function (error) {
        console.error('Error when syncing', error);
      });
    }
  }, {
    key: "synchronizeEvent",
    value: function synchronizeEvent(lastId) {
      var self = this;
      var idToBeSynced = lastId || this.last_received_comment_id;
      this.userAdapter.syncEvent(idToBeSynced).then(function (res) {
        if (!res) return false;
        res.events.forEach(function (event) {
          var data = event.payload.data;

          if (data.hasOwnProperty('deleted_messages')) {
            data.deleted_messages.forEach(function (message) {
              self.events.emit('commend-deleted', {
                roomId: message.room_id,
                commentUniqueIds: message.message_unique_ids,
                isForEveryone: true,
                isHard: data.is_hard_delete
              });
            });
          } else if (data.hasOwnProperty('deleted_rooms')) {
            data.deleted_rooms.forEach(function (room) {
              self.events.emit('room-cleared', room);
            });
          }
        });
      }).catch(function (error) {
        console.error('Error when synchronizing event', error);
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.logout();
    }
  }, {
    key: "setActiveRoom",
    value: function setActiveRoom(room) {
      var _this3 = this;

      // when we activate a room
      // we need to unsubscribe from typing event
      if (this.selected) {
        this.realtimeAdapter.unsubscribeTyping(); // before we unsubscribe, we need to get the userId first
        // and only unsubscribe if the previous room is having a type of 'single'

        if (this.selected.room_type === 'single') {
          var unsubscribedUserId = this.selected.participants.filter(function (p) {
            return p.email !== _this3.user_id;
          });

          if (unsubscribedUserId.length > 0) {
            this.realtimeAdapter.unsubscribeRoomPresence(unsubscribedUserId[0].email);
          }
        }
      }

      if (room.participants == null) room.participants = [];
      var targetUserId = room.participants.find(function (p) {
        return p.email !== _this3.user_id;
      });
      this.chatmateStatus = null;
      this.isTypingStatus = null;
      this.selected = room; // found a bug where there's a race condition, subscribing to mqtt
      // while mqtt is still connecting, so we'll have to do this hack

      var initialSubscribe = setInterval(function () {
        // Clear Interval when realtimeAdapter has been Populated
        if (_this3.debugMode) {
          console.log('Trying Initial Subscribe');
        }

        if (_this3.realtimeAdapter != null) {
          if (_this3.debugMode) {
            console.log(_this3.realtimeAdapter);
            console.log('MQTT Connected');
          }

          clearInterval(initialSubscribe); // before we unsubscribe, we need to get the userId first
          // and only unsubscribe if the previous room is having a type of 'single'

          if (room.room_type === 'single' && targetUserId != null) {
            _this3.realtimeAdapter.subscribeRoomPresence(targetUserId.email);
          } // we need to subscribe to new room typing event now


          if (_this3.selected != null && !_this3.selected.isChannel) {
            _this3.realtimeAdapter.subscribeTyping(room.id);

            _this3.events.emit('room-changed', _this3.selected);
          }

          if (_this3.debugMode && _this3.realtimeAdapter == null) {
            console.log('Retry');
          }
        } else {
          if (_this3.debugMode) {
            console.log('MQTT Not Connected, yet');
          }
        }
      }, 3000);
    }
    /**
     * Chat with targetted email
     * @param userId {string} - target userId
     * @param options {object} - optional data sent to qiscus database
     * @param distinct_id {string | optional} - unique string to differentiate chat room with same target
     * @return room <Room>
     */

  }, {
    key: "chatTarget",
    value: function chatTarget(userId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // make sure data already loaded first (user already logged in)
      if (this.userData.length != null) return false;
      var self = this;
      var initialMessage = options ? options.message : null;
      var distinctId = options.distinctId;
      self.isLoading = true;
      self.isTypingStatus = ''; // Create room

      return this.roomAdapter.getOrCreateRoom(userId, options, distinctId).then(function (response) {
        var room = new _lib_Room__WEBPACK_IMPORTED_MODULE_12__["default"](response);
        self.last_received_comment_id = self.last_received_comment_id < room.last_comment_id ? room.last_comment_id : self.last_received_comment_id;
        self.isLoading = false;
        self.setActiveRoom(room); // id of last comment on this room

        var lastComment = room.comments[room.comments.length - 1];
        if (lastComment) self.readComment(room.id, lastComment.id);
        self.events.emit('chat-room-created', {
          room: room
        });
        if (!initialMessage) return room;
        var topicId = room.id;
        var message = initialMessage;
        self.sendComment(topicId, message).then().catch(function (err) {
          console.error('Error when submit comment', err);
        });
        return Promise.resolve(room);
      }, function (err) {
        console.error('Error when creating room', err);
        self.isLoading = false;
        return Promise.reject(err);
      });
    }
    /**
     *
     * Open a group chat or target a specific room id
     *
     * @param {int} id
     * @returns Room <Room>
     * @memberof QiscusSDK
     */

  }, {
    key: "chatGroup",
    value: function chatGroup(id) {
      var self = this;
      if (!self.isInit) return;
      return self.getRoomById(id).then(function (response) {
        return Promise.resolve(response);
      }, function (err) {
        return Promise.reject(err);
      });
    }
    /**
     * @param {int} id - Room Id
     * @return {Room} Room data
     */

  }, {
    key: "getRoomById",
    value: function getRoomById(id) {
      var _this4 = this;

      if (!this.isInit) return;
      var self = this;
      self.isLoading = true;
      self.isTypingStatus = '';
      return self.roomAdapter.getRoomById(id).then(function (response) {
        // make sure the room hasn't been pushed yet
        var roomData = response.results.room;
        roomData.name = roomData.room_name;
        roomData.comments = response.results.comments.reverse();
        var room = new _lib_Room__WEBPACK_IMPORTED_MODULE_12__["default"](roomData);
        self.last_received_comment_id = self.last_received_comment_id < room.last_comment_id ? room.last_comment_id : self.last_received_comment_id;
        self.setActiveRoom(room);
        self.isLoading = false; // id of last comment on this room

        var lastComment = room.comments[room.comments.length - 1];
        if (lastComment) self.readComment(room.id, lastComment.id);

        if (room.isChannel) {
          _this4.realtimeAdapter.subscribeChannel(_this4.AppId, room.unique_id);
        }

        return Promise.resolve(room);
      }, function (error) {
        console.error('Error getting room by id', error);
        return Promise.reject(error);
      });
    }
    /**
     * @param {int} id - Room Id
     * @param {string} roomName
     * @param {string} avatarURL
     * @return {Room} Room data
     */

  }, {
    key: "getOrCreateRoomByUniqueId",
    value: function getOrCreateRoomByUniqueId(id, roomName, avatarURL) {
      var _this5 = this;

      var self = this;
      self.isLoading = true;
      self.isTypingStatus = '';
      return self.roomAdapter.getOrCreateRoomByUniqueId(id, roomName, avatarURL).then(function (response) {
        // make sure the room hasn't been pushed yet
        var room = new _lib_Room__WEBPACK_IMPORTED_MODULE_12__["default"](response);
        self.last_received_comment_id = self.last_received_comment_id < room.last_comment_id ? room.last_comment_id : self.last_received_comment_id;
        self.setActiveRoom(room);
        self.isLoading = false;
        var lastComment = room.comments[room.comments.length - 1];
        if (lastComment) self.readComment(room.id, lastComment.id);

        _this5.realtimeAdapter.subscribeChannel(_this5.AppId, room.unique_id);

        return Promise.resolve(room); // self.events.emit('group-room-created', self.selected)
      }, function (error) {
        // console.error('Error getting room by id', error)
        return Promise.reject(error);
      });
    }
  }, {
    key: "getOrCreateRoomByChannel",
    value: function getOrCreateRoomByChannel(channel, name, avatarURL) {
      return this.getOrCreateRoomByUniqueId(channel, name, avatarURL);
    }
    /**
     * TODO: This operation is heavy, let's find another way
     *
     * @memberof QiscusSDK
     */

  }, {
    key: "sortComments",
    value: function sortComments() {
      this.selected && this.selected.comments.sort(function (leftSideComment, rightSideComment) {
        return leftSideComment.unix_timestamp - rightSideComment.unix_timestamp;
      });
    }
  }, {
    key: "loadRoomList",
    value: function () {
      var _loadRoomList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var params,
            rooms,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.next = 3;
                return this.userAdapter.loadRoomList(params);

              case 3:
                rooms = _context.sent;
                return _context.abrupt("return", rooms.map(function (room) {
                  room.last_comment_id = room.last_comment.id;
                  room.last_comment_message = room.last_comment.message;
                  room.last_comment_message_created_at = room.last_comment.timestamp;
                  room.room_type = room.chat_type;
                  room.comments = [];
                  return new _lib_Room__WEBPACK_IMPORTED_MODULE_12__["default"](room);
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function loadRoomList() {
        return _loadRoomList.apply(this, arguments);
      };
    }()
  }, {
    key: "loadComments",
    value: function loadComments(roomId) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.userAdapter.loadComments(roomId, options).then(function (comments) {
        if (_this6.selected != null) {
          _this6.selected.receiveComments(comments.reverse());

          _this6.sortComments();
        }

        return Promise.resolve(comments);
      });
    }
  }, {
    key: "loadMore",
    value: function loadMore(lastCommentId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.selected == null) return;
      options.last_comment_id = lastCommentId;
      options.after = false;
      return this.loadComments(this.selected.id, options);
    }
    /**
     *
     * Search Qiscus Messages
     *
     * @param {any} [params={query,room_id,last_comment_id}]
     * @memberof qiscusSDK
     */

  }, {
    key: "searchMessages",
    value: function () {
      var _searchMessages = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var params,
            messages,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                console.warn('Deprecated: search message will be removed on next release');
                _context2.next = 4;
                return this.userAdapter.searchMessages(params);

              case 4:
                messages = _context2.sent;
                return _context2.abrupt("return", messages.map(function (message) {
                  return new _lib_Comment__WEBPACK_IMPORTED_MODULE_11__["default"](message);
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function searchMessages() {
        return _searchMessages.apply(this, arguments);
      };
    }()
  }, {
    key: "updateProfile",
    value: function updateProfile(user) {
      var _this7 = this;

      return this.userAdapter.updateProfile(user).then(function (res) {
        _this7.events.emit('profile-updated', user);
      }, function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "getNonce",
    value: function getNonce() {
      return superagent__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(this.baseURL, "/api/v2/sdk/auth/nonce")).send().set('qiscus_sdk_app_id', "".concat(this.AppId)).set('qiscus_sdk_version', "".concat(this.version)).then(function (res) {
        return Promise.resolve(res.body.results);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "verifyIdentityToken",
    value: function verifyIdentityToken(identityToken) {
      return superagent__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(this.baseURL, "/api/v2/sdk/auth/verify_identity_token")).send({
        identity_token: identityToken
      }).set('qiscus_sdk_app_id', "".concat(this.AppId)).set('qiscus_sdk_version', "".concat(this.version)).then(function (res) {
        return Promise.resolve(res.body.results);
      }, function (err) {
        return Promise.reject(err);
      });
    }
    /**
     *
     * Step of submitting:
     * - we need to create a new comment object
     * - attach it with negative number id, and also the uniqueId, uniqueId is used
     *   to target this particular comment when there's response from server (sent, delivered state)
     * @param {Int} topicId - the topic id of comment to be submitted
     * @param {String} commentMessage - comment to be submitted
     * @return {Promise}
     */
    // #region sendComment

  }, {
    key: "sendComment",
    value: function sendComment(topicId, commentMessage, uniqueId) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'text';
      var payload = arguments.length > 4 ? arguments[4] : undefined;
      var extras = arguments.length > 5 ? arguments[5] : undefined;
      var self = this; // set extra data, etc

      if (self.options.prePostCommentCallback) {
        self.options.prePostCommentCallback(commentMessage);
      }
      /**
       * example:
       * commentFormaterCallback(msg) {
       *  return filterBadWords(msg) // define your own filter function and return its' value
       * }
       */


      if (self.options.commentFormaterCallback) {
        commentMessage = self.options.commentFormaterCallback(commentMessage);
      }

      self.pendingCommentId--;
      var commentData = {
        message: commentMessage,
        username_as: this.username,
        username_real: this.user_id,
        user_avatar_url: this.userData.avatar_url,
        id: parseInt(Math.random() * 100000000),
        type: type || 'text',
        timestamp: date_fns_format__WEBPACK_IMPORTED_MODULE_9___default()(new Date()),
        unique_id: uniqueId
      };
      if (type !== 'text') commentData.payload = JSON.parse(payload);
      var pendingComment = self.prepareCommentToBeSubmitted(commentData); // push this comment unto active room

      if (type === 'reply') {
        // change payload for pendingComment
        // get the comment for current replied id
        var parsedPayload = JSON.parse(payload);
        var repliedMessage = self.selected.comments.find(function (cmt) {
          return cmt.id === parsedPayload.replied_comment_id;
        });
        parsedPayload.replied_comment_message = repliedMessage.type === 'reply' ? repliedMessage.payload.text : repliedMessage.message;
        parsedPayload.replied_comment_sender_username = repliedMessage.username_as;
        pendingComment.payload = parsedPayload;
      }

      if (self.selected) self.selected.comments.push(pendingComment);
      var extrasToBeSubmitted = extras || self.extras;
      return this.userAdapter.postComment(topicId, commentMessage, pendingComment.unique_id, type, payload, extrasToBeSubmitted).then(function (res) {
        if (!self.selected) return Promise.resolve(res); // When the posting succeeded, we mark the Comment as sent,
        // so all the interested party can be notified.

        pendingComment.markAsSent();
        pendingComment.id = res.id;
        pendingComment.before_id = res.comment_before_id; // update the timestamp also then re-sort the comment list

        pendingComment.unix_timestamp = res.unix_timestamp;
        self.sortComments();
        return Promise.resolve(res);
      }, function (err) {
        pendingComment.markAsFailed();
        return Promise.reject(err);
      });
    } // #endregion

  }, {
    key: "getUsers",
    value: function getUsers() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return this.HTTPAdapter.get_request('api/v2/sdk/get_user_list').query({
        token: this.userData.token,
        query: query,
        page: page,
        limit: limit
      }).then(function (resp) {
        return Promise.resolve(resp.body.results);
      });
    }
  }, {
    key: "getRoomParticipants",
    value: function getRoomParticipants(roomUniqueId) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.HTTPAdapter.get_request('api/v2/sdk/room_participants').query({
        token: this.userData.token,
        room_unique_id: roomUniqueId,
        offset: offset
      }).then(function (resp) {
        return Promise.resolve(resp.body.results);
      });
    }
  }, {
    key: "resendComment",
    value: function resendComment(comment) {
      if (this.selected == null) return;
      var self = this;
      var room = self.selected;
      var pendingComment = room.comments.find(function (cmtToFind) {
        return cmtToFind.id === comment.id;
      });
      var extrasToBeSubmitted = self.extras;
      return this.userAdapter.postComment(room.id, pendingComment.message, pendingComment.unique_id, comment.type, comment.payload, extrasToBeSubmitted).then(function (res) {
        // When the posting succeeded, we mark the Comment as sent,
        // so all the interested party can be notified.
        pendingComment.markAsSent();
        pendingComment.id = res.id;
        pendingComment.before_id = res.comment_before_id;
        return new Promise(function (resolve, reject) {
          return resolve(self.selected);
        });
      }, function (err) {
        pendingComment.markAsFailed();
        return new Promise(function (resolve, reject) {
          return reject(err);
        });
      });
    }
  }, {
    key: "prepareCommentToBeSubmitted",
    value: function prepareCommentToBeSubmitted(comment) {
      var commentToBeSubmitted, uniqueId;
      commentToBeSubmitted = new _lib_Comment__WEBPACK_IMPORTED_MODULE_11__["default"](comment); // We're gonna use timestamp for uniqueId for now.
      // "bq" stands for "Bonjour Qiscus" by the way.

      uniqueId = 'bq' + Date.now();
      if (comment.unique_id) uniqueId = comment.unique_id;
      commentToBeSubmitted.attachUniqueId(uniqueId);
      commentToBeSubmitted.markAsPending();
      commentToBeSubmitted.isDelivered = false;
      commentToBeSubmitted.isSent = false;
      commentToBeSubmitted.isRead = false;
      commentToBeSubmitted.unix_timestamp = Math.round(new Date().getTime() / 1000);
      return commentToBeSubmitted;
    }
    /**
     * Update room
     * @param {id, room_name, avatar_url, options} args
     * @return Promise
     */

  }, {
    key: "updateRoom",
    value: function updateRoom(args) {
      return this.roomAdapter.updateRoom(args);
    }
  }, {
    key: "removeSelectedRoomParticipants",
    value: function removeSelectedRoomParticipants() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
      if (is_js__WEBPACK_IMPORTED_MODULE_8___default.a.not.array(values)) return Promise.reject(new Error('`values` must have type of array'));
      var participants = this.selected.participants;

      if (!participants) {
        return Promise.reject(new Error('Nothing selected room chat.'));
      } // start to changes selected participants with newest values


      var participantsExclude = participants;

      if (payload === 'id') {
        participantsExclude = participants.filter(function (participant) {
          return values.indexOf(participant.id) <= -1;
        });
      }

      if (payload === 'email') {
        participantsExclude = participants.filter(function (participant) {
          return values.indexOf(participant.email) <= -1;
        });
      }

      if (payload === 'username') {
        participantsExclude = participants.filter(function (participant) {
          return values.indexOf(participant.username) <= -1;
        });
      }

      this.selected.participants = participantsExclude;
      return Promise.resolve(participants);
    }
    /**
     * Create group chat room
     * @param {string} name - Chat room name
     * @param {string[]} emails - Participant to be invited
     * @returns {Promise.<Room, Error>} - Room detail
     */

  }, {
    key: "createGroupRoom",
    value: function createGroupRoom(name, emails, options) {
      var self = this;
      if (!this.isLogin) throw new Error('Please initiate qiscus SDK first');
      return new _lib_utils__WEBPACK_IMPORTED_MODULE_19__["GroupChatBuilder"](this.roomAdapter).withName(name).withOptions(options).addParticipants(emails).create().then(function (res) {
        self.events.emit('group-room-created', res);
        return Promise.resolve(res);
      });
    }
    /**
     * Add array of participant into a group
     *
     * @param {any} roomId the room id this file is required for selected room_id to be process
     * @param {any} emails emails is must be an array
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "addParticipantsToGroup",
    value: function addParticipantsToGroup(roomId, emails) {
      var self = this;

      if (!Array.isArray(emails)) {
        throw new Error("emails' must be type of Array");
      }

      return self.roomAdapter.addParticipantsToGroup(roomId, emails).then(function (res) {
        self.events.emit('participants-added', res);
        return Promise.resolve(res);
      }, function (err) {
        return Promise.reject(err);
      });
    }
    /**
     * Remove array of participant from a group
     *
     * @param {any} roomId the room id this file is required for selected room_id to be process
     * @param {any} emails emails is must be an array
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "removeParticipantsFromGroup",
    value: function removeParticipantsFromGroup(roomId, emails) {
      var _this8 = this;

      if (is_js__WEBPACK_IMPORTED_MODULE_8___default.a.not.array(emails)) return Promise.reject(new Error('`emails` must have type of array'));
      return this.roomAdapter.removeParticipantsFromGroup(roomId, emails).then(function (res) {
        _this8.events.emit('participants-removed', emails);

        return Promise.resolve(res);
      });
    }
    /**
     * Get user block list
     *
     * @param {any} page the page is optional, default=1
     * @param {any} limit the limit is optional, default=20
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "getBlockedUser",
    value: function getBlockedUser() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var self = this;
      return self.userAdapter.getBlockedUser(page, limit).then(function (res) {
        return Promise.resolve(res);
      }, function (err) {
        return Promise.reject(err);
      });
    }
    /**
     * Add user to block list
     *
     * @param {any} email the email is required
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "blockUser",
    value: function blockUser(email) {
      var self = this;
      return self.userAdapter.blockUser(email).then(function (res) {
        self.events.emit('block-user', res);
        return Promise.resolve(res);
      }, function (err) {
        return Promise.reject(err);
      });
    }
    /**
     * Remove user from block list
     *
     * @param {any} email the email is required
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "unblockUser",
    value: function unblockUser(email) {
      var self = this;
      return self.userAdapter.unblockUser(email).then(function (res) {
        self.events.emit('unblock-user', res);
        return Promise.resolve(res);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "upload",
    value: function upload(file, callback) {
      return superagent__WEBPACK_IMPORTED_MODULE_6___default.a.post(this.uploadURL).attach('file', file).field('token', this.userData.token).set('qiscus_sdk_app_id', this.AppId).set('qiscus_sdk_token', this.userData.token).set('qiscus_sdk_user_id', this.user_id).on('progress', function (event) {
        if (event.direction === 'upload') callback(null, event);
      }).then(function (resp) {
        var url = resp.body.results.file.url;
        callback(null, null, resp.body.results.file.url);
        return Promise.resolve(url);
      }).catch(function (error) {
        callback(error);
        return Promise.reject(error);
      });
    }
    /**
     * Upload a file to qiscus sdk server
     *
     * @param {any} roomId the room id this file need to be submitted to
     * @param {any} file you can get this from event `e.target.files || e.dataTransfer.files`
     * @returns Promise
     * @memberof QiscusSDK
     */

  }, {
    key: "uploadFile",
    value: function uploadFile(roomId, file) {
      var self = this;
      var formData = new FormData();
      formData.append('file', file);
      formData.append('token', self.userData.token);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', "".concat(self.baseURL, "/api/v2/sdk/upload"), true);
      xhr.setRequestHeader('qiscus_sdk_app_id', "".concat(self.AppId));
      xhr.setRequestHeader('qiscus_sdk_user_id', "".concat(self.user_id));
      xhr.setRequestHeader('qiscus_sdk_token', "".concat(self.userData.token));

      xhr.onload = function () {
        if (xhr.status === 200) {
          // file(s) uploaded), let's post to comment
          var url = JSON.parse(xhr.response).results.file.url;
          self.events.emit('fileupload', url); // send

          return self.sendComment(roomId, "[file] ".concat(url, " [/file]"));
        } else {
          return Promise.reject(xhr);
        }
      };

      xhr.send(formData);
    }
  }, {
    key: "addUploadedFile",
    value: function addUploadedFile(name, roomId) {
      this.uploadedFiles.push(new FileUploaded(name, roomId));
    }
  }, {
    key: "removeUploadedFile",
    value: function removeUploadedFile(name, roomId) {
      var index = this.uploadedFiles.findIndex(function (file) {
        return file.name === name && file.roomId === roomId;
      });
      this.uploadedFiles.splice(index, 1);
    }
  }, {
    key: "publishTyping",
    value: function publishTyping(val) {
      this.realtimeAdapter.publishTyping(val);
    }
    /**
     * Params consisted of
     * @param {room_ids} array of room ids
     * @param {room_unique_ids} array of of room unique ids
     * @param {show_participants} show list of participants, default true
     * @param {show_removed} show removed room, default false
     * @returns
     * @memberof QiscusSDK
     */

  }, {
    key: "getRoomsInfo",
    value: function getRoomsInfo(params) {
      return this.userAdapter.getRoomsInfo(params);
    }
  }, {
    key: "deleteComment",
    value: function deleteComment(roomId, commentUniqueIds, isForEveryone, isHard) {
      var _this9 = this;

      if (!Array.isArray(commentUniqueIds)) {
        throw new Error("unique ids' must be type of Array");
      }

      return this.userAdapter.deleteComment(roomId, commentUniqueIds, isForEveryone, isHard).then(function (res) {
        _this9.events.emit('comment-deleted', {
          roomId: roomId,
          commentUniqueIds: commentUniqueIds,
          isForEveryone: isForEveryone,
          isHard: isHard
        });

        return Promise.resolve(res);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "clearRoomsCache",
    value: function clearRoomsCache() {
      var _this10 = this;

      // remove all room except currently selected
      if (this.selected) {
        // clear the map
        this.room_name_id_map = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, this.selected.name, this.selected.id); // get current index and array length

        var roomLength = this.rooms.length;
        var curIndex = this.rooms.findIndex(function (room) {
          return room.id === _this10.selected.id;
        });

        if (!(curIndex + 1 === roomLength)) {
          this.rooms.splice(curIndex + 1, roomLength - (curIndex + 1));
        } // ambil ulang cur index nya, klo udah di awal ga perlu lagi kode dibawah ini


        curIndex = this.rooms.findIndex(function (room) {
          return room.id === _this10.selected.id;
        });

        if (curIndex > 0 && this.rooms.length > 1) {
          this.rooms.splice(1, this.rooms.length - 1);
        }
      }
    }
  }, {
    key: "exitChatRoom",
    value: function exitChatRoom() {
      // remove all subscriber
      this.realtimeAdapter.unsubscribeTyping();
      this.realtimeAdapter.unsubscribeRoomPresence();
      this.selected = null;
    }
  }, {
    key: "clearRoomMessages",
    value: function clearRoomMessages(roomIds) {
      if (!Array.isArray(roomIds)) {
        throw new Error('room_ids must be type of array');
      }

      return this.userAdapter.clearRoomMessages(roomIds);
    }
  }, {
    key: "logging",
    value: function logging(message) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.debugMode) {
        console.log(message, params);
      }
    }
  }, {
    key: "getTotalUnreadCount",
    value: function getTotalUnreadCount() {
      return this.roomAdapter.getTotalUnreadCount().then(function (response) {
        return Promise.resolve(response);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "publishEvent",
    value: function publishEvent() {
      var _this$customEventAdap;

      (_this$customEventAdap = this.customEventAdapter).publishEvent.apply(_this$customEventAdap, arguments);
    }
  }, {
    key: "subscribeEvent",
    value: function subscribeEvent() {
      var _this$customEventAdap2;

      (_this$customEventAdap2 = this.customEventAdapter).subscribeEvent.apply(_this$customEventAdap2, arguments);
    }
  }, {
    key: "unsubscribeEvent",
    value: function unsubscribeEvent() {
      var _this$customEventAdap3;

      (_this$customEventAdap3 = this.customEventAdapter).unsubscribeEvent.apply(_this$customEventAdap3, arguments);
    }
  }, {
    key: "noop",
    value: function noop() {}
  }, {
    key: "logger",
    get: function get() {
      if (this.debugMode) return console.log.bind(console, 'Qiscus ->');
      return this.noop;
    }
  }]);

  return QiscusSDK;
}();

var FileUploaded = function FileUploaded(name, roomId) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, FileUploaded);

  this.name = name;
  this.roomId = roomId;
  this.progress = 0;
};

/* harmony default export */ __webpack_exports__["default"] = (QiscusSDK);

/***/ }),

/***/ "./src/lib/Comment.js":
/*!****************************!*\
  !*** ./src/lib/Comment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/lib/utils.js");





var Comment =
/*#__PURE__*/
function () {
  function Comment(comment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Comment);

    this.id = comment.id;
    this.before_id = comment.comment_before_id;
    this.message = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(comment.message);
    this.username_as = comment.username_as || comment.username;
    this.username_real = comment.username_real || comment.email;
    this.date = date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(comment.timestamp, 'YYYY-MM-DD');
    this.time = date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(comment.timestamp, 'HH:mm');
    this.timestamp = comment.timestamp;
    this.unique_id = comment.unique_temp_id || comment.unique_id;
    this.avatar = comment.user_avatar_url;
    this.room_id = comment.room_id;
    this.isChannel = comment.is_public_channel;
    this.unix_timestamp = comment.unix_timestamp;
    /* comment status */

    this.is_deleted = comment.is_deleted;
    this.isPending = false;
    this.isFailed = false;
    this.isDelivered = false;
    this.isRead = false;
    this.isSent = false;
    this.attachment = null;
    this.payload = comment.payload;
    this.status = comment.status; // manage comment type

    if (comment.type === 'reply') {
      comment.payload.replied_comment_message = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(comment.payload.replied_comment_message);
      comment.payload.text = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(comment.payload.text);
    } // supported comment type text, account_linking, buttons
    // let supported_comment_type = [
    //   'text','account_linking','buttons','reply','system_event','card', 'custom', 'contact_person', 'location',
    //   'carousel'
    // ];


    this.type = comment.type;
    this.subtype = comment.type === 'custom' ? comment.payload.type : null; // comment status
    // comment status

    if (comment.status === 'sent') {
      this.markAsSent();
    } else if (comment.status === 'delivered') {
      this.markAsDelivered();
    } else if (comment.status === 'read') {
      this.markAsRead();
    }

    ;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Comment, [{
    key: "isAttachment",
    value: function isAttachment(message) {
      return message.substring(0, '[file]'.length) === '[file]';
    }
  }, {
    key: "isImageAttachment",
    value: function isImageAttachment(message) {
      return this.isAttachment(message) && message.match(/\.(jpg|jpeg|gif|png)/i) != null;
    }
  }, {
    key: "attachUniqueId",
    value: function attachUniqueId(uniqueId) {
      this.unique_id = uniqueId;
    }
  }, {
    key: "getAttachmentURI",
    value: function getAttachmentURI(message) {
      if (!this.isAttachment(message)) return;
      var messageLength = message.length;
      var beginIndex = '[file]'.length;
      var endIndex = messageLength - '[/file]'.length;
      return message.substring(beginIndex, endIndex).trim();
    }
  }, {
    key: "setAttachment",
    value: function setAttachment(attachment) {
      this.attachment = attachment;
    }
  }, {
    key: "markAsPending",
    value: function markAsPending() {
      this.isPending = true;
      this.isDelivered = false;
      this.status = 'pending';
    }
  }, {
    key: "markAsSent",
    value: function markAsSent() {
      this.isSent = true;
      this.isPending = false;
      this.isFailed = false;
      this.status = 'sent';
    }
  }, {
    key: "markAsDelivered",
    value: function markAsDelivered() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Object.keys(options).length === 0) {
        this.isSent = true;
        this.isRead = false;
        this.isDelivered = true;
        this.status = 'delivered';
        return;
      }

      var participants = options.participants;
      var actorId = options.actor;
      var commentId = options.comment_id;
      var activeActorId = options.activeActorId;
      var actor = participants.find(function (it) {
        return it.email === actorId;
      });

      if (actor) {
        actor.last_comment_received_id = commentId;
        actor.last_comment_received_id_str = commentId;
      } // Get list of participants that has not receive the message
      // excluding current active user


      var unreceivedParticipants = participants.map(function (it) {
        return {
          commentId: it.last_comment_received_id,
          userId: it.email
        };
      }).filter(function (it) {
        return it.userId !== activeActorId;
      }).filter(function (it) {
        return it.commentId < _this.id;
      });

      if (unreceivedParticipants.length === 0) {
        this.isSent = true;
        this.isRead = false;
        this.isDelivered = true;
        this.status = 'delivered';
      }
    }
  }, {
    key: "markAsRead",
    value: function markAsRead() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Object.keys(options).length === 0) {
        this.isPending = false;
        this.isSent = true;
        this.isDelivered = true;
        this.isRead = true;
        this.status = 'read';
        return;
      }

      var participants = options.participants;
      var actorId = options.actor;
      var commentId = options.comment_id;
      var actor = participants.find(function (p) {
        return p.email === actorId;
      });

      if (actorId != null) {
        actor.last_comment_read_id = commentId;
        actor.last_comment_read_id_str = commentId.toString();
        actor.last_comment_received_id = commentId;
        actor.last_comment_received_id_str = commentId.toString();
      } // Get list of participants that has not read the message
      // excluding current active user


      var unreadParticipants = participants.map(function (it) {
        return {
          commentId: it.last_comment_read_id,
          userId: it.email
        };
      }).filter(function (it) {
        return it.userId !== options.activeActorId;
      }).filter(function (it) {
        return it.commentId < _this2.id;
      }); // If all participants already read the message, mark message as read

      if (unreadParticipants.length === 0) {
        this.isPending = false;
        this.isSent = true;
        this.isDelivered = true;
        this.isRead = true;
        this.status = 'read';
      }
    }
  }, {
    key: "markAsFailed",
    value: function markAsFailed() {
      this.isFailed = true;
      this.isPending = false;
      this.isStatus = 'failed';
    } // usually called when there's new comment with the same id
    // we just need to update its content

  }, {
    key: "update",
    value: function update(data) {
      // update properties that usually change
      this.id = data.id;
      this.before_id = data.comment_before_id;
      this.message = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(data.message);
      /* comment status */

      if (data.payload) this.payload = data.payload;
      if (data.status) this.status = data.status; // manage comment type

      if (data.type === 'reply') {
        this.payload.replied_comment_message = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(data.payload.replied_comment_message);
        this.payload.text = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(data.payload.text);
      } // comment status


      if (data.status === 'sent') {
        this.markAsSent();
      } else if (data.status === 'delivered') {
        this.markAsDelivered();
      } else if (data.status === 'read') {
        this.markAsRead();
      }

      ;
    }
  }]);

  return Comment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/lib/Room.js":
/*!*************************!*\
  !*** ./src/lib/Room.js ***!
  \*************************/
/*! exports provided: Room, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./src/lib/Comment.js");



/**
 * Holds chat rooms for qiscus chat sdk
 *
 * @example
 * let Room = new Room(roomData);
 * @export
 * @class Room
 */

var Room =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Room.
   * @param {any} roomData
   * @param {int} id    Room ID
   * @param {int} last_comment_id      Last comment id
   * @param {string} last_comment_message
   * @memberof Room
   */
  function Room(roomData) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Room);

    this.id = roomData.id;
    this.last_comment_id = roomData.last_comment_id;
    this.last_comment_message = roomData.last_comment_message;
    this.last_comment_message_created_at = roomData.last_comment_message_created_at;
    this.last_comment_topic_title = roomData.last_comment_topic_title;
    this.avatar = roomData.room_avatar || roomData.avatarURL || roomData.avatar_url;
    this.name = roomData.room_name;
    this.room_type = roomData.room_type || roomData.chat_type;
    this.secret_code = roomData.secret_code;
    this.participants = roomData.participants;
    this.options = roomData.options;
    this.topics = [];
    this.comments = [];
    this.count_notif = roomData.unread_count;
    this.isLoaded = false;
    this.unread_comments = [];
    this.custom_title = null;
    this.custom_subtitle = null;
    this.options = roomData.options;
    this.unique_id = roomData.unique_id;
    this.isChannel = roomData.is_public_channel;
    this.participantNumber = roomData.room_total_participants;
    if (roomData.comments) this.receiveComments(roomData.comments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Room, [{
    key: "isCurrentlySelected",
    value: function isCurrentlySelected(selected) {
      return this.id === selected.id;
    }
  }, {
    key: "getParticipantCount",
    value: function getParticipantCount() {
      if (this.participants == null) {
        return this.participantNumber;
      } else {
        return this.participants.length;
      }
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.custom_title = title;
    }
  }, {
    key: "setSubTitle",
    value: function setSubTitle(subtitle) {
      this.custom_subtitle = subtitle;
    }
    /**
     * Receive a single comment
     *
     * @param {Comment} comment
     * @memberof Room
     */

  }, {
    key: "receiveComment",
    value: function receiveComment(comment) {
      // Ignore if not from the same room
      if (comment.room_id !== this.id) return; // let's check first whether this room already has this specific comment

      var commentToFind = this.comments.find(function (cmt) {
        return cmt.unique_id === comment.unique_id;
      });

      if (commentToFind) {
        commentToFind.id = comment.id;
        commentToFind.message = comment.message;
        commentToFind.date = comment.date;
        commentToFind.time = comment.time;
        commentToFind.unix_timestamp = comment.unix_timestamp;
      } else {
        this.comments.push(comment);
      }
    }
  }, {
    key: "receiveComments",
    value: function receiveComments(comments) {
      var _this = this;

      comments.forEach(function (comment) {
        _this.receiveComment(new _Comment__WEBPACK_IMPORTED_MODULE_2__["default"](comment));
      });
    }
  }, {
    key: "getParticipant",
    value: function getParticipant(participantEmail) {
      return this.participants.find(function (p) {
        return p.email === participantEmail;
      }) || null;
    }
  }, {
    key: "addParticipant",
    value: function addParticipant(participant) {
      // get if there's existing participant, if any then push
      var participantToFind = this.getParticipant(participant.email);
      if (!participantToFind) this.participants.push(participant);
    }
  }]);

  return Room;
}();
/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./src/lib/adapters/auth.js":
/*!**********************************!*\
  !*** ./src/lib/adapters/auth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthAdapter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var AuthAdapter =
/*#__PURE__*/
function () {
  /**
  * Params used in this class
  * @method constructor
  * @param  {Object}    HTTPAdapter [Qiscus HTTP adapter]
  * @return {void}                Returns nothing
  */
  function AuthAdapter(HTTPAdapter) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthAdapter);

    this.HTTPAdapter = HTTPAdapter;
    this.token = HTTPAdapter.token;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AuthAdapter, [{
    key: "getNonce",
    value: function getNonce() {
      return this.HTTPAdapter.post('api/v2/sdk/auth/nonce').then(function (response) {
        return Promise.resolve(response.body.results);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "loginOrRegister",
    value: function loginOrRegister(params) {
      return this.HTTPAdapter.post('api/v2/sdk/login_or_register', params).then(function (response) {
        return new Promise(function (resolve, reject) {
          if (response.body.status !== 200) return reject(response);
          return resolve(response.body.results);
        });
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "verifyIdentityToken",
    value: function verifyIdentityToken(token) {
      return this.HTTPAdapter.post('api/v2/sdk/auth/verify_identity_token', {
        identity_token: token
      }).then(function (response) {
        return Promise.resolve(response.body.results);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }]);

  return AuthAdapter;
}();



/***/ }),

/***/ "./src/lib/adapters/custom-event.js":
/*!******************************************!*\
  !*** ./src/lib/adapters/custom-event.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomEventAdapter; });
/* harmony import */ var is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is_js */ "./node_modules/is_js/is.js");
/* harmony import */ var is_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");


function CustomEventAdapter(mqttAdapter, userId) {
  var events = Object(mitt__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var subscribedTopics = {};
  var reTopic = /^r\/[\w]+\/[\w]+\/e$/i;
  mqttAdapter.mqtt.on('message', function (topic, payload) {
    if (reTopic.test(topic)) events.emit(topic, payload);
  });

  var getTopic = function getTopic(roomId) {
    return "r/".concat(roomId, "/").concat(roomId, "/e");
  };

  return {
    publishEvent: function publishEvent(roomId, payload) {
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.undefined(roomId)) throw new Error('`roomId` required');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.not.string(roomId)) throw new TypeError('`roomId` must have type of string');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.undefined(payload)) throw new Error('`payload` required');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.not.object(payload)) throw new TypeError('`payload` must have type of object');

      var _payload = JSON.stringify({
        sender: userId,
        // ?
        data: payload
      });

      mqttAdapter.mqtt.publish(getTopic(roomId), _payload);
    },
    subscribeEvent: function subscribeEvent(roomId, callback) {
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.undefined(roomId)) throw new Error('`roomId` required');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.not.string(roomId)) throw new TypeError('`roomId` must have type of string');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.undefined(callback)) throw new Error('`callback` required');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.not.function(callback)) throw new TypeError('`callback` must have type of function');
      var topic = getTopic(roomId); // Only allow 1 subcription for now

      if (subscribedTopics[topic]) return;
      mqttAdapter.mqtt.subscribe(topic);

      var cb = function cb(payload) {
        var parsedPayload = JSON.parse(payload);
        callback(parsedPayload);
      };

      events.addListener(topic, cb);
      subscribedTopics[topic] = cb;
    },
    unsubscribeEvent: function unsubscribeEvent(roomId) {
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.undefined(roomId)) throw new Error('`roomId` required');
      if (is_js__WEBPACK_IMPORTED_MODULE_0___default.a.not.string(roomId)) throw new TypeError('`roomId` must have type of string');
      var topic = getTopic(roomId);
      if (!subscribedTopics[topic]) return;
      mqttAdapter.mqtt.unsubscribe(topic);
      events.removeListener(topic, subscribedTopics[topic]);
      subscribedTopics[topic] = null;
      delete subscribedTopics[topic];
    }
  };
}

/***/ }),

/***/ "./src/lib/adapters/http.js":
/*!**********************************!*\
  !*** ./src/lib/adapters/http.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HttpAdapter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);




var HttpAdapter =
/*#__PURE__*/
function () {
  function HttpAdapter(_ref) {
    var baseURL = _ref.baseURL,
        AppId = _ref.AppId,
        userId = _ref.userId,
        version = _ref.version;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpAdapter);

    this.baseURL = baseURL;
    this.token = null;
    this.userId = userId;
    this.AppId = AppId;
    this.version = version;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HttpAdapter, [{
    key: "setToken",
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: "get",
    value: function get(path) {
      var _this = this;

      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_this.baseURL, "/").concat(path));
        if (options && options.baseURL) req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(options.baseURL, "/").concat(path));
        req = _this.setupHeaders(req, headers);
        req.end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    } // eslint-disable-next-line

  }, {
    key: "get_request",
    value: function get_request(path) {
      var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(this.baseURL, "/").concat(path));
      req = this.setupHeaders(req, {});
      return req;
    }
  }, {
    key: "post",
    value: function post(path) {
      var _this2 = this;

      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_this2.baseURL, "/").concat(path));
        req = _this2.setupHeaders(req, headers);
        req.send(body).set('Content-Type', 'application/x-www-form-urlencoded').end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    } // eslint-disable-next-line

  }, {
    key: "post_json",
    value: function post_json(path) {
      var _this3 = this;

      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_this3.baseURL, "/").concat(path));
        req = _this3.setupHeaders(req, headers);
        req.send(body).set('Content-Type', 'application/json').end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    }
  }, {
    key: "put",
    value: function put(path) {
      var _this4 = this;

      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat(_this4.baseURL, "/").concat(path));
        req = _this4.setupHeaders(req, headers);
        req.send(body).set('Content-Type', 'application/x-www-form-urlencoded').end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    }
  }, {
    key: "patch",
    value: function patch(path) {
      var _this5 = this;

      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.patch("".concat(_this5.baseURL, "/").concat(path));
        req = _this5.setupHeaders(req, headers);
        req.send(body).set('Content-Type', 'application/x-www-form-urlencoded').end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    }
  }, {
    key: "del",
    value: function del(path) {
      var _this6 = this;

      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var req = superagent__WEBPACK_IMPORTED_MODULE_2___default.a.del("".concat(_this6.baseURL, "/").concat(path));
        req = _this6.setupHeaders(req, headers);
        req.send(body).set('Content-Type', 'application/json').end(function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    }
  }, {
    key: "setupHeaders",
    value: function setupHeaders(req, headers) {
      // let's give this default Authorization Header
      req.set('QISCUS_SDK_APP_ID', "".concat(this.AppId));
      req.set('QISCUS_SDK_USER_ID', "".concat(this.userId));
      req.set('QISCUS_SDK_TOKEN', "".concat(this.token));
      req.set('QISCUS_SDK_VERSION', "".concat(this.version)); // Return the req if no headers attached

      if (Object.keys(headers).length < 1) return req; // now let's process custom header

      for (var key in headers) {
        req.set(key, headers[key]);
      }

      return req;
    }
  }]);

  return HttpAdapter;
}();



/***/ }),

/***/ "./src/lib/adapters/mqtt.js":
/*!**********************************!*\
  !*** ./src/lib/adapters/mqtt.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MqttAdapter; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../match */ "./src/lib/match.js");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
/* harmony import */ var mqtt_lib_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mqtt/lib/connect */ "./node_modules/mqtt/lib/connect/index.js");
/* harmony import */ var mqtt_lib_connect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mqtt_lib_connect__WEBPACK_IMPORTED_MODULE_5__);







var MqttAdapter =
/*#__PURE__*/
function () {
  function MqttAdapter(url, core) {
    var _this = this,
        _match;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MqttAdapter);

    var emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var mqtt = mqtt_lib_connect__WEBPACK_IMPORTED_MODULE_5___default()(url, {
      will: {
        topic: "u/".concat(core.userData.email, "/s"),
        payload: 0,
        retain: true
      }
    }); // Define a read-only property so user cannot accidentially
    // overwrite it's value

    Object.defineProperties(this, {
      core: {
        value: core
      },
      emitter: {
        value: emitter
      },
      mqtt: {
        value: mqtt
      }
    });
    var matcher = Object(_match__WEBPACK_IMPORTED_MODULE_3__["match"])((_match = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reNewMessage), function (topic) {
      return _this.newMessageHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reNotification), function (topic) {
      return _this.notificationHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reTyping), function (topic) {
      return _this.typingHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reDelivery), function (topic) {
      return _this.deliveryReceiptHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reRead), function (topic) {
      return _this.readReceiptHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reOnlineStatus), function (topic) {
      return _this.onlinePresenceHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(this.reChannelMessage), function (topic) {
      return _this.channelMessageHandler.bind(_this, topic);
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_match, Object(_match__WEBPACK_IMPORTED_MODULE_3__["when"])(), function (topic) {
      return _this.logger('topic not handled', topic);
    }), _match)); // #region mqtt event

    this.mqtt.on('message', function (t, m) {
      var message = m.toString();
      var func = matcher(t);
      if (func != null) func(message);
    });
    this.mqtt.on('reconnect', function () {
      _this.logger('reconnect');

      _this.emit('reconnect');

      core.disableSync();
      core.synchronize();
      core.synchronizeEvent();
    });
    this.mqtt.on('close', function () {
      _this.logger('close');

      _this.emit('close');

      core.activateSync();
    });
    this.mqtt.on('error', function () {
      _this.logger('error');

      _this.emit('error');

      core.activateSync();
    }); // #endregion
    // TODO: Update core to use latest emitter
    // #region backward-compatible

    this.on('new-message', function (message) {
      core.events.emit('newmessages', [message]);
    });
    this.on('presence', function (data) {
      core.events.emit('presence', data);
    });
    this.on('comment-deleted', function (data) {
      core.events.emit('comment-deleted', data);
    });
    this.on('room-cleared', function (data) {
      core.events.emit('room-cleared', data);
    });
    this.on('typing', function (data) {
      core.events.emit('typing', {
        message: data.message,
        username: data.userId,
        room_id: data.roomId
      });
    });
    this.on('comment-delivered', function (data) {
      console.log('emitting delivered');

      _this.logger('emitting comment-delivered', data);

      core.events.emit('comment-delivered', {
        actor: data.userId,
        comment: data.comment
      });
    });
    this.on('comment-read', function (data) {
      core.events.emit('comment-read', {
        comment: data.comment,
        actor: data.userId
      });
    }); // #endregion
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MqttAdapter, [{
    key: "publish",
    value: function publish(topic, payload) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.mqtt.publish(topic, payload.toString(), options);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this2 = this;

      Object.keys(this.mqtt._resubscribeTopics).forEach(function (topic) {
        return _this2.unsubscribe(topic);
      });
    } // #region regexp

  }, {
    key: "noop",
    // #endregion
    value: function noop() {}
  }, {
    key: "newMessageHandler",
    value: function newMessageHandler(topic, message) {
      message = JSON.parse(message);
      this.logger('on:new-message', message);
      this.emit('new-message', message);
    }
  }, {
    key: "notificationHandler",
    value: function notificationHandler(topic, message) {
      var _this3 = this;

      this.logger('on:notification', message);
      message = JSON.parse(message);
      var data = message.payload.data;

      if ('deleted_messages' in data) {
        data.deleted_messages.forEach(function (message) {
          _this3.emit('comment-deleted', {
            roomId: message.room_id,
            commentUniqueIds: message.message_unique_ids,
            isForEveryone: true,
            isHard: true
          });
        });
      }

      if ('deleted_rooms' in data) {
        data.deleted_rooms.forEach(function (room) {
          _this3.emit('room-cleared', room);
        });
      }
    }
  }, {
    key: "typingHandler",
    value: function typingHandler(t, message) {
      this.logger('on:typing', t); // r/{roomId}/{roomId}/{userId}/t

      var topic = t.match(this.reTyping);
      if (topic[3] === this.core.user_id) return;
      var userId = topic[3];
      var roomId = topic[1];
      this.emit('typing', {
        message: message,
        userId: userId,
        roomId: roomId
      }); // TODO: Don't allow side-effect
      // it should be handled in the UI not core

      if (message === '1' && roomId === this.core.selected.id) {
        var actor = this.core.selected.participants.find(function (it) {
          return it.email === userId;
        });
        if (actor == null) return;
        var displayName = actor.username;
        this.core.isTypingStatus = "".concat(displayName, " is typing ...");
      } else {
        this.core.isTypingStatus = null;
      }
    }
  }, {
    key: "deliveryReceiptHandler",
    value: function deliveryReceiptHandler(t, message) {
      this.logger('on:delivered', t, message); // r/{roomId}/{roomId}/{userId}/d

      var topic = t.match(this.reDelivery);
      var data = message.split(':');
      var commentId = Number(data[0]);
      var commentUniqueId = data[1];
      var userId = topic[3];
      if (this.core.selected == null) return;
      var room = this.core.selected;
      var comment = room.comments.find(function (it) {
        return it.id === commentId || it.unique_id === commentUniqueId;
      });
      if (comment == null) return;
      if (comment.status === 'read') return;
      if (comment.username_real === userId) return;
      var options = {
        participants: room.participants,
        actor: userId,
        comment_id: commentId
      };
      room.comments.forEach(function (it) {
        if (it.status !== 'read' && it.id <= comment.id) {
          comment.markAsDelivered(options);
        }
      });
      if (comment.room_id == null) comment.room_id = room.id;
      this.emit('comment-delivered', {
        userId: userId,
        comment: comment
      });
    } // Todo only emit if the comment are realy read

  }, {
    key: "readReceiptHandler",
    value: function readReceiptHandler(t, message) {
      this.logger('on:read', t, message); // r/{roomId}/{roomId}/{userId}/r

      var topic = t.match(this.reRead);
      var data = message.split(':');
      var commentId = Number(data[0]);
      var commentUniqueId = data[1];
      var userId = topic[3];
      if (this.core.selected == null) return;
      var room = this.core.selected;
      var comment = room.comments.find(function (it) {
        return it.unique_id === commentUniqueId || it.id === commentId;
      });
      if (comment == null) return;
      var isOwnedComment = comment.username_real === this.core.user_id;
      var isOwnedEvent = userId === this.core.user_id;
      var isRead = comment.status === 'read';

      if (!isRead && isOwnedComment && !isOwnedEvent) {
        var options = {
          participants: room.participants,
          actor: userId,
          comment_id: Number(commentId),
          activeActorId: this.core.user_id
        };
        room.comments.forEach(function (it) {
          if (it.id <= comment.id) {
            it.markAsRead(options);
          }
        });
        if (comment.room_id == null) comment.room_id = room.id; // Only emit if comment are read

        if (!comment.isRead) return;
        this.emit('comment-read', {
          comment: comment,
          userId: userId
        });
      }
    }
  }, {
    key: "onlinePresenceHandler",
    value: function onlinePresenceHandler(topic, message) {
      this.logger('on:online-presence', topic);
      this.emit('presence', message);
    }
  }, {
    key: "channelMessageHandler",
    value: function channelMessageHandler(topic, message) {
      this.logger('on:channel-message', topic, message);
      this.emit('new-message', JSON.parse(message));
    } // #region old-methods

  }, {
    key: "subscribeChannel",
    value: function subscribeChannel(appId, uniqueId) {
      this.subscribe("".concat(appId, "/").concat(uniqueId, "/c"));
    }
  }, {
    key: "subscribeRoom",
    value: function subscribeRoom(roomId) {
      if (roomId == null) return;
      this.subscribe("r/".concat(roomId, "/").concat(roomId, "/+/t"));
      this.subscribe("r/".concat(roomId, "/").concat(roomId, "/+/d"));
      this.subscribe("r/".concat(roomId, "/").concat(roomId, "/+/r"));
    }
  }, {
    key: "unsubscribeRoom",
    value: function unsubscribeRoom(roomId) {
      if (this.core.selected == null) return;
      roomId = roomId || this.core.selected.id;
      this.unsubscribe("r/".concat(roomId, "/").concat(roomId, "/+t"));
      this.unsubscribe("r/".concat(roomId, "/").concat(roomId, "/+d"));
      this.unsubscribe("r/".concat(roomId, "/").concat(roomId, "/+r"));
    }
  }, {
    key: "subscribeUserChannel",
    value: function subscribeUserChannel() {
      this.subscribe("".concat(this.core.userData.token, "/c"));
      this.subscribe("".concat(this.core.userData.token, "/n"));
    }
  }, {
    key: "publishPresence",
    value: function publishPresence(userId) {
      this.core.logging('emitting presence status for user', userId);
      this.publish("u/".concat(userId, "/s"), 1, {
        retain: true
      });
    }
  }, {
    key: "subscribeUserPresence",
    value: function subscribeUserPresence(userId) {
      this.subscribe("u/".concat(userId, "/s"));
    }
  }, {
    key: "unsubscribeUserPresence",
    value: function unsubscribeUserPresence(userId) {
      this.unsubscribe("u/".concat(userId, "/s"));
    }
  }, {
    key: "publishTyping",
    value: function publishTyping(status) {
      if (this.core.selected == null) return;
      var roomId = this.core.selected.id;
      var userId = this.core.user_id;
      this.publish("r/".concat(roomId, "/").concat(roomId, "/").concat(userId, "/t"), status);
    } // #endregion

  }, {
    key: "subscribe",
    get: function get() {
      return this.mqtt.subscribe.bind(this.mqtt);
    }
  }, {
    key: "unsubscribe",
    get: function get() {
      return this.mqtt.unsubscribe.bind(this.mqtt);
    }
  }, {
    key: "emit",
    get: function get() {
      return this.emitter.emit.bind(this.emitter);
    }
  }, {
    key: "on",
    get: function get() {
      return this.emitter.on.bind(this.emitter);
    }
  }, {
    key: "logger",
    get: function get() {
      if (!this.core.debugMQTTMode) return this.noop;
      return console.log.bind(console, 'MQTT ->');
    }
  }, {
    key: "reNewMessage",
    get: function get() {
      return /^([\w]+)\/c/i;
    }
  }, {
    key: "reNotification",
    get: function get() {
      return /^([\w]+)\/n/i;
    }
  }, {
    key: "reTyping",
    get: function get() {
      return /^r\/([\d]+)\/([\d]+)\/([\S]+)\/t$/i;
    }
  }, {
    key: "reDelivery",
    get: function get() {
      return /^r\/([\d]+)\/([\d]+)\/([\S]+)\/d$/i;
    }
  }, {
    key: "reRead",
    get: function get() {
      return /^r\/([\d]+)\/([\d]+)\/([\S]+)\/r$/i;
    }
  }, {
    key: "reOnlineStatus",
    get: function get() {
      return /^u\/([\S]+)\/s$/i;
    }
  }, {
    key: "reChannelMessage",
    get: function get() {
      return /^([\S]+)\/([\S]+)\/c/i;
    }
  }, {
    key: "subscribeTyping",
    get: function get() {
      return this.subscribeRoom.bind(this);
    }
  }, {
    key: "unsubscribeTyping",
    get: function get() {
      return this.unsubscribeRoom.bind(this);
    }
  }, {
    key: "subscribeRoomPresence",
    get: function get() {
      return this.subscribeUserPresence.bind(this);
    }
  }, {
    key: "unsubscribeRoomPresence",
    get: function get() {
      return this.unsubscribeUserPresence.bind(this);
    }
  }]);

  return MqttAdapter;
}();



/***/ }),

/***/ "./src/lib/adapters/room.js":
/*!**********************************!*\
  !*** ./src/lib/adapters/room.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomAdapter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var RoomAdapter =
/*#__PURE__*/
function () {
  /**
  * Params used in this class
  * @method constructor
  * @param  {Object}    HTTPAdapter [Qiscus HTTP adapter]
  * @return {void}                Returns nothing
  */
  function RoomAdapter(HTTPAdapter) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RoomAdapter);

    this.HTTPAdapter = HTTPAdapter;
    this.token = HTTPAdapter.token;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RoomAdapter, [{
    key: "getOrCreateRoom",
    value: function getOrCreateRoom(email, options, distinctId) {
      var params = {
        token: this.token,
        emails: email
      };
      if (distinctId) params[distinctId] = distinctId;
      if (options) params['options'] = JSON.stringify(options);
      return this.HTTPAdapter.post("api/v2/sdk/get_or_create_room_with_target", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        var room = res.body.results.room;
        room.avatar = room.avatar_url;
        room.comments = res.body.results.comments.reverse();
        var rivalUser = room.participants.find(function (p) {
          return p.email === email;
        });
        room.name = rivalUser ? rivalUser.username : 'Room name';
        return Promise.resolve(room);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "getRoomById",
    value: function getRoomById(id) {
      return this.HTTPAdapter.get("api/v2/mobile/get_room_by_id?token=".concat(this.token, "&id=").concat(id)).then(function (response) {
        return Promise.resolve(response.body);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "getOrCreateRoomByUniqueId",
    value: function getOrCreateRoomByUniqueId(id, name, avatarURL) {
      var params = {
        token: this.token,
        unique_id: id,
        name: name,
        avatar_url: avatarURL
      };
      return this.HTTPAdapter.post("api/v2/mobile/get_or_create_room_with_unique_id", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        var room = res.body.results.room;
        room.avatar = room.avatar_url;
        room.comments = res.body.results.comments.reverse();
        room.name = room.room_name;
        return Promise.resolve(room);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "createRoom",
    value: function createRoom(name, emails) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var optionalData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var optsData = Object.keys(optionalData).length <= 0 ? null : JSON.stringify(optionalData);
      var body = {
        token: this.token,
        name: name,
        'participants[]': emails,
        avatar_url: opts.avatarURL,
        options: optsData
      };
      return this.HTTPAdapter.post("api/v2/mobile/create_room", body).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        var room = res.body.results.room;
        room.comments = res.body.results.comments;
        return Promise.resolve({
          id: room.id,
          name: room.room_name,
          lastCommentId: room.last_comment_id,
          lastCommentMessage: room.last_comment_message,
          lastTopicId: room.last_topic_id,
          avatarURL: room.avatar_url,
          options: room.options,
          participants: room.participants.map(function (participant) {
            return {
              id: participant.id,
              email: participant.email,
              username: participant.username,
              avatarURL: participant.avatar_url
            };
          })
        });
      }).catch(function (err) {
        console.error('Error when creating room', err);
        return Promise.reject(new Error('Error when creating room'));
      });
    }
  }, {
    key: "updateRoom",
    value: function updateRoom(args) {
      if (!args.id) throw new Error('id is required');
      var params = {
        token: this.token,
        id: args.id
      };
      if (args.room_name) params['room_name'] = args.room_name;
      if (args.avatar_url) params['avatar_url'] = args.avatar_url;
      if (args.options) params['options'] = JSON.stringify(args.options);
      return this.HTTPAdapter.post("api/v2/mobile/update_room", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.room);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "getTotalUnreadCount",
    value: function getTotalUnreadCount() {
      return this.HTTPAdapter.get("api/v2/sdk/total_unread_count?token=".concat(this.token)).then(function (response) {
        return Promise.resolve(response.body.results.total_unread_count);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "addParticipantsToGroup",
    value: function addParticipantsToGroup(roomId) {
      var emails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!roomId || !emails) throw new Error('room_id and emails is required');
      var params = {
        token: this.token,
        room_id: roomId,
        'emails[]': emails
      };
      return this.HTTPAdapter.post("api/v2/mobile/add_room_participants", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.participants_added);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "removeParticipantsFromGroup",
    value: function removeParticipantsFromGroup(roomId) {
      var emails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!roomId || !emails) throw new Error('room_id and emails is required');
      var params = {
        token: this.token,
        room_id: roomId,
        'emails[]': emails
      };
      return this.HTTPAdapter.post("api/v2/mobile/remove_room_participants", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.participants_removed);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }]);

  return RoomAdapter;
}();



/***/ }),

/***/ "./src/lib/adapters/user.js":
/*!**********************************!*\
  !*** ./src/lib/adapters/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



// import store from 'store';
var User =
/*#__PURE__*/
function () {
  /**
  * Params used in this class
  * @method constructor
  * @param  {Object}    HTTPAdapter [Qiscus HTTP adapter]
  * @return {void}                Returns nothing
  */
  function User(HTTPAdapter) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

    this.HTTPAdapter = HTTPAdapter;
    this.token = HTTPAdapter.token;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(User, [{
    key: "postComment",
    value: function postComment(topicId, commentMessage, uniqueId, type, payload, extras) {
      return this.HTTPAdapter.post("api/v2/sdk/post_comment", {
        token: this.token,
        comment: commentMessage,
        topic_id: topicId,
        unique_temp_id: uniqueId,
        type: type,
        payload: payload,
        extras: extras
      }).then(function (res) {
        return new Promise(function (resolve, reject) {
          if (res.body.status !== 200) return reject(res);
          var data = res.body.results.comment;
          return resolve(data);
        });
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "sync",
    value: function sync() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.HTTPAdapter.get("api/v2/sdk/sync?token=".concat(this.token, "&last_received_comment_id=").concat(id)).then(function (res, err) {
        if (err) return Promise.reject(err);
        return new Promise(function (resolve, reject) {
          if (res.body.status !== 200) return reject(res);
          var data = res.body.results.comments;
          return resolve(data);
        });
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "syncEvent",
    value: function syncEvent() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.HTTPAdapter.get("api/v2/sdk/sync_event?token=".concat(this.token, "&start_event_id=").concat(id)).then(function (res, err) {
        if (err) return Promise.reject(err);
        return new Promise(function (resolve, reject) {
          if (res.statusCode !== 200) return reject(res);
          var data = res.body;
          return resolve(data);
        });
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "updateCommentStatus",
    value: function updateCommentStatus(roomId, lastReadCommentId, lastReceivedCommentId) {
      var body = {
        token: this.token,
        room_id: roomId
      };
      if (lastReadCommentId) body.last_comment_read_id = lastReadCommentId;
      if (lastReceivedCommentId) body.last_comment_received_id = lastReceivedCommentId;
      return this.HTTPAdapter.post('api/v2/mobile/update_comment_status', body).then(function (res) {
        return Promise.resolve(res);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "loadRoomList",
    value: function loadRoomList() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var body = "?token=".concat(this.token);
      if (params.page) body += "&page=".concat(params.page);
      if (params.show_participants) body += "&show_participants=".concat(params.show_participants || true);
      if (params.limit) body += "&limit=".concat(params.limit);
      if (params.show_empty) body += "&show_empty=".concat(params.show_empty);
      return this.HTTPAdapter.get("api/v2/sdk/user_rooms".concat(body)).then(function (res) {
        return new Promise(function (resolve, reject) {
          if (res.body.status !== 200) return reject(res);
          var data = res.body.results.rooms_info;
          return resolve(data);
        });
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "searchMessages",
    value: function searchMessages(params) {
      var body = {
        token: this.token,
        query: params.query || null,
        room_id: params.room_id || null,
        last_comment_id: params.last_comment_id || null
      };
      return this.HTTPAdapter.post('api/v2/sdk/search_messages', body).then(function (res) {
        return Promise.resolve(res.body.results.comments);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(params) {
      var body = {
        token: this.token,
        name: params.name || null,
        avatar_url: params.avatar_url || null,
        extras: params.extra ? JSON.stringify(params.extras) : null
      };
      return this.HTTPAdapter.patch('api/v2/sdk/my_profile', body).then(function (res) {
        return Promise.resolve(res.body.results.user);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      var body = {
        token: this.token,
        file: file
      };
      return this.HTTPAdapter.post("api/v2/sdk/upload", body).then(function (res) {
        return Promise.resolve(res.body);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "getRoomsInfo",
    value: function getRoomsInfo(opts) {
      var body = {
        token: this.token,
        show_participants: true,
        show_removed: false
      };
      if (opts.room_ids) body.room_id = opts.room_ids;
      if (opts.room_unique_ids) body.room_unique_id = opts.room_unique_ids;
      if (opts.show_participants) body.show_participants = opts.show_participants;
      if (opts.show_removed) body.show_removed = opts.show_removed;
      return this.HTTPAdapter.post_json("api/v2/mobile/rooms_info", body).then(function (res) {
        return Promise.resolve(res.body);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "loadComments",
    value: function loadComments(topicId, options) {
      var params = "token=".concat(this.token, "&topic_id=").concat(topicId);
      if (options.last_comment_id) params += "&last_comment_id=".concat(options.last_comment_id);
      if (options.timestamp) params += "&timestamp=".concat(options.timestamp);
      if (options.after) params += "&after=".concat(options.after);
      if (options.limit) params += "&limit=".concat(options.limit);
      return this.HTTPAdapter.get("api/v2/sdk/load_comments?".concat(params)).then(function (res) {
        return new Promise(function (resolve, reject) {
          if (res.status !== 200) return new Promise(function (resolve, reject) {
            return reject(res);
          });
          var data = res.body.results.comments;
          return resolve(data);
        });
      }, function (error) {
        // console.info('failed loading comments', error);
        return new Promise(function (resolve, reject) {
          return reject(error);
        });
      });
    }
  }, {
    key: "deleteComment",
    value: function deleteComment(roomId, commentUniqueIds) {
      var isForEveryone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var isHard = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (isForEveryone === false) console.warn('Deprecated: delete comment for me will be removed on next release');
      if (isHard === false) console.warn('Deprecated: soft delete will be removed on next release');
      var body = {
        token: this.token,
        unique_ids: commentUniqueIds,
        is_delete_for_everyone: isForEveryone,
        is_hard_delete: isHard
      };
      return this.HTTPAdapter.del("api/v2/sdk/delete_messages", body).then(function (res) {
        return Promise.resolve(res.body);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "clearRoomMessages",
    value: function clearRoomMessages(roomIds) {
      var body = {
        token: this.token,
        room_channel_ids: roomIds
      };
      return this.HTTPAdapter.del("api/v2/sdk/clear_room_messages", body).then(function (res) {
        return Promise.resolve(res.body);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "getCommentReceiptStatus",
    value: function getCommentReceiptStatus(id) {
      return this.HTTPAdapter.get("api/v2/sdk/comment_receipt?token=".concat(this.token, "&comment_id=").concat(id)).then(function (res) {
        return Promise.resolve(res.body);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "getBlockedUser",
    value: function getBlockedUser() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var url = "api/v2/mobile/get_blocked_users?token=".concat(this.token, "&page=").concat(page, "&limit=").concat(limit);
      return this.HTTPAdapter.get(url).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.blocked_users);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "blockUser",
    value: function blockUser(email) {
      if (!email) throw new Error('email is required');
      var params = {
        token: this.token,
        user_email: email
      };
      return this.HTTPAdapter.post("api/v2/mobile/block_user", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.user);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "unblockUser",
    value: function unblockUser(email) {
      if (!email) throw new Error('email is required');
      var params = {
        token: this.token,
        user_email: email
      };
      return this.HTTPAdapter.post("api/v2/mobile/unblock_user", params).then(function (res) {
        if (res.body.status !== 200) return Promise.reject(res);
        return Promise.resolve(res.body.results.user);
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }]);

  return User;
}();



/***/ }),

/***/ "./src/lib/match.js":
/*!**************************!*\
  !*** ./src/lib/match.js ***!
  \**************************/
/*! exports provided: match, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


// Taken from https://github.com/FGRibreau/match-when/blob/master/match.js
var _catchAllSymbol = String('match.pattern.catchAll');

var _patternOR = String('match.pattern.OR');

var _patternORStr = _patternOR.toString(); // dirty hack


var _patternAND = String('match.pattern.AND');

var _patternANDStr = _patternAND.toString(); // dirty hack


var _patternRANGE = String('match.pattern.RANGE');

var _patternRANGEStr = _patternRANGE.toString(); // dirty hack


var _patternREGEXP = String('match.pattern.REGEXP');

var _patternREGEXPStr = _patternREGEXP.toString(); // dirty hack


var EXTRACT_PATTERN_AND_FLAGS = /\/(.*)\/(.*)/;

function MissingCatchAllPattern() {
  Error.call(this, 'Missing when() catch-all pattern as last match argument, add [when()]: void 0');

  if (!('stack' in this)) {
    this.stack = new Error().stack;
  }
}

MissingCatchAllPattern.prototype = Object.create(Error.prototype);
function match() {
  var _ref;

  var obj = (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]); // pre-compute matchers

  var matchers = [];

  for (var key in obj) {
    matchers.push(when.unserialize(key, obj[key]));
  } // since JS objects are unordered we need to reorder what for..in give us even if the order was already right
  // because it depends on the JS engine implementation. See #2


  matchers.sort(function (a, b) {
    return a.position < b.position ? -1 : 1;
  });

  if (Object.getOwnPropertySymbols(obj).indexOf(_catchAllSymbol) !== -1) {
    matchers.push(when.unserialize(_catchAllSymbol, obj[_catchAllSymbol]));
  }

  var calculateResult = function calculateResult(input) {
    var matched = matchers.find(function (matcher) {
      return matcher.match(input);
    });

    if (!matched) {
      throw new MissingCatchAllPattern();
    }

    return typeof matched.result === 'function' ? matched.result(input) : matched.result;
  };

  return arguments.length === 2 ? calculateResult(arguments.length <= 0 ? undefined : arguments[0]) : calculateResult;
}
function when(props) {
  if (props === undefined) {
    return _catchAllSymbol;
  }

  if (props instanceof RegExp) {
    return _serialize([_patternREGEXP.toString(), props.toString()]);
  }

  return _serialize(props);
}
when.__uid = 0; // Any -> String

function _serialize(mixed) {
  return JSON.stringify([when.__uid++, mixed]);
} // String -> [Number, Any]


function _unserialize(str) {
  return JSON.parse(str);
}

function _true() {
  return true;
} // Any -> String


function _match(props) {
  if (Array.isArray(props)) {
    if (props[0] === _patternORStr) {
      props.shift();
      return function (input) {
        return props[0].some(function (prop) {
          return _matching(prop, input);
        });
      };
    }

    if (props[0] === _patternANDStr) {
      props.shift();
      return function (input) {
        return props[0].every(function (prop) {
          return _matching(prop, input);
        });
      };
    }

    if (props[0] === _patternRANGEStr) {
      props.shift();
      return function (input) {
        return props[0] <= input && input <= props[1];
      };
    }

    if (props[0] === _patternREGEXPStr) {
      var res = EXTRACT_PATTERN_AND_FLAGS.exec(props[1]);
      return _matching.bind(null, new RegExp(res[1], res[2]));
    }
  }

  function _matching(props, input) {
    // implement array matching
    if (Array.isArray(input)) {
      // @todo yes this is a quick and dirty way, optimize this
      return JSON.stringify(props) === JSON.stringify(input);
    }

    if (props instanceof RegExp) {
      return props.test(input);
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(input) === 'object') {
      for (var prop in props) {
        if (input[prop] !== props[prop]) {
          return false;
        }
      }

      return true;
    }

    return props === input;
  }

  return function (input) {
    return _matching(props, input);
  };
} // mixed -> String


when.or = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _serialize([_patternOR.toString(), args]);
}; // mixed -> String
// upcoming...


when.and = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return _serialize([_patternAND.toString(), args]);
};

when.range = function (start, end) {
  return _serialize([_patternRANGE.toString(), start, end]);
};

when.unserialize = function (serializedKey, value) {
  if (serializedKey === _catchAllSymbol) {
    return {
      match: _true,
      result: value,
      position: Infinity
    };
  } // const {position, matcherConfiguration} = _unserialize(serializedKey);


  var deserialized = _unserialize(serializedKey);

  var matcherConfiguration = deserialized[1];
  var position = deserialized[0];
  return {
    match: _match(matcherConfiguration),
    result: value,
    position: position
  };
};

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: searchAndReplace, escapeHTML, GroupChatBuilder, scrollToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAndReplace", function() { return searchAndReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatBuilder", function() { return GroupChatBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToBottom", function() { return scrollToBottom; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


function searchAndReplace(str, find, replace) {
  return str.split(find).join(replace);
}
function escapeHTML(text) {
  var comment;
  comment = searchAndReplace(text, '<', '&lt;');
  comment = searchAndReplace(comment, '>', '&gt;');
  return comment;
}
var GroupChatBuilder =
/*#__PURE__*/
function () {
  /**
   * Create a group chat room builder.
   * @constructs
   * @param {RoomAdapter} roomAdapter - Room adapter to be used to call backend
   *  API.
   */
  function GroupChatBuilder(roomAdapter) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GroupChatBuilder);

    this.roomAdapter = roomAdapter;
    this.name = null;
    this.emails = [];
    this.options = {};
  }
  /**
   * Set the room name
   * @param {string} name - Room name
   * @returns {GroupChatBuilder}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GroupChatBuilder, [{
    key: "withName",
    value: function withName(name) {
      this.name = name;
      return this;
    }
    /**
     * Add an options to this room.
     * @param {object} options - Any data that is `JSON.stringify` able
     * @returns {GroupChatBuilder}
     */

  }, {
    key: "withOptions",
    value: function withOptions(options) {
      this.options = options;
      return this;
    }
    /**
     * Add more participants to the room.
     * This method use javascript rest operator, which mean you can add as many as
     * you want.
     * eg: addParticipants('email1@gg.com', 'email2@gg.com')
     * @param {string} emails - Email of participant to be added.
     */

  }, {
    key: "addParticipants",
    value: function addParticipants() {
      var _this$emails$filter;

      for (var _len = arguments.length, emails = new Array(_len), _key = 0; _key < _len; _key++) {
        emails[_key] = arguments[_key];
      }

      this.emails = (_this$emails$filter = this.emails.filter(function (email) {
        return emails.indexOf(email) === -1;
      })).concat.apply(_this$emails$filter, emails);
      return this;
    }
    /**
     * Real create group chat room by calling the backend API.
     * @returns {Promise.<Room, Error>}
     */

  }, {
    key: "create",
    value: function create() {
      var name = this.name;
      var emails = this.emails;
      var options = this.options;
      return this.roomAdapter.createRoom(name, emails, {
        avatarURL: options.avatarURL
      }, options);
    }
  }]);

  return GroupChatBuilder;
}();
function scrollToBottom(latestCommentId) {
  requestAnimationFrame(function () {
    if (latestCommentId > 0) {
      var elementToScroll = document.getElementById(latestCommentId);
      if (!elementToScroll) return false;
      elementToScroll.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    } // on entering the room, wait for data processed then focus on comment form


    document.getElementsByClassName('qcw-comment-form').item(0).getElementsByTagName('textarea').item(0).focus();
  });
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Afief\code\apiep\qiscus-sdk-javascript\packages\core\src\index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*********************!*\
  !*** net (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*********************!*\
  !*** tls (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ })["default"];
});