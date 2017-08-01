(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":10}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":11}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":12}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":13}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":14}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":15}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":16}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":17}],9:[function(require,module,exports){
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
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],10:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":92,"../modules/es6.string.iterator":98,"../modules/web.dom.iterable":104}],11:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":33}],12:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":33,"../modules/es6.map":94,"../modules/es6.object.to-string":97,"../modules/es6.string.iterator":98,"../modules/es7.map.to-json":101,"../modules/web.dom.iterable":104}],13:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":33,"../../modules/es6.object.assign":95}],14:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":33,"../../modules/es6.object.keys":96}],15:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":33,"../../modules/es6.object.to-string":97,"../../modules/es6.symbol":99,"../../modules/es7.symbol.async-iterator":102,"../../modules/es7.symbol.observable":103}],16:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":89,"../../modules/es6.string.iterator":98,"../../modules/web.dom.iterable":104}],17:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;
},{"../modules/_core":33,"../modules/es6.object.to-string":97,"../modules/es6.weak-map":100,"../modules/web.dom.iterable":104}],18:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],19:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],20:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],21:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":51}],22:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":42}],23:[function(require,module,exports){
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
},{"./_to-index":81,"./_to-iobject":83,"./_to-length":84}],24:[function(require,module,exports){
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
},{"./_array-species-create":26,"./_ctx":34,"./_iobject":48,"./_to-length":84,"./_to-object":85}],25:[function(require,module,exports){
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
},{"./_is-array":50,"./_is-object":51,"./_wks":90}],26:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":25}],27:[function(require,module,exports){
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
},{"./_cof":28,"./_wks":90}],28:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],29:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":20,"./_ctx":34,"./_defined":35,"./_descriptors":36,"./_for-of":42,"./_iter-define":54,"./_iter-step":55,"./_meta":59,"./_object-create":61,"./_object-dp":62,"./_redefine-all":74,"./_set-species":76}],30:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":22,"./_classof":27}],31:[function(require,module,exports){
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
},{"./_an-instance":20,"./_an-object":21,"./_array-methods":24,"./_for-of":42,"./_has":44,"./_is-object":51,"./_meta":59,"./_redefine-all":74}],32:[function(require,module,exports){
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
},{"./_an-instance":20,"./_array-methods":24,"./_descriptors":36,"./_export":40,"./_fails":41,"./_for-of":42,"./_global":43,"./_hide":45,"./_is-object":51,"./_meta":59,"./_object-dp":62,"./_redefine-all":74,"./_set-to-string-tag":77}],33:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
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
},{"./_a-function":18}],35:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],36:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":41}],37:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":43,"./_is-object":51}],38:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],39:[function(require,module,exports){
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
},{"./_object-gops":67,"./_object-keys":70,"./_object-pie":71}],40:[function(require,module,exports){
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
},{"./_core":33,"./_ctx":34,"./_global":43,"./_hide":45}],41:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],42:[function(require,module,exports){
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
},{"./_an-object":21,"./_ctx":34,"./_is-array-iter":49,"./_iter-call":52,"./_to-length":84,"./core.get-iterator-method":91}],43:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],44:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],45:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":36,"./_object-dp":62,"./_property-desc":73}],46:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":43}],47:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":36,"./_dom-create":37,"./_fails":41}],48:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":28}],49:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":56,"./_wks":90}],50:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":28}],51:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],52:[function(require,module,exports){
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
},{"./_an-object":21}],53:[function(require,module,exports){
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
},{"./_hide":45,"./_object-create":61,"./_property-desc":73,"./_set-to-string-tag":77,"./_wks":90}],54:[function(require,module,exports){
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
},{"./_export":40,"./_has":44,"./_hide":45,"./_iter-create":53,"./_iterators":56,"./_library":58,"./_object-gpo":68,"./_redefine":75,"./_set-to-string-tag":77,"./_wks":90}],55:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],56:[function(require,module,exports){
module.exports = {};
},{}],57:[function(require,module,exports){
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
},{"./_object-keys":70,"./_to-iobject":83}],58:[function(require,module,exports){
module.exports = true;
},{}],59:[function(require,module,exports){
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
},{"./_fails":41,"./_has":44,"./_is-object":51,"./_object-dp":62,"./_uid":87}],60:[function(require,module,exports){
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
},{"./_fails":41,"./_iobject":48,"./_object-gops":67,"./_object-keys":70,"./_object-pie":71,"./_to-object":85}],61:[function(require,module,exports){
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

},{"./_an-object":21,"./_dom-create":37,"./_enum-bug-keys":38,"./_html":46,"./_object-dps":63,"./_shared-key":78}],62:[function(require,module,exports){
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
},{"./_an-object":21,"./_descriptors":36,"./_ie8-dom-define":47,"./_to-primitive":86}],63:[function(require,module,exports){
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
},{"./_an-object":21,"./_descriptors":36,"./_object-dp":62,"./_object-keys":70}],64:[function(require,module,exports){
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
},{"./_descriptors":36,"./_has":44,"./_ie8-dom-define":47,"./_object-pie":71,"./_property-desc":73,"./_to-iobject":83,"./_to-primitive":86}],65:[function(require,module,exports){
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

},{"./_object-gopn":66,"./_to-iobject":83}],66:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":38,"./_object-keys-internal":69}],67:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],68:[function(require,module,exports){
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
},{"./_has":44,"./_shared-key":78,"./_to-object":85}],69:[function(require,module,exports){
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
},{"./_array-includes":23,"./_has":44,"./_shared-key":78,"./_to-iobject":83}],70:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":38,"./_object-keys-internal":69}],71:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],72:[function(require,module,exports){
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
},{"./_core":33,"./_export":40,"./_fails":41}],73:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],74:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":45}],75:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":45}],76:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":33,"./_descriptors":36,"./_global":43,"./_object-dp":62,"./_wks":90}],77:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":44,"./_object-dp":62,"./_wks":90}],78:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":79,"./_uid":87}],79:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":43}],80:[function(require,module,exports){
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
},{"./_defined":35,"./_to-integer":82}],81:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":82}],82:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],83:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":35,"./_iobject":48}],84:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":82}],85:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":35}],86:[function(require,module,exports){
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
},{"./_is-object":51}],87:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],88:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":33,"./_global":43,"./_library":58,"./_object-dp":62,"./_wks-ext":89}],89:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":90}],90:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":43,"./_shared":79,"./_uid":87}],91:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":27,"./_core":33,"./_iterators":56,"./_wks":90}],92:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":21,"./_core":33,"./core.get-iterator-method":91}],93:[function(require,module,exports){
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
},{"./_add-to-unscopables":19,"./_iter-define":54,"./_iter-step":55,"./_iterators":56,"./_to-iobject":83}],94:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":32,"./_collection-strong":29}],95:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":40,"./_object-assign":60}],96:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":70,"./_object-sap":72,"./_to-object":85}],97:[function(require,module,exports){

},{}],98:[function(require,module,exports){
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
},{"./_iter-define":54,"./_string-at":80}],99:[function(require,module,exports){
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
},{"./_an-object":21,"./_descriptors":36,"./_enum-keys":39,"./_export":40,"./_fails":41,"./_global":43,"./_has":44,"./_hide":45,"./_is-array":50,"./_keyof":57,"./_library":58,"./_meta":59,"./_object-create":61,"./_object-dp":62,"./_object-gopd":64,"./_object-gopn":66,"./_object-gopn-ext":65,"./_object-gops":67,"./_object-keys":70,"./_object-pie":71,"./_property-desc":73,"./_redefine":75,"./_set-to-string-tag":77,"./_shared":79,"./_to-iobject":83,"./_to-primitive":86,"./_uid":87,"./_wks":90,"./_wks-define":88,"./_wks-ext":89}],100:[function(require,module,exports){
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
},{"./_array-methods":24,"./_collection":32,"./_collection-weak":31,"./_is-object":51,"./_meta":59,"./_object-assign":60,"./_redefine":75}],101:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":30,"./_export":40}],102:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":88}],103:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":88}],104:[function(require,module,exports){
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
},{"./_global":43,"./_hide":45,"./_iterators":56,"./_wks":90,"./es6.array.iterator":93}],105:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},attached:function attached(){this.__elAttached=true},detached:function detached(){this.__elAttached=false},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire('px-map-element-ready-to-add');return true},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire('px-map-element-instance-created')}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();this.updateInst(lastOptions,nextOptions);this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error('The `createInst` method must be implemented.')},updateInst:function updateInst(){throw new Error('The `updateInst` method must be implemented.')},getInstOptions:function getInstOptions(){throw new Error('The `getInstOptions` method must be implemented.')},addInst:function addInst(){throw new Error('The `bindInst` method must be implemented.')},removeInst:function removeInst(){throw new Error('The `unbindInst` method must be implemented.')},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error('The first parameter of `extendObj` must be an object to be mutated.');for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target){if((typeof evts==='undefined'?'undefined':(0,_typeof3.default)(evts))!=='object'||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};el.on(evtReference.name,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return'style-scope px-map'}};PxMapBehavior.Element=[PxMapBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/keys":5,"babel-runtime/core-js/weak-map":8,"babel-runtime/helpers/typeof":9}],106:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GlSymbolLayerImpl={properties:{iconImage:{type:String,value:'music-15',observer:'shouldUpdateInst'},iconAllowOverlap:{type:Boolean,value:false,observer:'shouldUpdateInst'},iconSize:{type:Number,value:1,observer:'shouldUpdateInst'}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},createInst:function createInst(options){var symbolLayerInst=options;return symbolLayerInst},updateInst:function updateInst(lastOptions,nextOptions){var _this=this;console.log('gl-gj-source-update-instance');if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){(function(){var styleAttributeProperties=_this.getInstOptions().featureStyle;_this.elementInst.clearLayers();_this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this._getStyle(featureProperties,styleAttributeProperties)};_this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){_this._bindFeaturePopups()}})()}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}},getInstOptions:function getInstOptions(){var options={id:this.id,type:'symbol',source:this.source,minzoom:this.minZoom,maxzoom:this.maxZoom};options.layout={'visibility':this.hidden===true?'none':'visible','icon-image':this.iconImage,'icon-allow-overlap':this.iconAllowOverlap,'icon-size':this.iconSize};return options},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-closed',detail)}};PxMapBehavior.GlSymbolLayer=[PxMapBehavior.GlLayer,PxMapBehavior.GlSymbolLayerImpl]})();

},{"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/typeof":9}],107:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GlLayerImpl={properties:{id:{type:String},source:{type:String},hidden:{type:Boolean,value:false},minZoom:{type:Number,value:0,observer:'shouldUpdateInst'},maxZoom:{type:Number,value:22,observer:'shouldUpdateInst'},filter:{type:Array,observer:'shouldUpdateInst'},activeFeature:{type:Object,notify:true,readOnly:true,reflectToAttribute:true,value:function value(){return{}}}},attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,'px-map-element-loaded','shouldAddInst')},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;console.log('shouldAddInst on layer');PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){console.log('shouldaddinst layer true');this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){console.log('addInst on layer');console.log(this.elementInst);parent.elementInst.addLayer(this.elementInst);parent.elementInst.on('mouseenter',this.id,this._broadcastEvent.bind(this));parent.elementInst.on('mouseenter',this.id,this._broadcastActiveFeature.bind(this));parent.elementInst.on('mouseenter',this.id,this._switchPointer.bind(this));parent.elementInst.on('mouseleave',this.id,this._broadcastEvent.bind(this));parent.elementInst.on('mouseleave',this.id,this._broadcastActiveFeature.bind(this));parent.elementInst.on('mouseleave',this.id,this._switchPointer.bind(this))},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},_broadcastActiveFeature:function _broadcastActiveFeature(e){if(e.type==='mouseenter'){this._setActiveFeature(e.features[0])}else{this._setActiveFeature({})}},_broadcastEvent:function _broadcastEvent(e){var detail={emitter:this,event:e};console.log(detail);this.fire('px-map-gl-layer-'+e.type,detail)},_switchPointer:function _switchPointer(e){if(e.type==='mouseenter'){e.target.getCanvas().style.cursor='pointer'}else{e.target.getCanvas().style.cursor=''}},canAddInst:function canAddInst(){return true}};PxMapBehavior.GlLayer=[PxMapBehavior.Element,PxMapBehavior.GlLayerImpl]})();

},{}],108:[function(require,module,exports){
'use strict';var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GlGeoJSONSourceImpl={properties:{data:{type:Object,observer:'shouldUpdateInst'},id:{type:String}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},addInst:function addInst(parent){console.log('gl-gj-addInst');PxMapBehavior.GlSourceImpl.addInst.call(this,parent)},createInst:function createInst(options){console.log(options);var geoJsonSourceInst={data:options.data,id:options.id,type:options.type};return geoJsonSourceInst},updateInst:function updateInst(lastOptions,nextOptions){var _this=this;console.log('gl-gj-source-update-instance');if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){(function(){var styleAttributeProperties=_this.getInstOptions().featureStyle;_this.elementInst.clearLayers();_this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this._getStyle(featureProperties,styleAttributeProperties)};_this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){_this._bindFeaturePopups()}})()}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}},getInstOptions:function getInstOptions(){return{data:this.data||{},id:this.id||'',dataHash:(0,_stringify2.default)(this.data||{}),type:'geojson'}},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-closed',detail)}};PxMapBehavior.GlGeoJSONSource=[PxMapBehavior.GlSource,PxMapBehavior.GlGeoJSONSourceImpl]})();

},{"babel-runtime/core-js/json/stringify":2,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/typeof":9}],109:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GlSourceImpl={attached:function attached(){this.notifyInstReady(this.canAddInst());this.listen(this.parentNode,'px-map-element-loaded','shouldAddInst')},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(evt){var parent=evt.detail;console.log('shouldAddInst on source');console.log(parent);PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){console.log('shouldaddinst true');this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){console.log('addInst on source');console.log(parent);var sourceInfo={'type':this.elementInst.type};if(this.elementInst.data)sourceInfo.data=this.elementInst.data;parent.elementInst.addSource(this.elementInst.id,sourceInfo)},removeInst:function removeInst(parent){parent.removeSource(this.elementInst);this.elementInst.remove()},canAddInst:function canAddInst(){return true}};PxMapBehavior.GlSource=[PxMapBehavior.Element,PxMapBehavior.GlSourceImpl]})();

},{}],110:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _map=require('babel-runtime/core-js/map');var _map2=_interopRequireDefault(_map);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TrackMarkersImpl={properties:{fitToMarkers:{type:Boolean,value:false,observer:'_fitMapToMarkersIfSet'},fitToMarkersPadding:{type:Number,value:0.15},fitToMarkersZoom:{type:String,value:'max'}},addInst:function addInst(parent){this.listen(this,'px-map-marker-added','_handleMarkerAdded');this.listen(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');this._knownMarkers=this._knownMarkers||new _map2.default;PxMapBehavior.LeafletRootImpl.addInst.call(this)},removeInst:function removeInst(parent){this.unlisten(this,'px-map-marker-added','_handleMarkerAdded');this.unlisten(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');if(this._knownMarkers&&this._knownMarkers instanceof _map2.default){this._knownMarkers.clear()}this._knownMarkers=null;PxMapBehavior.LeafletRootImpl.removeInst.call(this)},_handleMarkerAdded:function _handleMarkerAdded(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst&&localEvt.event.detail.latLng){this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.latLng);this.listen(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._fitMapToMarkersIfSet()}},_handleMarkerRemoved:function _handleMarkerRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_handleMarkerGroupUpdated:function _handleMarkerGroupUpdated(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst){if(!knownMarker){this.listen(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved')}this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.bounds);this._fitMapToMarkersIfSet()}},_handleMarkerGroupRemoved:function _handleMarkerGroupRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_fitMapToMarkers:function _fitMapToMarkers(){this.debounce('fit-map-to-bounds',function(){if(!this._knownMarkers||!this._knownMarkers.size)return;var bounds=this._markersToBoundsWithPadding(this._knownMarkers,this.fitToMarkersPadding);if(bounds&&bounds.isValid()){var latLng=bounds.getCenter();var zoom=this._getZoomLevelForFit(bounds,this.fitToMarkersZoom,this.elementInst);this.elementInst.setView(latLng,zoom)}},10)},_markersToBoundsWithPadding:function _markersToBoundsWithPadding(markersMap,padding){if(!markersMap||!markersMap.size)return;var bounds=L.latLngBounds();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(markersMap.values()),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var value=_step.value;if(value instanceof L.LatLng||value instanceof L.LatLngBounds){bounds.extend(value)}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}if(bounds.isValid()&&typeof padding==='number'){bounds=bounds.pad(padding)}return bounds},_getZoomLevelForFit:function _getZoomLevelForFit(bounds,fitSetting,map){if(fitSetting==='min'){var zoom=map.getMinZoom()||0;return zoom}if(fitSetting==='max'){var _zoom=map.getBoundsZoom(bounds,true)-1;return _zoom}},_fitMapToMarkersIfSet:function _fitMapToMarkersIfSet(){if(!this.elementInst||!this.fitToMarkers)return;this._fitMapToMarkers()},fitMapToMarkers:function fitMapToMarkers(){if(!this.elementInst||!this._knownMarkers||!this._knownMarkers.size){return false}this._fitMapToMarkers();return true}};PxMapBehavior.LeafletRootImpl={properties:{crs:{type:Object},style:{type:String,value:'mapbox://styles/mapbox/dark-v9',notify:true},mglToken:{type:String,value:''},lat:{type:Number,value:37.7672375,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,value:-121.9584131,notify:true,observer:'shouldUpdateInst'},zoom:{type:Number,value:10,notify:true,observer:'shouldUpdateInst'},maxZoom:{type:Number,observer:'shouldUpdateInst'},minZoom:{type:Number,observer:'shouldUpdateInst'},maxBounds:{type:Array,observer:'shouldUpdateInst'},disableDragging:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableScrollZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableTouchZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableAttribution:{type:Boolean,value:false},attributionPrefix:{type:String,value:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',observer:'shouldUpdateInst'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false}},attached:function attached(){this.listen(this,'px-map-element-ready-to-add','shouldAddInst');if(this.canAddInst()){this.fire('px-map-element-ready-to-add')}},detached:function detached(){this.unlisten(this,'px-map-element-ready-to-add','shouldAddInst');this.shouldRemoveInst();this.removeInst()},shouldAddInst:function shouldAddInst(evt){if(Polymer.dom(evt).rootTarget!==this)return;PxMapBehavior.ElementImpl.shouldAddInst.call(this);this.addInst()},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng)},createInst:function createInst(options){mapboxgl.accessToken=this.mglToken;options.container=Polymer.dom(this.root).querySelector(options.container);var mapInst=new mapboxgl.Map(options);if(this.isShadyScoped()){mapInst.__addShadyScope=this.scopeSubtree.bind(this)}return mapInst},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);var zoomStartFn=this._handleZoomStart.bind(this);var zoomEndFn=this._handleZoomEnd.bind(this);var mapLoadedFn=this._handleMapLoaded.bind(this);this.bindEvents({'moveend':mapMoveFn,'zoomstart':zoomStartFn,'zoomend':zoomEndFn,'load':mapLoadedFn})},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}},getInstOptions:function getInstOptions(){var options={};options.container='#map';options.center=[this.lng,this.lat];options.style=this.style;options.zoom=this.zoom;options.minZoom=this.minZoom||0;options.maxZoom=this.maxZoom||18;options.dragPan=!this.disableDragging;options.scrollZoom=!this.disableScrollZoom;options.touchZoomRotate=!this.disableTouchZoom;options.attributionControl=!this.disableAttribution;return options},updateInst:function updateInst(lastOptions,nextOptions){if(this.latLngIsValid(nextOptions.center[0],nextOptions.center[1])&&(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom)){this._updateMapView()}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.setMinZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxBounds(nextOptions.maxBounds)}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragging.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragging.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoom.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoom.disable()}if(lastOptions.attributionPrefix!==nextOptions.attributionPrefix){this.elementInst.attributionControl.setPrefix(nextOptions.attributionPrefix)}},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce('update-map-view',function(){var _elementInst$getCente=this.elementInst.getCenter(),lat=_elementInst$getCente.lat,lng=_elementInst$getCente.lng;var zoom=this.elementInst.getZoom();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom){this.elementInst.setView([this.lat,this.lng],this.zoom)}})},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;console.log('PX-MAP CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.');return false},_handleMapLoaded:function _handleMapLoaded(){if(this.canAddInst()){console.log('px-map-element-loaded fire');this.fire('px-map-element-loaded',this)}},_handleMapMove:function _handleMapMove(){if(this.__isZooming){this.__onZoomEnd=this._handleMapMove.bind(this);return}this.debounce('handle-map-move',function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();if(this.lat!==latLng.lat||this.lng!==latLng.lng){this.set('lat',latLng.lat);this.set('lng',latLng.lng)}if(this.zoom!==zoom){this.set('zoom',zoom)}this.fire('px-map-moved',{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})})},_handleZoomStart:function _handleZoomStart(){this.__isZooming=true},_handleZoomEnd:function _handleZoomEnd(){this.__isZooming=false;if(typeof this.__onZoomEnd==='function'){this.__onZoomEnd();this.__onZoomEnd=null}},getVisibleMarkers:function getVisibleMarkers(){var mapBounds=this.elementInst.getBounds();var markers=[];this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){if(mapBounds.contains(layer.getLatLng())&&markers.indexOf(layer)===-1){markers.push(layer)}}if(layer._markerCluster){layer.eachLayer(function(marker){var parentCluster=layer.getVisibleParent(marker);if(parentCluster&&mapBounds.contains(parentCluster.getLatLng())&&marker&&markers.indexOf(marker)===-1){markers.push(marker)}})}});return markers}};PxMapBehavior.LeafletRoot=[PxMapBehavior.Element,PxMapBehavior.LeafletRootImpl,PxMapBehavior.TrackMarkersImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/map":3}]},{},[105,106,107,108,109,110]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjEwfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCI6MTF9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiOjEyfV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiOjEzfV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCI6MTR9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiOjE1fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIjoxNn1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3dlYWstbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi93ZWFrLW1hcFwiOjE3fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcbn0se1wiLi4vY29yZS1qcy9zeW1ib2xcIjo2LFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIjo3fV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xufSx7XCIuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yXCI6OTIsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo5OCxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjEwNH1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzN9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xufSx7XCIuLi9tb2R1bGVzL19jb3JlXCI6MzMsXCIuLi9tb2R1bGVzL2VzNi5tYXBcIjo5NCxcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjo5NyxcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjk4LFwiLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb25cIjoxMDEsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMDR9XSwxMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzMsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduXCI6OTV9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjozMyxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCI6OTZ9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjMzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjk3LFwiLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sXCI6OTksXCIuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIjoxMDIsXCIuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZVwiOjEwM31dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xufSx7XCIuLi8uLi9tb2R1bGVzL193a3MtZXh0XCI6ODksXCIuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo5OCxcIi4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjEwNH1dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG59LHtcIi4uL21vZHVsZXMvX2NvcmVcIjozMyxcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjo5NyxcIi4uL21vZHVsZXMvZXM2LndlYWstbWFwXCI6MTAwLFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTA0fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwxOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG59LHt9XSwyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xufSx7fV0sMjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjUxfV0sMjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHtcIi4vX2Zvci1vZlwiOjQyfV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xufSx7XCIuL190by1pbmRleFwiOjgxLFwiLi9fdG8taW9iamVjdFwiOjgzLFwiLi9fdG8tbGVuZ3RoXCI6ODR9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG59LHtcIi4vX2FycmF5LXNwZWNpZXMtY3JlYXRlXCI6MjYsXCIuL19jdHhcIjozNCxcIi4vX2lvYmplY3RcIjo0OCxcIi4vX3RvLWxlbmd0aFwiOjg0LFwiLi9fdG8tb2JqZWN0XCI6ODV9XSwyNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xufSx7XCIuL19pcy1hcnJheVwiOjUwLFwiLi9faXMtb2JqZWN0XCI6NTEsXCIuL193a3NcIjo5MH1dLDI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xufSx7XCIuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yXCI6MjV9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xufSx7XCIuL19jb2ZcIjoyOCxcIi4vX3drc1wiOjkwfV0sMjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbn0se31dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbn0se1wiLi9fYW4taW5zdGFuY2VcIjoyMCxcIi4vX2N0eFwiOjM0LFwiLi9fZGVmaW5lZFwiOjM1LFwiLi9fZGVzY3JpcHRvcnNcIjozNixcIi4vX2Zvci1vZlwiOjQyLFwiLi9faXRlci1kZWZpbmVcIjo1NCxcIi4vX2l0ZXItc3RlcFwiOjU1LFwiLi9fbWV0YVwiOjU5LFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjYxLFwiLi9fb2JqZWN0LWRwXCI6NjIsXCIuL19yZWRlZmluZS1hbGxcIjo3NCxcIi4vX3NldC1zcGVjaWVzXCI6NzZ9XSwzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xufSx7XCIuL19hcnJheS1mcm9tLWl0ZXJhYmxlXCI6MjIsXCIuL19jbGFzc29mXCI6Mjd9XSwzMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGdldFdlYWsgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWtcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6MjAsXCIuL19hbi1vYmplY3RcIjoyMSxcIi4vX2FycmF5LW1ldGhvZHNcIjoyNCxcIi4vX2Zvci1vZlwiOjQyLFwiLi9faGFzXCI6NDQsXCIuL19pcy1vYmplY3RcIjo1MSxcIi4vX21ldGFcIjo1OSxcIi4vX3JlZGVmaW5lLWFsbFwiOjc0fV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6MjAsXCIuL19hcnJheS1tZXRob2RzXCI6MjQsXCIuL19kZXNjcmlwdG9yc1wiOjM2LFwiLi9fZXhwb3J0XCI6NDAsXCIuL19mYWlsc1wiOjQxLFwiLi9fZm9yLW9mXCI6NDIsXCIuL19nbG9iYWxcIjo0MyxcIi4vX2hpZGVcIjo0NSxcIi4vX2lzLW9iamVjdFwiOjUxLFwiLi9fbWV0YVwiOjU5LFwiLi9fb2JqZWN0LWRwXCI6NjIsXCIuL19yZWRlZmluZS1hbGxcIjo3NCxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6Nzd9XSwzMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSwzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xufSx7XCIuL19hLWZ1bmN0aW9uXCI6MTh9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcbn0se1wiLi9fZmFpbHNcIjo0MX1dLDM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6NDMsXCIuL19pcy1vYmplY3RcIjo1MX1dLDM4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xufSx7fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIi4vX29iamVjdC1nb3BzXCI6NjcsXCIuL19vYmplY3Qta2V5c1wiOjcwLFwiLi9fb2JqZWN0LXBpZVwiOjcxfV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbn0se1wiLi9fY29yZVwiOjMzLFwiLi9fY3R4XCI6MzQsXCIuL19nbG9iYWxcIjo0MyxcIi4vX2hpZGVcIjo0NX1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xufSx7fV0sNDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG59LHtcIi4vX2FuLW9iamVjdFwiOjIxLFwiLi9fY3R4XCI6MzQsXCIuL19pcy1hcnJheS1pdGVyXCI6NDksXCIuL19pdGVyLWNhbGxcIjo1MixcIi4vX3RvLWxlbmd0aFwiOjg0LFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjo5MX1dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xufSx7fV0sNDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjM2LFwiLi9fb2JqZWN0LWRwXCI6NjIsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NzN9XSw0NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn0se1wiLi9fZ2xvYmFsXCI6NDN9XSw0NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjM2LFwiLi9fZG9tLWNyZWF0ZVwiOjM3LFwiLi9fZmFpbHNcIjo0MX1dLDQ4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xufSx7XCIuL19jb2ZcIjoyOH1dLDQ5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG59LHtcIi4vX2l0ZXJhdG9yc1wiOjU2LFwiLi9fd2tzXCI6OTB9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xufSx7XCIuL19jb2ZcIjoyOH1dLDUxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbn0se31dLDUyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoyMX1dLDUzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xufSx7XCIuL19oaWRlXCI6NDUsXCIuL19vYmplY3QtY3JlYXRlXCI6NjEsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NzMsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjc3LFwiLi9fd2tzXCI6OTB9XSw1NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG59LHtcIi4vX2V4cG9ydFwiOjQwLFwiLi9faGFzXCI6NDQsXCIuL19oaWRlXCI6NDUsXCIuL19pdGVyLWNyZWF0ZVwiOjUzLFwiLi9faXRlcmF0b3JzXCI6NTYsXCIuL19saWJyYXJ5XCI6NTgsXCIuL19vYmplY3QtZ3BvXCI6NjgsXCIuL19yZWRlZmluZVwiOjc1LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo3NyxcIi4vX3drc1wiOjkwfV0sNTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcbn0se31dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge307XG59LHt9XSw1NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG59LHtcIi4vX29iamVjdC1rZXlzXCI6NzAsXCIuL190by1pb2JqZWN0XCI6ODN9XSw1ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHRydWU7XG59LHt9XSw1OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbn0se1wiLi9fZmFpbHNcIjo0MSxcIi4vX2hhc1wiOjQ0LFwiLi9faXMtb2JqZWN0XCI6NTEsXCIuL19vYmplY3QtZHBcIjo2MixcIi4vX3VpZFwiOjg3fV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbn0se1wiLi9fZmFpbHNcIjo0MSxcIi4vX2lvYmplY3RcIjo0OCxcIi4vX29iamVjdC1nb3BzXCI6NjcsXCIuL19vYmplY3Qta2V5c1wiOjcwLFwiLi9fb2JqZWN0LXBpZVwiOjcxLFwiLi9fdG8tb2JqZWN0XCI6ODV9XSw2MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbn0se1wiLi9fYW4tb2JqZWN0XCI6MjEsXCIuL19kb20tY3JlYXRlXCI6MzcsXCIuL19lbnVtLWJ1Zy1rZXlzXCI6MzgsXCIuL19odG1sXCI6NDYsXCIuL19vYmplY3QtZHBzXCI6NjMsXCIuL19zaGFyZWQta2V5XCI6Nzh9XSw2MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoyMSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzYsXCIuL19pZTgtZG9tLWRlZmluZVwiOjQ3LFwiLi9fdG8tcHJpbWl0aXZlXCI6ODZ9XSw2MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjoyMSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzYsXCIuL19vYmplY3QtZHBcIjo2MixcIi4vX29iamVjdC1rZXlzXCI6NzB9XSw2NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzYsXCIuL19oYXNcIjo0NCxcIi4vX2llOC1kb20tZGVmaW5lXCI6NDcsXCIuL19vYmplY3QtcGllXCI6NzEsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NzMsXCIuL190by1pb2JqZWN0XCI6ODMsXCIuL190by1wcmltaXRpdmVcIjo4Nn1dLDY1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cbn0se1wiLi9fb2JqZWN0LWdvcG5cIjo2NixcIi4vX3RvLWlvYmplY3RcIjo4M31dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjozOCxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6Njl9XSw2NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xufSx7fV0sNjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbn0se1wiLi9faGFzXCI6NDQsXCIuL19zaGFyZWQta2V5XCI6NzgsXCIuL190by1vYmplY3RcIjo4NX1dLDY5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiLi9fYXJyYXktaW5jbHVkZXNcIjoyMyxcIi4vX2hhc1wiOjQ0LFwiLi9fc2hhcmVkLWtleVwiOjc4LFwiLi9fdG8taW9iamVjdFwiOjgzfV0sNzA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjozOCxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6Njl9XSw3MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbn0se31dLDcyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG59LHtcIi4vX2NvcmVcIjozMyxcIi4vX2V4cG9ydFwiOjQwLFwiLi9fZmFpbHNcIjo0MX1dLDczOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcbn0se31dLDc0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xufSx7XCIuL19oaWRlXCI6NDV9XSw3NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbn0se1wiLi9faGlkZVwiOjQ1fV0sNzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG59LHtcIi4vX2NvcmVcIjozMyxcIi4vX2Rlc2NyaXB0b3JzXCI6MzYsXCIuL19nbG9iYWxcIjo0MyxcIi4vX29iamVjdC1kcFwiOjYyLFwiLi9fd2tzXCI6OTB9XSw3NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG59LHtcIi4vX2hhc1wiOjQ0LFwiLi9fb2JqZWN0LWRwXCI6NjIsXCIuL193a3NcIjo5MH1dLDc4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xufSx7XCIuL19zaGFyZWRcIjo3OSxcIi4vX3VpZFwiOjg3fV0sNzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6NDN9XSw4MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjM1LFwiLi9fdG8taW50ZWdlclwiOjgyfV0sODE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbn0se1wiLi9fdG8taW50ZWdlclwiOjgyfV0sODI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xufSx7fV0sODM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjM1LFwiLi9faW9iamVjdFwiOjQ4fV0sODQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG59LHtcIi4vX3RvLWludGVnZXJcIjo4Mn1dLDg1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjM1fV0sODY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjUxfV0sODc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG59LHt9XSw4ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcbn0se1wiLi9fY29yZVwiOjMzLFwiLi9fZ2xvYmFsXCI6NDMsXCIuL19saWJyYXJ5XCI6NTgsXCIuL19vYmplY3QtZHBcIjo2MixcIi4vX3drcy1leHRcIjo4OX1dLDg5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xufSx7XCIuL193a3NcIjo5MH1dLDkwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xufSx7XCIuL19nbG9iYWxcIjo0MyxcIi4vX3NoYXJlZFwiOjc5LFwiLi9fdWlkXCI6ODd9XSw5MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbn0se1wiLi9fY2xhc3NvZlwiOjI3LFwiLi9fY29yZVwiOjMzLFwiLi9faXRlcmF0b3JzXCI6NTYsXCIuL193a3NcIjo5MH1dLDkyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MjEsXCIuL19jb3JlXCI6MzMsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjkxfV0sOTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbn0se1wiLi9fYWRkLXRvLXVuc2NvcGFibGVzXCI6MTksXCIuL19pdGVyLWRlZmluZVwiOjU0LFwiLi9faXRlci1zdGVwXCI6NTUsXCIuL19pdGVyYXRvcnNcIjo1NixcIi4vX3RvLWlvYmplY3RcIjo4M31dLDk0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG59LHtcIi4vX2NvbGxlY3Rpb25cIjozMixcIi4vX2NvbGxlY3Rpb24tc3Ryb25nXCI6Mjl9XSw5NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcbn0se1wiLi9fZXhwb3J0XCI6NDAsXCIuL19vYmplY3QtYXNzaWduXCI6NjB9XSw5NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiLi9fb2JqZWN0LWtleXNcIjo3MCxcIi4vX29iamVjdC1zYXBcIjo3MixcIi4vX3RvLW9iamVjdFwiOjg1fV0sOTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XSw5ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xufSx7XCIuL19pdGVyLWRlZmluZVwiOjU0LFwiLi9fc3RyaW5nLWF0XCI6ODB9XSw5OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MjEsXCIuL19kZXNjcmlwdG9yc1wiOjM2LFwiLi9fZW51bS1rZXlzXCI6MzksXCIuL19leHBvcnRcIjo0MCxcIi4vX2ZhaWxzXCI6NDEsXCIuL19nbG9iYWxcIjo0MyxcIi4vX2hhc1wiOjQ0LFwiLi9faGlkZVwiOjQ1LFwiLi9faXMtYXJyYXlcIjo1MCxcIi4vX2tleW9mXCI6NTcsXCIuL19saWJyYXJ5XCI6NTgsXCIuL19tZXRhXCI6NTksXCIuL19vYmplY3QtY3JlYXRlXCI6NjEsXCIuL19vYmplY3QtZHBcIjo2MixcIi4vX29iamVjdC1nb3BkXCI6NjQsXCIuL19vYmplY3QtZ29wblwiOjY2LFwiLi9fb2JqZWN0LWdvcG4tZXh0XCI6NjUsXCIuL19vYmplY3QtZ29wc1wiOjY3LFwiLi9fb2JqZWN0LWtleXNcIjo3MCxcIi4vX29iamVjdC1waWVcIjo3MSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo3MyxcIi4vX3JlZGVmaW5lXCI6NzUsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjc3LFwiLi9fc2hhcmVkXCI6NzksXCIuL190by1pb2JqZWN0XCI6ODMsXCIuL190by1wcmltaXRpdmVcIjo4NixcIi4vX3VpZFwiOjg3LFwiLi9fd2tzXCI6OTAsXCIuL193a3MtZGVmaW5lXCI6ODgsXCIuL193a3MtZXh0XCI6ODl9XSwxMDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIHJlZGVmaW5lICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBtZXRhICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBhc3NpZ24gICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJylcbiAgLCB3ZWFrICAgICAgICAgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZ2V0V2VhayAgICAgID0gbWV0YS5nZXRXZWFrXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZVxuICAsIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmVcbiAgLCB0bXAgICAgICAgICAgPSB7fVxuICAsIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICBpZihpc09iamVjdChrZXkpKXtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnV2Vha01hcCcsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIpO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcbiAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG4gICAgICAgIGlmKCF0aGlzLl9mKXRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXA7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG59LHtcIi4vX2FycmF5LW1ldGhvZHNcIjoyNCxcIi4vX2NvbGxlY3Rpb25cIjozMixcIi4vX2NvbGxlY3Rpb24td2Vha1wiOjMxLFwiLi9faXMtb2JqZWN0XCI6NTEsXCIuL19tZXRhXCI6NTksXCIuL19vYmplY3QtYXNzaWduXCI6NjAsXCIuL19yZWRlZmluZVwiOjc1fV0sMTAxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xufSx7XCIuL19jb2xsZWN0aW9uLXRvLWpzb25cIjozMCxcIi4vX2V4cG9ydFwiOjQwfV0sMTAyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xufSx7XCIuL193a3MtZGVmaW5lXCI6ODh9XSwxMDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG59LHtcIi4vX3drcy1kZWZpbmVcIjo4OH1dLDEwNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG59LHtcIi4vX2dsb2JhbFwiOjQzLFwiLi9faGlkZVwiOjQ1LFwiLi9faXRlcmF0b3JzXCI6NTYsXCIuL193a3NcIjo5MCxcIi4vZXM2LmFycmF5Lml0ZXJhdG9yXCI6OTN9XSwxMDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfZ2V0SXRlcmF0b3IyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTt2YXIgX2dldEl0ZXJhdG9yMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbD17YmVmb3JlUmVnaXN0ZXI6ZnVuY3Rpb24gYmVmb3JlUmVnaXN0ZXIoKXt0aGlzLmVsZW1lbnRJbnN0PW51bGx9LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9dHJ1ZX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9fZWxBdHRhY2hlZD1mYWxzZX0sbm90aWZ5SW5zdFJlYWR5OmZ1bmN0aW9uIG5vdGlmeUluc3RSZWFkeSgpe3ZhciBpc1JlYWR5PWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp0cnVlO2lmKCFpc1JlYWR5KXJldHVybiBmYWxzZTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpO3JldHVybiB0cnVlfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCl7dmFyIG9wdGlvbnM9dGhpcy5fX2luaXRpYWxPcHRpb25zPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKTt0aGlzLmVsZW1lbnRJbnN0PXRoaXMuY3JlYXRlSW5zdChvcHRpb25zKTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LWluc3RhbmNlLWNyZWF0ZWQnKX10aGlzLl9faW5zdEV2ZW50cz10aGlzLl9faW5zdEV2ZW50c3x8W107dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHR9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdCgpe3RoaXMudW5iaW5kQWxsRXZlbnRzKHRoaXMuX19pbnN0RXZlbnRzLHRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXApO3RoaXMuX19pbnN0RXZlbnRzPW51bGw7dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD1udWxsfSxzaG91bGRVcGRhdGVJbnN0OmZ1bmN0aW9uIHNob3VsZFVwZGF0ZUluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCYmdGhpcy5fX2VsQXR0YWNoZWQmJnRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3ZhciBsYXN0T3B0aW9ucz10aGlzLl9fbGFzdE9wdGlvbnN8fHRoaXMuX19pbml0aWFsT3B0aW9uczt2YXIgbmV4dE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMudXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyk7dGhpcy5fX2xhc3RPcHRpb25zPW5leHRPcHRpb25zfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3JlYXRlSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZ2V0SW5zdE9wdGlvbnNgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgYmluZEluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdW5iaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LGV4dGVuZE9iajpmdW5jdGlvbiBleHRlbmRPYmoob2JqKXtpZighb2JqfHwhKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIGBleHRlbmRPYmpgIG11c3QgYmUgYW4gb2JqZWN0IHRvIGJlIG11dGF0ZWQuJyk7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscHJvcGVydGllcz1BcnJheShfbGVuPjE/X2xlbi0xOjApLF9rZXk9MTtfa2V5PF9sZW47X2tleSsrKXtwcm9wZXJ0aWVzW19rZXktMV09YXJndW1lbnRzW19rZXldfWlmKHByb3BlcnRpZXMubGVuZ3RoKXtfYXNzaWduMi5kZWZhdWx0LmFwcGx5KE9iamVjdCxbb2JqXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiBvYmp9LGFkZFByb3BlcnRpZXM6ZnVuY3Rpb24gYWRkUHJvcGVydGllcygpe3RoaXMucHJvcGVydGllcz10aGlzLnByb3BlcnRpZXN8fHt9O2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4yKSxfa2V5Mj0wO19rZXkyPF9sZW4yO19rZXkyKyspe3Byb3BlcnRpZXNbX2tleTJdPWFyZ3VtZW50c1tfa2V5Ml19aWYocHJvcGVydGllcy5sZW5ndGgpe3RoaXMuZXh0ZW5kLmFwcGx5KHRoaXMsW3RoaXMucHJvcGVydGllc10uY29uY2F0KHByb3BlcnRpZXMpKX1yZXR1cm4gdGhpcy5wcm9wZXJ0aWVzfSxiaW5kRXZlbnRzOmZ1bmN0aW9uIGJpbmRFdmVudHMoZXZ0cyx0YXJnZXQpe2lmKCh0eXBlb2YgZXZ0cz09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOigwLF90eXBlb2YzLmRlZmF1bHQpKGV2dHMpKSE9PSdvYmplY3QnfHwhKDAsX2tleXMyLmRlZmF1bHQpKGV2dHMpLmxlbmd0aClyZXR1cm47dmFyIGVsPXRhcmdldHx8dGhpcy5lbGVtZW50SW5zdDtpZighZWx8fCFlbC5vbilyZXR1cm47dmFyIGJvdW5kRXZ0cz10aGlzLl9faW5zdEV2ZW50czt2YXIgYm91bmRFdnRFbHM9dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcDtmb3IodmFyIGV2dE5hbWUgaW4gZXZ0cyl7dmFyIGV2dFJlZmVyZW5jZT17bmFtZTpldnROYW1lLGZuOmV2dHNbZXZ0TmFtZV19O2VsLm9uKGV2dFJlZmVyZW5jZS5uYW1lLGV2dFJlZmVyZW5jZS5mbik7Ym91bmRFdnRzLnB1c2goZXZ0UmVmZXJlbmNlKTtib3VuZEV2dEVscy5zZXQoZXZ0UmVmZXJlbmNlLGVsKX19LHVuYmluZEFsbEV2ZW50czpmdW5jdGlvbiB1bmJpbmRBbGxFdmVudHMoYm91bmRFdnRzLGJvdW5kRXZ0RWxzKXtpZighYm91bmRFdnRzfHwhYm91bmRFdnRzLmxlbmd0aHx8IWJvdW5kRXZ0RWxzKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGJvdW5kRXZ0cyksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBldnQ9X3N0ZXAudmFsdWU7dmFyIGVsPWJvdW5kRXZ0RWxzLmdldChldnQpO2lmKCFlbHx8IWVsLm9mZiljb250aW51ZTt2YXIgbmFtZT1ldnQubmFtZSxmbj1ldnQuZm47ZWwub2ZmKG5hbWUsZm4pO2JvdW5kRXZ0RWxzLmRlbGV0ZShldnQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxpc1NoYWR5U2NvcGVkOmZ1bmN0aW9uIGlzU2hhZHlTY29wZWQoKXtyZXR1cm4hUG9seW1lci5TZXR0aW5ncy51c2VOYXRpdmVTaGFkb3d9LGdldFNoYWR5U2NvcGU6ZnVuY3Rpb24gZ2V0U2hhZHlTY29wZSgpe3JldHVybidzdHlsZS1zY29wZSBweC1tYXAnfX07UHhNYXBCZWhhdmlvci5FbGVtZW50PVtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjQsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwXCI6OCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjo5fV0sMTA2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkdsU3ltYm9sTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOntpY29uSW1hZ2U6e3R5cGU6U3RyaW5nLHZhbHVlOidtdXNpYy0xNScsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxpY29uQWxsb3dPdmVybGFwOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxpY29uU2l6ZTp7dHlwZTpOdW1iZXIsdmFsdWU6MSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSx1cGRhdGU6ZnVuY3Rpb24gdXBkYXRlKCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuc2hvdWxkVXBkYXRlSW5zdCgpfSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdGhpcy5kYXRhJiYoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpPT09J29iamVjdCcmJigwLF9rZXlzMi5kZWZhdWx0KSh0aGlzLmRhdGEpLmxlbmd0aH0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3ZhciBzeW1ib2xMYXllckluc3Q9b3B0aW9ucztyZXR1cm4gc3ltYm9sTGF5ZXJJbnN0fSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciBfdGhpcz10aGlzO2NvbnNvbGUubG9nKCdnbC1nai1zb3VyY2UtdXBkYXRlLWluc3RhbmNlJyk7aWYoISgwLF9rZXlzMi5kZWZhdWx0KShuZXh0T3B0aW9ucy5kYXRhKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKX1lbHNlIGlmKCgwLF9rZXlzMi5kZWZhdWx0KShuZXh0T3B0aW9ucy5kYXRhKS5sZW5ndGgmJihsYXN0T3B0aW9ucy5kYXRhSGFzaCE9PW5leHRPcHRpb25zLmRhdGFIYXNofHxsYXN0T3B0aW9ucy5mZWF0dXJlU3R5bGVIYXNoIT09bmV4dE9wdGlvbnMuZmVhdHVyZVN0eWxlSGFzaCkpeyhmdW5jdGlvbigpe3ZhciBzdHlsZUF0dHJpYnV0ZVByb3BlcnRpZXM9X3RoaXMuZ2V0SW5zdE9wdGlvbnMoKS5mZWF0dXJlU3R5bGU7X3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKTtfdGhpcy5lbGVtZW50SW5zdC5vcHRpb25zLnN0eWxlPWZ1bmN0aW9uKGZlYXR1cmUpe3ZhciBmZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXMuc3R5bGV8fHt9O3JldHVybiBfdGhpcy5fZ2V0U3R5bGUoZmVhdHVyZVByb3BlcnRpZXMsc3R5bGVBdHRyaWJ1dGVQcm9wZXJ0aWVzKX07X3RoaXMuZWxlbWVudEluc3QuYWRkRGF0YShuZXh0T3B0aW9ucy5kYXRhKTtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe190aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpfX0pKCl9ZWxzZSBpZihsYXN0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMhPT1uZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe2lmKG5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl0aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpO2lmKCFuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpdGhpcy5fdW5iaW5kRmVhdHVyZVBvcHVwcygpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz17aWQ6dGhpcy5pZCx0eXBlOidzeW1ib2wnLHNvdXJjZTp0aGlzLnNvdXJjZSxtaW56b29tOnRoaXMubWluWm9vbSxtYXh6b29tOnRoaXMubWF4Wm9vbX07b3B0aW9ucy5sYXlvdXQ9eyd2aXNpYmlsaXR5Jzp0aGlzLmhpZGRlbj09PXRydWU/J25vbmUnOid2aXNpYmxlJywnaWNvbi1pbWFnZSc6dGhpcy5pY29uSW1hZ2UsJ2ljb24tYWxsb3ctb3ZlcmxhcCc6dGhpcy5pY29uQWxsb3dPdmVybGFwLCdpY29uLXNpemUnOnRoaXMuaWNvblNpemV9O3JldHVybiBvcHRpb25zfSxfaGFuZGxlRmVhdHVyZUFkZGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlQWRkZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub24oJ2NsaWNrJyx0aGlzLl9oYW5kbGVGZWF0dXJlVGFwcGVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBvcGVuJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQuYmluZCh0aGlzKSk7ZXZ0LmxheWVyLm9uKCdwb3B1cGNsb3NlJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQuYmluZCh0aGlzKSk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtYWRkZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUmVtb3ZlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVJlbW92ZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub2ZmKCk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcmVtb3ZlZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVUYXBwZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVUYXBwZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWxheWVyLWdlb2pzb24tZmVhdHVyZS10YXBwZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cE9wZW5lZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLW9wZW5lZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcG9wdXAtY2xvc2VkJyxkZXRhaWwpfX07UHhNYXBCZWhhdmlvci5HbFN5bWJvbExheWVyPVtQeE1hcEJlaGF2aW9yLkdsTGF5ZXIsUHhNYXBCZWhhdmlvci5HbFN5bWJvbExheWVySW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6OX1dLDEwNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkdsTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOntpZDp7dHlwZTpTdHJpbmd9LHNvdXJjZTp7dHlwZTpTdHJpbmd9LGhpZGRlbjp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxtaW5ab29tOnt0eXBlOk51bWJlcix2YWx1ZTowLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWF4Wm9vbTp7dHlwZTpOdW1iZXIsdmFsdWU6MjIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxmaWx0ZXI6e3R5cGU6QXJyYXksb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxhY3RpdmVGZWF0dXJlOnt0eXBlOk9iamVjdCxub3RpZnk6dHJ1ZSxyZWFkT25seTp0cnVlLHJlZmxlY3RUb0F0dHJpYnV0ZTp0cnVlLHZhbHVlOmZ1bmN0aW9uIHZhbHVlKCl7cmV0dXJue319fX0sYXR0YWNoZWQ6ZnVuY3Rpb24gYXR0YWNoZWQoKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSk7dGhpcy5saXN0ZW4odGhpcy5wYXJlbnROb2RlLCdweC1tYXAtZWxlbWVudC1sb2FkZWQnLCdzaG91bGRBZGRJbnN0Jyl9LGRldGFjaGVkOmZ1bmN0aW9uIGRldGFjaGVkKCl7dGhpcy5zaG91bGRSZW1vdmVJbnN0KCl9LHNob3VsZEFkZEluc3Q6ZnVuY3Rpb24gc2hvdWxkQWRkSW5zdChldnQpe3ZhciBwYXJlbnQ9ZXZ0LmRldGFpbDtjb25zb2xlLmxvZygnc2hvdWxkQWRkSW5zdCBvbiBsYXllcicpO1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkQWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KTtpZih0aGlzLmVsZW1lbnRJbnN0JiZwYXJlbnQpe2NvbnNvbGUubG9nKCdzaG91bGRhZGRpbnN0IGxheWVyIHRydWUnKTt0aGlzLmFkZEluc3QocGFyZW50KX07fSxzaG91bGRSZW1vdmVJbnN0OmZ1bmN0aW9uIHNob3VsZFJlbW92ZUluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZFJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCl7dGhpcy5yZW1vdmVJbnN0KHBhcmVudD9wYXJlbnQ6dW5kZWZpbmVkKX07fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtjb25zb2xlLmxvZygnYWRkSW5zdCBvbiBsYXllcicpO2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudEluc3QpO3BhcmVudC5lbGVtZW50SW5zdC5hZGRMYXllcih0aGlzLmVsZW1lbnRJbnN0KTtwYXJlbnQuZWxlbWVudEluc3Qub24oJ21vdXNlZW50ZXInLHRoaXMuaWQsdGhpcy5fYnJvYWRjYXN0RXZlbnQuYmluZCh0aGlzKSk7cGFyZW50LmVsZW1lbnRJbnN0Lm9uKCdtb3VzZWVudGVyJyx0aGlzLmlkLHRoaXMuX2Jyb2FkY2FzdEFjdGl2ZUZlYXR1cmUuYmluZCh0aGlzKSk7cGFyZW50LmVsZW1lbnRJbnN0Lm9uKCdtb3VzZWVudGVyJyx0aGlzLmlkLHRoaXMuX3N3aXRjaFBvaW50ZXIuYmluZCh0aGlzKSk7cGFyZW50LmVsZW1lbnRJbnN0Lm9uKCdtb3VzZWxlYXZlJyx0aGlzLmlkLHRoaXMuX2Jyb2FkY2FzdEV2ZW50LmJpbmQodGhpcykpO3BhcmVudC5lbGVtZW50SW5zdC5vbignbW91c2VsZWF2ZScsdGhpcy5pZCx0aGlzLl9icm9hZGNhc3RBY3RpdmVGZWF0dXJlLmJpbmQodGhpcykpO3BhcmVudC5lbGVtZW50SW5zdC5vbignbW91c2VsZWF2ZScsdGhpcy5pZCx0aGlzLl9zd2l0Y2hQb2ludGVyLmJpbmQodGhpcykpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXtwYXJlbnQucmVtb3ZlU291cmNlKHRoaXMuZWxlbWVudEluc3QpO3RoaXMuZWxlbWVudEluc3QucmVtb3ZlKCl9LF9icm9hZGNhc3RBY3RpdmVGZWF0dXJlOmZ1bmN0aW9uIF9icm9hZGNhc3RBY3RpdmVGZWF0dXJlKGUpe2lmKGUudHlwZT09PSdtb3VzZWVudGVyJyl7dGhpcy5fc2V0QWN0aXZlRmVhdHVyZShlLmZlYXR1cmVzWzBdKX1lbHNle3RoaXMuX3NldEFjdGl2ZUZlYXR1cmUoe30pfX0sX2Jyb2FkY2FzdEV2ZW50OmZ1bmN0aW9uIF9icm9hZGNhc3RFdmVudChlKXt2YXIgZGV0YWlsPXtlbWl0dGVyOnRoaXMsZXZlbnQ6ZX07Y29uc29sZS5sb2coZGV0YWlsKTt0aGlzLmZpcmUoJ3B4LW1hcC1nbC1sYXllci0nK2UudHlwZSxkZXRhaWwpfSxfc3dpdGNoUG9pbnRlcjpmdW5jdGlvbiBfc3dpdGNoUG9pbnRlcihlKXtpZihlLnR5cGU9PT0nbW91c2VlbnRlcicpe2UudGFyZ2V0LmdldENhbnZhcygpLnN0eWxlLmN1cnNvcj0ncG9pbnRlcid9ZWxzZXtlLnRhcmdldC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3I9Jyd9fSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdHJ1ZX19O1B4TWFwQmVoYXZpb3IuR2xMYXllcj1bUHhNYXBCZWhhdmlvci5FbGVtZW50LFB4TWFwQmVoYXZpb3IuR2xMYXllckltcGxdfSkoKTtcblxufSx7fV0sMTA4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX3N0cmluZ2lmeT1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTt2YXIgX3N0cmluZ2lmeTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkdsR2VvSlNPTlNvdXJjZUltcGw9e3Byb3BlcnRpZXM6e2RhdGE6e3R5cGU6T2JqZWN0LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30saWQ6e3R5cGU6U3RyaW5nfX0sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLnNob3VsZFVwZGF0ZUluc3QoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMuZGF0YSYmKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKT09PSdvYmplY3QnJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe2NvbnNvbGUubG9nKCdnbC1nai1hZGRJbnN0Jyk7UHhNYXBCZWhhdmlvci5HbFNvdXJjZUltcGwuYWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe2NvbnNvbGUubG9nKG9wdGlvbnMpO3ZhciBnZW9Kc29uU291cmNlSW5zdD17ZGF0YTpvcHRpb25zLmRhdGEsaWQ6b3B0aW9ucy5pZCx0eXBlOm9wdGlvbnMudHlwZX07cmV0dXJuIGdlb0pzb25Tb3VyY2VJbnN0fSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciBfdGhpcz10aGlzO2NvbnNvbGUubG9nKCdnbC1nai1zb3VyY2UtdXBkYXRlLWluc3RhbmNlJyk7aWYoISgwLF9rZXlzMi5kZWZhdWx0KShuZXh0T3B0aW9ucy5kYXRhKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKX1lbHNlIGlmKCgwLF9rZXlzMi5kZWZhdWx0KShuZXh0T3B0aW9ucy5kYXRhKS5sZW5ndGgmJihsYXN0T3B0aW9ucy5kYXRhSGFzaCE9PW5leHRPcHRpb25zLmRhdGFIYXNofHxsYXN0T3B0aW9ucy5mZWF0dXJlU3R5bGVIYXNoIT09bmV4dE9wdGlvbnMuZmVhdHVyZVN0eWxlSGFzaCkpeyhmdW5jdGlvbigpe3ZhciBzdHlsZUF0dHJpYnV0ZVByb3BlcnRpZXM9X3RoaXMuZ2V0SW5zdE9wdGlvbnMoKS5mZWF0dXJlU3R5bGU7X3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKTtfdGhpcy5lbGVtZW50SW5zdC5vcHRpb25zLnN0eWxlPWZ1bmN0aW9uKGZlYXR1cmUpe3ZhciBmZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXMuc3R5bGV8fHt9O3JldHVybiBfdGhpcy5fZ2V0U3R5bGUoZmVhdHVyZVByb3BlcnRpZXMsc3R5bGVBdHRyaWJ1dGVQcm9wZXJ0aWVzKX07X3RoaXMuZWxlbWVudEluc3QuYWRkRGF0YShuZXh0T3B0aW9ucy5kYXRhKTtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe190aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpfX0pKCl9ZWxzZSBpZihsYXN0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMhPT1uZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe2lmKG5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl0aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpO2lmKCFuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpdGhpcy5fdW5iaW5kRmVhdHVyZVBvcHVwcygpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57ZGF0YTp0aGlzLmRhdGF8fHt9LGlkOnRoaXMuaWR8fCcnLGRhdGFIYXNoOigwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMuZGF0YXx8e30pLHR5cGU6J2dlb2pzb24nfX0sX2hhbmRsZUZlYXR1cmVBZGRlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZUFkZGVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9uKCdjbGljaycsdGhpcy5faGFuZGxlRmVhdHVyZVRhcHBlZC5iaW5kKHRoaXMpKTtldnQubGF5ZXIub24oJ3BvcHVwb3BlbicsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBjbG9zZScsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkLmJpbmQodGhpcykpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLWFkZGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVSZW1vdmVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9mZigpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXJlbW92ZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlVGFwcGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlVGFwcGVkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtdGFwcGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWxheWVyLWdlb2pzb24tZmVhdHVyZS1wb3B1cC1vcGVuZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLWNsb3NlZCcsZGV0YWlsKX19O1B4TWFwQmVoYXZpb3IuR2xHZW9KU09OU291cmNlPVtQeE1hcEJlaGF2aW9yLkdsU291cmNlLFB4TWFwQmVoYXZpb3IuR2xHZW9KU09OU291cmNlSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiOjIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjl9XSwxMDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5HbFNvdXJjZUltcGw9e2F0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5ub3RpZnlJbnN0UmVhZHkodGhpcy5jYW5BZGRJbnN0KCkpO3RoaXMubGlzdGVuKHRoaXMucGFyZW50Tm9kZSwncHgtbWFwLWVsZW1lbnQtbG9hZGVkJywnc2hvdWxkQWRkSW5zdCcpfSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoZXZ0KXt2YXIgcGFyZW50PWV2dC5kZXRhaWw7Y29uc29sZS5sb2coJ3Nob3VsZEFkZEluc3Qgb24gc291cmNlJyk7Y29uc29sZS5sb2cocGFyZW50KTtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCYmcGFyZW50KXtjb25zb2xlLmxvZygnc2hvdWxkYWRkaW5zdCB0cnVlJyk7dGhpcy5hZGRJbnN0KHBhcmVudCl9O30sc2hvdWxkUmVtb3ZlSW5zdDpmdW5jdGlvbiBzaG91bGRSZW1vdmVJbnN0KHBhcmVudCl7UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRSZW1vdmVJbnN0LmNhbGwodGhpcyxwYXJlbnQpO2lmKHRoaXMuZWxlbWVudEluc3Qpe3RoaXMucmVtb3ZlSW5zdChwYXJlbnQ/cGFyZW50OnVuZGVmaW5lZCl9O30sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7Y29uc29sZS5sb2coJ2FkZEluc3Qgb24gc291cmNlJyk7Y29uc29sZS5sb2cocGFyZW50KTt2YXIgc291cmNlSW5mbz17J3R5cGUnOnRoaXMuZWxlbWVudEluc3QudHlwZX07aWYodGhpcy5lbGVtZW50SW5zdC5kYXRhKXNvdXJjZUluZm8uZGF0YT10aGlzLmVsZW1lbnRJbnN0LmRhdGE7cGFyZW50LmVsZW1lbnRJbnN0LmFkZFNvdXJjZSh0aGlzLmVsZW1lbnRJbnN0LmlkLHNvdXJjZUluZm8pfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXtwYXJlbnQucmVtb3ZlU291cmNlKHRoaXMuZWxlbWVudEluc3QpO3RoaXMuZWxlbWVudEluc3QucmVtb3ZlKCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0cnVlfX07UHhNYXBCZWhhdmlvci5HbFNvdXJjZT1bUHhNYXBCZWhhdmlvci5FbGVtZW50LFB4TWFwQmVoYXZpb3IuR2xTb3VyY2VJbXBsXX0pKCk7XG5cbn0se31dLDExMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO3ZhciBfZ2V0SXRlcmF0b3IzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7dmFyIF9tYXA9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcCcpO3ZhciBfbWFwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfX0oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuVHJhY2tNYXJrZXJzSW1wbD17cHJvcGVydGllczp7Zml0VG9NYXJrZXJzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J19maXRNYXBUb01hcmtlcnNJZlNldCd9LGZpdFRvTWFya2Vyc1BhZGRpbmc6e3R5cGU6TnVtYmVyLHZhbHVlOjAuMTV9LGZpdFRvTWFya2Vyc1pvb206e3R5cGU6U3RyaW5nLHZhbHVlOidtYXgnfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1hZGRlZCcsJ19oYW5kbGVNYXJrZXJBZGRlZCcpO3RoaXMubGlzdGVuKHRoaXMsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtZmVhdHVyZXMtY2hhbmdlZCcsJ19oYW5kbGVNYXJrZXJHcm91cFVwZGF0ZWQnKTt0aGlzLl9rbm93bk1hcmtlcnM9dGhpcy5fa25vd25NYXJrZXJzfHxuZXcgX21hcDIuZGVmYXVsdDtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbC5hZGRJbnN0LmNhbGwodGhpcyl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe3RoaXMudW5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1hZGRlZCcsJ19oYW5kbGVNYXJrZXJBZGRlZCcpO3RoaXMudW5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1ncm91cC1mZWF0dXJlcy1jaGFuZ2VkJywnX2hhbmRsZU1hcmtlckdyb3VwVXBkYXRlZCcpO2lmKHRoaXMuX2tub3duTWFya2VycyYmdGhpcy5fa25vd25NYXJrZXJzIGluc3RhbmNlb2YgX21hcDIuZGVmYXVsdCl7dGhpcy5fa25vd25NYXJrZXJzLmNsZWFyKCl9dGhpcy5fa25vd25NYXJrZXJzPW51bGw7UHhNYXBCZWhhdmlvci5MZWFmbGV0Um9vdEltcGwucmVtb3ZlSW5zdC5jYWxsKHRoaXMpfSxfaGFuZGxlTWFya2VyQWRkZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlckFkZGVkKGV2dCl7aWYoIXRoaXMuX2tub3duTWFya2VycylyZXR1cm47dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7aWYobG9jYWxFdnQucm9vdFRhcmdldCYmbG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdCYmbG9jYWxFdnQuZXZlbnQuZGV0YWlsLmxhdExuZyl7dGhpcy5fa25vd25NYXJrZXJzLnNldChsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0LGxvY2FsRXZ0LmV2ZW50LmRldGFpbC5sYXRMbmcpO3RoaXMubGlzdGVuKGxvY2FsRXZ0LnJvb3RUYXJnZXQsJ3B4LW1hcC1tYXJrZXItcmVtb3ZlZCcsJ19oYW5kbGVNYXJrZXJSZW1vdmVkJyk7dGhpcy5fZml0TWFwVG9NYXJrZXJzSWZTZXQoKX19LF9oYW5kbGVNYXJrZXJSZW1vdmVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJSZW1vdmVkKGV2dCl7aWYoIXRoaXMuX2tub3duTWFya2VycylyZXR1cm47dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7dmFyIGtub3duTWFya2VyPXRoaXMuX2tub3duTWFya2Vycy5oYXMobG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdHx8bnVsbCk7aWYoa25vd25NYXJrZXIpe3RoaXMudW5saXN0ZW4obG9jYWxFdnQucm9vdFRhcmdldCwncHgtbWFwLW1hcmtlci1yZW1vdmVkJywnX2hhbmRsZU1hcmtlclJlbW92ZWQnKTt0aGlzLl9rbm93bk1hcmtlcnMuZGVsZXRlKGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QpfX0sX2hhbmRsZU1hcmtlckdyb3VwVXBkYXRlZDpmdW5jdGlvbiBfaGFuZGxlTWFya2VyR3JvdXBVcGRhdGVkKGV2dCl7aWYoIXRoaXMuX2tub3duTWFya2VycylyZXR1cm47dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7dmFyIGtub3duTWFya2VyPXRoaXMuX2tub3duTWFya2Vycy5oYXMobG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdHx8bnVsbCk7aWYobG9jYWxFdnQucm9vdFRhcmdldCYmbG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdCl7aWYoIWtub3duTWFya2VyKXt0aGlzLmxpc3Rlbihsb2NhbEV2dC5yb290VGFyZ2V0LCdweC1tYXAtbWFya2VyLWdyb3VwLXJlbW92ZWQnLCdfaGFuZGxlTWFya2VyR3JvdXBSZW1vdmVkJyl9dGhpcy5fa25vd25NYXJrZXJzLnNldChsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0LGxvY2FsRXZ0LmV2ZW50LmRldGFpbC5ib3VuZHMpO3RoaXMuX2ZpdE1hcFRvTWFya2Vyc0lmU2V0KCl9fSxfaGFuZGxlTWFya2VyR3JvdXBSZW1vdmVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTt2YXIga25vd25NYXJrZXI9dGhpcy5fa25vd25NYXJrZXJzLmhhcyhsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0fHxudWxsKTtpZihrbm93bk1hcmtlcil7dGhpcy51bmxpc3Rlbihsb2NhbEV2dC5yb290VGFyZ2V0LCdweC1tYXAtbWFya2VyLWdyb3VwLXJlbW92ZWQnLCdfaGFuZGxlTWFya2VyR3JvdXBSZW1vdmVkJyk7dGhpcy5fa25vd25NYXJrZXJzLmRlbGV0ZShsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0KX19LF9maXRNYXBUb01hcmtlcnM6ZnVuY3Rpb24gX2ZpdE1hcFRvTWFya2Vycygpe3RoaXMuZGVib3VuY2UoJ2ZpdC1tYXAtdG8tYm91bmRzJyxmdW5jdGlvbigpe2lmKCF0aGlzLl9rbm93bk1hcmtlcnN8fCF0aGlzLl9rbm93bk1hcmtlcnMuc2l6ZSlyZXR1cm47dmFyIGJvdW5kcz10aGlzLl9tYXJrZXJzVG9Cb3VuZHNXaXRoUGFkZGluZyh0aGlzLl9rbm93bk1hcmtlcnMsdGhpcy5maXRUb01hcmtlcnNQYWRkaW5nKTtpZihib3VuZHMmJmJvdW5kcy5pc1ZhbGlkKCkpe3ZhciBsYXRMbmc9Ym91bmRzLmdldENlbnRlcigpO3ZhciB6b29tPXRoaXMuX2dldFpvb21MZXZlbEZvckZpdChib3VuZHMsdGhpcy5maXRUb01hcmtlcnNab29tLHRoaXMuZWxlbWVudEluc3QpO3RoaXMuZWxlbWVudEluc3Quc2V0VmlldyhsYXRMbmcsem9vbSl9fSwxMCl9LF9tYXJrZXJzVG9Cb3VuZHNXaXRoUGFkZGluZzpmdW5jdGlvbiBfbWFya2Vyc1RvQm91bmRzV2l0aFBhZGRpbmcobWFya2Vyc01hcCxwYWRkaW5nKXtpZighbWFya2Vyc01hcHx8IW1hcmtlcnNNYXAuc2l6ZSlyZXR1cm47dmFyIGJvdW5kcz1MLmxhdExuZ0JvdW5kcygpO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWU7dmFyIF9kaWRJdGVyYXRvckVycm9yPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcj11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yPSgwLF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkobWFya2Vyc01hcC52YWx1ZXMoKSksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciB2YWx1ZT1fc3RlcC52YWx1ZTtpZih2YWx1ZSBpbnN0YW5jZW9mIEwuTGF0TG5nfHx2YWx1ZSBpbnN0YW5jZW9mIEwuTGF0TG5nQm91bmRzKXtib3VuZHMuZXh0ZW5kKHZhbHVlKX19fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3I9dHJ1ZTtfaXRlcmF0b3JFcnJvcj1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24mJl9pdGVyYXRvci5yZXR1cm4pe19pdGVyYXRvci5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcil7dGhyb3cgX2l0ZXJhdG9yRXJyb3J9fX1pZihib3VuZHMuaXNWYWxpZCgpJiZ0eXBlb2YgcGFkZGluZz09PSdudW1iZXInKXtib3VuZHM9Ym91bmRzLnBhZChwYWRkaW5nKX1yZXR1cm4gYm91bmRzfSxfZ2V0Wm9vbUxldmVsRm9yRml0OmZ1bmN0aW9uIF9nZXRab29tTGV2ZWxGb3JGaXQoYm91bmRzLGZpdFNldHRpbmcsbWFwKXtpZihmaXRTZXR0aW5nPT09J21pbicpe3ZhciB6b29tPW1hcC5nZXRNaW5ab29tKCl8fDA7cmV0dXJuIHpvb219aWYoZml0U2V0dGluZz09PSdtYXgnKXt2YXIgX3pvb209bWFwLmdldEJvdW5kc1pvb20oYm91bmRzLHRydWUpLTE7cmV0dXJuIF96b29tfX0sX2ZpdE1hcFRvTWFya2Vyc0lmU2V0OmZ1bmN0aW9uIF9maXRNYXBUb01hcmtlcnNJZlNldCgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0fHwhdGhpcy5maXRUb01hcmtlcnMpcmV0dXJuO3RoaXMuX2ZpdE1hcFRvTWFya2VycygpfSxmaXRNYXBUb01hcmtlcnM6ZnVuY3Rpb24gZml0TWFwVG9NYXJrZXJzKCl7aWYoIXRoaXMuZWxlbWVudEluc3R8fCF0aGlzLl9rbm93bk1hcmtlcnN8fCF0aGlzLl9rbm93bk1hcmtlcnMuc2l6ZSl7cmV0dXJuIGZhbHNlfXRoaXMuX2ZpdE1hcFRvTWFya2VycygpO3JldHVybiB0cnVlfX07UHhNYXBCZWhhdmlvci5MZWFmbGV0Um9vdEltcGw9e3Byb3BlcnRpZXM6e2Nyczp7dHlwZTpPYmplY3R9LHN0eWxlOnt0eXBlOlN0cmluZyx2YWx1ZTonbWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXY5Jyxub3RpZnk6dHJ1ZX0sbWdsVG9rZW46e3R5cGU6U3RyaW5nLHZhbHVlOicnfSxsYXQ6e3R5cGU6TnVtYmVyLHZhbHVlOjM3Ljc2NzIzNzUsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxsbmc6e3R5cGU6TnVtYmVyLHZhbHVlOi0xMjEuOTU4NDEzMSxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LHpvb206e3R5cGU6TnVtYmVyLHZhbHVlOjEwLG5vdGlmeTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWF4Wm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtaW5ab29tOnt0eXBlOk51bWJlcixvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heEJvdW5kczp7dHlwZTpBcnJheSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVEcmFnZ2luZzp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGlzYWJsZVNjcm9sbFpvb206e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVUb3VjaFpvb206e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVBdHRyaWJ1dGlvbjp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxhdHRyaWJ1dGlvblByZWZpeDp7dHlwZTpTdHJpbmcsdmFsdWU6JzxhIGhyZWY9XCJodHRwOi8vbGVhZmxldGpzLmNvbVwiIHRpdGxlPVwiQSBKUyBsaWJyYXJ5IGZvciBpbnRlcmFjdGl2ZSBtYXBzXCI+TGVhZmxldDwvYT4nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZmxleFRvU2l6ZTp7dHlwZTpCb29sZWFuLHJlZmxlY3RUb0F0dHJpYnV0ZTp0cnVlLHZhbHVlOmZhbHNlfX0sYXR0YWNoZWQ6ZnVuY3Rpb24gYXR0YWNoZWQoKXt0aGlzLmxpc3Rlbih0aGlzLCdweC1tYXAtZWxlbWVudC1yZWFkeS10by1hZGQnLCdzaG91bGRBZGRJbnN0Jyk7aWYodGhpcy5jYW5BZGRJbnN0KCkpe3RoaXMuZmlyZSgncHgtbWFwLWVsZW1lbnQtcmVhZHktdG8tYWRkJyl9fSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMudW5saXN0ZW4odGhpcywncHgtbWFwLWVsZW1lbnQtcmVhZHktdG8tYWRkJywnc2hvdWxkQWRkSW5zdCcpO3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpO3RoaXMucmVtb3ZlSW5zdCgpfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoZXZ0KXtpZihQb2x5bWVyLmRvbShldnQpLnJvb3RUYXJnZXQhPT10aGlzKXJldHVybjtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzKTt0aGlzLmFkZEluc3QoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMubGF0TG5nSXNWYWxpZCh0aGlzLmxhdCx0aGlzLmxuZyl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXttYXBib3hnbC5hY2Nlc3NUb2tlbj10aGlzLm1nbFRva2VuO29wdGlvbnMuY29udGFpbmVyPVBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcik7dmFyIG1hcEluc3Q9bmV3IG1hcGJveGdsLk1hcChvcHRpb25zKTtpZih0aGlzLmlzU2hhZHlTY29wZWQoKSl7bWFwSW5zdC5fX2FkZFNoYWR5U2NvcGU9dGhpcy5zY29wZVN1YnRyZWUuYmluZCh0aGlzKX1yZXR1cm4gbWFwSW5zdH0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsdHJ1ZSl9dmFyIG1hcE1vdmVGbj10aGlzLl9oYW5kbGVNYXBNb3ZlLmJpbmQodGhpcyk7dmFyIHpvb21TdGFydEZuPXRoaXMuX2hhbmRsZVpvb21TdGFydC5iaW5kKHRoaXMpO3ZhciB6b29tRW5kRm49dGhpcy5faGFuZGxlWm9vbUVuZC5iaW5kKHRoaXMpO3ZhciBtYXBMb2FkZWRGbj10aGlzLl9oYW5kbGVNYXBMb2FkZWQuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydtb3ZlZW5kJzptYXBNb3ZlRm4sJ3pvb21zdGFydCc6em9vbVN0YXJ0Rm4sJ3pvb21lbmQnOnpvb21FbmRGbiwnbG9hZCc6bWFwTG9hZGVkRm59KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsZmFsc2UpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz17fTtvcHRpb25zLmNvbnRhaW5lcj0nI21hcCc7b3B0aW9ucy5jZW50ZXI9W3RoaXMubG5nLHRoaXMubGF0XTtvcHRpb25zLnN0eWxlPXRoaXMuc3R5bGU7b3B0aW9ucy56b29tPXRoaXMuem9vbTtvcHRpb25zLm1pblpvb209dGhpcy5taW5ab29tfHwwO29wdGlvbnMubWF4Wm9vbT10aGlzLm1heFpvb218fDE4O29wdGlvbnMuZHJhZ1Bhbj0hdGhpcy5kaXNhYmxlRHJhZ2dpbmc7b3B0aW9ucy5zY3JvbGxab29tPSF0aGlzLmRpc2FibGVTY3JvbGxab29tO29wdGlvbnMudG91Y2hab29tUm90YXRlPSF0aGlzLmRpc2FibGVUb3VjaFpvb207b3B0aW9ucy5hdHRyaWJ1dGlvbkNvbnRyb2w9IXRoaXMuZGlzYWJsZUF0dHJpYnV0aW9uO3JldHVybiBvcHRpb25zfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKHRoaXMubGF0TG5nSXNWYWxpZChuZXh0T3B0aW9ucy5jZW50ZXJbMF0sbmV4dE9wdGlvbnMuY2VudGVyWzFdKSYmKGxhc3RPcHRpb25zLmNlbnRlclswXSE9PW5leHRPcHRpb25zLmNlbnRlclswXXx8bGFzdE9wdGlvbnMuY2VudGVyWzFdIT09bmV4dE9wdGlvbnMuY2VudGVyWzFdfHxsYXN0T3B0aW9ucy56b29tIT09bmV4dE9wdGlvbnMuem9vbSkpe3RoaXMuX3VwZGF0ZU1hcFZpZXcoKX1pZihsYXN0T3B0aW9ucy5tYXhab29tIT09bmV4dE9wdGlvbnMubWF4Wm9vbSYmIWlzTmFOKG5leHRPcHRpb25zLm1heFpvb20pKXt0aGlzLnNldE1heFpvb20obmV4dE9wdGlvbnMubWF4Wm9vbSl9aWYobGFzdE9wdGlvbnMubWluWm9vbSE9PW5leHRPcHRpb25zLm1pblpvb20mJiFpc05hTihuZXh0T3B0aW9ucy5taW5ab29tKSl7dGhpcy5zZXRNaW5ab29tKG5leHRPcHRpb25zLm1pblpvb20pfWlmKGxhc3RPcHRpb25zLm1heEJvdW5kcyE9PW5leHRPcHRpb25zLm1heEJvdW5kcyYmIWlzTmFOKG5leHRPcHRpb25zLm1heEJvdW5kcykpe3RoaXMuc2V0TWF4Qm91bmRzKG5leHRPcHRpb25zLm1heEJvdW5kcyl9aWYoIWxhc3RPcHRpb25zLmRyYWdnaW5nJiZuZXh0T3B0aW9ucy5kcmFnZ2luZyl7dGhpcy5lbGVtZW50SW5zdC5kcmFnZ2luZy5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5kcmFnZ2luZyYmIW5leHRPcHRpb25zLmRyYWdnaW5nKXt0aGlzLmVsZW1lbnRJbnN0LmRyYWdnaW5nLmRpc2FibGUoKX1pZighbGFzdE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tJiZuZXh0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20pe3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsV2hlZWxab29tLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSYmIW5leHRPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSl7dGhpcy5lbGVtZW50SW5zdC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpfWlmKCFsYXN0T3B0aW9ucy50b3VjaFpvb20mJm5leHRPcHRpb25zLnRvdWNoWm9vbSl7dGhpcy5lbGVtZW50SW5zdC50b3VjaFpvb20uZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMudG91Y2hab29tJiYhbmV4dE9wdGlvbnMudG91Y2hab29tKXt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbS5kaXNhYmxlKCl9aWYobGFzdE9wdGlvbnMuYXR0cmlidXRpb25QcmVmaXghPT1uZXh0T3B0aW9ucy5hdHRyaWJ1dGlvblByZWZpeCl7dGhpcy5lbGVtZW50SW5zdC5hdHRyaWJ1dGlvbkNvbnRyb2wuc2V0UHJlZml4KG5leHRPcHRpb25zLmF0dHJpYnV0aW9uUHJlZml4KX19LF91cGRhdGVNYXBWaWV3OmZ1bmN0aW9uIF91cGRhdGVNYXBWaWV3KCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZGVib3VuY2UoJ3VwZGF0ZS1tYXAtdmlldycsZnVuY3Rpb24oKXt2YXIgX2VsZW1lbnRJbnN0JGdldENlbnRlPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCksbGF0PV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sYXQsbG5nPV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sbmc7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7aWYodGhpcy5sYXQhPT1sYXR8fHRoaXMubG5nIT09bG5nfHx0aGlzLnpvb20hPT16b29tKXt0aGlzLmVsZW1lbnRJbnN0LnNldFZpZXcoW3RoaXMubGF0LHRoaXMubG5nXSx0aGlzLnpvb20pfX0pfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PScnfSxsYXRMbmdJc1ZhbGlkOmZ1bmN0aW9uIGxhdExuZ0lzVmFsaWQobGF0LGxuZyl7dmFyIGlzVmFsaWQ9dHlwZW9mIGxhdCE9PSd1bmRlZmluZWQnJiZ0aGlzLl9jYW5CZU51bShsYXQpJiZ0eXBlb2YgbG5nIT09J3VuZGVmaW5lZCcmJnRoaXMuX2NhbkJlTnVtKGxuZyk7aWYoaXNWYWxpZClyZXR1cm4gdHJ1ZTtjb25zb2xlLmxvZygnUFgtTUFQIENPTkZJR1VSQVRJT04gRVJST1I6XFxuICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBsYXRgIG9yIGBsbmdgIGF0dHJpYnV0ZSBmb3IgJyt0aGlzLmlzKycuIFlvdSBtdXN0IHBhc3MgYSB2YWxpZCBudW1iZXIuJyk7cmV0dXJuIGZhbHNlfSxfaGFuZGxlTWFwTG9hZGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXBMb2FkZWQoKXtpZih0aGlzLmNhbkFkZEluc3QoKSl7Y29uc29sZS5sb2coJ3B4LW1hcC1lbGVtZW50LWxvYWRlZCBmaXJlJyk7dGhpcy5maXJlKCdweC1tYXAtZWxlbWVudC1sb2FkZWQnLHRoaXMpfX0sX2hhbmRsZU1hcE1vdmU6ZnVuY3Rpb24gX2hhbmRsZU1hcE1vdmUoKXtpZih0aGlzLl9faXNab29taW5nKXt0aGlzLl9fb25ab29tRW5kPXRoaXMuX2hhbmRsZU1hcE1vdmUuYmluZCh0aGlzKTtyZXR1cm59dGhpcy5kZWJvdW5jZSgnaGFuZGxlLW1hcC1tb3ZlJyxmdW5jdGlvbigpe3ZhciBsYXRMbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRDZW50ZXIoKTt2YXIgem9vbT10aGlzLmVsZW1lbnRJbnN0LmdldFpvb20oKTt2YXIgYm91bmRzPXRoaXMuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7aWYodGhpcy5sYXQhPT1sYXRMbmcubGF0fHx0aGlzLmxuZyE9PWxhdExuZy5sbmcpe3RoaXMuc2V0KCdsYXQnLGxhdExuZy5sYXQpO3RoaXMuc2V0KCdsbmcnLGxhdExuZy5sbmcpfWlmKHRoaXMuem9vbSE9PXpvb20pe3RoaXMuc2V0KCd6b29tJyx6b29tKX10aGlzLmZpcmUoJ3B4LW1hcC1tb3ZlZCcse2xhdDpsYXRMbmcubGF0LGxuZzpsYXRMbmcubG5nLHpvb206em9vbSxib3VuZHM6Ym91bmRzfSl9KX0sX2hhbmRsZVpvb21TdGFydDpmdW5jdGlvbiBfaGFuZGxlWm9vbVN0YXJ0KCl7dGhpcy5fX2lzWm9vbWluZz10cnVlfSxfaGFuZGxlWm9vbUVuZDpmdW5jdGlvbiBfaGFuZGxlWm9vbUVuZCgpe3RoaXMuX19pc1pvb21pbmc9ZmFsc2U7aWYodHlwZW9mIHRoaXMuX19vblpvb21FbmQ9PT0nZnVuY3Rpb24nKXt0aGlzLl9fb25ab29tRW5kKCk7dGhpcy5fX29uWm9vbUVuZD1udWxsfX0sZ2V0VmlzaWJsZU1hcmtlcnM6ZnVuY3Rpb24gZ2V0VmlzaWJsZU1hcmtlcnMoKXt2YXIgbWFwQm91bmRzPXRoaXMuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7dmFyIG1hcmtlcnM9W107dGhpcy5lbGVtZW50SW5zdC5lYWNoTGF5ZXIoZnVuY3Rpb24obGF5ZXIpe2lmKGxheWVyLmlzTWFya2VyJiZsYXllci5nZXRMYXRMbmcpe2lmKG1hcEJvdW5kcy5jb250YWlucyhsYXllci5nZXRMYXRMbmcoKSkmJm1hcmtlcnMuaW5kZXhPZihsYXllcik9PT0tMSl7bWFya2Vycy5wdXNoKGxheWVyKX19aWYobGF5ZXIuX21hcmtlckNsdXN0ZXIpe2xheWVyLmVhY2hMYXllcihmdW5jdGlvbihtYXJrZXIpe3ZhciBwYXJlbnRDbHVzdGVyPWxheWVyLmdldFZpc2libGVQYXJlbnQobWFya2VyKTtpZihwYXJlbnRDbHVzdGVyJiZtYXBCb3VuZHMuY29udGFpbnMocGFyZW50Q2x1c3Rlci5nZXRMYXRMbmcoKSkmJm1hcmtlciYmbWFya2Vycy5pbmRleE9mKG1hcmtlcik9PT0tMSl7bWFya2Vycy5wdXNoKG1hcmtlcil9fSl9fSk7cmV0dXJuIG1hcmtlcnN9fTtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290PVtQeE1hcEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBCZWhhdmlvci5MZWFmbGV0Um9vdEltcGwsUHhNYXBCZWhhdmlvci5UcmFja01hcmtlcnNJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCI6M31dfSx7fSxbMTA1LDEwNiwxMDcsMTA4LDEwOSwxMTBdKTtcbiJdLCJmaWxlIjoicHgtbWFwLWJ1bmRsZS5qcyJ9
