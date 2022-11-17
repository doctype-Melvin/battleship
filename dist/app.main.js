(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #AA5042;\n    --darker-shade: #753742;\n    --darkest-shade: #4F3130;\n    --lighter-shade: #D8BD8A;\n    --lightest-shade: #D8D78F;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 1fr 5fr 0.5fr;\n    grid-template-columns: 0.5fr 2fr 1fr 2fr .5fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n}\n\n.header {\n    grid-area: header;\n}\n\n#left, #right {\n    height: 100%;\n}\n\n#left {\n    grid-area: leftBoard;\n}\n\n#right {\n    grid-area: rightBoard;\n}\n\n.menu {\n    grid-area: controls;\n}\n\n.cell {\n    background-color: var(--lightest-shade);\n    border: solid 1px white;\n    border-radius: 10px;\n}\n\n.cell:hover {\n    cursor: pointer;\n    background-color: var(--lighter-shade);\n}\n\n.cell:active {\n    background-color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,6CAA6C;IAC7C;;;wCAGoC;AACxC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #AA5042;\n    --darker-shade: #753742;\n    --darkest-shade: #4F3130;\n    --lighter-shade: #D8BD8A;\n    --lightest-shade: #D8D78F;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 1fr 5fr 0.5fr;\n    grid-template-columns: 0.5fr 2fr 1fr 2fr .5fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n}\n\n.header {\n    grid-area: header;\n}\n\n#left, #right {\n    height: 100%;\n}\n\n#left {\n    grid-area: leftBoard;\n}\n\n#right {\n    grid-area: rightBoard;\n}\n\n.menu {\n    grid-area: controls;\n}\n\n.cell {\n    background-color: var(--lightest-shade);\n    border: solid 1px white;\n    border-radius: 10px;\n}\n\n.cell:hover {\n    cursor: pointer;\n    background-color: var(--lighter-shade);\n}\n\n.cell:active {\n    background-color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((module) => {

const createGrid = (hand) => {
  let grid = null;
  const container = document.getElementById(hand);
  container.style.display = 'grid';
  container.style.gridTemplateRows = 'repeat(10, 1fr)';
  container.style.gridTemplateColumns = 'repeat(10, 1fr)';
  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.append(cell);
    grid = document.querySelectorAll('.cell');
  }
  return { grid };
};

module.exports = createGrid;


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameboard_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ship_js__WEBPACK_IMPORTED_MODULE_2__);




const battleship = __webpack_require__(/*! ./game */ "./src/game.js");

battleship();


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const player = __webpack_require__(/*! ./player */ "./src/player.js");
const createGrid = __webpack_require__(/*! ./DOM */ "./src/DOM.js");

const battleship = () => {
  let human = player('human');
  let bot = player('bot');
  createGrid('left');
  createGrid('right');
  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  const gameReset = () => {
    human = player('human');
    bot = player('bot');
    createGrid('left');
    createGrid('right');
    return {
      human,
      bot,
    };
  };
  return {
    human,
    bot,
    gameReset,
  };
};

module.exports = battleship;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipyard = __webpack_require__(/*! ./ship */ "./src/ship.js");

const Gameboard = () => {
  const ocean = [];
  for (let x = 0; x < 10; x += 1) {
    for (let y = 0; y < 10; y += 1) {
      ocean.push([x, y]);
    }
  }

  const makeShip = (size) => shipyard(size).ship;

  const SHIPS = [
    {
      name: 'carrier',
      type: makeShip(5),
    },
    {
      name: 'battleship',
      type: makeShip(4),
    },
    {
      name: 'cruiser',
      type: makeShip(3),
    },
    {
      name: 'submarine',
      type: makeShip(3),
    },
    {
      name: 'destroyer',
      type: makeShip(2),
    },
  ];

  const inGame = [];

  const getShip = (string) => SHIPS.find((item) => item.name === string);

  const rotateShip = (string) => SHIPS.find((item) => item.name === string).type.rotate();

  const isInbounds = (position, name) => {
    const size = getShip(name).type.size - 1;
    let lastCell = null;
    if (getShip(name).type.rotation !== 'H') {
      lastCell = [position[0], position[1] - size];
    } else {
      lastCell = [position[0] + size, position[1]];
    }
    const result = ocean.some((item) => item.join() === lastCell.join());
    return (result);
  };

  const createPath = (position, name) => {
    const path = [position];
    const ship = getShip(name).type;
    for (let i = 1; i < ship.size; i += 1) {
      if (ship.rotation !== 'H') {
        path.push([position[0], position[1] - i]);
      } else {
        path.push([position[0] + i, position[1]]);
      }
    }
    return path;
  };

  const isOverlapping = (array, name) => {
    if (array.length > 0) {
      const shipPath = getShip(name).type.position;
      const check = array.map((ship) => ship.type.position.map((element) => shipPath.some((el) => element.join() === el.join())));
      return check.flat().some((results) => results === true);
    }
    return false;
  };

  const placeShip = (position, name) => {
    // DOM if ship's position array is > 0
    // remove eventlistener
    const ship = getShip(name);
    if (inGame.length < 1 && isInbounds(position, name)) {
      ship.type.position = createPath(position, name);
      inGame.push(ship);
    } else if (inGame.length > 0 && isInbounds(position, name)) {
      ship.type.position = createPath(position, name);
      if (!isOverlapping(inGame, name)) {
        inGame.push(ship);
      }
    }
  };

  const isSunkReport = (name) => `${name} has been wrecked`;

  const tries = [];
  const success = [];

  const isInRange = (value) => {
    if (value >= 0 && value <= 9) {
      return true;
    }
    return false;
  };

  const isPlayable = (coor) => tries.every((item) => item.join() !== coor.join());
  const makeQ = (arr) => {
    if (isInRange(arr[0] + 1)
    && isPlayable([arr[0] + 1, arr[1]])) {
      success.push([arr[0] + 1, arr[1]]);
    }
    if (isInRange(arr[0] - 1)
    && isPlayable([arr[0] - 1, arr[1]])) {
      success.push([arr[0] - 1, arr[1]]);
    }
    if (isInRange(arr[1] + 1)
    && isPlayable([arr[0], arr[1] + 1])) {
      success.push([arr[0], arr[1] + 1]);
    }
    if (isInRange(arr[1] - 1)
    && isPlayable([arr[0], arr[1] - 1])) {
      success.push([arr[0], arr[1] - 1]);
    }
  };

  const placeAttack = (coor) => {
    // if isPlayable remove eventlistener after
    // this way the cell will not be clickable
    if (isPlayable(coor)) {
      tries.push(coor);
      for (let i = 0; i < SHIPS.length; i += 1) {
        for (let j = 0; j < SHIPS[i].type.position.length; j += 1) {
          if (coor.join() === SHIPS[i].type.position[j].join()) {
            SHIPS[i].type.hit();
            if (SHIPS[i].type.isSunk() !== true) {
              makeQ(coor);
            } if (SHIPS[i].type.isSunk()) {
              success.length = 0;
              return isSunkReport(SHIPS[i].name);
            }
            return true;
          }
        }
      }
    }
    return false;
  };

  const getTriesLength = () => tries.length;

  return {
    ocean,
    makeShip,
    SHIPS,
    isInbounds,
    rotateShip,
    createPath,
    getShip,
    inGame,
    placeShip,
    isOverlapping,
    placeAttack,
    tries,
    isSunkReport,
    success,
    makeQ,
    isPlayable,
    getTriesLength,
  };
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const player = (id) => ({
  id,
  board: Gameboard(),

  setShip(pos, name) {
    this.board.placeShip(pos, name);
  },

  setAttack(a) {
    return this.board.placeAttack(a);
  },

  rotateShip(shipname) {
    this.board.rotateShip(shipname);
  },

  randomize() {
    const array = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    return array;
  },

  setRandomAttack() {
    if (this.board.success.length > 0) {
      const next = this.board.success.shift();
      return this.board.placeAttack(next);
    }
    if (!this.board.isPlayable(this.randomize())) {
      this.setRandomAttack();
    }
    return this.board.placeAttack(this.randomize());
  },

  setRandomShip() {
    while (this.board.inGame.length < this.board.SHIPS.length) {
      this.board.SHIPS.map((item) => {
        this.board.SHIPS[Math.floor(Math.random() * 5)].type.rotate();
        this.board.SHIPS[Math.floor(Math.random() * 5)].type.rotate();
        this.setShip(this.randomize(), item.name);
      });
    }
  },
});

module.exports = player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const shipyard = (size) => {
  const ship = {
    size,
    hits: 0,
    sunk: false,
    position: [],
    rotation: 'H',
    rotate() {
      if (this.rotation === 'H') {
        this.rotation = 'V';
      } else {
        this.rotation = 'H';
      }
      return this.rotation;
    },
    hit() {
      this.hits += 1;
      return this.hits;
    },
    isSunk() {
      if (this.hits === this.size) {
        this.sunk = true;
      }
      return this.sunk;
    },
  };
  return {
    ship,
  };
};

module.exports = shipyard;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDeEtBLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogI0FBNTA0MjtcXG4gICAgLS1kYXJrZXItc2hhZGU6ICM3NTM3NDI7XFxuICAgIC0tZGFya2VzdC1zaGFkZTogIzRGMzEzMDtcXG4gICAgLS1saWdodGVyLXNoYWRlOiAjRDhCRDhBO1xcbiAgICAtLWxpZ2h0ZXN0LXNoYWRlOiAjRDhENzhGO1xcbn1cXG5cXG5odG1sLCBib2R5LFxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAwLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnIgMWZyIDJmciAuNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCIgLiBsZWZ0Qm9hcmQgY29udHJvbHMgcmlnaHRCb2FyZCAuXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI2xlZnQsICNyaWdodCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2xlZnQge1xcbiAgICBncmlkLWFyZWE6IGxlZnRCb2FyZDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgZ3JpZC1hcmVhOiByaWdodEJvYXJkO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItc2hhZGUpO1xcbn1cXG5cXG4uY2VsbDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDZDQUE2QztJQUM3Qzs7O3dDQUdvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiAjQUE1MDQyO1xcbiAgICAtLWRhcmtlci1zaGFkZTogIzc1Mzc0MjtcXG4gICAgLS1kYXJrZXN0LXNoYWRlOiAjNEYzMTMwO1xcbiAgICAtLWxpZ2h0ZXItc2hhZGU6ICNEOEJEOEE7XFxuICAgIC0tbGlnaHRlc3Qtc2hhZGU6ICNEOEQ3OEY7XFxufVxcblxcbmh0bWwsIGJvZHksXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDAuNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmciAxZnIgMmZyIC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIiAuIGxlZnRCb2FyZCBjb250cm9scyByaWdodEJvYXJkIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4jbGVmdCwgI3JpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbGVmdCB7XFxuICAgIGdyaWQtYXJlYTogbGVmdEJvYXJkO1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBncmlkLWFyZWE6IHJpZ2h0Qm9hcmQ7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250cm9scztcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1zaGFkZSk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1zaGFkZSk7XFxufVxcblxcbi5jZWxsOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUdyaWQgPSAoaGFuZCkgPT4ge1xuICBsZXQgZ3JpZCA9IG51bGw7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhbmQpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgY29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSAncmVwZWF0KDEwLCAxZnIpJztcbiAgY29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDEwLCAxZnIpJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICB9XG4gIHJldHVybiB7IGdyaWQgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlR3JpZDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBiYXR0bGVzaGlwID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5cbmJhdHRsZXNoaXAoKTtcbiIsImNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBjcmVhdGVHcmlkID0gcmVxdWlyZSgnLi9ET00nKTtcblxuY29uc3QgYmF0dGxlc2hpcCA9ICgpID0+IHtcbiAgbGV0IGh1bWFuID0gcGxheWVyKCdodW1hbicpO1xuICBsZXQgYm90ID0gcGxheWVyKCdib3QnKTtcbiAgY3JlYXRlR3JpZCgnbGVmdCcpO1xuICBjcmVhdGVHcmlkKCdyaWdodCcpO1xuICBpZiAoYm90LmJvYXJkLmluR2FtZSA8IDUpIHtcbiAgICBib3Quc2V0UmFuZG9tU2hpcCgpO1xuICB9XG5cbiAgY29uc3QgZ2FtZVJlc2V0ID0gKCkgPT4ge1xuICAgIGh1bWFuID0gcGxheWVyKCdodW1hbicpO1xuICAgIGJvdCA9IHBsYXllcignYm90Jyk7XG4gICAgY3JlYXRlR3JpZCgnbGVmdCcpO1xuICAgIGNyZWF0ZUdyaWQoJ3JpZ2h0Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1bWFuLFxuICAgICAgYm90LFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7XG4gICAgaHVtYW4sXG4gICAgYm90LFxuICAgIGdhbWVSZXNldCxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmF0dGxlc2hpcDtcbiIsImNvbnN0IHNoaXB5YXJkID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgb2NlYW4gPSBbXTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICBvY2Vhbi5wdXNoKFt4LCB5XSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFrZVNoaXAgPSAoc2l6ZSkgPT4gc2hpcHlhcmQoc2l6ZSkuc2hpcDtcblxuICBjb25zdCBTSElQUyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnY2FycmllcicsXG4gICAgICB0eXBlOiBtYWtlU2hpcCg1KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICAgIHR5cGU6IG1ha2VTaGlwKDQpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2NydWlzZXInLFxuICAgICAgdHlwZTogbWFrZVNoaXAoMyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICAgIHR5cGU6IG1ha2VTaGlwKDMpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgICB0eXBlOiBtYWtlU2hpcCgyKSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGluR2FtZSA9IFtdO1xuXG4gIGNvbnN0IGdldFNoaXAgPSAoc3RyaW5nKSA9PiBTSElQUy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN0cmluZyk7XG5cbiAgY29uc3Qgcm90YXRlU2hpcCA9IChzdHJpbmcpID0+IFNISVBTLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3RyaW5nKS50eXBlLnJvdGF0ZSgpO1xuXG4gIGNvbnN0IGlzSW5ib3VuZHMgPSAocG9zaXRpb24sIG5hbWUpID0+IHtcbiAgICBjb25zdCBzaXplID0gZ2V0U2hpcChuYW1lKS50eXBlLnNpemUgLSAxO1xuICAgIGxldCBsYXN0Q2VsbCA9IG51bGw7XG4gICAgaWYgKGdldFNoaXAobmFtZSkudHlwZS5yb3RhdGlvbiAhPT0gJ0gnKSB7XG4gICAgICBsYXN0Q2VsbCA9IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMV0gLSBzaXplXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENlbGwgPSBbcG9zaXRpb25bMF0gKyBzaXplLCBwb3NpdGlvblsxXV07XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9jZWFuLnNvbWUoKGl0ZW0pID0+IGl0ZW0uam9pbigpID09PSBsYXN0Q2VsbC5qb2luKCkpO1xuICAgIHJldHVybiAocmVzdWx0KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQYXRoID0gKHBvc2l0aW9uLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IFtwb3NpdGlvbl07XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXAobmFtZSkudHlwZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuc2l6ZTsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcC5yb3RhdGlvbiAhPT0gJ0gnKSB7XG4gICAgICAgIHBhdGgucHVzaChbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdIC0gaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKFtwb3NpdGlvblswXSArIGksIHBvc2l0aW9uWzFdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGNvbnN0IGlzT3ZlcmxhcHBpbmcgPSAoYXJyYXksIG5hbWUpID0+IHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2hpcFBhdGggPSBnZXRTaGlwKG5hbWUpLnR5cGUucG9zaXRpb247XG4gICAgICBjb25zdCBjaGVjayA9IGFycmF5Lm1hcCgoc2hpcCkgPT4gc2hpcC50eXBlLnBvc2l0aW9uLm1hcCgoZWxlbWVudCkgPT4gc2hpcFBhdGguc29tZSgoZWwpID0+IGVsZW1lbnQuam9pbigpID09PSBlbC5qb2luKCkpKSk7XG4gICAgICByZXR1cm4gY2hlY2suZmxhdCgpLnNvbWUoKHJlc3VsdHMpID0+IHJlc3VsdHMgPT09IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHBvc2l0aW9uLCBuYW1lKSA9PiB7XG4gICAgLy8gRE9NIGlmIHNoaXAncyBwb3NpdGlvbiBhcnJheSBpcyA+IDBcbiAgICAvLyByZW1vdmUgZXZlbnRsaXN0ZW5lclxuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKG5hbWUpO1xuICAgIGlmIChpbkdhbWUubGVuZ3RoIDwgMSAmJiBpc0luYm91bmRzKHBvc2l0aW9uLCBuYW1lKSkge1xuICAgICAgc2hpcC50eXBlLnBvc2l0aW9uID0gY3JlYXRlUGF0aChwb3NpdGlvbiwgbmFtZSk7XG4gICAgICBpbkdhbWUucHVzaChzaGlwKTtcbiAgICB9IGVsc2UgaWYgKGluR2FtZS5sZW5ndGggPiAwICYmIGlzSW5ib3VuZHMocG9zaXRpb24sIG5hbWUpKSB7XG4gICAgICBzaGlwLnR5cGUucG9zaXRpb24gPSBjcmVhdGVQYXRoKHBvc2l0aW9uLCBuYW1lKTtcbiAgICAgIGlmICghaXNPdmVybGFwcGluZyhpbkdhbWUsIG5hbWUpKSB7XG4gICAgICAgIGluR2FtZS5wdXNoKHNoaXApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmtSZXBvcnQgPSAobmFtZSkgPT4gYCR7bmFtZX0gaGFzIGJlZW4gd3JlY2tlZGA7XG5cbiAgY29uc3QgdHJpZXMgPSBbXTtcbiAgY29uc3Qgc3VjY2VzcyA9IFtdO1xuXG4gIGNvbnN0IGlzSW5SYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNQbGF5YWJsZSA9IChjb29yKSA9PiB0cmllcy5ldmVyeSgoaXRlbSkgPT4gaXRlbS5qb2luKCkgIT09IGNvb3Iuam9pbigpKTtcbiAgY29uc3QgbWFrZVEgPSAoYXJyKSA9PiB7XG4gICAgaWYgKGlzSW5SYW5nZShhcnJbMF0gKyAxKVxuICAgICYmIGlzUGxheWFibGUoW2FyclswXSArIDEsIGFyclsxXV0pKSB7XG4gICAgICBzdWNjZXNzLnB1c2goW2FyclswXSArIDEsIGFyclsxXV0pO1xuICAgIH1cbiAgICBpZiAoaXNJblJhbmdlKGFyclswXSAtIDEpXG4gICAgJiYgaXNQbGF5YWJsZShbYXJyWzBdIC0gMSwgYXJyWzFdXSkpIHtcbiAgICAgIHN1Y2Nlc3MucHVzaChbYXJyWzBdIC0gMSwgYXJyWzFdXSk7XG4gICAgfVxuICAgIGlmIChpc0luUmFuZ2UoYXJyWzFdICsgMSlcbiAgICAmJiBpc1BsYXlhYmxlKFthcnJbMF0sIGFyclsxXSArIDFdKSkge1xuICAgICAgc3VjY2Vzcy5wdXNoKFthcnJbMF0sIGFyclsxXSArIDFdKTtcbiAgICB9XG4gICAgaWYgKGlzSW5SYW5nZShhcnJbMV0gLSAxKVxuICAgICYmIGlzUGxheWFibGUoW2FyclswXSwgYXJyWzFdIC0gMV0pKSB7XG4gICAgICBzdWNjZXNzLnB1c2goW2FyclswXSwgYXJyWzFdIC0gMV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUF0dGFjayA9IChjb29yKSA9PiB7XG4gICAgLy8gaWYgaXNQbGF5YWJsZSByZW1vdmUgZXZlbnRsaXN0ZW5lciBhZnRlclxuICAgIC8vIHRoaXMgd2F5IHRoZSBjZWxsIHdpbGwgbm90IGJlIGNsaWNrYWJsZVxuICAgIGlmIChpc1BsYXlhYmxlKGNvb3IpKSB7XG4gICAgICB0cmllcy5wdXNoKGNvb3IpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTSElQUy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFNISVBTW2ldLnR5cGUucG9zaXRpb24ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoY29vci5qb2luKCkgPT09IFNISVBTW2ldLnR5cGUucG9zaXRpb25bal0uam9pbigpKSB7XG4gICAgICAgICAgICBTSElQU1tpXS50eXBlLmhpdCgpO1xuICAgICAgICAgICAgaWYgKFNISVBTW2ldLnR5cGUuaXNTdW5rKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgbWFrZVEoY29vcik7XG4gICAgICAgICAgICB9IGlmIChTSElQU1tpXS50eXBlLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzU3Vua1JlcG9ydChTSElQU1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0VHJpZXNMZW5ndGggPSAoKSA9PiB0cmllcy5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBvY2VhbixcbiAgICBtYWtlU2hpcCxcbiAgICBTSElQUyxcbiAgICBpc0luYm91bmRzLFxuICAgIHJvdGF0ZVNoaXAsXG4gICAgY3JlYXRlUGF0aCxcbiAgICBnZXRTaGlwLFxuICAgIGluR2FtZSxcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNPdmVybGFwcGluZyxcbiAgICBwbGFjZUF0dGFjayxcbiAgICB0cmllcyxcbiAgICBpc1N1bmtSZXBvcnQsXG4gICAgc3VjY2VzcyxcbiAgICBtYWtlUSxcbiAgICBpc1BsYXlhYmxlLFxuICAgIGdldFRyaWVzTGVuZ3RoLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXIgPSAoaWQpID0+ICh7XG4gIGlkLFxuICBib2FyZDogR2FtZWJvYXJkKCksXG5cbiAgc2V0U2hpcChwb3MsIG5hbWUpIHtcbiAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChwb3MsIG5hbWUpO1xuICB9LFxuXG4gIHNldEF0dGFjayhhKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQucGxhY2VBdHRhY2soYSk7XG4gIH0sXG5cbiAgcm90YXRlU2hpcChzaGlwbmFtZSkge1xuICAgIHRoaXMuYm9hcmQucm90YXRlU2hpcChzaGlwbmFtZSk7XG4gIH0sXG5cbiAgcmFuZG9taXplKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgc2V0UmFuZG9tQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLmJvYXJkLnN1Y2Nlc3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV4dCA9IHRoaXMuYm9hcmQuc3VjY2Vzcy5zaGlmdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQucGxhY2VBdHRhY2sobmV4dCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5ib2FyZC5pc1BsYXlhYmxlKHRoaXMucmFuZG9taXplKCkpKSB7XG4gICAgICB0aGlzLnNldFJhbmRvbUF0dGFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ib2FyZC5wbGFjZUF0dGFjayh0aGlzLnJhbmRvbWl6ZSgpKTtcbiAgfSxcblxuICBzZXRSYW5kb21TaGlwKCkge1xuICAgIHdoaWxlICh0aGlzLmJvYXJkLmluR2FtZS5sZW5ndGggPCB0aGlzLmJvYXJkLlNISVBTLmxlbmd0aCkge1xuICAgICAgdGhpcy5ib2FyZC5TSElQUy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5ib2FyZC5TSElQU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KV0udHlwZS5yb3RhdGUoKTtcbiAgICAgICAgdGhpcy5ib2FyZC5TSElQU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KV0udHlwZS5yb3RhdGUoKTtcbiAgICAgICAgdGhpcy5zZXRTaGlwKHRoaXMucmFuZG9taXplKCksIGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XG4iLCJjb25zdCBzaGlweWFyZCA9IChzaXplKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgc2l6ZSxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBbXSxcbiAgICByb3RhdGlvbjogJ0gnLFxuICAgIHJvdGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID09PSAnSCcpIHtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9ICdWJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAnSCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yb3RhdGlvbjtcbiAgICB9LFxuICAgIGhpdCgpIHtcbiAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMuc2l6ZSkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgICB9LFxuICB9O1xuICByZXR1cm4ge1xuICAgIHNoaXAsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXB5YXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9