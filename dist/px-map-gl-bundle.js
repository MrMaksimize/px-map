(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":8}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":9}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":10}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":11}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":12}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":13}],7:[function(require,module,exports){
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
},{"../core-js/symbol":4,"../core-js/symbol/iterator":5}],8:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":84,"../modules/es6.string.iterator":89,"../modules/web.dom.iterable":94}],9:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":26,"../../modules/es6.object.assign":86}],10:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":26,"../../modules/es6.object.keys":87}],11:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":26,"../../modules/es6.object.to-string":88,"../../modules/es6.symbol":90,"../../modules/es7.symbol.async-iterator":92,"../../modules/es7.symbol.observable":93}],12:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":81,"../../modules/es6.string.iterator":89,"../../modules/web.dom.iterable":94}],13:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;
},{"../modules/_core":26,"../modules/es6.object.to-string":88,"../modules/es6.weak-map":91,"../modules/web.dom.iterable":94}],14:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],15:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],16:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],17:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":44}],18:[function(require,module,exports){
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
},{"./_to-index":73,"./_to-iobject":75,"./_to-length":76}],19:[function(require,module,exports){
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
},{"./_array-species-create":21,"./_ctx":27,"./_iobject":41,"./_to-length":76,"./_to-object":77}],20:[function(require,module,exports){
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
},{"./_is-array":43,"./_is-object":44,"./_wks":82}],21:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":20}],22:[function(require,module,exports){
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
},{"./_cof":23,"./_wks":82}],23:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],24:[function(require,module,exports){
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
},{"./_an-instance":16,"./_an-object":17,"./_array-methods":19,"./_for-of":35,"./_has":37,"./_is-object":44,"./_meta":52,"./_redefine-all":67}],25:[function(require,module,exports){
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
},{"./_an-instance":16,"./_array-methods":19,"./_descriptors":29,"./_export":33,"./_fails":34,"./_for-of":35,"./_global":36,"./_hide":38,"./_is-object":44,"./_meta":52,"./_object-dp":55,"./_redefine-all":67,"./_set-to-string-tag":69}],26:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],27:[function(require,module,exports){
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
},{"./_a-function":14}],28:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],29:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":34}],30:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":36,"./_is-object":44}],31:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],32:[function(require,module,exports){
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
},{"./_object-gops":60,"./_object-keys":63,"./_object-pie":64}],33:[function(require,module,exports){
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
},{"./_core":26,"./_ctx":27,"./_global":36,"./_hide":38}],34:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],35:[function(require,module,exports){
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
},{"./_an-object":17,"./_ctx":27,"./_is-array-iter":42,"./_iter-call":45,"./_to-length":76,"./core.get-iterator-method":83}],36:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],37:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],38:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":29,"./_object-dp":55,"./_property-desc":66}],39:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":36}],40:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":29,"./_dom-create":30,"./_fails":34}],41:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":23}],42:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":49,"./_wks":82}],43:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":23}],44:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],45:[function(require,module,exports){
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
},{"./_an-object":17}],46:[function(require,module,exports){
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
},{"./_hide":38,"./_object-create":54,"./_property-desc":66,"./_set-to-string-tag":69,"./_wks":82}],47:[function(require,module,exports){
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
},{"./_export":33,"./_has":37,"./_hide":38,"./_iter-create":46,"./_iterators":49,"./_library":51,"./_object-gpo":61,"./_redefine":68,"./_set-to-string-tag":69,"./_wks":82}],48:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],49:[function(require,module,exports){
module.exports = {};
},{}],50:[function(require,module,exports){
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
},{"./_object-keys":63,"./_to-iobject":75}],51:[function(require,module,exports){
module.exports = true;
},{}],52:[function(require,module,exports){
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
},{"./_fails":34,"./_has":37,"./_is-object":44,"./_object-dp":55,"./_uid":79}],53:[function(require,module,exports){
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
},{"./_fails":34,"./_iobject":41,"./_object-gops":60,"./_object-keys":63,"./_object-pie":64,"./_to-object":77}],54:[function(require,module,exports){
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

},{"./_an-object":17,"./_dom-create":30,"./_enum-bug-keys":31,"./_html":39,"./_object-dps":56,"./_shared-key":70}],55:[function(require,module,exports){
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
},{"./_an-object":17,"./_descriptors":29,"./_ie8-dom-define":40,"./_to-primitive":78}],56:[function(require,module,exports){
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
},{"./_an-object":17,"./_descriptors":29,"./_object-dp":55,"./_object-keys":63}],57:[function(require,module,exports){
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
},{"./_descriptors":29,"./_has":37,"./_ie8-dom-define":40,"./_object-pie":64,"./_property-desc":66,"./_to-iobject":75,"./_to-primitive":78}],58:[function(require,module,exports){
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

},{"./_object-gopn":59,"./_to-iobject":75}],59:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":31,"./_object-keys-internal":62}],60:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],61:[function(require,module,exports){
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
},{"./_has":37,"./_shared-key":70,"./_to-object":77}],62:[function(require,module,exports){
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
},{"./_array-includes":18,"./_has":37,"./_shared-key":70,"./_to-iobject":75}],63:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":31,"./_object-keys-internal":62}],64:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],65:[function(require,module,exports){
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
},{"./_core":26,"./_export":33,"./_fails":34}],66:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],67:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":38}],68:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":38}],69:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":37,"./_object-dp":55,"./_wks":82}],70:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":71,"./_uid":79}],71:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":36}],72:[function(require,module,exports){
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
},{"./_defined":28,"./_to-integer":74}],73:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":74}],74:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],75:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":28,"./_iobject":41}],76:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":74}],77:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":28}],78:[function(require,module,exports){
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
},{"./_is-object":44}],79:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],80:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":26,"./_global":36,"./_library":51,"./_object-dp":55,"./_wks-ext":81}],81:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":82}],82:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":36,"./_shared":71,"./_uid":79}],83:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":22,"./_core":26,"./_iterators":49,"./_wks":82}],84:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":17,"./_core":26,"./core.get-iterator-method":83}],85:[function(require,module,exports){
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
},{"./_add-to-unscopables":15,"./_iter-define":47,"./_iter-step":48,"./_iterators":49,"./_to-iobject":75}],86:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":33,"./_object-assign":53}],87:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":63,"./_object-sap":65,"./_to-object":77}],88:[function(require,module,exports){

},{}],89:[function(require,module,exports){
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
},{"./_iter-define":47,"./_string-at":72}],90:[function(require,module,exports){
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
},{"./_an-object":17,"./_descriptors":29,"./_enum-keys":32,"./_export":33,"./_fails":34,"./_global":36,"./_has":37,"./_hide":38,"./_is-array":43,"./_keyof":50,"./_library":51,"./_meta":52,"./_object-create":54,"./_object-dp":55,"./_object-gopd":57,"./_object-gopn":59,"./_object-gopn-ext":58,"./_object-gops":60,"./_object-keys":63,"./_object-pie":64,"./_property-desc":66,"./_redefine":68,"./_set-to-string-tag":69,"./_shared":71,"./_to-iobject":75,"./_to-primitive":78,"./_uid":79,"./_wks":82,"./_wks-define":80,"./_wks-ext":81}],91:[function(require,module,exports){
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
},{"./_array-methods":19,"./_collection":25,"./_collection-weak":24,"./_is-object":44,"./_meta":52,"./_object-assign":53,"./_redefine":68}],92:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":80}],93:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":80}],94:[function(require,module,exports){
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
},{"./_global":36,"./_hide":38,"./_iterators":49,"./_wks":82,"./es6.array.iterator":85}],95:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.DirectionsControlImpl={properties:{mglToken:{type:String,value:""}},createInst:function createInst(options){return new MapboxDirections({accessToken:this.mglToken})},getInstOptions:function getInstOptions(){return{position:this.position}}};PxMapGlBehavior.DirectionsControl=[PxMapGlBehavior.Control,PxMapGlBehavior.DirectionsControlImpl]})();

},{}],96:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.GeocoderControlImpl={properties:{mglToken:{type:String,value:""}},createInst:function createInst(options){return new MapboxGeocoder({accessToken:this.mglToken})},getInstOptions:function getInstOptions(){return{position:this.position}}};PxMapGlBehavior.GeocoderControl=[PxMapGlBehavior.Control,PxMapGlBehavior.GeocoderControlImpl]})();

},{}],97:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.ControlImpl={properties:{position:{type:String,value:"top-right"}},attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,"px-map-gl-root-load","shouldAddInst")},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;PxMapGlBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){this.addInst(parent)}},shouldRemoveInst:function shouldRemoveInst(parent){PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)}},addInst:function addInst(parent){parent.elementInst.addControl(this.elementInst,this.position)},removeInst:function removeInst(parent){parent.elementInst.removeControl(this.elementInst)},canAddInst:function canAddInst(){return true}};PxMapGlBehavior.Control=[PxMapGlBehavior.Element,PxMapGlBehavior.ControlImpl];PxMapGlBehavior.NavControlImpl={createInst:function createInst(options){return new mapboxgl.NavigationControl},getInstOptions:function getInstOptions(){return{position:this.position}}};PxMapGlBehavior.NavControl=[PxMapGlBehavior.Control,PxMapGlBehavior.NavControlImpl];PxMapGlBehavior.FullScreenControlImpl={createInst:function createInst(options){return new mapboxgl.FullscreenControl},getInstOptions:function getInstOptions(){return{position:this.position}}};PxMapGlBehavior.FullScreenControl=[PxMapGlBehavior.Control,PxMapGlBehavior.FullScreenControlImpl];PxMapGlBehavior.GeolocateControlImpl={properties:{highAccuracy:{type:Boolean,default:false},timeout:{type:Number,default:6000},disableTrackUserLoc:{type:Boolean,default:false},disableShowUserLoc:{type:Boolean,default:false}},createInst:function createInst(options){return new mapboxgl.GeolocateControl(options)},getInstOptions:function getInstOptions(){return{position:this.position,positionOptions:{enableHighAccuracy:this.enableHighAccuracy,timeout:this.timeout},trackUserLocation:!this.disableTrackUserLoc,showUserLocation:!this.disableShowUserLoc}}};PxMapGlBehavior.GeolocateControl=[PxMapGlBehavior.Control,PxMapGlBehavior.GeolocateControlImpl];PxMapGlBehavior.ScaleControlImpl={properties:{maxWidth:{type:String,default:"150"},unit:{type:String,default:"metric"}},createInst:function createInst(options){return new mapboxgl.ScaleControl(options)},getInstOptions:function getInstOptions(){return{position:this.position,maxWidth:this.maxWidth,unit:this.unit}}};PxMapGlBehavior.ScaleControl=[PxMapGlBehavior.Control,PxMapGlBehavior.ScaleControlImpl];PxMapGlBehavior.AttributionControlImpl={properties:{compact:{type:Boolean}},createInst:function createInst(options){return new mapboxgl.AttributionControl(options)},getInstOptions:function getInstOptions(){return{position:this.position,compact:this.compact}}};PxMapGlBehavior.AttributionControl=[PxMapGlBehavior.Control,PxMapGlBehavior.AttributionControlImpl]})();

},{}],98:[function(require,module,exports){
"use strict";var _getIterator2=require("babel-runtime/core-js/get-iterator");var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require("babel-runtime/core-js/object/keys");var _keys2=_interopRequireDefault(_keys);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);var _assign=require("babel-runtime/core-js/object/assign");var _assign2=_interopRequireDefault(_assign);var _weakMap=require("babel-runtime/core-js/weak-map");var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},attached:function attached(){this.__elAttached=true},detached:function detached(){this.__elAttached=false},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire("px-map-gl-gl-element-ready-to-add");return true},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire("px-map-gl-element-instance-created")}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();if(this.is!=="px-map-gl"){this.updateInst(lastOptions,nextOptions,this.parentNode)}else{this.updateInst(lastOptions,nextOptions)}this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error("The `createInst` method must be implemented.")},updateInst:function updateInst(){throw new Error("The `updateInst` method must be implemented.")},getInstOptions:function getInstOptions(){throw new Error("The `getInstOptions` method must be implemented.")},addInst:function addInst(){throw new Error("The `bindInst` method must be implemented.")},removeInst:function removeInst(){throw new Error("The `unbindInst` method must be implemented.")},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error("The first parameter of `extendObj` must be an object to be mutated.");for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target,target_layer){if((typeof evts==="undefined"?"undefined":(0,_typeof3.default)(evts))!=="object"||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;var layer=target_layer||undefined;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};if(layer===undefined)el.on(evtReference.name,evtReference.fn);else el.on(evtReference.name,layer,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return"style-scope px-map-gl-gl"}};PxMapGlBehavior.Element=[PxMapGlBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/keys":3,"babel-runtime/core-js/weak-map":6,"babel-runtime/helpers/typeof":7}],99:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.LayerImpl={properties:{id:{type:String},layerType:{type:String},source:{type:String},sourceLayer:{type:String,observer:"shouldUpdateInst"},visibility:{type:String,value:"visible",observer:"shouldUpdateInst"},layout:{type:Object,value:function value(){return{}}},paint:{type:Object,value:function value(){return{}}},minZoomVisible:{type:Number,value:0,observer:"shouldUpdateInst"},maxZoomVisible:{type:Number,value:22,observer:"shouldUpdateInst"},filter:{type:Array,observer:"shouldUpdateInst"}},observers:["shouldUpdateInstComplex(paint.*, layout.*)"],attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,"px-map-gl-root-load","shouldAddInst");this.listen(this.parentNode,"px-map-gl-root-styledata","shouldAddInst")},detached:function detached(){this.shouldRemoveInst()},shouldUpdateInstComplex:function shouldUpdateInstComplex(paint,layout){this.debounce("shouldUpdateInstDebounce",function(){PxMapGlBehavior.ElementImpl.shouldUpdateInst.call(this,parent)},250)},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;PxMapGlBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent&&parent.elementInst.getLayer(this.id)==undefined){this.addInst(parent)}},shouldRemoveInst:function shouldRemoveInst(parent){PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)}},createInst:function createInst(options){var layerInst=options;return layerInst},addInst:function addInst(parent){console.log(this.elementInst);parent.elementInst.addLayer(this.elementInst);this.bindEvents({click:this._broadcastEvent.bind(this),dblclick:this._broadcastEvent.bind(this),mouseenter:this._broadcastEvent.bind(this),mouseleave:this._broadcastEvent.bind(this)},parent.elementInst,this.id)},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},updateInst:function updateInst(lastOptions,nextOptions,parent){for(var lpKey in nextOptions.layout){parent.elementInst.setLayoutProperty(this.id,lpKey,nextOptions.layout[lpKey])}for(var pKey in nextOptions.paint){parent.elementInst.setPaintProperty(this.id,pKey,nextOptions.paint[pKey])}parent.elementInst.setLayerZoomRange(this.id,nextOptions.minzoom,nextOptions.maxzoom);parent.elementInst.setFilter(this.id,nextOptions.filter)},_broadcastEvent:function _broadcastEvent(e){var detail={emitter:this,event:e};var eventName="px-map-gl-layer-"+e.type;console.log(eventName);this.fire(eventName,detail)},_switchPointer:function _switchPointer(e){if(e.type==="mouseenter"){e.target.getCanvas().style.cursor="pointer"}else{e.target.getCanvas().style.cursor=""}},canAddInst:function canAddInst(){return true},getInstOptions:function getInstOptions(){var options={id:this.id,type:this.layerType,source:this.source,minzoom:this.minZoomVisible,maxzoom:this.maxZoomVisible,layout:this.layout,paint:this.paint};options.layout.visibility=this.visibility;if(this.sourceLayer)options["source-layer"]=this.sourceLayer;if(this.filter&&Array.isArray(this.filter))options["filter"]=this.filter;return options}};PxMapGlBehavior.Layer=[PxMapGlBehavior.Element,PxMapGlBehavior.LayerImpl]})();

},{}],100:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.PopupImpl={properties:{disableCloseButton:{type:String,value:false},disableCloseOnClick:{type:String,value:false},anchor:{type:String},showEvent:{type:String,value:'click'},popupData:{type:Object,value:function value(){},readOnly:true}},attached:function attached(){console.log('attached');this.notifyInstReady(this.canAddInst());if(this.showEvent==='click')this.listen(this.parentNode,'px-map-gl-layer-click','shouldAddInst');else if(this.showEvent==='dblclick')this.listen(this.parentNode,'px-map-gl-layer-dblclick','shouldAddInst');else if(this.showEvent==='hover'){this.listen(this.parentNode,'px-map-gl-layer-mouseenter','shouldAddInst');this.listen(this.parentNode,'px-map-gl-layer-mouseleave','removeInst')}else throw new Error('Invalid showEvent provided')},shouldAddInst:function shouldAddInst(evt){if(this.elementInst){this.removeInst()}PxMapGlBehavior.ElementImpl.shouldAddInst.call(this);if(this.elementInst){this.addInst(evt.detail)};},addInst:function addInst(eventDetail){var popupData={lngLat:eventDetail.event.lngLat,type:eventDetail.event.type,features:eventDetail.event.features||[]};if(popupData.features[0].properties){popupData.activeFeatureProperties=this._toArray(popupData.features[0].properties)}this._setPopupData(popupData);var node=Polymer.dom(this.root).querySelector('#popup-template');this.elementInst.setLngLat(eventDetail.event.lngLat);this.elementInst.setDOMContent(node);this.elementInst.addTo(eventDetail.event.target)},_toArray:function _toArray(obj){return(0,_keys2.default)(obj).map(function(key){return{name:key,value:obj[key]}})},removeInst:function removeInst(){this.shouldRemoveInst();this.elementInst.remove()},createInst:function createInst(options){var popup=new mapboxgl.Popup(options);return popup},getInstOptions:function getInstOptions(){var options={closeButton:!this.disableCloseButton,closeOnClick:!this.disableCloseOnClick};if(this.anchor)options.anchor=this.anchor;return options},canAddInst:function canAddInst(){return true}};PxMapGlBehavior.Popup=[PxMapGlBehavior.Element,PxMapGlBehavior.PopupImpl];PxMapGlBehavior.InfoPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},description:{type:String,observer:'shouldUpdateInst'},imgSrc:{type:String,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new mapboxgl.Popup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.description!==nextOptions.description){updates.description=nextOptions.description}if(lastOptions.imgSrc!==nextOptions.imgSrc){updates.imgSrc=nextOptions.imgSrc}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}}};PxMapGlBehavior.InfoPopup=[PxMapGlBehavior.Popup,PxMapGlBehavior.InfoPopupImpl]})();

},{"babel-runtime/core-js/object/keys":3}],101:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.MglRootImpl={properties:{style:{type:String,value:"mapbox://styles/mapbox/dark-v9",notify:true,observer:"shouldUpdateInst"},mglToken:{type:String,value:""},lat:{type:Number,value:37.7672375,notify:true,observer:"shouldUpdateInst"},lng:{type:Number,value:-121.9584131,notify:true,observer:"shouldUpdateInst"},zoom:{type:Number,value:10,notify:true,observer:"shouldUpdateInst"},bearing:{type:Number,value:0,notify:true,observer:"shouldUpdateInst"},pitch:{type:Number,value:0,notify:true,observer:"shouldUpdateInst"},maxZoom:{type:Number,observer:"shouldUpdateInst"},minZoom:{type:Number,observer:"shouldUpdateInst"},maxBounds:{type:Array,value:function value(){return null},observer:"shouldUpdateInst"},disableInteraction:{type:Boolean,value:false,observer:"shouldUpdateInst"},disableDragging:{type:Boolean,value:false,observer:"shouldUpdateInst"},disableScrollZoom:{type:Boolean,value:false,observer:"shouldUpdateInst"},disableTouchZoom:{type:Boolean,value:false,observer:"shouldUpdateInst"},disableAttributionControl:{type:Boolean,value:false},disableMapHash:{type:Boolean,value:false},flexToSize:{type:Boolean,value:false,reflectToAttribute:true}},attached:function attached(){this.listen(this,"px-map-gl-element-ready-to-add","shouldAddInst");if(this.canAddInst()){this.fire("px-map-gl-element-ready-to-add")}},detached:function detached(){this.unlisten(this,"px-map-gl-element-ready-to-add","shouldAddInst");this.shouldRemoveInst();this.removeInst()},shouldAddInst:function shouldAddInst(evt){if(Polymer.dom(evt).rootTarget!==this)return;PxMapGlBehavior.ElementImpl.shouldAddInst.call(this);this.addInst()},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng)},createInst:function createInst(options){mapboxgl.accessToken=this.mglToken;options.container=Polymer.dom(this.root).querySelector(options.container);var mapInst=new mapboxgl.Map(options);if(this.isShadyScoped()){mapInst.__addShadyScope=this.scopeSubtree.bind(this)}return mapInst},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);var zoomStartFn=this._handleZoomStart.bind(this);var zoomEndFn=this._handleZoomEnd.bind(this);var mapLoadedFn=this._handleMapLoaded.bind(this);this.bindEvents({moveend:mapMoveFn,zoomstart:zoomStartFn,zoomend:zoomEndFn,load:mapLoadedFn,styledata:mapLoadedFn})},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}},getInstOptions:function getInstOptions(){var options={};options.container="#map";options.center=[this.lng,this.lat];options.style=this.style;options.zoom=this.zoom;options.bearing=this.bearing;options.pitch=this.pitch;options.minZoom=this.minZoom||0;options.maxZoom=this.maxZoom||18;options.maxBounds=this.maxBounds||undefined;options.attributionControl=!this.disableAttributionControl;options.interactive=!this.disableInteraction;options.dragPan=!this.disableDragging;options.scrollZoom=!this.disableScrollZoom;options.touchZoomRotate=!this.disableTouchZoom;options.hash=!this.disableMapHash;return options},updateInst:function updateInst(lastOptions,nextOptions){console.log("Update Inst");console.log("lastOptions");console.log(lastOptions);console.log("nextOptions");console.log(nextOptions);if(this.latLngIsValid(nextOptions.center[0],nextOptions.center[1])&&(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom||lastOptions.bearing!==nextOptions.bearing||lastOptions.pitch!==nextOptions.pitch)){this._updateMapView()}if(nextOptions.style!=""&&lastOptions.style!==nextOptions.style){this.elementInst.setStyle(nextOptions.style)}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.elementInst.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.elementInst.setMinZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxBounds(nextOptions.maxBounds)}if(!lastOptions.interactive&&nextOptions.interactive){this.elementInst.boxZoom.enable();this.elementInst.dragPan.enable();this.elementInst.dragRotate.enable();this.elementInst.scrollZoom.enable();this.elementInst.keyboard.enable();this.elementInst.doubleClickZoom.enable();this.elementInst.touchZoomRotate.enable()}if(lastOptions.interactive&&!nextOptions.interactive){this.elementInst.boxZoom.disable();this.elementInst.dragPan.disable();this.elementInst.dragRotate.disable();this.elementInst.scrollZoom.disable();this.elementInst.keyboard.disable();this.elementInst.doubleClickZoom.disable();this.elementInst.touchZoomRotate.disable()}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragPan.enable();this.elementInst.dragRotate.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragPan.disable();this.elementInst.dragRotate.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoomRotate.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoomRotate.disable()}},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce("update-map-view",function(){var _elementInst$getCente=this.elementInst.getCenter(),lng=_elementInst$getCente.lng,lat=_elementInst$getCente.lat;var zoom=this.elementInst.getZoom();var bearing=this.elementInst.getBearing();var pitch=this.elementInst.getPitch();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom||this.bearing!==bearing||this.pitch!==pitch){this.elementInst.flyTo({center:[this.lng,this.lat],zoom:this.zoom,pitch:this.pitch,bearing:this.bearing,speed:1.2,curve:1.42})}})},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==""},latLngIsValid:function latLngIsValid(lat,lng){var isValid=typeof lat!=="undefined"&&this._canBeNum(lat)&&typeof lng!=="undefined"&&this._canBeNum(lng);if(isValid)return true;console.log("px-map-gl CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for "+this.is+". You must pass a valid number.");return false},_handleMapLoaded:function _handleMapLoaded(e){if(this.canAddInst()){this.debounce("fire-load-events",function(){var ev_name="px-map-gl-root-"+e.type;console.log("fire "+ev_name);this.fire(ev_name,this)})}},_handleMapMove:function _handleMapMove(){if(this.__isZooming){this.__onZoomEnd=this._handleMapMove.bind(this);return}this.debounce("handle-map-move",function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();var pitch=this.elementInst.getPitch();var bearing=this.elementInst.getBearing();if(this.lat!==latLng.lat||this.lng!==latLng.lng){this.set("lat",latLng.lat);this.set("lng",latLng.lng)}if(this.zoom!==zoom){this.set("zoom",zoom)}if(this.bearing!==bearing){this.set("bearing",bearing)}if(this.pitch!==pitch){this.set("pitch",pitch)}this.fire("px-map-gl-moved",{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})},1000)},_handleZoomStart:function _handleZoomStart(){this.__isZooming=true},_handleZoomEnd:function _handleZoomEnd(){this.__isZooming=false;if(typeof this.__onZoomEnd==="function"){this.__onZoomEnd();this.__onZoomEnd=null}}};PxMapGlBehavior.MglRoot=[PxMapGlBehavior.Element,PxMapGlBehavior.MglRootImpl]})();

},{}],102:[function(require,module,exports){
"use strict";var _keys=require("babel-runtime/core-js/object/keys");var _keys2=_interopRequireDefault(_keys);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.GeoJSONSourceImpl={properties:{data:{type:Object,observer:"shouldUpdateInst",notify:true}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==="object"&&(0,_keys2.default)(this.data).length},addInst:function addInst(parent){PxMapGlBehavior.SourceImpl.addInst.call(this,parent)},createInst:function createInst(options){return{data:options.data,id:options.id,type:options.type}},updateInst:function updateInst(lastOptions,nextOptions){console.log(this.elementInst);var options=this.getInstOptions();this.elementInst.setData(options.data)},getInstOptions:function getInstOptions(){var srcData={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{name:"null island"}}]};if(this.data&&this.data!=={})srcData=this.data;var options=PxMapGlBehavior.SourceImpl.getInstOptions.call(this);options.data=srcData;options.type="geojson";return options}};PxMapGlBehavior.GeoJSONSource=[PxMapGlBehavior.Source,PxMapGlBehavior.GeoJSONSourceImpl]})();

},{"babel-runtime/core-js/object/keys":3,"babel-runtime/helpers/typeof":7}],103:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.VectorSourceImpl={properties:{url:{type:String},tiles:{type:Array},id:{type:String}},addInst:function addInst(parent){PxMapGlBehavior.SourceImpl.addInst.call(this,parent)},createInst:function createInst(options){return{url:options.url,tiles:options.tiles,id:options.id,type:options.type}},updateInst:function updateInst(lastOptions,nextOptions){console.log(this.elementInst);var options=this.getInstOptions();this.elementInst.setData(options.data)},getInstOptions:function getInstOptions(){var options=PxMapGlBehavior.SourceImpl.getInstOptions.call(this);options.url=this.url;options.tiles=this.tiles;options.type="vector";return options}};PxMapGlBehavior.VectorSource=[PxMapGlBehavior.Source,PxMapGlBehavior.VectorSourceImpl]})();

},{}],104:[function(require,module,exports){
"use strict";(function(){"use strict";window.PxMapGlBehavior=window.PxMapGlBehavior||{};PxMapGlBehavior.SourceImpl={properties:{id:{type:String}},attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,"px-map-gl-root-load","shouldAddInst");this.listen(this.parentNode,"px-map-gl-root-styledata","shouldAddInst")},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;PxMapGlBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent&&parent.elementInst.getSource(this.id)==undefined){this.addInst(parent)}},shouldRemoveInst:function shouldRemoveInst(parent){PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)}},getInstOptions:function getInstOptions(){return{id:this.id}},addInst:function addInst(parent){var sourceInfo={type:this.elementInst.type};if(this.elementInst.data)sourceInfo.data=this.elementInst.data;if(this.elementInst.tiles)sourceInfo.tiles=this.elementInst.tiles;if(this.elementInst.url)sourceInfo.url=this.elementInst.url;parent.elementInst.addSource(this.elementInst.id,sourceInfo);this.elementInst=parent.elementInst.getSource(this.elementInst.id)},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},canAddInst:function canAddInst(){return true}};PxMapGlBehavior.Source=[PxMapGlBehavior.Element,PxMapGlBehavior.SourceImpl]})();

},{}]},{},[98,99,95,96,97,100,101,102,103,104]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtZ2wtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjh9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCI6OX1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiOjEwfV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIjoxMX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCI6MTJ9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi93ZWFrLW1hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vd2Vhay1tYXBcIjoxM31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG59LHtcIi4uL2NvcmUtanMvc3ltYm9sXCI6NCxcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI6NX1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xufSx7XCIuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yXCI6ODQsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo4OSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjk0fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MjYsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduXCI6ODZ9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjoyNixcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCI6ODd9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjI2LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjg4LFwiLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sXCI6OTAsXCIuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIjo5MixcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlXCI6OTN9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbn0se1wiLi4vLi4vbW9kdWxlcy9fd2tzLWV4dFwiOjgxLFwiLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6ODksXCIuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjo5NH1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG59LHtcIi4uL21vZHVsZXMvX2NvcmVcIjoyNixcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjo4OCxcIi4uL21vZHVsZXMvZXM2LndlYWstbWFwXCI6OTEsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjo5NH1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xufSx7fV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbn0se31dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7XCIuL19pcy1vYmplY3RcIjo0NH1dLDE4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbn0se1wiLi9fdG8taW5kZXhcIjo3MyxcIi4vX3RvLWlvYmplY3RcIjo3NSxcIi4vX3RvLWxlbmd0aFwiOjc2fV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xufSx7XCIuL19hcnJheS1zcGVjaWVzLWNyZWF0ZVwiOjIxLFwiLi9fY3R4XCI6MjcsXCIuL19pb2JqZWN0XCI6NDEsXCIuL190by1sZW5ndGhcIjo3NixcIi4vX3RvLW9iamVjdFwiOjc3fV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbn0se1wiLi9faXMtYXJyYXlcIjo0MyxcIi4vX2lzLW9iamVjdFwiOjQ0LFwiLi9fd2tzXCI6ODJ9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbn0se1wiLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvclwiOjIwfV0sMjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbn0se1wiLi9fY29mXCI6MjMsXCIuL193a3NcIjo4Mn1dLDIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG59LHt9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGdldFdlYWsgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWtcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6MTYsXCIuL19hbi1vYmplY3RcIjoxNyxcIi4vX2FycmF5LW1ldGhvZHNcIjoxOSxcIi4vX2Zvci1vZlwiOjM1LFwiLi9faGFzXCI6MzcsXCIuL19pcy1vYmplY3RcIjo0NCxcIi4vX21ldGFcIjo1MixcIi4vX3JlZGVmaW5lLWFsbFwiOjY3fV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6MTYsXCIuL19hcnJheS1tZXRob2RzXCI6MTksXCIuL19kZXNjcmlwdG9yc1wiOjI5LFwiLi9fZXhwb3J0XCI6MzMsXCIuL19mYWlsc1wiOjM0LFwiLi9fZm9yLW9mXCI6MzUsXCIuL19nbG9iYWxcIjozNixcIi4vX2hpZGVcIjozOCxcIi4vX2lzLW9iamVjdFwiOjQ0LFwiLi9fbWV0YVwiOjUyLFwiLi9fb2JqZWN0LWRwXCI6NTUsXCIuL19yZWRlZmluZS1hbGxcIjo2NyxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6Njl9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xufSx7XCIuL19hLWZ1bmN0aW9uXCI6MTR9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcbn0se1wiLi9fZmFpbHNcIjozNH1dLDMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6MzYsXCIuL19pcy1vYmplY3RcIjo0NH1dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xufSx7fV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIi4vX29iamVjdC1nb3BzXCI6NjAsXCIuL19vYmplY3Qta2V5c1wiOjYzLFwiLi9fb2JqZWN0LXBpZVwiOjY0fV0sMzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbn0se1wiLi9fY29yZVwiOjI2LFwiLi9fY3R4XCI6MjcsXCIuL19nbG9iYWxcIjozNixcIi4vX2hpZGVcIjozOH1dLDM0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xufSx7fV0sMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG59LHtcIi4vX2FuLW9iamVjdFwiOjE3LFwiLi9fY3R4XCI6MjcsXCIuL19pcy1hcnJheS1pdGVyXCI6NDIsXCIuL19pdGVyLWNhbGxcIjo0NSxcIi4vX3RvLWxlbmd0aFwiOjc2LFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjo4M31dLDM2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xufSx7fV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjI5LFwiLi9fb2JqZWN0LWRwXCI6NTUsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NjZ9XSwzOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn0se1wiLi9fZ2xvYmFsXCI6MzZ9XSw0MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjI5LFwiLi9fZG9tLWNyZWF0ZVwiOjMwLFwiLi9fZmFpbHNcIjozNH1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xufSx7XCIuL19jb2ZcIjoyM31dLDQyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG59LHtcIi4vX2l0ZXJhdG9yc1wiOjQ5LFwiLi9fd2tzXCI6ODJ9XSw0MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xufSx7XCIuL19jb2ZcIjoyM31dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbn0se31dLDQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoxN31dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xufSx7XCIuL19oaWRlXCI6MzgsXCIuL19vYmplY3QtY3JlYXRlXCI6NTQsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NjYsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjY5LFwiLi9fd2tzXCI6ODJ9XSw0NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG59LHtcIi4vX2V4cG9ydFwiOjMzLFwiLi9faGFzXCI6MzcsXCIuL19oaWRlXCI6MzgsXCIuL19pdGVyLWNyZWF0ZVwiOjQ2LFwiLi9faXRlcmF0b3JzXCI6NDksXCIuL19saWJyYXJ5XCI6NTEsXCIuL19vYmplY3QtZ3BvXCI6NjEsXCIuL19yZWRlZmluZVwiOjY4LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo2OSxcIi4vX3drc1wiOjgyfV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcbn0se31dLDQ5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge307XG59LHt9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG59LHtcIi4vX29iamVjdC1rZXlzXCI6NjMsXCIuL190by1pb2JqZWN0XCI6NzV9XSw1MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHRydWU7XG59LHt9XSw1MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbn0se1wiLi9fZmFpbHNcIjozNCxcIi4vX2hhc1wiOjM3LFwiLi9faXMtb2JqZWN0XCI6NDQsXCIuL19vYmplY3QtZHBcIjo1NSxcIi4vX3VpZFwiOjc5fV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbn0se1wiLi9fZmFpbHNcIjozNCxcIi4vX2lvYmplY3RcIjo0MSxcIi4vX29iamVjdC1nb3BzXCI6NjAsXCIuL19vYmplY3Qta2V5c1wiOjYzLFwiLi9fb2JqZWN0LXBpZVwiOjY0LFwiLi9fdG8tb2JqZWN0XCI6Nzd9XSw1NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbn0se1wiLi9fYW4tb2JqZWN0XCI6MTcsXCIuL19kb20tY3JlYXRlXCI6MzAsXCIuL19lbnVtLWJ1Zy1rZXlzXCI6MzEsXCIuL19odG1sXCI6MzksXCIuL19vYmplY3QtZHBzXCI6NTYsXCIuL19zaGFyZWQta2V5XCI6NzB9XSw1NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoxNyxcIi4vX2Rlc2NyaXB0b3JzXCI6MjksXCIuL19pZTgtZG9tLWRlZmluZVwiOjQwLFwiLi9fdG8tcHJpbWl0aXZlXCI6Nzh9XSw1NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoxNyxcIi4vX2Rlc2NyaXB0b3JzXCI6MjksXCIuL19vYmplY3QtZHBcIjo1NSxcIi4vX29iamVjdC1rZXlzXCI6NjN9XSw1NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MjksXCIuL19oYXNcIjozNyxcIi4vX2llOC1kb20tZGVmaW5lXCI6NDAsXCIuL19vYmplY3QtcGllXCI6NjQsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NjYsXCIuL190by1pb2JqZWN0XCI6NzUsXCIuL190by1wcmltaXRpdmVcIjo3OH1dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cbn0se1wiLi9fb2JqZWN0LWdvcG5cIjo1OSxcIi4vX3RvLWlvYmplY3RcIjo3NX1dLDU5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjozMSxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6NjJ9XSw2MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xufSx7fV0sNjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbn0se1wiLi9faGFzXCI6MzcsXCIuL19zaGFyZWQta2V5XCI6NzAsXCIuL190by1vYmplY3RcIjo3N31dLDYyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiLi9fYXJyYXktaW5jbHVkZXNcIjoxOCxcIi4vX2hhc1wiOjM3LFwiLi9fc2hhcmVkLWtleVwiOjcwLFwiLi9fdG8taW9iamVjdFwiOjc1fV0sNjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjozMSxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6NjJ9XSw2NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbn0se31dLDY1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG59LHtcIi4vX2NvcmVcIjoyNixcIi4vX2V4cG9ydFwiOjMzLFwiLi9fZmFpbHNcIjozNH1dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcbn0se31dLDY3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xufSx7XCIuL19oaWRlXCI6Mzh9XSw2ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbn0se1wiLi9faGlkZVwiOjM4fV0sNjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xufSx7XCIuL19oYXNcIjozNyxcIi4vX29iamVjdC1kcFwiOjU1LFwiLi9fd2tzXCI6ODJ9XSw3MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbn0se1wiLi9fc2hhcmVkXCI6NzEsXCIuL191aWRcIjo3OX1dLDcxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG59LHtcIi4vX2dsb2JhbFwiOjM2fV0sNzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG59LHtcIi4vX2RlZmluZWRcIjoyOCxcIi4vX3RvLWludGVnZXJcIjo3NH1dLDczOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG59LHtcIi4vX3RvLWludGVnZXJcIjo3NH1dLDc0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbn0se31dLDc1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIi4vX2RlZmluZWRcIjoyOCxcIi4vX2lvYmplY3RcIjo0MX1dLDc2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xufSx7XCIuL190by1pbnRlZ2VyXCI6NzR9XSw3NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIi4vX2RlZmluZWRcIjoyOH1dLDc4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xufSx7XCIuL19pcy1vYmplY3RcIjo0NH1dLDc5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xufSx7fV0sODA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG59LHtcIi4vX2NvcmVcIjoyNixcIi4vX2dsb2JhbFwiOjM2LFwiLi9fbGlicmFyeVwiOjUxLFwiLi9fb2JqZWN0LWRwXCI6NTUsXCIuL193a3MtZXh0XCI6ODF9XSw4MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbn0se1wiLi9fd2tzXCI6ODJ9XSw4MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbn0se1wiLi9fZ2xvYmFsXCI6MzYsXCIuL19zaGFyZWRcIjo3MSxcIi4vX3VpZFwiOjc5fV0sODM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG59LHtcIi4vX2NsYXNzb2ZcIjoyMixcIi4vX2NvcmVcIjoyNixcIi4vX2l0ZXJhdG9yc1wiOjQ5LFwiLi9fd2tzXCI6ODJ9XSw4NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjE3LFwiLi9fY29yZVwiOjI2LFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjo4M31dLDg1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG59LHtcIi4vX2FkZC10by11bnNjb3BhYmxlc1wiOjE1LFwiLi9faXRlci1kZWZpbmVcIjo0NyxcIi4vX2l0ZXItc3RlcFwiOjQ4LFwiLi9faXRlcmF0b3JzXCI6NDksXCIuL190by1pb2JqZWN0XCI6NzV9XSw4NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcbn0se1wiLi9fZXhwb3J0XCI6MzMsXCIuL19vYmplY3QtYXNzaWduXCI6NTN9XSw4NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiLi9fb2JqZWN0LWtleXNcIjo2MyxcIi4vX29iamVjdC1zYXBcIjo2NSxcIi4vX3RvLW9iamVjdFwiOjc3fV0sODg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XSw4OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xufSx7XCIuL19pdGVyLWRlZmluZVwiOjQ3LFwiLi9fc3RyaW5nLWF0XCI6NzJ9XSw5MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MTcsXCIuL19kZXNjcmlwdG9yc1wiOjI5LFwiLi9fZW51bS1rZXlzXCI6MzIsXCIuL19leHBvcnRcIjozMyxcIi4vX2ZhaWxzXCI6MzQsXCIuL19nbG9iYWxcIjozNixcIi4vX2hhc1wiOjM3LFwiLi9faGlkZVwiOjM4LFwiLi9faXMtYXJyYXlcIjo0MyxcIi4vX2tleW9mXCI6NTAsXCIuL19saWJyYXJ5XCI6NTEsXCIuL19tZXRhXCI6NTIsXCIuL19vYmplY3QtY3JlYXRlXCI6NTQsXCIuL19vYmplY3QtZHBcIjo1NSxcIi4vX29iamVjdC1nb3BkXCI6NTcsXCIuL19vYmplY3QtZ29wblwiOjU5LFwiLi9fb2JqZWN0LWdvcG4tZXh0XCI6NTgsXCIuL19vYmplY3QtZ29wc1wiOjYwLFwiLi9fb2JqZWN0LWtleXNcIjo2MyxcIi4vX29iamVjdC1waWVcIjo2NCxcIi4vX3Byb3BlcnR5LWRlc2NcIjo2NixcIi4vX3JlZGVmaW5lXCI6NjgsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjY5LFwiLi9fc2hhcmVkXCI6NzEsXCIuL190by1pb2JqZWN0XCI6NzUsXCIuL190by1wcmltaXRpdmVcIjo3OCxcIi4vX3VpZFwiOjc5LFwiLi9fd2tzXCI6ODIsXCIuL193a3MtZGVmaW5lXCI6ODAsXCIuL193a3MtZXh0XCI6ODF9XSw5MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZWFjaCAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgcmVkZWZpbmUgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIG1ldGEgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGFzc2lnbiAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKVxuICAsIHdlYWsgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBnZXRXZWFrICAgICAgPSBtZXRhLmdldFdlYWtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlXG4gICwgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZVxuICAsIHRtcCAgICAgICAgICA9IHt9XG4gICwgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdXZWFrTWFwJywgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlcik7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcbiAgICAgICAgaWYoIXRoaXMuX2YpdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cbn0se1wiLi9fYXJyYXktbWV0aG9kc1wiOjE5LFwiLi9fY29sbGVjdGlvblwiOjI1LFwiLi9fY29sbGVjdGlvbi13ZWFrXCI6MjQsXCIuL19pcy1vYmplY3RcIjo0NCxcIi4vX21ldGFcIjo1MixcIi4vX29iamVjdC1hc3NpZ25cIjo1MyxcIi4vX3JlZGVmaW5lXCI6Njh9XSw5MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbn0se1wiLi9fd2tzLWRlZmluZVwiOjgwfV0sOTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG59LHtcIi4vX3drcy1kZWZpbmVcIjo4MH1dLDk0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbn0se1wiLi9fZ2xvYmFsXCI6MzYsXCIuL19oaWRlXCI6MzgsXCIuL19pdGVyYXRvcnNcIjo0OSxcIi4vX3drc1wiOjgyLFwiLi9lczYuYXJyYXkuaXRlcmF0b3JcIjo4NX1dLDk1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLkRpcmVjdGlvbnNDb250cm9sSW1wbD17cHJvcGVydGllczp7bWdsVG9rZW46e3R5cGU6U3RyaW5nLHZhbHVlOlwiXCJ9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBNYXBib3hEaXJlY3Rpb25zKHthY2Nlc3NUb2tlbjp0aGlzLm1nbFRva2VufSl9LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3Bvc2l0aW9uOnRoaXMucG9zaXRpb259fX07UHhNYXBHbEJlaGF2aW9yLkRpcmVjdGlvbnNDb250cm9sPVtQeE1hcEdsQmVoYXZpb3IuQ29udHJvbCxQeE1hcEdsQmVoYXZpb3IuRGlyZWN0aW9uc0NvbnRyb2xJbXBsXX0pKCk7XG5cbn0se31dLDk2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLkdlb2NvZGVyQ29udHJvbEltcGw9e3Byb3BlcnRpZXM6e21nbFRva2VuOnt0eXBlOlN0cmluZyx2YWx1ZTpcIlwifX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgTWFwYm94R2VvY29kZXIoe2FjY2Vzc1Rva2VuOnRoaXMubWdsVG9rZW59KX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57cG9zaXRpb246dGhpcy5wb3NpdGlvbn19fTtQeE1hcEdsQmVoYXZpb3IuR2VvY29kZXJDb250cm9sPVtQeE1hcEdsQmVoYXZpb3IuQ29udHJvbCxQeE1hcEdsQmVoYXZpb3IuR2VvY29kZXJDb250cm9sSW1wbF19KSgpO1xuXG59LHt9XSw5NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5Db250cm9sSW1wbD17cHJvcGVydGllczp7cG9zaXRpb246e3R5cGU6U3RyaW5nLHZhbHVlOlwidG9wLXJpZ2h0XCJ9fSxhdHRhY2hlZDpmdW5jdGlvbiBhdHRhY2hlZCgpe3RoaXMubm90aWZ5SW5zdFJlYWR5KHRoaXMuY2FuQWRkSW5zdCgpKTt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsXCJweC1tYXAtZ2wtcm9vdC1sb2FkXCIsXCJzaG91bGRBZGRJbnN0XCIpfSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoZXZ0KXt2YXIgcGFyZW50PWV2dC5kZXRhaWw7UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCYmcGFyZW50KXt0aGlzLmFkZEluc3QocGFyZW50KX19LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRSZW1vdmVJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3Qpe3RoaXMucmVtb3ZlSW5zdChwYXJlbnQ/cGFyZW50OnVuZGVmaW5lZCl9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtwYXJlbnQuZWxlbWVudEluc3QuYWRkQ29udHJvbCh0aGlzLmVsZW1lbnRJbnN0LHRoaXMucG9zaXRpb24pfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXtwYXJlbnQuZWxlbWVudEluc3QucmVtb3ZlQ29udHJvbCh0aGlzLmVsZW1lbnRJbnN0KX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRydWV9fTtQeE1hcEdsQmVoYXZpb3IuQ29udHJvbD1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLkNvbnRyb2xJbXBsXTtQeE1hcEdsQmVoYXZpb3IuTmF2Q29udHJvbEltcGw9e2NyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLnBvc2l0aW9ufX19O1B4TWFwR2xCZWhhdmlvci5OYXZDb250cm9sPVtQeE1hcEdsQmVoYXZpb3IuQ29udHJvbCxQeE1hcEdsQmVoYXZpb3IuTmF2Q29udHJvbEltcGxdO1B4TWFwR2xCZWhhdmlvci5GdWxsU2NyZWVuQ29udHJvbEltcGw9e2NyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IG1hcGJveGdsLkZ1bGxzY3JlZW5Db250cm9sfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLnBvc2l0aW9ufX19O1B4TWFwR2xCZWhhdmlvci5GdWxsU2NyZWVuQ29udHJvbD1bUHhNYXBHbEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBHbEJlaGF2aW9yLkZ1bGxTY3JlZW5Db250cm9sSW1wbF07UHhNYXBHbEJlaGF2aW9yLkdlb2xvY2F0ZUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntoaWdoQWNjdXJhY3k6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OmZhbHNlfSx0aW1lb3V0Ont0eXBlOk51bWJlcixkZWZhdWx0OjYwMDB9LGRpc2FibGVUcmFja1VzZXJMb2M6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OmZhbHNlfSxkaXNhYmxlU2hvd1VzZXJMb2M6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OmZhbHNlfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgbWFwYm94Z2wuR2VvbG9jYXRlQ29udHJvbChvcHRpb25zKX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57cG9zaXRpb246dGhpcy5wb3NpdGlvbixwb3NpdGlvbk9wdGlvbnM6e2VuYWJsZUhpZ2hBY2N1cmFjeTp0aGlzLmVuYWJsZUhpZ2hBY2N1cmFjeSx0aW1lb3V0OnRoaXMudGltZW91dH0sdHJhY2tVc2VyTG9jYXRpb246IXRoaXMuZGlzYWJsZVRyYWNrVXNlckxvYyxzaG93VXNlckxvY2F0aW9uOiF0aGlzLmRpc2FibGVTaG93VXNlckxvY319fTtQeE1hcEdsQmVoYXZpb3IuR2VvbG9jYXRlQ29udHJvbD1bUHhNYXBHbEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBHbEJlaGF2aW9yLkdlb2xvY2F0ZUNvbnRyb2xJbXBsXTtQeE1hcEdsQmVoYXZpb3IuU2NhbGVDb250cm9sSW1wbD17cHJvcGVydGllczp7bWF4V2lkdGg6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCIxNTBcIn0sdW5pdDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIm1ldHJpY1wifX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgbWFwYm94Z2wuU2NhbGVDb250cm9sKG9wdGlvbnMpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLnBvc2l0aW9uLG1heFdpZHRoOnRoaXMubWF4V2lkdGgsdW5pdDp0aGlzLnVuaXR9fX07UHhNYXBHbEJlaGF2aW9yLlNjYWxlQ29udHJvbD1bUHhNYXBHbEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBHbEJlaGF2aW9yLlNjYWxlQ29udHJvbEltcGxdO1B4TWFwR2xCZWhhdmlvci5BdHRyaWJ1dGlvbkNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntjb21wYWN0Ont0eXBlOkJvb2xlYW59fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBtYXBib3hnbC5BdHRyaWJ1dGlvbkNvbnRyb2wob3B0aW9ucyl9LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3Bvc2l0aW9uOnRoaXMucG9zaXRpb24sY29tcGFjdDp0aGlzLmNvbXBhY3R9fX07UHhNYXBHbEJlaGF2aW9yLkF0dHJpYnV0aW9uQ29udHJvbD1bUHhNYXBHbEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBHbEJlaGF2aW9yLkF0dHJpYnV0aW9uQ29udHJvbEltcGxdfSkoKTtcblxufSx7fV0sOTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7dmFyIF9nZXRJdGVyYXRvcjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTt2YXIgX2tleXM9cmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7dmFyIF9hc3NpZ249cmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO3ZhciBfYXNzaWduMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO3ZhciBfd2Vha01hcD1yZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwXCIpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsPXtiZWZvcmVSZWdpc3RlcjpmdW5jdGlvbiBiZWZvcmVSZWdpc3Rlcigpe3RoaXMuZWxlbWVudEluc3Q9bnVsbH0sYXR0YWNoZWQ6ZnVuY3Rpb24gYXR0YWNoZWQoKXt0aGlzLl9fZWxBdHRhY2hlZD10cnVlfSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuX19lbEF0dGFjaGVkPWZhbHNlfSxub3RpZnlJbnN0UmVhZHk6ZnVuY3Rpb24gbm90aWZ5SW5zdFJlYWR5KCl7dmFyIGlzUmVhZHk9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnRydWU7aWYoIWlzUmVhZHkpcmV0dXJuIGZhbHNlO3RoaXMuZmlyZShcInB4LW1hcC1nbC1nbC1lbGVtZW50LXJlYWR5LXRvLWFkZFwiKTtyZXR1cm4gdHJ1ZX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KCl7aWYoIXRoaXMuZWxlbWVudEluc3Qpe3ZhciBvcHRpb25zPXRoaXMuX19pbml0aWFsT3B0aW9ucz10aGlzLmdldEluc3RPcHRpb25zKCk7dGhpcy5lbGVtZW50SW5zdD10aGlzLmNyZWF0ZUluc3Qob3B0aW9ucyk7dGhpcy5maXJlKFwicHgtbWFwLWdsLWVsZW1lbnQtaW5zdGFuY2UtY3JlYXRlZFwiKX10aGlzLl9faW5zdEV2ZW50cz10aGlzLl9faW5zdEV2ZW50c3x8W107dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHR9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdCgpe3RoaXMudW5iaW5kQWxsRXZlbnRzKHRoaXMuX19pbnN0RXZlbnRzLHRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXApO3RoaXMuX19pbnN0RXZlbnRzPW51bGw7dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD1udWxsfSxzaG91bGRVcGRhdGVJbnN0OmZ1bmN0aW9uIHNob3VsZFVwZGF0ZUluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCYmdGhpcy5fX2VsQXR0YWNoZWQmJnRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3ZhciBsYXN0T3B0aW9ucz10aGlzLl9fbGFzdE9wdGlvbnN8fHRoaXMuX19pbml0aWFsT3B0aW9uczt2YXIgbmV4dE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO2lmKHRoaXMuaXMhPT1cInB4LW1hcC1nbFwiKXt0aGlzLnVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMsdGhpcy5wYXJlbnROb2RlKX1lbHNle3RoaXMudXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl9dGhpcy5fX2xhc3RPcHRpb25zPW5leHRPcHRpb25zfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYGNyZWF0ZUluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLlwiKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KCl7dGhyb3cgbmV3IEVycm9yKFwiVGhlIGB1cGRhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC5cIil9LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhlIGBnZXRJbnN0T3B0aW9uc2AgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuXCIpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYGJpbmRJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC5cIil9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdCgpe3Rocm93IG5ldyBFcnJvcihcIlRoZSBgdW5iaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuXCIpfSxleHRlbmRPYmo6ZnVuY3Rpb24gZXh0ZW5kT2JqKG9iail7aWYoIW9ianx8IShvYmogaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBwYXJhbWV0ZXIgb2YgYGV4dGVuZE9iamAgbXVzdCBiZSBhbiBvYmplY3QgdG8gYmUgbXV0YXRlZC5cIik7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscHJvcGVydGllcz1BcnJheShfbGVuPjE/X2xlbi0xOjApLF9rZXk9MTtfa2V5PF9sZW47X2tleSsrKXtwcm9wZXJ0aWVzW19rZXktMV09YXJndW1lbnRzW19rZXldfWlmKHByb3BlcnRpZXMubGVuZ3RoKXtfYXNzaWduMi5kZWZhdWx0LmFwcGx5KE9iamVjdCxbb2JqXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiBvYmp9LGFkZFByb3BlcnRpZXM6ZnVuY3Rpb24gYWRkUHJvcGVydGllcygpe3RoaXMucHJvcGVydGllcz10aGlzLnByb3BlcnRpZXN8fHt9O2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4yKSxfa2V5Mj0wO19rZXkyPF9sZW4yO19rZXkyKyspe3Byb3BlcnRpZXNbX2tleTJdPWFyZ3VtZW50c1tfa2V5Ml19aWYocHJvcGVydGllcy5sZW5ndGgpe3RoaXMuZXh0ZW5kLmFwcGx5KHRoaXMsW3RoaXMucHJvcGVydGllc10uY29uY2F0KHByb3BlcnRpZXMpKX1yZXR1cm4gdGhpcy5wcm9wZXJ0aWVzfSxiaW5kRXZlbnRzOmZ1bmN0aW9uIGJpbmRFdmVudHMoZXZ0cyx0YXJnZXQsdGFyZ2V0X2xheWVyKXtpZigodHlwZW9mIGV2dHM9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6KDAsX3R5cGVvZjMuZGVmYXVsdCkoZXZ0cykpIT09XCJvYmplY3RcInx8ISgwLF9rZXlzMi5kZWZhdWx0KShldnRzKS5sZW5ndGgpcmV0dXJuO3ZhciBlbD10YXJnZXR8fHRoaXMuZWxlbWVudEluc3Q7dmFyIGxheWVyPXRhcmdldF9sYXllcnx8dW5kZWZpbmVkO2lmKCFlbHx8IWVsLm9uKXJldHVybjt2YXIgYm91bmRFdnRzPXRoaXMuX19pbnN0RXZlbnRzO3ZhciBib3VuZEV2dEVscz10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwO2Zvcih2YXIgZXZ0TmFtZSBpbiBldnRzKXt2YXIgZXZ0UmVmZXJlbmNlPXtuYW1lOmV2dE5hbWUsZm46ZXZ0c1tldnROYW1lXX07aWYobGF5ZXI9PT11bmRlZmluZWQpZWwub24oZXZ0UmVmZXJlbmNlLm5hbWUsZXZ0UmVmZXJlbmNlLmZuKTtlbHNlIGVsLm9uKGV2dFJlZmVyZW5jZS5uYW1lLGxheWVyLGV2dFJlZmVyZW5jZS5mbik7Ym91bmRFdnRzLnB1c2goZXZ0UmVmZXJlbmNlKTtib3VuZEV2dEVscy5zZXQoZXZ0UmVmZXJlbmNlLGVsKX19LHVuYmluZEFsbEV2ZW50czpmdW5jdGlvbiB1bmJpbmRBbGxFdmVudHMoYm91bmRFdnRzLGJvdW5kRXZ0RWxzKXtpZighYm91bmRFdnRzfHwhYm91bmRFdnRzLmxlbmd0aHx8IWJvdW5kRXZ0RWxzKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGJvdW5kRXZ0cyksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBldnQ9X3N0ZXAudmFsdWU7dmFyIGVsPWJvdW5kRXZ0RWxzLmdldChldnQpO2lmKCFlbHx8IWVsLm9mZiljb250aW51ZTt2YXIgbmFtZT1ldnQubmFtZSxmbj1ldnQuZm47ZWwub2ZmKG5hbWUsZm4pO2JvdW5kRXZ0RWxzLmRlbGV0ZShldnQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxpc1NoYWR5U2NvcGVkOmZ1bmN0aW9uIGlzU2hhZHlTY29wZWQoKXtyZXR1cm4hUG9seW1lci5TZXR0aW5ncy51c2VOYXRpdmVTaGFkb3d9LGdldFNoYWR5U2NvcGU6ZnVuY3Rpb24gZ2V0U2hhZHlTY29wZSgpe3JldHVyblwic3R5bGUtc2NvcGUgcHgtbWFwLWdsLWdsXCJ9fTtQeE1hcEdsQmVoYXZpb3IuRWxlbWVudD1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjozLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwXCI6NixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjo3fV0sOTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7d2luZG93LlB4TWFwR2xCZWhhdmlvcj13aW5kb3cuUHhNYXBHbEJlaGF2aW9yfHx7fTtQeE1hcEdsQmVoYXZpb3IuTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOntpZDp7dHlwZTpTdHJpbmd9LGxheWVyVHlwZTp7dHlwZTpTdHJpbmd9LHNvdXJjZTp7dHlwZTpTdHJpbmd9LHNvdXJjZUxheWVyOnt0eXBlOlN0cmluZyxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sdmlzaWJpbGl0eTp7dHlwZTpTdHJpbmcsdmFsdWU6XCJ2aXNpYmxlXCIsb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LGxheW91dDp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57fX19LHBhaW50Ont0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnt9fX0sbWluWm9vbVZpc2libGU6e3R5cGU6TnVtYmVyLHZhbHVlOjAsb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LG1heFpvb21WaXNpYmxlOnt0eXBlOk51bWJlcix2YWx1ZToyMixvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sZmlsdGVyOnt0eXBlOkFycmF5LG9ic2VydmVyOlwic2hvdWxkVXBkYXRlSW5zdFwifX0sb2JzZXJ2ZXJzOltcInNob3VsZFVwZGF0ZUluc3RDb21wbGV4KHBhaW50LiosIGxheW91dC4qKVwiXSxhdHRhY2hlZDpmdW5jdGlvbiBhdHRhY2hlZCgpe3RoaXMubm90aWZ5SW5zdFJlYWR5KHRoaXMuY2FuQWRkSW5zdCgpKTt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsXCJweC1tYXAtZ2wtcm9vdC1sb2FkXCIsXCJzaG91bGRBZGRJbnN0XCIpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSxcInB4LW1hcC1nbC1yb290LXN0eWxlZGF0YVwiLFwic2hvdWxkQWRkSW5zdFwiKX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnNob3VsZFJlbW92ZUluc3QoKX0sc2hvdWxkVXBkYXRlSW5zdENvbXBsZXg6ZnVuY3Rpb24gc2hvdWxkVXBkYXRlSW5zdENvbXBsZXgocGFpbnQsbGF5b3V0KXt0aGlzLmRlYm91bmNlKFwic2hvdWxkVXBkYXRlSW5zdERlYm91bmNlXCIsZnVuY3Rpb24oKXtQeE1hcEdsQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkVXBkYXRlSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sMjUwKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7dmFyIHBhcmVudD1ldnQuZGV0YWlsO1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3QmJnBhcmVudCYmcGFyZW50LmVsZW1lbnRJbnN0LmdldExheWVyKHRoaXMuaWQpPT11bmRlZmluZWQpe3RoaXMuYWRkSW5zdChwYXJlbnQpfX0sc2hvdWxkUmVtb3ZlSW5zdDpmdW5jdGlvbiBzaG91bGRSZW1vdmVJbnN0KHBhcmVudCl7UHhNYXBHbEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZFJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCl7dGhpcy5yZW1vdmVJbnN0KHBhcmVudD9wYXJlbnQ6dW5kZWZpbmVkKX19LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt2YXIgbGF5ZXJJbnN0PW9wdGlvbnM7cmV0dXJuIGxheWVySW5zdH0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7Y29uc29sZS5sb2codGhpcy5lbGVtZW50SW5zdCk7cGFyZW50LmVsZW1lbnRJbnN0LmFkZExheWVyKHRoaXMuZWxlbWVudEluc3QpO3RoaXMuYmluZEV2ZW50cyh7Y2xpY2s6dGhpcy5fYnJvYWRjYXN0RXZlbnQuYmluZCh0aGlzKSxkYmxjbGljazp0aGlzLl9icm9hZGNhc3RFdmVudC5iaW5kKHRoaXMpLG1vdXNlZW50ZXI6dGhpcy5fYnJvYWRjYXN0RXZlbnQuYmluZCh0aGlzKSxtb3VzZWxlYXZlOnRoaXMuX2Jyb2FkY2FzdEV2ZW50LmJpbmQodGhpcyl9LHBhcmVudC5lbGVtZW50SW5zdCx0aGlzLmlkKX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7cGFyZW50LnJlbW92ZVNvdXJjZSh0aGlzLmVsZW1lbnRJbnN0KTt0aGlzLmVsZW1lbnRJbnN0LnJlbW92ZSgpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMscGFyZW50KXtmb3IodmFyIGxwS2V5IGluIG5leHRPcHRpb25zLmxheW91dCl7cGFyZW50LmVsZW1lbnRJbnN0LnNldExheW91dFByb3BlcnR5KHRoaXMuaWQsbHBLZXksbmV4dE9wdGlvbnMubGF5b3V0W2xwS2V5XSl9Zm9yKHZhciBwS2V5IGluIG5leHRPcHRpb25zLnBhaW50KXtwYXJlbnQuZWxlbWVudEluc3Quc2V0UGFpbnRQcm9wZXJ0eSh0aGlzLmlkLHBLZXksbmV4dE9wdGlvbnMucGFpbnRbcEtleV0pfXBhcmVudC5lbGVtZW50SW5zdC5zZXRMYXllclpvb21SYW5nZSh0aGlzLmlkLG5leHRPcHRpb25zLm1pbnpvb20sbmV4dE9wdGlvbnMubWF4em9vbSk7cGFyZW50LmVsZW1lbnRJbnN0LnNldEZpbHRlcih0aGlzLmlkLG5leHRPcHRpb25zLmZpbHRlcil9LF9icm9hZGNhc3RFdmVudDpmdW5jdGlvbiBfYnJvYWRjYXN0RXZlbnQoZSl7dmFyIGRldGFpbD17ZW1pdHRlcjp0aGlzLGV2ZW50OmV9O3ZhciBldmVudE5hbWU9XCJweC1tYXAtZ2wtbGF5ZXItXCIrZS50eXBlO2NvbnNvbGUubG9nKGV2ZW50TmFtZSk7dGhpcy5maXJlKGV2ZW50TmFtZSxkZXRhaWwpfSxfc3dpdGNoUG9pbnRlcjpmdW5jdGlvbiBfc3dpdGNoUG9pbnRlcihlKXtpZihlLnR5cGU9PT1cIm1vdXNlZW50ZXJcIil7ZS50YXJnZXQuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwifWVsc2V7ZS50YXJnZXQuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yPVwiXCJ9fSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdHJ1ZX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz17aWQ6dGhpcy5pZCx0eXBlOnRoaXMubGF5ZXJUeXBlLHNvdXJjZTp0aGlzLnNvdXJjZSxtaW56b29tOnRoaXMubWluWm9vbVZpc2libGUsbWF4em9vbTp0aGlzLm1heFpvb21WaXNpYmxlLGxheW91dDp0aGlzLmxheW91dCxwYWludDp0aGlzLnBhaW50fTtvcHRpb25zLmxheW91dC52aXNpYmlsaXR5PXRoaXMudmlzaWJpbGl0eTtpZih0aGlzLnNvdXJjZUxheWVyKW9wdGlvbnNbXCJzb3VyY2UtbGF5ZXJcIl09dGhpcy5zb3VyY2VMYXllcjtpZih0aGlzLmZpbHRlciYmQXJyYXkuaXNBcnJheSh0aGlzLmZpbHRlcikpb3B0aW9uc1tcImZpbHRlclwiXT10aGlzLmZpbHRlcjtyZXR1cm4gb3B0aW9uc319O1B4TWFwR2xCZWhhdmlvci5MYXllcj1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLkxheWVySW1wbF19KSgpO1xuXG59LHt9XSwxMDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfX0oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwR2xCZWhhdmlvcj13aW5kb3cuUHhNYXBHbEJlaGF2aW9yfHx7fTtQeE1hcEdsQmVoYXZpb3IuUG9wdXBJbXBsPXtwcm9wZXJ0aWVzOntkaXNhYmxlQ2xvc2VCdXR0b246e3R5cGU6U3RyaW5nLHZhbHVlOmZhbHNlfSxkaXNhYmxlQ2xvc2VPbkNsaWNrOnt0eXBlOlN0cmluZyx2YWx1ZTpmYWxzZX0sYW5jaG9yOnt0eXBlOlN0cmluZ30sc2hvd0V2ZW50Ont0eXBlOlN0cmluZyx2YWx1ZTonY2xpY2snfSxwb3B1cERhdGE6e3R5cGU6T2JqZWN0LHZhbHVlOmZ1bmN0aW9uIHZhbHVlKCl7fSxyZWFkT25seTp0cnVlfX0sYXR0YWNoZWQ6ZnVuY3Rpb24gYXR0YWNoZWQoKXtjb25zb2xlLmxvZygnYXR0YWNoZWQnKTt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSk7aWYodGhpcy5zaG93RXZlbnQ9PT0nY2xpY2snKXRoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWdsLWxheWVyLWNsaWNrJywnc2hvdWxkQWRkSW5zdCcpO2Vsc2UgaWYodGhpcy5zaG93RXZlbnQ9PT0nZGJsY2xpY2snKXRoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWdsLWxheWVyLWRibGNsaWNrJywnc2hvdWxkQWRkSW5zdCcpO2Vsc2UgaWYodGhpcy5zaG93RXZlbnQ9PT0naG92ZXInKXt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsJ3B4LW1hcC1nbC1sYXllci1tb3VzZWVudGVyJywnc2hvdWxkQWRkSW5zdCcpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWdsLWxheWVyLW1vdXNlbGVhdmUnLCdyZW1vdmVJbnN0Jyl9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvd0V2ZW50IHByb3ZpZGVkJyl9LHNob3VsZEFkZEluc3Q6ZnVuY3Rpb24gc2hvdWxkQWRkSW5zdChldnQpe2lmKHRoaXMuZWxlbWVudEluc3Qpe3RoaXMucmVtb3ZlSW5zdCgpfVB4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyk7aWYodGhpcy5lbGVtZW50SW5zdCl7dGhpcy5hZGRJbnN0KGV2dC5kZXRhaWwpfTt9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChldmVudERldGFpbCl7dmFyIHBvcHVwRGF0YT17bG5nTGF0OmV2ZW50RGV0YWlsLmV2ZW50LmxuZ0xhdCx0eXBlOmV2ZW50RGV0YWlsLmV2ZW50LnR5cGUsZmVhdHVyZXM6ZXZlbnREZXRhaWwuZXZlbnQuZmVhdHVyZXN8fFtdfTtpZihwb3B1cERhdGEuZmVhdHVyZXNbMF0ucHJvcGVydGllcyl7cG9wdXBEYXRhLmFjdGl2ZUZlYXR1cmVQcm9wZXJ0aWVzPXRoaXMuX3RvQXJyYXkocG9wdXBEYXRhLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMpfXRoaXMuX3NldFBvcHVwRGF0YShwb3B1cERhdGEpO3ZhciBub2RlPVBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignI3BvcHVwLXRlbXBsYXRlJyk7dGhpcy5lbGVtZW50SW5zdC5zZXRMbmdMYXQoZXZlbnREZXRhaWwuZXZlbnQubG5nTGF0KTt0aGlzLmVsZW1lbnRJbnN0LnNldERPTUNvbnRlbnQobm9kZSk7dGhpcy5lbGVtZW50SW5zdC5hZGRUbyhldmVudERldGFpbC5ldmVudC50YXJnZXQpfSxfdG9BcnJheTpmdW5jdGlvbiBfdG9BcnJheShvYmope3JldHVybigwLF9rZXlzMi5kZWZhdWx0KShvYmopLm1hcChmdW5jdGlvbihrZXkpe3JldHVybntuYW1lOmtleSx2YWx1ZTpvYmpba2V5XX19KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KCl7dGhpcy5zaG91bGRSZW1vdmVJbnN0KCk7dGhpcy5lbGVtZW50SW5zdC5yZW1vdmUoKX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3ZhciBwb3B1cD1uZXcgbWFwYm94Z2wuUG9wdXAob3B0aW9ucyk7cmV0dXJuIHBvcHVwfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBvcHRpb25zPXtjbG9zZUJ1dHRvbjohdGhpcy5kaXNhYmxlQ2xvc2VCdXR0b24sY2xvc2VPbkNsaWNrOiF0aGlzLmRpc2FibGVDbG9zZU9uQ2xpY2t9O2lmKHRoaXMuYW5jaG9yKW9wdGlvbnMuYW5jaG9yPXRoaXMuYW5jaG9yO3JldHVybiBvcHRpb25zfSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdHJ1ZX19O1B4TWFwR2xCZWhhdmlvci5Qb3B1cD1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLlBvcHVwSW1wbF07UHhNYXBHbEJlaGF2aW9yLkluZm9Qb3B1cEltcGw9e3Byb3BlcnRpZXM6e3RpdGxlOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRlc2NyaXB0aW9uOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGltZ1NyYzp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgbWFwYm94Z2wuUG9wdXAob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIHVwZGF0ZXM9e307aWYobGFzdE9wdGlvbnMudGl0bGUhPT1uZXh0T3B0aW9ucy50aXRsZSl7dXBkYXRlcy50aXRsZT1uZXh0T3B0aW9ucy50aXRsZX1pZihsYXN0T3B0aW9ucy5kZXNjcmlwdGlvbiE9PW5leHRPcHRpb25zLmRlc2NyaXB0aW9uKXt1cGRhdGVzLmRlc2NyaXB0aW9uPW5leHRPcHRpb25zLmRlc2NyaXB0aW9ufWlmKGxhc3RPcHRpb25zLmltZ1NyYyE9PW5leHRPcHRpb25zLmltZ1NyYyl7dXBkYXRlcy5pbWdTcmM9bmV4dE9wdGlvbnMuaW1nU3JjfWlmKCgwLF9rZXlzMi5kZWZhdWx0KSh1cGRhdGVzKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QudXBkYXRlU2V0dGluZ3ModXBkYXRlcyl9fX07UHhNYXBHbEJlaGF2aW9yLkluZm9Qb3B1cD1bUHhNYXBHbEJlaGF2aW9yLlBvcHVwLFB4TWFwR2xCZWhhdmlvci5JbmZvUG9wdXBJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6M31dLDEwMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5NZ2xSb290SW1wbD17cHJvcGVydGllczp7c3R5bGU6e3R5cGU6U3RyaW5nLHZhbHVlOlwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXY5XCIsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LG1nbFRva2VuOnt0eXBlOlN0cmluZyx2YWx1ZTpcIlwifSxsYXQ6e3R5cGU6TnVtYmVyLHZhbHVlOjM3Ljc2NzIzNzUsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LGxuZzp7dHlwZTpOdW1iZXIsdmFsdWU6LTEyMS45NTg0MTMxLG5vdGlmeTp0cnVlLG9ic2VydmVyOlwic2hvdWxkVXBkYXRlSW5zdFwifSx6b29tOnt0eXBlOk51bWJlcix2YWx1ZToxMCxub3RpZnk6dHJ1ZSxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sYmVhcmluZzp7dHlwZTpOdW1iZXIsdmFsdWU6MCxub3RpZnk6dHJ1ZSxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0scGl0Y2g6e3R5cGU6TnVtYmVyLHZhbHVlOjAsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LG1heFpvb206e3R5cGU6TnVtYmVyLG9ic2VydmVyOlwic2hvdWxkVXBkYXRlSW5zdFwifSxtaW5ab29tOnt0eXBlOk51bWJlcixvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sbWF4Qm91bmRzOnt0eXBlOkFycmF5LHZhbHVlOmZ1bmN0aW9uIHZhbHVlKCl7cmV0dXJuIG51bGx9LG9ic2VydmVyOlwic2hvdWxkVXBkYXRlSW5zdFwifSxkaXNhYmxlSW50ZXJhY3Rpb246e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sZGlzYWJsZURyYWdnaW5nOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LGRpc2FibGVTY3JvbGxab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6XCJzaG91bGRVcGRhdGVJbnN0XCJ9LGRpc2FibGVUb3VjaFpvb206e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIn0sZGlzYWJsZUF0dHJpYnV0aW9uQ29udHJvbDp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxkaXNhYmxlTWFwSGFzaDp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxmbGV4VG9TaXplOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2UscmVmbGVjdFRvQXR0cmlidXRlOnRydWV9fSxhdHRhY2hlZDpmdW5jdGlvbiBhdHRhY2hlZCgpe3RoaXMubGlzdGVuKHRoaXMsXCJweC1tYXAtZ2wtZWxlbWVudC1yZWFkeS10by1hZGRcIixcInNob3VsZEFkZEluc3RcIik7aWYodGhpcy5jYW5BZGRJbnN0KCkpe3RoaXMuZmlyZShcInB4LW1hcC1nbC1lbGVtZW50LXJlYWR5LXRvLWFkZFwiKX19LGRldGFjaGVkOmZ1bmN0aW9uIGRldGFjaGVkKCl7dGhpcy51bmxpc3Rlbih0aGlzLFwicHgtbWFwLWdsLWVsZW1lbnQtcmVhZHktdG8tYWRkXCIsXCJzaG91bGRBZGRJbnN0XCIpO3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpO3RoaXMucmVtb3ZlSW5zdCgpfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoZXZ0KXtpZihQb2x5bWVyLmRvbShldnQpLnJvb3RUYXJnZXQhPT10aGlzKXJldHVybjtQeE1hcEdsQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkQWRkSW5zdC5jYWxsKHRoaXMpO3RoaXMuYWRkSW5zdCgpfSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdGhpcy5sYXRMbmdJc1ZhbGlkKHRoaXMubGF0LHRoaXMubG5nKX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe21hcGJveGdsLmFjY2Vzc1Rva2VuPXRoaXMubWdsVG9rZW47b3B0aW9ucy5jb250YWluZXI9UG9seW1lci5kb20odGhpcy5yb290KS5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTt2YXIgbWFwSW5zdD1uZXcgbWFwYm94Z2wuTWFwKG9wdGlvbnMpO2lmKHRoaXMuaXNTaGFkeVNjb3BlZCgpKXttYXBJbnN0Ll9fYWRkU2hhZHlTY29wZT10aGlzLnNjb3BlU3VidHJlZS5iaW5kKHRoaXMpfXJldHVybiBtYXBJbnN0fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXtpZih0aGlzLmlzU2hhZHlTY29wZWQoKSl7dGhpcy5zY29wZVN1YnRyZWUodGhpcy4kLm1hcCx0cnVlKX12YXIgbWFwTW92ZUZuPXRoaXMuX2hhbmRsZU1hcE1vdmUuYmluZCh0aGlzKTt2YXIgem9vbVN0YXJ0Rm49dGhpcy5faGFuZGxlWm9vbVN0YXJ0LmJpbmQodGhpcyk7dmFyIHpvb21FbmRGbj10aGlzLl9oYW5kbGVab29tRW5kLmJpbmQodGhpcyk7dmFyIG1hcExvYWRlZEZuPXRoaXMuX2hhbmRsZU1hcExvYWRlZC5iaW5kKHRoaXMpO3RoaXMuYmluZEV2ZW50cyh7bW92ZWVuZDptYXBNb3ZlRm4sem9vbXN0YXJ0Onpvb21TdGFydEZuLHpvb21lbmQ6em9vbUVuZEZuLGxvYWQ6bWFwTG9hZGVkRm4sc3R5bGVkYXRhOm1hcExvYWRlZEZufSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdCgpe2lmKHRoaXMuaXNTaGFkeVNjb3BlZCgpKXt0aGlzLnNjb3BlU3VidHJlZSh0aGlzLiQubWFwLGZhbHNlKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9e307b3B0aW9ucy5jb250YWluZXI9XCIjbWFwXCI7b3B0aW9ucy5jZW50ZXI9W3RoaXMubG5nLHRoaXMubGF0XTtvcHRpb25zLnN0eWxlPXRoaXMuc3R5bGU7b3B0aW9ucy56b29tPXRoaXMuem9vbTtvcHRpb25zLmJlYXJpbmc9dGhpcy5iZWFyaW5nO29wdGlvbnMucGl0Y2g9dGhpcy5waXRjaDtvcHRpb25zLm1pblpvb209dGhpcy5taW5ab29tfHwwO29wdGlvbnMubWF4Wm9vbT10aGlzLm1heFpvb218fDE4O29wdGlvbnMubWF4Qm91bmRzPXRoaXMubWF4Qm91bmRzfHx1bmRlZmluZWQ7b3B0aW9ucy5hdHRyaWJ1dGlvbkNvbnRyb2w9IXRoaXMuZGlzYWJsZUF0dHJpYnV0aW9uQ29udHJvbDtvcHRpb25zLmludGVyYWN0aXZlPSF0aGlzLmRpc2FibGVJbnRlcmFjdGlvbjtvcHRpb25zLmRyYWdQYW49IXRoaXMuZGlzYWJsZURyYWdnaW5nO29wdGlvbnMuc2Nyb2xsWm9vbT0hdGhpcy5kaXNhYmxlU2Nyb2xsWm9vbTtvcHRpb25zLnRvdWNoWm9vbVJvdGF0ZT0hdGhpcy5kaXNhYmxlVG91Y2hab29tO29wdGlvbnMuaGFzaD0hdGhpcy5kaXNhYmxlTWFwSGFzaDtyZXR1cm4gb3B0aW9uc30sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtjb25zb2xlLmxvZyhcIlVwZGF0ZSBJbnN0XCIpO2NvbnNvbGUubG9nKFwibGFzdE9wdGlvbnNcIik7Y29uc29sZS5sb2cobGFzdE9wdGlvbnMpO2NvbnNvbGUubG9nKFwibmV4dE9wdGlvbnNcIik7Y29uc29sZS5sb2cobmV4dE9wdGlvbnMpO2lmKHRoaXMubGF0TG5nSXNWYWxpZChuZXh0T3B0aW9ucy5jZW50ZXJbMF0sbmV4dE9wdGlvbnMuY2VudGVyWzFdKSYmKGxhc3RPcHRpb25zLmNlbnRlclswXSE9PW5leHRPcHRpb25zLmNlbnRlclswXXx8bGFzdE9wdGlvbnMuY2VudGVyWzFdIT09bmV4dE9wdGlvbnMuY2VudGVyWzFdfHxsYXN0T3B0aW9ucy56b29tIT09bmV4dE9wdGlvbnMuem9vbXx8bGFzdE9wdGlvbnMuYmVhcmluZyE9PW5leHRPcHRpb25zLmJlYXJpbmd8fGxhc3RPcHRpb25zLnBpdGNoIT09bmV4dE9wdGlvbnMucGl0Y2gpKXt0aGlzLl91cGRhdGVNYXBWaWV3KCl9aWYobmV4dE9wdGlvbnMuc3R5bGUhPVwiXCImJmxhc3RPcHRpb25zLnN0eWxlIT09bmV4dE9wdGlvbnMuc3R5bGUpe3RoaXMuZWxlbWVudEluc3Quc2V0U3R5bGUobmV4dE9wdGlvbnMuc3R5bGUpfWlmKGxhc3RPcHRpb25zLm1heFpvb20hPT1uZXh0T3B0aW9ucy5tYXhab29tJiYhaXNOYU4obmV4dE9wdGlvbnMubWF4Wm9vbSkpe3RoaXMuZWxlbWVudEluc3Quc2V0TWF4Wm9vbShuZXh0T3B0aW9ucy5tYXhab29tKX1pZihsYXN0T3B0aW9ucy5taW5ab29tIT09bmV4dE9wdGlvbnMubWluWm9vbSYmIWlzTmFOKG5leHRPcHRpb25zLm1pblpvb20pKXt0aGlzLmVsZW1lbnRJbnN0LnNldE1pblpvb20obmV4dE9wdGlvbnMubWluWm9vbSl9aWYobGFzdE9wdGlvbnMubWF4Qm91bmRzIT09bmV4dE9wdGlvbnMubWF4Qm91bmRzJiYhaXNOYU4obmV4dE9wdGlvbnMubWF4Qm91bmRzKSl7dGhpcy5zZXRNYXhCb3VuZHMobmV4dE9wdGlvbnMubWF4Qm91bmRzKX1pZighbGFzdE9wdGlvbnMuaW50ZXJhY3RpdmUmJm5leHRPcHRpb25zLmludGVyYWN0aXZlKXt0aGlzLmVsZW1lbnRJbnN0LmJveFpvb20uZW5hYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUGFuLmVuYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZHJhZ1JvdGF0ZS5lbmFibGUoKTt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFpvb20uZW5hYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5rZXlib2FyZC5lbmFibGUoKTt0aGlzLmVsZW1lbnRJbnN0LmRvdWJsZUNsaWNrWm9vbS5lbmFibGUoKTt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbVJvdGF0ZS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5pbnRlcmFjdGl2ZSYmIW5leHRPcHRpb25zLmludGVyYWN0aXZlKXt0aGlzLmVsZW1lbnRJbnN0LmJveFpvb20uZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZHJhZ1Bhbi5kaXNhYmxlKCk7dGhpcy5lbGVtZW50SW5zdC5kcmFnUm90YXRlLmRpc2FibGUoKTt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFpvb20uZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3Qua2V5Ym9hcmQuZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZG91YmxlQ2xpY2tab29tLmRpc2FibGUoKTt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbVJvdGF0ZS5kaXNhYmxlKCl9aWYoIWxhc3RPcHRpb25zLmRyYWdnaW5nJiZuZXh0T3B0aW9ucy5kcmFnZ2luZyl7dGhpcy5lbGVtZW50SW5zdC5kcmFnUGFuLmVuYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZHJhZ1JvdGF0ZS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5kcmFnZ2luZyYmIW5leHRPcHRpb25zLmRyYWdnaW5nKXt0aGlzLmVsZW1lbnRJbnN0LmRyYWdQYW4uZGlzYWJsZSgpO3RoaXMuZWxlbWVudEluc3QuZHJhZ1JvdGF0ZS5kaXNhYmxlKCl9aWYoIWxhc3RPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSYmbmV4dE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFpvb20uZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tJiYhbmV4dE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFpvb20uZGlzYWJsZSgpfWlmKCFsYXN0T3B0aW9ucy50b3VjaFpvb20mJm5leHRPcHRpb25zLnRvdWNoWm9vbSl7dGhpcy5lbGVtZW50SW5zdC50b3VjaFpvb21Sb3RhdGUuZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMudG91Y2hab29tJiYhbmV4dE9wdGlvbnMudG91Y2hab29tKXt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbVJvdGF0ZS5kaXNhYmxlKCl9fSxfdXBkYXRlTWFwVmlldzpmdW5jdGlvbiBfdXBkYXRlTWFwVmlldygpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLmRlYm91bmNlKFwidXBkYXRlLW1hcC12aWV3XCIsZnVuY3Rpb24oKXt2YXIgX2VsZW1lbnRJbnN0JGdldENlbnRlPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCksbG5nPV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sbmcsbGF0PV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sYXQ7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7dmFyIGJlYXJpbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRCZWFyaW5nKCk7dmFyIHBpdGNoPXRoaXMuZWxlbWVudEluc3QuZ2V0UGl0Y2goKTtpZih0aGlzLmxhdCE9PWxhdHx8dGhpcy5sbmchPT1sbmd8fHRoaXMuem9vbSE9PXpvb218fHRoaXMuYmVhcmluZyE9PWJlYXJpbmd8fHRoaXMucGl0Y2ghPT1waXRjaCl7dGhpcy5lbGVtZW50SW5zdC5mbHlUbyh7Y2VudGVyOlt0aGlzLmxuZyx0aGlzLmxhdF0sem9vbTp0aGlzLnpvb20scGl0Y2g6dGhpcy5waXRjaCxiZWFyaW5nOnRoaXMuYmVhcmluZyxzcGVlZDoxLjIsY3VydmU6MS40Mn0pfX0pfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PVwiXCJ9LGxhdExuZ0lzVmFsaWQ6ZnVuY3Rpb24gbGF0TG5nSXNWYWxpZChsYXQsbG5nKXt2YXIgaXNWYWxpZD10eXBlb2YgbGF0IT09XCJ1bmRlZmluZWRcIiYmdGhpcy5fY2FuQmVOdW0obGF0KSYmdHlwZW9mIGxuZyE9PVwidW5kZWZpbmVkXCImJnRoaXMuX2NhbkJlTnVtKGxuZyk7aWYoaXNWYWxpZClyZXR1cm4gdHJ1ZTtjb25zb2xlLmxvZyhcInB4LW1hcC1nbCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgWW91IGVudGVyZWQgYW4gaW52YWxpZCBgbGF0YCBvciBgbG5nYCBhdHRyaWJ1dGUgZm9yIFwiK3RoaXMuaXMrXCIuIFlvdSBtdXN0IHBhc3MgYSB2YWxpZCBudW1iZXIuXCIpO3JldHVybiBmYWxzZX0sX2hhbmRsZU1hcExvYWRlZDpmdW5jdGlvbiBfaGFuZGxlTWFwTG9hZGVkKGUpe2lmKHRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLmRlYm91bmNlKFwiZmlyZS1sb2FkLWV2ZW50c1wiLGZ1bmN0aW9uKCl7dmFyIGV2X25hbWU9XCJweC1tYXAtZ2wtcm9vdC1cIitlLnR5cGU7Y29uc29sZS5sb2coXCJmaXJlIFwiK2V2X25hbWUpO3RoaXMuZmlyZShldl9uYW1lLHRoaXMpfSl9fSxfaGFuZGxlTWFwTW92ZTpmdW5jdGlvbiBfaGFuZGxlTWFwTW92ZSgpe2lmKHRoaXMuX19pc1pvb21pbmcpe3RoaXMuX19vblpvb21FbmQ9dGhpcy5faGFuZGxlTWFwTW92ZS5iaW5kKHRoaXMpO3JldHVybn10aGlzLmRlYm91bmNlKFwiaGFuZGxlLW1hcC1tb3ZlXCIsZnVuY3Rpb24oKXt2YXIgbGF0TG5nPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCk7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7dmFyIGJvdW5kcz10aGlzLmVsZW1lbnRJbnN0LmdldEJvdW5kcygpO3ZhciBwaXRjaD10aGlzLmVsZW1lbnRJbnN0LmdldFBpdGNoKCk7dmFyIGJlYXJpbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRCZWFyaW5nKCk7aWYodGhpcy5sYXQhPT1sYXRMbmcubGF0fHx0aGlzLmxuZyE9PWxhdExuZy5sbmcpe3RoaXMuc2V0KFwibGF0XCIsbGF0TG5nLmxhdCk7dGhpcy5zZXQoXCJsbmdcIixsYXRMbmcubG5nKX1pZih0aGlzLnpvb20hPT16b29tKXt0aGlzLnNldChcInpvb21cIix6b29tKX1pZih0aGlzLmJlYXJpbmchPT1iZWFyaW5nKXt0aGlzLnNldChcImJlYXJpbmdcIixiZWFyaW5nKX1pZih0aGlzLnBpdGNoIT09cGl0Y2gpe3RoaXMuc2V0KFwicGl0Y2hcIixwaXRjaCl9dGhpcy5maXJlKFwicHgtbWFwLWdsLW1vdmVkXCIse2xhdDpsYXRMbmcubGF0LGxuZzpsYXRMbmcubG5nLHpvb206em9vbSxib3VuZHM6Ym91bmRzfSl9LDEwMDApfSxfaGFuZGxlWm9vbVN0YXJ0OmZ1bmN0aW9uIF9oYW5kbGVab29tU3RhcnQoKXt0aGlzLl9faXNab29taW5nPXRydWV9LF9oYW5kbGVab29tRW5kOmZ1bmN0aW9uIF9oYW5kbGVab29tRW5kKCl7dGhpcy5fX2lzWm9vbWluZz1mYWxzZTtpZih0eXBlb2YgdGhpcy5fX29uWm9vbUVuZD09PVwiZnVuY3Rpb25cIil7dGhpcy5fX29uWm9vbUVuZCgpO3RoaXMuX19vblpvb21FbmQ9bnVsbH19fTtQeE1hcEdsQmVoYXZpb3IuTWdsUm9vdD1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLk1nbFJvb3RJbXBsXX0pKCk7XG5cbn0se31dLDEwMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjt2YXIgX2tleXM9cmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3dpbmRvdy5QeE1hcEdsQmVoYXZpb3I9d2luZG93LlB4TWFwR2xCZWhhdmlvcnx8e307UHhNYXBHbEJlaGF2aW9yLkdlb0pTT05Tb3VyY2VJbXBsPXtwcm9wZXJ0aWVzOntkYXRhOnt0eXBlOk9iamVjdCxvYnNlcnZlcjpcInNob3VsZFVwZGF0ZUluc3RcIixub3RpZnk6dHJ1ZX19LHVwZGF0ZTpmdW5jdGlvbiB1cGRhdGUoKXtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5zaG91bGRVcGRhdGVJbnN0KCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0aGlzLmRhdGEmJigwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YSk9PT1cIm9iamVjdFwiJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe1B4TWFwR2xCZWhhdmlvci5Tb3VyY2VJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm57ZGF0YTpvcHRpb25zLmRhdGEsaWQ6b3B0aW9ucy5pZCx0eXBlOm9wdGlvbnMudHlwZX19LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7Y29uc29sZS5sb2codGhpcy5lbGVtZW50SW5zdCk7dmFyIG9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMuZWxlbWVudEluc3Quc2V0RGF0YShvcHRpb25zLmRhdGEpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBzcmNEYXRhPXt0eXBlOlwiRmVhdHVyZUNvbGxlY3Rpb25cIixmZWF0dXJlczpbe3R5cGU6XCJGZWF0dXJlXCIsZ2VvbWV0cnk6e3R5cGU6XCJQb2ludFwiLGNvb3JkaW5hdGVzOlswLDBdfSxwcm9wZXJ0aWVzOntuYW1lOlwibnVsbCBpc2xhbmRcIn19XX07aWYodGhpcy5kYXRhJiZ0aGlzLmRhdGEhPT17fSlzcmNEYXRhPXRoaXMuZGF0YTt2YXIgb3B0aW9ucz1QeE1hcEdsQmVoYXZpb3IuU291cmNlSW1wbC5nZXRJbnN0T3B0aW9ucy5jYWxsKHRoaXMpO29wdGlvbnMuZGF0YT1zcmNEYXRhO29wdGlvbnMudHlwZT1cImdlb2pzb25cIjtyZXR1cm4gb3B0aW9uc319O1B4TWFwR2xCZWhhdmlvci5HZW9KU09OU291cmNlPVtQeE1hcEdsQmVoYXZpb3IuU291cmNlLFB4TWFwR2xCZWhhdmlvci5HZW9KU09OU291cmNlSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjMsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6N31dLDEwMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5WZWN0b3JTb3VyY2VJbXBsPXtwcm9wZXJ0aWVzOnt1cmw6e3R5cGU6U3RyaW5nfSx0aWxlczp7dHlwZTpBcnJheX0saWQ6e3R5cGU6U3RyaW5nfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7UHhNYXBHbEJlaGF2aW9yLlNvdXJjZUltcGwuYWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybnt1cmw6b3B0aW9ucy51cmwsdGlsZXM6b3B0aW9ucy50aWxlcyxpZDpvcHRpb25zLmlkLHR5cGU6b3B0aW9ucy50eXBlfX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRJbnN0KTt2YXIgb3B0aW9ucz10aGlzLmdldEluc3RPcHRpb25zKCk7dGhpcy5lbGVtZW50SW5zdC5zZXREYXRhKG9wdGlvbnMuZGF0YSl9LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9UHhNYXBHbEJlaGF2aW9yLlNvdXJjZUltcGwuZ2V0SW5zdE9wdGlvbnMuY2FsbCh0aGlzKTtvcHRpb25zLnVybD10aGlzLnVybDtvcHRpb25zLnRpbGVzPXRoaXMudGlsZXM7b3B0aW9ucy50eXBlPVwidmVjdG9yXCI7cmV0dXJuIG9wdGlvbnN9fTtQeE1hcEdsQmVoYXZpb3IuVmVjdG9yU291cmNlPVtQeE1hcEdsQmVoYXZpb3IuU291cmNlLFB4TWFwR2xCZWhhdmlvci5WZWN0b3JTb3VyY2VJbXBsXX0pKCk7XG5cbn0se31dLDEwNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt3aW5kb3cuUHhNYXBHbEJlaGF2aW9yPXdpbmRvdy5QeE1hcEdsQmVoYXZpb3J8fHt9O1B4TWFwR2xCZWhhdmlvci5Tb3VyY2VJbXBsPXtwcm9wZXJ0aWVzOntpZDp7dHlwZTpTdHJpbmd9fSxhdHRhY2hlZDpmdW5jdGlvbiBhdHRhY2hlZCgpe3RoaXMubm90aWZ5SW5zdFJlYWR5KHRoaXMuY2FuQWRkSW5zdCgpKTt0aGlzLmxpc3Rlbih0aGlzLnBhcmVudE5vZGUsXCJweC1tYXAtZ2wtcm9vdC1sb2FkXCIsXCJzaG91bGRBZGRJbnN0XCIpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSxcInB4LW1hcC1nbC1yb290LXN0eWxlZGF0YVwiLFwic2hvdWxkQWRkSW5zdFwiKX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnNob3VsZFJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7dmFyIHBhcmVudD1ldnQuZGV0YWlsO1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3QmJnBhcmVudCYmcGFyZW50LmVsZW1lbnRJbnN0LmdldFNvdXJjZSh0aGlzLmlkKT09dW5kZWZpbmVkKXt0aGlzLmFkZEluc3QocGFyZW50KX19LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwR2xCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRSZW1vdmVJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3Qpe3RoaXMucmVtb3ZlSW5zdChwYXJlbnQ/cGFyZW50OnVuZGVmaW5lZCl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntpZDp0aGlzLmlkfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dmFyIHNvdXJjZUluZm89e3R5cGU6dGhpcy5lbGVtZW50SW5zdC50eXBlfTtpZih0aGlzLmVsZW1lbnRJbnN0LmRhdGEpc291cmNlSW5mby5kYXRhPXRoaXMuZWxlbWVudEluc3QuZGF0YTtpZih0aGlzLmVsZW1lbnRJbnN0LnRpbGVzKXNvdXJjZUluZm8udGlsZXM9dGhpcy5lbGVtZW50SW5zdC50aWxlcztpZih0aGlzLmVsZW1lbnRJbnN0LnVybClzb3VyY2VJbmZvLnVybD10aGlzLmVsZW1lbnRJbnN0LnVybDtwYXJlbnQuZWxlbWVudEluc3QuYWRkU291cmNlKHRoaXMuZWxlbWVudEluc3QuaWQsc291cmNlSW5mbyk7dGhpcy5lbGVtZW50SW5zdD1wYXJlbnQuZWxlbWVudEluc3QuZ2V0U291cmNlKHRoaXMuZWxlbWVudEluc3QuaWQpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXtwYXJlbnQucmVtb3ZlU291cmNlKHRoaXMuZWxlbWVudEluc3QpO3RoaXMuZWxlbWVudEluc3QucmVtb3ZlKCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0cnVlfX07UHhNYXBHbEJlaGF2aW9yLlNvdXJjZT1bUHhNYXBHbEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBHbEJlaGF2aW9yLlNvdXJjZUltcGxdfSkoKTtcblxufSx7fV19LHt9LFs5OCw5OSw5NSw5Niw5NywxMDAsMTAxLDEwMiwxMDMsMTA0XSk7XG4iXSwiZmlsZSI6InB4LW1hcC1nbC1idW5kbGUuanMifQ==
