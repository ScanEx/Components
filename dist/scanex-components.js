'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$1 =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$4
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has$1 = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global$1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$3 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$3
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global$1, key, value);
  } catch (error) {
    global$1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global$1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$1;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global$1.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys$1 = shared('keys');

var sharedKey = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

var hiddenKeys$1 = {};

var WeakMap = global$1.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has$1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return has$1(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$1(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global$1;

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace])
    : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
};

var ceil = Math.ceil;
var floor$2 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$2 : ceil)(argument);
};

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min$3(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max$1 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$1(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
	f: f$1
};

var f = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var engineIsNode = classofRaw(global$1.process) == 'process';

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global$1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
});

var useSymbolAsUid = nativeSymbol
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (nativeSymbol && has$1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

var SPECIES$3 = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var SPECIES$2 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$2] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min$1 = Math.min;
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$1(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var Evented = /*#__PURE__*/function () {
  function Evented() {
    _classCallCheck(this, Evented);

    this.listeners = {};
  }

  _createClass(Evented, [{
    key: "addEventListener",
    value: function addEventListener(type, callback) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }

      this.listeners[type].push(callback);
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      this.addEventListener(type, callback);
      return this;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, callback) {
      if (!(type in this.listeners)) {
        return;
      }

      var stack = this.listeners[type];

      for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
          stack.splice(i, 1);
          return this.removeEventListener(type, callback);
        }
      }
    }
  }, {
    key: "off",
    value: function off(type, callback) {
      this.removeEventListener(type, callback);
      return this;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (!(event.type in this.listeners)) {
        return;
      }

      var stack = this.listeners[event.type];
      Object.defineProperty(event, 'target', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: this
      });

      for (var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
      }
    }
  }]);

  return Evented;
}();

var Component = /*#__PURE__*/function (_Evented) {
  _inherits(Component, _Evented);

  var _super = _createSuper(Component);

  function Component(container, options) {
    var _this;

    _classCallCheck(this, Component);

    _this = _super.call(this);
    _this._element = document.createElement('div');

    _this._element.classList.add('scanex-component');

    container.appendChild(_this._element);

    _this._render(_this._element, options);

    return _this;
  }

  _createClass(Component, [{
    key: "destroy",
    value: function destroy() {
      this._element.remove();
    }
  }, {
    key: "forwardEvent",
    value: function forwardEvent(e) {
      e.stopPropagation();
      var event = document.createEvent('Event');
      event.initEvent(e.type, false, false);
      event.detail = e.detail;
      this.dispatchEvent(event);
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }, {
    key: "_render",
    value: function _render(element, options) {}
  }]);

  return Component;
}(Evented);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y$1 = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
	UNSUPPORTED_Y: UNSUPPORTED_Y$1,
	BROKEN_CARET: BROKEN_CARET
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

// TODO: Remove from `core-js@4` since it's moved to entry points







var SPECIES$1 = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$1] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var nativeJoin = [].join;

var ES3_STRINGS = indexedObject != Object;
var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

var nativeAssign = Object.assign;
var defineProperty$1 = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

var Translation = /*#__PURE__*/function () {
  function Translation() {
    _classCallCheck(this, Translation);

    this._langs = {};
    var current = localStorage.getItem('lang');

    if (!current) {
      current = 'ru';
      localStorage.setItem('lang', current);
    }

    this._current = current;
  }

  _createClass(Translation, [{
    key: "addText",
    value: function addText(lang, obj) {
      this._langs[lang] = this._langs[lang] || {};
      this._langs[lang] = Object.assign(this._langs[lang], obj);
    }
  }, {
    key: "getText",
    value: function getText(path) {
      return this._translate(this._langs[this._current], path);
    }
  }, {
    key: "_translate",
    value: function _translate(root, path) {
      var i = path.indexOf('.');

      if (i >= 0) {
        return this._translate(root[path.substring(0, i)], path.substring(i + 1));
      } else {
        return root[path];
      }
    }
  }]);

  return Translation;
}();

var T = new Translation();

T.addText('ru', {
  scanex: {
    components: {
      dialog: {
        close: 'Закрыть',
        maximize: 'Развернуть',
        minimize: 'Свернуть'
      }
    }
  }
});
T.addText('en', {
  scanex: {
    components: {
      dialog: {
        close: 'Close',
        maximize: 'Maximize',
        minimize: 'Minimize'
      }
    }
  }
});
var translate$1 = T.getText.bind(T);

var Dialog = /*#__PURE__*/function (_Component) {
  _inherits(Dialog, _Component);

  var _super = _createSuper(Dialog);

  function Dialog(_ref) {
    var _this;

    var title = _ref.title,
        id = _ref.id,
        _ref$collapsible = _ref.collapsible,
        collapsible = _ref$collapsible === void 0 ? false : _ref$collapsible,
        _ref$modal = _ref.modal,
        modal = _ref$modal === void 0 ? false : _ref$modal,
        top = _ref.top,
        left = _ref.left;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, document.body, {
      id: id,
      collapsible: collapsible,
      modal: modal,
      top: top,
      left: left
    });
    _this._titleElement.innerText = title;

    if (!modal) {
      if (_this._id) {
        _this._element.setAttribute('id', _this._id);
      }

      _this._moving = false;
      _this._offsetX;
      _this._offsetY;

      _this._header.addEventListener('mousedown', _this._start.bind(_assertThisInitialized(_this)));

      _this._element.addEventListener('mousemove', _this._move.bind(_assertThisInitialized(_this)));

      window.addEventListener('mouseup', _this._stop.bind(_assertThisInitialized(_this)));
    }

    return _this;
  }

  _createClass(Dialog, [{
    key: "header",
    get: function get() {
      return this._header;
    }
  }, {
    key: "content",
    get: function get() {
      return this._content;
    }
  }, {
    key: "footer",
    get: function get() {
      return this._footer;
    }
  }, {
    key: "_start",
    value: function _start(e) {
      e.stopPropagation();
      var clientX = e.clientX,
          clientY = e.clientY;

      var _this$_element$getBou = this._element.getBoundingClientRect(),
          top = _this$_element$getBou.top,
          left = _this$_element$getBou.left;

      this._offsetX = clientX - left;
      this._offsetY = clientY - top;
      this._moving = true;
    }
  }, {
    key: "_stop",
    value: function _stop() {
      if (this._moving) {
        this._moving = false;

        this._savePosition(this._element);
      }
    }
  }, {
    key: "_move",
    value: function _move(e) {
      if (this._moving) {
        e.stopPropagation();
        var clientX = e.clientX,
            clientY = e.clientY;
        this._element.style.left = "".concat(clientX - this._offsetX, "px");
        this._element.style.top = "".concat(clientY - this._offsetY, "px");
      }
    }
  }, {
    key: "_toggle",
    value: function _toggle(e) {
      e.stopPropagation();

      if (this._btnToggle.classList.contains('minimize')) {
        this._btnToggle.setAttribute('title', translate$1('scanex.components.dialog.maximize'));

        this._btnToggle.classList.remove('minimize');

        this._btnToggle.classList.add('maximize');

        this._content.classList.add('hidden');

        this._footer.classList.add('hidden');

        var event = document.createEvent('Event');
        event.initEvent('minimize', false, false);
        this.dispatchEvent(event);
      } else {
        this._btnToggle.setAttribute('title', translate$1('scanex.components.dialog.minimize'));

        this._btnToggle.classList.remove('maximize');

        this._btnToggle.classList.add('minimize');

        this._content.classList.remove('hidden');

        this._footer.classList.remove('hidden');

        var _event = document.createEvent('Event');

        _event.initEvent('maximize', false, false);

        this.dispatchEvent(_event);
      }
    }
  }, {
    key: "_close",
    value: function _close(e) {
      e.stopPropagation();
      var event = document.createEvent('Event');
      event.initEvent('close', false, false);
      this.dispatchEvent(event);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._overlay) {
        this._overlay.remove();
      }

      _get(_getPrototypeOf(Dialog.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_render",
    value: function _render(element, _ref2) {
      var id = _ref2.id,
          collapsible = _ref2.collapsible,
          modal = _ref2.modal,
          top = _ref2.top,
          left = _ref2.left;

      if (modal) {
        this._overlay = document.createElement('div');

        this._overlay.classList.add('scanex-dialog-overlay');

        this._overlay.addEventListener('click', function (e) {
          return e.stopPropagation();
        });

        document.body.appendChild(this._overlay);
      } else {
        this._id = id;
      }

      element.classList.add('scanex-component-dialog');
      this._header = document.createElement('div');

      this._header.classList.add('header');

      this._titleElement = document.createElement('label');

      this._header.appendChild(this._titleElement);

      var buttons = document.createElement('div');
      buttons.classList.add('header-buttons');

      if (collapsible && !modal) {
        this._btnToggle = document.createElement('i');

        this._btnToggle.setAttribute('title', translate$1('scanex.components.dialog.minimize'));

        this._btnToggle.classList.add('scanex-component-icon');

        this._btnToggle.classList.add('minimize');

        this._btnToggle.addEventListener('click', this._toggle.bind(this));

        buttons.appendChild(this._btnToggle);
      }

      var btnClose = document.createElement('i');
      btnClose.setAttribute('title', translate$1('scanex.components.dialog.close'));
      btnClose.classList.add('scanex-component-icon');
      btnClose.classList.add('close');
      btnClose.addEventListener('click', this._close.bind(this));
      buttons.appendChild(btnClose);

      this._header.appendChild(buttons);

      element.appendChild(this._header);
      this._content = document.createElement('div');

      this._content.classList.add('content');

      element.appendChild(this._content);
      this._footer = document.createElement('div');

      this._footer.classList.add('footer');

      element.appendChild(this._footer);

      this._restorePosition(element, top, left);
    }
  }, {
    key: "_restorePosition",
    value: function _restorePosition(el, top, left) {
      if (typeof this._id === 'string' && this._id != '') {
        var pos = window.localStorage.getItem("".concat(this._id, ".position"));

        var _ref3 = pos && pos.split(',') || [0, 0],
            _ref4 = _slicedToArray(_ref3, 2),
            x = _ref4[0],
            y = _ref4[1];

        el.style.top = "".concat(y || top || Math.round(window.innerHeight / 2), "px");
        el.style.left = "".concat(x || left || Math.round(window.innerWidth / 2), "px");
      } else {
        var r = el.getBoundingClientRect();
        el.style.top = "".concat(top || Math.round(window.innerHeight / 2 - r.height), "px");
        el.style.left = "".concat(left || Math.round(window.innerWidth / 2 - r.width), "px");
      }
    }
  }, {
    key: "_savePosition",
    value: function _savePosition(el) {
      if (typeof this._id === 'string' && this._id != '') {
        var _el$getBoundingClient = el.getBoundingClientRect(),
            top = _el$getBoundingClient.top,
            left = _el$getBoundingClient.left;

        window.localStorage.setItem("".concat(this._id, ".position"), [left, top].join(','));
      }
    }
  }]);

  return Dialog;
}(Component);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED$1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod$1(7)
};

var $map = arrayIteration.map;


var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form(container, fields) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, container);
    _this._fields = fields || {};

    _this._init(_this._element, _this._fields);

    return _this;
  }

  _createClass(Form, [{
    key: "_onChange",
    value: function _onChange(id, e) {
      e.stopPropagation();
      var event = document.createEvent('Event');
      event.initEvent('change', false, false);
      event.detail = id;
      this.dispatchEvent(event);
    }
  }, {
    key: "setValue",
    value: function setValue(id, value) {
      var e = this._values[id];

      if (e) {
        var type = this._fields[id].type;

        switch (type) {
          case 'label':
            e.innerText = value;
            break;

          case 'input':
          case 'text':
            e.value = value;
            break;
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue(id) {
      var e = this._values[id];

      if (e) {
        var type = this._fields[id].type;

        switch (type) {
          case 'label':
            return e.innerText;

          case 'input':
          case 'text':
            return e.value;
        }
      }
    }
  }, {
    key: "_init",
    value: function _init(element, fields) {
      var _this2 = this;

      element.classList.add('scanex-component-form');

      var create_value = function create_value(type, id, placeholder) {
        switch (type) {
          case 'label':
            return "<label class=\"form-value-".concat(id, "\"><label>");

          case 'input':
            return "<input type=\"text\" class=\"form-value-".concat(id, "\" />");

          case 'text':
            return "<textarea rows=\"8\" placeholder=\"".concat(placeholder, "\" class=\"form-value-").concat(id, "\"></textarea>");

          default:
            return '';
        }
      };

      var rows = Object.keys(fields).map(function (id) {
        var _fields$id = fields[id],
            label = _fields$id.label,
            type = _fields$id.type,
            placeholder = _fields$id.placeholder;
        return "<tr>\n                    <td>\n                        <label class=\"form-label-".concat(id, "\">").concat(label, "</label>\n                    </td>\n                    <td>").concat(create_value(type, id, placeholder), "</td>\n                </tr>");
      });

      if (rows.length > 0) {
        element.innerHTML = "<table cellspacing=\"0\" cellpadding=\"0\">".concat(rows.join(''), "</table>");
        this._values = Object.keys(fields).reduce(function (a, id) {
          var type = fields[id].type;
          var e = element.querySelector(".form-value-".concat(id));

          switch (type) {
            case 'input':
              e.addEventListener('change', _this2._onChange.bind(_this2, id));
              break;
          }

          a[id] = e;
          return a;
        }, {});
      }
    }
  }]);

  return Form;
}(Component);

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var $forEach = arrayIteration.forEach;


var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global$1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype.forEach = arrayForEach;
  }
}

var Item = /*#__PURE__*/function (_Component) {
  _inherits(Item, _Component);

  var _super = _createSuper(Item);

  function Item(container, _ref) {
    var _this;

    var id = _ref.id,
        title = _ref.title;

    _classCallCheck(this, Item);

    _this = _super.call(this, container);
    _this._id = id;
    _this._title.innerText = title;

    _this._element.addEventListener('click', _this._onClick.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Item, [{
    key: "_onClick",
    value: function _onClick(e) {
      e.stopPropagation();
      var event = document.createEvent('Event');
      event.initEvent('item:click', false, false);
      event.detail = this.path;
      this.dispatchEvent(event);
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "path",
    get: function get() {
      return this.parent ? "".concat(this.parent.path, ".").concat(this.id) : this.id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(parent) {
      this._parent = parent;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._element.removeEventListener('click', this._onClick);
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-menu-item');
      this._title = document.createElement('label');

      this._title.classList.add('scanex-menu-item-title');

      element.appendChild(this._title);
    }
  }]);

  return Item;
}(Component);

var Group = /*#__PURE__*/function (_Component) {
  _inherits(Group, _Component);

  var _super = _createSuper(Group);

  function Group(container, _ref) {
    var _this;

    var id = _ref.id,
        title = _ref.title;

    _classCallCheck(this, Group);

    _this = _super.call(this, container);
    _this._items = [];
    _this._id = id;
    _this._title.innerText = title;
    _this.expanded = false;

    _this._element.addEventListener('click', _this._onClick.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Group, [{
    key: "_onClick",
    value: function _onClick(e) {
      e.stopPropagation();
      this.expanded = !this.expanded;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "path",
    get: function get() {
      return this.parent ? "".concat(this.parent.path, ".").concat(this.id) : this.id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(parent) {
      this._parent = parent;
    }
  }, {
    key: "expanded",
    get: function get() {
      return this._expanded;
    },
    set: function set(expanded) {
      this._expanded = expanded;

      if (expanded) {
        this._expander.classList.remove('down');

        this._expander.classList.add('up');

        this._children.classList.remove('hidden');
      } else {
        this._expander.classList.remove('up');

        this._expander.classList.add('down');

        this._children.classList.add('hidden');
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._element.removeEventListener('click', this._onClick);

      this._items.forEach(function (item) {
        return item.clear();
      });
    }
  }, {
    key: "items",
    get: function get() {
      return this._items;
    },
    set: function set(items) {
      var _this2 = this;

      this.clear();
      this._items = items.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            children = _ref2.children;
        var item;

        if (Array.isArray(children)) {
          item = new Group(_this2._children, {
            id: id,
            title: title
          });
          item.items = children;
        } else {
          item = new Item(_this2._children, {
            id: id,
            title: title
          });
        }

        item.parent = _this2;
        item.addEventListener('item:click', _this2.forwardEvent.bind(_this2));
        return item;
      });
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-menu-group');
      this._header = document.createElement('div');

      this._header.classList.add('scanex-menu-group-header');

      element.appendChild(this._header);
      this._title = document.createElement('label');

      this._title.classList.add('scanex-menu-group-title');

      this._header.appendChild(this._title);

      this._expander = document.createElement('i');

      this._expander.classList.add('icon');

      this._expander.classList.add('scanex-menu-group-expander');

      this._header.appendChild(this._expander);

      this._children = document.createElement('div');

      this._children.classList.add('scanex-menu-group-children');

      this._children.classList.add('hidden');

      element.appendChild(this._children);
    }
  }]);

  return Group;
}(Component);

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(container, _ref) {
    var _this;

    var id = _ref.id,
        title = _ref.title;

    _classCallCheck(this, Menu);

    _this = _super.call(this, container);
    _this._group = new Group(_this._root, {
      id: id,
      title: title
    });

    _this._group.on('item:click', function (e) {
      _this._group.expanded = false;
      var event = document.createEvent('Event');
      event.initEvent('item:click', false, false);
      event.detail = e.detail;

      _this.dispatchEvent(event);
    });

    window.addEventListener('click', function () {
      return _this._group.expanded = false;
    });
    return _this;
  }

  _createClass(Menu, [{
    key: "items",
    get: function get() {
      return this._group.items;
    },
    set: function set(items) {
      this._group.items = items;
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-component-menu');
      element.classList.add('noselect');
      this._root = document.createElement('div');

      this._root.classList.add('scanex-menu-root');

      element.appendChild(this._root);
    }
  }]);

  return Menu;
}(Component);

var floor$1 = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
var isInteger = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor$1(it) === it;
};

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
_export({ target: 'Number', stat: true }, {
  isInteger: isInteger
});

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

/* eslint-disable no-proto -- safe */

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

// a string of all valid unicode whitespaces
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var defineProperty = objectDefineProperty.f;
var trim = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global$1[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = descriptors ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has$1(NativeNumber, key = keys[j]) && !has$1(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global$1, NUMBER, NumberWrapper);
}

var translate = T.getText.bind(T);
T.addText('ru', {
  pager: {
    previous: 'Предыдущая',
    next: 'Следующая'
  }
});

var Pager = /*#__PURE__*/function (_Component) {
  _inherits(Pager, _Component);

  var _super = _createSuper(Pager);

  function Pager(container) {
    _classCallCheck(this, Pager);

    return _super.call(this, container);
  }

  _createClass(Pager, [{
    key: "_render",
    value: function _render(element) {
      var _this = this;

      element.classList.add('scanex-component-pager');
      element.innerHTML = "<table cellpadding=\"0\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <button class=\"first\">1</button>\n                </td>                \n                <td>\n                    <button class=\"previous\">".concat(translate('pager.previous'), "</button>\n                </td>\n                <td>\n                    <input type=\"text\" value=\"\" />\n                </td>\n                <td>\n                    <button class=\"next\">").concat(translate('pager.next'), "</button>\n                </td>                \n                <td>\n                    <button class=\"last\"></button>\n                </td>\n            </tr>\n        </table>");
      element.querySelector('.first').addEventListener('click', function (e) {
        e.stopPropagation();
        _this.page = 1;
      });
      element.querySelector('.previous').addEventListener('click', function (e) {
        e.stopPropagation();
        _this.page -= 1;
      });
      element.querySelector('.next').addEventListener('click', function (e) {
        e.stopPropagation();
        _this.page += 1;
      });
      element.querySelector('.last').addEventListener('click', function (e) {
        e.stopPropagation();
        _this.page = _this.pages;
      });
      this._current = element.querySelector('input');

      this._current.addEventListener('change', function (e) {
        e.stopPropagation();
        _this.page = parseInt(_this._current.value, 10);
      });

      this._last = element.querySelector('.last');
      this._pages = 1;
      this.page = 1;
    }
  }, {
    key: "page",
    get: function get() {
      return this._page;
    },
    set: function set(page) {
      if (Number.isInteger(page) && 1 <= page && page <= this.pages) {
        this._page = page;
        this._current.value = this._page;
        var event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
      } else {
        this._current.value = this._page;
      }
    }
  }, {
    key: "pages",
    get: function get() {
      return this._pages;
    },
    set: function set(pages) {
      if (Number.isInteger(pages) && 1 <= this.page && this.page <= pages) {
        this._pages = pages;
        this._last.innerText = pages;
      }
    }
  }]);

  return Pager;
}(Component);

var Tab = /*#__PURE__*/function (_Component) {
  _inherits(Tab, _Component);

  var _super = _createSuper(Tab);

  function Tab(container, options) {
    _classCallCheck(this, Tab);

    return _super.call(this, container, options);
  }

  _createClass(Tab, [{
    key: "_render",
    value: function _render(element, options) {
      var _this = this;

      var id = options.id,
          title = options.title,
          expanded = options.expanded;
      element.classList.add('scanex-component-sidebar-tab');
      element.innerHTML = "<i class=\"scanex-component-icon ".concat(id, "\"></i><div>").concat(title, "</div>");
      element.addEventListener('click', function (e) {
        e.stopPropagation();
        var event = document.createEvent('Event');
        event.initEvent('tab:click', false, false);
        event.detail = id;

        _this.dispatchEvent(event);
      });
      this.expanded = expanded;
    }
  }, {
    key: "id",
    get: function get() {
      return this._options.id;
    }
  }, {
    key: "expanded",
    get: function get() {
      return this._expanded;
    },
    set: function set(expanded) {
      this._expanded = expanded;

      if (this._expanded) {
        this._element.classList.add('expanded');
      } else {
        this._element.classList.remove('expanded');
      }
    }
  }]);

  return Tab;
}(Component);

var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);

  var _super = _createSuper(Panel);

  function Panel(container, options) {
    _classCallCheck(this, Panel);

    return _super.call(this, container, options);
  }

  _createClass(Panel, [{
    key: "_render",
    value: function _render(element, options) {
      options.id;
          options.title;
          var expanded = options.expanded;
      element.classList.add('scanex-component-sidebar-panel');
      this.expanded = expanded || false;
    }
  }, {
    key: "id",
    get: function get() {
      return this._options.id;
    }
  }, {
    key: "expanded",
    get: function get() {
      return this._expanded;
    },
    set: function set(expanded) {
      this._expanded = expanded;

      if (this._expanded) {
        this._element.classList.remove('hidden');
      } else {
        this._element.classList.add('hidden');
      }
    }
  }]);

  return Panel;
}(Component);

var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar(container) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _super.call(this, container);
    _this._current = null;
    return _this;
  }

  _createClass(Sidebar, [{
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-component-sidebar');
      element.innerHTML = "<div class=\"tabs\"></div>\n        <div class=\"panels\"></div>";
      this._tabs = {};
      this._tabsContainer = element.querySelector('.tabs');
      this._panels = {};
      this._panelsContainer = element.querySelector('.panels');
    }
  }, {
    key: "add",
    value: function add(id) {
      var _this2 = this;

      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var tab = new Tab(this._tabsContainer, {
        id: id,
        title: title
      });
      tab.on('tab:click', function (e) {
        if (_this2._current) {
          _this2._panels[_this2._current].expanded = false;
          _this2._tabs[_this2._current].expanded = false;

          if (_this2._current !== id) {
            _this2._current = id;
            _this2._panels[_this2._current].expanded = true;
            _this2._tabs[_this2._current].expanded = true;
          } else {
            _this2._current = null;
          }
        } else {
          _this2._current = id;
          _this2._panels[_this2._current].expanded = true;
          _this2._tabs[_this2._current].expanded = true;
        }

        var event = document.createEvent('Event');
        event.initEvent('tab:click', false, false);
        event.detail = id;

        _this2.dispatchEvent(event);
      });
      this._tabs[id] = tab;
      var panel = new Panel(this._panelsContainer, {
        id: id
      });
      this._panels[id] = panel;
      return panel.element;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this._tabs[id] && this._tabs[id].destroy();
      delete this._tabs[id];
      this._panels[id] && this._panels[id].destroy();
      delete this._panels[id];
    }
  }]);

  return Sidebar;
}(Component);

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

var Spinner = /*#__PURE__*/function (_Component) {
  _inherits(Spinner, _Component);

  var _super = _createSuper(Spinner);

  function Spinner(container) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _super.call(this, container);
    _this._value = 0;
    _this._min = 0;
    _this._max = 0;

    _this._up.addEventListener('click', _this.increment.bind(_assertThisInitialized(_this)));

    _this._down.addEventListener('click', _this.decrement.bind(_assertThisInitialized(_this)));

    _this._input.addEventListener('change', _this._onChange.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Spinner, [{
    key: "_onChange",
    value: function _onChange(e) {
      e.stopPropagation();
      this.value = parseInt(this._input.value, 10);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (this._validate(value)) {
        this._value = value;
        var event = document.createEvent('Event');
        event.initEvent("change", false, false);
        event.detail = this._value;
        this.dispatchEvent(event);
      }

      this._input.value = this._value.toString();
    }
  }, {
    key: "min",
    get: function get() {
      return this._min;
    },
    set: function set(min) {
      if (!isNaN(min)) {
        this._min = min;
      }
    }
  }, {
    key: "max",
    get: function get() {
      return this._max;
    },
    set: function set(max) {
      if (!isNaN(max) && this._min <= max) {
        this._max = max;
      }
    }
  }, {
    key: "_validate",
    value: function _validate(value) {
      return !isNaN(value) && this._min <= value && value <= this._max;
    }
  }, {
    key: "increment",
    value: function increment(e) {
      e.stopPropagation();
      this.value = this._value + 1;
    }
  }, {
    key: "decrement",
    value: function decrement(e) {
      e.stopPropagation();
      this.value = this._value - 1;
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-component-spinner');
      element.innerHTML = "<input type=\"text\" value=\"0\"/>\n        <div class=\"buttons\">\n            <i class=\"scanex-component-icon spinner-up\"></i>            \n            <i class=\"scanex-component-icon spinner-down\"></i>\n        </div>";
      this._input = element.querySelector('input');
      this._up = element.querySelector('.spinner-up');
      this._down = element.querySelector('.spinner-down');
    }
  }]);

  return Spinner;
}(Component);

var Slider1 = /*#__PURE__*/function (_Component) {
  _inherits(Slider1, _Component);

  var _super = _createSuper(Slider1);

  function Slider1(container, _ref) {
    var _this;

    var min = _ref.min,
        max = _ref.max;

    _classCallCheck(this, Slider1);

    _this = _super.call(this, container);
    _this._delay = 50;
    _this._tick = null;
    _this._offset = 0;

    if (!isNaN(min) && !isNaN(max)) {
      _this._min = min;
      _this._max = max;
    } else {
      throw "min or max not set";
    }

    _this._rightTick.addEventListener('mousedown', _this._start.bind(_assertThisInitialized(_this), _this._rightTick));

    document.body.addEventListener('mousemove', _this._slide.bind(_assertThisInitialized(_this)));
    document.body.addEventListener('mouseup', _this._stop.bind(_assertThisInitialized(_this)));

    _this._bar.addEventListener('click', _this._click.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Slider1, [{
    key: "mode",
    get: function get() {
      return this._mode;
    },
    set: function set(mode) {
      this._mode = mode;
    }
  }, {
    key: "min",
    get: function get() {
      return this._min;
    }
  }, {
    key: "max",
    get: function get() {
      return this._max;
    }
  }, {
    key: "lo",
    get: function get() {
      return this._min;
    }
  }, {
    key: "hi",
    get: function get() {
      return this._hi;
    },
    set: function set(hi) {
      if (this.validate(hi) && isNaN(this.lo) || this.lo <= hi) {
        this._hi = hi;
      }

      if (!isNaN(this.lo) && !isNaN(this.hi)) {
        var b = this._bar.getBoundingClientRect();

        var t = this._rightTick.getBoundingClientRect();

        var k = (b.width - t.width) / (this.max - this.min);
        this._range.style.width = "".concat(Math.round((this.hi - this.lo) * k) + t.width, "px");
        var event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "validate",
    value: function validate(value) {
      return !isNaN(value) && this.min <= value && value <= this.max;
    }
  }, {
    key: "_stop",
    value: function _stop() {
      if (this._tick !== null) {
        this._tick = null;
        this._offset = 0;
        var event = document.createEvent('Event');
        event.initEvent('stop', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "_start",
    value: function _start(tick, e) {
      e.stopPropagation();
      e.preventDefault();

      if (this._tick === null) {
        this._tick = tick;

        var t = this._tick.getBoundingClientRect();

        this._offset = e.clientX - t.left;
        var event = document.createEvent('Event');
        event.initEvent('start', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "_slide",
    value: function _slide(e) {
      var _this2 = this;

      e.stopPropagation();
      e.preventDefault();
      var tid = window.setTimeout(function () {
        window.clearTimeout(tid);

        if (_this2._tick) {
          var t = _this2._tick.getBoundingClientRect();

          var b = _this2._bar.getBoundingClientRect();

          var x = e.clientX - _this2._offset;

          if (b.left <= x && x + t.width <= b.right) {
            _this2._range.style.width = "".concat(e.clientX - _this2._offset + t.width - b.left, "px");

            _this2._updateBounds();
          }
        }
      }, this._delay);
    }
  }, {
    key: "_click",
    value: function _click(e) {
      if (!this._tick) {
        e.stopPropagation();

        var b = this._bar.getBoundingClientRect();

        var t = this._rightTick.getBoundingClientRect();

        var halfWidth = Math.round(t.width / 2);

        if (e.clientX < b.left + halfWidth) {
          this._range.style.width = "".concat(t.width, "px");
        } else if (e.clientX > b.right - halfWidth) {
          this._range.style.width = "".concat(b.width, "px");
        } else {
          this._range.style.width = "".concat(e.clientX - b.left + halfWidth, "px");
        }

        this._updateBounds();
      }
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds() {
      var b = this._bar.getBoundingClientRect();

      var t = this._rightTick.getBoundingClientRect();

      var k = (this.max - this.min) / (b.width - t.width);
      this._lo = this.min;
      var hi = t.left - b.left;
      this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round(hi * k));
      var event = document.createEvent('Event');
      event.initEvent('change', false, false);
      this.dispatchEvent(event);
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-component-slider');
      element.classList.add('no-select');
      element.innerHTML = "<div class=\"slider-bar\">\n                <div class=\"slider-range\">\n                    <div class=\"slider-tick slider-tick-right\">\n                        <label></label>\n                        <i></i>\n                    </div>\n                </div>\n            </div>";
      this._rightLabel = element.querySelector('.slider-tick label');

      this._rightLabel.classList.add('hidden');

      this._bar = element.querySelector('.slider-bar');
      this._rightTick = element.querySelector('.slider-tick-right');
      this._range = element.querySelector('.slider-range');
    }
  }]);

  return Slider1;
}(Component);

var Slider2 = /*#__PURE__*/function (_Slider) {
  _inherits(Slider2, _Slider);

  var _super = _createSuper(Slider2);

  function Slider2(container, _ref) {
    var _this;

    var min = _ref.min,
        max = _ref.max;

    _classCallCheck(this, Slider2);

    _this = _super.call(this, container, {
      min: min,
      max: max
    });

    _this._leftTick.addEventListener('mousedown', _this._start.bind(_assertThisInitialized(_this), _this._leftTick));

    return _this;
  }

  _createClass(Slider2, [{
    key: "lo",
    get: function get() {
      return this._lo;
    },
    set: function set(lo) {
      if (this.validate(lo) && (isNaN(this.hi) || lo <= this.hi)) {
        this._lo = lo;
      }

      this._updateUI();
    }
  }, {
    key: "hi",
    get: function get() {
      return this._hi;
    },
    set: function set(hi) {
      if (this.validate(hi) && (isNaN(this.lo) || this.lo <= hi)) {
        this._hi = hi;
      }

      this._updateUI();
    }
  }, {
    key: "_slide",
    value: function _slide(e) {
      var _this2 = this;

      e.stopPropagation();
      e.preventDefault();
      var tid = window.setTimeout(function () {
        window.clearTimeout(tid);

        if (_this2._tick) {
          var lt = _this2._leftTick.getBoundingClientRect();

          var rt = _this2._rightTick.getBoundingClientRect();

          var w = lt.width + rt.width;

          var b = _this2._bar.getBoundingClientRect();

          var x = e.clientX - _this2._offset;

          if (_this2._tick === _this2._leftTick) {
            if (x > b.left) {
              if (x + lt.width < rt.left) {
                _this2._range.style.left = "".concat(x - b.left, "px");
                _this2._range.style.width = "".concat(rt.right - x, "px");
              } else {
                _this2._range.style.left = "".concat(rt.left - lt.width - b.left, "px");
                _this2._range.style.width = "".concat(w, "px");
              }
            }

            _this2._updateBounds();
          } else if (_this2._tick === _this2._rightTick) {
            if (x < b.right - rt.width) {
              if (lt.right < x) {
                _this2._range.style.width = "".concat(x - lt.right + w, "px");
              } else {
                _this2._range.style.width = "".concat(w, "px");
              }
            }

            _this2._updateBounds();
          }
        }
      }, this._delay);
    }
  }, {
    key: "_click",
    value: function _click(e) {
      if (!this._tick) {
        e.stopPropagation(); // const b = this._bar.getBoundingClientRect();
        // const t = this._rightTick.getBoundingClientRect();
        // const halfWidth = Math.round (t.width / 2);
        // if (e.clientX < b.left + halfWidth) {                
        //     this._range.style.width = `${t.width}px`;
        // }
        // else if (e.clientX > b.right - halfWidth) {
        //     this._range.style.width = `${b.width}px`;
        // }
        // else {
        //     this._range.style.width = `${e.clientX - b.left + halfWidth}px`;                
        // }        
        // this._updateBounds();
      }
    }
  }, {
    key: "_updateUI",
    value: function _updateUI() {
      if (!isNaN(this.lo) && !isNaN(this.hi)) {
        var lt = this._leftTick.getBoundingClientRect();

        var rt = this._rightTick.getBoundingClientRect();

        var w = lt.width + rt.width;

        var b = this._bar.getBoundingClientRect();

        var k = (b.width - w) / (this.max - this.min);
        this._range.style.left = "".concat(Math.round((this.lo - this.min) * k), "px");
        this._range.style.width = "".concat(Math.round((this.hi - this.lo) * k) + w, "px");
        var event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds() {
      var b = this._bar.getBoundingClientRect();

      var lt = this._leftTick.getBoundingClientRect();

      var rt = this._rightTick.getBoundingClientRect();

      var w = lt.width + rt.width;
      var k = (this.max - this.min) / (b.width - w);
      var lo = lt.left - b.left;
      this._lo = this.min + (this.mode === 'float' ? lo * k : Math.round(lo * k));
      var hi = rt.left - b.left - lt.width;
      this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round(hi * k));
      var event = document.createEvent('Event');
      event.initEvent('change', false, false);
      this.dispatchEvent(event);
    }
  }, {
    key: "_render",
    value: function _render(element) {
      _get(_getPrototypeOf(Slider2.prototype), "_render", this).call(this, element);

      element.classList.add('scanex-component-two-tick-slider');
      this._leftTick = document.createElement('div');

      this._leftTick.classList.add('slider-tick');

      this._leftTick.classList.add('slider-tick-left');

      this._leftLabel = document.createElement('label');

      this._leftTick.appendChild(this._leftLabel);

      this._leftLabel.classList.add('hidden');

      var icn = document.createElement('i');

      this._leftTick.appendChild(icn);

      this._range.insertBefore(this._leftTick, this._rightTick);
    }
  }]);

  return Slider2;
}(Slider1);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue = function (value) {
  if (typeof value != 'number' && classofRaw(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
_export({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + stringRepeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + stringRepeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

var Slider3 = /*#__PURE__*/function (_Slider) {
  _inherits(Slider3, _Slider);

  var _super = _createSuper(Slider3);

  function Slider3(container, _ref) {
    var _this;

    var min = _ref.min,
        max = _ref.max;

    _classCallCheck(this, Slider3);

    _this = _super.call(this, container, {
      min: min,
      max: max
    });

    _this._middleTick.addEventListener('mousedown', _this._start.bind(_assertThisInitialized(_this), _this._middleTick));

    return _this;
  } // get lo() {
  //     return this._lo;
  // }
  // set lo(lo) {
  //     if(this.validate(lo) && (isNaN (this.hi) || lo <= this.hi)) {
  //         this._lo = lo;
  //     }
  //     this._updateUI();        
  // }


  _createClass(Slider3, [{
    key: "mi",
    get: function get() {
      return this._mi;
    },
    set: function set(mi) {
      if (this.validate(mi) && (isNaN(this.lo) || this.lo <= mi) && (isNaN(this.hi) || mi <= this.hi)) {
        this._mi = mi;
      }

      this._updateUI();
    } // get hi() {
    //     return this._hi;
    // }
    // set hi(hi) {
    //     if(this.validate(hi) && (isNaN(this.lo) || this.lo <= hi)) {
    //         this._hi = hi;
    //     }        
    //     this._updateUI();
    // }

  }, {
    key: "_updateUI",
    value: function _updateUI() {
      if (!isNaN(this.lo) && !isNaN(this.mi) && !isNaN(this.hi)) {
        var lt = this._leftTick.getBoundingClientRect();

        var mt = this._middleTick.getBoundingClientRect();

        var rt = this._rightTick.getBoundingClientRect();

        var w = lt.width + mt.width + rt.width;

        var b = this._bar.getBoundingClientRect();

        var k = (b.width - w) / (this.max - this.min);
        this._range.style.left = "".concat(Math.round((this.lo - this.min) * k), "px");
        this._range.style.width = "".concat(Math.round((this.hi - this.lo) * k) + w, "px");
        this._middleTick.style.left = "".concat(Math.round((this.mi - this.min) * k) + lt.width, "px");
        var event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds() {
      var lt = this._leftTick.getBoundingClientRect();

      var mt = this._middleTick.getBoundingClientRect();

      var rt = this._rightTick.getBoundingClientRect();

      var w = lt.width + mt.width + rt.width;

      var b = this._bar.getBoundingClientRect();

      var k = (this.max - this.min) / (b.width - w);
      var lo = lt.left - b.left;
      this._lo = this.min + (this.mode === 'float' ? lo * k : Math.round(lo * k));
      var mi = mt.left - b.left - lt.width;
      this._mi = this.min + (this.mode === 'float' ? mi * k : Math.round(mi * k));
      this._middleLabel.innerText = this.mode === 'float' ? this._mi.toFixed(2) : this._mi.toString();
      var hi = rt.left - b.left - lt.width - mt.width;
      this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round(hi * k));
      var event = document.createEvent('Event');
      event.initEvent('change', false, false);
      this.dispatchEvent(event);
    }
  }, {
    key: "_start",
    value: function _start(tick, e) {
      _get(_getPrototypeOf(Slider3.prototype), "_start", this).call(this, tick, e);

      this._mtLeft = this._middleTick.offsetLeft;

      if (tick === this._middleTick) {
        this._middleLabel.classList.remove('hidden');
      }
    }
  }, {
    key: "_stop",
    value: function _stop() {
      _get(_getPrototypeOf(Slider3.prototype), "_stop", this).call(this);

      this._mtLeft = 0;

      this._middleLabel.classList.add('hidden');
    }
  }, {
    key: "_slide",
    value: function _slide(e) {
      e.stopPropagation();
      e.preventDefault();

      if (this._tick) {
        var lt = this._leftTick.getBoundingClientRect();

        var mt = this._middleTick.getBoundingClientRect();

        var rt = this._rightTick.getBoundingClientRect();

        lt.width + mt.width + rt.width;

        var b = this._bar.getBoundingClientRect();

        var x = e.clientX - this._offset;

        if (this._tick === this._leftTick) {
          if (b.left <= x && x + lt.width <= mt.left) {
            this._range.style.left = "".concat(x - b.left, "px");
            this._range.style.width = "".concat(rt.right - x, "px");
            this._middleTick.style.left = "".concat(this._mtLeft, "px");

            this._updateBounds();
          }
        } else if (this._tick === this._middleTick) {
          if (lt.right <= x && x + mt.width <= rt.left) {
            this._middleTick.style.left = "".concat(x - b.left, "px");

            this._updateBounds();
          }
        } else if (this._tick === this._rightTick) {
          if (mt.left + mt.width <= x && x + rt.width <= b.left + b.width) {
            this._range.style.width = "".concat(x + rt.width - lt.left, "px");

            this._updateBounds();
          }
        }
      }
    }
  }, {
    key: "_render",
    value: function _render(element) {
      _get(_getPrototypeOf(Slider3.prototype), "_render", this).call(this, element);

      element.classList.add('scanex-component-three-tick-slider');
      this._middleTick = document.createElement('div');

      this._middleTick.classList.add('slider-tick');

      this._middleTick.classList.add('slider-tick-middle');

      this._middleLabel = document.createElement('label');

      this._middleLabel.classList.add('hidden');

      this._middleTick.appendChild(this._middleLabel);

      var icn = document.createElement('i');

      this._middleTick.appendChild(icn);

      this._bar.appendChild(this._middleTick);
    }
  }]);

  return Slider3;
}(Slider2);

var Interval = /*#__PURE__*/function (_Component) {
  _inherits(Interval, _Component);

  var _super = _createSuper(Interval);

  function Interval(container, _ref) {
    var _this;

    var min = _ref.min,
        max = _ref.max,
        slider = _ref.slider;

    _classCallCheck(this, Interval);

    _this = _super.call(this, container);
    _this._slider = new slider(_this._sliderElement, {
      min: min,
      max: max
    });

    _this._slider.on('change', _this._onChange.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Interval, [{
    key: "_onChange",
    value: function _onChange(e) {
      this._lo.value = this._slider.lo.toString();
      this._hi.value = this._slider.hi.toString();
      var event = document.createEvent('Event');
      event.initEvent('change', false, false);
      this.dispatchEvent(event);
    }
  }, {
    key: "min",
    get: function get() {
      return this._slider.min;
    },
    set: function set(min) {
      this._slider.min = min;
    }
  }, {
    key: "max",
    get: function get() {
      return this._slider.max;
    },
    set: function set(max) {
      this._slider.max = max;
    }
  }, {
    key: "lo",
    get: function get() {
      return this._slider.lo;
    },
    set: function set(lo) {
      this._slider.lo = lo;
    }
  }, {
    key: "hi",
    get: function get() {
      return this._slider.hi;
    },
    set: function set(hi) {
      this._slider.hi = hi;
    }
  }, {
    key: "_render",
    value: function _render(element) {
      element.classList.add('scanex-component-range');
      element.innerHTML = "<table>\n            <tr>\n                <td>\n                    <input class=\"lo\" type=\"text\" />\n                </td>\n                <td>\n                    <div class=\"slider\"></div>\n                </td>\n                <td>\n                    <input class=\"hi\" type=\"text\" />\n                </td>\n            </tr>\n        </table>";
      this._lo = element.querySelector('.lo');
      this._hi = element.querySelector('.hi');
      this._sliderElement = element.querySelector('.slider');
    }
  }]);

  return Interval;
}(Component);

var Interval3 = /*#__PURE__*/function (_Interval) {
  _inherits(Interval3, _Interval);

  var _super = _createSuper(Interval3);

  function Interval3(container, _ref) {
    var min = _ref.min,
        max = _ref.max;

    _classCallCheck(this, Interval3);

    return _super.call(this, container, {
      min: min,
      max: max,
      slider: Slider3
    });
  }

  _createClass(Interval3, [{
    key: "mi",
    get: function get() {
      return this._slider.mi;
    },
    set: function set(mi) {
      this._slider.mi = mi;
    }
  }]);

  return Interval3;
}(Interval);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Slider1: Slider1,
  Slider2: Slider2,
  Slider3: Slider3,
  Interval: Interval,
  Interval3: Interval3
});

var Tabs = /*#__PURE__*/function (_Component) {
  _inherits(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(container) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, container);
    _this._tabs = {};
    _this._panels = {};
    return _this;
  }

  _createClass(Tabs, [{
    key: "_render",
    value: function _render(container) {
      container.classList.add('scanex-component-tabs');
      this._tabsContainer = document.createElement('div');

      this._tabsContainer.classList.add('tabs');

      container.appendChild(this._tabsContainer);
      this._panelsContainer = document.createElement('div');

      this._panelsContainer.classList.add('panels');

      container.appendChild(this._panelsContainer);
    }
  }, {
    key: "_onTabClick",
    value: function _onTabClick(id, e) {
      e.stopPropagation();
      this.selected = id;
    }
  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(selected) {
      var _this2 = this;

      if (this.selected !== selected) {
        Object.keys(this._tabs).forEach(function (id) {
          if (id === selected) {
            _this2._tabs[id].classList.add('selected');

            _this2._panels[id].classList.remove('hidden');
          } else {
            _this2._tabs[id].classList.remove('selected');

            _this2._panels[id].classList.add('hidden');
          }
        });
        this._selected = selected;
        var event = document.createEvent('Event');
        event.initEvent('change:selected', false, false);
        this.dispatchEvent(event);
      }
    }
  }, {
    key: "addTab",
    value: function addTab(id, label) {
      var tab = document.createElement('div');
      tab.classList.add('tab');
      tab.classList.add('noselect');
      tab.classList.add(id);
      tab.innerText = label;
      tab.addEventListener('click', this._onTabClick.bind(this, id));

      this._tabsContainer.appendChild(tab);

      this._tabs[id] = tab;
      var panel = document.createElement('div');
      panel.classList.add('panel');
      panel.classList.add('hidden');
      panel.classList.add(id);

      this._panelsContainer.appendChild(panel);

      this._panels[id] = panel;

      if (!this.selected) {
        this.selected = id;
      }

      return panel;
    }
  }, {
    key: "removeTab",
    value: function removeTab(id) {
      this._tabsContainer.removeChild(this._tabs[id]);

      delete this._tabs[id];

      this._panelsContainer.removeChild(this._panels[id]);

      delete this._panels[id];

      if (this.selected === id) {
        var tabs = Object.keys(this._tabs);

        if (tabs.length) {
          this.selected = tabs[0];
        }
      }
    }
  }]);

  return Tabs;
}(Component);

exports.Component = Component;
exports.Dialog = Dialog;
exports.Form = Form;
exports.Menu = Menu;
exports.Pager = Pager;
exports.Sidebar = Sidebar;
exports.Sliders = index;
exports.Spinner = Spinner;
exports.Tabs = Tabs;
//# sourceMappingURL=scanex-components.js.map
