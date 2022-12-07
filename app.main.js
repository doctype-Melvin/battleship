(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #426b69;\n    --darker-shade: #493843;\n    --darkest-shade: #121113;\n    --lighter-shade: #E4E6C3;\n    --lightest-shade: #F7F7F2;\n    --got-hit: #CC2936;\n    --white: #FFF;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: .25fr 2fr .25fr;\n    grid-template-columns: .1fr 2fr 1fr 2fr .1fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n    background: var(--darkest-shade);\n    background: linear-gradient(45deg, var(--got-hit) 35%, var(--main-color) 65%, var(--lighter-shade) 100%); \n}\n\n.header {\n    grid-area: header;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10px;\n    color: var(--lightest-shade);\n}\n\n.menu > * {\n    box-shadow: 3px 3px 5px var(--darkest-shade);\n} \n\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footCt > a {\n    text-decoration: none;\n    color: var(--darkest-shade);\n}\n\n.footCt > a:hover{\n    cursor: pointer;\n    color: var(--main-color);\n}\n\n#ships, #attacks {\n    height: 100%;\n    direction: rtl;\n}\n\n.gameboard > .ships {\n    direction: ltr;\n}\n\n.gameboard, .gameboard > .ships {\n    transform: rotate(180deg);\n}\n\n#ships {\n    grid-area: leftBoard;\n}\n\n#attacks {\n    grid-area: rightBoard;\n}\n\n#ships, #attacks {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.ships, .attacks{\n    background-color: var(--lighter-shade);\n}\n\n.ships, .attacks, .placed, .bombed, .hit {\n    margin: 2px;\n    border-radius: 2px;\n}\n\n.ships:hover, .attacks:hover {\n    cursor: pointer;\n}\n\n.ships:active, .attacks:active {\n    background-color: var(--lightest-shade);\n}\n\n.placed {\n    background-color: var(--darkest-shade);\n}\n\n.bombed {\n    background-color: var(--main-color);\n}\n\n.hit {\n    background-color: var(--got-hit);\n}\n\n.leftCellPlaced {\n    background-color: var(--darker-shade);\n}\n\n.menu {\n    grid-area: controls;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.score {\n    font-size: 1.15rem;\n}\n\n.info {\n    background-color: var(--lightest-shade);\n    padding: 5px;\n    margin: 0 15px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1.75rem;\n    min-height: 150px;\n    min-width: 260px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipBtn, .reset, .rotate, .random {\n    background-color: var(--main-color);\n    color: var(--white);\n    font-weight: 600;\n    border-radius: 5px;\n    width: 66%;\n    border: none;\n    padding: 5px 0;\n}\n\n.shipBtn:hover, .reset:hover, .rotate:hover, .random:hover {\n    cursor: pointer;\n    background-color: var(--darkest-shade);\n}\n\n.shipBtn:active, .reset:active, .rotate:active, .random:active {\n    background-color: var(--lightest-shade);\n}\n\n.harbor {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.ship {\n    margin: 5px 0;\n}\n\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,UAAU;IACV,SAAS;IACT,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,4CAA4C;IAC5C;;;wCAGoC;IACpC,gCAAgC;IAChC,wGAAwG;AAC5G;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #426b69;\n    --darker-shade: #493843;\n    --darkest-shade: #121113;\n    --lighter-shade: #E4E6C3;\n    --lightest-shade: #F7F7F2;\n    --got-hit: #CC2936;\n    --white: #FFF;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: .25fr 2fr .25fr;\n    grid-template-columns: .1fr 2fr 1fr 2fr .1fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n    background: var(--darkest-shade);\n    background: linear-gradient(45deg, var(--got-hit) 35%, var(--main-color) 65%, var(--lighter-shade) 100%); \n}\n\n.header {\n    grid-area: header;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10px;\n    color: var(--lightest-shade);\n}\n\n.menu > * {\n    box-shadow: 3px 3px 5px var(--darkest-shade);\n} \n\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footCt > a {\n    text-decoration: none;\n    color: var(--darkest-shade);\n}\n\n.footCt > a:hover{\n    cursor: pointer;\n    color: var(--main-color);\n}\n\n#ships, #attacks {\n    height: 100%;\n    direction: rtl;\n}\n\n.gameboard > .ships {\n    direction: ltr;\n}\n\n.gameboard, .gameboard > .ships {\n    transform: rotate(180deg);\n}\n\n#ships {\n    grid-area: leftBoard;\n}\n\n#attacks {\n    grid-area: rightBoard;\n}\n\n#ships, #attacks {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.ships, .attacks{\n    background-color: var(--lighter-shade);\n}\n\n.ships, .attacks, .placed, .bombed, .hit {\n    margin: 2px;\n    border-radius: 2px;\n}\n\n.ships:hover, .attacks:hover {\n    cursor: pointer;\n}\n\n.ships:active, .attacks:active {\n    background-color: var(--lightest-shade);\n}\n\n.placed {\n    background-color: var(--darkest-shade);\n}\n\n.bombed {\n    background-color: var(--main-color);\n}\n\n.hit {\n    background-color: var(--got-hit);\n}\n\n.leftCellPlaced {\n    background-color: var(--darker-shade);\n}\n\n.menu {\n    grid-area: controls;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.score {\n    font-size: 1.15rem;\n}\n\n.info {\n    background-color: var(--lightest-shade);\n    padding: 5px;\n    margin: 0 15px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1.75rem;\n    min-height: 150px;\n    min-width: 260px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipBtn, .reset, .rotate, .random {\n    background-color: var(--main-color);\n    color: var(--white);\n    font-weight: 600;\n    border-radius: 5px;\n    width: 66%;\n    border: none;\n    padding: 5px 0;\n}\n\n.shipBtn:hover, .reset:hover, .rotate:hover, .random:hover {\n    cursor: pointer;\n    background-color: var(--darkest-shade);\n}\n\n.shipBtn:active, .reset:active, .rotate:active, .random:active {\n    background-color: var(--lightest-shade);\n}\n\n.harbor {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.ship {\n    margin: 5px 0;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_1__);



const game = __webpack_require__(/*! ./game */ "./src/game.js");

game;


/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const elementMaker = __webpack_require__(/*! ./helper */ "./src/helper.js");
// MVC View
const viewer = ((gameboards) => {
  // Creates menu section info box and buttons
  const menuSection = document.querySelector('.menu');
  menuSection.append(elementMaker('div', 'info', 'This is the game info', 'info'));
  gameboard().harbor.forEach((ship) => menuSection.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
  const harborBtns = document.querySelectorAll('.shipBtn');
  const infoBox = document.getElementById('info');
  menuSection.append(elementMaker('button', 'rotate', 'ROTATE', 'rotate'));
  const rotateBtn = document.querySelector('.rotate');
  menuSection.append(elementMaker('button', 'random', 'RANDOM', 'random'));
  const randomBtn = document.querySelector('.random');
  menuSection.append(elementMaker('button', 'reset', 'RESTART', 'restart'));
  const restartBtn = document.querySelector('.reset');

  const makeMenu = () => {
    menuSection.append(elementMaker('div', 'info', 'This is the game info', 'info'));
    gameboard().harbor.forEach((ship) => menuSection.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
    menuSection.append(elementMaker('button', 'random', 'RANDOM', 'random'));
    menuSection.append(elementMaker('button', 'reset', 'RESTART', 'restart'));
  };

  // Grid factory
  const makeGrid = (id, side) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add(id);
      cell.setAttribute('datacoord', JSON.stringify(gameboard().ocean[i]));
      side.append(cell);
    }
    return side;
  };

  // Creates grids for each side
  gameboards.forEach((side) => makeGrid(side.id, side));

  // Nodelists for grids
  const leftParent = document.getElementById('ships');
  const rightParent = document.getElementById('attacks');
  let left = document.querySelectorAll('.ships');
  let right = document.querySelectorAll('.attacks');

  // Changes grids color upon attack/hit
  const trackAttack = (input, array) => { // input = div
    if (array.length !== 0) {
      array.forEach((pos) => {
        if (input.attributes[1].value === JSON.stringify(pos)) {
          input.removeAttribute('class');
          input.setAttribute('class', 'hit');
        } else {
          input.setAttribute('class', 'bombed');
        }
      });
    } else {
      input.removeAttribute('class');
      input.setAttribute('class', 'bombed');
    }
  };

  // Replaces cells with copies
  const removeListeners = (grid) => {
    grid.forEach((node) => node.replaceWith(node.cloneNode(true)));
  };

  // Report function displays messages in infoBox element
  const statusReport = (element, status) => {
    switch (status) {
      case 1: element.textContent = 'Enemy destroyed your fleet!';
        break;
      case 2: element.textContent = 'Victory! \n We destroyed our enemy!';
        break;
      case 3: element.textContent = 'Vertical';
        break;
      case 4: element.textContent = 'Horizontal';
        break;
      case 5: element.textContent = 'Next Ship';
        break;
      case 6: element.textContent = 'It\'s time to attack!';
        break;
      default: element.textContent = 'The enemy is in our waters! Place your ships!';
    }
  };

  // Game over evaluation
  const isGameOver = (ply, cpu) => {
    if (ply.board.destroyed.length === 5) {
      removeListeners(right);
      statusReport(infoBox, 1);
      return true;
    } if (cpu.board.destroyed.length === 5) {
      removeListeners(right);
      statusReport(infoBox, 2);
      return true;
    } return false;
  };

  const findDiv = (value, nodelist) => {
    const target = JSON.stringify(value);
    const div = [...nodelist].filter((item) => item.attributes[1].value === target)[0];
    return div;
  };
  // Sets cpu attack
  const cpuAttack = (player, opp) => {
    opp.ranFire();
    const current = player.board.bombed[player.board.bombed.length - 1];
    const div = findDiv(current, left);
    trackAttack(div, player.board.onTarget);
  };

  // Initiates attacks on cpu grid
  const attackPhase = (grid, player, opp) => {
    grid.forEach((cell) => cell.addEventListener('click', () => {
      const target = JSON.parse(cell.attributes[1].value);
      opp.board.fire(target);
      trackAttack(cell, opp.board.onTarget);
      if (isGameOver(player, opp)) {
        console.log('GAME OVER');
        return true;
      }
      setTimeout(() => {
        cpuAttack(player, opp);
        if (isGameOver(player, opp)) {
          console.log('GAME OVER');
          return true;
        }
      }, 450);
    }));
  };

  // Change cell coloring
  const shipPlaced = (player) => {
    player.board.inGame.forEach((ship) => {
      const shipPos = ship.type.position;

      [...shipPos].forEach((point) => {
        [...left].forEach((data) => {
          if (data.attributes[1].value === JSON.stringify(point)) {
            // data.removeAttribute('class');
            data.setAttribute('class', 'placed');
          }
        });
      });
    });
  };

  const tempRan = (player) => {
    player.ranShip();
    shipPlaced(player);
    player.opp.ranShip();
    statusReport(infoBox, 6);
    attackPhase(right, player, player.opp);
  };

  const placePhase = (view, player, opp) => {
    randomBtn.addEventListener('click', () => tempRan(player));
    statusReport(infoBox, null);
    let ship = null;
    view.harborBtns.forEach((btn) => btn.addEventListener('click', () => {
      ship = btn.id;
    }));
    view.rotateBtn.addEventListener('click', () => {
      if (ship === null) return;
      player.board.getShip(ship).type.rotate();
      if (player.board.getShip(ship).type.rotation === 'H') {
        statusReport(infoBox, 4);
      } else {
        statusReport(infoBox, 3);
      }
    });
    view.left.forEach((cell) => cell.addEventListener('click', () => {
      if (!ship) return 'Please choose a ship';
      player.board.placeShip(ship, JSON.parse(cell.attributes[1].value));
      shipPlaced(player);
      statusReport(infoBox, 5);
      if (player.board.inGame.length === 5
        && opp.board.inGame.length < 5) {
        // removeListeners(view.left);
        opp.ranShip();
        statusReport(infoBox, 6);
        attackPhase(right, player, opp);
      }
    }));
  };

  const clearDisplay = (...grids) => {
    [...grids].forEach((side) => {
      while (side.firstChild) {
        side.removeChild(side.lastChild);
      }
    });
    gameboards.forEach((side) => makeGrid(side.id, side));
    left = document.querySelectorAll('.ships');
    right = document.querySelectorAll('.attacks');
  };

  return {
    leftParent,
    rightParent,
    left,
    right,
    harborBtns,
    rotateBtn,
    restartBtn,
    menuSection,
    clearDisplay,
    placePhase,
    removeListeners,
  };
})([document.getElementById('ships'), document.getElementById('attacks')]);

module.exports = viewer;


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const player = __webpack_require__(/*! ./player */ "./src/player.js");
const viewer = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
// MVC Controller
const game = ((model, view) => {
  const init = (() => {
    const human = model('human');
    const roboto = model('roboto');
    const display = view;
    human.opp = roboto;
    roboto.opp = human;
    display.placePhase(display, human, roboto);

    return {
      human,
      roboto,
      display,
    };
  })(model, view);
  init.display.restartBtn.addEventListener('click', () => location.reload());
})(player, viewer);

module.exports = game;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipFac = __webpack_require__(/*! ./ship */ "./src/ship.js");
// MVC Model
const gameboard = () => {
// Arrays for tracking position and game progress
  const inGame = []; // Stores placed ships
  const occupied = []; // Stores all coordinates of ship positions
  const bombed = []; // Stores all tries
  const destroyed = []; // Stores all destroyed ships
  const onTarget = [];
  const ocean = [];

  const makeWater = () => { // Creates the 10 x 10 coordinate grid
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        ocean.push([x, y]);
      }
    }
    return ocean;
  };
  makeWater();

  // Harbor stores ship types
  const harbor = [
    {
      name: 'destroyer',
      type: shipFac('destroyer', 2),
    },
    {
      name: 'submarine',
      type: shipFac('submarine', 3),
    },
    {
      name: 'cruiser',
      type: shipFac('cruiser', 3),
    },
    {
      name: 'battleship',
      type: shipFac('battleship', 4),
    },
    {
      name: 'carrier',
      type: shipFac('carrier', 5),
    },
  ];

  // Checks if last occupied cell of ship is inbounds
  const isInbounds = (pos) => ocean.some((coor) => coor.join() === pos.join());
  // Goes through occupied positions to prevent overlapping
  const isOverlap = (array) => occupied.some((coor) => array.some((pos) => pos.join() === coor.join()));
  // Goes through inGame array to prevent duplicate ship types
  const isPlaced = (ship) => inGame.some((vessel) => ship.name === vessel.name);
  // Gets ship from harbor array
  const getShip = (name) => harbor.find((ship) => ship.name === name);
  // Creates the ship's path
  const makePath = (size, rot, coor) => {
    const path = [];
    if (rot !== 'H') {
      for (let y = 0; y < size; y += 1) {
        path.push([coor[0], coor[1] - y]);
      }
    } else {
      for (let x = 0; x < size; x += 1) {
        path.push([coor[0] + x, coor[1]]);
      }
    }
    return path;
  };

  // Check valid ship placement
  let position = null; // Variable to store ship's path
  const isValPos = (ship, coor) => { // Combines all validity tests
    position = makePath(ship.type.size, ship.type.rotation, coor); // Create the possible path
    return (isInbounds(position[position.length - 1]) && !isOverlap(position) && !isPlaced(ship));
  };

  const placeShip = (shipName, coor) => {
    const ship = getShip(shipName);
    if (isValPos(ship, coor)) { // Check placement validity
      position.forEach((pos) => ship.type.position.push(pos));
      position.forEach((pos) => occupied.push(pos));
      inGame.push(ship);
    } else {
      position = null; // Reset the position array
      // Report error if(isOverlap(position)) errorHandler(1)
    }
    return inGame;
  };

  // Checks valid attack
  const known = (coor) => bombed.some((pos) => pos.join() === coor.join());
  // Checks attack success
  const bullseye = (coor) => occupied.some((pos) => pos.join() === coor.join());
  // Finds the attacked ship
  const findShip = (coor) => inGame.filter((item) => item.type.position.find((pos) => pos.join() === coor.join()))[0];
  // Checks destroyed ship
  const isDestroyed = (ship) => ship.type.isSunk();
  // Store all unbombed cells
  const unknown = () => ocean.filter((item) => bombed.every((pos) => item.join() !== pos.join()));
  // Creates a attack queue for the cpu player
  const Q = [];
  const nextAttacks = (arr) => {
    const up = [arr[0], arr[1] + 1];
    const right = [arr[0] + 1, arr[1]];
    const down = [arr[0], arr[1] - 1];
    const left = [arr[0] - 1, arr[1]];
    const directions = [up, right, down, left];
    const isIn = directions.filter((item) => isInbounds(item));
    const isFree = isIn.filter((pos) => !known(pos));
    const notInQ = isFree.filter((loc) => Q.every((el) => el.join() !== loc.join()));
    notInQ.forEach((coor) => Q.push(coor));
  };
  // Places attacks
  const fire = (coor) => {
    if (known(coor)) return null;
    if (bullseye(coor)) {
      const target = findShip(coor);
      target.type.isHit();
      nextAttacks(coor);
      onTarget.push(coor);
      // console.log(`hit ${coor}`);
      if (isDestroyed(target)) {
        destroyed.push(target);
        // console.log(destroyed);
      } // Report success
      bombed.push(coor);
    } else if (!known(coor) && !bullseye(coor)) {
      // Report miss
      bombed.push(coor);
      // console.log('MISS');
    }
    return bombed;
  };

  const allInPlace = () => (inGame.length === 5);

  return {
    ocean,
    occupied,
    harbor,
    inGame,
    bombed,
    destroyed,
    Q,
    onTarget,
    isInbounds,
    isOverlap,
    isPlaced,
    getShip,
    isValPos,
    placeShip,
    known,
    fire,
    allInPlace,
    unknown,
  };
};

module.exports = gameboard;


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((module) => {

const elementMaker = (nam, clas, content, id) => {
  const element = document.createElement(nam);
  element.classList.add(clas);
  if (id === null || content === null) return element;
  if (content !== null) element.textContent = content;
  if (id !== null) element.setAttribute('id', id);
  return element;
};

module.exports = elementMaker;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const player = (id, opp) => ({
  id,
  opp,
  board: gameboard(),
  ranCoor() {
    const ranNum = (min = 0, max = 10) => {
      const int = Math.floor(Math.random() * (max - min) + min);
      return int;
    };
    const x = ranNum();
    const y = ranNum();
    return [x, y];
  },
  ranShip() {
    while (this.board.inGame.length < this.board.harbor.length) {
      this.board.harbor[2].type.rotate();
      this.board.harbor.forEach((ship) => {
        this.board.placeShip(ship.name, this.ranCoor());
      });
    }
  },
  ranFire() {
    let target = this.ranCoor();
    if (this.opp.board.Q.length > 0) {
      const next = this.opp.board.Q.shift();
      this.opp.board.fire(next);
    } else if (this.opp.board.bombed.length < 1) {
      this.opp.board.fire(target);
    } else {
      target = this.opp.board.unknown()[Math.floor(Math.random() * this.opp.board.unknown().length)];
      this.opp.board.fire(target);
    }
    // console.log(opp.board.bombed[opp.board.bombed.length - 1]);
  },

});

module.exports = player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const shipFac = (name, size) => ({
  name,
  size,
  damage: 0,
  rotation: 'H',
  position: [],
  isHit() {
    this.damage += 1;
    return this.damage;
  },
  rotate() {
    if (this.rotation !== 'V') {
      this.rotation = 'V';
    } else {
      this.rotation = 'H';
    }
    return this.rotation;
  },
  isSunk() {
    if (this.damage === this.size) {
      return true;
    } return false;
  },
});

module.exports = shipFac;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQ3BOQSxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsZUFBZSxtQkFBTyxDQUFDLHVEQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDckJBLGdCQUFnQixtQkFBTyxDQUFDLDZCQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQyxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNUQSxrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3N0eWxlLmNzcz9mNjk2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogIzQyNmI2OTtcXG4gICAgLS1kYXJrZXItc2hhZGU6ICM0OTM4NDM7XFxuICAgIC0tZGFya2VzdC1zaGFkZTogIzEyMTExMztcXG4gICAgLS1saWdodGVyLXNoYWRlOiAjRTRFNkMzO1xcbiAgICAtLWxpZ2h0ZXN0LXNoYWRlOiAjRjdGN0YyO1xcbiAgICAtLWdvdC1oaXQ6ICNDQzI5MzY7XFxuICAgIC0td2hpdGU6ICNGRkY7XFxufVxcblxcbmh0bWwsIGJvZHksXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuMjVmciAyZnIgLjI1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjFmciAyZnIgMWZyIDJmciAuMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCIgLiBsZWZ0Qm9hcmQgY29udHJvbHMgcmlnaHRCb2FyZCAuXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWdvdC1oaXQpIDM1JSwgdmFyKC0tbWFpbi1jb2xvcikgNjUlLCB2YXIoLS1saWdodGVyLXNoYWRlKSAxMDAlKTsgXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1zaGFkZSk7XFxufVxcblxcbi5tZW51ID4gKiB7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn0gXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RDdCA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuLmZvb3RDdCA+IGE6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5zaGlwcyB7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLCAuZ2FtZWJvYXJkID4gLnNoaXBzIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0Qm9hcmQ7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgZ3JpZC1hcmVhOiByaWdodEJvYXJkO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uc2hpcHMsIC5hdHRhY2tze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXNoYWRlKTtcXG59XFxuXFxuLnNoaXBzLCAuYXR0YWNrcywgLnBsYWNlZCwgLmJvbWJlZCwgLmhpdCB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwczpob3ZlciwgLmF0dGFja3M6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwczphY3RpdmUsIC5hdHRhY2tzOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uYm9tYmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb3QtaGl0KTtcXG59XFxuXFxuLmxlZnRDZWxsUGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLXNoYWRlKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNjb3JlIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEJ0biwgLnJlc2V0LCAucm90YXRlLCAucmFuZG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDY2JTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLnNoaXBCdG46aG92ZXIsIC5yZXNldDpob3ZlciwgLnJvdGF0ZTpob3ZlciwgLnJhbmRvbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxufVxcblxcbi5zaGlwQnRuOmFjdGl2ZSwgLnJlc2V0OmFjdGl2ZSwgLnJvdGF0ZTphY3RpdmUsIC5yYW5kb206YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uaGFyYm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFNBQVM7SUFDVCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDRDQUE0QztJQUM1Qzs7O3dDQUdvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiAjNDI2YjY5O1xcbiAgICAtLWRhcmtlci1zaGFkZTogIzQ5Mzg0MztcXG4gICAgLS1kYXJrZXN0LXNoYWRlOiAjMTIxMTEzO1xcbiAgICAtLWxpZ2h0ZXItc2hhZGU6ICNFNEU2QzM7XFxuICAgIC0tbGlnaHRlc3Qtc2hhZGU6ICNGN0Y3RjI7XFxuICAgIC0tZ290LWhpdDogI0NDMjkzNjtcXG4gICAgLS13aGl0ZTogI0ZGRjtcXG59XFxuXFxuaHRtbCwgYm9keSxcXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC4yNWZyIDJmciAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMWZyIDJmciAxZnIgMmZyIC4xZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIiAuIGxlZnRCb2FyZCBjb250cm9scyByaWdodEJvYXJkIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tZ290LWhpdCkgMzUlLCB2YXIoLS1tYWluLWNvbG9yKSA2NSUsIHZhcigtLWxpZ2h0ZXItc2hhZGUpIDEwMCUpOyBcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuXFxuLm1lbnUgPiAqIHtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxufSBcXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdEN0ID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uZm9vdEN0ID4gYTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbiNzaGlwcywgI2F0dGFja3Mge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpcmVjdGlvbjogcnRsO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLnNoaXBzIHtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbi5nYW1lYm9hcmQsIC5nYW1lYm9hcmQgPiAuc2hpcHMge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4jc2hpcHMge1xcbiAgICBncmlkLWFyZWE6IGxlZnRCb2FyZDtcXG59XFxuXFxuI2F0dGFja3Mge1xcbiAgICBncmlkLWFyZWE6IHJpZ2h0Qm9hcmQ7XFxufVxcblxcbiNzaGlwcywgI2F0dGFja3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5zaGlwcywgLmF0dGFja3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItc2hhZGUpO1xcbn1cXG5cXG4uc2hpcHMsIC5hdHRhY2tzLCAucGxhY2VkLCAuYm9tYmVkLCAuaGl0IHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnNoaXBzOmhvdmVyLCAuYXR0YWNrczpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXBzOmFjdGl2ZSwgLmF0dGFja3M6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxufVxcblxcbi5ib21iZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvdC1oaXQpO1xcbn1cXG5cXG4ubGVmdENlbGxQbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItc2hhZGUpO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgbWluLXdpZHRoOiAyNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwQnRuLCAucmVzZXQsIC5yb3RhdGUsIC5yYW5kb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogNjYlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uc2hpcEJ0bjpob3ZlciwgLnJlc2V0OmhvdmVyLCAucm90YXRlOmhvdmVyLCAucmFuZG9tOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuLnNoaXBCdG46YWN0aXZlLCAucmVzZXQ6YWN0aXZlLCAucm90YXRlOmFjdGl2ZSwgLnJhbmRvbTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1zaGFkZSk7XFxufVxcblxcbi5oYXJib3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgZ2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuXG5nYW1lO1xuIiwiY29uc3QgZ2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcbmNvbnN0IGVsZW1lbnRNYWtlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG4vLyBNVkMgVmlld1xuY29uc3Qgdmlld2VyID0gKChnYW1lYm9hcmRzKSA9PiB7XG4gIC8vIENyZWF0ZXMgbWVudSBzZWN0aW9uIGluZm8gYm94IGFuZCBidXR0b25zXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignZGl2JywgJ2luZm8nLCAnVGhpcyBpcyB0aGUgZ2FtZSBpbmZvJywgJ2luZm8nKSk7XG4gIGdhbWVib2FyZCgpLmhhcmJvci5mb3JFYWNoKChzaGlwKSA9PiBtZW51U2VjdGlvbi5hcHBlbmQoZWxlbWVudE1ha2VyKCdidXR0b24nLCAnc2hpcEJ0bicsIHNoaXAubmFtZS50b1VwcGVyQ2FzZSgpLCBzaGlwLm5hbWUpKSk7XG4gIGNvbnN0IGhhcmJvckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcEJ0bicpO1xuICBjb25zdCBpbmZvQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignYnV0dG9uJywgJ3JvdGF0ZScsICdST1RBVEUnLCAncm90YXRlJykpO1xuICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2J1dHRvbicsICdyYW5kb20nLCAnUkFORE9NJywgJ3JhbmRvbScpKTtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpO1xuICBtZW51U2VjdGlvbi5hcHBlbmQoZWxlbWVudE1ha2VyKCdidXR0b24nLCAncmVzZXQnLCAnUkVTVEFSVCcsICdyZXN0YXJ0JykpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5cbiAgY29uc3QgbWFrZU1lbnUgPSAoKSA9PiB7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignZGl2JywgJ2luZm8nLCAnVGhpcyBpcyB0aGUgZ2FtZSBpbmZvJywgJ2luZm8nKSk7XG4gICAgZ2FtZWJvYXJkKCkuaGFyYm9yLmZvckVhY2goKHNoaXApID0+IG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2J1dHRvbicsICdzaGlwQnRuJywgc2hpcC5uYW1lLnRvVXBwZXJDYXNlKCksIHNoaXAubmFtZSkpKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmQoZWxlbWVudE1ha2VyKCdidXR0b24nLCAncmFuZG9tJywgJ1JBTkRPTScsICdyYW5kb20nKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignYnV0dG9uJywgJ3Jlc2V0JywgJ1JFU1RBUlQnLCAncmVzdGFydCcpKTtcbiAgfTtcblxuICAvLyBHcmlkIGZhY3RvcnlcbiAgY29uc3QgbWFrZUdyaWQgPSAoaWQsIHNpZGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoaWQpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGFjb29yZCcsIEpTT04uc3RyaW5naWZ5KGdhbWVib2FyZCgpLm9jZWFuW2ldKSk7XG4gICAgICBzaWRlLmFwcGVuZChjZWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZGU7XG4gIH07XG5cbiAgLy8gQ3JlYXRlcyBncmlkcyBmb3IgZWFjaCBzaWRlXG4gIGdhbWVib2FyZHMuZm9yRWFjaCgoc2lkZSkgPT4gbWFrZUdyaWQoc2lkZS5pZCwgc2lkZSkpO1xuXG4gIC8vIE5vZGVsaXN0cyBmb3IgZ3JpZHNcbiAgY29uc3QgbGVmdFBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwcycpO1xuICBjb25zdCByaWdodFBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tzJyk7XG4gIGxldCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBzJyk7XG4gIGxldCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRhY2tzJyk7XG5cbiAgLy8gQ2hhbmdlcyBncmlkcyBjb2xvciB1cG9uIGF0dGFjay9oaXRcbiAgY29uc3QgdHJhY2tBdHRhY2sgPSAoaW5wdXQsIGFycmF5KSA9PiB7IC8vIGlucHV0ID0gZGl2XG4gICAgaWYgKGFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXJyYXkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5hdHRyaWJ1dGVzWzFdLnZhbHVlID09PSBKU09OLnN0cmluZ2lmeShwb3MpKSB7XG4gICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib21iZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9tYmVkJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlcGxhY2VzIGNlbGxzIHdpdGggY29waWVzXG4gIGNvbnN0IHJlbW92ZUxpc3RlbmVycyA9IChncmlkKSA9PiB7XG4gICAgZ3JpZC5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlcGxhY2VXaXRoKG5vZGUuY2xvbmVOb2RlKHRydWUpKSk7XG4gIH07XG5cbiAgLy8gUmVwb3J0IGZ1bmN0aW9uIGRpc3BsYXlzIG1lc3NhZ2VzIGluIGluZm9Cb3ggZWxlbWVudFxuICBjb25zdCBzdGF0dXNSZXBvcnQgPSAoZWxlbWVudCwgc3RhdHVzKSA9PiB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgMTogZWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmVteSBkZXN0cm95ZWQgeW91ciBmbGVldCEnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogZWxlbWVudC50ZXh0Q29udGVudCA9ICdWaWN0b3J5ISBcXG4gV2UgZGVzdHJveWVkIG91ciBlbmVteSEnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogZWxlbWVudC50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OiBlbGVtZW50LnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTogZWxlbWVudC50ZXh0Q29udGVudCA9ICdOZXh0IFNoaXAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjogZWxlbWVudC50ZXh0Q29udGVudCA9ICdJdFxcJ3MgdGltZSB0byBhdHRhY2shJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBlbGVtZW50LnRleHRDb250ZW50ID0gJ1RoZSBlbmVteSBpcyBpbiBvdXIgd2F0ZXJzISBQbGFjZSB5b3VyIHNoaXBzISc7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdhbWUgb3ZlciBldmFsdWF0aW9uXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAocGx5LCBjcHUpID0+IHtcbiAgICBpZiAocGx5LmJvYXJkLmRlc3Ryb3llZC5sZW5ndGggPT09IDUpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycyhyaWdodCk7XG4gICAgICBzdGF0dXNSZXBvcnQoaW5mb0JveCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGlmIChjcHUuYm9hcmQuZGVzdHJveWVkLmxlbmd0aCA9PT0gNSkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKHJpZ2h0KTtcbiAgICAgIHN0YXR1c1JlcG9ydChpbmZvQm94LCAyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGZpbmREaXYgPSAodmFsdWUsIG5vZGVsaXN0KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGNvbnN0IGRpdiA9IFsuLi5ub2RlbGlzdF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmF0dHJpYnV0ZXNbMV0udmFsdWUgPT09IHRhcmdldClbMF07XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcbiAgLy8gU2V0cyBjcHUgYXR0YWNrXG4gIGNvbnN0IGNwdUF0dGFjayA9IChwbGF5ZXIsIG9wcCkgPT4ge1xuICAgIG9wcC5yYW5GaXJlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IHBsYXllci5ib2FyZC5ib21iZWRbcGxheWVyLmJvYXJkLmJvbWJlZC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBkaXYgPSBmaW5kRGl2KGN1cnJlbnQsIGxlZnQpO1xuICAgIHRyYWNrQXR0YWNrKGRpdiwgcGxheWVyLmJvYXJkLm9uVGFyZ2V0KTtcbiAgfTtcblxuICAvLyBJbml0aWF0ZXMgYXR0YWNrcyBvbiBjcHUgZ3JpZFxuICBjb25zdCBhdHRhY2tQaGFzZSA9IChncmlkLCBwbGF5ZXIsIG9wcCkgPT4ge1xuICAgIGdyaWQuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IEpTT04ucGFyc2UoY2VsbC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgIG9wcC5ib2FyZC5maXJlKHRhcmdldCk7XG4gICAgICB0cmFja0F0dGFjayhjZWxsLCBvcHAuYm9hcmQub25UYXJnZXQpO1xuICAgICAgaWYgKGlzR2FtZU92ZXIocGxheWVyLCBvcHApKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHQU1FIE9WRVInKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3B1QXR0YWNrKHBsYXllciwgb3BwKTtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIocGxheWVyLCBvcHApKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0dBTUUgT1ZFUicpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCA0NTApO1xuICAgIH0pKTtcbiAgfTtcblxuICAvLyBDaGFuZ2UgY2VsbCBjb2xvcmluZ1xuICBjb25zdCBzaGlwUGxhY2VkID0gKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5ib2FyZC5pbkdhbWUuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcFBvcyA9IHNoaXAudHlwZS5wb3NpdGlvbjtcblxuICAgICAgWy4uLnNoaXBQb3NdLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgIFsuLi5sZWZ0XS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuYXR0cmlidXRlc1sxXS52YWx1ZSA9PT0gSlNPTi5zdHJpbmdpZnkocG9pbnQpKSB7XG4gICAgICAgICAgICAvLyBkYXRhLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGRhdGEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwbGFjZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdGVtcFJhbiA9IChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIucmFuU2hpcCgpO1xuICAgIHNoaXBQbGFjZWQocGxheWVyKTtcbiAgICBwbGF5ZXIub3BwLnJhblNoaXAoKTtcbiAgICBzdGF0dXNSZXBvcnQoaW5mb0JveCwgNik7XG4gICAgYXR0YWNrUGhhc2UocmlnaHQsIHBsYXllciwgcGxheWVyLm9wcCk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQaGFzZSA9ICh2aWV3LCBwbGF5ZXIsIG9wcCkgPT4ge1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRlbXBSYW4ocGxheWVyKSk7XG4gICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIG51bGwpO1xuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICB2aWV3LmhhcmJvckJ0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaGlwID0gYnRuLmlkO1xuICAgIH0pKTtcbiAgICB2aWV3LnJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm47XG4gICAgICBwbGF5ZXIuYm9hcmQuZ2V0U2hpcChzaGlwKS50eXBlLnJvdGF0ZSgpO1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5nZXRTaGlwKHNoaXApLnR5cGUucm90YXRpb24gPT09ICdIJykge1xuICAgICAgICBzdGF0dXNSZXBvcnQoaW5mb0JveCwgNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXNSZXBvcnQoaW5mb0JveCwgMyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmlldy5sZWZ0LmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIXNoaXApIHJldHVybiAnUGxlYXNlIGNob29zZSBhIHNoaXAnO1xuICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBKU09OLnBhcnNlKGNlbGwuYXR0cmlidXRlc1sxXS52YWx1ZSkpO1xuICAgICAgc2hpcFBsYWNlZChwbGF5ZXIpO1xuICAgICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDUpO1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5pbkdhbWUubGVuZ3RoID09PSA1XG4gICAgICAgICYmIG9wcC5ib2FyZC5pbkdhbWUubGVuZ3RoIDwgNSkge1xuICAgICAgICAvLyByZW1vdmVMaXN0ZW5lcnModmlldy5sZWZ0KTtcbiAgICAgICAgb3BwLnJhblNoaXAoKTtcbiAgICAgICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDYpO1xuICAgICAgICBhdHRhY2tQaGFzZShyaWdodCwgcGxheWVyLCBvcHApO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckRpc3BsYXkgPSAoLi4uZ3JpZHMpID0+IHtcbiAgICBbLi4uZ3JpZHNdLmZvckVhY2goKHNpZGUpID0+IHtcbiAgICAgIHdoaWxlIChzaWRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZS5yZW1vdmVDaGlsZChzaWRlLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZ2FtZWJvYXJkcy5mb3JFYWNoKChzaWRlKSA9PiBtYWtlR3JpZChzaWRlLmlkLCBzaWRlKSk7XG4gICAgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwcycpO1xuICAgIHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFja3MnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlZnRQYXJlbnQsXG4gICAgcmlnaHRQYXJlbnQsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBoYXJib3JCdG5zLFxuICAgIHJvdGF0ZUJ0bixcbiAgICByZXN0YXJ0QnRuLFxuICAgIG1lbnVTZWN0aW9uLFxuICAgIGNsZWFyRGlzcGxheSxcbiAgICBwbGFjZVBoYXNlLFxuICAgIHJlbW92ZUxpc3RlbmVycyxcbiAgfTtcbn0pKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHMnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja3MnKV0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpZXdlcjtcbiIsImNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCB2aWV3ZXIgPSByZXF1aXJlKCcuL2Rpc3BsYXlDb250cm9sbGVyJyk7XG4vLyBNVkMgQ29udHJvbGxlclxuY29uc3QgZ2FtZSA9ICgobW9kZWwsIHZpZXcpID0+IHtcbiAgY29uc3QgaW5pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgaHVtYW4gPSBtb2RlbCgnaHVtYW4nKTtcbiAgICBjb25zdCByb2JvdG8gPSBtb2RlbCgncm9ib3RvJyk7XG4gICAgY29uc3QgZGlzcGxheSA9IHZpZXc7XG4gICAgaHVtYW4ub3BwID0gcm9ib3RvO1xuICAgIHJvYm90by5vcHAgPSBodW1hbjtcbiAgICBkaXNwbGF5LnBsYWNlUGhhc2UoZGlzcGxheSwgaHVtYW4sIHJvYm90byk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaHVtYW4sXG4gICAgICByb2JvdG8sXG4gICAgICBkaXNwbGF5LFxuICAgIH07XG4gIH0pKG1vZGVsLCB2aWV3KTtcbiAgaW5pdC5kaXNwbGF5LnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG59KShwbGF5ZXIsIHZpZXdlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZTtcbiIsImNvbnN0IHNoaXBGYWMgPSByZXF1aXJlKCcuL3NoaXAnKTtcbi8vIE1WQyBNb2RlbFxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuLy8gQXJyYXlzIGZvciB0cmFja2luZyBwb3NpdGlvbiBhbmQgZ2FtZSBwcm9ncmVzc1xuICBjb25zdCBpbkdhbWUgPSBbXTsgLy8gU3RvcmVzIHBsYWNlZCBzaGlwc1xuICBjb25zdCBvY2N1cGllZCA9IFtdOyAvLyBTdG9yZXMgYWxsIGNvb3JkaW5hdGVzIG9mIHNoaXAgcG9zaXRpb25zXG4gIGNvbnN0IGJvbWJlZCA9IFtdOyAvLyBTdG9yZXMgYWxsIHRyaWVzXG4gIGNvbnN0IGRlc3Ryb3llZCA9IFtdOyAvLyBTdG9yZXMgYWxsIGRlc3Ryb3llZCBzaGlwc1xuICBjb25zdCBvblRhcmdldCA9IFtdO1xuICBjb25zdCBvY2VhbiA9IFtdO1xuXG4gIGNvbnN0IG1ha2VXYXRlciA9ICgpID0+IHsgLy8gQ3JlYXRlcyB0aGUgMTAgeCAxMCBjb29yZGluYXRlIGdyaWRcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgICBvY2Vhbi5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvY2VhbjtcbiAgfTtcbiAgbWFrZVdhdGVyKCk7XG5cbiAgLy8gSGFyYm9yIHN0b3JlcyBzaGlwIHR5cGVzXG4gIGNvbnN0IGhhcmJvciA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZGVzdHJveWVyJyxcbiAgICAgIHR5cGU6IHNoaXBGYWMoJ2Rlc3Ryb3llcicsIDIpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgICB0eXBlOiBzaGlwRmFjKCdzdWJtYXJpbmUnLCAzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjcnVpc2VyJyxcbiAgICAgIHR5cGU6IHNoaXBGYWMoJ2NydWlzZXInLCAzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICAgIHR5cGU6IHNoaXBGYWMoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICAgIHR5cGU6IHNoaXBGYWMoJ2NhcnJpZXInLCA1KSxcbiAgICB9LFxuICBdO1xuXG4gIC8vIENoZWNrcyBpZiBsYXN0IG9jY3VwaWVkIGNlbGwgb2Ygc2hpcCBpcyBpbmJvdW5kc1xuICBjb25zdCBpc0luYm91bmRzID0gKHBvcykgPT4gb2NlYW4uc29tZSgoY29vcikgPT4gY29vci5qb2luKCkgPT09IHBvcy5qb2luKCkpO1xuICAvLyBHb2VzIHRocm91Z2ggb2NjdXBpZWQgcG9zaXRpb25zIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmdcbiAgY29uc3QgaXNPdmVybGFwID0gKGFycmF5KSA9PiBvY2N1cGllZC5zb21lKChjb29yKSA9PiBhcnJheS5zb21lKChwb3MpID0+IHBvcy5qb2luKCkgPT09IGNvb3Iuam9pbigpKSk7XG4gIC8vIEdvZXMgdGhyb3VnaCBpbkdhbWUgYXJyYXkgdG8gcHJldmVudCBkdXBsaWNhdGUgc2hpcCB0eXBlc1xuICBjb25zdCBpc1BsYWNlZCA9IChzaGlwKSA9PiBpbkdhbWUuc29tZSgodmVzc2VsKSA9PiBzaGlwLm5hbWUgPT09IHZlc3NlbC5uYW1lKTtcbiAgLy8gR2V0cyBzaGlwIGZyb20gaGFyYm9yIGFycmF5XG4gIGNvbnN0IGdldFNoaXAgPSAobmFtZSkgPT4gaGFyYm9yLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gbmFtZSk7XG4gIC8vIENyZWF0ZXMgdGhlIHNoaXAncyBwYXRoXG4gIGNvbnN0IG1ha2VQYXRoID0gKHNpemUsIHJvdCwgY29vcikgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICBpZiAocm90ICE9PSAnSCcpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSArPSAxKSB7XG4gICAgICAgIHBhdGgucHVzaChbY29vclswXSwgY29vclsxXSAtIHldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplOyB4ICs9IDEpIHtcbiAgICAgICAgcGF0aC5wdXNoKFtjb29yWzBdICsgeCwgY29vclsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICAvLyBDaGVjayB2YWxpZCBzaGlwIHBsYWNlbWVudFxuICBsZXQgcG9zaXRpb24gPSBudWxsOyAvLyBWYXJpYWJsZSB0byBzdG9yZSBzaGlwJ3MgcGF0aFxuICBjb25zdCBpc1ZhbFBvcyA9IChzaGlwLCBjb29yKSA9PiB7IC8vIENvbWJpbmVzIGFsbCB2YWxpZGl0eSB0ZXN0c1xuICAgIHBvc2l0aW9uID0gbWFrZVBhdGgoc2hpcC50eXBlLnNpemUsIHNoaXAudHlwZS5yb3RhdGlvbiwgY29vcik7IC8vIENyZWF0ZSB0aGUgcG9zc2libGUgcGF0aFxuICAgIHJldHVybiAoaXNJbmJvdW5kcyhwb3NpdGlvbltwb3NpdGlvbi5sZW5ndGggLSAxXSkgJiYgIWlzT3ZlcmxhcChwb3NpdGlvbikgJiYgIWlzUGxhY2VkKHNoaXApKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE5hbWUsIGNvb3IpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcChzaGlwTmFtZSk7XG4gICAgaWYgKGlzVmFsUG9zKHNoaXAsIGNvb3IpKSB7IC8vIENoZWNrIHBsYWNlbWVudCB2YWxpZGl0eVxuICAgICAgcG9zaXRpb24uZm9yRWFjaCgocG9zKSA9PiBzaGlwLnR5cGUucG9zaXRpb24ucHVzaChwb3MpKTtcbiAgICAgIHBvc2l0aW9uLmZvckVhY2goKHBvcykgPT4gb2NjdXBpZWQucHVzaChwb3MpKTtcbiAgICAgIGluR2FtZS5wdXNoKHNoaXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvbiA9IG51bGw7IC8vIFJlc2V0IHRoZSBwb3NpdGlvbiBhcnJheVxuICAgICAgLy8gUmVwb3J0IGVycm9yIGlmKGlzT3ZlcmxhcChwb3NpdGlvbikpIGVycm9ySGFuZGxlcigxKVxuICAgIH1cbiAgICByZXR1cm4gaW5HYW1lO1xuICB9O1xuXG4gIC8vIENoZWNrcyB2YWxpZCBhdHRhY2tcbiAgY29uc3Qga25vd24gPSAoY29vcikgPT4gYm9tYmVkLnNvbWUoKHBvcykgPT4gcG9zLmpvaW4oKSA9PT0gY29vci5qb2luKCkpO1xuICAvLyBDaGVja3MgYXR0YWNrIHN1Y2Nlc3NcbiAgY29uc3QgYnVsbHNleWUgPSAoY29vcikgPT4gb2NjdXBpZWQuc29tZSgocG9zKSA9PiBwb3Muam9pbigpID09PSBjb29yLmpvaW4oKSk7XG4gIC8vIEZpbmRzIHRoZSBhdHRhY2tlZCBzaGlwXG4gIGNvbnN0IGZpbmRTaGlwID0gKGNvb3IpID0+IGluR2FtZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZS5wb3NpdGlvbi5maW5kKChwb3MpID0+IHBvcy5qb2luKCkgPT09IGNvb3Iuam9pbigpKSlbMF07XG4gIC8vIENoZWNrcyBkZXN0cm95ZWQgc2hpcFxuICBjb25zdCBpc0Rlc3Ryb3llZCA9IChzaGlwKSA9PiBzaGlwLnR5cGUuaXNTdW5rKCk7XG4gIC8vIFN0b3JlIGFsbCB1bmJvbWJlZCBjZWxsc1xuICBjb25zdCB1bmtub3duID0gKCkgPT4gb2NlYW4uZmlsdGVyKChpdGVtKSA9PiBib21iZWQuZXZlcnkoKHBvcykgPT4gaXRlbS5qb2luKCkgIT09IHBvcy5qb2luKCkpKTtcbiAgLy8gQ3JlYXRlcyBhIGF0dGFjayBxdWV1ZSBmb3IgdGhlIGNwdSBwbGF5ZXJcbiAgY29uc3QgUSA9IFtdO1xuICBjb25zdCBuZXh0QXR0YWNrcyA9IChhcnIpID0+IHtcbiAgICBjb25zdCB1cCA9IFthcnJbMF0sIGFyclsxXSArIDFdO1xuICAgIGNvbnN0IHJpZ2h0ID0gW2FyclswXSArIDEsIGFyclsxXV07XG4gICAgY29uc3QgZG93biA9IFthcnJbMF0sIGFyclsxXSAtIDFdO1xuICAgIGNvbnN0IGxlZnQgPSBbYXJyWzBdIC0gMSwgYXJyWzFdXTtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW3VwLCByaWdodCwgZG93biwgbGVmdF07XG4gICAgY29uc3QgaXNJbiA9IGRpcmVjdGlvbnMuZmlsdGVyKChpdGVtKSA9PiBpc0luYm91bmRzKGl0ZW0pKTtcbiAgICBjb25zdCBpc0ZyZWUgPSBpc0luLmZpbHRlcigocG9zKSA9PiAha25vd24ocG9zKSk7XG4gICAgY29uc3Qgbm90SW5RID0gaXNGcmVlLmZpbHRlcigobG9jKSA9PiBRLmV2ZXJ5KChlbCkgPT4gZWwuam9pbigpICE9PSBsb2Muam9pbigpKSk7XG4gICAgbm90SW5RLmZvckVhY2goKGNvb3IpID0+IFEucHVzaChjb29yKSk7XG4gIH07XG4gIC8vIFBsYWNlcyBhdHRhY2tzXG4gIGNvbnN0IGZpcmUgPSAoY29vcikgPT4ge1xuICAgIGlmIChrbm93bihjb29yKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGJ1bGxzZXllKGNvb3IpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBmaW5kU2hpcChjb29yKTtcbiAgICAgIHRhcmdldC50eXBlLmlzSGl0KCk7XG4gICAgICBuZXh0QXR0YWNrcyhjb29yKTtcbiAgICAgIG9uVGFyZ2V0LnB1c2goY29vcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgaGl0ICR7Y29vcn1gKTtcbiAgICAgIGlmIChpc0Rlc3Ryb3llZCh0YXJnZXQpKSB7XG4gICAgICAgIGRlc3Ryb3llZC5wdXNoKHRhcmdldCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlc3Ryb3llZCk7XG4gICAgICB9IC8vIFJlcG9ydCBzdWNjZXNzXG4gICAgICBib21iZWQucHVzaChjb29yKTtcbiAgICB9IGVsc2UgaWYgKCFrbm93bihjb29yKSAmJiAhYnVsbHNleWUoY29vcikpIHtcbiAgICAgIC8vIFJlcG9ydCBtaXNzXG4gICAgICBib21iZWQucHVzaChjb29yKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdNSVNTJyk7XG4gICAgfVxuICAgIHJldHVybiBib21iZWQ7XG4gIH07XG5cbiAgY29uc3QgYWxsSW5QbGFjZSA9ICgpID0+IChpbkdhbWUubGVuZ3RoID09PSA1KTtcblxuICByZXR1cm4ge1xuICAgIG9jZWFuLFxuICAgIG9jY3VwaWVkLFxuICAgIGhhcmJvcixcbiAgICBpbkdhbWUsXG4gICAgYm9tYmVkLFxuICAgIGRlc3Ryb3llZCxcbiAgICBRLFxuICAgIG9uVGFyZ2V0LFxuICAgIGlzSW5ib3VuZHMsXG4gICAgaXNPdmVybGFwLFxuICAgIGlzUGxhY2VkLFxuICAgIGdldFNoaXAsXG4gICAgaXNWYWxQb3MsXG4gICAgcGxhY2VTaGlwLFxuICAgIGtub3duLFxuICAgIGZpcmUsXG4gICAgYWxsSW5QbGFjZSxcbiAgICB1bmtub3duLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7XG4iLCJjb25zdCBlbGVtZW50TWFrZXIgPSAobmFtLCBjbGFzLCBjb250ZW50LCBpZCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW0pO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhcyk7XG4gIGlmIChpZCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSBudWxsKSByZXR1cm4gZWxlbWVudDtcbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICBpZiAoaWQgIT09IG51bGwpIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRNYWtlcjtcbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllciA9IChpZCwgb3BwKSA9PiAoe1xuICBpZCxcbiAgb3BwLFxuICBib2FyZDogZ2FtZWJvYXJkKCksXG4gIHJhbkNvb3IoKSB7XG4gICAgY29uc3QgcmFuTnVtID0gKG1pbiA9IDAsIG1heCA9IDEwKSA9PiB7XG4gICAgICBjb25zdCBpbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG4gICAgICByZXR1cm4gaW50O1xuICAgIH07XG4gICAgY29uc3QgeCA9IHJhbk51bSgpO1xuICAgIGNvbnN0IHkgPSByYW5OdW0oKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9LFxuICByYW5TaGlwKCkge1xuICAgIHdoaWxlICh0aGlzLmJvYXJkLmluR2FtZS5sZW5ndGggPCB0aGlzLmJvYXJkLmhhcmJvci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYm9hcmQuaGFyYm9yWzJdLnR5cGUucm90YXRlKCk7XG4gICAgICB0aGlzLmJvYXJkLmhhcmJvci5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgdGhpcy5yYW5Db29yKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICByYW5GaXJlKCkge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnJhbkNvb3IoKTtcbiAgICBpZiAodGhpcy5vcHAuYm9hcmQuUS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy5vcHAuYm9hcmQuUS5zaGlmdCgpO1xuICAgICAgdGhpcy5vcHAuYm9hcmQuZmlyZShuZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3BwLmJvYXJkLmJvbWJlZC5sZW5ndGggPCAxKSB7XG4gICAgICB0aGlzLm9wcC5ib2FyZC5maXJlKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldCA9IHRoaXMub3BwLmJvYXJkLnVua25vd24oKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9wcC5ib2FyZC51bmtub3duKCkubGVuZ3RoKV07XG4gICAgICB0aGlzLm9wcC5ib2FyZC5maXJlKHRhcmdldCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKG9wcC5ib2FyZC5ib21iZWRbb3BwLmJvYXJkLmJvbWJlZC5sZW5ndGggLSAxXSk7XG4gIH0sXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IHNoaXBGYWMgPSAobmFtZSwgc2l6ZSkgPT4gKHtcbiAgbmFtZSxcbiAgc2l6ZSxcbiAgZGFtYWdlOiAwLFxuICByb3RhdGlvbjogJ0gnLFxuICBwb3NpdGlvbjogW10sXG4gIGlzSGl0KCkge1xuICAgIHRoaXMuZGFtYWdlICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICB9LFxuICByb3RhdGUoKSB7XG4gICAgaWYgKHRoaXMucm90YXRpb24gIT09ICdWJykge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9ICdWJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9ICdIJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb247XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5kYW1hZ2UgPT09IHRoaXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSByZXR1cm4gZmFsc2U7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwRmFjO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9