/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  z-index: 100;\n  color: white;\n  font-family: \"Amatic SC\", cursive;\n}\nheader > img {\n  height: 10rem;\n  animation: headerTiki 5s infinite linear;\n}\nheader > img:nth-child(1) {\n  animation-direction: alternate;\n  animation-timing-function: ease-in;\n}\nheader > img:nth-child(3) {\n  animation-direction: alternate-reverse;\n  animation-timing-function: ease-out;\n}\nheader .headerTexto {\n  display: flex;\n  flex-direction: column;\n}\nheader .headerTexto > h1 {\n  font-size: 6rem;\n  animation: headerTitulo 5s infinite alternate;\n}\nheader .headerTexto > nav > ul {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 2rem;\n}\nheader .headerTexto > nav > ul > li > a {\n  color: white;\n  transition: color 0.3s;\n}\nheader .headerTexto > nav > ul > li > a:hover {\n  color: orange;\n}\nheader .headerTexto > nav > ul > li > a:active {\n  color: greenyellow;\n}\n\n@keyframes headerTitulo {\n  0% {\n    color: orangered;\n  }\n  100% {\n    color: orange;\n  }\n}\n@keyframes headerTiki {\n  0% {\n    transform: rotate(-20deg);\n  }\n  100% {\n    transform: rotate(20deg);\n  }\n}\n.fondo {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n}\n.fondo > img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.fondo::after {\n  content: \"\";\n  background-color: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n}\n\n.flechaIrArriba a > img {\n  height: 3rem;\n  width: 3rem;\n  background-color: rgba(255, 166, 0, 0.727);\n  bottom: 0.5rem;\n  right: 0.5rem;\n  z-index: 1000;\n  border-radius: 10%;\n  position: fixed;\n  transition: opacity 0.5s, visibility 0.5s;\n  visibility: hidden;\n  opacity: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flechaIrArriba a > img.active {\n  visibility: visible;\n  opacity: 1;\n}\n.flechaIrArriba a > img.inactive {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.ganadores {\n  font-family: \"Amatic SC\", cursive;\n  padding-top: 5rem;\n}\n.ganadores .ganadoresTitulo {\n  position: relative;\n}\n.ganadores .ganadoresTitulo > h2 {\n  color: yellow;\n  font-size: 3.5rem;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n.ganadores .ganadoresLista {\n  position: relative;\n  padding-top: 1rem;\n}\n.ganadores .ganadoresLista > ul {\n  display: flex;\n  justify-content: space-around;\n  font-size: 2rem;\n  color: white;\n}\n.ganadores .ganadoresLista > ul > li {\n  -webkit-transition: 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.ganadores .ganadoresLista > ul > li:hover {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n.ganadores .ganadoresLista > ul > li .ganadoresContenedor > img {\n  height: 11rem;\n  border-radius: 0.25rem;\n}\n\n.historia {\n  font-family: \"Amatic SC\", cursive;\n  position: relative;\n}\n.historia .historiaTitulo > h2 {\n  padding-top: 5rem;\n  font-size: 3.5rem;\n  text-align: center;\n  color: yellow;\n}\n.historia .historiaTexto {\n  padding: 1rem 7rem;\n  font-size: 2rem;\n  text-align: justify;\n  color: white;\n}\n\n.galeria {\n  justify-content: center;\n}\n.galeria .galeriaTitulo > h2 {\n  font-family: \"Amatic SC\", cursive;\n  position: relative;\n  padding-top: 3rem;\n  font-size: 3.5rem;\n  text-align: center;\n  color: yellow;\n}\n.galeria .galeriaImg {\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n}\n.galeria .galeriaImg .galeriaColumn {\n  flex: 50%;\n  padding: 0 0.25rem;\n  margin: 0;\n  justify-content: center;\n  align-self: center;\n}\n.galeria .galeriaImg .galeriaColumn > img {\n  margin-top: 0.25rem;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 0.25rem;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n}\n.galeria .galeriaImg .galeriaColumn > img:hover {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.05);\n}\n\n@media only screen and (max-width: 500px) {\n  header {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n  }\n  header > img {\n    width: 3.5rem;\n    height: 4rem;\n    animation: none;\n    position: initial;\n  }\n  header #izquierda {\n    padding-right: 1rem;\n  }\n  header #derecha {\n    padding-left: 1rem;\n  }\n  header .headerTexto > h1 {\n    font-size: 3rem;\n    align-self: center;\n  }\n  header .headerTexto > nav > ul li {\n    font-size: 1.5rem;\n  }\n\n  .fondo {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ganadores {\n    padding-top: 3rem;\n  }\n  .ganadores .ganadoresTitulo > h2 {\n    font-size: 2.2rem;\n  }\n  .ganadores .ganadoresLista > ul {\n    display: flex;\n    flex-direction: column;\n  }\n  .ganadores .ganadoresLista > ul > li {\n    font-size: 1.5rem;\n    align-self: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .ganadores .ganadoresLista > ul > li .ganadoresContenedor > img {\n    width: 6rem;\n    height: 50%;\n  }\n\n  .historia .historiaTitulo > h2 {\n    font-size: 2.2rem;\n  }\n  .historia .historiaTexto {\n    padding: 1rem 1rem 0;\n  }\n  .historia .historiaTexto > p {\n    font-size: 1.5rem;\n    padding-top: 1rem;\n  }\n\n  .galeria {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .galeria .galeriaTitulo > h2 {\n    font-size: 2.2rem;\n  }\n  .galeria .galeriaImg {\n    padding: 0.5rem 0 0.5rem;\n    max-width: initial;\n    flex-wrap: wrap;\n  }\n  .galeria .galeriaImg .galeriaColumn {\n    width: 100%;\n    flex-wrap: wrap;\n    flex: 50%;\n  }\n  .galeria .galeriaImg .galeriaColumn > img {\n    width: 100%;\n    height: 90%;\n  }\n\n  .flechaIrArriba a > img {\n    bottom: 3rem;\n    right: 0.5rem;\n    height: 2rem;\n    width: 2rem;\n  }\n}\n@media only screen and (min-width: 500px) and (max-width: 768px) {\n  header {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n  }\n  header > img {\n    width: 5rem;\n    height: 6rem;\n    animation: none;\n    position: initial;\n  }\n  header #izquierda {\n    padding-right: 1rem;\n  }\n  header #derecha {\n    padding-left: 1rem;\n  }\n  header .headerTexto > h1 {\n    font-size: 5rem;\n    align-self: center;\n  }\n  header .headerTexto > nav > ul li {\n    font-size: 2rem;\n  }\n\n  .fondo {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ganadores {\n    padding-top: 3rem;\n  }\n  .ganadores .ganadoresTitulo > h2 {\n    font-size: 2.5rem;\n  }\n  .ganadores .ganadoresLista > ul {\n    display: flex;\n  }\n  .ganadores .ganadoresLista > ul > li {\n    font-size: 2rem;\n    align-self: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .ganadores .ganadoresLista > ul > li .ganadoresContenedor > img {\n    width: 7rem;\n    height: 50%;\n  }\n\n  .historia .historiaTitulo > h2 {\n    font-size: 2.5rem;\n  }\n  .historia .historiaTexto {\n    padding: 0 0.5rem 0;\n  }\n  .historia .historiaTexto > p {\n    font-size: 2rem;\n    padding: 1rem 2rem 0;\n  }\n\n  .galeria {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .galeria .galeriaTitulo > h2 {\n    font-size: 2.5rem;\n  }\n  .galeria .galeriaImg {\n    padding: 0.5rem 0 0.5rem;\n    max-width: initial;\n    flex-wrap: wrap;\n  }\n  .galeria .galeriaImg .galeriaColumn {\n    width: 100%;\n    flex-wrap: wrap;\n    flex: 33.3%;\n  }\n  .galeria .galeriaImg .galeriaColumn > img {\n    width: 100%;\n    height: 90%;\n  }\n\n  .flechaIrArriba a > img {\n    bottom: 3rem;\n    right: 0.5rem;\n    height: 2rem;\n    width: 2rem;\n  }\n}\n@media only screen and (min-width: 769px) and (max-width: 1500px) {\n  .galeria {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .galeria .galeriaTitulo > h2 {\n    font-size: 2.5rem;\n  }\n  .galeria .galeriaImg {\n    padding: 0.5rem 0 0.5rem;\n    max-width: initial;\n    flex-wrap: wrap;\n    margin: 0 7rem 0;\n  }\n  .galeria .galeriaImg .galeriaColumn {\n    width: 100%;\n    flex-wrap: wrap;\n    flex: 25%;\n  }\n  .galeria .galeriaImg .galeriaColumn > img {\n    width: 100%;\n    height: 90%;\n  }\n\n  .flechaIrArriba a > img {\n    bottom: 3rem;\n    right: 0.5rem;\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

console.log("Hola mundo sin config con Webpack");
})();

/******/ })()
;