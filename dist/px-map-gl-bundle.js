(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":9}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":10}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":11}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":12}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":13}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":14}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":15}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":5,"../core-js/symbol/iterator":6}],9:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":86,"../modules/es6.string.iterator":91,"../modules/web.dom.iterable":96}],10:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":28}],11:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":28,"../../modules/es6.object.assign":88}],12:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":28,"../../modules/es6.object.keys":89}],13:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":28,"../../modules/es6.object.to-string":90,"../../modules/es6.symbol":92,"../../modules/es7.symbol.async-iterator":94,"../../modules/es7.symbol.observable":95}],14:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":83,"../../modules/es6.string.iterator":91,"../../modules/web.dom.iterable":96}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;
},{"../modules/_core":28,"../modules/es6.object.to-string":90,"../modules/es6.weak-map":93,"../modules/web.dom.iterable":96}],16:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],17:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],18:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],19:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":46}],20:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":75,"./_to-iobject":77,"./_to-length":78}],21:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":23,"./_ctx":29,"./_iobject":43,"./_to-length":78,"./_to-object":79}],22:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":45,"./_is-object":46,"./_wks":84}],23:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":22}],24:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":25,"./_wks":84}],25:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],26:[function(require,module,exports){
'use strict';
var redefineAll       = require('./_redefine-all')
  , getWeak           = require('./_meta').getWeak
  , anObject          = require('./_an-object')
  , isObject          = require('./_is-object')
  , anInstance        = require('./_an-instance')
  , forOf             = require('./_for-of')
  , createArrayMethod = require('./_array-methods')
  , $has              = require('./_has')
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"./_an-instance":18,"./_an-object":19,"./_array-methods":21,"./_for-of":37,"./_has":39,"./_is-object":46,"./_meta":54,"./_redefine-all":69}],27:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":18,"./_array-methods":21,"./_descriptors":31,"./_export":35,"./_fails":36,"./_for-of":37,"./_global":38,"./_hide":40,"./_is-object":46,"./_meta":54,"./_object-dp":57,"./_redefine-all":69,"./_set-to-string-tag":71}],28:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],29:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":16}],30:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],31:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":36}],32:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":38,"./_is-object":46}],33:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],34:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":62,"./_object-keys":65,"./_object-pie":66}],35:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":28,"./_ctx":29,"./_global":38,"./_hide":40}],36:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],37:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":19,"./_ctx":29,"./_is-array-iter":44,"./_iter-call":47,"./_to-length":78,"./core.get-iterator-method":85}],38:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],39:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],40:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":31,"./_object-dp":57,"./_property-desc":68}],41:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":38}],42:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":31,"./_dom-create":32,"./_fails":36}],43:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":25}],44:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":51,"./_wks":84}],45:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":25}],46:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],47:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":19}],48:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":40,"./_object-create":56,"./_property-desc":68,"./_set-to-string-tag":71,"./_wks":84}],49:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":35,"./_has":39,"./_hide":40,"./_iter-create":48,"./_iterators":51,"./_library":53,"./_object-gpo":63,"./_redefine":70,"./_set-to-string-tag":71,"./_wks":84}],50:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],51:[function(require,module,exports){
module.exports = {};
},{}],52:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":65,"./_to-iobject":77}],53:[function(require,module,exports){
module.exports = true;
},{}],54:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":36,"./_has":39,"./_is-object":46,"./_object-dp":57,"./_uid":81}],55:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":36,"./_iobject":43,"./_object-gops":62,"./_object-keys":65,"./_object-pie":66,"./_to-object":79}],56:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":19,"./_dom-create":32,"./_enum-bug-keys":33,"./_html":41,"./_object-dps":58,"./_shared-key":72}],57:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":19,"./_descriptors":31,"./_ie8-dom-define":42,"./_to-primitive":80}],58:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":19,"./_descriptors":31,"./_object-dp":57,"./_object-keys":65}],59:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":31,"./_has":39,"./_ie8-dom-define":42,"./_object-pie":66,"./_property-desc":68,"./_to-iobject":77,"./_to-primitive":80}],60:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":61,"./_to-iobject":77}],61:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":33,"./_object-keys-internal":64}],62:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],63:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":39,"./_shared-key":72,"./_to-object":79}],64:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":20,"./_has":39,"./_shared-key":72,"./_to-iobject":77}],65:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":33,"./_object-keys-internal":64}],66:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],67:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":28,"./_export":35,"./_fails":36}],68:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],69:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":40}],70:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":40}],71:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":39,"./_object-dp":57,"./_wks":84}],72:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":73,"./_uid":81}],73:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":38}],74:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":30,"./_to-integer":76}],75:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":76}],76:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],77:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":30,"./_iobject":43}],78:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":76}],79:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":30}],80:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":46}],81:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],82:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":28,"./_global":38,"./_library":53,"./_object-dp":57,"./_wks-ext":83}],83:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":84}],84:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":38,"./_shared":73,"./_uid":81}],85:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":24,"./_core":28,"./_iterators":51,"./_wks":84}],86:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":19,"./_core":28,"./core.get-iterator-method":85}],87:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":17,"./_iter-define":49,"./_iter-step":50,"./_iterators":51,"./_to-iobject":77}],88:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":35,"./_object-assign":55}],89:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":65,"./_object-sap":67,"./_to-object":79}],90:[function(require,module,exports){

},{}],91:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":49,"./_string-at":74}],92:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":19,"./_descriptors":31,"./_enum-keys":34,"./_export":35,"./_fails":36,"./_global":38,"./_has":39,"./_hide":40,"./_is-array":45,"./_keyof":52,"./_library":53,"./_meta":54,"./_object-create":56,"./_object-dp":57,"./_object-gopd":59,"./_object-gopn":61,"./_object-gopn-ext":60,"./_object-gops":62,"./_object-keys":65,"./_object-pie":66,"./_property-desc":68,"./_redefine":70,"./_set-to-string-tag":71,"./_shared":73,"./_to-iobject":77,"./_to-primitive":80,"./_uid":81,"./_wks":84,"./_wks-define":82,"./_wks-ext":83}],93:[function(require,module,exports){
'use strict';
var each         = require('./_array-methods')(0)
  , redefine     = require('./_redefine')
  , meta         = require('./_meta')
  , assign       = require('./_object-assign')
  , weak         = require('./_collection-weak')
  , isObject     = require('./_is-object')
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"./_array-methods":21,"./_collection":27,"./_collection-weak":26,"./_is-object":46,"./_meta":54,"./_object-assign":55,"./_redefine":70}],94:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":82}],95:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":82}],96:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":38,"./_hide":40,"./_iterators":51,"./_wks":84,"./es6.array.iterator":87}],97:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},attached:function attached(){this.__elAttached=true},detached:function detached(){this.__elAttached=false},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire('px-map-gl-gl-element-ready-to-add');return true},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire('px-map-gl-gl-element-instance-created')}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();this.updateInst(lastOptions,nextOptions);this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error('The `createInst` method must be implemented.')},updateInst:function updateInst(){throw new Error('The `updateInst` method must be implemented.')},getInstOptions:function getInstOptions(){throw new Error('The `getInstOptions` method must be implemented.')},addInst:function addInst(){throw new Error('The `bindInst` method must be implemented.')},removeInst:function removeInst(){throw new Error('The `unbindInst` method must be implemented.')},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error('The first parameter of `extendObj` must be an object to be mutated.');for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target){if((typeof evts==='undefined'?'undefined':(0,_typeof3.default)(evts))!=='object'||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};el.on(evtReference.name,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return'style-scope px-map-gl-gl'}};PxMapGlBehavior.Element=[PxMapGlBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":3,"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/weak-map":7,"babel-runtime/helpers/typeof":8}],98:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.SymbolLayerImpl={properties:{iconImage:{type:String,value:'music-15',observer:'shouldUpdateInst'},iconAllowOverlap:{type:Boolean,value:false,observer:'shouldUpdateInst'},iconSize:{type:Number,value:1,observer:'shouldUpdateInst'}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},createInst:function createInst(options){var symbolLayerInst=options;return symbolLayerInst},updateInst:function updateInst(lastOptions,nextOptions){var _this=this;console.log('gl-gj-source-update-instance');if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){(function(){var styleAttributeProperties=_this.getInstOptions().featureStyle;_this.elementInst.clearLayers();_this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this._getStyle(featureProperties,styleAttributeProperties)};_this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){_this._bindFeaturePopups()}})()}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}},getInstOptions:function getInstOptions(){var options={id:this.id,type:'symbol',source:this.source,minzoom:this.minZoom,maxzoom:this.maxZoom};options.layout={'visibility':this.hidden===true?'none':'visible','icon-image':this.iconImage,'icon-allow-overlap':this.iconAllowOverlap,'icon-size':this.iconSize};return options},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-gl-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-gl-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-popup-closed',detail)}};PxMapGlBehavior.SymbolLayer=[PxMapGlBehavior.Layer,PxMapGlBehavior.SymbolLayerImpl]})();

},{"babel-runtime/core-js/object/keys":4,"babel-runtime/helpers/typeof":8}],99:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.LayerImpl={properties:{id:{type:String},source:{type:String},hidden:{type:Boolean,value:false},minZoom:{type:Number,value:0,observer:'shouldUpdateInst'},maxZoom:{type:Number,value:22,observer:'shouldUpdateInst'},filter:{type:Array,observer:'shouldUpdateInst'},activeFeature:{type:Object,notify:true,readOnly:true,reflectToAttribute:true,value:function value(){return{}}}},attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,'px-map-gl-root-load','shouldAddInst');this.listen(this.parentNode,'px-map-gl-root-styledata','shouldAddInst')},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;console.log('shouldAddInst on layer');PxMapGlBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent&&parent.elementInst.getLayer(this.id)==undefined){console.log('shouldaddinst layer true');this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){console.log('addInst on layer');console.log(this.elementInst);parent.elementInst.addLayer(this.elementInst);parent.elementInst.on('mouseenter',this.id,this._broadcastEvent.bind(this));parent.elementInst.on('mouseenter',this.id,this._broadcastActiveFeature.bind(this));parent.elementInst.on('mouseenter',this.id,this._switchPointer.bind(this));parent.elementInst.on('mouseleave',this.id,this._broadcastEvent.bind(this));parent.elementInst.on('mouseleave',this.id,this._broadcastActiveFeature.bind(this));parent.elementInst.on('mouseleave',this.id,this._switchPointer.bind(this))},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},_broadcastActiveFeature:function _broadcastActiveFeature(e){if(e.type==='mouseenter'){this._setActiveFeature(e.features[0])}else{this._setActiveFeature({})}},_broadcastEvent:function _broadcastEvent(e){var detail={emitter:this,event:e};console.log(detail);this.fire('px-map-gl-gl-layer-'+e.type,detail)},_switchPointer:function _switchPointer(e){if(e.type==='mouseenter'){e.target.getCanvas().style.cursor='pointer'}else{e.target.getCanvas().style.cursor=''}},canAddInst:function canAddInst(){return true}};PxMapGlBehavior.Layer=[PxMapGlBehavior.Element,PxMapGlBehavior.LayerImpl]})();

},{}],100:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.MglRootImpl={properties:{crs:{type:Object},style:{type:String,value:'mapbox://styles/mapbox/dark-v9',notify:true,observer:'shouldUpdateInst'},mglToken:{type:String,value:''},lat:{type:Number,value:37.7672375,notify:true,reflectToAttribute:true,observer:'shouldUpdateInst'},lng:{type:Number,value:-121.9584131,notify:true,reflectToAttribute:true,observer:'shouldUpdateInst'},zoom:{type:Number,value:10,notify:true,reflectToAttribute:true,observer:'shouldUpdateInst'},bearing:{type:Number,value:0,notify:true,reflectToAttribute:true,observer:'shouldUpdateInst'},pitch:{type:Number,value:0,notify:true,reflectToAttribute:true,observer:'shouldUpdateInst'},maxZoom:{type:Number,observer:'shouldUpdateInst'},minZoom:{type:Number,observer:'shouldUpdateInst'},maxBounds:{type:Array,observer:'shouldUpdateInst'},disableInteraction:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableDragging:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableScrollZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableTouchZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false}},attached:function attached(){this.listen(this,'px-map-gl-element-ready-to-add','shouldAddInst');if(this.canAddInst()){this.fire('px-map-gl-element-ready-to-add')}},detached:function detached(){this.unlisten(this,'px-map-gl-element-ready-to-add','shouldAddInst');this.shouldRemoveInst();this.removeInst()},shouldAddInst:function shouldAddInst(evt){if(Polymer.dom(evt).rootTarget!==this)return;PxMapGlBehavior.ElementImpl.shouldAddInst.call(this);this.addInst()},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng)},createInst:function createInst(options){mapboxgl.accessToken=this.mglToken;options.container=Polymer.dom(this.root).querySelector(options.container);var mapInst=new mapboxgl.Map(options);if(this.isShadyScoped()){mapInst.__addShadyScope=this.scopeSubtree.bind(this)}return mapInst},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);var zoomStartFn=this._handleZoomStart.bind(this);var zoomEndFn=this._handleZoomEnd.bind(this);var mapLoadedFn=this._handleMapLoaded.bind(this);this.bindEvents({'moveend':mapMoveFn,'zoomstart':zoomStartFn,'zoomend':zoomEndFn,'load':mapLoadedFn,'styledata':mapLoadedFn})},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}},getInstOptions:function getInstOptions(){var options={};options.container='#map';options.center=[this.lng,this.lat];options.style=this.style;options.zoom=this.zoom;options.bearing=this.bearing;options.pitch=this.pitch;options.minZoom=this.minZoom||0;options.maxZoom=this.maxZoom||18;options.interactive=!this.disableInteraction;options.dragPan=!this.disableDragging;options.scrollZoom=!this.disableScrollZoom;options.touchZoomRotate=!this.disableTouchZoom;return options},updateInst:function updateInst(lastOptions,nextOptions){console.log('Update Inst');console.log('lastOptions');console.log(lastOptions);console.log('nextOptions');console.log(nextOptions);if(this.latLngIsValid(nextOptions.center[0],nextOptions.center[1])&&(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom||lastOptions.bearing!==nextOptions.bearing||lastOptions.pitch!==nextOptions.pitch)){this._updateMapView()}if(nextOptions.style!=''&&lastOptions.style!==nextOptions.style){this.elementInst.setStyle(nextOptions.style)}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.elementInst.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.elementInst.setMinZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxBounds(nextOptions.maxBounds)}if(!lastOptions.interactive&&nextOptions.interactive){this.elementInst.boxZoom.enable();this.elementInst.dragPan.enable();this.elementInst.dragRotate.enable();this.elementInst.scrollZoom.enable();this.elementInst.keyboard.enable();this.elementInst.doubleClickZoom.enable();this.elementInst.touchZoomRotate.enable()}if(lastOptions.interactive&&!nextOptions.interactive){this.elementInst.boxZoom.disable();this.elementInst.dragPan.disable();this.elementInst.dragRotate.disable();this.elementInst.scrollZoom.disable();this.elementInst.keyboard.disable();this.elementInst.doubleClickZoom.disable();this.elementInst.touchZoomRotate.disable()}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragPan.enable();this.elementInst.dragRotate.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragPan.disable();this.elementInst.dragRotate.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoomRotate.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoomRotate.disable()}},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce('update-map-view',function(){var _elementInst$getCente=this.elementInst.getCenter(),lng=_elementInst$getCente.lng,lat=_elementInst$getCente.lat;var zoom=this.elementInst.getZoom();var bearing=this.elementInst.getBearing();var pitch=this.elementInst.getPitch();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom||this.bearing!==bearing||this.pitch!==pitch){console.log(this.lng);console.log(this.lat);console.log(this.zoom);console.log(this.bearing);console.log(this.pitch);this.elementInst.flyTo({center:[this.lng,this.lat],zoom:this.zoom,pitch:this.pitch,bearing:this.bearing,speed:1.2,curve:1.42})}})},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;console.log('px-map-gl CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.');return false},_handleMapLoaded:function _handleMapLoaded(e){if(this.canAddInst()){this.debounce('fire-load-events',function(){var ev_name='px-map-gl-root-'+e.type;console.log('fire '+ev_name);this.fire(ev_name,this)},1000)}},_handleMapMove:function _handleMapMove(){if(this.__isZooming){this.__onZoomEnd=this._handleMapMove.bind(this);return}this.debounce('handle-map-move',function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();if(this.lat!==latLng.lat||this.lng!==latLng.lng){this.set('lat',latLng.lat);this.set('lng',latLng.lng)}if(this.zoom!==zoom){this.set('zoom',zoom)}this.fire('px-map-gl-moved',{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})})},_handleZoomStart:function _handleZoomStart(){this.__isZooming=true},_handleZoomEnd:function _handleZoomEnd(){this.__isZooming=false;if(typeof this.__onZoomEnd==='function'){this.__onZoomEnd();this.__onZoomEnd=null}},getVisibleMarkers:function getVisibleMarkers(){var mapBounds=this.elementInst.getBounds();var markers=[];this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){if(mapBounds.contains(layer.getLatLng())&&markers.indexOf(layer)===-1){markers.push(layer)}}if(layer._markerCluster){layer.eachLayer(function(marker){var parentCluster=layer.getVisibleParent(marker);if(parentCluster&&mapBounds.contains(parentCluster.getLatLng())&&marker&&markers.indexOf(marker)===-1){markers.push(marker)}})}});return markers}};PxMapGlBehavior.MglRoot=[PxMapGlBehavior.Element,PxMapGlBehavior.MglRootImpl]})();

},{}],101:[function(require,module,exports){
'use strict';var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.GeoJSONSourceImpl={properties:{data:{type:Object,observer:'shouldUpdateInst'},id:{type:String}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},addInst:function addInst(parent){console.log('gl-gj-addInst');PxMapGlBehavior.SourceImpl.addInst.call(this,parent)},createInst:function createInst(options){var geoJsonSourceInst={data:options.data,id:options.id,type:options.type};return geoJsonSourceInst},updateInst:function updateInst(lastOptions,nextOptions){var _this=this;console.log('gl-gj-source-update-instance');if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){(function(){var styleAttributeProperties=_this.getInstOptions().featureStyle;_this.elementInst.clearLayers();_this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this._getStyle(featureProperties,styleAttributeProperties)};_this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){_this._bindFeaturePopups()}})()}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}},getInstOptions:function getInstOptions(){return{data:this.data||{},id:this.id||'',dataHash:(0,_stringify2.default)(this.data||{}),type:'geojson'}},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-gl-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-gl-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-gl-layer-geojson-feature-popup-closed',detail)}};PxMapGlBehavior.GeoJSONSource=[PxMapGlBehavior.Source,PxMapGlBehavior.GeoJSONSourceImpl]})();

},{"babel-runtime/core-js/json/stringify":2,"babel-runtime/core-js/object/keys":4,"babel-runtime/helpers/typeof":8}],102:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.SourceImpl={attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,'px-map-gl-root-load','shouldAddInst');this.listen(this.parentNode,'px-map-gl-root-styledata','shouldAddInst')},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;console.log('shouldAddInst on source');PxMapGlBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent&&parent.elementInst.getSource(this.id)==undefined){console.log('shouldaddinst true');this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){console.log('addInst on source');console.log(parent);var sourceInfo={'type':this.elementInst.type};if(this.elementInst.data)sourceInfo.data=this.elementInst.data;parent.elementInst.addSource(this.elementInst.id,sourceInfo)},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},canAddInst:function canAddInst(){return true}};PxMapGlBehavior.Source=[PxMapGlBehavior.Element,PxMapGlBehavior.SourceImpl]})();

},{}]},{},[97,99,98,100,101,102]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtZ2wtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjl9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIjoxMH1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIjoxMX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiOjEyfV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIjoxM31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCI6MTR9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi93ZWFrLW1hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vd2Vhay1tYXBcIjoxNX1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG59LHtcIi4uL2NvcmUtanMvc3ltYm9sXCI6NSxcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI6Nn1dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xufSx7XCIuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yXCI6ODYsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo5MSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjk2fV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjoyOH1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjoyOCxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ25cIjo4OH1dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjI4LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXNcIjo4OX1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MjgsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6OTAsXCIuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2xcIjo5MixcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvclwiOjk0LFwiLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGVcIjo5NX1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xufSx7XCIuLi8uLi9tb2R1bGVzL193a3MtZXh0XCI6ODMsXCIuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo5MSxcIi4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjk2fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha01hcDtcbn0se1wiLi4vbW9kdWxlcy9fY29yZVwiOjI4LFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjkwLFwiLi4vbW9kdWxlcy9lczYud2Vhay1tYXBcIjo5MyxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjk2fV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwxNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG59LHt9XSwxODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xufSx7fV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjQ2fV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xufSx7XCIuL190by1pbmRleFwiOjc1LFwiLi9fdG8taW9iamVjdFwiOjc3LFwiLi9fdG8tbGVuZ3RoXCI6Nzh9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG59LHtcIi4vX2FycmF5LXNwZWNpZXMtY3JlYXRlXCI6MjMsXCIuL19jdHhcIjoyOSxcIi4vX2lvYmplY3RcIjo0MyxcIi4vX3RvLWxlbmd0aFwiOjc4LFwiLi9fdG8tb2JqZWN0XCI6Nzl9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xufSx7XCIuL19pcy1hcnJheVwiOjQ1LFwiLi9faXMtb2JqZWN0XCI6NDYsXCIuL193a3NcIjo4NH1dLDIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xufSx7XCIuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yXCI6MjJ9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xufSx7XCIuL19jb2ZcIjoyNSxcIi4vX3drc1wiOjg0fV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbn0se31dLDI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZ2V0V2VhayAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZ2V0V2Vha1xuICAsIGFuT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpXG4gICwgJGhhcyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24odGhhdCl7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUpO1xufTtcbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpe1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZih+aW5kZXgpdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgaWYoZGF0YSA9PT0gdHJ1ZSl1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfSxcbiAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxufTtcbn0se1wiLi9fYW4taW5zdGFuY2VcIjoxOCxcIi4vX2FuLW9iamVjdFwiOjE5LFwiLi9fYXJyYXktbWV0aG9kc1wiOjIxLFwiLi9fZm9yLW9mXCI6MzcsXCIuL19oYXNcIjozOSxcIi4vX2lzLW9iamVjdFwiOjQ2LFwiLi9fbWV0YVwiOjU0LFwiLi9fcmVkZWZpbmUtYWxsXCI6Njl9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbn0se1wiLi9fYW4taW5zdGFuY2VcIjoxOCxcIi4vX2FycmF5LW1ldGhvZHNcIjoyMSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzEsXCIuL19leHBvcnRcIjozNSxcIi4vX2ZhaWxzXCI6MzYsXCIuL19mb3Itb2ZcIjozNyxcIi4vX2dsb2JhbFwiOjM4LFwiLi9faGlkZVwiOjQwLFwiLi9faXMtb2JqZWN0XCI6NDYsXCIuL19tZXRhXCI6NTQsXCIuL19vYmplY3QtZHBcIjo1NyxcIi4vX3JlZGVmaW5lLWFsbFwiOjY5LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo3MX1dLDI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG59LHtcIi4vX2EtZnVuY3Rpb25cIjoxNn1dLDMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIuL19mYWlsc1wiOjM2fV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xufSx7XCIuL19nbG9iYWxcIjozOCxcIi4vX2lzLW9iamVjdFwiOjQ2fV0sMzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG59LHt9XSwzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiLi9fb2JqZWN0LWdvcHNcIjo2MixcIi4vX29iamVjdC1rZXlzXCI6NjUsXCIuL19vYmplY3QtcGllXCI6NjZ9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xufSx7XCIuL19jb3JlXCI6MjgsXCIuL19jdHhcIjoyOSxcIi4vX2dsb2JhbFwiOjM4LFwiLi9faGlkZVwiOjQwfV0sMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG59LHt9XSwzNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MTksXCIuL19jdHhcIjoyOSxcIi4vX2lzLWFycmF5LWl0ZXJcIjo0NCxcIi4vX2l0ZXItY2FsbFwiOjQ3LFwiLi9fdG8tbGVuZ3RoXCI6NzgsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjg1fV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxufSx7fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG59LHt9XSw0MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzEsXCIuL19vYmplY3QtZHBcIjo1NyxcIi4vX3Byb3BlcnR5LWRlc2NcIjo2OH1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufSx7XCIuL19nbG9iYWxcIjozOH1dLDQyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzEsXCIuL19kb20tY3JlYXRlXCI6MzIsXCIuL19mYWlsc1wiOjM2fV0sNDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG59LHtcIi4vX2NvZlwiOjI1fV0sNDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbn0se1wiLi9faXRlcmF0b3JzXCI6NTEsXCIuL193a3NcIjo4NH1dLDQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG59LHtcIi4vX2NvZlwiOjI1fV0sNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xufSx7fV0sNDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjE5fV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG59LHtcIi4vX2hpZGVcIjo0MCxcIi4vX29iamVjdC1jcmVhdGVcIjo1NixcIi4vX3Byb3BlcnR5LWRlc2NcIjo2OCxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6NzEsXCIuL193a3NcIjo4NH1dLDQ5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbn0se1wiLi9fZXhwb3J0XCI6MzUsXCIuL19oYXNcIjozOSxcIi4vX2hpZGVcIjo0MCxcIi4vX2l0ZXItY3JlYXRlXCI6NDgsXCIuL19pdGVyYXRvcnNcIjo1MSxcIi4vX2xpYnJhcnlcIjo1MyxcIi4vX29iamVjdC1ncG9cIjo2MyxcIi4vX3JlZGVmaW5lXCI6NzAsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjcxLFwiLi9fd2tzXCI6ODR9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xufSx7fV0sNTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbn0se31dLDUyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcbn0se1wiLi9fb2JqZWN0LWtleXNcIjo2NSxcIi4vX3RvLWlvYmplY3RcIjo3N31dLDUzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbn0se31dLDU0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xufSx7XCIuL19mYWlsc1wiOjM2LFwiLi9faGFzXCI6MzksXCIuL19pcy1vYmplY3RcIjo0NixcIi4vX29iamVjdC1kcFwiOjU3LFwiLi9fdWlkXCI6ODF9XSw1NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xufSx7XCIuL19mYWlsc1wiOjM2LFwiLi9faW9iamVjdFwiOjQzLFwiLi9fb2JqZWN0LWdvcHNcIjo2MixcIi4vX29iamVjdC1rZXlzXCI6NjUsXCIuL19vYmplY3QtcGllXCI6NjYsXCIuL190by1vYmplY3RcIjo3OX1dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxufSx7XCIuL19hbi1vYmplY3RcIjoxOSxcIi4vX2RvbS1jcmVhdGVcIjozMixcIi4vX2VudW0tYnVnLWtleXNcIjozMyxcIi4vX2h0bWxcIjo0MSxcIi4vX29iamVjdC1kcHNcIjo1OCxcIi4vX3NoYXJlZC1rZXlcIjo3Mn1dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjE5LFwiLi9fZGVzY3JpcHRvcnNcIjozMSxcIi4vX2llOC1kb20tZGVmaW5lXCI6NDIsXCIuL190by1wcmltaXRpdmVcIjo4MH1dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjE5LFwiLi9fZGVzY3JpcHRvcnNcIjozMSxcIi4vX29iamVjdC1kcFwiOjU3LFwiLi9fb2JqZWN0LWtleXNcIjo2NX1dLDU5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbn0se1wiLi9fZGVzY3JpcHRvcnNcIjozMSxcIi4vX2hhc1wiOjM5LFwiLi9faWU4LWRvbS1kZWZpbmVcIjo0MixcIi4vX29iamVjdC1waWVcIjo2NixcIi4vX3Byb3BlcnR5LWRlc2NcIjo2OCxcIi4vX3RvLWlvYmplY3RcIjo3NyxcIi4vX3RvLXByaW1pdGl2ZVwiOjgwfV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxufSx7XCIuL19vYmplY3QtZ29wblwiOjYxLFwiLi9fdG8taW9iamVjdFwiOjc3fV0sNjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbn0se1wiLi9fZW51bS1idWcta2V5c1wiOjMzLFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo2NH1dLDYyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG59LHt9XSw2MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xufSx7XCIuL19oYXNcIjozOSxcIi4vX3NoYXJlZC1rZXlcIjo3MixcIi4vX3RvLW9iamVjdFwiOjc5fV0sNjQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xufSx7XCIuL19hcnJheS1pbmNsdWRlc1wiOjIwLFwiLi9faGFzXCI6MzksXCIuL19zaGFyZWQta2V5XCI6NzIsXCIuL190by1pb2JqZWN0XCI6Nzd9XSw2NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbn0se1wiLi9fZW51bS1idWcta2V5c1wiOjMzLFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo2NH1dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xufSx7fV0sNjc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbn0se1wiLi9fY29yZVwiOjI4LFwiLi9fZXhwb3J0XCI6MzUsXCIuL19mYWlsc1wiOjM2fV0sNjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xufSx7fV0sNjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG59LHtcIi4vX2hpZGVcIjo0MH1dLDcwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xufSx7XCIuL19oaWRlXCI6NDB9XSw3MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG59LHtcIi4vX2hhc1wiOjM5LFwiLi9fb2JqZWN0LWRwXCI6NTcsXCIuL193a3NcIjo4NH1dLDcyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xufSx7XCIuL19zaGFyZWRcIjo3MyxcIi4vX3VpZFwiOjgxfV0sNzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6Mzh9XSw3NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjMwLFwiLi9fdG8taW50ZWdlclwiOjc2fV0sNzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbn0se1wiLi9fdG8taW50ZWdlclwiOjc2fV0sNzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xufSx7fV0sNzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjMwLFwiLi9faW9iamVjdFwiOjQzfV0sNzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG59LHtcIi4vX3RvLWludGVnZXJcIjo3Nn1dLDc5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjMwfV0sODA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjQ2fV0sODE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG59LHt9XSw4MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcbn0se1wiLi9fY29yZVwiOjI4LFwiLi9fZ2xvYmFsXCI6MzgsXCIuL19saWJyYXJ5XCI6NTMsXCIuL19vYmplY3QtZHBcIjo1NyxcIi4vX3drcy1leHRcIjo4M31dLDgzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xufSx7XCIuL193a3NcIjo4NH1dLDg0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xufSx7XCIuL19nbG9iYWxcIjozOCxcIi4vX3NoYXJlZFwiOjczLFwiLi9fdWlkXCI6ODF9XSw4NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbn0se1wiLi9fY2xhc3NvZlwiOjI0LFwiLi9fY29yZVwiOjI4LFwiLi9faXRlcmF0b3JzXCI6NTEsXCIuL193a3NcIjo4NH1dLDg2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MTksXCIuL19jb3JlXCI6MjgsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjg1fV0sODc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbn0se1wiLi9fYWRkLXRvLXVuc2NvcGFibGVzXCI6MTcsXCIuL19pdGVyLWRlZmluZVwiOjQ5LFwiLi9faXRlci1zdGVwXCI6NTAsXCIuL19pdGVyYXRvcnNcIjo1MSxcIi4vX3RvLWlvYmplY3RcIjo3N31dLDg4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xufSx7XCIuL19leHBvcnRcIjozNSxcIi4vX29iamVjdC1hc3NpZ25cIjo1NX1dLDg5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xufSx7XCIuL19vYmplY3Qta2V5c1wiOjY1LFwiLi9fb2JqZWN0LXNhcFwiOjY3LFwiLi9fdG8tb2JqZWN0XCI6Nzl9XSw5MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbn0se31dLDkxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG59LHtcIi4vX2l0ZXItZGVmaW5lXCI6NDksXCIuL19zdHJpbmctYXRcIjo3NH1dLDkyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xufSx7XCIuL19hbi1vYmplY3RcIjoxOSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzEsXCIuL19lbnVtLWtleXNcIjozNCxcIi4vX2V4cG9ydFwiOjM1LFwiLi9fZmFpbHNcIjozNixcIi4vX2dsb2JhbFwiOjM4LFwiLi9faGFzXCI6MzksXCIuL19oaWRlXCI6NDAsXCIuL19pcy1hcnJheVwiOjQ1LFwiLi9fa2V5b2ZcIjo1MixcIi4vX2xpYnJhcnlcIjo1MyxcIi4vX21ldGFcIjo1NCxcIi4vX29iamVjdC1jcmVhdGVcIjo1NixcIi4vX29iamVjdC1kcFwiOjU3LFwiLi9fb2JqZWN0LWdvcGRcIjo1OSxcIi4vX29iamVjdC1nb3BuXCI6NjEsXCIuL19vYmplY3QtZ29wbi1leHRcIjo2MCxcIi4vX29iamVjdC1nb3BzXCI6NjIsXCIuL19vYmplY3Qta2V5c1wiOjY1LFwiLi9fb2JqZWN0LXBpZVwiOjY2LFwiLi9fcHJvcGVydHktZGVzY1wiOjY4LFwiLi9fcmVkZWZpbmVcIjo3MCxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6NzEsXCIuL19zaGFyZWRcIjo3MyxcIi4vX3RvLWlvYmplY3RcIjo3NyxcIi4vX3RvLXByaW1pdGl2ZVwiOjgwLFwiLi9fdWlkXCI6ODEsXCIuL193a3NcIjo4NCxcIi4vX3drcy1kZWZpbmVcIjo4MixcIi4vX3drcy1leHRcIjo4M31dLDkzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBlYWNoICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCByZWRlZmluZSAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgbWV0YSAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgYXNzaWduICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpXG4gICwgd2VhayAgICAgICAgID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi13ZWFrJylcbiAgLCBpc09iamVjdCAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGdldFdlYWsgICAgICA9IG1ldGEuZ2V0V2Vha1xuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGVcbiAgLCB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlXG4gICwgdG1wICAgICAgICAgID0ge31cbiAgLCBJbnRlcm5hbE1hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpe1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ1dlYWtNYXAnLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XG4gIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG4gICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuICAgICAgICBpZighdGhpcy5fZil0aGlzLl9mID0gbmV3IEludGVybmFsTWFwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxufSx7XCIuL19hcnJheS1tZXRob2RzXCI6MjEsXCIuL19jb2xsZWN0aW9uXCI6MjcsXCIuL19jb2xsZWN0aW9uLXdlYWtcIjoyNixcIi4vX2lzLW9iamVjdFwiOjQ2LFwiLi9fbWV0YVwiOjU0LFwiLi9fb2JqZWN0LWFzc2lnblwiOjU1LFwiLi9fcmVkZWZpbmVcIjo3MH1dLDk0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xufSx7XCIuL193a3MtZGVmaW5lXCI6ODJ9XSw5NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbn0se1wiLi9fd2tzLWRlZmluZVwiOjgyfV0sOTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxufSx7XCIuL19nbG9iYWxcIjozOCxcIi4vX2hpZGVcIjo0MCxcIi4vX2l0ZXJhdG9yc1wiOjUxLFwiLi9fd2tzXCI6ODQsXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiOjg3fV0sOTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfZ2V0SXRlcmF0b3IyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTt2YXIgX2dldEl0ZXJhdG9yMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbD17YmVmb3JlUmVnaXN0ZXI6ZnVuY3Rpb24gYmVmb3JlUmVnaXN0ZXIoKXt0aGlzLmVsZW1lbnRJbnN0PW51bGx9LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9dHJ1ZX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9fZWxBdHRhY2hlZD1mYWxzZX0sbm90aWZ5SW5zdFJlYWR5OmZ1bmN0aW9uIG5vdGlmeUluc3RSZWFkeSgpe3ZhciBpc1JlYWR5PWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp0cnVlO2lmKCFpc1JlYWR5KXJldHVybiBmYWxzZTt0aGlzLmZpcmUoJ3B4LW1hcC1nbC1nbC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpO3JldHVybiB0cnVlfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCl7dmFyIG9wdGlvbnM9dGhpcy5fX2luaXRpYWxPcHRpb25zPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKTt0aGlzLmVsZW1lbnRJbnN0PXRoaXMuY3JlYXRlSW5zdChvcHRpb25zKTt0aGlzLmZpcmUoJ3B4LW1hcC1nbC1nbC1lbGVtZW50LWluc3RhbmNlLWNyZWF0ZWQnKX10aGlzLl9faW5zdEV2ZW50cz10aGlzLl9faW5zdEV2ZW50c3x8W107dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHR9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdCgpe3RoaXMudW5iaW5kQWxsRXZlbnRzKHRoaXMuX19pbnN0RXZlbnRzLHRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXApO3RoaXMuX19pbnN0RXZlbnRzPW51bGw7dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD1udWxsfSxzaG91bGRVcGRhdGVJbnN0OmZ1bmN0aW9uIHNob3VsZFVwZGF0ZUluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCYmdGhpcy5fX2VsQXR0YWNoZWQmJnRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3ZhciBsYXN0T3B0aW9ucz10aGlzLl9fbGFzdE9wdGlvbnN8fHRoaXMuX19pbml0aWFsT3B0aW9uczt2YXIgbmV4dE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMudXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyk7dGhpcy5fX2xhc3RPcHRpb25zPW5leHRPcHRpb25zfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3JlYXRlSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZ2V0SW5zdE9wdGlvbnNgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgYmluZEluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdW5iaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LGV4dGVuZE9iajpmdW5jdGlvbiBleHRlbmRPYmoob2JqKXtpZighb2JqfHwhKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIGBleHRlbmRPYmpgIG11c3QgYmUgYW4gb2JqZWN0IHRvIGJlIG11dGF0ZWQuJyk7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscHJvcGVydGllcz1BcnJheShfbGVuPjE/X2xlbi0xOjApLF9rZXk9MTtfa2V5PF9sZW47X2tleSsrKXtwcm9wZXJ0aWVzW19rZXktMV09YXJndW1lbnRzW19rZXldfWlmKHByb3BlcnRpZXMubGVuZ3RoKXtfYXNzaWduMi5kZWZhdWx0LmFwcGx5KE9iamVjdCxbb2JqXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiBvYmp9LGFkZFByb3BlcnRpZXM6ZnVuY3Rpb24gYWRkUHJvcGVydGllcygpe3RoaXMucHJvcGVydGllcz10aGlzLnByb3BlcnRpZXN8fHt9O2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4yKSxfa2V5Mj0wO19rZXkyPF9sZW4yO19rZXkyKyspe3Byb3BlcnRpZXNbX2tleTJdPWFyZ3VtZW50c1tfa2V5Ml19aWYocHJvcGVydGllcy5sZW5ndGgpe3RoaXMuZXh0ZW5kLmFwcGx5KHRoaXMsW3RoaXMucHJvcGVydGllc10uY29uY2F0KHByb3BlcnRpZXMpKX1yZXR1cm4gdGhpcy5wcm9wZXJ0aWVzfSxiaW5kRXZlbnRzOmZ1bmN0aW9uIGJpbmRFdmVudHMoZXZ0cyx0YXJnZXQpe2lmKCh0eXBlb2YgZXZ0cz09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOigwLF90eXBlb2YzLmRlZmF1bHQpKGV2dHMpKSE9PSdvYmplY3QnfHwhKDAsX2tleXMyLmRlZmF1bHQpKGV2dHMpLmxlbmd0aClyZXR1cm47dmFyIGVsPXRhcmdldHx8dGhpcy5lbGVtZW50SW5zdDtpZighZWx8fCFlbC5vbilyZXR1cm47dmFyIGJvdW5kRXZ0cz10aGlzLl9faW5zdEV2ZW50czt2YXIgYm91bmRFdnRFbHM9dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcDtmb3IodmFyIGV2dE5hbWUgaW4gZXZ0cyl7dmFyIGV2dFJlZmVyZW5jZT17bmFtZTpldnROYW1lLGZuOmV2dHNbZXZ0TmFtZV19O2VsLm9uKGV2dFJlZmVyZW5jZS5uYW1lLGV2dFJlZmVyZW5jZS5mbik7Ym91bmRFdnRzLnB1c2goZXZ0UmVmZXJlbmNlKTtib3VuZEV2dEVscy5zZXQoZXZ0UmVmZXJlbmNlLGVsKX19LHVuYmluZEFsbEV2ZW50czpmdW5jdGlvbiB1bmJpbmRBbGxFdmVudHMoYm91bmRFdnRzLGJvdW5kRXZ0RWxzKXtpZighYm91bmRFdnRzfHwhYm91bmRFdnRzLmxlbmd0aHx8IWJvdW5kRXZ0RWxzKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGJvdW5kRXZ0cyksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBldnQ9X3N0ZXAudmFsdWU7dmFyIGVsPWJvdW5kRXZ0RWxzLmdldChldnQpO2lmKCFlbHx8IWVsLm9mZiljb250aW51ZTt2YXIgbmFtZT1ldnQubmFtZSxmbj1ldnQuZm47ZWwub2ZmKG5hbWUsZm4pO2JvdW5kRXZ0RWxzLmRlbGV0ZShldnQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxpc1NoYWR5U2NvcGVkOmZ1bmN0aW9uIGlzU2hhZHlTY29wZWQoKXtyZXR1cm4hUG9seW1lci5TZXR0aW5ncy51c2VOYXRpdmVTaGFkb3d9LGdldFNoYWR5U2NvcGU6ZnVuY3Rpb24gZ2V0U2hhZHlTY29wZSgpe3JldHVybidzdHlsZS1zY29wZSBweC1tYXAtZ2wtZ2wnfX07UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQ9W1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjozLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6NCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcFwiOjcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6OH1dLDk4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLlN5bWJvbExheWVySW1wbD17cHJvcGVydGllczp7aWNvbkltYWdlOnt0eXBlOlN0cmluZyx2YWx1ZTonbXVzaWMtMTUnLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30saWNvbkFsbG93T3ZlcmxhcDp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30saWNvblNpemU6e3R5cGU6TnVtYmVyLHZhbHVlOjEsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLnNob3VsZFVwZGF0ZUluc3QoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMuZGF0YSYmKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKT09PSdvYmplY3QnJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt2YXIgc3ltYm9sTGF5ZXJJbnN0PW9wdGlvbnM7cmV0dXJuIHN5bWJvbExheWVySW5zdH0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgX3RoaXM9dGhpcztjb25zb2xlLmxvZygnZ2wtZ2otc291cmNlLXVwZGF0ZS1pbnN0YW5jZScpO2lmKCEoMCxfa2V5czIuZGVmYXVsdCkobmV4dE9wdGlvbnMuZGF0YSkubGVuZ3RoKXt0aGlzLmVsZW1lbnRJbnN0LmNsZWFyTGF5ZXJzKCl9ZWxzZSBpZigoMCxfa2V5czIuZGVmYXVsdCkobmV4dE9wdGlvbnMuZGF0YSkubGVuZ3RoJiYobGFzdE9wdGlvbnMuZGF0YUhhc2ghPT1uZXh0T3B0aW9ucy5kYXRhSGFzaHx8bGFzdE9wdGlvbnMuZmVhdHVyZVN0eWxlSGFzaCE9PW5leHRPcHRpb25zLmZlYXR1cmVTdHlsZUhhc2gpKXsoZnVuY3Rpb24oKXt2YXIgc3R5bGVBdHRyaWJ1dGVQcm9wZXJ0aWVzPV90aGlzLmdldEluc3RPcHRpb25zKCkuZmVhdHVyZVN0eWxlO190aGlzLmVsZW1lbnRJbnN0LmNsZWFyTGF5ZXJzKCk7X3RoaXMuZWxlbWVudEluc3Qub3B0aW9ucy5zdHlsZT1mdW5jdGlvbihmZWF0dXJlKXt2YXIgZmVhdHVyZVByb3BlcnRpZXM9ZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlfHx7fTtyZXR1cm4gX3RoaXMuX2dldFN0eWxlKGZlYXR1cmVQcm9wZXJ0aWVzLHN0eWxlQXR0cmlidXRlUHJvcGVydGllcyl9O190aGlzLmVsZW1lbnRJbnN0LmFkZERhdGEobmV4dE9wdGlvbnMuZGF0YSk7aWYobmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXtfdGhpcy5fYmluZEZlYXR1cmVQb3B1cHMoKX19KSgpfWVsc2UgaWYobGFzdE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzIT09bmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpdGhpcy5fYmluZEZlYXR1cmVQb3B1cHMoKTtpZighbmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXRoaXMuX3VuYmluZEZlYXR1cmVQb3B1cHMoKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9e2lkOnRoaXMuaWQsdHlwZTonc3ltYm9sJyxzb3VyY2U6dGhpcy5zb3VyY2UsbWluem9vbTp0aGlzLm1pblpvb20sbWF4em9vbTp0aGlzLm1heFpvb219O29wdGlvbnMubGF5b3V0PXsndmlzaWJpbGl0eSc6dGhpcy5oaWRkZW49PT10cnVlPydub25lJzondmlzaWJsZScsJ2ljb24taW1hZ2UnOnRoaXMuaWNvbkltYWdlLCdpY29uLWFsbG93LW92ZXJsYXAnOnRoaXMuaWNvbkFsbG93T3ZlcmxhcCwnaWNvbi1zaXplJzp0aGlzLmljb25TaXplfTtyZXR1cm4gb3B0aW9uc30sX2hhbmRsZUZlYXR1cmVBZGRlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZUFkZGVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9uKCdjbGljaycsdGhpcy5faGFuZGxlRmVhdHVyZVRhcHBlZC5iaW5kKHRoaXMpKTtldnQubGF5ZXIub24oJ3BvcHVwb3BlbicsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBjbG9zZScsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkLmJpbmQodGhpcykpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtZ2wtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLWFkZGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVSZW1vdmVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9mZigpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtZ2wtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXJlbW92ZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlVGFwcGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlVGFwcGVkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1nbC1sYXllci1nZW9qc29uLWZlYXR1cmUtdGFwcGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWdsLWxheWVyLWdlb2pzb24tZmVhdHVyZS1wb3B1cC1vcGVuZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtZ2wtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLWNsb3NlZCcsZGV0YWlsKX19O1B4TWFwR2xCZWhhdmlvci5TeW1ib2xMYXllcj1bUHhNYXBHbEJlaGF2aW9yLkxheWVyLFB4TWFwR2xCZWhhdmlvci5TeW1ib2xMYXllckltcGxdfSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo0LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjh9XSw5OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLkxheWVySW1wbD17cHJvcGVydGllczp7aWQ6e3R5cGU6U3RyaW5nfSxzb3VyY2U6e3R5cGU6U3RyaW5nfSxoaWRkZW46e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX0sbWluWm9vbTp7dHlwZTpOdW1iZXIsdmFsdWU6MCxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heFpvb206e3R5cGU6TnVtYmVyLHZhbHVlOjIyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZmlsdGVyOnt0eXBlOkFycmF5LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sYWN0aXZlRmVhdHVyZTp7dHlwZTpPYmplY3Qsbm90aWZ5OnRydWUscmVhZE9ubHk6dHJ1ZSxyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnt9fX19LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5ub3RpZnlJbnN0UmVhZHkodGhpcy5jYW5BZGRJbnN0KCkpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWdsLXJvb3QtbG9hZCcsJ3Nob3VsZEFkZEluc3QnKTt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsJ3B4LW1hcC1nbC1yb290LXN0eWxlZGF0YScsJ3Nob3VsZEFkZEluc3QnKX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnNob3VsZFJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7dmFyIHBhcmVudD1ldnQuZGV0YWlsO2NvbnNvbGUubG9nKCdzaG91bGRBZGRJbnN0IG9uIGxheWVyJyk7UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCYmcGFyZW50JiZwYXJlbnQuZWxlbWVudEluc3QuZ2V0TGF5ZXIodGhpcy5pZCk9PXVuZGVmaW5lZCl7Y29uc29sZS5sb2coJ3Nob3VsZGFkZGluc3QgbGF5ZXIgdHJ1ZScpO3RoaXMuYWRkSW5zdChwYXJlbnQpfTt9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRSZW1vdmVJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3Qpe3RoaXMucmVtb3ZlSW5zdChwYXJlbnQ/cGFyZW50OnVuZGVmaW5lZCl9O30sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7Y29uc29sZS5sb2coJ2FkZEluc3Qgb24gbGF5ZXInKTtjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRJbnN0KTtwYXJlbnQuZWxlbWVudEluc3QuYWRkTGF5ZXIodGhpcy5lbGVtZW50SW5zdCk7cGFyZW50LmVsZW1lbnRJbnN0Lm9uKCdtb3VzZWVudGVyJyx0aGlzLmlkLHRoaXMuX2Jyb2FkY2FzdEV2ZW50LmJpbmQodGhpcykpO3BhcmVudC5lbGVtZW50SW5zdC5vbignbW91c2VlbnRlcicsdGhpcy5pZCx0aGlzLl9icm9hZGNhc3RBY3RpdmVGZWF0dXJlLmJpbmQodGhpcykpO3BhcmVudC5lbGVtZW50SW5zdC5vbignbW91c2VlbnRlcicsdGhpcy5pZCx0aGlzLl9zd2l0Y2hQb2ludGVyLmJpbmQodGhpcykpO3BhcmVudC5lbGVtZW50SW5zdC5vbignbW91c2VsZWF2ZScsdGhpcy5pZCx0aGlzLl9icm9hZGNhc3RFdmVudC5iaW5kKHRoaXMpKTtwYXJlbnQuZWxlbWVudEluc3Qub24oJ21vdXNlbGVhdmUnLHRoaXMuaWQsdGhpcy5fYnJvYWRjYXN0QWN0aXZlRmVhdHVyZS5iaW5kKHRoaXMpKTtwYXJlbnQuZWxlbWVudEluc3Qub24oJ21vdXNlbGVhdmUnLHRoaXMuaWQsdGhpcy5fc3dpdGNoUG9pbnRlci5iaW5kKHRoaXMpKX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7cGFyZW50LnJlbW92ZVNvdXJjZSh0aGlzLmVsZW1lbnRJbnN0KTt0aGlzLmVsZW1lbnRJbnN0LnJlbW92ZSgpfSxfYnJvYWRjYXN0QWN0aXZlRmVhdHVyZTpmdW5jdGlvbiBfYnJvYWRjYXN0QWN0aXZlRmVhdHVyZShlKXtpZihlLnR5cGU9PT0nbW91c2VlbnRlcicpe3RoaXMuX3NldEFjdGl2ZUZlYXR1cmUoZS5mZWF0dXJlc1swXSl9ZWxzZXt0aGlzLl9zZXRBY3RpdmVGZWF0dXJlKHt9KX19LF9icm9hZGNhc3RFdmVudDpmdW5jdGlvbiBfYnJvYWRjYXN0RXZlbnQoZSl7dmFyIGRldGFpbD17ZW1pdHRlcjp0aGlzLGV2ZW50OmV9O2NvbnNvbGUubG9nKGRldGFpbCk7dGhpcy5maXJlKCdweC1tYXAtZ2wtZ2wtbGF5ZXItJytlLnR5cGUsZGV0YWlsKX0sX3N3aXRjaFBvaW50ZXI6ZnVuY3Rpb24gX3N3aXRjaFBvaW50ZXIoZSl7aWYoZS50eXBlPT09J21vdXNlZW50ZXInKXtlLnRhcmdldC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3I9J3BvaW50ZXInfWVsc2V7ZS50YXJnZXQuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yPScnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRydWV9fTtQeE1hcEdsQmVoYXZpb3IuTGF5ZXI9W1B4TWFwR2xCZWhhdmlvci5FbGVtZW50LFB4TWFwR2xCZWhhdmlvci5MYXllckltcGxdfSkoKTtcblxufSx7fV0sMTAwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwR2xCZWhhdmlvcj13aW5kb3cuUHhNYXBHbEJlaGF2aW9yfHx7fTtQeE1hcEdsQmVoYXZpb3IuTWdsUm9vdEltcGw9e3Byb3BlcnRpZXM6e2Nyczp7dHlwZTpPYmplY3R9LHN0eWxlOnt0eXBlOlN0cmluZyx2YWx1ZTonbWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXY5Jyxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1nbFRva2VuOnt0eXBlOlN0cmluZyx2YWx1ZTonJ30sbGF0Ont0eXBlOk51bWJlcix2YWx1ZTozNy43NjcyMzc1LG5vdGlmeTp0cnVlLHJlZmxlY3RUb0F0dHJpYnV0ZTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbG5nOnt0eXBlOk51bWJlcix2YWx1ZTotMTIxLjk1ODQxMzEsbm90aWZ5OnRydWUscmVmbGVjdFRvQXR0cmlidXRlOnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSx6b29tOnt0eXBlOk51bWJlcix2YWx1ZToxMCxub3RpZnk6dHJ1ZSxyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGJlYXJpbmc6e3R5cGU6TnVtYmVyLHZhbHVlOjAsbm90aWZ5OnRydWUscmVmbGVjdFRvQXR0cmlidXRlOnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxwaXRjaDp7dHlwZTpOdW1iZXIsdmFsdWU6MCxub3RpZnk6dHJ1ZSxyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heFpvb206e3R5cGU6TnVtYmVyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWluWm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXhCb3VuZHM6e3R5cGU6QXJyYXksb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlSW50ZXJhY3Rpb246e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVEcmFnZ2luZzp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGlzYWJsZVNjcm9sbFpvb206e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVUb3VjaFpvb206e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGZsZXhUb1NpemU6e3R5cGU6Qm9vbGVhbixyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSx2YWx1ZTpmYWxzZX19LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLWdsLWVsZW1lbnQtcmVhZHktdG8tYWRkJywnc2hvdWxkQWRkSW5zdCcpO2lmKHRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLmZpcmUoJ3B4LW1hcC1nbC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpfX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnVubGlzdGVuKHRoaXMsJ3B4LW1hcC1nbC1lbGVtZW50LXJlYWR5LXRvLWFkZCcsJ3Nob3VsZEFkZEluc3QnKTt0aGlzLnNob3VsZFJlbW92ZUluc3QoKTt0aGlzLnJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7aWYoUG9seW1lci5kb20oZXZ0KS5yb290VGFyZ2V0IT09dGhpcylyZXR1cm47UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzKTt0aGlzLmFkZEluc3QoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMubGF0TG5nSXNWYWxpZCh0aGlzLmxhdCx0aGlzLmxuZyl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXttYXBib3hnbC5hY2Nlc3NUb2tlbj10aGlzLm1nbFRva2VuO29wdGlvbnMuY29udGFpbmVyPVBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcik7dmFyIG1hcEluc3Q9bmV3IG1hcGJveGdsLk1hcChvcHRpb25zKTtpZih0aGlzLmlzU2hhZHlTY29wZWQoKSl7bWFwSW5zdC5fX2FkZFNoYWR5U2NvcGU9dGhpcy5zY29wZVN1YnRyZWUuYmluZCh0aGlzKX1yZXR1cm4gbWFwSW5zdH0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsdHJ1ZSl9dmFyIG1hcE1vdmVGbj10aGlzLl9oYW5kbGVNYXBNb3ZlLmJpbmQodGhpcyk7dmFyIHpvb21TdGFydEZuPXRoaXMuX2hhbmRsZVpvb21TdGFydC5iaW5kKHRoaXMpO3ZhciB6b29tRW5kRm49dGhpcy5faGFuZGxlWm9vbUVuZC5iaW5kKHRoaXMpO3ZhciBtYXBMb2FkZWRGbj10aGlzLl9oYW5kbGVNYXBMb2FkZWQuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydtb3ZlZW5kJzptYXBNb3ZlRm4sJ3pvb21zdGFydCc6em9vbVN0YXJ0Rm4sJ3pvb21lbmQnOnpvb21FbmRGbiwnbG9hZCc6bWFwTG9hZGVkRm4sJ3N0eWxlZGF0YSc6bWFwTG9hZGVkRm59KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsZmFsc2UpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz17fTtvcHRpb25zLmNvbnRhaW5lcj0nI21hcCc7b3B0aW9ucy5jZW50ZXI9W3RoaXMubG5nLHRoaXMubGF0XTtvcHRpb25zLnN0eWxlPXRoaXMuc3R5bGU7b3B0aW9ucy56b29tPXRoaXMuem9vbTtvcHRpb25zLmJlYXJpbmc9dGhpcy5iZWFyaW5nO29wdGlvbnMucGl0Y2g9dGhpcy5waXRjaDtvcHRpb25zLm1pblpvb209dGhpcy5taW5ab29tfHwwO29wdGlvbnMubWF4Wm9vbT10aGlzLm1heFpvb218fDE4O29wdGlvbnMuaW50ZXJhY3RpdmU9IXRoaXMuZGlzYWJsZUludGVyYWN0aW9uO29wdGlvbnMuZHJhZ1Bhbj0hdGhpcy5kaXNhYmxlRHJhZ2dpbmc7b3B0aW9ucy5zY3JvbGxab29tPSF0aGlzLmRpc2FibGVTY3JvbGxab29tO29wdGlvbnMudG91Y2hab29tUm90YXRlPSF0aGlzLmRpc2FibGVUb3VjaFpvb207cmV0dXJuIG9wdGlvbnN9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7Y29uc29sZS5sb2coJ1VwZGF0ZSBJbnN0Jyk7Y29uc29sZS5sb2coJ2xhc3RPcHRpb25zJyk7Y29uc29sZS5sb2cobGFzdE9wdGlvbnMpO2NvbnNvbGUubG9nKCduZXh0T3B0aW9ucycpO2NvbnNvbGUubG9nKG5leHRPcHRpb25zKTtpZih0aGlzLmxhdExuZ0lzVmFsaWQobmV4dE9wdGlvbnMuY2VudGVyWzBdLG5leHRPcHRpb25zLmNlbnRlclsxXSkmJihsYXN0T3B0aW9ucy5jZW50ZXJbMF0hPT1uZXh0T3B0aW9ucy5jZW50ZXJbMF18fGxhc3RPcHRpb25zLmNlbnRlclsxXSE9PW5leHRPcHRpb25zLmNlbnRlclsxXXx8bGFzdE9wdGlvbnMuem9vbSE9PW5leHRPcHRpb25zLnpvb218fGxhc3RPcHRpb25zLmJlYXJpbmchPT1uZXh0T3B0aW9ucy5iZWFyaW5nfHxsYXN0T3B0aW9ucy5waXRjaCE9PW5leHRPcHRpb25zLnBpdGNoKSl7dGhpcy5fdXBkYXRlTWFwVmlldygpfWlmKG5leHRPcHRpb25zLnN0eWxlIT0nJyYmbGFzdE9wdGlvbnMuc3R5bGUhPT1uZXh0T3B0aW9ucy5zdHlsZSl7dGhpcy5lbGVtZW50SW5zdC5zZXRTdHlsZShuZXh0T3B0aW9ucy5zdHlsZSl9aWYobGFzdE9wdGlvbnMubWF4Wm9vbSE9PW5leHRPcHRpb25zLm1heFpvb20mJiFpc05hTihuZXh0T3B0aW9ucy5tYXhab29tKSl7dGhpcy5lbGVtZW50SW5zdC5zZXRNYXhab29tKG5leHRPcHRpb25zLm1heFpvb20pfWlmKGxhc3RPcHRpb25zLm1pblpvb20hPT1uZXh0T3B0aW9ucy5taW5ab29tJiYhaXNOYU4obmV4dE9wdGlvbnMubWluWm9vbSkpe3RoaXMuZWxlbWVudEluc3Quc2V0TWluWm9vbShuZXh0T3B0aW9ucy5taW5ab29tKX1pZihsYXN0T3B0aW9ucy5tYXhCb3VuZHMhPT1uZXh0T3B0aW9ucy5tYXhCb3VuZHMmJiFpc05hTihuZXh0T3B0aW9ucy5tYXhCb3VuZHMpKXt0aGlzLnNldE1heEJvdW5kcyhuZXh0T3B0aW9ucy5tYXhCb3VuZHMpfWlmKCFsYXN0T3B0aW9ucy5pbnRlcmFjdGl2ZSYmbmV4dE9wdGlvbnMuaW50ZXJhY3RpdmUpe3RoaXMuZWxlbWVudEluc3QuYm94Wm9vbS5lbmFibGUoKTt0aGlzLmVsZW1lbnRJbnN0LmRyYWdQYW4uZW5hYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUm90YXRlLmVuYWJsZSgpO3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsWm9vbS5lbmFibGUoKTt0aGlzLmVsZW1lbnRJbnN0LmtleWJvYXJkLmVuYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZG91YmxlQ2xpY2tab29tLmVuYWJsZSgpO3RoaXMuZWxlbWVudEluc3QudG91Y2hab29tUm90YXRlLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLmludGVyYWN0aXZlJiYhbmV4dE9wdGlvbnMuaW50ZXJhY3RpdmUpe3RoaXMuZWxlbWVudEluc3QuYm94Wm9vbS5kaXNhYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUGFuLmRpc2FibGUoKTt0aGlzLmVsZW1lbnRJbnN0LmRyYWdSb3RhdGUuZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsWm9vbS5kaXNhYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5rZXlib2FyZC5kaXNhYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3QudG91Y2hab29tUm90YXRlLmRpc2FibGUoKX1pZighbGFzdE9wdGlvbnMuZHJhZ2dpbmcmJm5leHRPcHRpb25zLmRyYWdnaW5nKXt0aGlzLmVsZW1lbnRJbnN0LmRyYWdQYW4uZW5hYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUm90YXRlLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLmRyYWdnaW5nJiYhbmV4dE9wdGlvbnMuZHJhZ2dpbmcpe3RoaXMuZWxlbWVudEluc3QuZHJhZ1Bhbi5kaXNhYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUm90YXRlLmRpc2FibGUoKX1pZighbGFzdE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tJiZuZXh0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20pe3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsWm9vbS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20mJiFuZXh0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20pe3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsWm9vbS5kaXNhYmxlKCl9aWYoIWxhc3RPcHRpb25zLnRvdWNoWm9vbSYmbmV4dE9wdGlvbnMudG91Y2hab29tKXt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbVJvdGF0ZS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy50b3VjaFpvb20mJiFuZXh0T3B0aW9ucy50b3VjaFpvb20pe3RoaXMuZWxlbWVudEluc3QudG91Y2hab29tUm90YXRlLmRpc2FibGUoKX19LF91cGRhdGVNYXBWaWV3OmZ1bmN0aW9uIF91cGRhdGVNYXBWaWV3KCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZGVib3VuY2UoJ3VwZGF0ZS1tYXAtdmlldycsZnVuY3Rpb24oKXt2YXIgX2VsZW1lbnRJbnN0JGdldENlbnRlPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCksbG5nPV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sbmcsbGF0PV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sYXQ7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7dmFyIGJlYXJpbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRCZWFyaW5nKCk7dmFyIHBpdGNoPXRoaXMuZWxlbWVudEluc3QuZ2V0UGl0Y2goKTtpZih0aGlzLmxhdCE9PWxhdHx8dGhpcy5sbmchPT1sbmd8fHRoaXMuem9vbSE9PXpvb218fHRoaXMuYmVhcmluZyE9PWJlYXJpbmd8fHRoaXMucGl0Y2ghPT1waXRjaCl7Y29uc29sZS5sb2codGhpcy5sbmcpO2NvbnNvbGUubG9nKHRoaXMubGF0KTtjb25zb2xlLmxvZyh0aGlzLnpvb20pO2NvbnNvbGUubG9nKHRoaXMuYmVhcmluZyk7Y29uc29sZS5sb2codGhpcy5waXRjaCk7dGhpcy5lbGVtZW50SW5zdC5mbHlUbyh7Y2VudGVyOlt0aGlzLmxuZyx0aGlzLmxhdF0sem9vbTp0aGlzLnpvb20scGl0Y2g6dGhpcy5waXRjaCxiZWFyaW5nOnRoaXMuYmVhcmluZyxzcGVlZDoxLjIsY3VydmU6MS40Mn0pfX0pfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PScnfSxsYXRMbmdJc1ZhbGlkOmZ1bmN0aW9uIGxhdExuZ0lzVmFsaWQobGF0LGxuZyl7dmFyIGlzVmFsaWQ9dHlwZW9mIGxhdCE9PSd1bmRlZmluZWQnJiZ0aGlzLl9jYW5CZU51bShsYXQpJiZ0eXBlb2YgbG5nIT09J3VuZGVmaW5lZCcmJnRoaXMuX2NhbkJlTnVtKGxuZyk7aWYoaXNWYWxpZClyZXR1cm4gdHJ1ZTtjb25zb2xlLmxvZygncHgtbWFwLWdsIENPTkZJR1VSQVRJT04gRVJST1I6XFxuICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBsYXRgIG9yIGBsbmdgIGF0dHJpYnV0ZSBmb3IgJyt0aGlzLmlzKycuIFlvdSBtdXN0IHBhc3MgYSB2YWxpZCBudW1iZXIuJyk7cmV0dXJuIGZhbHNlfSxfaGFuZGxlTWFwTG9hZGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXBMb2FkZWQoZSl7aWYodGhpcy5jYW5BZGRJbnN0KCkpe3RoaXMuZGVib3VuY2UoJ2ZpcmUtbG9hZC1ldmVudHMnLGZ1bmN0aW9uKCl7dmFyIGV2X25hbWU9J3B4LW1hcC1nbC1yb290LScrZS50eXBlO2NvbnNvbGUubG9nKCdmaXJlICcrZXZfbmFtZSk7dGhpcy5maXJlKGV2X25hbWUsdGhpcyl9LDEwMDApfX0sX2hhbmRsZU1hcE1vdmU6ZnVuY3Rpb24gX2hhbmRsZU1hcE1vdmUoKXtpZih0aGlzLl9faXNab29taW5nKXt0aGlzLl9fb25ab29tRW5kPXRoaXMuX2hhbmRsZU1hcE1vdmUuYmluZCh0aGlzKTtyZXR1cm59dGhpcy5kZWJvdW5jZSgnaGFuZGxlLW1hcC1tb3ZlJyxmdW5jdGlvbigpe3ZhciBsYXRMbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRDZW50ZXIoKTt2YXIgem9vbT10aGlzLmVsZW1lbnRJbnN0LmdldFpvb20oKTt2YXIgYm91bmRzPXRoaXMuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7aWYodGhpcy5sYXQhPT1sYXRMbmcubGF0fHx0aGlzLmxuZyE9PWxhdExuZy5sbmcpe3RoaXMuc2V0KCdsYXQnLGxhdExuZy5sYXQpO3RoaXMuc2V0KCdsbmcnLGxhdExuZy5sbmcpfWlmKHRoaXMuem9vbSE9PXpvb20pe3RoaXMuc2V0KCd6b29tJyx6b29tKX10aGlzLmZpcmUoJ3B4LW1hcC1nbC1tb3ZlZCcse2xhdDpsYXRMbmcubGF0LGxuZzpsYXRMbmcubG5nLHpvb206em9vbSxib3VuZHM6Ym91bmRzfSl9KX0sX2hhbmRsZVpvb21TdGFydDpmdW5jdGlvbiBfaGFuZGxlWm9vbVN0YXJ0KCl7dGhpcy5fX2lzWm9vbWluZz10cnVlfSxfaGFuZGxlWm9vbUVuZDpmdW5jdGlvbiBfaGFuZGxlWm9vbUVuZCgpe3RoaXMuX19pc1pvb21pbmc9ZmFsc2U7aWYodHlwZW9mIHRoaXMuX19vblpvb21FbmQ9PT0nZnVuY3Rpb24nKXt0aGlzLl9fb25ab29tRW5kKCk7dGhpcy5fX29uWm9vbUVuZD1udWxsfX0sZ2V0VmlzaWJsZU1hcmtlcnM6ZnVuY3Rpb24gZ2V0VmlzaWJsZU1hcmtlcnMoKXt2YXIgbWFwQm91bmRzPXRoaXMuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7dmFyIG1hcmtlcnM9W107dGhpcy5lbGVtZW50SW5zdC5lYWNoTGF5ZXIoZnVuY3Rpb24obGF5ZXIpe2lmKGxheWVyLmlzTWFya2VyJiZsYXllci5nZXRMYXRMbmcpe2lmKG1hcEJvdW5kcy5jb250YWlucyhsYXllci5nZXRMYXRMbmcoKSkmJm1hcmtlcnMuaW5kZXhPZihsYXllcik9PT0tMSl7bWFya2Vycy5wdXNoKGxheWVyKX19aWYobGF5ZXIuX21hcmtlckNsdXN0ZXIpe2xheWVyLmVhY2hMYXllcihmdW5jdGlvbihtYXJrZXIpe3ZhciBwYXJlbnRDbHVzdGVyPWxheWVyLmdldFZpc2libGVQYXJlbnQobWFya2VyKTtpZihwYXJlbnRDbHVzdGVyJiZtYXBCb3VuZHMuY29udGFpbnMocGFyZW50Q2x1c3Rlci5nZXRMYXRMbmcoKSkmJm1hcmtlciYmbWFya2Vycy5pbmRleE9mKG1hcmtlcik9PT0tMSl7bWFya2Vycy5wdXNoKG1hcmtlcil9fSl9fSk7cmV0dXJuIG1hcmtlcnN9fTtQeE1hcEdsQmVoYXZpb3IuTWdsUm9vdD1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLk1nbFJvb3RJbXBsXX0pKCk7XG5cbn0se31dLDEwMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF9rZXlzPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO3ZhciBfa2V5czI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7dmFyIF90eXBlb2YyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5HZW9KU09OU291cmNlSW1wbD17cHJvcGVydGllczp7ZGF0YTp7dHlwZTpPYmplY3Qsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxpZDp7dHlwZTpTdHJpbmd9fSx1cGRhdGU6ZnVuY3Rpb24gdXBkYXRlKCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuc2hvdWxkVXBkYXRlSW5zdCgpfSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdGhpcy5kYXRhJiYoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpPT09J29iamVjdCcmJigwLF9rZXlzMi5kZWZhdWx0KSh0aGlzLmRhdGEpLmxlbmd0aH0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7Y29uc29sZS5sb2coJ2dsLWdqLWFkZEluc3QnKTtQeE1hcEdsQmVoYXZpb3IuU291cmNlSW1wbC5hZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dmFyIGdlb0pzb25Tb3VyY2VJbnN0PXtkYXRhOm9wdGlvbnMuZGF0YSxpZDpvcHRpb25zLmlkLHR5cGU6b3B0aW9ucy50eXBlfTtyZXR1cm4gZ2VvSnNvblNvdXJjZUluc3R9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIF90aGlzPXRoaXM7Y29uc29sZS5sb2coJ2dsLWdqLXNvdXJjZS11cGRhdGUtaW5zdGFuY2UnKTtpZighKDAsX2tleXMyLmRlZmF1bHQpKG5leHRPcHRpb25zLmRhdGEpLmxlbmd0aCl7dGhpcy5lbGVtZW50SW5zdC5jbGVhckxheWVycygpfWVsc2UgaWYoKDAsX2tleXMyLmRlZmF1bHQpKG5leHRPcHRpb25zLmRhdGEpLmxlbmd0aCYmKGxhc3RPcHRpb25zLmRhdGFIYXNoIT09bmV4dE9wdGlvbnMuZGF0YUhhc2h8fGxhc3RPcHRpb25zLmZlYXR1cmVTdHlsZUhhc2ghPT1uZXh0T3B0aW9ucy5mZWF0dXJlU3R5bGVIYXNoKSl7KGZ1bmN0aW9uKCl7dmFyIHN0eWxlQXR0cmlidXRlUHJvcGVydGllcz1fdGhpcy5nZXRJbnN0T3B0aW9ucygpLmZlYXR1cmVTdHlsZTtfdGhpcy5lbGVtZW50SW5zdC5jbGVhckxheWVycygpO190aGlzLmVsZW1lbnRJbnN0Lm9wdGlvbnMuc3R5bGU9ZnVuY3Rpb24oZmVhdHVyZSl7dmFyIGZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcy5zdHlsZXx8e307cmV0dXJuIF90aGlzLl9nZXRTdHlsZShmZWF0dXJlUHJvcGVydGllcyxzdHlsZUF0dHJpYnV0ZVByb3BlcnRpZXMpfTtfdGhpcy5lbGVtZW50SW5zdC5hZGREYXRhKG5leHRPcHRpb25zLmRhdGEpO2lmKG5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl7X3RoaXMuX2JpbmRGZWF0dXJlUG9wdXBzKCl9fSkoKX1lbHNlIGlmKGxhc3RPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyE9PW5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl7aWYobmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXRoaXMuX2JpbmRGZWF0dXJlUG9wdXBzKCk7aWYoIW5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl0aGlzLl91bmJpbmRGZWF0dXJlUG9wdXBzKCl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntkYXRhOnRoaXMuZGF0YXx8e30saWQ6dGhpcy5pZHx8JycsZGF0YUhhc2g6KDAsX3N0cmluZ2lmeTIuZGVmYXVsdCkodGhpcy5kYXRhfHx7fSksdHlwZTonZ2VvanNvbid9fSxfaGFuZGxlRmVhdHVyZUFkZGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlQWRkZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub24oJ2NsaWNrJyx0aGlzLl9oYW5kbGVGZWF0dXJlVGFwcGVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBvcGVuJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQuYmluZCh0aGlzKSk7ZXZ0LmxheWVyLm9uKCdwb3B1cGNsb3NlJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQuYmluZCh0aGlzKSk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1nbC1sYXllci1nZW9qc29uLWZlYXR1cmUtYWRkZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUmVtb3ZlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVJlbW92ZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub2ZmKCk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1nbC1sYXllci1nZW9qc29uLWZlYXR1cmUtcmVtb3ZlZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVUYXBwZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVUYXBwZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWdsLWxheWVyLWdlb2pzb24tZmVhdHVyZS10YXBwZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cE9wZW5lZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtZ2wtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLW9wZW5lZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1nbC1sYXllci1nZW9qc29uLWZlYXR1cmUtcG9wdXAtY2xvc2VkJyxkZXRhaWwpfX07UHhNYXBHbEJlaGF2aW9yLkdlb0pTT05Tb3VyY2U9W1B4TWFwR2xCZWhhdmlvci5Tb3VyY2UsUHhNYXBHbEJlaGF2aW9yLkdlb0pTT05Tb3VyY2VJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCI6MixcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6OH1dLDEwMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLlNvdXJjZUltcGw9e2F0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5ub3RpZnlJbnN0UmVhZHkodGhpcy5jYW5BZGRJbnN0KCkpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWdsLXJvb3QtbG9hZCcsJ3Nob3VsZEFkZEluc3QnKTt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsJ3B4LW1hcC1nbC1yb290LXN0eWxlZGF0YScsJ3Nob3VsZEFkZEluc3QnKX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnNob3VsZFJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7dmFyIHBhcmVudD1ldnQuZGV0YWlsO2NvbnNvbGUubG9nKCdzaG91bGRBZGRJbnN0IG9uIHNvdXJjZScpO1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3QmJnBhcmVudCYmcGFyZW50LmVsZW1lbnRJbnN0LmdldFNvdXJjZSh0aGlzLmlkKT09dW5kZWZpbmVkKXtjb25zb2xlLmxvZygnc2hvdWxkYWRkaW5zdCB0cnVlJyk7dGhpcy5hZGRJbnN0KHBhcmVudCl9O30sc2hvdWxkUmVtb3ZlSW5zdDpmdW5jdGlvbiBzaG91bGRSZW1vdmVJbnN0KHBhcmVudCl7UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZFJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCl7dGhpcy5yZW1vdmVJbnN0KHBhcmVudD9wYXJlbnQ6dW5kZWZpbmVkKX07fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtjb25zb2xlLmxvZygnYWRkSW5zdCBvbiBzb3VyY2UnKTtjb25zb2xlLmxvZyhwYXJlbnQpO3ZhciBzb3VyY2VJbmZvPXsndHlwZSc6dGhpcy5lbGVtZW50SW5zdC50eXBlfTtpZih0aGlzLmVsZW1lbnRJbnN0LmRhdGEpc291cmNlSW5mby5kYXRhPXRoaXMuZWxlbWVudEluc3QuZGF0YTtwYXJlbnQuZWxlbWVudEluc3QuYWRkU291cmNlKHRoaXMuZWxlbWVudEluc3QuaWQsc291cmNlSW5mbyl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe3BhcmVudC5yZW1vdmVTb3VyY2UodGhpcy5lbGVtZW50SW5zdCk7dGhpcy5lbGVtZW50SW5zdC5yZW1vdmUoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRydWV9fTtQeE1hcEdsQmVoYXZpb3IuU291cmNlPVtQeE1hcEdsQmVoYXZpb3IuRWxlbWVudCxQeE1hcEdsQmVoYXZpb3IuU291cmNlSW1wbF19KSgpO1xuXG59LHt9XX0se30sWzk3LDk5LDk4LDEwMCwxMDEsMTAyXSk7XG4iXSwiZmlsZSI6InB4LW1hcC1nbC1idW5kbGUuanMifQ==
