/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _dom = __webpack_require__(6);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _jquery = __webpack_require__(7);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.onload = function () {
	  dom.run();
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".gridContainer {\n  border-style: solid;\n  border-width: 2px;\n  width: 450px;\n  text-align: center;\n  margin: 10px auto;\n}\n\n.container {\n  min-height:200px;\n  min-width: 400px;\n}\n\n.cell {\n  width:100px;\n  height: 100px;\n  display: inline-block;\n  border: solid;\n  border-color:black;\n  margin: 10px;\n  vertical-align:top;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.run = undefined;
	
	var _jquery = __webpack_require__(7);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _ramda = __webpack_require__(9);
	
	var _ramda2 = _interopRequireDefault(_ramda);
	
	var _data = __webpack_require__(318);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var trace = function trace(el) {
	  console.log(el);return el;
	};
	
	// renderGridCells :: void -> Array String Dom
	var renderGridCells = function renderGridCells() {
	  return new Array(9).fill(0).map(function (el, i) {
	    return '<div class=\'cell\' id=' + i + '></div>';
	  });
	};
	
	var renderStarterChoice = function renderStarterChoice() {
	  return '<h2> who starts ?  </h2>\n  <button id=\'player\'> Player </button> \n  <button id=\'computer\'> Computer </button>';
	};
	
	var renderPlayerChoice = function renderPlayerChoice() {
	  return '<h2> chose game type </h2>\n  <button id=\'pp\'> P vs P </button> \n  <button id=\'pc\'> P vs Computer </button>\n  <button id=\'cc\'> Computer vs Computer </button>';
	};
	
	// renderGrid :: Array string -> String Dom
	var renderGrid = function renderGrid(arr) {
	  return '<div class=\'gridContainer\'>' + arr.join('') + '</div>';
	};
	
	// updateDom :: String Dom -> void
	var updateDom = function updateDom(el) {
	  (0, _jquery2.default)('.gridContainer').empty();
	  (0, _jquery2.default)('.gridContainer').append(el);
	};
	
	var waitForStarterChoice = function waitForStarterChoice(gameChoice) {
	  return new _data2.default(function (rej, res) {
	    (0, _jquery2.default)('#player,#computer').click(function (e) {
	      _ramda2.default.compose(updateDom, renderGrid, renderGridCells)();
	      res({});
	    });
	  });
	};
	
	var waitForGameChoice = function waitForGameChoice() {
	  return new _data2.default(function (rej, resolve) {
	    (0, _jquery2.default)('#pp').click(function (e) {
	      _ramda2.default.compose(updateDom, renderStarterChoice)();
	      resolve('hay ho');
	    });
	  });
	};
	
	var initTask = function initTask() {
	  return new _data2.default(function (rej, res) {
	    return res({});
	  });
	};
	
	var init = function init() {
	  return _ramda2.default.compose(initTask, updateDom, renderPlayerChoice)();
	};
	
	var run = exports.run = function run() {
	  init().chain(waitForGameChoice).chain(waitForStarterChoice)
	  //.chain(waitForMove)
	  //.chain(results)
	  .fork(function (err) {
	    return console.log(err);
	  }, function (res) {
	    return console.log(res);
	  });
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	(function (global, factory) {
	
		"use strict";
	
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	
		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	
		// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
		// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
		// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
		// enough that all such attempts are guarded in a try block.
		"use strict";
	
		var arr = [];
	
		var document = window.document;
	
		var getProto = Object.getPrototypeOf;
	
		var _slice = arr.slice;
	
		var concat = arr.concat;
	
		var push = arr.push;
	
		var indexOf = arr.indexOf;
	
		var class2type = {};
	
		var toString = class2type.toString;
	
		var hasOwn = class2type.hasOwnProperty;
	
		var fnToString = hasOwn.toString;
	
		var ObjectFunctionString = fnToString.call(Object);
	
		var support = {};
	
		function DOMEval(code, doc) {
			doc = doc || document;
	
			var script = doc.createElement("script");
	
			script.text = code;
			doc.head.appendChild(script).parentNode.removeChild(script);
		}
		/* global Symbol */
		// Defining this global in .eslintrc.json would create a danger of using the global
		// unguarded in another place, it seems safer to define global only for this module
	
	
		var version = "3.1.1",
	
	
		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
	
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([a-z])/g,
	
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};
	
		jQuery.fn = jQuery.prototype = {
	
			// The current version of jQuery being used
			jquery: version,
	
			constructor: jQuery,
	
			// The default length of a jQuery object is 0
			length: 0,
	
			toArray: function toArray() {
				return _slice.call(this);
			},
	
			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
	
				// Return all the elements in a clean array
				if (num == null) {
					return _slice.call(this);
				}
	
				// Return just the one element from the set
				return num < 0 ? this[num + this.length] : this[num];
			},
	
			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {
	
				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);
	
				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
	
				// Return the newly-formed element set
				return ret;
			},
	
			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},
	
			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},
	
			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},
	
			first: function first() {
				return this.eq(0);
			},
	
			last: function last() {
				return this.eq(-1);
			},
	
			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},
	
			end: function end() {
				return this.prevObject || this.constructor();
			},
	
			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};
	
		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;
	
			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;
	
				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}
	
			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}
	
			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
	
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
	
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];
	
						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}
	
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
	
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);
	
							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			// Return the modified object
			return target;
		};
	
		jQuery.extend({
	
			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	
			// Assume jQuery is ready without the ready module
			isReady: true,
	
			error: function error(msg) {
				throw new Error(msg);
			},
	
			noop: function noop() {},
	
			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},
	
			isArray: Array.isArray,
	
			isWindow: function isWindow(obj) {
				return obj != null && obj === obj.window;
			},
	
			isNumeric: function isNumeric(obj) {
	
				// As of jQuery 3.0, isNumeric is limited to
				// strings and numbers (primitives or objects)
				// that can be coerced to finite numbers (gh-2662)
				var type = jQuery.type(obj);
				return (type === "number" || type === "string") &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN(obj - parseFloat(obj));
			},
	
			isPlainObject: function isPlainObject(obj) {
				var proto, Ctor;
	
				// Detect obvious negatives
				// Use toString instead of jQuery.type to catch host objects
				if (!obj || toString.call(obj) !== "[object Object]") {
					return false;
				}
	
				proto = getProto(obj);
	
				// Objects with no prototype (e.g., `Object.create( null )`) are plain
				if (!proto) {
					return true;
				}
	
				// Objects with prototype are plain iff they were constructed by a global Object function
				Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
				return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
			},
	
			isEmptyObject: function isEmptyObject(obj) {
	
				/* eslint-disable no-unused-vars */
				// See https://github.com/eslint/eslint/issues/6125
				var name;
	
				for (name in obj) {
					return false;
				}
				return true;
			},
	
			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}
	
				// Support: Android <=2.3 only (functionish RegExp)
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},
	
			// Evaluates a script in a global context
			globalEval: function globalEval(code) {
				DOMEval(code);
			},
	
			// Convert dashed to camelCase; used by the css and data modules
			// Support: IE <=9 - 11, Edge 12 - 13
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},
	
			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},
	
			each: function each(obj, callback) {
				var length,
				    i = 0;
	
				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}
	
				return obj;
			},
	
			// Support: Android <=4.0 only
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},
	
			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];
	
				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}
	
				return ret;
			},
	
			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},
	
			// Support: Android <=4.0 only, PhantomJS 1 only
			// push.apply(_, arraylike) throws on ancient WebKit
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;
	
				for (; j < len; j++) {
					first[i++] = second[j];
				}
	
				first.length = i;
	
				return first;
			},
	
			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;
	
				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}
	
				return matches;
			},
	
			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];
	
				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
	
					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				}
	
				// Flatten any nested arrays
				return concat.apply([], ret);
			},
	
			// A global GUID counter for objects
			guid: 1,
	
			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var tmp, args, proxy;
	
				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}
	
				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}
	
				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};
	
				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
				return proxy;
			},
	
			now: Date.now,
	
			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});
	
		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}
	
		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});
	
		function isArrayLike(obj) {
	
			// Support: real iOS 8.2 only (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = jQuery.type(obj);
	
			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.3.3
	  * https://sizzlejs.com/
	  *
	  * Copyright jQuery Foundation and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2016-08-08
	  */
		function (window) {
	
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
	
	
			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
	
	
			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
	
	
			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
	
			// Use a stripped-down indexOf as it's faster than native
			// https://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
	
			// Regular expressions
	
			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
	
	
			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
	
			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
	
	
			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
	
	
			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
	
	
			// CSS escapes
			// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
	
	
			// CSS string/identifier serialization
			// https://drafts.csswg.org/cssom/#common-serializing-idioms
			rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			    fcssescape = function fcssescape(ch, asCodePoint) {
				if (asCodePoint) {
	
					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if (ch === "\0") {
						return "\uFFFD";
					}
	
					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}
	
				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			},
	
	
			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			},
			    disabledAncestor = addCombinator(function (elem) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			}, { dir: "parentNode", next: "legend" });
	
			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?
	
					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :
	
					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}
	
			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,
	
	
				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;
	
				results = results || [];
	
				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
	
					return results;
				}
	
				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {
	
					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;
	
					if (documentIsHTML) {
	
						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
	
							// ID selector
							if (m = match[1]) {
	
								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {
	
										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}
	
									// Element context
								} else {
	
									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
	
										results.push(elem);
										return results;
									}
								}
	
								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;
	
								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
	
								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}
	
						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
	
							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;
	
								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {
	
								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rcssescape, fcssescape);
								} else {
									context.setAttribute("id", nid = expando);
								}
	
								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								while (i--) {
									groups[i] = "#" + nid + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");
	
								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}
	
							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}
	
				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}
	
			/**
	   * Create key-value caches of limited size
	   * @returns {function(string, object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];
	
				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}
	
			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}
	
			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created element and returns a boolean result
	   */
			function assert(fn) {
				var el = document.createElement("fieldset");
	
				try {
					return !!fn(el);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (el.parentNode) {
						el.parentNode.removeChild(el);
					}
					// release memory in IE
					el = null;
				}
			}
	
			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;
	
				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}
	
			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
	
				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}
	
				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}
	
				return a ? 1 : -1;
			}
	
			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for :enabled/:disabled
	   * @param {Boolean} disabled true for :disabled; false for :enabled
	   */
			function createDisabledPseudo(disabled) {
	
				// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
				return function (elem) {
	
					// Only certain elements can match :enabled or :disabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
					if ("form" in elem) {
	
						// Check for inherited disabledness on relevant non-disabled elements:
						// * listed form-associated elements in a disabled fieldset
						//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
						// * option elements in a disabled optgroup
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
						// All such elements have a "form" property.
						if (elem.parentNode && elem.disabled === false) {
	
							// Option elements defer to a parent optgroup if present
							if ("label" in elem) {
								if ("label" in elem.parentNode) {
									return elem.parentNode.disabled === disabled;
								} else {
									return elem.disabled === disabled;
								}
							}
	
							// Support: IE 6 - 11
							// Use the isDisabled shortcut property to check for disabled fieldset ancestors
							return elem.isDisabled === disabled ||
	
							// Where there is no isDisabled, check manually
							/* jshint -W018 */
							elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
						}
	
						return elem.disabled === disabled;
	
						// Try to winnow out elements that can't be disabled before trusting the disabled property.
						// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
						// even exist on them, let alone have a boolean value.
					} else if ("label" in elem) {
						return elem.disabled === disabled;
					}
	
					// Remaining elements are neither :enabled nor :disabled
					return false;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;
	
						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}
	
			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}
	
			// Expose support vars for convenience
			support = Sizzle.support = {};
	
			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};
	
			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    subWindow,
				    doc = node ? node.ownerDocument || node : preferredDoc;
	
				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}
	
				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);
	
				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
	
					// Support: IE 11, Edge
					if (subWindow.addEventListener) {
						subWindow.addEventListener("unload", unloadHandler, false);
	
						// Support: IE 9 - 10 only
					} else if (subWindow.attachEvent) {
						subWindow.attachEvent("onunload", unloadHandler);
					}
				}
	
				/* Attributes
	   ---------------------------------------------------------------------- */
	
				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (el) {
					el.className = "i";
					return !el.getAttribute("className");
				});
	
				/* getElement(s)By*
	   ---------------------------------------------------------------------- */
	
				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (el) {
					el.appendChild(document.createComment(""));
					return !el.getElementsByTagName("*").length;
				});
	
				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);
	
				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programmatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (el) {
					docElem.appendChild(el).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});
	
				// ID filter and find
				if (support.getById) {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var elem = context.getElementById(id);
							return elem ? [elem] : [];
						}
					};
				} else {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
	
					// Support: IE 6 - 7 only
					// getElementById is not reliable as a find shortcut
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var node,
							    i,
							    elems,
							    elem = context.getElementById(id);
	
							if (elem) {
	
								// Verify the id attribute
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
	
								// Fall back on getElementsByName
								elems = context.getElementsByName(id);
								i = 0;
								while (elem = elems[i++]) {
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}
								}
							}
	
							return [];
						}
					};
				}
	
				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
	
						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
	
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);
	
					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}
	
						return tmp;
					}
					return results;
				};
	
				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};
	
				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */
	
				// QSA and matchesSelector support
	
				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];
	
				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See https://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];
	
				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (el) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// https://bugs.jquery.com/ticket/12359
						docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
	
						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (el.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}
	
						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!el.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}
	
						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}
	
						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!el.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
	
						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibling-combinator selector` fails
						if (!el.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});
	
					assert(function (el) {
						el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
	
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						el.appendChild(input).setAttribute("name", "D");
	
						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (el.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}
	
						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (el.querySelectorAll(":enabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Support: IE9-11+
						// IE's :disabled selector does not pick up the children of disabled fieldsets
						docElem.appendChild(el).disabled = true;
						if (el.querySelectorAll(":disabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Opera 10-11 does not throw on post-comma invalid pseudos
						el.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}
	
				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	
					assert(function (el) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(el, "*");
	
						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(el, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}
	
				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	
				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);
	
				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
	
				/* Sorting
	   ---------------------------------------------------------------------- */
	
				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {
	
					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}
	
					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
	
					// Otherwise we know they are disconnected
					1;
	
					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
	
						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}
	
						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}
	
					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];
	
					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	
						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}
	
					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}
	
					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}
	
					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :
	
					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};
	
				return document;
			};
	
			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};
	
			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");
	
				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	
					try {
						var ret = matches.call(elem, expr);
	
						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}
	
				return Sizzle(expr, document, null, [elem]).length > 0;
			};
	
			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};
	
			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				var fn = Expr.attrHandle[name.toLowerCase()],
	
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	
				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};
	
			Sizzle.escape = function (sel) {
				return (sel + "").replace(rcssescape, fcssescape);
			};
	
			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};
	
			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;
	
				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);
	
				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}
	
				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;
	
				return results;
			};
	
			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;
	
				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes
	
				return ret;
			};
	
			Expr = Sizzle.selectors = {
	
				// Can be adjusted by the user
				cacheLength: 50,
	
				createPseudo: markFunction,
	
				match: matchExpr,
	
				attrHandle: {},
	
				find: {},
	
				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},
	
				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);
	
						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
	
						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}
	
						return match.slice(0, 4);
					},
	
					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();
	
						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}
	
							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
	
							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}
	
						return match;
					},
	
					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];
	
						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}
	
						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";
	
							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
	
							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}
	
						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},
	
				filter: {
	
					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},
	
					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];
	
						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},
	
					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);
	
							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}
	
							result += "";
	
							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},
	
					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";
	
						return first === 1 && last === 0 ?
	
						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;
	
							if (parent) {
	
								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
	
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}
	
								start = [forward ? parent.firstChild : parent.lastChild];
	
								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
	
									// Seek `elem` from a previously-cached index
	
									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];
	
									while (node = ++nodeIndex && node && node[dir] || (
	
									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {
	
										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});
	
										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}
	
									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	
											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
	
												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});
	
													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
													uniqueCache[type] = [dirruns, diff];
												}
	
												if (node === elem) {
													break;
												}
											}
										}
									}
								}
	
								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},
	
					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
	
						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}
	
						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}
	
						return fn;
					}
				},
	
				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));
	
						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;
	
							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),
	
					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),
	
					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),
	
					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),
	
					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},
	
					"root": function root(elem) {
						return elem === docElem;
					},
	
					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},
	
					// Boolean properties
					"enabled": createDisabledPseudo(false),
					"disabled": createDisabledPseudo(true),
	
					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},
	
					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}
	
						return elem.selected === true;
					},
	
					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
	
					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},
	
					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},
	
					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},
	
					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},
	
					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (
	
						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},
	
					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),
	
					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),
	
					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),
	
					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};
	
			Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}
	
			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();
	
			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];
	
				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}
	
				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;
	
				while (soFar) {
	
					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}
	
					matched = false;
	
					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}
	
					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}
	
					if (!matched) {
						break;
					}
				}
	
				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};
	
			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}
	
			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    skip = combinator.next,
				    key = skip || dir,
				    checkNonElements = base && key === "parentNode",
				    doneName = done++;
	
				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
					return false;
				} :
	
				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];
	
					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
	
								if (skip && skip === elem.nodeName.toLowerCase()) {
									elem = elem[dir] || elem;
								} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
	
									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[key] = newCache;
	
									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}
	
			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}
	
			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}
	
			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;
	
				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}
	
				return newUnmatched;
			}
	
			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
	
	
					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
	
	
					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?
	
					// ...intermediate processing is necessary
					[] :
	
					// ...otherwise use results directly
					results : matcherIn;
	
					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}
	
					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);
	
						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}
	
					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}
	
							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
	
									seed[temp] = !(results[temp] = elem);
								}
							}
						}
	
						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}
	
			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
	
	
				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];
	
				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
	
						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}
	
				return elementMatcher(matchers);
			}
	
			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
	
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),
	
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;
	
					if (outermost) {
						outermostContext = context === document || context || outermost;
					}
	
					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
	
						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}
	
							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
	
					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;
	
					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}
	
						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
	
							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}
	
						// Add matches to results
						push.apply(results, setMatched);
	
						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	
							Sizzle.uniqueSort(results);
						}
					}
	
					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
	
					return unmatched;
				};
	
				return bySet ? markFunction(superMatcher) : superMatcher;
			}
	
			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];
	
				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}
	
					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
	
					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};
	
			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);
	
				results = results || [];
	
				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {
	
					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	
						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
	
							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}
	
						selector = selector.slice(tokens.shift().value.length);
					}
	
					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];
	
						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
	
								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}
	
								break;
							}
						}
					}
				}
	
				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};
	
			// One-time assignments
	
			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
	
			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;
	
			// Initialize against the default document
			setDocument();
	
			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (el) {
				// Should return 1, but returns 4 (following)
				return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
			});
	
			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (el) {
				el.innerHTML = "<a href='#'></a>";
				return el.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
	
			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (el) {
				el.innerHTML = "<input/>";
				el.firstChild.setAttribute("value", "");
				return el.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}
	
			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (el) {
				return el.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}
	
			return Sizzle;
		}(window);
	
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
	
		// Deprecated
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
		jQuery.escapeSelector = Sizzle.escape;
	
		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;
	
			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};
	
		var _siblings = function _siblings(n, elem) {
			var matched = [];
	
			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}
	
			return matched;
		};
	
		var rneedsContext = jQuery.expr.match.needsContext;
	
		var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	
		var risSimple = /^.[^:#\[\.,]*$/;
	
		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}
	
			// Single element
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}
	
			// Arraylike of elements (jQuery, arguments, Array)
			if (typeof qualifier !== "string") {
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not;
				});
			}
	
			// Simple selector that can be filtered directly, removing non-Elements
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}
	
			// Complex selector, compare the two sets, removing non-Elements
			qualifier = jQuery.filter(qualifier, elements);
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
			});
		}
	
		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];
	
			if (not) {
				expr = ":not(" + expr + ")";
			}
	
			if (elems.length === 1 && elem.nodeType === 1) {
				return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
			}
	
			return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};
	
		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret,
				    len = this.length,
				    self = this;
	
				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}
	
				ret = this.pushStack([]);
	
				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}
	
				return len > 1 ? jQuery.uniqueSort(ret) : ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});
	
		// Initialize a jQuery object
	
	
		// A central reference to the root jQuery(document)
		var rootjQuery,
	
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
	
				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {
	
					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
	
						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
	
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
	
									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}
	
						return this;
	
						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);
	
						if (elem) {
	
							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}
	
					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);
	
					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}
	
				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this[0] = selector;
				this.length = 1;
				return this;
	
				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return root.ready !== undefined ? root.ready(selector) :
	
				// Execute immediately if ready is not present
				selector(jQuery);
			}
	
			return jQuery.makeArray(selector, this);
		};
	
		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;
	
		// Initialize central reference
		rootjQuery = jQuery(document);
	
		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;
	
				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},
	
			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    targets = typeof selectors !== "string" && jQuery(selectors);
	
				// Positional selectors never match, since there's no _selection_ context
				if (!rneedsContext.test(selectors)) {
					for (; i < l; i++) {
						for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
	
							// Always skip document fragments
							if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	
								matched.push(cur);
								break;
							}
						}
					}
				}
	
				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},
	
			// Determine the position of an element within the set
			index: function index(elem) {
	
				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}
	
				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}
	
				// Locate the position of the desired element
				return indexOf.call(this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},
	
			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},
	
			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});
	
		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}
	
		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);
	
				if (name.slice(-5) !== "Until") {
					selector = until;
				}
	
				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}
	
				if (this.length > 1) {
	
					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}
	
					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}
	
				return this.pushStack(matched);
			};
		});
		var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
	
		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}
	
		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {
	
			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
	
			var // Flag to know if list is currently firing
			firing,
	
	
			// Last fire value for non-forgettable lists
			memory,
	
	
			// Flag to know if list was already fired
			_fired,
	
	
			// Flag to prevent firing
			_locked,
	
	
			// Actual callback list
			list = [],
	
	
			// Queue of execution data for repeatable lists
			queue = [],
	
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
	
			// Fire callbacks
			fire = function fire() {
	
				// Enforce single-firing
				_locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {
	
						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if (_locked) {
	
					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];
	
						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {
	
						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}
	
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {
	
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
	
						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
	
							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = queue = [];
					if (!memory && !firing) {
						list = memory = "";
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};
	
			return self;
		};
	
		function Identity(v) {
			return v;
		}
		function Thrower(ex) {
			throw ex;
		}
	
		function adoptValue(value, resolve, reject) {
			var method;
	
			try {
	
				// Check for promise aspect first to privilege synchronous behavior
				if (value && jQuery.isFunction(method = value.promise)) {
					method.call(value).done(resolve).fail(reject);
	
					// Other thenables
				} else if (value && jQuery.isFunction(method = value.then)) {
					method.call(value, resolve, reject);
	
					// Other non-thenables
				} else {
	
					// Support: Android 4.0 only
					// Strict mode functions invoked without .call/.apply get global-object context
					resolve.call(undefined, value);
				}
	
				// For Promises/A+, convert exceptions into rejections
				// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
				// Deferred#then to conditionally suppress rejection.
			} catch (value) {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				reject.call(undefined, value);
			}
		}
	
		jQuery.extend({
	
			Deferred: function Deferred(func) {
				var tuples = [
	
				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					"catch": function _catch(fn) {
						return _promise.then(null, fn);
					},
	
					// Keep pipe for back-compat
					pipe: function pipe() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
	
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function then(onFulfilled, onRejected, onProgress) {
						var maxDepth = 0;
						function resolve(depth, deferred, handler, special) {
							return function () {
								var that = this,
								    args = arguments,
								    mightThrow = function mightThrow() {
									var returned, then;
	
									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if (depth < maxDepth) {
										return;
									}
	
									returned = handler.apply(that, args);
	
									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise()) {
										throw new TypeError("Thenable self-resolution");
									}
	
									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned && (
	
									// Support: Promises/A+ section 2.3.4
									// https://promisesaplus.com/#point-64
									// Only check objects and functions for thenability
									(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;
	
									// Handle a returned thenable
									if (jQuery.isFunction(then)) {
	
										// Special processors (notify) just wait for resolution
										if (special) {
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
	
											// Normal processors (resolve) also hook into progress
										} else {
	
											// ...and disregard older resolution values
											maxDepth++;
	
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
										}
	
										// Handle all other returned values
									} else {
	
										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Identity) {
											that = undefined;
											args = [returned];
										}
	
										// Process the value(s)
										// Default process is resolve
										(special || deferred.resolveWith)(that, args);
									}
								},
	
	
								// Only normal processors (resolve) catch and reject exceptions
								process = special ? mightThrow : function () {
									try {
										mightThrow();
									} catch (e) {
	
										if (jQuery.Deferred.exceptionHook) {
											jQuery.Deferred.exceptionHook(e, process.stackTrace);
										}
	
										// Support: Promises/A+ section 2.3.3.3.4.1
										// https://promisesaplus.com/#point-61
										// Ignore post-resolution exceptions
										if (depth + 1 >= maxDepth) {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Thrower) {
												that = undefined;
												args = [e];
											}
	
											deferred.rejectWith(that, args);
										}
									}
								};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if (depth) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if (jQuery.Deferred.getStackHook) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout(process);
								}
							};
						}
	
						return jQuery.Deferred(function (newDefer) {
	
							// progress_handlers.add( ... )
							tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
	
							// fulfilled_handlers.add( ... )
							tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
	
							// rejected_handlers.add( ... )
							tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
						}).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};
	
				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[5];
	
					// promise.progress = list.add
					// promise.done = list.add
					// promise.fail = list.add
					_promise[tuple[1]] = list.add;
	
					// Handle state
					if (stateString) {
						list.add(function () {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							_state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[3 - i][2].disable,
	
						// progress_callbacks.lock
						tuples[0][2].lock);
					}
	
					// progress_handlers.fire
					// fulfilled_handlers.fire
					// rejected_handlers.fire
					list.add(tuple[3].fire);
	
					// deferred.notify = function() { deferred.notifyWith(...) }
					// deferred.resolve = function() { deferred.resolveWith(...) }
					// deferred.reject = function() { deferred.rejectWith(...) }
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
						return this;
					};
	
					// deferred.notifyWith = list.fireWith
					// deferred.resolveWith = list.fireWith
					// deferred.rejectWith = list.fireWith
					deferred[tuple[0] + "With"] = list.fireWith;
				});
	
				// Make the deferred a promise
				_promise.promise(deferred);
	
				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}
	
				// All done!
				return deferred;
			},
	
			// Deferred helper
			when: function when(singleValue) {
				var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
	
				// count of unprocessed arguments
				i = remaining,
	
	
				// subordinate fulfillment data
				resolveContexts = Array(i),
				    resolveValues = _slice.call(arguments),
	
	
				// the master Deferred
				master = jQuery.Deferred(),
	
	
				// subordinate callback factory
				updateFunc = function updateFunc(i) {
					return function (value) {
						resolveContexts[i] = this;
						resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (! --remaining) {
							master.resolveWith(resolveContexts, resolveValues);
						}
					};
				};
	
				// Single- and empty arguments are adopted like Promise.resolve
				if (remaining <= 1) {
					adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
	
					// Use .then() to unwrap secondary thenables (cf. gh-3000)
					if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
	
						return master.then();
					}
				}
	
				// Multiple arguments are aggregated like Promise.all array elements
				while (i--) {
					adoptValue(resolveValues[i], updateFunc(i), master.reject);
				}
	
				return master.promise();
			}
		});
	
		// These usually indicate a programmer mistake during development,
		// warn about them ASAP rather than swallowing them by default.
		var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
		jQuery.Deferred.exceptionHook = function (error, stack) {
	
			// Support: IE 8 - 9 only
			// Console exists when dev tools are open, which can happen at any time
			if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
				window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
			}
		};
	
		jQuery.readyException = function (error) {
			window.setTimeout(function () {
				throw error;
			});
		};
	
		// The deferred used on DOM ready
		var readyList = jQuery.Deferred();
	
		jQuery.fn.ready = function (fn) {
	
			readyList.then(fn)
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch(function (error) {
				jQuery.readyException(error);
			});
	
			return this;
		};
	
		jQuery.extend({
	
			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,
	
			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,
	
			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},
	
			// Handle when the DOM is ready
			ready: function ready(wait) {
	
				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}
	
				// Remember that the DOM is ready
				jQuery.isReady = true;
	
				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}
	
				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
			}
		});
	
		jQuery.ready.then = readyList.then;
	
		// The ready event handler and self cleanup method
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}
	
		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE <=9 - 10 only
		// Older IE sometimes signals "interactive" too soon
		if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
	
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout(jQuery.ready);
		} else {
	
			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", completed);
	
			// A fallback to window.onload, that will always work
			window.addEventListener("load", completed);
		}
	
		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;
	
			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}
	
				// Sets one value
			} else if (value !== undefined) {
				chainable = true;
	
				if (!jQuery.isFunction(value)) {
					raw = true;
				}
	
				if (bulk) {
	
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;
	
						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}
	
				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}
	
			if (chainable) {
				return elems;
			}
	
			// Gets
			if (bulk) {
				return fn.call(elems);
			}
	
			return len ? fn(elems[0], key) : emptyGet;
		};
		var acceptData = function acceptData(owner) {
	
			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};
	
		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}
	
		Data.uid = 1;
	
		Data.prototype = {
	
			cache: function cache(owner) {
	
				// Check if the owner object already has a cache
				var value = owner[this.expando];
	
				// If not, create one
				if (!value) {
					value = {};
	
					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {
	
						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;
	
							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
							Object.defineProperty(owner, this.expando, {
								value: value,
								configurable: true
							});
						}
					}
				}
	
				return value;
			},
			set: function set(owner, data, value) {
				var prop,
				    cache = this.cache(owner);
	
				// Handle: [ owner, key, value ] args
				// Always use camelCase key (gh-2257)
				if (typeof data === "string") {
					cache[jQuery.camelCase(data)] = value;
	
					// Handle: [ owner, { properties } ] args
				} else {
	
					// Copy the properties one-by-one to the cache object
					for (prop in data) {
						cache[jQuery.camelCase(prop)] = data[prop];
					}
				}
				return cache;
			},
			get: function get(owner, key) {
				return key === undefined ? this.cache(owner) :
	
				// Always use camelCase key (gh-2257)
				owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
			},
			access: function access(owner, key, value) {
	
				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {
	
					return this.get(owner, key);
				}
	
				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);
	
				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    cache = owner[this.expando];
	
				if (cache === undefined) {
					return;
				}
	
				if (key !== undefined) {
	
					// Support array or space separated string of keys
					if (jQuery.isArray(key)) {
	
						// If key is an array of keys...
						// We always set camelCase keys, so remove that.
						key = key.map(jQuery.camelCase);
					} else {
						key = jQuery.camelCase(key);
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
					}
	
					i = key.length;
	
					while (i--) {
						delete cache[key[i]];
					}
				}
	
				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {
	
					// Support: Chrome <=35 - 45
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function hasData(owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();
	
		var dataUser = new Data();
	
		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;
	
		function getData(data) {
			if (data === "true") {
				return true;
			}
	
			if (data === "false") {
				return false;
			}
	
			if (data === "null") {
				return null;
			}
	
			// Only convert to a number if it doesn't change the string
			if (data === +data + "") {
				return +data;
			}
	
			if (rbrace.test(data)) {
				return JSON.parse(data);
			}
	
			return data;
		}
	
		function dataAttr(elem, key, data) {
			var name;
	
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);
	
				if (typeof data === "string") {
					try {
						data = getData(data);
					} catch (e) {}
	
					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}
	
		jQuery.extend({
			hasData: function hasData(elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},
	
			data: function data(elem, name, _data) {
				return dataUser.access(elem, name, _data);
			},
	
			removeData: function removeData(elem, name) {
				dataUser.remove(elem, name);
			},
	
			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function _data(elem, name, data) {
				return dataPriv.access(elem, name, data);
			},
	
			_removeData: function _removeData(elem, name) {
				dataPriv.remove(elem, name);
			}
		});
	
		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;
	
				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);
	
						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {
	
								// Support: IE 11 only
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}
	
					return data;
				}
	
				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}
	
				return access(this, function (value) {
					var data;
	
					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {
	
						// Attempt to get data from the cache
						// The key will always be camelCased in Data
						data = dataUser.get(elem, key);
						if (data !== undefined) {
							return data;
						}
	
						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, key);
						if (data !== undefined) {
							return data;
						}
	
						// We tried really hard, but the data doesn't exist.
						return;
					}
	
					// Set the data...
					this.each(function () {
	
						// We always store the camelCased key
						dataUser.set(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},
	
			removeData: function removeData(key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});
	
		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;
	
				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);
	
					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},
	
			dequeue: function dequeue(elem, type) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};
	
				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}
	
				if (fn) {
	
					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}
	
				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},
	
			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});
	
		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;
	
				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}
	
				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}
	
				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);
	
					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);
	
					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},
	
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};
	
				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";
	
				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	
		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
	
		var cssExpand = ["Top", "Right", "Bottom", "Left"];
	
		var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" || elem.style.display === "" &&
	
			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
		};
	
		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};
	
			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}
	
			ret = callback.apply(elem, args || []);
	
			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}
	
			return ret;
		};
	
		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale = 1,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
	
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
	
			if (initialInUnit && initialInUnit[3] !== unit) {
	
				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];
	
				// Make sure we update the tween properties later on
				valueParts = valueParts || [];
	
				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;
	
				do {
	
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";
	
					// Adjust and apply
					initialInUnit = initialInUnit / scale;
					jQuery.style(elem, prop, initialInUnit + unit);
	
					// Update scale, tolerating zero or NaN from tween.cur()
					// Break the loop if scale is unchanged or perfect, or if we've just had enough.
				} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
			}
	
			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;
	
				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}
	
		var defaultDisplayMap = {};
	
		function getDefaultDisplay(elem) {
			var temp,
			    doc = elem.ownerDocument,
			    nodeName = elem.nodeName,
			    display = defaultDisplayMap[nodeName];
	
			if (display) {
				return display;
			}
	
			temp = doc.body.appendChild(doc.createElement(nodeName));
			display = jQuery.css(temp, "display");
	
			temp.parentNode.removeChild(temp);
	
			if (display === "none") {
				display = "block";
			}
			defaultDisplayMap[nodeName] = display;
	
			return display;
		}
	
		function showHide(elements, show) {
			var display,
			    elem,
			    values = [],
			    index = 0,
			    length = elements.length;
	
			// Determine new display value for elements that need to change
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
	
				display = elem.style.display;
				if (show) {
	
					// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
					// check is required in this first loop unless we have a nonempty display value (either
					// inline or about-to-be-restored)
					if (display === "none") {
						values[index] = dataPriv.get(elem, "display") || null;
						if (!values[index]) {
							elem.style.display = "";
						}
					}
					if (elem.style.display === "" && isHiddenWithinTree(elem)) {
						values[index] = getDefaultDisplay(elem);
					}
				} else {
					if (display !== "none") {
						values[index] = "none";
	
						// Remember what we're overwriting
						dataPriv.set(elem, "display", display);
					}
				}
			}
	
			// Set the display of the elements in a second loop to avoid constant reflow
			for (index = 0; index < length; index++) {
				if (values[index] != null) {
					elements[index].style.display = values[index];
				}
			}
	
			return elements;
		}
	
		jQuery.fn.extend({
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}
	
				return this.each(function () {
					if (isHiddenWithinTree(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
		var rcheckableType = /^(?:checkbox|radio)$/i;
	
		var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
	
		var rscriptType = /^$|\/(?:java|ecma)script/i;
	
		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {
	
			// Support: IE <=9 only
			option: [1, "<select multiple='multiple'>", "</select>"],
	
			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	
			_default: [0, "", ""]
		};
	
		// Support: IE <=9 only
		wrapMap.optgroup = wrapMap.option;
	
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		function getAll(context, tag) {
	
			// Support: IE <=9 - 11 only
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret;
	
			if (typeof context.getElementsByTagName !== "undefined") {
				ret = context.getElementsByTagName(tag || "*");
			} else if (typeof context.querySelectorAll !== "undefined") {
				ret = context.querySelectorAll(tag || "*");
			} else {
				ret = [];
			}
	
			if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
				return jQuery.merge([context], ret);
			}
	
			return ret;
		}
	
		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;
	
			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}
	
		var rhtml = /<|&#?\w+;/;
	
		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;
	
			for (; i < l; i++) {
				elem = elems[i];
	
				if (elem || elem === 0) {
	
					// Add nodes directly
					if (jQuery.type(elem) === "object") {
	
						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
	
						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));
	
						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));
	
						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
	
						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}
	
						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while (elem = nodes[i++]) {
	
				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}
	
				contains = jQuery.contains(elem.ownerDocument, elem);
	
				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");
	
				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}
	
				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}
	
			return fragment;
		}
	
		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");
	
			// Support: Android 4.0 - 4.3 only
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");
	
			div.appendChild(input);
	
			// Support: Android <=4.1 only
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
	
			// Support: IE <=11 only
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var documentElement = document.documentElement;
	
		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
		function returnTrue() {
			return true;
		}
	
		function returnFalse() {
			return false;
		}
	
		// Support: IE <=9 only
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}
	
		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
	
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
	
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}
	
			if (data == null && fn == null) {
	
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
	
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
	
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}
	
			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
	
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
	
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}
	
		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {
	
			global: {},
	
			add: function add(elem, types, handler, data, selector) {
	
				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);
	
				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}
	
				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}
	
				// Ensure that invalid selectors throw exceptions at attach time
				// Evaluate against documentElement in case elem is a non-element node (e.g., document)
				if (selector) {
					jQuery.find.matchesSelector(documentElement, selector);
				}
	
				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}
	
				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
	
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}
	
				// Handle multiple events separated by a space
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}
	
					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};
	
					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;
	
					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};
	
					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);
	
					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;
	
						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
	
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}
	
					if (special.add) {
						special.add.call(elem, handleObj);
	
						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}
	
					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}
	
					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},
	
			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {
	
				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
	
				if (!elemData || !(events = elemData.events)) {
					return;
				}
	
				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}
	
					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
	
					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];
	
						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);
	
							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}
	
					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
	
							jQuery.removeEvent(elem, type, elemData.handle);
						}
	
						delete events[type];
					}
				}
	
				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},
	
			dispatch: function dispatch(nativeEvent) {
	
				// Make a writable jQuery.Event from the native event object
				var event = jQuery.event.fix(nativeEvent);
	
				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue,
				    args = new Array(arguments.length),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};
	
				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
	
				for (i = 1; i < arguments.length; i++) {
					args[i] = arguments[i];
				}
	
				event.delegateTarget = this;
	
				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}
	
				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);
	
				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;
	
					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
	
						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
	
							event.handleObj = handleObj;
							event.data = handleObj.data;
	
							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
	
							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}
	
				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}
	
				return event.result;
			},
	
			handlers: function handlers(event, _handlers) {
				var i,
				    handleObj,
				    sel,
				    matchedHandlers,
				    matchedSelectors,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;
	
				// Find delegate handlers
				if (delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!(event.type === "click" && event.button >= 1)) {
	
					for (; cur !== this; cur = cur.parentNode || this) {
	
						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
							matchedHandlers = [];
							matchedSelectors = {};
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];
	
								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";
	
								if (matchedSelectors[sel] === undefined) {
									matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matchedSelectors[sel]) {
									matchedHandlers.push(handleObj);
								}
							}
							if (matchedHandlers.length) {
								handlerQueue.push({ elem: cur, handlers: matchedHandlers });
							}
						}
					}
				}
	
				// Add the remaining (directly-bound) handlers
				cur = this;
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
				}
	
				return handlerQueue;
			},
	
			addProp: function addProp(name, hook) {
				Object.defineProperty(jQuery.Event.prototype, name, {
					enumerable: true,
					configurable: true,
	
					get: jQuery.isFunction(hook) ? function () {
						if (this.originalEvent) {
							return hook(this.originalEvent);
						}
					} : function () {
						if (this.originalEvent) {
							return this.originalEvent[name];
						}
					},
	
					set: function set(value) {
						Object.defineProperty(this, name, {
							enumerable: true,
							configurable: true,
							writable: true,
							value: value
						});
					}
				});
			},
	
			fix: function fix(originalEvent) {
				return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
			},
	
			special: {
				load: {
	
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {
	
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
	
					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},
	
					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},
	
				beforeunload: {
					postDispatch: function postDispatch(event) {
	
						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};
	
		jQuery.removeEvent = function (elem, type, handle) {
	
			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};
	
		jQuery.Event = function (src, props) {
	
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}
	
			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;
	
				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
	
				// Support: Android <=2.3 only
				src.returnValue === false ? returnTrue : returnFalse;
	
				// Create target properties
				// Support: Safari <=6 - 7 only
				// Target should not be a text node (#504, #13143)
				this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
	
				this.currentTarget = src.currentTarget;
				this.relatedTarget = src.relatedTarget;
	
				// Event type
			} else {
				this.type = src;
			}
	
			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}
	
			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();
	
			// Mark it as fixed
			this[jQuery.expando] = true;
		};
	
		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: false,
	
			preventDefault: function preventDefault() {
				var e = this.originalEvent;
	
				this.isDefaultPrevented = returnTrue;
	
				if (e && !this.isSimulated) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;
	
				this.isPropagationStopped = returnTrue;
	
				if (e && !this.isSimulated) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;
	
				this.isImmediatePropagationStopped = returnTrue;
	
				if (e && !this.isSimulated) {
					e.stopImmediatePropagation();
				}
	
				this.stopPropagation();
			}
		};
	
		// Includes all common event props including KeyEvent and MouseEvent specific props
		jQuery.each({
			altKey: true,
			bubbles: true,
			cancelable: true,
			changedTouches: true,
			ctrlKey: true,
			detail: true,
			eventPhase: true,
			metaKey: true,
			pageX: true,
			pageY: true,
			shiftKey: true,
			view: true,
			"char": true,
			charCode: true,
			key: true,
			keyCode: true,
			button: true,
			buttons: true,
			clientX: true,
			clientY: true,
			offsetX: true,
			offsetY: true,
			pointerId: true,
			pointerType: true,
			screenX: true,
			screenY: true,
			targetTouches: true,
			toElement: true,
			touches: true,
	
			which: function which(event) {
				var button = event.button;
	
				// Add which for key events
				if (event.which == null && rkeyEvent.test(event.type)) {
					return event.charCode != null ? event.charCode : event.keyCode;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
					if (button & 1) {
						return 1;
					}
	
					if (button & 2) {
						return 3;
					}
	
					if (button & 4) {
						return 2;
					}
	
					return 0;
				}
	
				return event.which;
			}
		}, jQuery.event.addProp);
	
		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,
	
				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;
	
					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});
	
		jQuery.fn.extend({
	
			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
	
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
	
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
	
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});
	
		var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
		function manipulationTarget(elem, content) {
			if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
	
				return elem.getElementsByTagName("tbody")[0] || elem;
			}
	
			return elem;
		}
	
		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
	
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
	
			return elem;
		}
	
		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
			if (dest.nodeType !== 1) {
				return;
			}
	
			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;
	
				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};
	
					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}
	
			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);
	
				dataUser.set(dest, udataCur);
			}
		}
	
		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();
	
			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;
	
				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}
	
		function domManip(collection, args, callback, ignored) {
	
			// Flatten any nested arrays
			args = concat.apply([], args);
	
			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}
	
			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;
	
				if (fragment.childNodes.length === 1) {
					fragment = first;
				}
	
				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;
	
						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);
	
							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
	
								// Support: Android <=4.0 only, PhantomJS 1 only
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}
	
						callback.call(collection[i], node, i);
					}
	
					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;
	
						// Reenable scripts
						jQuery.map(scripts, restoreScript);
	
						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
	
								if (node.src) {
	
									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									DOMEval(node.textContent.replace(rcleanScript, ""), doc);
								}
							}
						}
					}
				}
			}
	
			return collection;
		}
	
		function _remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;
	
			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}
	
				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}
	
			return elem;
		}
	
		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},
	
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);
	
				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
	
					// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);
	
					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}
	
				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);
	
						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}
	
				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}
	
				// Return the cloned set
				return clone;
			},
	
			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;
	
				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
	
										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
	
							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {
	
							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});
	
		jQuery.fn.extend({
			detach: function detach(selector) {
				return _remove(this, selector, true);
			},
	
			remove: function remove(selector) {
				return _remove(this, selector);
			},
	
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},
	
			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},
	
			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},
	
			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},
	
			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},
	
			empty: function empty() {
				var elem,
				    i = 0;
	
				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
	
						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));
	
						// Remove any remaining nodes
						elem.textContent = "";
					}
				}
	
				return this;
			},
	
			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},
	
			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;
	
					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}
	
					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	
						value = jQuery.htmlPrefilter(value);
	
						try {
							for (; i < l; i++) {
								elem = this[i] || {};
	
								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}
	
							elem = 0;
	
							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}
	
					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},
	
			replaceWith: function replaceWith() {
				var ignored = [];
	
				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;
	
					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}
	
					// Force callback invocation
				}, ignored);
			}
		});
	
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;
	
				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// .get() because push.apply(_, arraylike) throws on ancient WebKit
					push.apply(ret, elems.get());
				}
	
				return this.pushStack(ret);
			};
		});
		var rmargin = /^margin/;
	
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	
		var getStyles = function getStyles(elem) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if (!view || !view.opener) {
				view = window;
			}
	
			return view.getComputedStyle(elem);
		};
	
		(function () {
	
			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {
	
				// This is a singleton, we need to execute it only once
				if (!div) {
					return;
				}
	
				div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
				div.innerHTML = "";
				documentElement.appendChild(container);
	
				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";
	
				// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
				reliableMarginLeftVal = divStyle.marginLeft === "2px";
				boxSizingReliableVal = divStyle.width === "4px";
	
				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = divStyle.marginRight === "4px";
	
				documentElement.removeChild(container);
	
				// Nullify the div so it wouldn't be stored in the memory and
				// it will also be a sign that checks already performed
				div = null;
			}
	
			var pixelPositionVal,
			    boxSizingReliableVal,
			    pixelMarginRightVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");
	
			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}
	
			// Support: IE <=9 - 11 only
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
			container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
			container.appendChild(div);
	
			jQuery.extend(support, {
				pixelPosition: function pixelPosition() {
					computeStyleTests();
					return pixelPositionVal;
				},
				boxSizingReliable: function boxSizingReliable() {
					computeStyleTests();
					return boxSizingReliableVal;
				},
				pixelMarginRight: function pixelMarginRight() {
					computeStyleTests();
					return pixelMarginRightVal;
				},
				reliableMarginLeft: function reliableMarginLeft() {
					computeStyleTests();
					return reliableMarginLeftVal;
				}
			});
		})();
	
		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;
	
			computed = computed || getStyles(elem);
	
			// Support: IE <=9 only
			// getPropertyValue is only needed for .css('filter') (#12537)
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];
	
				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// https://drafts.csswg.org/cssom/#resolved-values
				if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}
	
		function addGetHookIf(conditionFn, hookFn) {
	
			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					if (conditionFn()) {
	
						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}
	
					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}
	
		var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;
	
		// Return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {
	
			// Shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}
	
			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;
	
			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}
	
		function setPositiveNumber(elem, value, subtract) {
	
			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}
	
		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i,
			    val = 0;
	
			// If we already have the right measurement, avoid augmentation
			if (extra === (isBorderBox ? "border" : "content")) {
				i = 4;
	
				// Otherwise initialize for horizontal or vertical properties
			} else {
				i = name === "width" ? 1 : 0;
			}
	
			for (; i < 4; i += 2) {
	
				// Both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}
	
				if (isBorderBox) {
	
					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}
	
					// At this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
	
					// At this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	
					// At this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}
	
			return val;
		}
	
		function getWidthOrHeight(elem, name, extra) {
	
			// Start with offset property, which is equivalent to the border-box value
			var val,
			    valueIsBorderBox = true,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if (elem.getClientRects().length) {
				val = elem.getBoundingClientRect()[name];
			}
	
			// Some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {
	
				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}
	
				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}
	
				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
	
				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}
	
			// Use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}
	
		jQuery.extend({
	
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
	
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},
	
			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},
	
			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				"float": "cssFloat"
			},
	
			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {
	
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}
	
				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;
	
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
	
				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);
	
						// Fixes bug #9237
						type = "number";
					}
	
					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}
	
					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}
	
					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}
	
					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
	
						style[name] = value;
					}
				} else {
	
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
	
						return ret;
					}
	
					// Otherwise just get the value from the style object
					return style[name];
				}
			},
	
			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);
	
				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
	
				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}
	
				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}
	
				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}
	
				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
				return val;
			}
		});
	
		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
	
						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && (
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},
	
				set: function set(elem, value, extra) {
					var matches,
					    styles = extra && getStyles(elem),
					    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
	
					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
	
						elem.style[name] = value;
						value = jQuery.css(elem, name);
					}
	
					return setPositiveNumber(elem, value, subtract);
				}
			};
		});
	
		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});
	
		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
	
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];
	
					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}
	
					return expanded;
				}
			};
	
			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
	
		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;
	
					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;
	
						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}
	
						return map;
					}
	
					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			}
		});
	
		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;
	
		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];
	
				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];
	
				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;
	
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}
	
				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};
	
		Tween.prototype.init.prototype = Tween.prototype;
	
		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;
	
					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}
	
					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");
	
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
	
					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};
	
		// Support: IE <=9 only
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};
	
		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};
	
		jQuery.fx = Tween.prototype.init;
	
		// Back compat <1.8 extension point
		jQuery.fx.step = {};
	
		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;
	
		function raf() {
			if (timerId) {
				window.requestAnimationFrame(raf);
				jQuery.fx.tick();
			}
		}
	
		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}
	
		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };
	
			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}
	
			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}
	
			return attrs;
		}
	
		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
	
					// We're done with this property
					return tween;
				}
			}
		}
	
		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    hooks,
			    oldfire,
			    propTween,
			    restoreDisplay,
			    display,
			    isBox = "width" in props || "height" in props,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHiddenWithinTree(elem),
			    dataShow = dataPriv.get(elem, "fxshow");
	
			// Queue-skipping animations hijack the fx hooks
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;
	
				anim.always(function () {
	
					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}
	
			// Detect show/hide animations
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.test(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
	
						// Pretend to be hidden if this is a "show" and
						// there is still data from a stopped show/hide
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
	
							// Ignore all other no-op show/hide data
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				}
			}
	
			// Bail out if this is a no-op like .hide().hide()
			propTween = !jQuery.isEmptyObject(props);
			if (!propTween && jQuery.isEmptyObject(orig)) {
				return;
			}
	
			// Restrict "overflow" and "display" styles during box animations
			if (isBox && elem.nodeType === 1) {
	
				// Support: IE <=9 - 11, Edge 12 - 13
				// Record all 3 overflow attributes because IE does not infer the shorthand
				// from identically-valued overflowX and overflowY
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];
	
				// Identify a display type, preferring old show/hide data over the CSS cascade
				restoreDisplay = dataShow && dataShow.display;
				if (restoreDisplay == null) {
					restoreDisplay = dataPriv.get(elem, "display");
				}
				display = jQuery.css(elem, "display");
				if (display === "none") {
					if (restoreDisplay) {
						display = restoreDisplay;
					} else {
	
						// Get nonempty value(s) by temporarily forcing visibility
						showHide([elem], true);
						restoreDisplay = elem.style.display || restoreDisplay;
						display = jQuery.css(elem, "display");
						showHide([elem]);
					}
				}
	
				// Animate inline elements as inline-block
				if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
					if (jQuery.css(elem, "float") === "none") {
	
						// Restore the original display value at the end of pure show/hide animations
						if (!propTween) {
							anim.done(function () {
								style.display = restoreDisplay;
							});
							if (restoreDisplay == null) {
								display = style.display;
								restoreDisplay = display === "none" ? "" : display;
							}
						}
						style.display = "inline-block";
					}
				}
			}
	
			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
	
			// Implement show/hide animations
			propTween = false;
			for (prop in orig) {
	
				// General show/hide setup for this element animation
				if (!propTween) {
					if (dataShow) {
						if ("hidden" in dataShow) {
							hidden = dataShow.hidden;
						}
					} else {
						dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
					}
	
					// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
					if (toggle) {
						dataShow.hidden = !hidden;
					}
	
					// Show elements before animating them
					if (hidden) {
						showHide([elem], true);
					}
	
					/* eslint-disable no-loop-func */
	
					anim.done(function () {
	
						/* eslint-enable no-loop-func */
	
						// The final step of a "hide" animation is actually hiding the element
						if (!hidden) {
							showHide([elem]);
						}
						dataPriv.remove(elem, "fxshow");
						for (prop in orig) {
							jQuery.style(elem, prop, orig[prop]);
						}
					});
				}
	
				// Per-property setup
				propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = propTween.start;
					if (hidden) {
						propTween.end = propTween.start;
						propTween.start = 0;
					}
				}
			}
		}
	
		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;
	
			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}
	
				if (index !== name) {
					props[name] = value;
					delete props[index];
				}
	
				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];
	
					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}
	
		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
	
	
				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;
	
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
	
				deferred.notifyWith(elem, [animation, percent, remaining]);
	
				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
	
	
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;
	
			propFilter(props, animation.opts.specialEasing);
	
			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (jQuery.isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
					}
					return result;
				}
			}
	
			jQuery.map(props, createTween, animation);
	
			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}
	
			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));
	
			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}
	
		jQuery.Animation = jQuery.extend(Animation, {
	
			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},
	
			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnothtmlwhite);
				}
	
				var prop,
				    index = 0,
				    length = props.length;
	
				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},
	
			prefilters: [defaultPrefilter],
	
			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});
	
		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};
	
			// Go to the end state if fx are off or if document is hidden
			if (jQuery.fx.off || document.hidden) {
				opt.duration = 0;
			} else {
				if (typeof opt.duration !== "number") {
					if (opt.duration in jQuery.fx.speeds) {
						opt.duration = jQuery.fx.speeds[opt.duration];
					} else {
						opt.duration = jQuery.fx.speeds._default;
					}
				}
			}
	
			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}
	
			// Queueing
			opt.old = opt.complete;
	
			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}
	
				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};
	
			return opt;
		};
	
		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
	
				// Show any hidden elements after setting opacity to 0
				return this.filter(isHiddenWithinTree).css("opacity", 0).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);
	
					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;
	
				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};
	
				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}
	
				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);
	
					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
	
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}
	
					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;
	
					// Enable finishing flag on private data
					data.finish = true;
	
					// Empty the queue first
					jQuery.queue(this, type, []);
	
					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}
	
					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}
	
					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}
	
					// Turn off finishing flag
					delete data.finish;
				});
			}
		});
	
		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});
	
		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});
	
		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;
	
			fxNow = jQuery.now();
	
			for (; i < timers.length; i++) {
				timer = timers[i];
	
				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}
	
			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};
	
		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};
	
		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};
	
		jQuery.fx.stop = function () {
			if (window.cancelAnimationFrame) {
				window.cancelAnimationFrame(timerId);
			} else {
				window.clearInterval(timerId);
			}
	
			timerId = null;
		};
	
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
	
			// Default speed
			_default: 400
		};
	
		// Based off of the plugin by Clint Helfers, with permission.
		// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";
	
			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};
	
		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));
	
			input.type = "checkbox";
	
			// Support: Android <=4.3 only
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";
	
			// Support: IE <=11 only
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;
	
			// Support: IE <=11 only
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();
	
		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;
	
		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},
	
			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});
	
		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;
	
				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}
	
				// Attribute hooks are determined by the lowercase version
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}
	
				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}
	
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}
	
					elem.setAttribute(name, value + "");
					return value;
				}
	
				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}
	
				ret = jQuery.find.attr(elem, name);
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},
	
			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},
	
			removeAttr: function removeAttr(elem, value) {
				var name,
				    i = 0,
	
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match(rnothtmlwhite);
	
				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						elem.removeAttribute(name);
					}
				}
			}
		});
	
		// Hooks for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
	
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
	
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;
	
			attrHandle[name] = function (elem, name, isXML) {
				var ret,
				    handle,
				    lowercaseName = name.toLowerCase();
	
				if (!isXML) {
	
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[lowercaseName];
					attrHandle[lowercaseName] = ret;
					ret = getter(elem, name, isXML) != null ? lowercaseName : null;
					attrHandle[lowercaseName] = handle;
				}
				return ret;
			};
		});
	
		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;
	
		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},
	
			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});
	
		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;
	
				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
	
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}
	
				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}
	
					return elem[name] = value;
				}
	
				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}
	
				return elem[name];
			},
	
			propHooks: {
				tabIndex: {
					get: function get(elem) {
	
						// Support: IE <=9 - 11 only
						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");
	
						if (tabindex) {
							return parseInt(tabindex, 10);
						}
	
						if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
							return 0;
						}
	
						return -1;
					}
				}
			},
	
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});
	
		// Support: IE <=11 only
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		// eslint rule "no-unused-expressions" is disabled for this code
		// since it considers such accessions noop
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
	
					/* eslint no-unused-expressions: "off" */
	
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				},
				set: function set(elem) {
	
					/* eslint no-unused-expressions: "off" */
	
					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;
	
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}
	
		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse(value) {
			var tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(" ");
		}
	
		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}
	
		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}
	
				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];
	
					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
	
							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}
	
				return this;
			},
	
			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}
	
				if (!arguments.length) {
					return this.attr("class", "");
				}
	
				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];
	
					while (elem = this[i++]) {
						curValue = getClass(elem);
	
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
	
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
	
							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}
	
				return this;
			},
	
			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}
	
				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}
	
				return this.each(function () {
					var className, i, self, classNames;
	
					if (type === "string") {
	
						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = value.match(rnothtmlwhite) || [];
	
						while (className = classNames[i++]) {
	
							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
	
						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {
	
							// Store className if set
							dataPriv.set(this, "__className__", className);
						}
	
						// If the element has a class name or if we're passed `false`,
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						if (this.setAttribute) {
							this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
						}
					}
				});
			},
	
			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;
	
				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
						return true;
					}
				}
	
				return false;
			}
		});
	
		var rreturn = /\r/g;
	
		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];
	
				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
	
						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}
	
						ret = elem.value;
	
						// Handle most common string cases
						if (typeof ret === "string") {
							return ret.replace(rreturn, "");
						}
	
						// Handle cases where value is null/undef or number
						return ret == null ? "" : ret;
					}
	
					return;
				}
	
				isFunction = jQuery.isFunction(value);
	
				return this.each(function (i) {
					var val;
	
					if (this.nodeType !== 1) {
						return;
					}
	
					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}
	
					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}
	
					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
	
					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});
	
		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
	
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    i,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one",
						    values = one ? null : [],
						    max = one ? index + 1 : options.length;
	
						if (index < 0) {
							i = max;
						} else {
							i = one ? index : 0;
						}
	
						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];
	
							// Support: IE <=9 only
							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) &&
	
							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
	
								// Get the specific value for the option
								value = jQuery(option).val();
	
								// We don't need an array for one selects
								if (one) {
									return value;
								}
	
								// Multi-Selects return an array
								values.push(value);
							}
						}
	
						return values;
					},
	
					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;
	
						while (i--) {
							option = options[i];
	
							/* eslint-disable no-cond-assign */
	
							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}
	
							/* eslint-enable no-cond-assign */
						}
	
						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});
	
		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});
	
		// Return jQuery for attributes-only inclusion
	
	
		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
		jQuery.extend(jQuery.event, {
	
			trigger: function trigger(event, data, elem, onlyHandlers) {
	
				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	
				cur = tmp = elem = elem || document;
	
				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}
	
				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}
	
				if (type.indexOf(".") > -1) {
	
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;
	
				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);
	
				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	
				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}
	
				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);
	
				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}
	
				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
	
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}
	
					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}
	
				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
	
					event.type = i > 1 ? bubbleType : special.bindType || type;
	
					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}
	
					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;
	
				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {
	
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
	
						// Call a native DOM method on the target with the same name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
	
							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];
	
							if (tmp) {
								elem[ontype] = null;
							}
	
							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;
	
							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}
	
				return event.result;
			},
	
			// Piggyback on a donor event to simulate a different one
			// Used only for `focus(in | out)` events
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true
				});
	
				jQuery.event.trigger(e, null, elem);
			}
	
		});
	
		jQuery.fn.extend({
	
			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});
	
		jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
	
			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});
	
		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});
	
		support.focusin = "onfocusin" in window;
	
		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
	
				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};
	
				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);
	
						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;
	
						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;
	
		var nonce = jQuery.now();
	
		var rquery = /\?/;
	
		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}
	
			// Support: IE 9 - 11 only
			// IE throws on parseFromString with invalid input.
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}
	
			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};
	
		var rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
		function buildParams(prefix, obj, traditional, add) {
			var name;
	
			if (jQuery.isArray(obj)) {
	
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
	
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
	
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
	
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
	
				// Serialize scalar item.
				add(prefix, obj);
			}
		}
	
		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, valueOrFunction) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
	
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
			};
	
			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
	
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
	
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}
	
			// Return the resulting serialization
			return s.join("&");
		};
	
		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
	
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
	
					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();
	
					if (val == null) {
						return null;
					}
	
					if (jQuery.isArray(val)) {
						return jQuery.map(val, function (val) {
							return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
						});
					}
	
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});
	
		var r20 = /%20/g,
		    rhash = /#.*$/,
		    rantiCache = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
	
	
		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
	
	
		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
	
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),
	
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;
	
		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {
	
			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {
	
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}
	
				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
	
				if (jQuery.isFunction(func)) {
	
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
	
						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
	
							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}
	
		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	
			var inspected = {},
			    seekingTransport = structure === transports;
	
			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
	
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}
	
			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}
	
		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}
	
			return target;
		}
	
		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {
	
			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;
	
			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}
	
			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}
	
			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
	
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
	
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}
	
			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}
	
		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
	
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}
	
			current = dataTypes.shift();
	
			// Convert to each sequential dataType
			while (current) {
	
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}
	
				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}
	
				prev = current;
				current = dataTypes.shift();
	
				if (current) {
	
					// There's only work to do if current dataType is non-auto
					if (current === "*") {
	
						current = prev;
	
						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {
	
						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];
	
						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {
	
								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
	
									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
	
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];
	
											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}
	
						// Apply converter (if not an equivalence)
						if (conv !== true) {
	
							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}
	
			return { state: "success", data: response };
		}
	
		jQuery.extend({
	
			// Counter for holding the number of active queries
			active: 0,
	
			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},
	
			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */
	
				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
	
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
	
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
	
				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {
	
					// Convert anything to text
					"* text": String,
	
					// Text to html (true = no transformation)
					"text html": true,
	
					// Evaluate text as a json expression
					"text json": JSON.parse,
	
					// Parse text as xml
					"text xml": jQuery.parseXML
				},
	
				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},
	
			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?
	
				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
	
				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},
	
			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),
	
			// Main method
			ajax: function ajax(url, options) {
	
				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}
	
				// Force options to be an object
				options = options || {};
	
				var transport,
	
	
				// URL without anti-cache param
				cacheURL,
	
	
				// Response headers
				responseHeadersString,
				    responseHeaders,
	
	
				// timeout handle
				timeoutTimer,
	
	
				// Url cleanup var
				urlAnchor,
	
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
	
				// To know if global events are to be dispatched
				fireGlobals,
	
	
				// Loop variable
				i,
	
	
				// uncached part of the url
				uncached,
	
	
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
	
	
				// Callbacks context
				callbackContext = s.context || s,
	
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
	
	
				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
	
	
				// Status-dependent callbacks
				_statusCode = s.statusCode || {},
	
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
	
	
				// Default abort message
				strAbort = "canceled",
	
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (completed) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						if (completed == null) {
							name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (completed == null) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (completed) {
	
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
	
				// Attach deferreds
				deferred.promise(jqXHR);
	
				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
	
				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;
	
				// Extract dataTypes list
				s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
	
				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");
	
					// Support: IE <=8 - 11, Edge 12 - 13
					// IE throws exception on accessing the href property if url is malformed,
					// e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;
	
						// Support: IE <=8 - 11 only
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {
	
						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}
	
				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}
	
				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
	
				// If request was aborted inside a prefilter, stop there
				if (completed) {
					return jqXHR;
				}
	
				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;
	
				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}
	
				// Uppercase the type
				s.type = s.type.toUpperCase();
	
				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);
	
				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				// Remove hash to simplify url manipulation
				cacheURL = s.url.replace(rhash, "");
	
				// More options handling for requests with no content
				if (!s.hasContent) {
	
					// Remember the hash so we can put it back
					uncached = s.url.slice(cacheURL.length);
	
					// If data is available, append data to url
					if (s.data) {
						cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
	
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}
	
					// Add or update anti-cache param if needed
					if (s.cache === false) {
						cacheURL = cacheURL.replace(rantiCache, "$1");
						uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
					}
	
					// Put hash and anti-cache on the URL that will be requested (gh-1732)
					s.url = cacheURL + uncached;
	
					// Change '%20' to '+' if this is encoded form body content (gh-2658)
				} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
					s.data = s.data.replace(r20, "+");
				}
	
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}
	
				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}
	
				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
	
				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}
	
				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
	
					// Abort if not done already and return
					return jqXHR.abort();
				}
	
				// Aborting is no longer a cancellation
				strAbort = "abort";
	
				// Install callbacks on deferreds
				completeDeferred.add(s.complete);
				jqXHR.done(s.success);
				jqXHR.fail(s.error);
	
				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
	
				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;
	
					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
	
					// If request was aborted inside ajaxSend, stop there
					if (completed) {
						return jqXHR;
					}
	
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}
	
					try {
						completed = false;
						transport.send(requestHeaders, done);
					} catch (e) {
	
						// Rethrow post-completion exceptions
						if (completed) {
							throw e;
						}
	
						// Propagate others as results
						done(-1, e);
					}
				}
	
				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;
	
					// Ignore repeat invocations
					if (completed) {
						return;
					}
	
					completed = true;
	
					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}
	
					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;
	
					// Cache response headers
					responseHeadersString = headers || "";
	
					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;
	
					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;
	
					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}
	
					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);
	
					// If successful, handle type chaining
					if (isSuccess) {
	
						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}
	
						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
	
							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";
	
							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
	
						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}
	
					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";
	
					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}
	
					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;
	
					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}
	
					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
	
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}
	
				return jqXHR;
			},
	
			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},
	
			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});
	
		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
	
				// Shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}
	
				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});
	
		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
	
				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,
				"throws": true
			});
		};
	
		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				var wrap;
	
				if (this[0]) {
					if (jQuery.isFunction(html)) {
						html = html.call(this[0]);
					}
	
					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
	
					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}
	
					wrap.map(function () {
						var elem = this;
	
						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}
	
						return elem;
					}).append(this);
				}
	
				return this;
			},
	
			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}
	
				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();
	
					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},
	
			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);
	
				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},
	
			unwrap: function unwrap(selector) {
				this.parent(selector).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes);
				});
				return this;
			}
		});
	
		jQuery.expr.pseudos.hidden = function (elem) {
			return !jQuery.expr.pseudos.visible(elem);
		};
		jQuery.expr.pseudos.visible = function (elem) {
			return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
		};
	
		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};
	
		var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();
	
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;
	
		jQuery.ajaxTransport(function (options) {
			var _callback, errorCallback;
	
			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr();
	
						xhr.open(options.type, options.url, options.async, options.username, options.password);
	
						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}
	
						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
	
						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}
	
						// Callback
						_callback = function callback(type) {
							return function () {
								if (_callback) {
									_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {
	
										// Support: IE <=9 only
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};
	
						// Listen to events
						xhr.onload = _callback();
						errorCallback = xhr.onerror = _callback("error");
	
						// Support: IE 9 only
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {
	
								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {
	
									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (_callback) {
											errorCallback();
										}
									});
								}
							};
						}
	
						// Create the abort callback
						_callback = _callback("abort");
	
						try {
	
							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {
	
							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (_callback) {
								throw e;
							}
						}
					},
	
					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});
	
		// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
		jQuery.ajaxPrefilter(function (s) {
			if (s.crossDomain) {
				s.contents.script = false;
			}
		});
	
		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});
	
		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});
	
		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {
	
			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});
	
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});
	
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;
	
		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});
	
		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
	
			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {
	
				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
	
				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}
	
				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};
	
				// Force json dataType
				s.dataTypes[0] = "json";
	
				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};
	
				// Clean-up function (fires after converters)
				jqXHR.always(function () {
	
					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);
	
						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}
	
					// Save back as free
					if (s[callbackName]) {
	
						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;
	
						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}
	
					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}
	
					responseContainer = overwritten = undefined;
				});
	
				// Delegate to script
				return "script";
			}
		});
	
		// Support: Safari 8 only
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();
	
		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (typeof data !== "string") {
				return [];
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
	
			var base, parsed, scripts;
	
			if (!context) {
	
				// Stop scripts or inline event handlers from being executed immediately
				// by using document.implementation
				if (support.createHTMLDocument) {
					context = document.implementation.createHTMLDocument("");
	
					// Set the base href for the created document
					// so any parsed elements with URLs
					// are based on the document's URL (gh-2965)
					base = context.createElement("base");
					base.href = document.location.href;
					context.head.appendChild(base);
				} else {
					context = document;
				}
			}
	
			parsed = rsingleTag.exec(data);
			scripts = !keepScripts && [];
	
			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}
	
			parsed = buildFragment([data], context, scripts);
	
			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}
	
			return jQuery.merge([], parsed.childNodes);
		};
	
		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");
	
			if (off > -1) {
				selector = stripAndCollapse(url.slice(off));
				url = url.slice(0, off);
			}
	
			// If it's a function
			if (jQuery.isFunction(params)) {
	
				// We assume that it's the callback
				callback = params;
				params = undefined;
	
				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}
	
			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,
	
					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {
	
					// Save response for use in complete callback
					response = arguments;
	
					self.html(selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
	
					// Otherwise use the full result
					responseText);
	
					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}
	
			return this;
		};
	
		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});
	
		jQuery.expr.pseudos.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	
		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}
	
		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};
	
				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}
	
				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
	
				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}
	
				if (jQuery.isFunction(options)) {
	
					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}
	
				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}
	
				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};
	
		jQuery.fn.extend({
			offset: function offset(options) {
	
				// Preserve chaining for setter
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}
	
				var docElem,
				    win,
				    rect,
				    doc,
				    elem = this[0];
	
				if (!elem) {
					return;
				}
	
				// Support: IE <=11 only
				// Running getBoundingClientRect on a
				// disconnected node in IE throws an error
				if (!elem.getClientRects().length) {
					return { top: 0, left: 0 };
				}
	
				rect = elem.getBoundingClientRect();
	
				// Make sure element is not hidden (display: none)
				if (rect.width || rect.height) {
					doc = elem.ownerDocument;
					win = getWindow(doc);
					docElem = doc.documentElement;
	
					return {
						top: rect.top + win.pageYOffset - docElem.clientTop,
						left: rect.left + win.pageXOffset - docElem.clientLeft
					};
				}
	
				// Return zeros for disconnected and hidden elements (gh-2310)
				return rect;
			},
	
			position: function position() {
				if (!this[0]) {
					return;
				}
	
				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };
	
				// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
				// because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {
	
					// Assume getBoundingClientRect is there when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
	
					// Get *real* offsetParent
					offsetParent = this.offsetParent();
	
					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}
	
					// Add offsetParent borders
					parentOffset = {
						top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
						left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
					};
				}
	
				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},
	
			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;
	
					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || documentElement;
				});
			}
		});
	
		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;
	
			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);
	
					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}
	
					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});
	
		// Support: Safari <=7 - 9.1, Chrome <=37 - 49
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});
	
		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
	
				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	
					return access(this, function (elem, type, value) {
						var doc;
	
						if (jQuery.isWindow(elem)) {
	
							// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
							return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
						}
	
						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;
	
							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}
	
						return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :
	
						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable);
				};
			});
		});
	
		jQuery.fn.extend({
	
			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},
	
			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
	
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});
	
		jQuery.parseJSON = JSON.parse;
	
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
	
		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}
	
			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		};
	
		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}
	
		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  F: __webpack_require__(10),
	  T: __webpack_require__(14),
	  __: __webpack_require__(15),
	  add: __webpack_require__(16),
	  addIndex: __webpack_require__(18),
	  adjust: __webpack_require__(23),
	  all: __webpack_require__(25),
	  allPass: __webpack_require__(32),
	  always: __webpack_require__(11),
	  and: __webpack_require__(48),
	  any: __webpack_require__(49),
	  anyPass: __webpack_require__(51),
	  ap: __webpack_require__(52),
	  aperture: __webpack_require__(53),
	  append: __webpack_require__(56),
	  apply: __webpack_require__(57),
	  applySpec: __webpack_require__(58),
	  ascend: __webpack_require__(60),
	  assoc: __webpack_require__(61),
	  assocPath: __webpack_require__(62),
	  binary: __webpack_require__(64),
	  bind: __webpack_require__(39),
	  both: __webpack_require__(66),
	  call: __webpack_require__(70),
	  chain: __webpack_require__(72),
	  clamp: __webpack_require__(77),
	  clone: __webpack_require__(78),
	  comparator: __webpack_require__(82),
	  complement: __webpack_require__(83),
	  compose: __webpack_require__(85),
	  composeK: __webpack_require__(92),
	  composeP: __webpack_require__(93),
	  concat: __webpack_require__(96),
	  cond: __webpack_require__(114),
	  construct: __webpack_require__(115),
	  constructN: __webpack_require__(116),
	  contains: __webpack_require__(117),
	  converge: __webpack_require__(118),
	  countBy: __webpack_require__(119),
	  curry: __webpack_require__(71),
	  curryN: __webpack_require__(20),
	  dec: __webpack_require__(122),
	  descend: __webpack_require__(123),
	  defaultTo: __webpack_require__(124),
	  difference: __webpack_require__(125),
	  differenceWith: __webpack_require__(126),
	  dissoc: __webpack_require__(128),
	  dissocPath: __webpack_require__(129),
	  divide: __webpack_require__(130),
	  drop: __webpack_require__(131),
	  dropLast: __webpack_require__(133),
	  dropLastWhile: __webpack_require__(138),
	  dropRepeats: __webpack_require__(141),
	  dropRepeatsWith: __webpack_require__(143),
	  dropWhile: __webpack_require__(146),
	  either: __webpack_require__(148),
	  empty: __webpack_require__(150),
	  eqBy: __webpack_require__(151),
	  eqProps: __webpack_require__(152),
	  equals: __webpack_require__(101),
	  evolve: __webpack_require__(153),
	  filter: __webpack_require__(110),
	  find: __webpack_require__(154),
	  findIndex: __webpack_require__(156),
	  findLast: __webpack_require__(158),
	  findLastIndex: __webpack_require__(160),
	  flatten: __webpack_require__(162),
	  flip: __webpack_require__(163),
	  forEach: __webpack_require__(164),
	  forEachObjIndexed: __webpack_require__(165),
	  fromPairs: __webpack_require__(166),
	  groupBy: __webpack_require__(167),
	  groupWith: __webpack_require__(168),
	  gt: __webpack_require__(169),
	  gte: __webpack_require__(170),
	  has: __webpack_require__(171),
	  hasIn: __webpack_require__(172),
	  head: __webpack_require__(173),
	  identical: __webpack_require__(105),
	  identity: __webpack_require__(174),
	  ifElse: __webpack_require__(176),
	  inc: __webpack_require__(177),
	  indexBy: __webpack_require__(178),
	  indexOf: __webpack_require__(179),
	  init: __webpack_require__(180),
	  insert: __webpack_require__(181),
	  insertAll: __webpack_require__(182),
	  intersection: __webpack_require__(183),
	  intersectionWith: __webpack_require__(187),
	  intersperse: __webpack_require__(189),
	  into: __webpack_require__(190),
	  invert: __webpack_require__(195),
	  invertObj: __webpack_require__(196),
	  invoker: __webpack_require__(197),
	  is: __webpack_require__(198),
	  isArrayLike: __webpack_require__(40),
	  isEmpty: __webpack_require__(199),
	  isNil: __webpack_require__(200),
	  join: __webpack_require__(201),
	  juxt: __webpack_require__(202),
	  keys: __webpack_require__(43),
	  keysIn: __webpack_require__(203),
	  last: __webpack_require__(144),
	  lastIndexOf: __webpack_require__(204),
	  length: __webpack_require__(205),
	  lens: __webpack_require__(207),
	  lensIndex: __webpack_require__(208),
	  lensPath: __webpack_require__(210),
	  lensProp: __webpack_require__(212),
	  lift: __webpack_require__(68),
	  liftN: __webpack_require__(69),
	  lt: __webpack_require__(213),
	  lte: __webpack_require__(214),
	  map: __webpack_require__(35),
	  mapAccum: __webpack_require__(215),
	  mapAccumRight: __webpack_require__(216),
	  mapObjIndexed: __webpack_require__(217),
	  match: __webpack_require__(218),
	  mathMod: __webpack_require__(219),
	  max: __webpack_require__(33),
	  maxBy: __webpack_require__(220),
	  mean: __webpack_require__(221),
	  median: __webpack_require__(223),
	  memoize: __webpack_require__(224),
	  merge: __webpack_require__(225),
	  mergeAll: __webpack_require__(226),
	  mergeWith: __webpack_require__(227),
	  mergeWithKey: __webpack_require__(228),
	  min: __webpack_require__(229),
	  minBy: __webpack_require__(230),
	  modulo: __webpack_require__(231),
	  multiply: __webpack_require__(232),
	  nAry: __webpack_require__(65),
	  negate: __webpack_require__(233),
	  none: __webpack_require__(234),
	  not: __webpack_require__(84),
	  nth: __webpack_require__(145),
	  nthArg: __webpack_require__(235),
	  objOf: __webpack_require__(194),
	  of: __webpack_require__(236),
	  omit: __webpack_require__(238),
	  once: __webpack_require__(239),
	  or: __webpack_require__(149),
	  over: __webpack_require__(240),
	  pair: __webpack_require__(241),
	  partial: __webpack_require__(242),
	  partialRight: __webpack_require__(244),
	  partition: __webpack_require__(245),
	  path: __webpack_require__(211),
	  pathEq: __webpack_require__(246),
	  pathOr: __webpack_require__(247),
	  pathSatisfies: __webpack_require__(248),
	  pick: __webpack_require__(249),
	  pickAll: __webpack_require__(250),
	  pickBy: __webpack_require__(251),
	  pipe: __webpack_require__(86),
	  pipeK: __webpack_require__(252),
	  pipeP: __webpack_require__(94),
	  pluck: __webpack_require__(34),
	  prepend: __webpack_require__(253),
	  product: __webpack_require__(254),
	  project: __webpack_require__(255),
	  prop: __webpack_require__(46),
	  propEq: __webpack_require__(257),
	  propIs: __webpack_require__(258),
	  propOr: __webpack_require__(259),
	  propSatisfies: __webpack_require__(260),
	  props: __webpack_require__(261),
	  range: __webpack_require__(262),
	  reduce: __webpack_require__(47),
	  reduceBy: __webpack_require__(120),
	  reduceRight: __webpack_require__(263),
	  reduceWhile: __webpack_require__(264),
	  reduced: __webpack_require__(265),
	  reject: __webpack_require__(108),
	  remove: __webpack_require__(266),
	  repeat: __webpack_require__(267),
	  replace: __webpack_require__(269),
	  reverse: __webpack_require__(91),
	  scan: __webpack_require__(270),
	  sequence: __webpack_require__(271),
	  set: __webpack_require__(272),
	  slice: __webpack_require__(90),
	  sort: __webpack_require__(273),
	  sortBy: __webpack_require__(274),
	  sortWith: __webpack_require__(275),
	  split: __webpack_require__(276),
	  splitAt: __webpack_require__(277),
	  splitEvery: __webpack_require__(278),
	  splitWhen: __webpack_require__(279),
	  subtract: __webpack_require__(280),
	  sum: __webpack_require__(222),
	  symmetricDifference: __webpack_require__(281),
	  symmetricDifferenceWith: __webpack_require__(282),
	  tail: __webpack_require__(88),
	  take: __webpack_require__(135),
	  takeLast: __webpack_require__(283),
	  takeLastWhile: __webpack_require__(284),
	  takeWhile: __webpack_require__(285),
	  tap: __webpack_require__(287),
	  test: __webpack_require__(288),
	  times: __webpack_require__(268),
	  toLower: __webpack_require__(290),
	  toPairs: __webpack_require__(291),
	  toPairsIn: __webpack_require__(292),
	  toString: __webpack_require__(97),
	  toUpper: __webpack_require__(293),
	  transduce: __webpack_require__(294),
	  transpose: __webpack_require__(295),
	  traverse: __webpack_require__(296),
	  trim: __webpack_require__(297),
	  tryCatch: __webpack_require__(298),
	  type: __webpack_require__(81),
	  unapply: __webpack_require__(299),
	  unary: __webpack_require__(300),
	  uncurryN: __webpack_require__(301),
	  unfold: __webpack_require__(302),
	  union: __webpack_require__(303),
	  unionWith: __webpack_require__(304),
	  uniq: __webpack_require__(184),
	  uniqBy: __webpack_require__(185),
	  uniqWith: __webpack_require__(188),
	  unless: __webpack_require__(305),
	  unnest: __webpack_require__(306),
	  until: __webpack_require__(307),
	  update: __webpack_require__(209),
	  useWith: __webpack_require__(256),
	  values: __webpack_require__(59),
	  valuesIn: __webpack_require__(308),
	  view: __webpack_require__(309),
	  when: __webpack_require__(310),
	  where: __webpack_require__(311),
	  whereEq: __webpack_require__(312),
	  without: __webpack_require__(313),
	  xprod: __webpack_require__(314),
	  zip: __webpack_require__(315),
	  zipObj: __webpack_require__(316),
	  zipWith: __webpack_require__(317)
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var always = __webpack_require__(11);
	
	/**
	 * A function that always returns `false`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.T
	 * @example
	 *
	 *      R.F(); //=> false
	 */
	module.exports = always(false);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> (* -> a)
	 * @param {*} val The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 * @example
	 *
	 *      var t = R.always('Tee');
	 *      t(); //=> 'Tee'
	 */
	module.exports = _curry1(function always(val) {
	  return function () {
	    return val;
	  };
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _isPlaceholder = __webpack_require__(13);
	
	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function _isPlaceholder(a) {
	       return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var always = __webpack_require__(11);
	
	/**
	 * A function that always returns `true`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.F
	 * @example
	 *
	 *      R.T(); //=> true
	 */
	module.exports = always(true);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments, regardless of
	 * their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are
	 * equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	module.exports = { '@@functional/placeholder': true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Adds two values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
	 * @see R.subtract
	 * @example
	 *
	 *      R.add(2, 3);       //=>  5
	 *      R.add(7)(10);      //=> 17
	 */
	module.exports = _curry2(function add(a, b) {
	  return Number(a) + Number(b);
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _isPlaceholder = __webpack_require__(13);
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	          return fn(a, _b);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b);
	        }) : fn(a, b);
	    }
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry1 = __webpack_require__(12);
	var curryN = __webpack_require__(20);
	
	/**
	 * Creates a new list iteration function from an existing one by adding two new
	 * parameters to its callback function: the current index, and the entire list.
	 *
	 * This would turn, for instance, Ramda's simple `map` function into one that
	 * more closely resembles `Array.prototype.map`. Note that this will only work
	 * for functions in which the iteration callback function is the first
	 * parameter, and where the list is the last parameter. (This latter might be
	 * unimportant if the list parameter is not used.)
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Function
	 * @category List
	 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	 * @param {Function} fn A list iteration function that does not pass index or list to its callback
	 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	 * @example
	 *
	 *      var mapIndexed = R.addIndex(R.map);
	 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	 */
	module.exports = _curry1(function addIndex(fn) {
	  return curryN(fn.length, function () {
	    var idx = 0;
	    var origFn = arguments[0];
	    var list = arguments[arguments.length - 1];
	    var args = Array.prototype.slice.call(arguments, 0);
	    args[0] = function () {
	      var result = origFn.apply(this, _concat(arguments, [idx, list]));
	      idx += 1;
	      return result;
	    };
	    return fn.apply(this, args);
	  });
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Private `concat` function to merge two array-like objects.
	 *
	 * @private
	 * @param {Array|Arguments} [set1=[]] An array-like object.
	 * @param {Array|Arguments} [set2=[]] An array-like object.
	 * @return {Array} A new, merged array.
	 * @example
	 *
	 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 */
	module.exports = function _concat(set1, set2) {
	  set1 = set1 || [];
	  set2 = set2 || [];
	  var idx;
	  var len1 = set1.length;
	  var len2 = set2.length;
	  var result = [];
	
	  idx = 0;
	  while (idx < len1) {
	    result[result.length] = set1[idx];
	    idx += 1;
	  }
	  idx = 0;
	  while (idx < len2) {
	    result[result.length] = set2[idx];
	    idx += 1;
	  }
	  return result;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry1 = __webpack_require__(12);
	var _curry2 = __webpack_require__(17);
	var _curryN = __webpack_require__(22);
	
	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.apply(this, arguments);
	      };
	    case 1:
	      return function (a0) {
	        return fn.apply(this, arguments);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.apply(this, arguments);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.apply(this, arguments);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.apply(this, arguments);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.apply(this, arguments);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.apply(this, arguments);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.apply(this, arguments);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.apply(this, arguments);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.apply(this, arguments);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.apply(this, arguments);
	      };
	    default:
	      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _isPlaceholder = __webpack_require__(13);
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function () {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Applies a function to the value at the given index of an array, returning a
	 * new copy of the array with the element at the given index replaced with the
	 * result of the function application.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig (a -> a) -> Number -> [a] -> [a]
	 * @param {Function} fn The function to apply.
	 * @param {Number} idx The index.
	 * @param {Array|Arguments} list An array-like object whose value
	 *        at the supplied index will be replaced.
	 * @return {Array} A copy of the supplied array-like object with
	 *         the element at index `idx` replaced with the value
	 *         returned by applying `fn` to the existing element.
	 * @see R.update
	 * @example
	 *
	 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
	 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
	 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
	 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
	 */
	module.exports = _curry3(function adjust(fn, idx, list) {
	  if (idx >= list.length || idx < -list.length) {
	    return list;
	  }
	  var start = idx < 0 ? list.length : 0;
	  var _idx = start + idx;
	  var _list = _concat(list);
	  _list[_idx] = fn(list[_idx]);
	  return _list;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _curry2 = __webpack_require__(17);
	var _isPlaceholder = __webpack_require__(13);
	
	/**
	 * Optimized internal three-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry3(fn) {
	  return function f3(a, b, c) {
	    switch (arguments.length) {
	      case 0:
	        return f3;
	      case 1:
	        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        });
	      case 2:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _curry1(function (_c) {
	          return fn(a, b, _c);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	          return fn(_a, _b, c);
	        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b, c);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b, c);
	        }) : _isPlaceholder(c) ? _curry1(function (_c) {
	          return fn(a, b, _c);
	        }) : fn(a, b, c);
	    }
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xall = __webpack_require__(29);
	
	/**
	 * Returns `true` if all elements of the list match the predicate, `false` if
	 * there are any that don't.
	 *
	 * Dispatches to the `all` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	 *         otherwise.
	 * @see R.any, R.none, R.transduce
	 * @example
	 *
	 *      var equals3 = R.equals(3);
	 *      R.all(equals3)([3, 3, 3, 3]); //=> true
	 *      R.all(equals3)([3, 3, 1, 3]); //=> false
	 */
	module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (!fn(list[idx])) {
	      return false;
	    }
	    idx += 1;
	  }
	  return true;
	}));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _isArray = __webpack_require__(27);
	var _isTransformer = __webpack_require__(28);
	
	/**
	 * Returns a function that dispatches with different strategies based on the
	 * object in list position (last argument). If it is an array, executes [fn].
	 * Otherwise, if it has a function with one of the given method names, it will
	 * execute that function (functor case). Otherwise, if it is a transformer,
	 * uses transducer [xf] to return a new transformer (transducer case).
	 * Otherwise, it will default to executing [fn].
	 *
	 * @private
	 * @param {Array} methodNames properties to check for a custom implementation
	 * @param {Function} xf transducer to initialize if object is transformer
	 * @param {Function} fn default ramda implementation
	 * @return {Function} A function that dispatches on object in list position
	 */
	module.exports = function _dispatchable(methodNames, xf, fn) {
	  return function () {
	    if (arguments.length === 0) {
	      return fn();
	    }
	    var args = Array.prototype.slice.call(arguments, 0);
	    var obj = args.pop();
	    if (!_isArray(obj)) {
	      var idx = 0;
	      while (idx < methodNames.length) {
	        if (typeof obj[methodNames[idx]] === 'function') {
	          return obj[methodNames[idx]].apply(obj, args);
	        }
	        idx += 1;
	      }
	      if (_isTransformer(obj)) {
	        var transducer = xf.apply(null, args);
	        return transducer(obj);
	      }
	    }
	    return fn.apply(this, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Tests whether or not an object is an array.
	 *
	 * @private
	 * @param {*} val The object to test.
	 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	 * @example
	 *
	 *      _isArray([]); //=> true
	 *      _isArray(null); //=> false
	 *      _isArray({}); //=> false
	 */
	module.exports = Array.isArray || function _isArray(val) {
	  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isTransformer(obj) {
	  return typeof obj['@@transducer/step'] === 'function';
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XAll(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.all = true;
	  }
	  XAll.prototype['@@transducer/init'] = _xfBase.init;
	  XAll.prototype['@@transducer/result'] = function (result) {
	    if (this.all) {
	      result = this.xf['@@transducer/step'](result, true);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAll.prototype['@@transducer/step'] = function (result, input) {
	    if (!this.f(input)) {
	      this.all = false;
	      result = _reduced(this.xf['@@transducer/step'](result, false));
	    }
	    return result;
	  };
	
	  return _curry2(function _xall(f, xf) {
	    return new XAll(f, xf);
	  });
	}();

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _reduced(x) {
	  return x && x['@@transducer/reduced'] ? x : {
	    '@@transducer/value': x,
	    '@@transducer/reduced': true
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  init: function init() {
	    return this.xf['@@transducer/init']();
	  },
	  result: function result(_result) {
	    return this.xf['@@transducer/result'](_result);
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var curryN = __webpack_require__(20);
	var max = __webpack_require__(33);
	var pluck = __webpack_require__(34);
	var reduce = __webpack_require__(47);
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if every one of the provided predicates is satisfied
	 * by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} predicates An array of predicates to check
	 * @return {Function} The combined predicate
	 * @see R.anyPass
	 * @example
	 *
	 *      var isQueen = R.propEq('rank', 'Q');
	 *      var isSpade = R.propEq('suit', '♠︎');
	 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	 *
	 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	 */
	module.exports = _curry1(function allPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function () {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (!preds[idx].apply(this, arguments)) {
	        return false;
	      }
	      idx += 1;
	    }
	    return true;
	  });
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns the larger of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.maxBy, R.min
	 * @example
	 *
	 *      R.max(789, 123); //=> 789
	 *      R.max('a', 'b'); //=> 'b'
	 */
	module.exports = _curry2(function max(a, b) {
	  return b > a ? b : a;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var map = __webpack_require__(35);
	var prop = __webpack_require__(46);
	
	/**
	 * Returns a new list by plucking the same named property off all objects in
	 * the list supplied.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig k -> [{k: v}] -> [v]
	 * @param {Number|String} key The key name to pluck off of each object.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of values for the given key.
	 * @see R.props
	 * @example
	 *
	 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
	 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
	 */
	module.exports = _curry2(function pluck(p, list) {
	  return map(prop(p), list);
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _map = __webpack_require__(36);
	var _reduce = __webpack_require__(37);
	var _xmap = __webpack_require__(42);
	var curryN = __webpack_require__(20);
	var keys = __webpack_require__(43);
	
	/**
	 * Takes a function and
	 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	 * applies the function to each of the functor's values, and returns
	 * a functor of the same shape.
	 *
	 * Ramda provides suitable `map` implementations for `Array` and `Object`,
	 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	 *
	 * Dispatches to the `map` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * Also treats functions as functors and will compose them together.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => (a -> b) -> f a -> f b
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {Array} list The list to be iterated over.
	 * @return {Array} The new list.
	 * @see R.transduce, R.addIndex
	 * @example
	 *
	 *      var double = x => x * 2;
	 *
	 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	 *
	 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	 * @symb R.map(f, [a, b]) = [f(a), f(b)]
	 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
	 * @symb R.map(f, functor_o) = functor_o.map(f)
	 */
	module.exports = _curry2(_dispatchable(['map'], _xmap, function map(fn, functor) {
	  switch (Object.prototype.toString.call(functor)) {
	    case '[object Function]':
	      return curryN(functor.length, function () {
	        return fn.call(this, functor.apply(this, arguments));
	      });
	    case '[object Object]':
	      return _reduce(function (acc, key) {
	        acc[key] = fn(functor[key]);
	        return acc;
	      }, {}, keys(functor));
	    default:
	      return _map(fn, functor);
	  }
	}));

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _map(fn, functor) {
	  var idx = 0;
	  var len = functor.length;
	  var result = Array(len);
	  while (idx < len) {
	    result[idx] = fn(functor[idx]);
	    idx += 1;
	  }
	  return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _xwrap = __webpack_require__(38);
	var bind = __webpack_require__(39);
	var isArrayLike = __webpack_require__(40);
	
	module.exports = function () {
	  function _arrayReduce(xf, acc, list) {
	    var idx = 0;
	    var len = list.length;
	    while (idx < len) {
	      acc = xf['@@transducer/step'](acc, list[idx]);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      idx += 1;
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _iterableReduce(xf, acc, iter) {
	    var step = iter.next();
	    while (!step.done) {
	      acc = xf['@@transducer/step'](acc, step.value);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      step = iter.next();
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _methodReduce(xf, acc, obj) {
	    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	  }
	
	  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	  return function _reduce(fn, acc, list) {
	    if (typeof fn === 'function') {
	      fn = _xwrap(fn);
	    }
	    if (isArrayLike(list)) {
	      return _arrayReduce(fn, acc, list);
	    }
	    if (typeof list.reduce === 'function') {
	      return _methodReduce(fn, acc, list);
	    }
	    if (list[symIterator] != null) {
	      return _iterableReduce(fn, acc, list[symIterator]());
	    }
	    if (typeof list.next === 'function') {
	      return _iterableReduce(fn, acc, list);
	    }
	    throw new TypeError('reduce: list must be array or iterable');
	  };
	}();

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	  function XWrap(fn) {
	    this.f = fn;
	  }
	  XWrap.prototype['@@transducer/init'] = function () {
	    throw new Error('init not implemented on XWrap');
	  };
	  XWrap.prototype['@@transducer/result'] = function (acc) {
	    return acc;
	  };
	  XWrap.prototype['@@transducer/step'] = function (acc, x) {
	    return this.f(acc, x);
	  };
	
	  return function _xwrap(fn) {
	    return new XWrap(fn);
	  };
	}();

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a function that is bound to a context.
	 * Note: `R.bind` does not provide the additional argument-binding capabilities of
	 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @category Object
	 * @sig (* -> *) -> {*} -> (* -> *)
	 * @param {Function} fn The function to bind to context
	 * @param {Object} thisObj The context to bind `fn` to
	 * @return {Function} A function that will execute in the context of `thisObj`.
	 * @see R.partial
	 * @example
	 *
	 *      var log = R.bind(console.log, console);
	 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
	 *      // logs {a: 2}
	 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
	 */
	module.exports = _curry2(function bind(fn, thisObj) {
	  return _arity(fn.length, function () {
	    return fn.apply(thisObj, arguments);
	  });
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _curry1 = __webpack_require__(12);
	var _isArray = __webpack_require__(27);
	var _isString = __webpack_require__(41);
	
	/**
	 * Tests whether or not an object is similar to an array.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Type
	 * @category List
	 * @sig * -> Boolean
	 * @param {*} x The object to test.
	 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	 * @deprecated since v0.23.0
	 * @example
	 *
	 *      R.isArrayLike([]); //=> true
	 *      R.isArrayLike(true); //=> false
	 *      R.isArrayLike({}); //=> false
	 *      R.isArrayLike({length: 10}); //=> false
	 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	 */
	module.exports = _curry1(function isArrayLike(x) {
	  if (_isArray(x)) {
	    return true;
	  }
	  if (!x) {
	    return false;
	  }
	  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
	    return false;
	  }
	  if (_isString(x)) {
	    return false;
	  }
	  if (x.nodeType === 1) {
	    return !!x.length;
	  }
	  if (x.length === 0) {
	    return true;
	  }
	  if (x.length > 0) {
	    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	  }
	  return false;
	});

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isString(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XMap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XMap.prototype['@@transducer/init'] = _xfBase.init;
	  XMap.prototype['@@transducer/result'] = _xfBase.result;
	  XMap.prototype['@@transducer/step'] = function (result, input) {
	    return this.xf['@@transducer/step'](result, this.f(input));
	  };
	
	  return _curry2(function _xmap(f, xf) {
	    return new XMap(f, xf);
	  });
	}();

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _has = __webpack_require__(44);
	var _isArguments = __webpack_require__(45);
	
	/**
	 * Returns a list containing the names of all the enumerable own properties of
	 * the supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own properties.
	 * @example
	 *
	 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	 */
	module.exports = function () {
	  // cover IE < 9 keys issues
	  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	  // Safari bug
	  var hasArgsEnumBug = function () {
	    'use strict';
	
	    return arguments.propertyIsEnumerable('length');
	  }();
	
	  var contains = function contains(list, item) {
	    var idx = 0;
	    while (idx < list.length) {
	      if (list[idx] === item) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  };
	
	  return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
	    return Object(obj) !== obj ? [] : Object.keys(obj);
	  }) : _curry1(function keys(obj) {
	    if (Object(obj) !== obj) {
	      return [];
	    }
	    var prop, nIdx;
	    var ks = [];
	    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	    for (prop in obj) {
	      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	        ks[ks.length] = prop;
	      }
	    }
	    if (hasEnumBug) {
	      nIdx = nonEnumerableProps.length - 1;
	      while (nIdx >= 0) {
	        prop = nonEnumerableProps[nIdx];
	        if (_has(prop, obj) && !contains(ks, prop)) {
	          ks[ks.length] = prop;
	        }
	        nIdx -= 1;
	      }
	    }
	    return ks;
	  });
	}();

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _has(prop, obj) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _has = __webpack_require__(44);
	
	module.exports = function () {
	  var toString = Object.prototype.toString;
	  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	    return toString.call(x) === '[object Arguments]';
	  } : function _isArguments(x) {
	    return _has('callee', x);
	  };
	}();

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a function that when supplied an object returns the indicated
	 * property of that object, if it exists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig s -> {s: a} -> a | Undefined
	 * @param {String} p The property name
	 * @param {Object} obj The object to query
	 * @return {*} The value at `obj.p`.
	 * @see R.path
	 * @example
	 *
	 *      R.prop('x', {x: 100}); //=> 100
	 *      R.prop('x', {}); //=> undefined
	 */
	module.exports = _curry2(function prop(p, obj) {
	  return obj[p];
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var _reduce = __webpack_require__(37);
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It may use
	 * `R.reduced` to shortcut the iteration.
	 *
	 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
	 *
	 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	 *
	 * Dispatches to the `reduce` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduced, R.addIndex, R.reduceRight
	 * @example
	 *
	 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
	 *                -               -10
	 *               / \              / \
	 *              -   4           -6   4
	 *             / \              / \
	 *            -   3   ==>     -3   3
	 *           / \              / \
	 *          -   2           -1   2
	 *         / \              / \
	 *        0   1            0   1
	 *
	 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
	 */
	module.exports = _curry3(_reduce);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if both arguments are `true`; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {Any} a
	 * @param {Any} b
	 * @return {Any} the first argument if it is falsy, otherwise the second argument.
	 * @see R.both
	 * @example
	 *
	 *      R.and(true, true); //=> true
	 *      R.and(true, false); //=> false
	 *      R.and(false, true); //=> false
	 *      R.and(false, false); //=> false
	 */
	module.exports = _curry2(function and(a, b) {
	  return a && b;
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xany = __webpack_require__(50);
	
	/**
	 * Returns `true` if at least one of elements of the list match the predicate,
	 * `false` otherwise.
	 *
	 * Dispatches to the `any` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	 *         otherwise.
	 * @see R.all, R.none, R.transduce
	 * @example
	 *
	 *      var lessThan0 = R.flip(R.lt)(0);
	 *      var lessThan2 = R.flip(R.lt)(2);
	 *      R.any(lessThan0)([1, 2]); //=> false
	 *      R.any(lessThan2)([1, 2]); //=> true
	 */
	module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (fn(list[idx])) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	}));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XAny(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.any = false;
	  }
	  XAny.prototype['@@transducer/init'] = _xfBase.init;
	  XAny.prototype['@@transducer/result'] = function (result) {
	    if (!this.any) {
	      result = this.xf['@@transducer/step'](result, false);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAny.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.any = true;
	      result = _reduced(this.xf['@@transducer/step'](result, true));
	    }
	    return result;
	  };
	
	  return _curry2(function _xany(f, xf) {
	    return new XAny(f, xf);
	  });
	}();

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var curryN = __webpack_require__(20);
	var max = __webpack_require__(33);
	var pluck = __webpack_require__(34);
	var reduce = __webpack_require__(47);
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if at least one of the provided predicates is
	 * satisfied by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} predicates An array of predicates to check
	 * @return {Function} The combined predicate
	 * @see R.allPass
	 * @example
	 *
	 *      var isClub = R.propEq('suit', '♣');
	 *      var isSpade = R.propEq('suit', '♠');
	 *      var isBlackCard = R.anyPass([isClub, isSpade]);
	 *
	 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
	 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
	 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
	 */
	module.exports = _curry1(function anyPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function () {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (preds[idx].apply(this, arguments)) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  });
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	var _reduce = __webpack_require__(37);
	var map = __webpack_require__(35);
	
	/**
	 * ap applies a list of functions to a list of values.
	 *
	 * Dispatches to the `ap` method of the second argument, if present. Also
	 * treats curried functions as applicatives.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig [a -> b] -> [a] -> [b]
	 * @sig Apply f => f (a -> b) -> f a -> f b
	 * @param {Array} fns An array of functions
	 * @param {Array} vs An array of values
	 * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	 * @example
	 *
	 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
	 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
	 */
	module.exports = _curry2(function ap(applicative, fn) {
	  return typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? function (x) {
	    return applicative(x)(fn(x));
	  } :
	  // else
	  _reduce(function (acc, f) {
	    return _concat(acc, map(f, fn));
	  }, [], applicative);
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _aperture = __webpack_require__(54);
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xaperture = __webpack_require__(55);
	
	/**
	 * Returns a new list, composed of n-tuples of consecutive elements If `n` is
	 * greater than the length of the list, an empty list is returned.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig Number -> [a] -> [[a]]
	 * @param {Number} n The size of the tuples to create
	 * @param {Array} list The list to split into `n`-length tuples
	 * @return {Array} The resulting list of `n`-length tuples
	 * @see R.transduce
	 * @example
	 *
	 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	 */
	module.exports = _curry2(_dispatchable([], _xaperture, _aperture));

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _aperture(n, list) {
	  var idx = 0;
	  var limit = list.length - (n - 1);
	  var acc = new Array(limit >= 0 ? limit : 0);
	  while (idx < limit) {
	    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
	    idx += 1;
	  }
	  return acc;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XAperture(n, xf) {
	    this.xf = xf;
	    this.pos = 0;
	    this.full = false;
	    this.acc = new Array(n);
	  }
	  XAperture.prototype['@@transducer/init'] = _xfBase.init;
	  XAperture.prototype['@@transducer/result'] = function (result) {
	    this.acc = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XAperture.prototype['@@transducer/step'] = function (result, input) {
	    this.store(input);
	    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
	  };
	  XAperture.prototype.store = function (input) {
	    this.acc[this.pos] = input;
	    this.pos += 1;
	    if (this.pos === this.acc.length) {
	      this.pos = 0;
	      this.full = true;
	    }
	  };
	  XAperture.prototype.getCopy = function () {
	    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
	  };
	
	  return _curry2(function _xaperture(n, xf) {
	    return new XAperture(n, xf);
	  });
	}();

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new list containing the contents of the given list, followed by
	 * the given element.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} el The element to add to the end of the new list.
	 * @param {Array} list The list of elements to add a new item to.
	 *        list.
	 * @return {Array} A new list containing the elements of the old list followed by `el`.
	 * @see R.prepend
	 * @example
	 *
	 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	 *      R.append('tests', []); //=> ['tests']
	 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	 */
	module.exports = _curry2(function append(el, list) {
	  return _concat(list, [el]);
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Applies function `fn` to the argument list `args`. This is useful for
	 * creating a fixed-arity function from a variadic function. `fn` should be a
	 * bound function if context is significant.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> a) -> [*] -> a
	 * @param {Function} fn The function which will be called with `args`
	 * @param {Array} args The arguments to call `fn` with
	 * @return {*} result The result, equivalent to `fn(...args)`
	 * @see R.call, R.unapply
	 * @example
	 *
	 *      var nums = [1, 2, 3, -99, 42, 6, 7];
	 *      R.apply(Math.max, nums); //=> 42
	 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
	 */
	module.exports = _curry2(function apply(fn, args) {
	  return fn.apply(this, args);
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var apply = __webpack_require__(57);
	var curryN = __webpack_require__(20);
	var map = __webpack_require__(35);
	var max = __webpack_require__(33);
	var pluck = __webpack_require__(34);
	var reduce = __webpack_require__(47);
	var values = __webpack_require__(59);
	
	/**
	 * Given a spec object recursively mapping properties to functions, creates a
	 * function producing an object of the same structure, by mapping each property
	 * to the result of calling its associated function with the supplied arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Function
	 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	 * @param {Object} spec an object recursively mapping properties to functions for
	 *        producing the values for these properties.
	 * @return {Function} A function that returns an object of the same structure
	 * as `spec', with each property set to the value returned by calling its
	 * associated function with the supplied arguments.
	 * @see R.converge, R.juxt
	 * @example
	 *
	 *      var getMetrics = R.applySpec({
	 *                                      sum: R.add,
	 *                                      nested: { mul: R.multiply }
	 *                                   });
	 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
	 */
	module.exports = _curry1(function applySpec(spec) {
	  spec = map(function (v) {
	    return typeof v == 'function' ? v : applySpec(v);
	  }, spec);
	  return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
	    var args = arguments;
	    return map(function (f) {
	      return apply(f, args);
	    }, spec);
	  });
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var keys = __webpack_require__(43);
	
	/**
	 * Returns a list of all the enumerable own properties of the supplied object.
	 * Note that the order of the output array is not guaranteed across different
	 * JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own properties.
	 * @example
	 *
	 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	 */
	module.exports = _curry1(function values(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var vals = [];
	  var idx = 0;
	  while (idx < len) {
	    vals[idx] = obj[props[idx]];
	    idx += 1;
	  }
	  return vals;
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Makes an ascending comparator function out of a function that returns a value
	 * that can be compared with `<` and `>`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Function
	 * @sig Ord b => (a -> b) -> a -> a -> Number
	 * @param {Function} fn A function of arity one that returns a value that can be compared
	 * @param {*} a The first item to be compared.
	 * @param {*} b The second item to be compared.
	 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
	 * @example
	 *
	 *      var byAge = R.ascend(R.prop('age'));
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByYoungestFirst = R.sort(byAge, people);
	 */
	module.exports = _curry3(function ascend(fn, a, b) {
	  var aa = fn(a);
	  var bb = fn(b);
	  return aa < bb ? -1 : aa > bb ? 1 : 0;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the specified
	 * property with the given value. Note that this copies and flattens prototype
	 * properties onto the new object as well. All non-primitive properties are
	 * copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig String -> a -> {k: v} -> {k: v}
	 * @param {String} prop The property name to set
	 * @param {*} val The new value
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original except for the changed property.
	 * @see R.dissoc
	 * @example
	 *
	 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry3(function assoc(prop, val, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  result[prop] = val;
	  return result;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var _has = __webpack_require__(44);
	var _isArray = __webpack_require__(27);
	var _isInteger = __webpack_require__(63);
	var assoc = __webpack_require__(61);
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the nodes required
	 * to create the given path, and placing the specific value at the tail end of
	 * that path. Note that this copies and flattens prototype properties onto the
	 * new object as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> a -> {a} -> {a}
	 * @param {Array} path the path to set
	 * @param {*} val The new value
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original except along the specified path.
	 * @see R.dissocPath
	 * @example
	 *
	 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	 *
	 *      // Any missing or non-object keys in path will be overridden
	 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
	 */
	module.exports = _curry3(function assocPath(path, val, obj) {
	  if (path.length === 0) {
	    return val;
	  }
	  var idx = path[0];
	  if (path.length > 1) {
	    var nextObj = _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
	    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
	  }
	  if (_isInteger(idx) && _isArray(obj)) {
	    var arr = [].concat(obj);
	    arr[idx] = val;
	    return arr;
	  } else {
	    return assoc(idx, val, obj);
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Determine if the passed argument is an integer.
	 *
	 * @private
	 * @param {*} n
	 * @category Type
	 * @return {Boolean}
	 */
	module.exports = Number.isInteger || function _isInteger(n) {
	  return n << 0 === n;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var nAry = __webpack_require__(65);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly 2 parameters. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Function
	 * @sig (* -> c) -> (a, b -> c)
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity 2.
	 * @example
	 *
	 *      var takesThreeArgs = function(a, b, c) {
	 *        return [a, b, c];
	 *      };
	 *      takesThreeArgs.length; //=> 3
	 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	 *
	 *      var takesTwoArgs = R.binary(takesThreeArgs);
	 *      takesTwoArgs.length; //=> 2
	 *      // Only 2 arguments are passed to the wrapped function
	 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	 * @symb R.binary(f)(a, b, c) = f(a, b)
	 */
	module.exports = _curry1(function binary(fn) {
	  return nAry(2, fn);
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly `n` parameters. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} n The desired arity of the new function.
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity `n`.
	 * @example
	 *
	 *      var takesTwoArgs = (a, b) => [a, b];
	 *
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.nAry(1, takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // Only `n` arguments are passed to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, undefined]
	 * @symb R.nAry(0, f)(a, b) = f()
	 * @symb R.nAry(1, f)(a, b) = f(a)
	 * @symb R.nAry(2, f)(a, b) = f(a, b)
	 */
	module.exports = _curry2(function nAry(n, fn) {
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.call(this);
	      };
	    case 1:
	      return function (a0) {
	        return fn.call(this, a0);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.call(this, a0, a1);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.call(this, a0, a1, a2);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.call(this, a0, a1, a2, a3);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.call(this, a0, a1, a2, a3, a4);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	      };
	    default:
	      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isFunction = __webpack_require__(67);
	var and = __webpack_require__(48);
	var lift = __webpack_require__(68);
	
	/**
	 * A function which calls the two provided functions and returns the `&&`
	 * of the results.
	 * It returns the result of the first function if it is false-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * false-y value.
	 *
	 * In addition to functions, `R.both` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f A predicate
	 * @param {Function} g Another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	 * @see R.and
	 * @example
	 *
	 *      var gt10 = R.gt(R.__, 10)
	 *      var lt20 = R.lt(R.__, 20)
	 *      var f = R.both(gt10, lt20);
	 *      f(15); //=> true
	 *      f(30); //=> false
	 */
	module.exports = _curry2(function both(f, g) {
	  return _isFunction(f) ? function _both() {
	    return f.apply(this, arguments) && g.apply(this, arguments);
	  } : lift(and)(f, g);
	});

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isFunction(x) {
	  return Object.prototype.toString.call(x) === '[object Function]';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var liftN = __webpack_require__(69);
	
	/**
	 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.liftN
	 * @example
	 *
	 *      var madd3 = R.lift((a, b, c) => a + b + c);
	 *
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 *
	 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
	 *
	 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	 */
	module.exports = _curry1(function lift(fn) {
	  return liftN(fn.length, fn);
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduce = __webpack_require__(37);
	var ap = __webpack_require__(52);
	var curryN = __webpack_require__(20);
	var map = __webpack_require__(35);
	
	/**
	 * "lifts" a function to be the specified arity, so that it may "map over" that
	 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig Number -> (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.lift, R.ap
	 * @example
	 *
	 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 */
	module.exports = _curry2(function liftN(arity, fn) {
	  var lifted = curryN(arity, fn);
	  return curryN(arity, function () {
	    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
	  });
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var curry = __webpack_require__(71);
	
	/**
	 * Returns the result of calling its first argument with the remaining
	 * arguments. This is occasionally useful as a converging function for
	 * `R.converge`: the left branch can produce a function while the right branch
	 * produces a value to be passed to that function as an argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig (*... -> a),*... -> a
	 * @param {Function} fn The function to apply to the remaining arguments.
	 * @param {...*} args Any number of positional arguments.
	 * @return {*}
	 * @see R.apply
	 * @example
	 *
	 *      R.call(R.add, 1, 2); //=> 3
	 *
	 *      var indentN = R.pipe(R.times(R.always(' ')),
	 *                           R.join(''),
	 *                           R.replace(/^(?!$)/gm));
	 *
	 *      var format = R.converge(R.call, [
	 *                                  R.pipe(R.prop('indent'), indentN),
	 *                                  R.prop('value')
	 *                              ]);
	 *
	 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	 * @symb R.call(f, a, b) = f(a, b)
	 */
	module.exports = curry(function call(fn) {
	  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var curryN = __webpack_require__(20);
	
	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _makeFlat = __webpack_require__(73);
	var _xchain = __webpack_require__(74);
	var map = __webpack_require__(35);
	
	/**
	 * `chain` maps a function over a list and concatenates the results. `chain`
	 * is also known as `flatMap` in some libraries
	 *
	 * Dispatches to the `chain` method of the second argument, if present,
	 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig Chain m => (a -> m b) -> m a -> m b
	 * @param {Function} fn The function to map with
	 * @param {Array} list The list to map over
	 * @return {Array} The result of flat-mapping `list` with `fn`
	 * @example
	 *
	 *      var duplicate = n => [n, n];
	 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	 *
	 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
	 */
	module.exports = _curry2(_dispatchable(['chain'], _xchain, function chain(fn, monad) {
	  if (typeof monad === 'function') {
	    return function (x) {
	      return fn(monad(x))(x);
	    };
	  }
	  return _makeFlat(false)(map(fn, monad));
	}));

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(40);
	
	/**
	 * `_makeFlat` is a helper function that returns a one-level or fully recursive
	 * function based on the flag passed in.
	 *
	 * @private
	 */
	module.exports = function _makeFlat(recursive) {
	  return function flatt(list) {
	    var value, jlen, j;
	    var result = [];
	    var idx = 0;
	    var ilen = list.length;
	
	    while (idx < ilen) {
	      if (isArrayLike(list[idx])) {
	        value = recursive ? flatt(list[idx]) : list[idx];
	        j = 0;
	        jlen = value.length;
	        while (j < jlen) {
	          result[result.length] = value[j];
	          j += 1;
	        }
	      } else {
	        result[result.length] = list[idx];
	      }
	      idx += 1;
	    }
	    return result;
	  };
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _flatCat = __webpack_require__(75);
	var map = __webpack_require__(35);
	
	module.exports = _curry2(function _xchain(f, xf) {
	  return map(f, _flatCat(xf));
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _forceReduced = __webpack_require__(76);
	var _reduce = __webpack_require__(37);
	var _xfBase = __webpack_require__(31);
	var isArrayLike = __webpack_require__(40);
	
	module.exports = function () {
	  var preservingReduced = function preservingReduced(xf) {
	    return {
	      '@@transducer/init': _xfBase.init,
	      '@@transducer/result': function transducerResult(result) {
	        return xf['@@transducer/result'](result);
	      },
	      '@@transducer/step': function transducerStep(result, input) {
	        var ret = xf['@@transducer/step'](result, input);
	        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	      }
	    };
	  };
	
	  return function _xcat(xf) {
	    var rxf = preservingReduced(xf);
	    return {
	      '@@transducer/init': _xfBase.init,
	      '@@transducer/result': function transducerResult(result) {
	        return rxf['@@transducer/result'](result);
	      },
	      '@@transducer/step': function transducerStep(result, input) {
	        return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	      }
	    };
	  };
	}();

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _forceReduced(x) {
	  return {
	    '@@transducer/value': x,
	    '@@transducer/reduced': true
	  };
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Restricts a number to be within a range.
	 *
	 * Also works for other ordered types such as Strings and Dates.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a -> a
	 * @param {Number} minimum The lower limit of the clamp (inclusive)
	 * @param {Number} maximum The upper limit of the clamp (inclusive)
	 * @param {Number} value Value to be clamped
	 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
	 * @example
	 *
	 *      R.clamp(1, 10, -5) // => 1
	 *      R.clamp(1, 10, 15) // => 10
	 *      R.clamp(1, 10, 4)  // => 4
	 */
	module.exports = _curry3(function clamp(min, max, value) {
	  if (min > max) {
	    throw new Error('min must not be greater than max in clamp(min, max, value)');
	  }
	  return value < min ? min : value > max ? max : value;
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _clone = __webpack_require__(79);
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Creates a deep copy of the value which may contain (nested) `Array`s and
	 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
	 * assigned by reference rather than copied
	 *
	 * Dispatches to a `clone` method if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {*} -> {*}
	 * @param {*} value The object or array to clone
	 * @return {*} A deeply cloned copy of `val`
	 * @example
	 *
	 *      var objects = [{}, {}, {}];
	 *      var objectsClone = R.clone(objects);
	 *      objects === objectsClone; //=> false
	 *      objects[0] === objectsClone[0]; //=> false
	 */
	module.exports = _curry1(function clone(value) {
	  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cloneRegExp = __webpack_require__(80);
	var type = __webpack_require__(81);
	
	/**
	 * Copies an object.
	 *
	 * @private
	 * @param {*} value The value to be copied
	 * @param {Array} refFrom Array containing the source references
	 * @param {Array} refTo Array containing the copied source references
	 * @param {Boolean} deep Whether or not to perform deep cloning.
	 * @return {*} The copied value.
	 */
	module.exports = function _clone(value, refFrom, refTo, deep) {
	  var copy = function copy(copiedValue) {
	    var len = refFrom.length;
	    var idx = 0;
	    while (idx < len) {
	      if (value === refFrom[idx]) {
	        return refTo[idx];
	      }
	      idx += 1;
	    }
	    refFrom[idx + 1] = value;
	    refTo[idx + 1] = copiedValue;
	    for (var key in value) {
	      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
	    }
	    return copiedValue;
	  };
	  switch (type(value)) {
	    case 'Object':
	      return copy({});
	    case 'Array':
	      return copy([]);
	    case 'Date':
	      return new Date(value.valueOf());
	    case 'RegExp':
	      return _cloneRegExp(value);
	    default:
	      return value;
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _cloneRegExp(pattern) {
	                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Gives a single-word string description of the (native) type of a value,
	 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	 * attempt to distinguish user Object types any further, reporting them all as
	 * 'Object'.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Type
	 * @sig (* -> {*}) -> String
	 * @param {*} val The value to test
	 * @return {String}
	 * @example
	 *
	 *      R.type({}); //=> "Object"
	 *      R.type(1); //=> "Number"
	 *      R.type(false); //=> "Boolean"
	 *      R.type('s'); //=> "String"
	 *      R.type(null); //=> "Null"
	 *      R.type([]); //=> "Array"
	 *      R.type(/[A-z]/); //=> "RegExp"
	 */
	module.exports = _curry1(function type(val) {
	  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Makes a comparator function out of a function that reports whether the first
	 * element is less than the second.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a, b -> Boolean) -> (a, b -> Number)
	 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
	 * is less than the second, `false` otherwise
	 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
	 * @example
	 *
	 *      var byAge = R.comparator((a, b) => a.age < b.age);
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByIncreasingAge = R.sort(byAge, people);
	 */
	module.exports = _curry1(function comparator(pred) {
	  return function (a, b) {
	    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	  };
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var lift = __webpack_require__(68);
	var not = __webpack_require__(84);
	
	/**
	 * Takes a function `f` and returns a function `g` such that if called with the same arguments
	 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
	 *
	 * `R.complement` may be applied to any functor
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> *) -> (*... -> Boolean)
	 * @param {Function} f
	 * @return {Function}
	 * @see R.not
	 * @example
	 *
	 *      var isNotNil = R.complement(R.isNil);
	 *      isNil(null); //=> true
	 *      isNotNil(null); //=> false
	 *      isNil(7); //=> false
	 *      isNotNil(7); //=> true
	 */
	module.exports = lift(not);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * A function that returns the `!` of its argument. It will return `true` when
	 * passed false-y value, and `false` when passed a truth-y one.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig * -> Boolean
	 * @param {*} a any value
	 * @return {Boolean} the logical inverse of passed argument.
	 * @see R.complement
	 * @example
	 *
	 *      R.not(true); //=> false
	 *      R.not(false); //=> true
	 *      R.not(0); //=> true
	 *      R.not(1); //=> false
	 */
	module.exports = _curry1(function not(a) {
	  return !a;
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pipe = __webpack_require__(86);
	var reverse = __webpack_require__(91);
	
	/**
	 * Performs right-to-left function composition. The rightmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * **Note:** The result of compose is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} ...functions The functions to compose
	 * @return {Function}
	 * @see R.pipe
	 * @example
	 *
	 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
	 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
	 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
	 *
	 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
	 *
	 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
	 */
	module.exports = function compose() {
	  if (arguments.length === 0) {
	    throw new Error('compose requires at least one argument');
	  }
	  return pipe.apply(this, reverse(arguments));
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _pipe = __webpack_require__(87);
	var reduce = __webpack_require__(47);
	var tail = __webpack_require__(88);
	
	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * In some libraries this function is named `sequence`.
	 *
	 * **Note:** The result of pipe is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.compose
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
	 */
	module.exports = function pipe() {
	  if (arguments.length === 0) {
	    throw new Error('pipe requires at least one argument');
	  }
	  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _pipe(f, g) {
	  return function () {
	    return g.call(this, f.apply(this, arguments));
	  };
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _checkForMethod = __webpack_require__(89);
	var _curry1 = __webpack_require__(12);
	var slice = __webpack_require__(90);
	
	/**
	 * Returns all but the first element of the given list or string (or object
	 * with a `tail` method).
	 *
	 * Dispatches to the `slice` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.head, R.init, R.last
	 * @example
	 *
	 *      R.tail([1, 2, 3]);  //=> [2, 3]
	 *      R.tail([1, 2]);     //=> [2]
	 *      R.tail([1]);        //=> []
	 *      R.tail([]);         //=> []
	 *
	 *      R.tail('abc');  //=> 'bc'
	 *      R.tail('ab');   //=> 'b'
	 *      R.tail('a');    //=> ''
	 *      R.tail('');     //=> ''
	 */
	module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _isArray = __webpack_require__(27);
	
	/**
	 * This checks whether a function has a [methodname] function. If it isn't an
	 * array it will execute that function otherwise it will default to the ramda
	 * implementation.
	 *
	 * @private
	 * @param {Function} fn ramda implemtation
	 * @param {String} methodname property to check for a custom implementation
	 * @return {Object} Whatever the return value of the method is.
	 */
	module.exports = function _checkForMethod(methodname, fn) {
	  return function () {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
	  };
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _checkForMethod = __webpack_require__(89);
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Returns the elements of the given list or string (or object with a `slice`
	 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	 *
	 * Dispatches to the `slice` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @sig Number -> Number -> String -> String
	 * @param {Number} fromIndex The start index (inclusive).
	 * @param {Number} toIndex The end index (exclusive).
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	 */
	module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	  return Array.prototype.slice.call(list, fromIndex, toIndex);
	}));

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _isString = __webpack_require__(41);
	
	/**
	 * Returns a new list or string with the elements or characters in reverse
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {Array|String}
	 * @example
	 *
	 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	 *      R.reverse([1, 2]);     //=> [2, 1]
	 *      R.reverse([1]);        //=> [1]
	 *      R.reverse([]);         //=> []
	 *
	 *      R.reverse('abc');      //=> 'cba'
	 *      R.reverse('ab');       //=> 'ba'
	 *      R.reverse('a');        //=> 'a'
	 *      R.reverse('');         //=> ''
	 */
	module.exports = _curry1(function reverse(list) {
	  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var chain = __webpack_require__(72);
	var compose = __webpack_require__(85);
	var map = __webpack_require__(35);
	
	/**
	 * Returns the right-to-left Kleisli composition of the provided functions,
	 * each of which must return a value of a type supported by [`chain`](#chain).
	 *
	 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Function
	 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
	 * @param {...Function} ...functions The functions to compose
	 * @return {Function}
	 * @see R.pipeK
	 * @example
	 *
	 *       //  get :: String -> Object -> Maybe *
	 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
	 *
	 *       //  getStateCode :: Maybe String -> Maybe String
	 *       var getStateCode = R.composeK(
	 *         R.compose(Maybe.of, R.toUpper),
	 *         get('state'),
	 *         get('address'),
	 *         get('user'),
	 *       );
	 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
	 *       getStateCode({}); //=> Maybe.Nothing()
	 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
	 */
	module.exports = function composeK() {
	  if (arguments.length === 0) {
	    throw new Error('composeK requires at least one argument');
	  }
	  var init = Array.prototype.slice.call(arguments);
	  var last = init.pop();
	  return compose(compose.apply(this, map(chain, init)), last);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pipeP = __webpack_require__(94);
	var reverse = __webpack_require__(91);
	
	/**
	 * Performs right-to-left composition of one or more Promise-returning
	 * functions. The rightmost function may have any arity; the remaining
	 * functions must be unary.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	 * @param {...Function} functions The functions to compose
	 * @return {Function}
	 * @see R.pipeP
	 * @example
	 *
	 *      var db = {
	 *        users: {
	 *          JOE: {
	 *            name: 'Joe',
	 *            followers: ['STEVE', 'SUZY']
	 *          }
	 *        }
	 *      }
	 *
	 *      // We'll pretend to do a db lookup which returns a promise
	 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
	 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
	 *      lookupUser('JOE').then(lookupFollowers)
	 *
	 *      //  followersForUser :: String -> Promise [UserId]
	 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
	 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
	 *      // Followers: ["STEVE","SUZY"]
	 */
	module.exports = function composeP() {
	  if (arguments.length === 0) {
	    throw new Error('composeP requires at least one argument');
	  }
	  return pipeP.apply(this, reverse(arguments));
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _pipeP = __webpack_require__(95);
	var reduce = __webpack_require__(47);
	var tail = __webpack_require__(88);
	
	/**
	 * Performs left-to-right composition of one or more Promise-returning
	 * functions. The leftmost function may have any arity; the remaining functions
	 * must be unary.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.composeP
	 * @example
	 *
	 *      //  followersForUser :: String -> Promise [User]
	 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	 */
	module.exports = function pipeP() {
	  if (arguments.length === 0) {
	    throw new Error('pipeP requires at least one argument');
	  }
	  return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _pipeP(f, g) {
	  return function () {
	    var ctx = this;
	    return f.apply(ctx, arguments).then(function (x) {
	      return g.call(ctx, x);
	    });
	  };
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isArray = __webpack_require__(27);
	var _isFunction = __webpack_require__(67);
	var toString = __webpack_require__(97);
	
	/**
	 * Returns the result of concatenating the given lists or strings.
	 *
	 * Note: `R.concat` expects both arguments to be of the same type,
	 * unlike the native `Array.prototype.concat` method. It will throw
	 * an error if you `concat` an Array with a non-Array value.
	 *
	 * Dispatches to the `concat` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a] -> [a]
	 * @sig String -> String -> String
	 * @param {Array|String} firstList The first list
	 * @param {Array|String} secondList The second list
	 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
	 * `secondList`.
	 *
	 * @example
	 *
	 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 *      R.concat([], []); //=> []
	 */
	module.exports = _curry2(function concat(a, b) {
	  if (a == null || !_isFunction(a.concat)) {
	    throw new TypeError(toString(a) + ' does not have a method named "concat"');
	  }
	  if (_isArray(a) && !_isArray(b)) {
	    throw new TypeError(toString(b) + ' is not an array');
	  }
	  return a.concat(b);
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _toString = __webpack_require__(98);
	
	/**
	 * Returns the string representation of the given value. `eval`'ing the output
	 * should result in a value equivalent to the input value. Many of the built-in
	 * `toString` methods do not satisfy this requirement.
	 *
	 * If the given value is an `[object Object]` with a `toString` method other
	 * than `Object.prototype.toString`, this method is invoked with no arguments
	 * to produce the return value. This means user-defined constructor functions
	 * can provide a suitable `toString` method. For example:
	 *
	 *     function Point(x, y) {
	 *       this.x = x;
	 *       this.y = y;
	 *     }
	 *
	 *     Point.prototype.toString = function() {
	 *       return 'new Point(' + this.x + ', ' + this.y + ')';
	 *     };
	 *
	 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category String
	 * @sig * -> String
	 * @param {*} val
	 * @return {String}
	 * @example
	 *
	 *      R.toString(42); //=> '42'
	 *      R.toString('abc'); //=> '"abc"'
	 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	 */
	module.exports = _curry1(function toString(val) {
	  return _toString(val, []);
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _contains = __webpack_require__(99);
	var _map = __webpack_require__(36);
	var _quote = __webpack_require__(106);
	var _toISOString = __webpack_require__(107);
	var keys = __webpack_require__(43);
	var reject = __webpack_require__(108);
	
	module.exports = function _toString(x, seen) {
	  var recur = function recur(y) {
	    var xs = seen.concat([x]);
	    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	  };
	
	  //  mapPairs :: (Object, [String]) -> [String]
	  var mapPairs = function mapPairs(obj, keys) {
	    return _map(function (k) {
	      return _quote(k) + ': ' + recur(obj[k]);
	    }, keys.slice().sort());
	  };
	
	  switch (Object.prototype.toString.call(x)) {
	    case '[object Arguments]':
	      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	    case '[object Array]':
	      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
	        return (/^\d+$/.test(k)
	        );
	      }, keys(x)))).join(', ') + ']';
	    case '[object Boolean]':
	      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	    case '[object Date]':
	      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	    case '[object Null]':
	      return 'null';
	    case '[object Number]':
	      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	    case '[object String]':
	      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	    case '[object Undefined]':
	      return 'undefined';
	    default:
	      if (typeof x.toString === 'function') {
	        var repr = x.toString();
	        if (repr !== '[object Object]') {
	          return repr;
	        }
	      }
	      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _indexOf = __webpack_require__(100);
	
	module.exports = function _contains(a, list) {
	  return _indexOf(list, a, 0) >= 0;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var equals = __webpack_require__(101);
	
	module.exports = function _indexOf(list, a, idx) {
	  var inf, item;
	  // Array.prototype.indexOf doesn't exist below IE9
	  if (typeof list.indexOf === 'function') {
	    switch (typeof a === 'undefined' ? 'undefined' : _typeof(a)) {
	      case 'number':
	        if (a === 0) {
	          // manually crawl the list to distinguish between +0 and -0
	          inf = 1 / a;
	          while (idx < list.length) {
	            item = list[idx];
	            if (item === 0 && 1 / item === inf) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        } else if (a !== a) {
	          // NaN
	          while (idx < list.length) {
	            item = list[idx];
	            if (typeof item === 'number' && item !== item) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        }
	        // non-zero numbers can utilise Set
	        return list.indexOf(a, idx);
	
	      // all these types can utilise Set
	      case 'string':
	      case 'boolean':
	      case 'function':
	      case 'undefined':
	        return list.indexOf(a, idx);
	
	      case 'object':
	        if (a === null) {
	          // null can utilise Set
	          return list.indexOf(a, idx);
	        }
	    }
	  }
	  // anything else not covered above, defer to R.equals
	  while (idx < list.length) {
	    if (equals(list[idx], a)) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _equals = __webpack_require__(102);
	
	/**
	 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	 * cyclical data structures.
	 *
	 * Dispatches symmetrically to the `equals` methods of both arguments, if
	 * present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> b -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      R.equals(1, 1); //=> true
	 *      R.equals(1, '1'); //=> false
	 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	 *
	 *      var a = {}; a.v = a;
	 *      var b = {}; b.v = b;
	 *      R.equals(a, b); //=> true
	 */
	module.exports = _curry2(function equals(a, b) {
	  return _equals(a, b, [], []);
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _arrayFromIterator = __webpack_require__(103);
	var _functionName = __webpack_require__(104);
	var _has = __webpack_require__(44);
	var identical = __webpack_require__(105);
	var keys = __webpack_require__(43);
	var type = __webpack_require__(81);
	
	module.exports = function _equals(a, b, stackA, stackB) {
	  if (identical(a, b)) {
	    return true;
	  }
	
	  if (type(a) !== type(b)) {
	    return false;
	  }
	
	  if (a == null || b == null) {
	    return false;
	  }
	
	  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	  }
	
	  switch (type(a)) {
	    case 'Arguments':
	    case 'Array':
	    case 'Object':
	      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	        return a === b;
	      }
	      break;
	    case 'Boolean':
	    case 'Number':
	    case 'String':
	      if (!((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && identical(a.valueOf(), b.valueOf()))) {
	        return false;
	      }
	      break;
	    case 'Date':
	      if (!identical(a.valueOf(), b.valueOf())) {
	        return false;
	      }
	      break;
	    case 'Error':
	      return a.name === b.name && a.message === b.message;
	    case 'RegExp':
	      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	        return false;
	      }
	      break;
	    case 'Map':
	    case 'Set':
	      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	        return false;
	      }
	      break;
	    case 'Int8Array':
	    case 'Uint8Array':
	    case 'Uint8ClampedArray':
	    case 'Int16Array':
	    case 'Uint16Array':
	    case 'Int32Array':
	    case 'Uint32Array':
	    case 'Float32Array':
	    case 'Float64Array':
	      break;
	    case 'ArrayBuffer':
	      break;
	    default:
	      // Values of other types are only equal if identical.
	      return false;
	  }
	
	  var keysA = keys(a);
	  if (keysA.length !== keys(b).length) {
	    return false;
	  }
	
	  var idx = stackA.length - 1;
	  while (idx >= 0) {
	    if (stackA[idx] === a) {
	      return stackB[idx] === b;
	    }
	    idx -= 1;
	  }
	
	  stackA.push(a);
	  stackB.push(b);
	  idx = keysA.length - 1;
	  while (idx >= 0) {
	    var key = keysA[idx];
	    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	      return false;
	    }
	    idx -= 1;
	  }
	  stackA.pop();
	  stackB.pop();
	  return true;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _arrayFromIterator(iter) {
	  var list = [];
	  var next;
	  while (!(next = iter.next()).done) {
	    list.push(next.value);
	  }
	  return list;
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _functionName(f) {
	  // String(x => x) evaluates to "x => x", so the pattern may not match.
	  var match = String(f).match(/^function (\w*)/);
	  return match == null ? '' : match[1];
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns true if its arguments are identical, false otherwise. Values are
	 * identical if they reference the same memory. `NaN` is identical to `NaN`;
	 * `0` and `-0` are not identical.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      var o = {};
	 *      R.identical(o, o); //=> true
	 *      R.identical(1, 1); //=> true
	 *      R.identical(1, '1'); //=> false
	 *      R.identical([], []); //=> false
	 *      R.identical(0, -0); //=> false
	 *      R.identical(NaN, NaN); //=> true
	 */
	module.exports = _curry2(function identical(a, b) {
	  // SameValue algorithm
	  if (a === b) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return a !== 0 || 1 / a === 1 / b;
	  } else {
	    // Step 6.a: NaN == NaN
	    return a !== a && b !== b;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _quote(s) {
	  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
	  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
	
	  return '"' + escaped.replace(/"/g, '\\"') + '"';
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	 */
	module.exports = function () {
	  var pad = function pad(n) {
	    return (n < 10 ? '0' : '') + n;
	  };
	
	  return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	    return d.toISOString();
	  } : function _toISOString(d) {
	    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	  };
	}();

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _complement = __webpack_require__(109);
	var _curry2 = __webpack_require__(17);
	var filter = __webpack_require__(110);
	
	/**
	 * The complement of `filter`.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.filter, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isOdd = (n) => n % 2 === 1;
	 *
	 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(function reject(pred, filterable) {
	  return filter(_complement(pred), filterable);
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _complement(f) {
	  return function () {
	    return !f.apply(this, arguments);
	  };
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _filter = __webpack_require__(111);
	var _isObject = __webpack_require__(112);
	var _reduce = __webpack_require__(37);
	var _xfilter = __webpack_require__(113);
	var keys = __webpack_require__(43);
	
	/**
	 * Takes a predicate and a "filterable", and returns a new filterable of the
	 * same type containing the members of the given filterable which satisfy the
	 * given predicate.
	 *
	 * Dispatches to the `filter` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.reject, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *
	 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(_dispatchable(['filter'], _xfilter, function (pred, filterable) {
	  return _isObject(filterable) ? _reduce(function (acc, key) {
	    if (pred(filterable[key])) {
	      acc[key] = filterable[key];
	    }
	    return acc;
	  }, {}, keys(filterable)) :
	  // else
	  _filter(pred, filterable);
	}));

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _filter(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	
	  while (idx < len) {
	    if (fn(list[idx])) {
	      result[result.length] = list[idx];
	    }
	    idx += 1;
	  }
	  return result;
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isObject(x) {
	  return Object.prototype.toString.call(x) === '[object Object]';
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XFilter(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFilter.prototype['@@transducer/init'] = _xfBase.init;
	  XFilter.prototype['@@transducer/result'] = _xfBase.result;
	  XFilter.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	  };
	
	  return _curry2(function _xfilter(f, xf) {
	    return new XFilter(f, xf);
	  });
	}();

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry1 = __webpack_require__(12);
	var map = __webpack_require__(35);
	var max = __webpack_require__(33);
	var reduce = __webpack_require__(47);
	
	/**
	 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
	 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
	 * to `fn` are applied to each of the predicates in turn until one returns a
	 * "truthy" value, at which point `fn` returns the result of applying its
	 * arguments to the corresponding transformer. If none of the predicates
	 * matches, `fn` returns undefined.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Logic
	 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	 * @param {Array} pairs A list of [predicate, transformer]
	 * @return {Function}
	 * @example
	 *
	 *      var fn = R.cond([
	 *        [R.equals(0),   R.always('water freezes at 0°C')],
	 *        [R.equals(100), R.always('water boils at 100°C')],
	 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	 *      ]);
	 *      fn(0); //=> 'water freezes at 0°C'
	 *      fn(50); //=> 'nothing special happens at 50°C'
	 *      fn(100); //=> 'water boils at 100°C'
	 */
	module.exports = _curry1(function cond(pairs) {
	  var arity = reduce(max, 0, map(function (pair) {
	    return pair[0].length;
	  }, pairs));
	  return _arity(arity, function () {
	    var idx = 0;
	    while (idx < pairs.length) {
	      if (pairs[idx][0].apply(this, arguments)) {
	        return pairs[idx][1].apply(this, arguments);
	      }
	      idx += 1;
	    }
	  });
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var constructN = __webpack_require__(116);
	
	/**
	 * Wraps a constructor function inside a curried function that can be called
	 * with the same arguments and returns the same type.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> {*}) -> (* -> {*})
	 * @param {Function} fn The constructor function to wrap.
	 * @return {Function} A wrapped, curried constructor function.
	 * @example
	 *
	 *      // Constructor function
	 *      function Animal(kind) {
	 *        this.kind = kind;
	 *      };
	 *      Animal.prototype.sighting = function() {
	 *        return "It's a " + this.kind + "!";
	 *      }
	 *
	 *      var AnimalConstructor = R.construct(Animal)
	 *
	 *      // Notice we no longer need the 'new' keyword:
	 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
	 *
	 *      var animalTypes = ["Lion", "Tiger", "Bear"];
	 *      var animalSighting = R.invoker(0, 'sighting');
	 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
	 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
	 */
	module.exports = _curry1(function construct(Fn) {
	  return constructN(Fn.length, Fn);
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var curry = __webpack_require__(71);
	var nAry = __webpack_require__(65);
	
	/**
	 * Wraps a constructor function inside a curried function that can be called
	 * with the same arguments and returns the same type. The arity of the function
	 * returned is specified to allow using variadic constructor functions.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Function
	 * @sig Number -> (* -> {*}) -> (* -> {*})
	 * @param {Number} n The arity of the constructor function.
	 * @param {Function} Fn The constructor function to wrap.
	 * @return {Function} A wrapped, curried constructor function.
	 * @example
	 *
	 *      // Variadic Constructor function
	 *      function Salad() {
	 *        this.ingredients = arguments;
	 *      };
	 *      Salad.prototype.recipe = function() {
	 *        var instructions = R.map((ingredient) => (
	 *          'Add a whollop of ' + ingredient, this.ingredients)
	 *        )
	 *        return R.join('\n', instructions)
	 *      }
	 *
	 *      var ThreeLayerSalad = R.constructN(3, Salad)
	 *
	 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
	 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
	 *      console.log(salad.recipe());
	 *      // Add a whollop of Mayonnaise
	 *      // Add a whollop of Potato Chips
	 *      // Add a whollop of Potato Ketchup
	 */
	module.exports = _curry2(function constructN(n, Fn) {
	  if (n > 10) {
	    throw new Error('Constructor with greater than ten arguments');
	  }
	  if (n === 0) {
	    return function () {
	      return new Fn();
	    };
	  }
	  return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	    switch (arguments.length) {
	      case 1:
	        return new Fn($0);
	      case 2:
	        return new Fn($0, $1);
	      case 3:
	        return new Fn($0, $1, $2);
	      case 4:
	        return new Fn($0, $1, $2, $3);
	      case 5:
	        return new Fn($0, $1, $2, $3, $4);
	      case 6:
	        return new Fn($0, $1, $2, $3, $4, $5);
	      case 7:
	        return new Fn($0, $1, $2, $3, $4, $5, $6);
	      case 8:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	      case 9:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	      case 10:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	    }
	  }));
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _contains = __webpack_require__(99);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if the specified value is equal, in `R.equals` terms, to at
	 * least one element of the given list; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Boolean
	 * @param {Object} a The item to compare against.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
	 * @see R.any
	 * @example
	 *
	 *      R.contains(3, [1, 2, 3]); //=> true
	 *      R.contains(4, [1, 2, 3]); //=> false
	 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
	 *      R.contains([42], [[42]]); //=> true
	 */
	module.exports = _curry2(_contains);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _map = __webpack_require__(36);
	var curryN = __webpack_require__(20);
	var max = __webpack_require__(33);
	var pluck = __webpack_require__(34);
	var reduce = __webpack_require__(47);
	
	/**
	 * Accepts a converging function and a list of branching functions and returns
	 * a new function. When invoked, this new function is applied to some
	 * arguments, each branching function is applied to those same arguments. The
	 * results of each branching function are passed as arguments to the converging
	 * function to produce the return value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.2
	 * @category Function
	 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
	 * @param {Function} after A function. `after` will be invoked with the return values of
	 *        `fn1` and `fn2` as its arguments.
	 * @param {Array} functions A list of functions.
	 * @return {Function} A new function.
	 * @see R.useWith
	 * @example
	 *
	 *      var average = R.converge(R.divide, [R.sum, R.length])
	 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
	 *
	 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
	 *      strangeConcat("Yodel") //=> "YODELyodel"
	 *
	 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
	 */
	module.exports = _curry2(function converge(after, fns) {
	  return curryN(reduce(max, 0, pluck('length', fns)), function () {
	    var args = arguments;
	    var context = this;
	    return after.apply(context, _map(function (fn) {
	      return fn.apply(context, args);
	    }, fns));
	  });
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var reduceBy = __webpack_require__(120);
	
	/**
	 * Counts the elements of a list according to how many match each value of a
	 * key generated by the supplied function. Returns an object mapping the keys
	 * produced by `fn` to the number of occurrences in the list. Note that all
	 * keys are coerced to strings because of how JavaScript objects work.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig (a -> String) -> [a] -> {*}
	 * @param {Function} fn The function used to map values to keys.
	 * @param {Array} list The list to count elements from.
	 * @return {Object} An object mapping keys to number of occurrences in the list.
	 * @example
	 *
	 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	 *
	 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
	 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
	 */
	module.exports = reduceBy(function (acc, elem) {
	  return acc + 1;
	}, 0);

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curryN = __webpack_require__(22);
	var _dispatchable = __webpack_require__(26);
	var _has = __webpack_require__(44);
	var _reduce = __webpack_require__(37);
	var _xreduceBy = __webpack_require__(121);
	
	/**
	 * Groups the elements of the list according to the result of calling
	 * the String-returning function `keyFn` on each element and reduces the elements
	 * of each group to a single value via the reducer function `valueFn`.
	 *
	 * This function is basically a more general `groupBy` function.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
	 * @param {Function} valueFn The function that reduces the elements of each group to a single
	 *        value. Receives two values, accumulator for a particular group and the current element.
	 * @param {*} acc The (initial) accumulator value for each group.
	 * @param {Function} keyFn The function that maps the list's element into a key.
	 * @param {Array} list The array to group.
	 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
	 *         `valueFn` for elements which produced that key when passed to `keyFn`.
	 * @see R.groupBy, R.reduce
	 * @example
	 *
	 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
	 *      var namesByGrade = reduceToNamesBy(function(student) {
	 *        var score = student.score;
	 *        return score < 65 ? 'F' :
	 *               score < 70 ? 'D' :
	 *               score < 80 ? 'C' :
	 *               score < 90 ? 'B' : 'A';
	 *      });
	 *      var students = [{name: 'Lucy', score: 92},
	 *                      {name: 'Drew', score: 85},
	 *                      // ...
	 *                      {name: 'Bart', score: 62}];
	 *      namesByGrade(students);
	 *      // {
	 *      //   'A': ['Lucy'],
	 *      //   'B': ['Drew']
	 *      //   // ...,
	 *      //   'F': ['Bart']
	 *      // }
	 */
	module.exports = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
	  return _reduce(function (acc, elt) {
	    var key = keyFn(elt);
	    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
	    return acc;
	  }, {}, list);
	}));

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curryN = __webpack_require__(22);
	var _has = __webpack_require__(44);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
	    this.valueFn = valueFn;
	    this.valueAcc = valueAcc;
	    this.keyFn = keyFn;
	    this.xf = xf;
	    this.inputs = {};
	  }
	  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
	  XReduceBy.prototype['@@transducer/result'] = function (result) {
	    var key;
	    for (key in this.inputs) {
	      if (_has(key, this.inputs)) {
	        result = this.xf['@@transducer/step'](result, this.inputs[key]);
	        if (result['@@transducer/reduced']) {
	          result = result['@@transducer/value'];
	          break;
	        }
	      }
	    }
	    this.inputs = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
	    var key = this.keyFn(input);
	    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
	    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
	    return result;
	  };
	
	  return _curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
	    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
	  });
	}();

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var add = __webpack_require__(16);
	
	/**
	 * Decrements its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number} n - 1
	 * @see R.inc
	 * @example
	 *
	 *      R.dec(42); //=> 41
	 */
	module.exports = add(-1);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Makes a descending comparator function out of a function that returns a value
	 * that can be compared with `<` and `>`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Function
	 * @sig Ord b => (a -> b) -> a -> a -> Number
	 * @param {Function} fn A function of arity one that returns a value that can be compared
	 * @param {*} a The first item to be compared.
	 * @param {*} b The second item to be compared.
	 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
	 * @example
	 *
	 *      var byAge = R.descend(R.prop('age'));
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByOldestFirst = R.sort(byAge, people);
	 */
	module.exports = _curry3(function descend(fn, a, b) {
	  var aa = fn(a);
	  var bb = fn(b);
	  return aa > bb ? -1 : aa < bb ? 1 : 0;
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns the second argument if it is not `null`, `undefined` or `NaN`
	 * otherwise the first argument is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {a} default The default value.
	 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
	 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
	 * @example
	 *
	 *      var defaultTo42 = R.defaultTo(42);
	 *
	 *      defaultTo42(null);  //=> 42
	 *      defaultTo42(undefined);  //=> 42
	 *      defaultTo42('Ramda');  //=> 'Ramda'
	 *      // parseInt('string') results in NaN
	 *      defaultTo42(parseInt('string')); //=> 42
	 */
	module.exports = _curry2(function defaultTo(d, v) {
	  return v == null || v !== v ? d : v;
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _contains = __webpack_require__(99);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements in the first list not
	 * contained in the second list. Objects and Arrays are compared are compared
	 * in terms of value equality, not reference equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` that are not in `list2`.
	 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith
	 * @example
	 *
	 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
	 */
	module.exports = _curry2(function difference(first, second) {
	  var out = [];
	  var idx = 0;
	  var firstLen = first.length;
	  while (idx < firstLen) {
	    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	      out[out.length] = first[idx];
	    }
	    idx += 1;
	  }
	  return out;
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _containsWith = __webpack_require__(127);
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements in the first list not
	 * contained in the second list. Duplication is determined according to the
	 * value returned by applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` that are not in `list2`.
	 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
	 * @example
	 *
	 *      var cmp = (x, y) => x.a === y.a;
	 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	 *      var l2 = [{a: 3}, {a: 4}];
	 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	 */
	module.exports = _curry3(function differenceWith(pred, first, second) {
	  var out = [];
	  var idx = 0;
	  var firstLen = first.length;
	  while (idx < firstLen) {
	    if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
	      out.push(first[idx]);
	    }
	    idx += 1;
	  }
	  return out;
	});

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _containsWith(pred, x, list) {
	  var idx = 0;
	  var len = list.length;
	
	  while (idx < len) {
	    if (pred(x, list[idx])) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new object that does not contain a `prop` property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Object
	 * @sig String -> {k: v} -> {k: v}
	 * @param {String} prop The name of the property to dissociate
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original but without the specified property
	 * @see R.assoc
	 * @example
	 *
	 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	 */
	module.exports = _curry2(function dissoc(prop, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  delete result[prop];
	  return result;
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var assoc = __webpack_require__(61);
	var dissoc = __webpack_require__(128);
	
	/**
	 * Makes a shallow clone of an object, omitting the property at the given path.
	 * Note that this copies and flattens prototype properties onto the new object
	 * as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.11.0
	 * @category Object
	 * @sig [String] -> {k: v} -> {k: v}
	 * @param {Array} path The path to the value to omit
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object without the property at path
	 * @see R.assocPath
	 * @example
	 *
	 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	 */
	module.exports = _curry2(function dissocPath(path, obj) {
	  switch (path.length) {
	    case 0:
	      return obj;
	    case 1:
	      return dissoc(path[0], obj);
	    default:
	      var head = path[0];
	      var tail = Array.prototype.slice.call(path, 1);
	      return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
	  }
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Divides two numbers. Equivalent to `a / b`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a / b`.
	 * @see R.multiply
	 * @example
	 *
	 *      R.divide(71, 100); //=> 0.71
	 *
	 *      var half = R.divide(R.__, 2);
	 *      half(42); //=> 21
	 *
	 *      var reciprocal = R.divide(1);
	 *      reciprocal(4);   //=> 0.25
	 */
	module.exports = _curry2(function divide(a, b) {
	  return a / b;
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xdrop = __webpack_require__(132);
	var slice = __webpack_require__(90);
	
	/**
	 * Returns all but the first `n` elements of the given list, string, or
	 * transducer/transformer (or object with a `drop` method).
	 *
	 * Dispatches to the `drop` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n
	 * @param {[a]} list
	 * @return {[a]} A copy of list without the first `n` elements
	 * @see R.take, R.transduce, R.dropLast, R.dropWhile
	 * @example
	 *
	 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	 *      R.drop(3, 'ramda');               //=> 'da'
	 */
	module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
	  return slice(Math.max(0, n), Infinity, xs);
	}));

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XDrop(n, xf) {
	    this.xf = xf;
	    this.n = n;
	  }
	  XDrop.prototype['@@transducer/init'] = _xfBase.init;
	  XDrop.prototype['@@transducer/result'] = _xfBase.result;
	  XDrop.prototype['@@transducer/step'] = function (result, input) {
	    if (this.n > 0) {
	      this.n -= 1;
	      return result;
	    }
	    return this.xf['@@transducer/step'](result, input);
	  };
	
	  return _curry2(function _xdrop(n, xf) {
	    return new XDrop(n, xf);
	  });
	}();

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _dropLast = __webpack_require__(134);
	var _xdropLast = __webpack_require__(137);
	
	/**
	 * Returns a list containing all but the last `n` elements of the given `list`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n The number of elements of `list` to skip.
	 * @param {Array} list The list of elements to consider.
	 * @return {Array} A copy of the list with only the first `list.length - n` elements
	 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
	 * @example
	 *
	 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	 *      R.dropLast(3, 'ramda');               //=> 'ra'
	 */
	module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var take = __webpack_require__(135);
	
	module.exports = function dropLast(n, xs) {
	  return take(n < xs.length ? xs.length - n : 0, xs);
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xtake = __webpack_require__(136);
	var slice = __webpack_require__(90);
	
	/**
	 * Returns the first `n` elements of the given list, string, or
	 * transducer/transformer (or object with a `take` method).
	 *
	 * Dispatches to the `take` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n
	 * @param {*} list
	 * @return {*}
	 * @see R.drop
	 * @example
	 *
	 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(3, 'ramda');               //=> 'ram'
	 *
	 *      var personnel = [
	 *        'Dave Brubeck',
	 *        'Paul Desmond',
	 *        'Eugene Wright',
	 *        'Joe Morello',
	 *        'Gerry Mulligan',
	 *        'Bob Bates',
	 *        'Joe Dodge',
	 *        'Ron Crotty'
	 *      ];
	 *
	 *      var takeFive = R.take(5);
	 *      takeFive(personnel);
	 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	 * @symb R.take(-1, [a, b]) = [a, b]
	 * @symb R.take(0, [a, b]) = []
	 * @symb R.take(1, [a, b]) = [a]
	 * @symb R.take(2, [a, b]) = [a, b]
	 */
	module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
	  return slice(0, n < 0 ? Infinity : n, xs);
	}));

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XTake(n, xf) {
	    this.xf = xf;
	    this.n = n;
	    this.i = 0;
	  }
	  XTake.prototype['@@transducer/init'] = _xfBase.init;
	  XTake.prototype['@@transducer/result'] = _xfBase.result;
	  XTake.prototype['@@transducer/step'] = function (result, input) {
	    this.i += 1;
	    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
	    return this.i >= this.n ? _reduced(ret) : ret;
	  };
	
	  return _curry2(function _xtake(n, xf) {
	    return new XTake(n, xf);
	  });
	}();

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XDropLast(n, xf) {
	    this.xf = xf;
	    this.pos = 0;
	    this.full = false;
	    this.acc = new Array(n);
	  }
	  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
	  XDropLast.prototype['@@transducer/result'] = function (result) {
	    this.acc = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XDropLast.prototype['@@transducer/step'] = function (result, input) {
	    if (this.full) {
	      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
	    }
	    this.store(input);
	    return result;
	  };
	  XDropLast.prototype.store = function (input) {
	    this.acc[this.pos] = input;
	    this.pos += 1;
	    if (this.pos === this.acc.length) {
	      this.pos = 0;
	      this.full = true;
	    }
	  };
	
	  return _curry2(function _xdropLast(n, xf) {
	    return new XDropLast(n, xf);
	  });
	}();

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _dropLastWhile = __webpack_require__(139);
	var _xdropLastWhile = __webpack_require__(140);
	
	/**
	 * Returns a new list excluding all the tailing elements of a given list which
	 * satisfy the supplied predicate function. It passes each value from the right
	 * to the supplied predicate function, skipping elements until the predicate
	 * function returns a `falsy` value. The predicate function is applied to one argument:
	 * *(value)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @param {Function} predicate The function to be called on each element
	 * @param {Array} list The collection to iterate over.
	 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
	 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
	 * @example
	 *
	 *      var lteThree = x => x <= 3;
	 *
	 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
	 */
	module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function dropLastWhile(pred, list) {
	  var idx = list.length - 1;
	  while (idx >= 0 && pred(list[idx])) {
	    idx -= 1;
	  }
	  return Array.prototype.slice.call(list, 0, idx + 1);
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduce = __webpack_require__(37);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XDropLastWhile(fn, xf) {
	    this.f = fn;
	    this.retained = [];
	    this.xf = xf;
	  }
	  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
	    this.retained = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
	  };
	  XDropLastWhile.prototype.flush = function (result, input) {
	    result = _reduce(this.xf['@@transducer/step'], result, this.retained);
	    this.retained = [];
	    return this.xf['@@transducer/step'](result, input);
	  };
	  XDropLastWhile.prototype.retain = function (result, input) {
	    this.retained.push(input);
	    return result;
	  };
	
	  return _curry2(function _xdropLastWhile(fn, xf) {
	    return new XDropLastWhile(fn, xf);
	  });
	}();

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _dispatchable = __webpack_require__(26);
	var _xdropRepeatsWith = __webpack_require__(142);
	var dropRepeatsWith = __webpack_require__(143);
	var equals = __webpack_require__(101);
	
	/**
	 * Returns a new list without any consecutively repeating elements. `R.equals`
	 * is used to determine equality.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig [a] -> [a]
	 * @param {Array} list The array to consider.
	 * @return {Array} `list` without repeating elements.
	 * @see R.transduce
	 * @example
	 *
	 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	 */
	module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XDropRepeatsWith(pred, xf) {
	    this.xf = xf;
	    this.pred = pred;
	    this.lastValue = undefined;
	    this.seenFirstValue = false;
	  }
	
	  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
	  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
	  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	    var sameAsLast = false;
	    if (!this.seenFirstValue) {
	      this.seenFirstValue = true;
	    } else if (this.pred(this.lastValue, input)) {
	      sameAsLast = true;
	    }
	    this.lastValue = input;
	    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	  };
	
	  return _curry2(function _xdropRepeatsWith(pred, xf) {
	    return new XDropRepeatsWith(pred, xf);
	  });
	}();

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xdropRepeatsWith = __webpack_require__(142);
	var last = __webpack_require__(144);
	
	/**
	 * Returns a new list without any consecutively repeating elements. Equality is
	 * determined by applying the supplied predicate to each pair of consecutive elements. The
	 * first element in a series of equal elements will be preserved.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig (a, a -> Boolean) -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list The array to consider.
	 * @return {Array} `list` without repeating elements.
	 * @see R.transduce
	 * @example
	 *
	 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
	 */
	module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	  var result = [];
	  var idx = 1;
	  var len = list.length;
	  if (len !== 0) {
	    result[0] = list[0];
	    while (idx < len) {
	      if (!pred(last(result), list[idx])) {
	        result[result.length] = list[idx];
	      }
	      idx += 1;
	    }
	  }
	  return result;
	}));

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nth = __webpack_require__(145);
	
	/**
	 * Returns the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.init, R.head, R.tail
	 * @example
	 *
	 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	 *      R.last([]); //=> undefined
	 *
	 *      R.last('abc'); //=> 'c'
	 *      R.last(''); //=> ''
	 */
	module.exports = nth(-1);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isString = __webpack_require__(41);
	
	/**
	 * Returns the nth element of the given list or string. If n is negative the
	 * element at index length + n is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> a | Undefined
	 * @sig Number -> String -> String
	 * @param {Number} offset
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      var list = ['foo', 'bar', 'baz', 'quux'];
	 *      R.nth(1, list); //=> 'bar'
	 *      R.nth(-1, list); //=> 'quux'
	 *      R.nth(-99, list); //=> undefined
	 *
	 *      R.nth(2, 'abc'); //=> 'c'
	 *      R.nth(3, 'abc'); //=> ''
	 * @symb R.nth(-1, [a, b, c]) = c
	 * @symb R.nth(0, [a, b, c]) = a
	 * @symb R.nth(1, [a, b, c]) = b
	 */
	module.exports = _curry2(function nth(offset, list) {
	  var idx = offset < 0 ? list.length + offset : offset;
	  return _isString(list) ? list.charAt(idx) : list[idx];
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xdropWhile = __webpack_require__(147);
	
	/**
	 * Returns a new list excluding the leading elements of a given list which
	 * satisfy the supplied predicate function. It passes each value to the supplied
	 * predicate function, skipping elements while the predicate function returns
	 * `true`. The predicate function is applied to one argument: *(value)*.
	 *
	 * Dispatches to the `dropWhile` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} list The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.takeWhile, R.transduce, R.addIndex
	 * @example
	 *
	 *      var lteTwo = x => x <= 2;
	 *
	 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	 */
	module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len && pred(list[idx])) {
	    idx += 1;
	  }
	  return Array.prototype.slice.call(list, idx);
	}));

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XDropWhile(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f) {
	      if (this.f(input)) {
	        return result;
	      }
	      this.f = null;
	    }
	    return this.xf['@@transducer/step'](result, input);
	  };
	
	  return _curry2(function _xdropWhile(f, xf) {
	    return new XDropWhile(f, xf);
	  });
	}();

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isFunction = __webpack_require__(67);
	var lift = __webpack_require__(68);
	var or = __webpack_require__(149);
	
	/**
	 * A function wrapping calls to the two functions in an `||` operation,
	 * returning the result of the first function if it is truth-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * truth-y value.
	 *
	 * In addition to functions, `R.either` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f a predicate
	 * @param {Function} g another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	 * @see R.or
	 * @example
	 *
	 *      var gt10 = x => x > 10;
	 *      var even = x => x % 2 === 0;
	 *      var f = R.either(gt10, even);
	 *      f(101); //=> true
	 *      f(8); //=> true
	 */
	module.exports = _curry2(function either(f, g) {
	  return _isFunction(f) ? function _either() {
	    return f.apply(this, arguments) || g.apply(this, arguments);
	  } : lift(or)(f, g);
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if one or both of its arguments are `true`. Returns `false`
	 * if both arguments are `false`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {Any} a
	 * @param {Any} b
	 * @return {Any} the first argument if truthy, otherwise the second argument.
	 * @see R.either
	 * @example
	 *
	 *      R.or(true, true); //=> true
	 *      R.or(true, false); //=> true
	 *      R.or(false, true); //=> true
	 *      R.or(false, false); //=> false
	 */
	module.exports = _curry2(function or(a, b) {
	  return a || b;
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _isArguments = __webpack_require__(45);
	var _isArray = __webpack_require__(27);
	var _isObject = __webpack_require__(112);
	var _isString = __webpack_require__(41);
	
	/**
	 * Returns the empty value of its argument's type. Ramda defines the empty
	 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	 * types are supported if they define `<Type>.empty` and/or
	 * `<Type>.prototype.empty`.
	 *
	 * Dispatches to the `empty` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R.empty(Just(42));      //=> Nothing()
	 *      R.empty([1, 2, 3]);     //=> []
	 *      R.empty('unicorns');    //=> ''
	 *      R.empty({x: 1, y: 2});  //=> {}
	 */
	module.exports = _curry1(function empty(x) {
	  return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
	    return arguments;
	  }() :
	  // else
	  void 0;
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var equals = __webpack_require__(101);
	
	/**
	 * Takes a function and two values in its domain and returns `true` if the
	 * values map to the same value in the codomain; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Relation
	 * @sig (a -> b) -> a -> a -> Boolean
	 * @param {Function} f
	 * @param {*} x
	 * @param {*} y
	 * @return {Boolean}
	 * @example
	 *
	 *      R.eqBy(Math.abs, 5, -5); //=> true
	 */
	module.exports = _curry3(function eqBy(f, x, y) {
	  return equals(f(x), f(y));
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var equals = __webpack_require__(101);
	
	/**
	 * Reports whether two objects have the same value, in `R.equals` terms, for
	 * the specified property. Useful as a curried predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig k -> {k: v} -> {k: v} -> Boolean
	 * @param {String} prop The name of the property to compare
	 * @param {Object} obj1
	 * @param {Object} obj2
	 * @return {Boolean}
	 *
	 * @example
	 *
	 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	 *      R.eqProps('a', o1, o2); //=> false
	 *      R.eqProps('c', o1, o2); //=> true
	 */
	module.exports = _curry3(function eqProps(prop, obj1, obj2) {
	  return equals(obj1[prop], obj2[prop]);
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a new object by recursively evolving a shallow copy of `object`,
	 * according to the `transformation` functions. All non-primitive properties
	 * are copied by reference.
	 *
	 * A `transformation` function will not be invoked if its corresponding key
	 * does not exist in the evolved object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	 * @param {Object} transformations The object specifying transformation functions to apply
	 *        to the object.
	 * @param {Object} object The object to be transformed.
	 * @return {Object} The transformed object.
	 * @example
	 *
	 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	 *      var transformations = {
	 *        firstName: R.trim,
	 *        lastName: R.trim, // Will not get invoked.
	 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	 *      };
	 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	 */
	module.exports = _curry2(function evolve(transformations, object) {
	  var result = {};
	  var transformation, key, type;
	  for (key in object) {
	    transformation = transformations[key];
	    type = typeof transformation === 'undefined' ? 'undefined' : _typeof(transformation);
	    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
	  }
	  return result;
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xfind = __webpack_require__(155);
	
	/**
	 * Returns the first element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Dispatches to the `find` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 *        desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	 *      R.find(R.propEq('a', 4))(xs); //=> undefined
	 */
	module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx += 1;
	  }
	}));

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XFind(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.found = false;
	  }
	  XFind.prototype['@@transducer/init'] = _xfBase.init;
	  XFind.prototype['@@transducer/result'] = function (result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, void 0);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFind.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, input));
	    }
	    return result;
	  };
	
	  return _curry2(function _xfind(f, xf) {
	    return new XFind(f, xf);
	  });
	}();

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xfindIndex = __webpack_require__(157);
	
	/**
	 * Returns the index of the first element of the list which matches the
	 * predicate, or `-1` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Number
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Number} The index of the element found, or `-1`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	 */
	module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	}));

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XFindIndex(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.idx = -1;
	    this.found = false;
	  }
	  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	  XFindIndex.prototype['@@transducer/result'] = function (result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, -1);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	    this.idx += 1;
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	    }
	    return result;
	  };
	
	  return _curry2(function _xfindIndex(f, xf) {
	    return new XFindIndex(f, xf);
	  });
	}();

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xfindLast = __webpack_require__(159);
	
	/**
	 * Returns the last element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	 */
	module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx -= 1;
	  }
	}));

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XFindLast(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	  XFindLast.prototype['@@transducer/result'] = function (result) {
	    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	  };
	  XFindLast.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.last = input;
	    }
	    return result;
	  };
	
	  return _curry2(function _xfindLast(f, xf) {
	    return new XFindLast(f, xf);
	  });
	}();

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xfindLastIndex = __webpack_require__(161);
	
	/**
	 * Returns the index of the last element of the list which matches the
	 * predicate, or `-1` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Number
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Number} The index of the element found, or `-1`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	 */
	module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    if (fn(list[idx])) {
	      return idx;
	    }
	    idx -= 1;
	  }
	  return -1;
	}));

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XFindLastIndex(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.idx = -1;
	    this.lastIdx = -1;
	  }
	  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	  };
	  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	    this.idx += 1;
	    if (this.f(input)) {
	      this.lastIdx = this.idx;
	    }
	    return result;
	  };
	
	  return _curry2(function _xfindLastIndex(f, xf) {
	    return new XFindLastIndex(f, xf);
	  });
	}();

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _makeFlat = __webpack_require__(73);
	
	/**
	 * Returns a new list by pulling every item out of it (and all its sub-arrays)
	 * and putting them in a new array, depth-first.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b]
	 * @param {Array} list The array to consider.
	 * @return {Array} The flattened list.
	 * @see R.unnest
	 * @example
	 *
	 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	 */
	module.exports = _curry1(_makeFlat(true));

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var curry = __webpack_require__(71);
	
	/**
	 * Returns a new function much like the supplied one, except that the first two
	 * arguments' order is reversed.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	 * @param {Function} fn The function to invoke with its first two parameters reversed.
	 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	 * @example
	 *
	 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	 *
	 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	 *
	 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	 * @symb R.flip(f)(a, b, c) = f(b, a, c)
	 */
	module.exports = _curry1(function flip(fn) {
	  return curry(function (a, b) {
	    var args = Array.prototype.slice.call(arguments, 0);
	    args[0] = b;
	    args[1] = a;
	    return fn.apply(this, args);
	  });
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _checkForMethod = __webpack_require__(89);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Iterate over an input `list`, calling a provided function `fn` for each
	 * element in the list.
	 *
	 * `fn` receives one argument: *(value)*.
	 *
	 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.forEach` method. For more
	 * details on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	 *
	 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	 * the original array. In some libraries this function is named `each`.
	 *
	 * Dispatches to the `forEach` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> *) -> [a] -> [a]
	 * @param {Function} fn The function to invoke. Receives one argument, `value`.
	 * @param {Array} list The list to iterate over.
	 * @return {Array} The original list.
	 * @see R.addIndex
	 * @example
	 *
	 *      var printXPlusFive = x => console.log(x + 5);
	 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	 *      // logs 6
	 *      // logs 7
	 *      // logs 8
	 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
	 */
	module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	  var len = list.length;
	  var idx = 0;
	  while (idx < len) {
	    fn(list[idx]);
	    idx += 1;
	  }
	  return list;
	}));

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var keys = __webpack_require__(43);
	
	/**
	 * Iterate over an input `object`, calling a provided function `fn` for each
	 * key and value in the object.
	 *
	 * `fn` receives three argument: *(value, key, obj)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Object
	 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
	 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
	 * @param {Object} obj The object to iterate over.
	 * @return {Object} The original object.
	 * @example
	 *
	 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
	 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
	 *      // logs x:1
	 *      // logs y:2
	 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
	 */
	module.exports = _curry2(function forEachObjIndexed(fn, obj) {
	  var keyList = keys(obj);
	  var idx = 0;
	  while (idx < keyList.length) {
	    var key = keyList[idx];
	    fn(obj[key], key, obj);
	    idx += 1;
	  }
	  return obj;
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Creates a new object from a list key-value pairs. If a key appears in
	 * multiple pairs, the rightmost pair is included in the object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [[k,v]] -> {k: v}
	 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	 * @return {Object} The object made by pairing up `keys` and `values`.
	 * @see R.toPairs, R.pair
	 * @example
	 *
	 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry1(function fromPairs(pairs) {
	  var result = {};
	  var idx = 0;
	  while (idx < pairs.length) {
	    result[pairs[idx][0]] = pairs[idx][1];
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _checkForMethod = __webpack_require__(89);
	var _curry2 = __webpack_require__(17);
	var reduceBy = __webpack_require__(120);
	
	/**
	 * Splits a list into sub-lists stored in an object, based on the result of
	 * calling a String-returning function on each element, and grouping the
	 * results according to values returned.
	 *
	 * Dispatches to the `groupBy` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> String) -> [a] -> {String: [a]}
	 * @param {Function} fn Function :: a -> String
	 * @param {Array} list The array to group
	 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	 *         that produced that key when passed to `fn`.
	 * @see R.transduce
	 * @example
	 *
	 *      var byGrade = R.groupBy(function(student) {
	 *        var score = student.score;
	 *        return score < 65 ? 'F' :
	 *               score < 70 ? 'D' :
	 *               score < 80 ? 'C' :
	 *               score < 90 ? 'B' : 'A';
	 *      });
	 *      var students = [{name: 'Abby', score: 84},
	 *                      {name: 'Eddy', score: 58},
	 *                      // ...
	 *                      {name: 'Jack', score: 69}];
	 *      byGrade(students);
	 *      // {
	 *      //   'A': [{name: 'Dianne', score: 99}],
	 *      //   'B': [{name: 'Abby', score: 84}]
	 *      //   // ...,
	 *      //   'F': [{name: 'Eddy', score: 58}]
	 *      // }
	 */
	module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function (acc, item) {
	  if (acc == null) {
	    acc = [];
	  }
	  acc.push(item);
	  return acc;
	}, null)));

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Takes a list and returns a list of lists where each sublist's elements are
	 * all "equal" according to the provided equality function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.21.0
	 * @category List
	 * @sig ((a, a) → Boolean) → [a] → [[a]]
	 * @param {Function} fn Function for determining whether two given (adjacent)
	 *        elements should be in the same group
	 * @param {Array} list The array to group. Also accepts a string, which will be
	 *        treated as a list of characters.
	 * @return {List} A list that contains sublists of equal elements,
	 *         whose concatenations are equal to the original list.
	 * @example
	 *
	 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
	 *
	 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
	 *
	 * R.groupWith(R.eqBy(isVowel), 'aestiou')
	 * //=> ['ae', 'st', 'iou']
	 */
	module.exports = _curry2(function (fn, list) {
	  var res = [];
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    var nextidx = idx + 1;
	    while (nextidx < len && fn(list[idx], list[nextidx])) {
	      nextidx += 1;
	    }
	    res.push(list.slice(idx, nextidx));
	    idx = nextidx;
	  }
	  return res;
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if the first argument is greater than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.lt
	 * @example
	 *
	 *      R.gt(2, 1); //=> true
	 *      R.gt(2, 2); //=> false
	 *      R.gt(2, 3); //=> false
	 *      R.gt('a', 'z'); //=> false
	 *      R.gt('z', 'a'); //=> true
	 */
	module.exports = _curry2(function gt(a, b) {
	  return a > b;
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if the first argument is greater than or equal to the second;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Boolean}
	 * @see R.lte
	 * @example
	 *
	 *      R.gte(2, 1); //=> true
	 *      R.gte(2, 2); //=> true
	 *      R.gte(2, 3); //=> false
	 *      R.gte('a', 'z'); //=> false
	 *      R.gte('z', 'a'); //=> true
	 */
	module.exports = _curry2(function gte(a, b) {
	  return a >= b;
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _has = __webpack_require__(44);
	
	/**
	 * Returns whether or not an object has an own property with the specified name
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Object
	 * @sig s -> {s: x} -> Boolean
	 * @param {String} prop The name of the property to check for.
	 * @param {Object} obj The object to query.
	 * @return {Boolean} Whether the property exists.
	 * @example
	 *
	 *      var hasName = R.has('name');
	 *      hasName({name: 'alice'});   //=> true
	 *      hasName({name: 'bob'});     //=> true
	 *      hasName({});                //=> false
	 *
	 *      var point = {x: 0, y: 0};
	 *      var pointHas = R.has(R.__, point);
	 *      pointHas('x');  //=> true
	 *      pointHas('y');  //=> true
	 *      pointHas('z');  //=> false
	 */
	module.exports = _curry2(_has);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns whether or not an object or its prototype chain has a property with
	 * the specified name
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Object
	 * @sig s -> {s: x} -> Boolean
	 * @param {String} prop The name of the property to check for.
	 * @param {Object} obj The object to query.
	 * @return {Boolean} Whether the property exists.
	 * @example
	 *
	 *      function Rectangle(width, height) {
	 *        this.width = width;
	 *        this.height = height;
	 *      }
	 *      Rectangle.prototype.area = function() {
	 *        return this.width * this.height;
	 *      };
	 *
	 *      var square = new Rectangle(2, 2);
	 *      R.hasIn('width', square);  //=> true
	 *      R.hasIn('area', square);  //=> true
	 */
	module.exports = _curry2(function hasIn(prop, obj) {
	  return prop in obj;
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nth = __webpack_require__(145);
	
	/**
	 * Returns the first element of the given list or string. In some libraries
	 * this function is named `first`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {*}
	 * @see R.tail, R.init, R.last
	 * @example
	 *
	 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	 *      R.head([]); //=> undefined
	 *
	 *      R.head('abc'); //=> 'a'
	 *      R.head(''); //=> ''
	 */
	module.exports = nth(0);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _identity = __webpack_require__(175);
	
	/**
	 * A function that does nothing but return the parameter supplied to it. Good
	 * as a default or placeholder function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x The value to return.
	 * @return {*} The input value, `x`.
	 * @example
	 *
	 *      R.identity(1); //=> 1
	 *
	 *      var obj = {};
	 *      R.identity(obj) === obj; //=> true
	 * @symb R.identity(a) = a
	 */
	module.exports = _curry1(_identity);

/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _identity(x) {
	  return x;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var curryN = __webpack_require__(20);
	
	/**
	 * Creates a function that will process either the `onTrue` or the `onFalse`
	 * function depending upon the result of the `condition` predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	 * @param {Function} condition A predicate function
	 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	 *                    function depending upon the result of the `condition` predicate.
	 * @see R.unless, R.when
	 * @example
	 *
	 *      var incCount = R.ifElse(
	 *        R.has('count'),
	 *        R.over(R.lensProp('count'), R.inc),
	 *        R.assoc('count', 1)
	 *      );
	 *      incCount({});           //=> { count: 1 }
	 *      incCount({ count: 1 }); //=> { count: 2 }
	 */
	module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
	  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	  });
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var add = __webpack_require__(16);
	
	/**
	 * Increments its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number} n + 1
	 * @see R.dec
	 * @example
	 *
	 *      R.inc(42); //=> 43
	 */
	module.exports = add(1);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var reduceBy = __webpack_require__(120);
	
	/**
	 * Given a function that generates a key, turns a list of objects into an
	 * object indexing the objects by the given key. Note that if multiple
	 * objects generate the same value for the indexing key only the last value
	 * will be included in the generated object.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
	 * @param {Function} fn Function :: a -> String
	 * @param {Array} array The array of objects to index
	 * @return {Object} An object indexing each array element by the given property.
	 * @example
	 *
	 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
	 *      R.indexBy(R.prop('id'), list);
	 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	 */
	module.exports = reduceBy(function (acc, elem) {
	  return elem;
	}, null);

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _indexOf = __webpack_require__(100);
	var _isArray = __webpack_require__(27);
	
	/**
	 * Returns the position of the first occurrence of an item in an array, or -1
	 * if the item is not included in the array. `R.equals` is used to determine
	 * equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Number
	 * @param {*} target The item to find.
	 * @param {Array} xs The array to search in.
	 * @return {Number} the index of the target, or -1 if the target is not found.
	 * @see R.lastIndexOf
	 * @example
	 *
	 *      R.indexOf(3, [1,2,3,4]); //=> 2
	 *      R.indexOf(10, [1,2,3,4]); //=> -1
	 */
	module.exports = _curry2(function indexOf(target, xs) {
	  return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var slice = __webpack_require__(90);
	
	/**
	 * Returns all but the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.last, R.head, R.tail
	 * @example
	 *
	 *      R.init([1, 2, 3]);  //=> [1, 2]
	 *      R.init([1, 2]);     //=> [1]
	 *      R.init([1]);        //=> []
	 *      R.init([]);         //=> []
	 *
	 *      R.init('abc');  //=> 'ab'
	 *      R.init('ab');   //=> 'a'
	 *      R.init('a');    //=> ''
	 *      R.init('');     //=> ''
	 */
	module.exports = slice(0, -1);

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Inserts the supplied element into the list, at index `index`. _Note that
	 * this is not destructive_: it returns a copy of the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.2
	 * @category List
	 * @sig Number -> a -> [a] -> [a]
	 * @param {Number} index The position to insert the element
	 * @param {*} elt The element to insert into the Array
	 * @param {Array} list The list to insert into
	 * @return {Array} A new Array with `elt` inserted at `index`.
	 * @example
	 *
	 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	 */
	module.exports = _curry3(function insert(idx, elt, list) {
	  idx = idx < list.length && idx >= 0 ? idx : list.length;
	  var result = Array.prototype.slice.call(list, 0);
	  result.splice(idx, 0, elt);
	  return result;
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Inserts the sub-list into the list, at index `index`. _Note that this is not
	 * destructive_: it returns a copy of the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig Number -> [a] -> [a] -> [a]
	 * @param {Number} index The position to insert the sub-list
	 * @param {Array} elts The sub-list to insert into the Array
	 * @param {Array} list The list to insert the sub-list into
	 * @return {Array} A new Array with `elts` inserted starting at `index`.
	 * @example
	 *
	 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	 */
	module.exports = _curry3(function insertAll(idx, elts, list) {
	  idx = idx < list.length && idx >= 0 ? idx : list.length;
	  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _contains = __webpack_require__(99);
	var _curry2 = __webpack_require__(17);
	var _filter = __webpack_require__(111);
	var flip = __webpack_require__(163);
	var uniq = __webpack_require__(184);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of those
	 * elements common to both lists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The list of elements found in both `list1` and `list2`.
	 * @see R.intersectionWith
	 * @example
	 *
	 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	 */
	module.exports = _curry2(function intersection(list1, list2) {
	  var lookupList, filteredList;
	  if (list1.length > list2.length) {
	    lookupList = list1;
	    filteredList = list2;
	  } else {
	    lookupList = list2;
	    filteredList = list1;
	  }
	  return uniq(_filter(flip(_contains)(lookupList), filteredList));
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(174);
	var uniqBy = __webpack_require__(185);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list. `R.equals` is used to determine equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	 *      R.uniq([1, '1']);     //=> [1, '1']
	 *      R.uniq([[42], [42]]); //=> [[42]]
	 */
	module.exports = uniqBy(identity);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Set = __webpack_require__(186);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list, based upon the value returned by applying the supplied function to
	 * each list element. Prefers the first item if the supplied function produces
	 * the same value on two items. `R.equals` is used for comparison.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> b) -> [a] -> [a]
	 * @param {Function} fn A function used to produce a value to use during comparisons.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	 */
	module.exports = _curry2(function uniqBy(fn, list) {
	  var set = new _Set();
	  var result = [];
	  var idx = 0;
	  var appliedItem, item;
	
	  while (idx < list.length) {
	    item = list[idx];
	    appliedItem = fn(item);
	    if (set.add(appliedItem)) {
	      result.push(item);
	    }
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _contains = __webpack_require__(99);
	
	// A simple Set type that honours R.equals semantics
	module.exports = function () {
	  function _Set() {
	    /* globals Set */
	    this._nativeSet = typeof Set === 'function' ? new Set() : null;
	    this._items = {};
	  }
	
	  // until we figure out why jsdoc chokes on this
	  // @param item The item to add to the Set
	  // @returns {boolean} true if the item did not exist prior, otherwise false
	  //
	  _Set.prototype.add = function (item) {
	    return !hasOrAdd(item, true, this);
	  };
	
	  //
	  // @param item The item to check for existence in the Set
	  // @returns {boolean} true if the item exists in the Set, otherwise false
	  //
	  _Set.prototype.has = function (item) {
	    return hasOrAdd(item, false, this);
	  };
	
	  //
	  // Combines the logic for checking whether an item is a member of the set and
	  // for adding a new item to the set.
	  //
	  // @param item       The item to check or add to the Set instance.
	  // @param shouldAdd  If true, the item will be added to the set if it doesn't
	  //                   already exist.
	  // @param set        The set instance to check or add to.
	  // @return {boolean} true if the item already existed, otherwise false.
	  //
	  function hasOrAdd(item, shouldAdd, set) {
	    var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);
	    var prevSize, newSize;
	    switch (type) {
	      case 'string':
	      case 'number':
	        // distinguish between +0 and -0
	        if (item === 0 && 1 / item === -Infinity) {
	          if (set._items['-0']) {
	            return true;
	          } else {
	            if (shouldAdd) {
	              set._items['-0'] = true;
	            }
	            return false;
	          }
	        }
	        // these types can all utilise the native Set
	        if (set._nativeSet !== null) {
	          if (shouldAdd) {
	            prevSize = set._nativeSet.size;
	            set._nativeSet.add(item);
	            newSize = set._nativeSet.size;
	            return newSize === prevSize;
	          } else {
	            return set._nativeSet.has(item);
	          }
	        } else {
	          if (!(type in set._items)) {
	            if (shouldAdd) {
	              set._items[type] = {};
	              set._items[type][item] = true;
	            }
	            return false;
	          } else if (item in set._items[type]) {
	            return true;
	          } else {
	            if (shouldAdd) {
	              set._items[type][item] = true;
	            }
	            return false;
	          }
	        }
	
	      case 'boolean':
	        // set._items['boolean'] holds a two element array
	        // representing [ falseExists, trueExists ]
	        if (type in set._items) {
	          var bIdx = item ? 1 : 0;
	          if (set._items[type][bIdx]) {
	            return true;
	          } else {
	            if (shouldAdd) {
	              set._items[type][bIdx] = true;
	            }
	            return false;
	          }
	        } else {
	          if (shouldAdd) {
	            set._items[type] = item ? [false, true] : [true, false];
	          }
	          return false;
	        }
	
	      case 'function':
	        // compare functions for reference equality
	        if (set._nativeSet !== null) {
	          if (shouldAdd) {
	            prevSize = set._nativeSet.size;
	            set._nativeSet.add(item);
	            newSize = set._nativeSet.size;
	            return newSize === prevSize;
	          } else {
	            return set._nativeSet.has(item);
	          }
	        } else {
	          if (!(type in set._items)) {
	            if (shouldAdd) {
	              set._items[type] = [item];
	            }
	            return false;
	          }
	          if (!_contains(item, set._items[type])) {
	            if (shouldAdd) {
	              set._items[type].push(item);
	            }
	            return false;
	          }
	          return true;
	        }
	
	      case 'undefined':
	        if (set._items[type]) {
	          return true;
	        } else {
	          if (shouldAdd) {
	            set._items[type] = true;
	          }
	          return false;
	        }
	
	      case 'object':
	        if (item === null) {
	          if (!set._items['null']) {
	            if (shouldAdd) {
	              set._items['null'] = true;
	            }
	            return false;
	          }
	          return true;
	        }
	      /* falls through */
	      default:
	        // reduce the search size of heterogeneous sets by creating buckets
	        // for each type.
	        type = Object.prototype.toString.call(item);
	        if (!(type in set._items)) {
	          if (shouldAdd) {
	            set._items[type] = [item];
	          }
	          return false;
	        }
	        // scan through all previously applied items
	        if (!_contains(item, set._items[type])) {
	          if (shouldAdd) {
	            set._items[type].push(item);
	          }
	          return false;
	        }
	        return true;
	    }
	  }
	  return _Set;
	}();

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _containsWith = __webpack_require__(127);
	var _curry3 = __webpack_require__(24);
	var uniqWith = __webpack_require__(188);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of those
	 * elements common to both lists. Duplication is determined according to the
	 * value returned by applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
	 * @param {Function} pred A predicate function that determines whether
	 *        the two supplied elements are equal.
	 * @param {Array} list1 One list of items to compare
	 * @param {Array} list2 A second list of items to compare
	 * @return {Array} A new list containing those elements common to both lists.
	 * @see R.intersection
	 * @example
	 *
	 *      var buffaloSpringfield = [
	 *        {id: 824, name: 'Richie Furay'},
	 *        {id: 956, name: 'Dewey Martin'},
	 *        {id: 313, name: 'Bruce Palmer'},
	 *        {id: 456, name: 'Stephen Stills'},
	 *        {id: 177, name: 'Neil Young'}
	 *      ];
	 *      var csny = [
	 *        {id: 204, name: 'David Crosby'},
	 *        {id: 456, name: 'Stephen Stills'},
	 *        {id: 539, name: 'Graham Nash'},
	 *        {id: 177, name: 'Neil Young'}
	 *      ];
	 *
	 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
	 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	 */
	module.exports = _curry3(function intersectionWith(pred, list1, list2) {
	  var lookupList, filteredList;
	  if (list1.length > list2.length) {
	    lookupList = list1;
	    filteredList = list2;
	  } else {
	    lookupList = list2;
	    filteredList = list1;
	  }
	  var results = [];
	  var idx = 0;
	  while (idx < filteredList.length) {
	    if (_containsWith(pred, filteredList[idx], lookupList)) {
	      results[results.length] = filteredList[idx];
	    }
	    idx += 1;
	  }
	  return uniqWith(pred, results);
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _containsWith = __webpack_require__(127);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list, based upon the value returned by applying the supplied predicate to
	 * two list elements. Prefers the first item if two items compare equal based
	 * on the predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category List
	 * @sig (a, a -> Boolean) -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      var strEq = R.eqBy(String);
	 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	 */
	module.exports = _curry2(function uniqWith(pred, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	  var item;
	  while (idx < len) {
	    item = list[idx];
	    if (!_containsWith(pred, item, result)) {
	      result[result.length] = item;
	    }
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _checkForMethod = __webpack_require__(89);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a new list with the separator interposed between elements.
	 *
	 * Dispatches to the `intersperse` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} separator The element to add to the list.
	 * @param {Array} list The list to be interposed.
	 * @return {Array} The new list.
	 * @example
	 *
	 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	 */
	module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
	  var out = [];
	  var idx = 0;
	  var length = list.length;
	  while (idx < length) {
	    if (idx === length - 1) {
	      out.push(list[idx]);
	    } else {
	      out.push(list[idx], separator);
	    }
	    idx += 1;
	  }
	  return out;
	}));

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _clone = __webpack_require__(79);
	var _curry3 = __webpack_require__(24);
	var _isTransformer = __webpack_require__(28);
	var _reduce = __webpack_require__(37);
	var _stepCat = __webpack_require__(191);
	
	/**
	 * Transforms the items of the list with the transducer and appends the
	 * transformed items to the accumulator using an appropriate iterator function
	 * based on the accumulator type.
	 *
	 * The accumulator can be an array, string, object or a transformer. Iterated
	 * items will be appended to arrays and concatenated to strings. Objects will
	 * be merged directly or 2-item arrays will be merged as key, value pairs.
	 *
	 * The accumulator can also be a transformer object that provides a 2-arity
	 * reducing iterator function, step, 0-arity initial value function, init, and
	 * 1-arity result extraction function result. The step function is used as the
	 * iterator function in reduce. The result function is used to convert the
	 * final accumulator into the return type and in most cases is R.identity. The
	 * init function is used to provide the initial accumulator.
	 *
	 * The iteration is performed with R.reduce after initializing the transducer.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig a -> (b -> b) -> [c] -> a
	 * @param {*} acc The initial accumulator value.
	 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	 *
	 *      R.into([], transducer, numbers); //=> [2, 3]
	 *
	 *      var intoArray = R.into([]);
	 *      intoArray(transducer, numbers); //=> [2, 3]
	 */
	module.exports = _curry3(function into(acc, xf, list) {
	  return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _assign = __webpack_require__(192);
	var _identity = __webpack_require__(175);
	var _isTransformer = __webpack_require__(28);
	var isArrayLike = __webpack_require__(40);
	var objOf = __webpack_require__(194);
	
	module.exports = function () {
	  var _stepCatArray = {
	    '@@transducer/init': Array,
	    '@@transducer/step': function transducerStep(xs, x) {
	      xs.push(x);
	      return xs;
	    },
	    '@@transducer/result': _identity
	  };
	  var _stepCatString = {
	    '@@transducer/init': String,
	    '@@transducer/step': function transducerStep(a, b) {
	      return a + b;
	    },
	    '@@transducer/result': _identity
	  };
	  var _stepCatObject = {
	    '@@transducer/init': Object,
	    '@@transducer/step': function transducerStep(result, input) {
	      return _assign(result, isArrayLike(input) ? objOf(input[0], input[1]) : input);
	    },
	    '@@transducer/result': _identity
	  };
	
	  return function _stepCat(obj) {
	    if (_isTransformer(obj)) {
	      return obj;
	    }
	    if (isArrayLike(obj)) {
	      return _stepCatArray;
	    }
	    if (typeof obj === 'string') {
	      return _stepCatString;
	    }
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      return _stepCatObject;
	    }
	    throw new Error('Cannot create transformer for ' + obj);
	  };
	}();

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(193);
	
	module.exports = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _has = __webpack_require__(44);
	
	// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	module.exports = function _objectAssign(target) {
	  if (target == null) {
	    throw new TypeError('Cannot convert undefined or null to object');
	  }
	
	  var output = Object(target);
	  var idx = 1;
	  var length = arguments.length;
	  while (idx < length) {
	    var source = arguments[idx];
	    if (source != null) {
	      for (var nextKey in source) {
	        if (_has(nextKey, source)) {
	          output[nextKey] = source[nextKey];
	        }
	      }
	    }
	    idx += 1;
	  }
	  return output;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates an object containing a single key:value pair.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Object
	 * @sig String -> a -> {String:a}
	 * @param {String} key
	 * @param {*} val
	 * @return {Object}
	 * @see R.pair
	 * @example
	 *
	 *      var matchPhrases = R.compose(
	 *        R.objOf('must'),
	 *        R.map(R.objOf('match_phrase'))
	 *      );
	 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	 */
	module.exports = _curry2(function objOf(key, val) {
	  var obj = {};
	  obj[key] = val;
	  return obj;
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _has = __webpack_require__(44);
	var keys = __webpack_require__(43);
	
	/**
	 * Same as R.invertObj, however this accounts for objects with duplicate values
	 * by putting the values into an array.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {s: x} -> {x: [ s, ... ]}
	 * @param {Object} obj The object or array to invert
	 * @return {Object} out A new object with keys
	 * in an array.
	 * @example
	 *
	 *      var raceResultsByFirstName = {
	 *        first: 'alice',
	 *        second: 'jake',
	 *        third: 'alice',
	 *      };
	 *      R.invert(raceResultsByFirstName);
	 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	 */
	module.exports = _curry1(function invert(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var idx = 0;
	  var out = {};
	
	  while (idx < len) {
	    var key = props[idx];
	    var val = obj[key];
	    var list = _has(val, out) ? out[val] : out[val] = [];
	    list[list.length] = key;
	    idx += 1;
	  }
	  return out;
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var keys = __webpack_require__(43);
	
	/**
	 * Returns a new object with the keys of the given object as values, and the
	 * values of the given object, which are coerced to strings, as keys. Note
	 * that the last key found is preferred when handling the same value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {s: x} -> {x: s}
	 * @param {Object} obj The object or array to invert
	 * @return {Object} out A new object
	 * @example
	 *
	 *      var raceResults = {
	 *        first: 'alice',
	 *        second: 'jake'
	 *      };
	 *      R.invertObj(raceResults);
	 *      //=> { 'alice': 'first', 'jake':'second' }
	 *
	 *      // Alternatively:
	 *      var raceResults = ['alice', 'jake'];
	 *      R.invertObj(raceResults);
	 *      //=> { 'alice': '0', 'jake':'1' }
	 */
	module.exports = _curry1(function invertObj(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var idx = 0;
	  var out = {};
	
	  while (idx < len) {
	    var key = props[idx];
	    out[obj[key]] = key;
	    idx += 1;
	  }
	  return out;
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isFunction = __webpack_require__(67);
	var curryN = __webpack_require__(20);
	var toString = __webpack_require__(97);
	
	/**
	 * Turns a named method with a specified arity into a function that can be
	 * called directly supplied with arguments and a target object.
	 *
	 * The returned function is curried and accepts `arity + 1` parameters where
	 * the final parameter is the target object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	 * @param {Number} arity Number of arguments the returned function should take
	 *        before the target object.
	 * @param {String} method Name of the method to call.
	 * @return {Function} A new curried function.
	 * @example
	 *
	 *      var sliceFrom = R.invoker(1, 'slice');
	 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	 * @symb R.invoker(0, 'method')(o) = o['method']()
	 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
	 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
	 */
	module.exports = _curry2(function invoker(arity, method) {
	  return curryN(arity + 1, function () {
	    var target = arguments[arity];
	    if (target != null && _isFunction(target[method])) {
	      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
	    }
	    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	  });
	});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * See if an object (`val`) is an instance of the supplied constructor. This
	 * function will check up the inheritance chain, if any.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Type
	 * @sig (* -> {*}) -> a -> Boolean
	 * @param {Object} ctor A constructor
	 * @param {*} val The value to test
	 * @return {Boolean}
	 * @example
	 *
	 *      R.is(Object, {}); //=> true
	 *      R.is(Number, 1); //=> true
	 *      R.is(Object, 1); //=> false
	 *      R.is(String, 's'); //=> true
	 *      R.is(String, new String('')); //=> true
	 *      R.is(Object, new String('')); //=> true
	 *      R.is(Object, 's'); //=> false
	 *      R.is(Number, {}); //=> false
	 */
	module.exports = _curry2(function is(Ctor, val) {
	  return val != null && val.constructor === Ctor || val instanceof Ctor;
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var empty = __webpack_require__(150);
	var equals = __webpack_require__(101);
	
	/**
	 * Returns `true` if the given value is its type's empty value; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> Boolean
	 * @param {*} x
	 * @return {Boolean}
	 * @see R.empty
	 * @example
	 *
	 *      R.isEmpty([1, 2, 3]);   //=> false
	 *      R.isEmpty([]);          //=> true
	 *      R.isEmpty('');          //=> true
	 *      R.isEmpty(null);        //=> false
	 *      R.isEmpty({});          //=> true
	 *      R.isEmpty({length: 0}); //=> false
	 */
	module.exports = _curry1(function isEmpty(x) {
	  return x != null && equals(x, empty(x));
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Checks if the input value is `null` or `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Type
	 * @sig * -> Boolean
	 * @param {*} x The value to test.
	 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	 * @example
	 *
	 *      R.isNil(null); //=> true
	 *      R.isNil(undefined); //=> true
	 *      R.isNil(0); //=> false
	 *      R.isNil([]); //=> false
	 */
	module.exports = _curry1(function isNil(x) {
	  return x == null;
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var invoker = __webpack_require__(197);
	
	/**
	 * Returns a string made by inserting the `separator` between each element and
	 * concatenating all the elements into a single string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig String -> [a] -> String
	 * @param {Number|String} separator The string used to separate the elements.
	 * @param {Array} xs The elements to join into a string.
	 * @return {String} str The string made by concatenating `xs` with `separator`.
	 * @see R.split
	 * @example
	 *
	 *      var spacer = R.join(' ');
	 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	 */
	module.exports = invoker(1, 'join');

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var converge = __webpack_require__(118);
	
	/**
	 * juxt applies a list of functions to a list of values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Function
	 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	 * @param {Array} fns An array of functions
	 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	 * @see R.applySpec
	 * @example
	 *
	 *      var getRange = R.juxt([Math.min, Math.max]);
	 *      getRange(3, 4, 9, -3); //=> [-3, 9]
	 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
	 */
	module.exports = _curry1(function juxt(fns) {
	  return converge(function () {
	    return Array.prototype.slice.call(arguments, 0);
	  }, fns);
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Returns a list containing the names of all the properties of the supplied
	 * object, including prototype properties.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own and prototype properties.
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.keysIn(f); //=> ['x', 'y']
	 */
	module.exports = _curry1(function keysIn(obj) {
	  var prop;
	  var ks = [];
	  for (prop in obj) {
	    ks[ks.length] = prop;
	  }
	  return ks;
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isArray = __webpack_require__(27);
	var equals = __webpack_require__(101);
	
	/**
	 * Returns the position of the last occurrence of an item in an array, or -1 if
	 * the item is not included in the array. `R.equals` is used to determine
	 * equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Number
	 * @param {*} target The item to find.
	 * @param {Array} xs The array to search in.
	 * @return {Number} the index of the target, or -1 if the target is not found.
	 * @see R.indexOf
	 * @example
	 *
	 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	 */
	module.exports = _curry2(function lastIndexOf(target, xs) {
	  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
	    return xs.lastIndexOf(target);
	  } else {
	    var idx = xs.length - 1;
	    while (idx >= 0) {
	      if (equals(xs[idx], target)) {
	        return idx;
	      }
	      idx -= 1;
	    }
	    return -1;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _isNumber = __webpack_require__(206);
	
	/**
	 * Returns the number of elements in the array by returning `list.length`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [a] -> Number
	 * @param {Array} list The array to inspect.
	 * @return {Number} The length of the array.
	 * @example
	 *
	 *      R.length([]); //=> 0
	 *      R.length([1, 2, 3]); //=> 3
	 */
	module.exports = _curry1(function length(list) {
	  return list != null && _isNumber(list.length) ? list.length : NaN;
	});

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isNumber(x) {
	  return Object.prototype.toString.call(x) === '[object Number]';
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var map = __webpack_require__(35);
	
	/**
	 * Returns a lens for the given getter and setter functions. The getter "gets"
	 * the value of the focus; the setter "sets" the value of the focus. The setter
	 * should not mutate the data structure.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	 * @param {Function} getter
	 * @param {Function} setter
	 * @return {Lens}
	 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	module.exports = _curry2(function lens(getter, setter) {
	  return function (toFunctorFn) {
	    return function (target) {
	      return map(function (focus) {
	        return setter(focus, target);
	      }, toFunctorFn(getter(target)));
	    };
	  };
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var lens = __webpack_require__(207);
	var nth = __webpack_require__(145);
	var update = __webpack_require__(209);
	
	/**
	 * Returns a lens whose focus is the specified index.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Number -> Lens s a
	 * @param {Number} n
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var headLens = R.lensIndex(0);
	 *
	 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	 */
	module.exports = _curry1(function lensIndex(n) {
	  return lens(nth(n), update(n));
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var adjust = __webpack_require__(23);
	var always = __webpack_require__(11);
	
	/**
	 * Returns a new copy of the array with the element at the provided index
	 * replaced with the given value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig Number -> a -> [a] -> [a]
	 * @param {Number} idx The index to update.
	 * @param {*} x The value to exist at the given index of the returned array.
	 * @param {Array|Arguments} list The source array-like object to be updated.
	 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	 * @see R.adjust
	 * @example
	 *
	 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	 * @symb R.update(-1, a, [b, c]) = [b, a]
	 * @symb R.update(0, a, [b, c]) = [a, c]
	 * @symb R.update(1, a, [b, c]) = [b, a]
	 */
	module.exports = _curry3(function update(idx, x, list) {
	  return adjust(always(x), idx, list);
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var assocPath = __webpack_require__(62);
	var lens = __webpack_require__(207);
	var path = __webpack_require__(211);
	
	/**
	 * Returns a lens whose focus is the specified path.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig [Idx] -> Lens s a
	 * @param {Array} path The path to use.
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
	 *
	 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> 2
	 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
	 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
	 */
	module.exports = _curry1(function lensPath(p) {
	  return lens(path(p), assocPath(p));
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Retrieve the value at a given path.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> {a} -> a | Undefined
	 * @param {Array} path The path to use.
	 * @param {Object} obj The object to retrieve the nested property from.
	 * @return {*} The data at `path`.
	 * @see R.prop
	 * @example
	 *
	 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	 */
	module.exports = _curry2(function path(paths, obj) {
	  var val = obj;
	  var idx = 0;
	  while (idx < paths.length) {
	    if (val == null) {
	      return;
	    }
	    val = val[paths[idx]];
	    idx += 1;
	  }
	  return val;
	});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var assoc = __webpack_require__(61);
	var lens = __webpack_require__(207);
	var prop = __webpack_require__(46);
	
	/**
	 * Returns a lens whose focus is the specified property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig String -> Lens s a
	 * @param {String} k
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	module.exports = _curry1(function lensProp(k) {
	  return lens(prop(k), assoc(k));
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if the first argument is less than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.gt
	 * @example
	 *
	 *      R.lt(2, 1); //=> false
	 *      R.lt(2, 2); //=> false
	 *      R.lt(2, 3); //=> true
	 *      R.lt('a', 'z'); //=> true
	 *      R.lt('z', 'a'); //=> false
	 */
	module.exports = _curry2(function lt(a, b) {
	  return a < b;
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns `true` if the first argument is less than or equal to the second;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Boolean}
	 * @see R.gte
	 * @example
	 *
	 *      R.lte(2, 1); //=> false
	 *      R.lte(2, 2); //=> true
	 *      R.lte(2, 3); //=> true
	 *      R.lte('a', 'z'); //=> true
	 *      R.lte('z', 'a'); //=> false
	 */
	module.exports = _curry2(function lte(a, b) {
	  return a <= b;
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * The mapAccum function behaves like a combination of map and reduce; it
	 * applies a function to each element of a list, passing an accumulating
	 * parameter from left to right, and returning a final value of this
	 * accumulator together with the new list.
	 *
	 * The iterator function receives two arguments, *acc* and *value*, and should
	 * return a tuple *[acc, value]*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.addIndex, R.mapAccumRight
	 * @example
	 *
	 *      var digits = ['1', '2', '3', '4'];
	 *      var appender = (a, b) => [a + b, a + b];
	 *
	 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	 * @symb R.mapAccum(f, a, [b, c, d]) = [
	 *   f(f(f(a, b)[0], c)[0], d)[0],
	 *   [
	 *     f(a, b)[1],
	 *     f(f(a, b)[0], c)[1],
	 *     f(f(f(a, b)[0], c)[0], d)[1]
	 *   ]
	 * ]
	 */
	module.exports = _curry3(function mapAccum(fn, acc, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	  var tuple = [acc];
	  while (idx < len) {
	    tuple = fn(tuple[0], list[idx]);
	    result[idx] = tuple[1];
	    idx += 1;
	  }
	  return [tuple[0], result];
	});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * The mapAccumRight function behaves like a combination of map and reduce; it
	 * applies a function to each element of a list, passing an accumulating
	 * parameter from right to left, and returning a final value of this
	 * accumulator together with the new list.
	 *
	 * Similar to `mapAccum`, except moves through the input list from the right to
	 * the left.
	 *
	 * The iterator function receives two arguments, *value* and *acc*, and should
	 * return a tuple *[value, acc]*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.addIndex, R.mapAccum
	 * @example
	 *
	 *      var digits = ['1', '2', '3', '4'];
	 *      var append = (a, b) => [a + b, a + b];
	 *
	 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
	 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
	 *   [
	 *     f(b, f(c, f(d, a)[0])[0])[1],
	 *     f(c, f(d, a)[0])[1],
	 *     f(d, a)[1],
	 *   ]
	 *   f(b, f(c, f(d, a)[0])[0])[0],
	 * ]
	 */
	module.exports = _curry3(function mapAccumRight(fn, acc, list) {
	  var idx = list.length - 1;
	  var result = [];
	  var tuple = [acc];
	  while (idx >= 0) {
	    tuple = fn(list[idx], tuple[0]);
	    result[idx] = tuple[1];
	    idx -= 1;
	  }
	  return [result, tuple[0]];
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduce = __webpack_require__(37);
	var keys = __webpack_require__(43);
	
	/**
	 * An Object-specific version of `map`. The function is applied to three
	 * arguments: *(value, key, obj)*. If only the value is significant, use
	 * `map` instead.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig ((*, String, Object) -> *) -> Object -> Object
	 * @param {Function} fn
	 * @param {Object} obj
	 * @return {Object}
	 * @see R.map
	 * @example
	 *
	 *      var values = { x: 1, y: 2, z: 3 };
	 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	 *
	 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	 */
	module.exports = _curry2(function mapObjIndexed(fn, obj) {
	  return _reduce(function (acc, key) {
	    acc[key] = fn(obj[key], key, obj);
	    return acc;
	  }, {}, keys(obj));
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Tests a regular expression against a String. Note that this function will
	 * return an empty array when there are no matches. This differs from
	 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	 * which returns `null` when there are no matches.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category String
	 * @sig RegExp -> String -> [String | Undefined]
	 * @param {RegExp} rx A regular expression.
	 * @param {String} str The string to match against
	 * @return {Array} The list of matches or empty array.
	 * @see R.test
	 * @example
	 *
	 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	 *      R.match(/a/, 'b'); //=> []
	 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	 */
	module.exports = _curry2(function match(rx, str) {
	  return str.match(rx) || [];
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isInteger = __webpack_require__(63);
	
	/**
	 * mathMod behaves like the modulo operator should mathematically, unlike the
	 * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
	 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
	 * when the modulus is zero or negative.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} m The dividend.
	 * @param {Number} p the modulus.
	 * @return {Number} The result of `b mod a`.
	 * @example
	 *
	 *      R.mathMod(-17, 5);  //=> 3
	 *      R.mathMod(17, 5);   //=> 2
	 *      R.mathMod(17, -5);  //=> NaN
	 *      R.mathMod(17, 0);   //=> NaN
	 *      R.mathMod(17.2, 5); //=> NaN
	 *      R.mathMod(17, 5.3); //=> NaN
	 *
	 *      var clock = R.mathMod(R.__, 12);
	 *      clock(15); //=> 3
	 *      clock(24); //=> 0
	 *
	 *      var seventeenMod = R.mathMod(17);
	 *      seventeenMod(3);  //=> 2
	 *      seventeenMod(4);  //=> 1
	 *      seventeenMod(10); //=> 7
	 */
	module.exports = _curry2(function mathMod(m, p) {
	  if (!_isInteger(m)) {
	    return NaN;
	  }
	  if (!_isInteger(p) || p < 1) {
	    return NaN;
	  }
	  return (m % p + p) % p;
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Takes a function and two values, and returns whichever value produces the
	 * larger result when passed to the provided function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> a -> a -> a
	 * @param {Function} f
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.max, R.minBy
	 * @example
	 *
	 *      //  square :: Number -> Number
	 *      var square = n => n * n;
	 *
	 *      R.maxBy(square, -3, 2); //=> -3
	 *
	 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
	 *      R.reduce(R.maxBy(square), 0, []); //=> 0
	 */
	module.exports = _curry3(function maxBy(f, a, b) {
	  return f(b) > f(a) ? b : a;
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var sum = __webpack_require__(222);
	
	/**
	 * Returns the mean of the given list of numbers.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list
	 * @return {Number}
	 * @example
	 *
	 *      R.mean([2, 7, 9]); //=> 6
	 *      R.mean([]); //=> NaN
	 */
	module.exports = _curry1(function mean(list) {
	  return sum(list) / list.length;
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var add = __webpack_require__(16);
	var reduce = __webpack_require__(47);
	
	/**
	 * Adds together all the elements of a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list An array of numbers
	 * @return {Number} The sum of all the numbers in the list.
	 * @see R.reduce
	 * @example
	 *
	 *      R.sum([2,4,6,8,100,1]); //=> 121
	 */
	module.exports = reduce(add, 0);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var mean = __webpack_require__(221);
	
	/**
	 * Returns the median of the given list of numbers.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list
	 * @return {Number}
	 * @example
	 *
	 *      R.median([2, 9, 7]); //=> 7
	 *      R.median([7, 2, 10, 9]); //=> 8
	 *      R.median([]); //=> NaN
	 */
	module.exports = _curry1(function median(list) {
	  var len = list.length;
	  if (len === 0) {
	    return NaN;
	  }
	  var width = 2 - len % 2;
	  var idx = (len - width) / 2;
	  return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	  }).slice(idx, idx + width));
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry1 = __webpack_require__(12);
	var _has = __webpack_require__(44);
	var toString = __webpack_require__(97);
	
	/**
	 * Creates a new function that, when invoked, caches the result of calling `fn`
	 * for a given argument set and returns the result. Subsequent calls to the
	 * memoized `fn` with the same argument set will not result in an additional
	 * call to `fn`; instead, the cached result for that set of arguments will be
	 * returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (*... -> a) -> (*... -> a)
	 * @param {Function} fn The function to memoize.
	 * @return {Function} Memoized version of `fn`.
	 * @example
	 *
	 *      var count = 0;
	 *      var factorial = R.memoize(n => {
	 *        count += 1;
	 *        return R.product(R.range(1, n + 1));
	 *      });
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      count; //=> 1
	 */
	module.exports = _curry1(function memoize(fn) {
	  var cache = {};
	  return _arity(fn.length, function () {
	    var key = toString(arguments);
	    if (!_has(key, cache)) {
	      cache[key] = fn.apply(this, arguments);
	    }
	    return cache[key];
	  });
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assign = __webpack_require__(192);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Create a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects,
	 * the value from the second object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> {k: v} -> {k: v}
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeWith, R.mergeWithKey
	 * @example
	 *
	 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	 *      //=> { 'name': 'fred', 'age': 40 }
	 *
	 *      var resetToDefault = R.merge(R.__, {x: 0});
	 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
	 */
	module.exports = _curry2(function merge(l, r) {
	  return _assign({}, l, r);
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assign = __webpack_require__(192);
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Merges a list of objects together into one object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig [{k: v}] -> {k: v}
	 * @param {Array} list An array of objects
	 * @return {Object} A merged object.
	 * @see R.reduce
	 * @example
	 *
	 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
	 */
	module.exports = _curry1(function mergeAll(list) {
	  return _assign.apply(null, [{}].concat(list));
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var mergeWithKey = __webpack_require__(228);
	
	/**
	 * Creates a new object with the own properties of the two provided objects. If
	 * a key exists in both objects, the provided function is applied to the values
	 * associated with the key in each object, with the result being used as the
	 * value associated with the key in the returned object. The key will be
	 * excluded from the returned object if the resulting value is `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.merge, R.mergeWithKey
	 * @example
	 *
	 *      R.mergeWith(R.concat,
	 *                  { a: true, values: [10, 20] },
	 *                  { b: true, values: [15, 35] });
	 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
	 */
	module.exports = _curry3(function mergeWith(fn, l, r) {
	  return mergeWithKey(function (_, _l, _r) {
	    return fn(_l, _r);
	  }, l, r);
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var _has = __webpack_require__(44);
	
	/**
	 * Creates a new object with the own properties of the two provided objects. If
	 * a key exists in both objects, the provided function is applied to the key
	 * and the values associated with the key in each object, with the result being
	 * used as the value associated with the key in the returned object. The key
	 * will be excluded from the returned object if the resulting value is
	 * `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.merge, R.mergeWith
	 * @example
	 *
	 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	 *      R.mergeWithKey(concatValues,
	 *                     { a: true, thing: 'foo', values: [10, 20] },
	 *                     { b: true, thing: 'bar', values: [15, 35] });
	 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
	 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
	 */
	module.exports = _curry3(function mergeWithKey(fn, l, r) {
	  var result = {};
	  var k;
	
	  for (k in l) {
	    if (_has(k, l)) {
	      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
	    }
	  }
	
	  for (k in r) {
	    if (_has(k, r) && !_has(k, result)) {
	      result[k] = r[k];
	    }
	  }
	
	  return result;
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns the smaller of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.minBy, R.max
	 * @example
	 *
	 *      R.min(789, 123); //=> 123
	 *      R.min('a', 'b'); //=> 'a'
	 */
	module.exports = _curry2(function min(a, b) {
	  return b < a ? b : a;
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Takes a function and two values, and returns whichever value produces the
	 * smaller result when passed to the provided function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> a -> a -> a
	 * @param {Function} f
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.min, R.maxBy
	 * @example
	 *
	 *      //  square :: Number -> Number
	 *      var square = n => n * n;
	 *
	 *      R.minBy(square, -3, 2); //=> 2
	 *
	 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
	 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
	 */
	module.exports = _curry3(function minBy(f, a, b) {
	  return f(b) < f(a) ? b : a;
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Divides the first parameter by the second and returns the remainder. Note
	 * that this function preserves the JavaScript-style behavior for modulo. For
	 * mathematical modulo see `mathMod`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The value to the divide.
	 * @param {Number} b The pseudo-modulus
	 * @return {Number} The result of `b % a`.
	 * @see R.mathMod
	 * @example
	 *
	 *      R.modulo(17, 3); //=> 2
	 *      // JS behavior:
	 *      R.modulo(-17, 3); //=> -2
	 *      R.modulo(17, -3); //=> 2
	 *
	 *      var isOdd = R.modulo(R.__, 2);
	 *      isOdd(42); //=> 0
	 *      isOdd(21); //=> 1
	 */
	module.exports = _curry2(function modulo(a, b) {
	  return a % b;
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Multiplies two numbers. Equivalent to `a * b` but curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a * b`.
	 * @see R.divide
	 * @example
	 *
	 *      var double = R.multiply(2);
	 *      var triple = R.multiply(3);
	 *      double(3);       //=>  6
	 *      triple(4);       //=> 12
	 *      R.multiply(2, 5);  //=> 10
	 */
	module.exports = _curry2(function multiply(a, b) {
	  return a * b;
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Negates its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number}
	 * @example
	 *
	 *      R.negate(42); //=> -42
	 */
	module.exports = _curry1(function negate(n) {
	  return -n;
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _complement = __webpack_require__(109);
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xany = __webpack_require__(50);
	var any = __webpack_require__(49);
	
	/**
	 * Returns `true` if no elements of the list match the predicate, `false`
	 * otherwise.
	 *
	 * Dispatches to the `any` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	 * @see R.all, R.any
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *
	 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
	 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
	 */
	module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var curryN = __webpack_require__(20);
	var nth = __webpack_require__(145);
	
	/**
	 * Returns a function which returns its nth argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig Number -> *... -> *
	 * @param {Number} n
	 * @return {Function}
	 * @example
	 *
	 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	 * @symb R.nthArg(-1)(a, b, c) = c
	 * @symb R.nthArg(0)(a, b, c) = a
	 * @symb R.nthArg(1)(a, b, c) = b
	 */
	module.exports = _curry1(function nthArg(n) {
	  var arity = n < 0 ? 1 : n + 1;
	  return curryN(arity, function () {
	    return nth(n, arguments);
	  });
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _of = __webpack_require__(237);
	
	/**
	 * Returns a singleton array containing the value provided.
	 *
	 * Note this `of` is different from the ES6 `of`; See
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig a -> [a]
	 * @param {*} x any value
	 * @return {Array} An array wrapping `x`.
	 * @example
	 *
	 *      R.of(null); //=> [null]
	 *      R.of([42]); //=> [[42]]
	 */
	module.exports = _curry1(_of);

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function _of(x) {
	  return [x];
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _contains = __webpack_require__(99);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a partial copy of an object omitting the keys specified.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [String] -> {String: *} -> {String: *}
	 * @param {Array} names an array of String property names to omit from the new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with properties from `names` not on it.
	 * @see R.pick
	 * @example
	 *
	 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	 */
	module.exports = _curry2(function omit(names, obj) {
	  var result = {};
	  for (var prop in obj) {
	    if (!_contains(prop, names)) {
	      result[prop] = obj[prop];
	    }
	  }
	  return result;
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Accepts a function `fn` and returns a function that guards invocation of
	 * `fn` such that `fn` can only ever be called once, no matter how many times
	 * the returned function is invoked. The first value calculated is returned in
	 * subsequent invocations.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a... -> b) -> (a... -> b)
	 * @param {Function} fn The function to wrap in a call-only-once wrapper.
	 * @return {Function} The wrapped function.
	 * @example
	 *
	 *      var addOneOnce = R.once(x => x + 1);
	 *      addOneOnce(10); //=> 11
	 *      addOneOnce(addOneOnce(50)); //=> 11
	 */
	module.exports = _curry1(function once(fn) {
	  var called = false;
	  var result;
	  return _arity(fn.length, function () {
	    if (called) {
	      return result;
	    }
	    called = true;
	    result = fn.apply(this, arguments);
	    return result;
	  });
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the result of applying the given function to
	 * the focused value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> (a -> a) -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var headLens = R.lensIndex(0);
	 *
	 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	 */
	module.exports = function () {
	  // `Identity` is a functor that holds a single value, where `map` simply
	  // transforms the held value with the provided function.
	  var Identity = function Identity(x) {
	    return { value: x, map: function map(f) {
	        return Identity(f(x));
	      } };
	  };
	
	  return _curry3(function over(lens, f, x) {
	    // The value returned by the getter function is first transformed with `f`,
	    // then set as the value of an `Identity`. This is then mapped over with the
	    // setter function of the lens.
	    return lens(function (y) {
	      return Identity(f(y));
	    })(x).value;
	  });
	}();

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category List
	 * @sig a -> b -> (a,b)
	 * @param {*} fst
	 * @param {*} snd
	 * @return {Array}
	 * @see R.objOf, R.of
	 * @example
	 *
	 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
	 */
	module.exports = _curry2(function pair(fst, snd) {
	  return [fst, snd];
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _createPartialApplicator = __webpack_require__(243);
	
	/**
	 * Takes a function `f` and a list of arguments, and returns a function `g`.
	 * When applied, `g` returns the result of applying `f` to the arguments
	 * provided initially followed by the arguments provided to `g`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
	 * @param {Function} f
	 * @param {Array} args
	 * @return {Function}
	 * @see R.partialRight
	 * @example
	 *
	 *      var multiply2 = (a, b) => a * b;
	 *      var double = R.partial(multiply2, [2]);
	 *      double(2); //=> 4
	 *
	 *      var greet = (salutation, title, firstName, lastName) =>
	 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	 *
	 *      var sayHello = R.partial(greet, ['Hello']);
	 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
	 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
	 */
	module.exports = _createPartialApplicator(_concat);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _curry2 = __webpack_require__(17);
	
	module.exports = function _createPartialApplicator(concat) {
	  return _curry2(function (fn, args) {
	    return _arity(Math.max(0, fn.length - args.length), function () {
	      return fn.apply(this, concat(args, arguments));
	    });
	  });
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _createPartialApplicator = __webpack_require__(243);
	var flip = __webpack_require__(163);
	
	/**
	 * Takes a function `f` and a list of arguments, and returns a function `g`.
	 * When applied, `g` returns the result of applying `f` to the arguments
	 * provided to `g` followed by the arguments provided initially.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
	 * @param {Function} f
	 * @param {Array} args
	 * @return {Function}
	 * @see R.partial
	 * @example
	 *
	 *      var greet = (salutation, title, firstName, lastName) =>
	 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	 *
	 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
	 *
	 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
	 */
	module.exports = _createPartialApplicator(flip(_concat));

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var filter = __webpack_require__(110);
	var juxt = __webpack_require__(202);
	var reject = __webpack_require__(108);
	
	/**
	 * Takes a predicate and a list or other "filterable" object and returns the
	 * pair of filterable objects of the same type of elements which do and do not
	 * satisfy, the predicate, respectively.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
	 * @param {Function} pred A predicate to determine which side the element belongs to.
	 * @param {Array} filterable the list (or other filterable) to partition.
	 * @return {Array} An array, containing first the subset of elements that satisfy the
	 *         predicate, and second the subset of elements that do not satisfy.
	 * @see R.filter, R.reject
	 * @example
	 *
	 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	 *
	 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
	 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
	 */
	module.exports = juxt([filter, reject]);

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var equals = __webpack_require__(101);
	var path = __webpack_require__(211);
	
	/**
	 * Determines whether a nested path on an object has a specific value, in
	 * `R.equals` terms. Most likely used to filter a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Relation
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> a -> {a} -> Boolean
	 * @param {Array} path The path of the nested property to use
	 * @param {*} val The value to compare the nested property with
	 * @param {Object} obj The object to check the nested property in
	 * @return {Boolean} `true` if the value equals the nested object property,
	 *         `false` otherwise.
	 * @example
	 *
	 *      var user1 = { address: { zipCode: 90210 } };
	 *      var user2 = { address: { zipCode: 55555 } };
	 *      var user3 = { name: 'Bob' };
	 *      var users = [ user1, user2, user3 ];
	 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	 *      R.filter(isFamous, users); //=> [ user1 ]
	 */
	module.exports = _curry3(function pathEq(_path, val, obj) {
	  return equals(path(_path, obj), val);
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var defaultTo = __webpack_require__(124);
	var path = __webpack_require__(211);
	
	/**
	 * If the given, non-null object has a value at the given path, returns the
	 * value at that path. Otherwise returns the provided default value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig a -> [Idx] -> {a} -> a
	 * @param {*} d The default value.
	 * @param {Array} p The path to use.
	 * @param {Object} obj The object to retrieve the nested property from.
	 * @return {*} The data at `path` of the supplied object or the default value.
	 * @example
	 *
	 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
	 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
	 */
	module.exports = _curry3(function pathOr(d, p, obj) {
	  return defaultTo(d, path(p, obj));
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var path = __webpack_require__(211);
	
	/**
	 * Returns `true` if the specified object property at given path satisfies the
	 * given predicate; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Logic
	 * @typedefn Idx = String | Int
	 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
	 * @param {Function} pred
	 * @param {Array} propPath
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.propSatisfies, R.path
	 * @example
	 *
	 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
	 */
	module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
	  return propPath.length > 0 && pred(path(propPath, obj));
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a partial copy of an object containing only the keys specified. If
	 * the key does not exist, the property is ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> {k: v}
	 * @param {Array} names an array of String property names to copy onto a new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties from `names` on it.
	 * @see R.omit, R.props
	 * @example
	 *
	 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	 */
	module.exports = _curry2(function pick(names, obj) {
	  var result = {};
	  var idx = 0;
	  while (idx < names.length) {
	    if (names[idx] in obj) {
	      result[names[idx]] = obj[names[idx]];
	    }
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Similar to `pick` except that this one includes a `key: undefined` pair for
	 * properties that don't exist.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> {k: v}
	 * @param {Array} names an array of String property names to copy onto a new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties from `names` on it.
	 * @see R.pick
	 * @example
	 *
	 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	 */
	module.exports = _curry2(function pickAll(names, obj) {
	  var result = {};
	  var idx = 0;
	  var len = names.length;
	  while (idx < len) {
	    var name = names[idx];
	    result[name] = obj[name];
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a partial copy of an object containing only the keys that satisfy
	 * the supplied predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
	 * @param {Function} pred A predicate to determine whether or not a key
	 *        should be included on the output object.
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties that satisfy `pred`
	 *         on it.
	 * @see R.pick, R.filter
	 * @example
	 *
	 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
	 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	 */
	module.exports = _curry2(function pickBy(test, obj) {
	  var result = {};
	  for (var prop in obj) {
	    if (test(obj[prop], prop, obj)) {
	      result[prop] = obj[prop];
	    }
	  }
	  return result;
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var composeK = __webpack_require__(92);
	var reverse = __webpack_require__(91);
	
	/**
	 * Returns the left-to-right Kleisli composition of the provided functions,
	 * each of which must return a value of a type supported by [`chain`](#chain).
	 *
	 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Function
	 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
	 * @param {...Function}
	 * @return {Function}
	 * @see R.composeK
	 * @example
	 *
	 *      //  parseJson :: String -> Maybe *
	 *      //  get :: String -> Object -> Maybe *
	 *
	 *      //  getStateCode :: Maybe String -> Maybe String
	 *      var getStateCode = R.pipeK(
	 *        parseJson,
	 *        get('user'),
	 *        get('address'),
	 *        get('state'),
	 *        R.compose(Maybe.of, R.toUpper)
	 *      );
	 *
	 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
	 *      //=> Just('NY')
	 *      getStateCode('[Invalid JSON]');
	 *      //=> Nothing()
	 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
	 */
	module.exports = function pipeK() {
	  if (arguments.length === 0) {
	    throw new Error('pipeK requires at least one argument');
	  }
	  return composeK.apply(this, reverse(arguments));
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new list with the given element at the front, followed by the
	 * contents of the list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} el The item to add to the head of the output list.
	 * @param {Array} list The array to add to the tail of the output list.
	 * @return {Array} A new array.
	 * @see R.append
	 * @example
	 *
	 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	 */
	module.exports = _curry2(function prepend(el, list) {
	  return _concat([el], list);
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var multiply = __webpack_require__(232);
	var reduce = __webpack_require__(47);
	
	/**
	 * Multiplies together all the elements of a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list An array of numbers
	 * @return {Number} The product of all the numbers in the list.
	 * @see R.reduce
	 * @example
	 *
	 *      R.product([2,4,6,8,100,1]); //=> 38400
	 */
	module.exports = reduce(multiply, 1);

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _map = __webpack_require__(36);
	var identity = __webpack_require__(174);
	var pickAll = __webpack_require__(250);
	var useWith = __webpack_require__(256);
	
	/**
	 * Reasonable analog to SQL `select` statement.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @category Relation
	 * @sig [k] -> [{k: v}] -> [{k: v}]
	 * @param {Array} props The property names to project
	 * @param {Array} objs The objects to query
	 * @return {Array} An array of objects with just the `props` properties.
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	 *      var kids = [abby, fred];
	 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	 */
	module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var curryN = __webpack_require__(20);
	
	/**
	 * Accepts a function `fn` and a list of transformer functions and returns a
	 * new curried function. When the new function is invoked, it calls the
	 * function `fn` with parameters consisting of the result of calling each
	 * supplied handler on successive arguments to the new function.
	 *
	 * If more arguments are passed to the returned function than transformer
	 * functions, those arguments are passed directly to `fn` as additional
	 * parameters. If you expect additional arguments that don't need to be
	 * transformed, although you can ignore them, it's best to pass an identity
	 * function so that the new function reports the correct arity.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
	 * @param {Function} fn The function to wrap.
	 * @param {Array} transformers A list of transformer functions
	 * @return {Function} The wrapped function.
	 * @see R.converge
	 * @example
	 *
	 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
	 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
	 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
	 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
	 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
	 */
	module.exports = _curry2(function useWith(fn, transformers) {
	  return curryN(transformers.length, function () {
	    var args = [];
	    var idx = 0;
	    while (idx < transformers.length) {
	      args.push(transformers[idx].call(this, arguments[idx]));
	      idx += 1;
	    }
	    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
	  });
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var equals = __webpack_require__(101);
	
	/**
	 * Returns `true` if the specified object property is equal, in `R.equals`
	 * terms, to the given value; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig String -> a -> Object -> Boolean
	 * @param {String} name
	 * @param {*} val
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.equals, R.propSatisfies
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	 *      var kids = [abby, fred, rusty, alois];
	 *      var hasBrownHair = R.propEq('hair', 'brown');
	 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	 */
	module.exports = _curry3(function propEq(name, val, obj) {
	  return equals(val, obj[name]);
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var is = __webpack_require__(198);
	
	/**
	 * Returns `true` if the specified object property is of the given type;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Type
	 * @sig Type -> String -> Object -> Boolean
	 * @param {Function} type
	 * @param {String} name
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.is, R.propSatisfies
	 * @example
	 *
	 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	 *      R.propIs(Number, 'x', {});            //=> false
	 */
	module.exports = _curry3(function propIs(type, name, obj) {
	  return is(type, obj[name]);
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var _has = __webpack_require__(44);
	
	/**
	 * If the given, non-null object has an own property with the specified name,
	 * returns the value of that property. Otherwise returns the provided default
	 * value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Object
	 * @sig a -> String -> Object -> a
	 * @param {*} val The default value.
	 * @param {String} p The name of the property to return.
	 * @param {Object} obj The object to query.
	 * @return {*} The value of given property of the supplied object or the default value.
	 * @example
	 *
	 *      var alice = {
	 *        name: 'ALICE',
	 *        age: 101
	 *      };
	 *      var favorite = R.prop('favoriteLibrary');
	 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	 *
	 *      favorite(alice);  //=> undefined
	 *      favoriteWithDefault(alice);  //=> 'Ramda'
	 */
	module.exports = _curry3(function propOr(val, p, obj) {
	  return obj != null && _has(p, obj) ? obj[p] : val;
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Returns `true` if the specified object property satisfies the given
	 * predicate; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Logic
	 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	 * @param {Function} pred
	 * @param {String} name
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.propEq, R.propIs
	 * @example
	 *
	 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	 */
	module.exports = _curry3(function propSatisfies(pred, name, obj) {
	  return pred(obj[name]);
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> [v]
	 * @param {Array} ps The property names to fetch
	 * @param {Object} obj The object to query
	 * @return {Array} The corresponding values or partially applied function.
	 * @example
	 *
	 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	 *
	 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	 */
	module.exports = _curry2(function props(ps, obj) {
	  var len = ps.length;
	  var out = [];
	  var idx = 0;
	
	  while (idx < len) {
	    out[idx] = obj[ps[idx]];
	    idx += 1;
	  }
	
	  return out;
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _isNumber = __webpack_require__(206);
	
	/**
	 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> Number -> [Number]
	 * @param {Number} from The first number in the list.
	 * @param {Number} to One more than the last number in the list.
	 * @return {Array} The list of numbers in tthe set `[a, b)`.
	 * @example
	 *
	 *      R.range(1, 5);    //=> [1, 2, 3, 4]
	 *      R.range(50, 53);  //=> [50, 51, 52]
	 */
	module.exports = _curry2(function range(from, to) {
	  if (!(_isNumber(from) && _isNumber(to))) {
	    throw new TypeError('Both arguments to range must be numbers');
	  }
	  var result = [];
	  var n = from;
	  while (n < to) {
	    result.push(n);
	    n += 1;
	  }
	  return result;
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * Similar to `reduce`, except moves through the input list from the right to
	 * the left.
	 *
	 * The iterator function receives two values: *(value, acc)*, while the arguments'
	 * order of `reduce`'s iterator function is *(acc, value)*.
	 *
	 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a, b -> b) -> b -> [a] -> b
	 * @param {Function} fn The iterator function. Receives two values, the current element from the array
	 *        and the accumulator.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.addIndex
	 * @example
	 *
	 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
	 *          -               -2
	 *         / \              / \
	 *        1   -            1   3
	 *           / \              / \
	 *          2   -     ==>    2  -1
	 *             / \              / \
	 *            3   -            3   4
	 *               / \              / \
	 *              4   0            4   0
	 *
	 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
	 */
	module.exports = _curry3(function reduceRight(fn, acc, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    acc = fn(list[idx], acc);
	    idx -= 1;
	  }
	  return acc;
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curryN = __webpack_require__(22);
	var _reduce = __webpack_require__(37);
	var _reduced = __webpack_require__(30);
	
	/**
	 * Like `reduce`, `reduceWhile` returns a single item by iterating through
	 * the list, successively calling the iterator function. `reduceWhile` also
	 * takes a predicate that is evaluated before each step. If the predicate returns
	 * `false`, it "short-circuits" the iteration and returns the current value
	 * of the accumulator.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.22.0
	 * @category List
	 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} pred The predicate. It is passed the accumulator and the
	 *        current element.
	 * @param {Function} fn The iterator function. Receives two values, the
	 *        accumulator and the current element.
	 * @param {*} a The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.reduced
	 * @example
	 *
	 *      var isOdd = (acc, x) => x % 2 === 1;
	 *      var xs = [1, 3, 5, 60, 777, 800];
	 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
	 *
	 *      var ys = [2, 4, 6]
	 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
	 */
	module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
	  return _reduce(function (acc, x) {
	    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
	  }, a, list);
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _reduced = __webpack_require__(30);
	
	/**
	 * Returns a value wrapped to indicate that it is the final value of the reduce
	 * and transduce functions. The returned value should be considered a black
	 * box: the internal structure is not guaranteed to be stable.
	 *
	 * Note: this optimization is unavailable to functions not explicitly listed
	 * above. For instance, it is not currently supported by reduceRight.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category List
	 * @sig a -> *
	 * @param {*} x The final value of the reduce.
	 * @return {*} The wrapped value.
	 * @see R.reduce, R.transduce
	 * @example
	 *
	 *      R.reduce(
	 *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
	 *        0,
	 *        [1, 2, 3, 4, 5]) // 10
	 */
	
	module.exports = _curry1(_reduced);

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Removes the sub-list of `list` starting at index `start` and containing
	 * `count` elements. _Note that this is not destructive_: it returns a copy of
	 * the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.2
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @param {Number} start The position to start removing elements
	 * @param {Number} count The number of elements to remove
	 * @param {Array} list The list to remove from
	 * @return {Array} A new Array with `count` elements from `start` removed.
	 * @example
	 *
	 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	 */
	module.exports = _curry3(function remove(start, count, list) {
	  var result = Array.prototype.slice.call(list, 0);
	  result.splice(start, count);
	  return result;
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var always = __webpack_require__(11);
	var times = __webpack_require__(268);
	
	/**
	 * Returns a fixed list of size `n` containing a specified identical value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig a -> n -> [a]
	 * @param {*} value The value to repeat.
	 * @param {Number} n The desired size of the output list.
	 * @return {Array} A new array containing `n` `value`s.
	 * @example
	 *
	 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	 *
	 *      var obj = {};
	 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	 * @symb R.repeat(a, 0) = []
	 * @symb R.repeat(a, 1) = [a]
	 * @symb R.repeat(a, 2) = [a, a]
	 */
	module.exports = _curry2(function repeat(value, n) {
	  return times(always(value), n);
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Calls an input function `n` times, returning an array containing the results
	 * of those function calls.
	 *
	 * `fn` is passed one argument: The current value of `n`, which begins at `0`
	 * and is gradually incremented to `n - 1`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.3
	 * @category List
	 * @sig (Number -> a) -> Number -> [a]
	 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	 * @return {Array} An array containing the return values of all calls to `fn`.
	 * @example
	 *
	 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	 * @symb R.times(f, 0) = []
	 * @symb R.times(f, 1) = [f(0)]
	 * @symb R.times(f, 2) = [f(0), f(1)]
	 */
	module.exports = _curry2(function times(fn, n) {
	  var len = Number(n);
	  var idx = 0;
	  var list;
	
	  if (len < 0 || isNaN(len)) {
	    throw new RangeError('n must be a non-negative number');
	  }
	  list = new Array(len);
	  while (idx < len) {
	    list[idx] = fn(idx);
	    idx += 1;
	  }
	  return list;
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Replace a substring or regex match in a string with a replacement.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category String
	 * @sig RegExp|String -> String -> String -> String
	 * @param {RegExp|String} pattern A regular expression or a substring to match.
	 * @param {String} replacement The string to replace the matches with.
	 * @param {String} str The String to do the search and replacement in.
	 * @return {String} The result.
	 * @example
	 *
	 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *
	 *      // Use the "g" (global) flag to replace all occurrences:
	 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	 */
	module.exports = _curry3(function replace(regex, replacement, str) {
	  return str.replace(regex, replacement);
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Scan is similar to reduce, but returns a list of successively reduced values
	 * from the left
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig (a,b -> a) -> a -> [b] -> [a]
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {Array} A list of all intermediately reduced values.
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
	 */
	module.exports = _curry3(function scan(fn, acc, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [acc];
	  while (idx < len) {
	    acc = fn(acc, list[idx]);
	    result[idx + 1] = acc;
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var ap = __webpack_require__(52);
	var map = __webpack_require__(35);
	var prepend = __webpack_require__(253);
	var reduceRight = __webpack_require__(263);
	
	/**
	 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
	 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
	 * Applicative of Traversable.
	 *
	 * Dispatches to the `sequence` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
	 * @param {Function} of
	 * @param {*} traversable
	 * @return {*}
	 * @see R.traverse
	 * @example
	 *
	 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	 *
	 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
	 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
	 */
	module.exports = _curry2(function sequence(of, traversable) {
	  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
	    return ap(map(prepend, x), acc);
	  }, of([]), traversable);
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var always = __webpack_require__(11);
	var over = __webpack_require__(240);
	
	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the given value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> a -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	 */
	module.exports = _curry3(function set(lens, v, x) {
	  return over(lens, always(v), x);
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a copy of the list, sorted according to the comparator function,
	 * which should accept two values at a time and return a negative number if the
	 * first value is smaller, a positive number if it's larger, and zero if they
	 * are equal. Please note that this is a **copy** of the list. It does not
	 * modify the original.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a,a -> Number) -> [a] -> [a]
	 * @param {Function} comparator A sorting function :: a -> b -> Int
	 * @param {Array} list The list to sort
	 * @return {Array} a new array with its elements sorted by the comparator function.
	 * @example
	 *
	 *      var diff = function(a, b) { return a - b; };
	 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	 */
	module.exports = _curry2(function sort(comparator, list) {
	  return Array.prototype.slice.call(list, 0).sort(comparator);
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Sorts the list according to the supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> [a] -> [a]
	 * @param {Function} fn
	 * @param {Array} list The list to sort.
	 * @return {Array} A new list sorted by the keys generated by `fn`.
	 * @example
	 *
	 *      var sortByFirstItem = R.sortBy(R.prop(0));
	 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	 *      var alice = {
	 *        name: 'ALICE',
	 *        age: 101
	 *      };
	 *      var bob = {
	 *        name: 'Bob',
	 *        age: -10
	 *      };
	 *      var clara = {
	 *        name: 'clara',
	 *        age: 314.159
	 *      };
	 *      var people = [clara, bob, alice];
	 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	 */
	module.exports = _curry2(function sortBy(fn, list) {
	  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    var aa = fn(a);
	    var bb = fn(b);
	    return aa < bb ? -1 : aa > bb ? 1 : 0;
	  });
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Sorts a list according to a list of comparators.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Relation
	 * @sig [a -> a -> Number] -> [a] -> [a]
	 * @param {Array} functions A list of comparator functions.
	 * @param {Array} list The list to sort.
	 * @return {Array} A new list sorted according to the comarator functions.
	 * @example
	 *
	 *      var alice = {
	 *        name: 'alice',
	 *        age: 40
	 *      };
	 *      var bob = {
	 *        name: 'bob',
	 *        age: 30
	 *      };
	 *      var clara = {
	 *        name: 'clara',
	 *        age: 40
	 *      };
	 *      var people = [clara, bob, alice];
	 *      var ageNameSort = R.sortWith([
	 *        R.descend(R.prop('age')),
	 *        R.ascend(R.prop('name'))
	 *      ]);
	 *      ageNameSort(people); //=> [alice, clara, bob]
	 */
	module.exports = _curry2(function sortWith(fns, list) {
	  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    var result = 0;
	    var i = 0;
	    while (result === 0 && i < fns.length) {
	      result = fns[i](a, b);
	      i += 1;
	    }
	    return result;
	  });
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var invoker = __webpack_require__(197);
	
	/**
	 * Splits a string into an array of strings based on the given
	 * separator.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category String
	 * @sig (String | RegExp) -> String -> [String]
	 * @param {String|RegExp} sep The pattern.
	 * @param {String} str The string to separate into an array.
	 * @return {Array} The array of strings from `str` separated by `str`.
	 * @see R.join
	 * @example
	 *
	 *      var pathComponents = R.split('/');
	 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	 *
	 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	 */
	module.exports = invoker(1, 'split');

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var length = __webpack_require__(205);
	var slice = __webpack_require__(90);
	
	/**
	 * Splits a given list or string at a given index.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig Number -> [a] -> [[a], [a]]
	 * @sig Number -> String -> [String, String]
	 * @param {Number} index The index where the array/string is split.
	 * @param {Array|String} array The array/string to be split.
	 * @return {Array}
	 * @example
	 *
	 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	 */
	module.exports = _curry2(function splitAt(index, array) {
	  return [slice(0, index, array), slice(index, length(array), array)];
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var slice = __webpack_require__(90);
	
	/**
	 * Splits a collection into slices of the specified length.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [[a]]
	 * @sig Number -> String -> [String]
	 * @param {Number} n
	 * @param {Array} list
	 * @return {Array}
	 * @example
	 *
	 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	 */
	module.exports = _curry2(function splitEvery(n, list) {
	  if (n <= 0) {
	    throw new Error('First argument to splitEvery must be a positive integer');
	  }
	  var result = [];
	  var idx = 0;
	  while (idx < list.length) {
	    result.push(slice(idx, idx += n, list));
	  }
	  return result;
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Takes a list and a predicate and returns a pair of lists with the following properties:
	 *
	 *  - the result of concatenating the two output lists is equivalent to the input list;
	 *  - none of the elements of the first output list satisfies the predicate; and
	 *  - if the second output list is non-empty, its first element satisfies the predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
	 * @param {Function} pred The predicate that determines where the array is split.
	 * @param {Array} list The array to be split.
	 * @return {Array}
	 * @example
	 *
	 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	 */
	module.exports = _curry2(function splitWhen(pred, list) {
	  var idx = 0;
	  var len = list.length;
	  var prefix = [];
	
	  while (idx < len && !pred(list[idx])) {
	    prefix.push(list[idx]);
	    idx += 1;
	  }
	
	  return [prefix, Array.prototype.slice.call(list, idx)];
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Subtracts its second argument from its first argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a - b`.
	 * @see R.add
	 * @example
	 *
	 *      R.subtract(10, 8); //=> 2
	 *
	 *      var minus5 = R.subtract(R.__, 5);
	 *      minus5(17); //=> 12
	 *
	 *      var complementaryAngle = R.subtract(90);
	 *      complementaryAngle(30); //=> 60
	 *      complementaryAngle(72); //=> 18
	 */
	module.exports = _curry2(function subtract(a, b) {
	  return Number(a) - Number(b);
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var concat = __webpack_require__(96);
	var difference = __webpack_require__(125);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements contained in the first or
	 * second list, but not both.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` or `list2`, but not both.
	 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
	 * @example
	 *
	 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
	 */
	module.exports = _curry2(function symmetricDifference(list1, list2) {
	  return concat(difference(list1, list2), difference(list2, list1));
	});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var concat = __webpack_require__(96);
	var differenceWith = __webpack_require__(126);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements contained in the first or
	 * second list, but not both. Duplication is determined according to the value
	 * returned by applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` or `list2`, but not both.
	 * @see R.symmetricDifference, R.difference, R.differenceWith
	 * @example
	 *
	 *      var eqA = R.eqBy(R.prop('a'));
	 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	 */
	module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
	  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var drop = __webpack_require__(131);
	
	/**
	 * Returns a new list containing the last `n` elements of the given list.
	 * If `n > list.length`, returns a list of `list.length` elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n The number of elements to return.
	 * @param {Array} xs The collection to consider.
	 * @return {Array}
	 * @see R.dropLast
	 * @example
	 *
	 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.takeLast(3, 'ramda');               //=> 'mda'
	 */
	module.exports = _curry2(function takeLast(n, xs) {
	  return drop(n >= 0 ? xs.length - n : 0, xs);
	});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a new list containing the last `n` elements of a given list, passing
	 * each value to the supplied predicate function, and terminating when the
	 * predicate function returns `false`. Excludes the element that caused the
	 * predicate function to fail. The predicate function is passed one argument:
	 * *(value)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} list The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.dropLastWhile, R.addIndex
	 * @example
	 *
	 *      var isNotOne = x => x !== 1;
	 *
	 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	 */
	module.exports = _curry2(function takeLastWhile(fn, list) {
	  var idx = list.length - 1;
	  while (idx >= 0 && fn(list[idx])) {
	    idx -= 1;
	  }
	  return Array.prototype.slice.call(list, idx + 1);
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _dispatchable = __webpack_require__(26);
	var _xtakeWhile = __webpack_require__(286);
	
	/**
	 * Returns a new list containing the first `n` elements of a given list,
	 * passing each value to the supplied predicate function, and terminating when
	 * the predicate function returns `false`. Excludes the element that caused the
	 * predicate function to fail. The predicate function is passed one argument:
	 * *(value)*.
	 *
	 * Dispatches to the `takeWhile` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} list The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.dropWhile, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isNotFour = x => x !== 4;
	 *
	 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
	 */
	module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len && fn(list[idx])) {
	    idx += 1;
	  }
	  return Array.prototype.slice.call(list, 0, idx);
	}));

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _reduced = __webpack_require__(30);
	var _xfBase = __webpack_require__(31);
	
	module.exports = function () {
	  function XTakeWhile(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	  };
	
	  return _curry2(function _xtakeWhile(f, xf) {
	    return new XTakeWhile(f, xf);
	  });
	}();

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Runs the given function with the supplied object, then returns the object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a -> *) -> a -> a
	 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	 * @param {*} x
	 * @return {*} `x`.
	 * @example
	 *
	 *      var sayX = x => console.log('x is ' + x);
	 *      R.tap(sayX, 100); //=> 100
	 *      // logs 'x is 100'
	 * @symb R.tap(f, a) = a
	 */
	module.exports = _curry2(function tap(fn, x) {
	  fn(x);
	  return x;
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cloneRegExp = __webpack_require__(80);
	var _curry2 = __webpack_require__(17);
	var _isRegExp = __webpack_require__(289);
	var toString = __webpack_require__(97);
	
	/**
	 * Determines whether a given string matches a given regular expression.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category String
	 * @sig RegExp -> String -> Boolean
	 * @param {RegExp} pattern
	 * @param {String} str
	 * @return {Boolean}
	 * @see R.match
	 * @example
	 *
	 *      R.test(/^x/, 'xyz'); //=> true
	 *      R.test(/^y/, 'xyz'); //=> false
	 */
	module.exports = _curry2(function test(pattern, str) {
	  if (!_isRegExp(pattern)) {
	    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
	  }
	  return _cloneRegExp(pattern).test(str);
	});

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function _isRegExp(x) {
	  return Object.prototype.toString.call(x) === '[object RegExp]';
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var invoker = __webpack_require__(197);
	
	/**
	 * The lower case version of a string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to lower case.
	 * @return {String} The lower case version of `str`.
	 * @see R.toUpper
	 * @example
	 *
	 *      R.toLower('XYZ'); //=> 'xyz'
	 */
	module.exports = invoker(0, 'toLowerCase');

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var _has = __webpack_require__(44);
	
	/**
	 * Converts an object into an array of key, value arrays. Only the object's
	 * own properties are used.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own properties.
	 * @see R.fromPairs
	 * @example
	 *
	 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	 */
	module.exports = _curry1(function toPairs(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    if (_has(prop, obj)) {
	      pairs[pairs.length] = [prop, obj[prop]];
	    }
	  }
	  return pairs;
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Converts an object into an array of key, value arrays. The object's own
	 * properties and prototype properties are used. Note that the order of the
	 * output array is not guaranteed to be consistent across different JS
	 * platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own
	 *         and prototype properties.
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	 */
	module.exports = _curry1(function toPairsIn(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    pairs[pairs.length] = [prop, obj[prop]];
	  }
	  return pairs;
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var invoker = __webpack_require__(197);
	
	/**
	 * The upper case version of a string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to upper case.
	 * @return {String} The upper case version of `str`.
	 * @see R.toLower
	 * @example
	 *
	 *      R.toUpper('abc'); //=> 'ABC'
	 */
	module.exports = invoker(0, 'toUpperCase');

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reduce = __webpack_require__(37);
	var _xwrap = __webpack_require__(38);
	var curryN = __webpack_require__(20);
	
	/**
	 * Initializes a transducer using supplied iterator function. Returns a single
	 * item by iterating through the list, successively calling the transformed
	 * iterator function and passing it an accumulator value and the current value
	 * from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It will be
	 * wrapped as a transformer to initialize the transducer. A transformer can be
	 * passed directly in place of an iterator function. In both cases, iteration
	 * may be stopped early with the `R.reduced` function.
	 *
	 * A transducer is a function that accepts a transformer and returns a
	 * transformer and can be composed directly.
	 *
	 * A transformer is an an object that provides a 2-arity reducing iterator
	 * function, step, 0-arity initial value function, init, and 1-arity result
	 * extraction function, result. The step function is used as the iterator
	 * function in reduce. The result function is used to convert the final
	 * accumulator into the return type and in most cases is R.identity. The init
	 * function can be used to provide an initial accumulator, but is ignored by
	 * transduce.
	 *
	 * The iteration is performed with R.reduce after initializing the transducer.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
	 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array. Wrapped as transformer, if necessary, and used to
	 *        initialize the transducer
	 * @param {*} acc The initial accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.reduced, R.into
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	 *
	 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	 */
	module.exports = curryN(4, function transduce(xf, fn, acc, list) {
	  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Transposes the rows and columns of a 2D list.
	 * When passed a list of `n` lists of length `x`,
	 * returns a list of `x` lists of length `n`.
	 *
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig [[a]] -> [[a]]
	 * @param {Array} list A 2D list
	 * @return {Array} A 2D list
	 * @example
	 *
	 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
	 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	 *
	 * If some of the rows are shorter than the following rows, their elements are skipped:
	 *
	 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
	 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
	 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
	 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
	 */
	module.exports = _curry1(function transpose(outerlist) {
	  var i = 0;
	  var result = [];
	  while (i < outerlist.length) {
	    var innerlist = outerlist[i];
	    var j = 0;
	    while (j < innerlist.length) {
	      if (typeof result[j] === 'undefined') {
	        result[j] = [];
	      }
	      result[j].push(innerlist[j]);
	      j += 1;
	    }
	    i += 1;
	  }
	  return result;
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	var map = __webpack_require__(35);
	var sequence = __webpack_require__(271);
	
	/**
	 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
	 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
	 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
	 * into an Applicative of Traversable.
	 *
	 * Dispatches to the `sequence` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
	 * @param {Function} of
	 * @param {Function} f
	 * @param {*} traversable
	 * @return {*}
	 * @see R.sequence
	 * @example
	 *
	 *      // Returns `Nothing` if the given divisor is `0`
	 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
	 *
	 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
	 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
	 */
	module.exports = _curry3(function traverse(of, f, traversable) {
	  return sequence(of, map(f, traversable));
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Removes (strips) whitespace from both ends of the string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to trim.
	 * @return {String} Trimmed version of `str`.
	 * @example
	 *
	 *      R.trim('   xyz  '); //=> 'xyz'
	 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	 */
	module.exports = function () {
	  var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	  var zeroWidth = '\u200B';
	  var hasProtoTrim = typeof String.prototype.trim === 'function';
	  if (!hasProtoTrim || ws.trim() || !zeroWidth.trim()) {
	    return _curry1(function trim(str) {
	      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	      return str.replace(beginRx, '').replace(endRx, '');
	    });
	  } else {
	    return _curry1(function trim(str) {
	      return str.trim();
	    });
	  }
	}();

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arity = __webpack_require__(21);
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	
	/**
	 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
	 * function evaluates the `tryer`; if it does not throw, it simply returns the
	 * result. If the `tryer` *does* throw, the returned function evaluates the
	 * `catcher` function and returns its result. Note that for effective
	 * composition with this function, both the `tryer` and `catcher` functions
	 * must return the same type of results.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Function
	 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
	 * @param {Function} tryer The function that may throw.
	 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
	 * @return {Function} A new function that will catch exceptions and send then to the catcher.
	 * @example
	 *
	 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
	 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
	 */
	module.exports = _curry2(function _tryCatch(tryer, catcher) {
	  return _arity(tryer.length, function () {
	    try {
	      return tryer.apply(this, arguments);
	    } catch (e) {
	      return catcher.apply(this, _concat([e], arguments));
	    }
	  });
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Takes a function `fn`, which takes a single array argument, and returns a
	 * function which:
	 *
	 *   - takes any number of positional arguments;
	 *   - passes these arguments to `fn` as an array; and
	 *   - returns the result.
	 *
	 * In other words, R.unapply derives a variadic function from a function which
	 * takes an array. R.unapply is the inverse of R.apply.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Function
	 * @sig ([*...] -> a) -> (*... -> a)
	 * @param {Function} fn
	 * @return {Function}
	 * @see R.apply
	 * @example
	 *
	 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	 * @symb R.unapply(f)(a, b) = f([a, b])
	 */
	module.exports = _curry1(function unapply(fn) {
	  return function () {
	    return fn(Array.prototype.slice.call(arguments, 0));
	  };
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	var nAry = __webpack_require__(65);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly 1 parameter. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Function
	 * @sig (* -> b) -> (a -> b)
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity 1.
	 * @example
	 *
	 *      var takesTwoArgs = function(a, b) {
	 *        return [a, b];
	 *      };
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.unary(takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // Only 1 argument is passed to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, undefined]
	 * @symb R.unary(f)(a, b, c) = f(a)
	 */
	module.exports = _curry1(function unary(fn) {
	  return nAry(1, fn);
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var curryN = __webpack_require__(20);
	
	/**
	 * Returns a function of arity `n` from a (manually) curried function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Function
	 * @sig Number -> (a -> b) -> (a -> c)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to uncurry.
	 * @return {Function} A new function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFour = a => b => c => d => a + b + c + d;
	 *
	 *      var uncurriedAddFour = R.uncurryN(4, addFour);
	 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
	 */
	module.exports = _curry2(function uncurryN(depth, fn) {
	  return curryN(depth, function () {
	    var currentDepth = 1;
	    var value = fn;
	    var idx = 0;
	    var endIdx;
	    while (currentDepth <= depth && typeof value === 'function') {
	      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
	      currentDepth += 1;
	      idx = endIdx;
	    }
	    return value;
	  });
	});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Builds a list from a seed value. Accepts an iterator function, which returns
	 * either false to stop iteration or an array of length 2 containing the value
	 * to add to the resulting list and the seed to be used in the next call to the
	 * iterator function.
	 *
	 * The iterator function receives one argument: *(seed)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig (a -> [b]) -> * -> [b]
	 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	 *        either false to quit iteration or an array of length two to proceed. The element
	 *        at index 0 of this array will be added to the resulting array, and the element
	 *        at index 1 will be passed to the next call to `fn`.
	 * @param {*} seed The seed value.
	 * @return {Array} The final list.
	 * @example
	 *
	 *      var f = n => n > 50 ? false : [-n, n + 10];
	 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
	 */
	module.exports = _curry2(function unfold(fn, seed) {
	  var pair = fn(seed);
	  var result = [];
	  while (pair && pair.length) {
	    result[result.length] = pair[0];
	    pair = fn(pair[1]);
	  }
	  return result;
	});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry2 = __webpack_require__(17);
	var compose = __webpack_require__(85);
	var uniq = __webpack_require__(184);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of the elements
	 * of each list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} as The first list.
	 * @param {Array} bs The second list.
	 * @return {Array} The first and second lists concatenated, with
	 *         duplicates removed.
	 * @example
	 *
	 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	 */
	module.exports = _curry2(compose(uniq, _concat));

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _concat = __webpack_require__(19);
	var _curry3 = __webpack_require__(24);
	var uniqWith = __webpack_require__(188);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of the elements
	 * of each list. Duplication is determined according to the value returned by
	 * applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The first and second lists concatenated, with
	 *         duplicates removed.
	 * @see R.union
	 * @example
	 *
	 *      var l1 = [{a: 1}, {a: 2}];
	 *      var l2 = [{a: 1}, {a: 4}];
	 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	 */
	module.exports = _curry3(function unionWith(pred, list1, list2) {
	  return uniqWith(pred, _concat(list1, list2));
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is not satisfied, the function will return the result of
	 * calling the `whenFalseFn` function with the same argument. If the predicate
	 * is satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred        A predicate function
	 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
	 *                               to a falsy value.
	 * @param {*}        x           An object to test with the `pred` function and
	 *                               pass to `whenFalseFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
	 * @see R.ifElse, R.when
	 * @example
	 *
	 *      // coerceArray :: (a|[a]) -> [a]
	 *      var coerceArray = R.unless(R.isArrayLike, R.of);
	 *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
	 *      coerceArray(1);         //=> [1]
	 */
	module.exports = _curry3(function unless(pred, whenFalseFn, x) {
	  return pred(x) ? x : whenFalseFn(x);
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _identity = __webpack_require__(175);
	var chain = __webpack_require__(72);
	
	/**
	 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
	 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig Chain c => c (c a) -> c a
	 * @param {*} list
	 * @return {*}
	 * @see R.flatten, R.chain
	 * @example
	 *
	 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	 */
	module.exports = chain(_identity);

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Takes a predicate, a transformation function, and an initial value,
	 * and returns a value of the same type as the initial value.
	 * It does so by applying the transformation until the predicate is satisfied,
	 * at which point it returns the satisfactory value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred A predicate function
	 * @param {Function} fn The iterator function
	 * @param {*} init Initial value
	 * @return {*} Final value that satisfies predicate
	 * @example
	 *
	 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
	 */
	module.exports = _curry3(function until(pred, fn, init) {
	  var val = init;
	  while (!pred(val)) {
	    val = fn(val);
	  }
	  return val;
	});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry1 = __webpack_require__(12);
	
	/**
	 * Returns a list of all the properties, including prototype properties, of the
	 * supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own and prototype properties.
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.valuesIn(f); //=> ['X', 'Y']
	 */
	module.exports = _curry1(function valuesIn(obj) {
	  var prop;
	  var vs = [];
	  for (prop in obj) {
	    vs[vs.length] = obj[prop];
	  }
	  return vs;
	});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Returns a "view" of the given data structure, determined by the given lens.
	 * The lens's focus determines which portion of the data structure is visible.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> s -> a
	 * @param {Lens} lens
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.view(xLens, {x: 1, y: 2});  //=> 1
	 *      R.view(xLens, {x: 4, y: 2});  //=> 4
	 */
	module.exports = function () {
	  // `Const` is a functor that effectively ignores the function given to `map`.
	  var Const = function Const(x) {
	    return { value: x, map: function map() {
	        return this;
	      } };
	  };
	
	  return _curry2(function view(lens, x) {
	    // Using `Const` effectively ignores the setter function of the `lens`,
	    // leaving the value returned by the getter function unmodified.
	    return lens(Const)(x).value;
	  });
	}();

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is satisfied, the function will return the result of calling
	 * the `whenTrueFn` function with the same argument. If the predicate is not
	 * satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred       A predicate function
	 * @param {Function} whenTrueFn A function to invoke when the `condition`
	 *                              evaluates to a truthy value.
	 * @param {*}        x          An object to test with the `pred` function and
	 *                              pass to `whenTrueFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	 * @see R.ifElse, R.unless
	 * @example
	 *
	 *      // truncate :: String -> String
	 *      var truncate = R.when(
	 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	 *        R.pipe(R.take(10), R.append('…'), R.join(''))
	 *      );
	 *      truncate('12345');         //=> '12345'
	 *      truncate('0123456789ABC'); //=> '0123456789…'
	 */
	module.exports = _curry3(function when(pred, whenTrueFn, x) {
	  return pred(x) ? whenTrueFn(x) : x;
	});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var _has = __webpack_require__(44);
	
	/**
	 * Takes a spec object and a test object; returns true if the test satisfies
	 * the spec. Each of the spec's own properties must be a predicate function.
	 * Each predicate is applied to the value of the corresponding property of the
	 * test object. `where` returns true if all the predicates return true, false
	 * otherwise.
	 *
	 * `where` is well suited to declaratively expressing constraints for other
	 * functions such as `filter` and `find`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category Object
	 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	 * @param {Object} spec
	 * @param {Object} testObj
	 * @return {Boolean}
	 * @example
	 *
	 *      // pred :: Object -> Boolean
	 *      var pred = R.where({
	 *        a: R.equals('foo'),
	 *        b: R.complement(R.equals('bar')),
	 *        x: R.gt(__, 10),
	 *        y: R.lt(__, 20)
	 *      });
	 *
	 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	 */
	module.exports = _curry2(function where(spec, testObj) {
	  for (var prop in spec) {
	    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	      return false;
	    }
	  }
	  return true;
	});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	var equals = __webpack_require__(101);
	var map = __webpack_require__(35);
	var where = __webpack_require__(311);
	
	/**
	 * Takes a spec object and a test object; returns true if the test satisfies
	 * the spec, false otherwise. An object satisfies the spec if, for each of the
	 * spec's own properties, accessing that property of the object gives the same
	 * value (in `R.equals` terms) as accessing that property of the spec.
	 *
	 * `whereEq` is a specialization of [`where`](#where).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @sig {String: *} -> {String: *} -> Boolean
	 * @param {Object} spec
	 * @param {Object} testObj
	 * @return {Boolean}
	 * @see R.where
	 * @example
	 *
	 *      // pred :: Object -> Boolean
	 *      var pred = R.whereEq({a: 1, b: 2});
	 *
	 *      pred({a: 1});              //=> false
	 *      pred({a: 1, b: 2});        //=> true
	 *      pred({a: 1, b: 2, c: 3});  //=> true
	 *      pred({a: 1, b: 1});        //=> false
	 */
	module.exports = _curry2(function whereEq(spec, testObj) {
	  return where(map(equals, spec), testObj);
	});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _contains = __webpack_require__(99);
	var _curry2 = __webpack_require__(17);
	var flip = __webpack_require__(163);
	var reject = __webpack_require__(108);
	
	/**
	 * Returns a new list without values in the first argument.
	 * `R.equals` is used to determine equality.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig [a] -> [a] -> [a]
	 * @param {Array} list1 The values to be removed from `list2`.
	 * @param {Array} list2 The array to remove values from.
	 * @return {Array} The new array without values in `list1`.
	 * @see R.transduce
	 * @example
	 *
	 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
	 */
	module.exports = _curry2(function (xs, list) {
	  return reject(flip(_contains)(xs), list);
	});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a new list out of the two supplied by creating each possible pair
	 * from the lists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b] -> [[a,b]]
	 * @param {Array} as The first list.
	 * @param {Array} bs The second list.
	 * @return {Array} The list made by combining each possible pair from
	 *         `as` and `bs` into pairs (`[a, b]`).
	 * @example
	 *
	 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
	 */
	module.exports = _curry2(function xprod(a, b) {
	  // = xprodWith(prepend); (takes about 3 times as long...)
	  var idx = 0;
	  var ilen = a.length;
	  var j;
	  var jlen = b.length;
	  var result = [];
	  while (idx < ilen) {
	    j = 0;
	    while (j < jlen) {
	      result[result.length] = [a[idx], b[j]];
	      j += 1;
	    }
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a new list out of the two supplied by pairing up equally-positioned
	 * items from both lists. The returned list is truncated to the length of the
	 * shorter of the two input lists.
	 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b] -> [[a,b]]
	 * @param {Array} list1 The first array to consider.
	 * @param {Array} list2 The second array to consider.
	 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	 * @example
	 *
	 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
	 */
	module.exports = _curry2(function zip(a, b) {
	  var rv = [];
	  var idx = 0;
	  var len = Math.min(a.length, b.length);
	  while (idx < len) {
	    rv[idx] = [a[idx], b[idx]];
	    idx += 1;
	  }
	  return rv;
	});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry2 = __webpack_require__(17);
	
	/**
	 * Creates a new object out of a list of keys and a list of values.
	 * Key/value pairing is truncated to the length of the shorter of the two lists.
	 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [String] -> [*] -> {String: *}
	 * @param {Array} keys The array that will be properties on the output object.
	 * @param {Array} values The list of values on the output object.
	 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	 * @example
	 *
	 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry2(function zipObj(keys, values) {
	  var idx = 0;
	  var len = Math.min(keys.length, values.length);
	  var out = {};
	  while (idx < len) {
	    out[keys[idx]] = values[idx];
	    idx += 1;
	  }
	  return out;
	});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _curry3 = __webpack_require__(24);
	
	/**
	 * Creates a new list out of the two supplied by applying the function to each
	 * equally-positioned pair in the lists. The returned list is truncated to the
	 * length of the shorter of the two input lists.
	 *
	 * @function
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a,b -> c) -> [a] -> [b] -> [c]
	 * @param {Function} fn The function used to combine the two elements into one value.
	 * @param {Array} list1 The first array to consider.
	 * @param {Array} list2 The second array to consider.
	 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	 *         using `fn`.
	 * @example
	 *
	 *      var f = (x, y) => {
	 *        // ...
	 *      };
	 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
	 */
	module.exports = _curry3(function zipWith(fn, a, b) {
	  var rv = [];
	  var idx = 0;
	  var len = Math.min(a.length, b.length);
	  while (idx < len) {
	    rv[idx] = fn(a[idx], b[idx]);
	    idx += 1;
	  }
	  return rv;
	});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(319);

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, process) {'use strict';
	
	/**
	 * A helper for delaying the execution of a function.
	 * @private
	 * @summary (Any... -> Any) -> Void
	 */
	
	var delayed = typeof setImmediate !== 'undefined' ? setImmediate : typeof process !== 'undefined' ? process.nextTick : /* otherwise */setTimeout;
	
	/**
	 * @module lib/task
	 */
	module.exports = Task;
	
	// -- Implementation ---------------------------------------------------
	
	/**
	 * The `Task[α, β]` structure represents values that depend on time. This
	 * allows one to model time-based effects explicitly, such that one can have
	 * full knowledge of when they're dealing with delayed computations, latency,
	 * or anything that can not be computed immediately.
	 *
	 * A common use for this structure is to replace the usual Continuation-Passing
	 * Style form of programming, in order to be able to compose and sequence
	 * time-dependent effects using the generic and powerful monadic operations.
	 *
	 * @class
	 * @summary
	 * ((α → Void), (β → Void) → Void), (Void → Void) → Task[α, β]
	 *
	 * Task[α, β] <: Chain[β]
	 *               , Monad[β]
	 *               , Functor[β]
	 *               , Applicative[β]
	 *               , Semigroup[β]
	 *               , Monoid[β]
	 *               , Show
	 */
	function Task(computation, cleanup) {
	  this.fork = computation;
	
	  this.cleanup = cleanup || function () {};
	}
	
	/**
	 * Constructs a new `Task[α, β]` containing the single value `β`.
	 *
	 * `β` can be any value, including `null`, `undefined`, or another
	 * `Task[α, β]` structure.
	 *
	 * @summary β → Task[α, β]
	 */
	Task.prototype.of = function _of(b) {
	  return new Task(function (_, resolve) {
	    return resolve(b);
	  });
	};
	
	Task.of = Task.prototype.of;
	
	/**
	 * Constructs a new `Task[α, β]` containing the single value `α`.
	 *
	 * `α` can be any value, including `null`, `undefined`, or another
	 * `Task[α, β]` structure.
	 *
	 * @summary α → Task[α, β]
	 */
	Task.prototype.rejected = function _rejected(a) {
	  return new Task(function (reject) {
	    return reject(a);
	  });
	};
	
	Task.rejected = Task.prototype.rejected;
	
	// -- Functor ----------------------------------------------------------
	
	/**
	 * Transforms the successful value of the `Task[α, β]` using a regular unary
	 * function.
	 *
	 * @summary @Task[α, β] => (β → γ) → Task[α, γ]
	 */
	Task.prototype.map = function _map(f) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return reject(a);
	    }, function (b) {
	      return resolve(f(b));
	    });
	  }, cleanup);
	};
	
	// -- Chain ------------------------------------------------------------
	
	/**
	 * Transforms the succesful value of the `Task[α, β]` using a function to a
	 * monad.
	 *
	 * @summary @Task[α, β] => (β → Task[α, γ]) → Task[α, γ]
	 */
	Task.prototype.chain = function _chain(f) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return reject(a);
	    }, function (b) {
	      return f(b).fork(reject, resolve);
	    });
	  }, cleanup);
	};
	
	// -- Apply ------------------------------------------------------------
	
	/**
	 * Applys the successful value of the `Task[α, (β → γ)]` to the successful
	 * value of the `Task[α, β]`
	 *
	 * @summary @Task[α, (β → γ)] => Task[α, β] → Task[α, γ]
	 */
	
	Task.prototype.ap = function _ap(that) {
	  var forkThis = this.fork;
	  var forkThat = that.fork;
	  var cleanupThis = this.cleanup;
	  var cleanupThat = that.cleanup;
	
	  function cleanupBoth(state) {
	    cleanupThis(state[0]);
	    cleanupThat(state[1]);
	  }
	
	  return new Task(function (reject, resolve) {
	    var func,
	        funcLoaded = false;
	    var val,
	        valLoaded = false;
	    var rejected = false;
	    var allState;
	
	    var thisState = forkThis(guardReject, guardResolve(function (x) {
	      funcLoaded = true;
	      func = x;
	    }));
	
	    var thatState = forkThat(guardReject, guardResolve(function (x) {
	      valLoaded = true;
	      val = x;
	    }));
	
	    function guardResolve(setter) {
	      return function (x) {
	        if (rejected) {
	          return;
	        }
	
	        setter(x);
	        if (funcLoaded && valLoaded) {
	          delayed(function () {
	            cleanupBoth(allState);
	          });
	          return resolve(func(val));
	        } else {
	          return x;
	        }
	      };
	    }
	
	    function guardReject(x) {
	      if (!rejected) {
	        rejected = true;
	        return reject(x);
	      }
	    }
	
	    return allState = [thisState, thatState];
	  }, cleanupBoth);
	};
	
	// -- Semigroup ------------------------------------------------------------
	
	/**
	 * Selects the earlier of the two tasks `Task[α, β]`
	 *
	 * @summary @Task[α, β] => Task[α, β] → Task[α, β]
	 */
	
	Task.prototype.concat = function _concat(that) {
	  var forkThis = this.fork;
	  var forkThat = that.fork;
	  var cleanupThis = this.cleanup;
	  var cleanupThat = that.cleanup;
	
	  function cleanupBoth(state) {
	    cleanupThis(state[0]);
	    cleanupThat(state[1]);
	  }
	
	  return new Task(function (reject, resolve) {
	    var done = false;
	    var allState;
	    var thisState = forkThis(guard(reject), guard(resolve));
	    var thatState = forkThat(guard(reject), guard(resolve));
	
	    return allState = [thisState, thatState];
	
	    function guard(f) {
	      return function (x) {
	        if (!done) {
	          done = true;
	          delayed(function () {
	            cleanupBoth(allState);
	          });
	          return f(x);
	        }
	      };
	    }
	  }, cleanupBoth);
	};
	
	// -- Monoid ------------------------------------------------------------
	
	/**
	 * Returns a Task that will never resolve
	 *
	 * @summary Void → Task[α, _]
	 */
	Task.empty = function _empty() {
	  return new Task(function () {});
	};
	
	Task.prototype.empty = Task.empty;
	
	// -- Show -------------------------------------------------------------
	
	/**
	 * Returns a textual representation of the `Task[α, β]`
	 *
	 * @summary @Task[α, β] => Void → String
	 */
	Task.prototype.toString = function _toString() {
	  return 'Task';
	};
	
	// -- Extracting and recovering ----------------------------------------
	
	/**
	 * Transforms a failure value into a new `Task[α, β]`. Does nothing if the
	 * structure already contains a successful value.
	 *
	 * @summary @Task[α, β] => (α → Task[γ, β]) → Task[γ, β]
	 */
	Task.prototype.orElse = function _orElse(f) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return f(a).fork(reject, resolve);
	    }, function (b) {
	      return resolve(b);
	    });
	  }, cleanup);
	};
	
	// -- Folds and extended transformations -------------------------------
	
	/**
	 * Catamorphism. Takes two functions, applies the leftmost one to the failure
	 * value, and the rightmost one to the successful value, depending on which one
	 * is present.
	 *
	 * @summary @Task[α, β] => (α → γ), (β → γ) → Task[δ, γ]
	 */
	Task.prototype.fold = function _fold(f, g) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return resolve(f(a));
	    }, function (b) {
	      return resolve(g(b));
	    });
	  }, cleanup);
	};
	
	/**
	 * Catamorphism.
	 *
	 * @summary @Task[α, β] => { Rejected: α → γ, Resolved: β → γ } → Task[δ, γ]
	 */
	Task.prototype.cata = function _cata(pattern) {
	  return this.fold(pattern.Rejected, pattern.Resolved);
	};
	
	/**
	 * Swaps the disjunction values.
	 *
	 * @summary @Task[α, β] => Void → Task[β, α]
	 */
	Task.prototype.swap = function _swap() {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return resolve(a);
	    }, function (b) {
	      return reject(b);
	    });
	  }, cleanup);
	};
	
	/**
	 * Maps both sides of the disjunction.
	 *
	 * @summary @Task[α, β] => (α → γ), (β → δ) → Task[γ, δ]
	 */
	Task.prototype.bimap = function _bimap(f, g) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return reject(f(a));
	    }, function (b) {
	      return resolve(g(b));
	    });
	  }, cleanup);
	};
	
	/**
	 * Maps the left side of the disjunction (failure).
	 *
	 * @summary @Task[α, β] => (α → γ) → Task[γ, β]
	 */
	Task.prototype.rejectedMap = function _rejectedMap(f) {
	  var fork = this.fork;
	  var cleanup = this.cleanup;
	
	  return new Task(function (reject, resolve) {
	    return fork(function (a) {
	      return reject(f(a));
	    }, function (b) {
	      return resolve(b);
	    });
	  }, cleanup);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).setImmediate, __webpack_require__(322)))

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(321);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	
	(function (global, undefined) {
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
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
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
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
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
	        registerImmediate = function registerImmediate(handle) {
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
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(322)))

/***/ },
/* 322 */
/***/ function(module, exports) {

	'use strict';
	
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
	function defaultClearTimeout() {
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
	})();
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map