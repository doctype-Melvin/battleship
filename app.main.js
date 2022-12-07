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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #426b69;\n    --darker-shade: #493843;\n    --darkest-shade: #121113;\n    --lighter-shade: #E4E6C3;\n    --lightest-shade: #F7F7F2;\n    --got-hit: #CC2936;\n    --white: #FFF;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: .25fr 2fr .25fr;\n    grid-template-columns: .1fr 2fr 1fr 2fr .1fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n    background: var(--darkest-shade);\n    background: linear-gradient(45deg, var(--main-color) 0%, var(--lighter-shade) 100%); \n}\n\n.header {\n    grid-area: header;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10px;\n    color: var(--lightest-shade);\n}\n.title {\n    text-shadow: 2px 2px 5px var(--darkest-shade);\n}\n.menu > * {\n    box-shadow: 2px 2px 4px var(--darkest-shade);\n}\n\n\n\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footCt > a {\n    text-decoration: none;\n    color: var(--darkest-shade);\n}\n\n.footCt > a:hover{\n    cursor: pointer;\n    color: var(--main-color);\n}\n\n#ships, #attacks {\n    height: 100%;\n    direction: rtl;\n}\n\n.gameboard > .ships {\n    direction: ltr;\n}\n\n.gameboard, .gameboard > .ships {\n    transform: rotate(180deg);\n}\n\n#ships {\n    grid-area: leftBoard;\n}\n\n#attacks {\n    grid-area: rightBoard;\n}\n\n#ships, #attacks {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.ships, .attacks{\n    background-color: var(--lighter-shade);\n}\n\n.ships, .attacks, .placed, .bombed, .hit {\n    margin: 2px;\n    border-radius: 2px;\n}\n\n.ships:hover, .attacks:hover {\n    cursor: pointer;\n}\n\n.ships:active, .attacks:active {\n    background-color: var(--lightest-shade);\n}\n\n.placed {\n    background-color: var(--darkest-shade);\n}\n\n.bombed {\n    background-color: var(--main-color);\n}\n\n.hit {\n    background-color: var(--got-hit);\n}\n\n.leftCellPlaced {\n    background-color: var(--darker-shade);\n}\n\n.menu {\n    grid-area: controls;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.score {\n    font-size: 1.15rem;\n}\n\n.info {\n    background-color: var(--lightest-shade);\n    padding: 5px;\n    margin: 0 15px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1.75rem;\n    min-height: 150px;\n    min-width: 260px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipBtn, .reset, .rotate, .random {\n    background-color: var(--main-color);\n    color: var(--white);\n    font-weight: 600;\n    border-radius: 5px;\n    width: 66%;\n    border: none;\n    padding: 5px 0;\n}\n\n.shipBtn:hover, .reset:hover, .rotate:hover, .random:hover {\n    cursor: pointer;\n    background-color: var(--darkest-shade);\n}\n\n.shipBtn:active, .reset:active, .rotate:active, .random:active {\n    background-color: var(--lightest-shade);\n}\n\n.harbor {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.ship {\n    margin: 5px 0;\n}\n\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,UAAU;IACV,SAAS;IACT,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,4CAA4C;IAC5C;;;wCAGoC;IACpC,gCAAgC;IAChC,mFAAmF;AACvF;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;AACA;IACI,6CAA6C;AACjD;AACA;IACI,4CAA4C;AAChD;;;;AAIA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --main-color: #426b69;\n    --darker-shade: #493843;\n    --darkest-shade: #121113;\n    --lighter-shade: #E4E6C3;\n    --lightest-shade: #F7F7F2;\n    --got-hit: #CC2936;\n    --white: #FFF;\n}\n\nhtml, body,\n.main {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: .25fr 2fr .25fr;\n    grid-template-columns: .1fr 2fr 1fr 2fr .1fr;\n    grid-template-areas: \n    \"header header header header header\"\n    \" . leftBoard controls rightBoard .\"\n    \"footer footer footer footer footer\";\n    background: var(--darkest-shade);\n    background: linear-gradient(45deg, var(--main-color) 0%, var(--lighter-shade) 100%); \n}\n\n.header {\n    grid-area: header;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10px;\n    color: var(--lightest-shade);\n}\n.title {\n    text-shadow: 2px 2px 5px var(--darkest-shade);\n}\n.menu > * {\n    box-shadow: 2px 2px 4px var(--darkest-shade);\n}\n\n\n\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footCt > a {\n    text-decoration: none;\n    color: var(--darkest-shade);\n}\n\n.footCt > a:hover{\n    cursor: pointer;\n    color: var(--main-color);\n}\n\n#ships, #attacks {\n    height: 100%;\n    direction: rtl;\n}\n\n.gameboard > .ships {\n    direction: ltr;\n}\n\n.gameboard, .gameboard > .ships {\n    transform: rotate(180deg);\n}\n\n#ships {\n    grid-area: leftBoard;\n}\n\n#attacks {\n    grid-area: rightBoard;\n}\n\n#ships, #attacks {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.ships, .attacks{\n    background-color: var(--lighter-shade);\n}\n\n.ships, .attacks, .placed, .bombed, .hit {\n    margin: 2px;\n    border-radius: 2px;\n}\n\n.ships:hover, .attacks:hover {\n    cursor: pointer;\n}\n\n.ships:active, .attacks:active {\n    background-color: var(--lightest-shade);\n}\n\n.placed {\n    background-color: var(--darkest-shade);\n}\n\n.bombed {\n    background-color: var(--main-color);\n}\n\n.hit {\n    background-color: var(--got-hit);\n}\n\n.leftCellPlaced {\n    background-color: var(--darker-shade);\n}\n\n.menu {\n    grid-area: controls;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.score {\n    font-size: 1.15rem;\n}\n\n.info {\n    background-color: var(--lightest-shade);\n    padding: 5px;\n    margin: 0 15px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1.75rem;\n    min-height: 150px;\n    min-width: 260px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.shipBtn, .reset, .rotate, .random {\n    background-color: var(--main-color);\n    color: var(--white);\n    font-weight: 600;\n    border-radius: 5px;\n    width: 66%;\n    border: none;\n    padding: 5px 0;\n}\n\n.shipBtn:hover, .reset:hover, .rotate:hover, .random:hover {\n    cursor: pointer;\n    background-color: var(--darkest-shade);\n}\n\n.shipBtn:active, .reset:active, .rotate:active, .random:active {\n    background-color: var(--lightest-shade);\n}\n\n.harbor {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.ship {\n    margin: 5px 0;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDcE5BLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsdURBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7QUNyQkEsZ0JBQWdCLG1CQUFPLENBQUMsNkJBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIscUNBQXFDO0FBQ3JDLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1RBLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNILENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3R5bGUuY3NzP2Y2OTYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiAjNDI2YjY5O1xcbiAgICAtLWRhcmtlci1zaGFkZTogIzQ5Mzg0MztcXG4gICAgLS1kYXJrZXN0LXNoYWRlOiAjMTIxMTEzO1xcbiAgICAtLWxpZ2h0ZXItc2hhZGU6ICNFNEU2QzM7XFxuICAgIC0tbGlnaHRlc3Qtc2hhZGU6ICNGN0Y3RjI7XFxuICAgIC0tZ290LWhpdDogI0NDMjkzNjtcXG4gICAgLS13aGl0ZTogI0ZGRjtcXG59XFxuXFxuaHRtbCwgYm9keSxcXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC4yNWZyIDJmciAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMWZyIDJmciAxZnIgMmZyIC4xZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIiAuIGxlZnRCb2FyZCBjb250cm9scyByaWdodEJvYXJkIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWFpbi1jb2xvcikgMCUsIHZhcigtLWxpZ2h0ZXItc2hhZGUpIDEwMCUpOyBcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuLnRpdGxlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG4ubWVudSA+ICoge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RDdCA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuLmZvb3RDdCA+IGE6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5zaGlwcyB7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLCAuZ2FtZWJvYXJkID4gLnNoaXBzIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0Qm9hcmQ7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgZ3JpZC1hcmVhOiByaWdodEJvYXJkO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uc2hpcHMsIC5hdHRhY2tze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXNoYWRlKTtcXG59XFxuXFxuLnNoaXBzLCAuYXR0YWNrcywgLnBsYWNlZCwgLmJvbWJlZCwgLmhpdCB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwczpob3ZlciwgLmF0dGFja3M6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwczphY3RpdmUsIC5hdHRhY2tzOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uYm9tYmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb3QtaGl0KTtcXG59XFxuXFxuLmxlZnRDZWxsUGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLXNoYWRlKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNjb3JlIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEJ0biwgLnJlc2V0LCAucm90YXRlLCAucmFuZG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDY2JTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLnNoaXBCdG46aG92ZXIsIC5yZXNldDpob3ZlciwgLnJvdGF0ZTpob3ZlciwgLnJhbmRvbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxufVxcblxcbi5zaGlwQnRuOmFjdGl2ZSwgLnJlc2V0OmFjdGl2ZSwgLnJvdGF0ZTphY3RpdmUsIC5yYW5kb206YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uaGFyYm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFNBQVM7SUFDVCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDRDQUE0QztJQUM1Qzs7O3dDQUdvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSw0Q0FBNEM7QUFDaEQ7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiAjNDI2YjY5O1xcbiAgICAtLWRhcmtlci1zaGFkZTogIzQ5Mzg0MztcXG4gICAgLS1kYXJrZXN0LXNoYWRlOiAjMTIxMTEzO1xcbiAgICAtLWxpZ2h0ZXItc2hhZGU6ICNFNEU2QzM7XFxuICAgIC0tbGlnaHRlc3Qtc2hhZGU6ICNGN0Y3RjI7XFxuICAgIC0tZ290LWhpdDogI0NDMjkzNjtcXG4gICAgLS13aGl0ZTogI0ZGRjtcXG59XFxuXFxuaHRtbCwgYm9keSxcXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC4yNWZyIDJmciAuMjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMWZyIDJmciAxZnIgMmZyIC4xZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIiAuIGxlZnRCb2FyZCBjb250cm9scyByaWdodEJvYXJkIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWFpbi1jb2xvcikgMCUsIHZhcigtLWxpZ2h0ZXItc2hhZGUpIDEwMCUpOyBcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuLnRpdGxlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG4ubWVudSA+ICoge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RDdCA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXNoYWRlKTtcXG59XFxuXFxuLmZvb3RDdCA+IGE6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5zaGlwcyB7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLCAuZ2FtZWJvYXJkID4gLnNoaXBzIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuI3NoaXBzIHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0Qm9hcmQ7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgZ3JpZC1hcmVhOiByaWdodEJvYXJkO1xcbn1cXG5cXG4jc2hpcHMsICNhdHRhY2tzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uc2hpcHMsIC5hdHRhY2tze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXNoYWRlKTtcXG59XFxuXFxuLnNoaXBzLCAuYXR0YWNrcywgLnBsYWNlZCwgLmJvbWJlZCwgLmhpdCB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zaGlwczpob3ZlciwgLmF0dGFja3M6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwczphY3RpdmUsIC5hdHRhY2tzOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uYm9tYmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb3QtaGl0KTtcXG59XFxuXFxuLmxlZnRDZWxsUGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLXNoYWRlKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNjb3JlIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNoYWRlKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcEJ0biwgLnJlc2V0LCAucm90YXRlLCAucmFuZG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDY2JTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLnNoaXBCdG46aG92ZXIsIC5yZXNldDpob3ZlciwgLnJvdGF0ZTpob3ZlciwgLnJhbmRvbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VzdC1zaGFkZSk7XFxufVxcblxcbi5zaGlwQnRuOmFjdGl2ZSwgLnJlc2V0OmFjdGl2ZSwgLnJvdGF0ZTphY3RpdmUsIC5yYW5kb206YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2hhZGUpO1xcbn1cXG5cXG4uaGFyYm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuZ2FtZTtcbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5jb25zdCBlbGVtZW50TWFrZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuLy8gTVZDIFZpZXdcbmNvbnN0IHZpZXdlciA9ICgoZ2FtZWJvYXJkcykgPT4ge1xuICAvLyBDcmVhdGVzIG1lbnUgc2VjdGlvbiBpbmZvIGJveCBhbmQgYnV0dG9uc1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2RpdicsICdpbmZvJywgJ1RoaXMgaXMgdGhlIGdhbWUgaW5mbycsICdpbmZvJykpO1xuICBnYW1lYm9hcmQoKS5oYXJib3IuZm9yRWFjaCgoc2hpcCkgPT4gbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignYnV0dG9uJywgJ3NoaXBCdG4nLCBzaGlwLm5hbWUudG9VcHBlckNhc2UoKSwgc2hpcC5uYW1lKSkpO1xuICBjb25zdCBoYXJib3JCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBCdG4nKTtcbiAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2J1dHRvbicsICdyb3RhdGUnLCAnUk9UQVRFJywgJ3JvdGF0ZScpKTtcbiAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuICBtZW51U2VjdGlvbi5hcHBlbmQoZWxlbWVudE1ha2VyKCdidXR0b24nLCAncmFuZG9tJywgJ1JBTkRPTScsICdyYW5kb20nKSk7XG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20nKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignYnV0dG9uJywgJ3Jlc2V0JywgJ1JFU1RBUlQnLCAncmVzdGFydCcpKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuXG4gIGNvbnN0IG1ha2VNZW51ID0gKCkgPT4ge1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2RpdicsICdpbmZvJywgJ1RoaXMgaXMgdGhlIGdhbWUgaW5mbycsICdpbmZvJykpO1xuICAgIGdhbWVib2FyZCgpLmhhcmJvci5mb3JFYWNoKChzaGlwKSA9PiBtZW51U2VjdGlvbi5hcHBlbmQoZWxlbWVudE1ha2VyKCdidXR0b24nLCAnc2hpcEJ0bicsIHNoaXAubmFtZS50b1VwcGVyQ2FzZSgpLCBzaGlwLm5hbWUpKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKGVsZW1lbnRNYWtlcignYnV0dG9uJywgJ3JhbmRvbScsICdSQU5ET00nLCAncmFuZG9tJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChlbGVtZW50TWFrZXIoJ2J1dHRvbicsICdyZXNldCcsICdSRVNUQVJUJywgJ3Jlc3RhcnQnKSk7XG4gIH07XG5cbiAgLy8gR3JpZCBmYWN0b3J5XG4gIGNvbnN0IG1ha2VHcmlkID0gKGlkLCBzaWRlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGlkKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhY29vcmQnLCBKU09OLnN0cmluZ2lmeShnYW1lYm9hcmQoKS5vY2VhbltpXSkpO1xuICAgICAgc2lkZS5hcHBlbmQoY2VsbCk7XG4gICAgfVxuICAgIHJldHVybiBzaWRlO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgZ3JpZHMgZm9yIGVhY2ggc2lkZVxuICBnYW1lYm9hcmRzLmZvckVhY2goKHNpZGUpID0+IG1ha2VHcmlkKHNpZGUuaWQsIHNpZGUpKTtcblxuICAvLyBOb2RlbGlzdHMgZm9yIGdyaWRzXG4gIGNvbnN0IGxlZnRQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHMnKTtcbiAgY29uc3QgcmlnaHRQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrcycpO1xuICBsZXQgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwcycpO1xuICBsZXQgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNrcycpO1xuXG4gIC8vIENoYW5nZXMgZ3JpZHMgY29sb3IgdXBvbiBhdHRhY2svaGl0XG4gIGNvbnN0IHRyYWNrQXR0YWNrID0gKGlucHV0LCBhcnJheSkgPT4geyAvLyBpbnB1dCA9IGRpdlxuICAgIGlmIChhcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgIGFycmF5LmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuYXR0cmlidXRlc1sxXS52YWx1ZSA9PT0gSlNPTi5zdHJpbmdpZnkocG9zKSkge1xuICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9tYmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvbWJlZCcpO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXBsYWNlcyBjZWxscyB3aXRoIGNvcGllc1xuICBjb25zdCByZW1vdmVMaXN0ZW5lcnMgPSAoZ3JpZCkgPT4ge1xuICAgIGdyaWQuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5yZXBsYWNlV2l0aChub2RlLmNsb25lTm9kZSh0cnVlKSkpO1xuICB9O1xuXG4gIC8vIFJlcG9ydCBmdW5jdGlvbiBkaXNwbGF5cyBtZXNzYWdlcyBpbiBpbmZvQm94IGVsZW1lbnRcbiAgY29uc3Qgc3RhdHVzUmVwb3J0ID0gKGVsZW1lbnQsIHN0YXR1cykgPT4ge1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIDE6IGVsZW1lbnQudGV4dENvbnRlbnQgPSAnRW5lbXkgZGVzdHJveWVkIHlvdXIgZmxlZXQhJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IGVsZW1lbnQudGV4dENvbnRlbnQgPSAnVmljdG9yeSEgXFxuIFdlIGRlc3Ryb3llZCBvdXIgZW5lbXkhJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IGVsZW1lbnQudGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDogZWxlbWVudC50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6IGVsZW1lbnQudGV4dENvbnRlbnQgPSAnTmV4dCBTaGlwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6IGVsZW1lbnQudGV4dENvbnRlbnQgPSAnSXRcXCdzIHRpbWUgdG8gYXR0YWNrISc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogZWxlbWVudC50ZXh0Q29udGVudCA9ICdUaGUgZW5lbXkgaXMgaW4gb3VyIHdhdGVycyEgUGxhY2UgeW91ciBzaGlwcyEnO1xuICAgIH1cbiAgfTtcblxuICAvLyBHYW1lIG92ZXIgZXZhbHVhdGlvblxuICBjb25zdCBpc0dhbWVPdmVyID0gKHBseSwgY3B1KSA9PiB7XG4gICAgaWYgKHBseS5ib2FyZC5kZXN0cm95ZWQubGVuZ3RoID09PSA1KSB7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMocmlnaHQpO1xuICAgICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBpZiAoY3B1LmJvYXJkLmRlc3Ryb3llZC5sZW5ndGggPT09IDUpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycyhyaWdodCk7XG4gICAgICBzdGF0dXNSZXBvcnQoaW5mb0JveCwgMik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBmaW5kRGl2ID0gKHZhbHVlLCBub2RlbGlzdCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBjb25zdCBkaXYgPSBbLi4ubm9kZWxpc3RdLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hdHRyaWJ1dGVzWzFdLnZhbHVlID09PSB0YXJnZXQpWzBdO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG4gIC8vIFNldHMgY3B1IGF0dGFja1xuICBjb25zdCBjcHVBdHRhY2sgPSAocGxheWVyLCBvcHApID0+IHtcbiAgICBvcHAucmFuRmlyZSgpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBwbGF5ZXIuYm9hcmQuYm9tYmVkW3BsYXllci5ib2FyZC5ib21iZWQubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZGl2ID0gZmluZERpdihjdXJyZW50LCBsZWZ0KTtcbiAgICB0cmFja0F0dGFjayhkaXYsIHBsYXllci5ib2FyZC5vblRhcmdldCk7XG4gIH07XG5cbiAgLy8gSW5pdGlhdGVzIGF0dGFja3Mgb24gY3B1IGdyaWRcbiAgY29uc3QgYXR0YWNrUGhhc2UgPSAoZ3JpZCwgcGxheWVyLCBvcHApID0+IHtcbiAgICBncmlkLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBKU09OLnBhcnNlKGNlbGwuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICBvcHAuYm9hcmQuZmlyZSh0YXJnZXQpO1xuICAgICAgdHJhY2tBdHRhY2soY2VsbCwgb3BwLmJvYXJkLm9uVGFyZ2V0KTtcbiAgICAgIGlmIChpc0dhbWVPdmVyKHBsYXllciwgb3BwKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnR0FNRSBPVkVSJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNwdUF0dGFjayhwbGF5ZXIsIG9wcCk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKHBsYXllciwgb3BwKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdHQU1FIE9WRVInKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgNDUwKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlIGNlbGwgY29sb3JpbmdcbiAgY29uc3Qgc2hpcFBsYWNlZCA9IChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuYm9hcmQuaW5HYW1lLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHNoaXBQb3MgPSBzaGlwLnR5cGUucG9zaXRpb247XG5cbiAgICAgIFsuLi5zaGlwUG9zXS5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICBbLi4ubGVmdF0uZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmF0dHJpYnV0ZXNbMV0udmFsdWUgPT09IEpTT04uc3RyaW5naWZ5KHBvaW50KSkge1xuICAgICAgICAgICAgLy8gZGF0YS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBkYXRhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGxhY2VkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRlbXBSYW4gPSAocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLnJhblNoaXAoKTtcbiAgICBzaGlwUGxhY2VkKHBsYXllcik7XG4gICAgcGxheWVyLm9wcC5yYW5TaGlwKCk7XG4gICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDYpO1xuICAgIGF0dGFja1BoYXNlKHJpZ2h0LCBwbGF5ZXIsIHBsYXllci5vcHApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGhhc2UgPSAodmlldywgcGxheWVyLCBvcHApID0+IHtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0ZW1wUmFuKHBsYXllcikpO1xuICAgIHN0YXR1c1JlcG9ydChpbmZvQm94LCBudWxsKTtcbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgdmlldy5oYXJib3JCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2hpcCA9IGJ0bi5pZDtcbiAgICB9KSk7XG4gICAgdmlldy5yb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgcGxheWVyLmJvYXJkLmdldFNoaXAoc2hpcCkudHlwZS5yb3RhdGUoKTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0U2hpcChzaGlwKS50eXBlLnJvdGF0aW9uID09PSAnSCcpIHtcbiAgICAgICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzUmVwb3J0KGluZm9Cb3gsIDMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZpZXcubGVmdC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFzaGlwKSByZXR1cm4gJ1BsZWFzZSBjaG9vc2UgYSBzaGlwJztcbiAgICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgSlNPTi5wYXJzZShjZWxsLmF0dHJpYnV0ZXNbMV0udmFsdWUpKTtcbiAgICAgIHNoaXBQbGFjZWQocGxheWVyKTtcbiAgICAgIHN0YXR1c1JlcG9ydChpbmZvQm94LCA1KTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuaW5HYW1lLmxlbmd0aCA9PT0gNVxuICAgICAgICAmJiBvcHAuYm9hcmQuaW5HYW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgLy8gcmVtb3ZlTGlzdGVuZXJzKHZpZXcubGVmdCk7XG4gICAgICAgIG9wcC5yYW5TaGlwKCk7XG4gICAgICAgIHN0YXR1c1JlcG9ydChpbmZvQm94LCA2KTtcbiAgICAgICAgYXR0YWNrUGhhc2UocmlnaHQsIHBsYXllciwgb3BwKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKC4uLmdyaWRzKSA9PiB7XG4gICAgWy4uLmdyaWRzXS5mb3JFYWNoKChzaWRlKSA9PiB7XG4gICAgICB3aGlsZSAoc2lkZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHNpZGUucmVtb3ZlQ2hpbGQoc2lkZS5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGdhbWVib2FyZHMuZm9yRWFjaCgoc2lkZSkgPT4gbWFrZUdyaWQoc2lkZS5pZCwgc2lkZSkpO1xuICAgIGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHMnKTtcbiAgICByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRhY2tzJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0UGFyZW50LFxuICAgIHJpZ2h0UGFyZW50LFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgaGFyYm9yQnRucyxcbiAgICByb3RhdGVCdG4sXG4gICAgcmVzdGFydEJ0bixcbiAgICBtZW51U2VjdGlvbixcbiAgICBjbGVhckRpc3BsYXksXG4gICAgcGxhY2VQaGFzZSxcbiAgICByZW1vdmVMaXN0ZW5lcnMsXG4gIH07XG59KShbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tzJyldKTtcblxubW9kdWxlLmV4cG9ydHMgPSB2aWV3ZXI7XG4iLCJjb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3Qgdmlld2VyID0gcmVxdWlyZSgnLi9kaXNwbGF5Q29udHJvbGxlcicpO1xuLy8gTVZDIENvbnRyb2xsZXJcbmNvbnN0IGdhbWUgPSAoKG1vZGVsLCB2aWV3KSA9PiB7XG4gIGNvbnN0IGluaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGh1bWFuID0gbW9kZWwoJ2h1bWFuJyk7XG4gICAgY29uc3Qgcm9ib3RvID0gbW9kZWwoJ3JvYm90bycpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSB2aWV3O1xuICAgIGh1bWFuLm9wcCA9IHJvYm90bztcbiAgICByb2JvdG8ub3BwID0gaHVtYW47XG4gICAgZGlzcGxheS5wbGFjZVBoYXNlKGRpc3BsYXksIGh1bWFuLCByb2JvdG8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGh1bWFuLFxuICAgICAgcm9ib3RvLFxuICAgICAgZGlzcGxheSxcbiAgICB9O1xuICB9KShtb2RlbCwgdmlldyk7XG4gIGluaXQuZGlzcGxheS5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xufSkocGxheWVyLCB2aWV3ZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWU7XG4iLCJjb25zdCBzaGlwRmFjID0gcmVxdWlyZSgnLi9zaGlwJyk7XG4vLyBNVkMgTW9kZWxcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbi8vIEFycmF5cyBmb3IgdHJhY2tpbmcgcG9zaXRpb24gYW5kIGdhbWUgcHJvZ3Jlc3NcbiAgY29uc3QgaW5HYW1lID0gW107IC8vIFN0b3JlcyBwbGFjZWQgc2hpcHNcbiAgY29uc3Qgb2NjdXBpZWQgPSBbXTsgLy8gU3RvcmVzIGFsbCBjb29yZGluYXRlcyBvZiBzaGlwIHBvc2l0aW9uc1xuICBjb25zdCBib21iZWQgPSBbXTsgLy8gU3RvcmVzIGFsbCB0cmllc1xuICBjb25zdCBkZXN0cm95ZWQgPSBbXTsgLy8gU3RvcmVzIGFsbCBkZXN0cm95ZWQgc2hpcHNcbiAgY29uc3Qgb25UYXJnZXQgPSBbXTtcbiAgY29uc3Qgb2NlYW4gPSBbXTtcblxuICBjb25zdCBtYWtlV2F0ZXIgPSAoKSA9PiB7IC8vIENyZWF0ZXMgdGhlIDEwIHggMTAgY29vcmRpbmF0ZSBncmlkXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgICAgb2NlYW4ucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2NlYW47XG4gIH07XG4gIG1ha2VXYXRlcigpO1xuXG4gIC8vIEhhcmJvciBzdG9yZXMgc2hpcCB0eXBlc1xuICBjb25zdCBoYXJib3IgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgICB0eXBlOiBzaGlwRmFjKCdkZXN0cm95ZXInLCAyKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgICAgdHlwZTogc2hpcEZhYygnc3VibWFyaW5lJywgMyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY3J1aXNlcicsXG4gICAgICB0eXBlOiBzaGlwRmFjKCdjcnVpc2VyJywgMyksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmF0dGxlc2hpcCcsXG4gICAgICB0eXBlOiBzaGlwRmFjKCdiYXR0bGVzaGlwJywgNCksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY2FycmllcicsXG4gICAgICB0eXBlOiBzaGlwRmFjKCdjYXJyaWVyJywgNSksXG4gICAgfSxcbiAgXTtcblxuICAvLyBDaGVja3MgaWYgbGFzdCBvY2N1cGllZCBjZWxsIG9mIHNoaXAgaXMgaW5ib3VuZHNcbiAgY29uc3QgaXNJbmJvdW5kcyA9IChwb3MpID0+IG9jZWFuLnNvbWUoKGNvb3IpID0+IGNvb3Iuam9pbigpID09PSBwb3Muam9pbigpKTtcbiAgLy8gR29lcyB0aHJvdWdoIG9jY3VwaWVkIHBvc2l0aW9ucyB0byBwcmV2ZW50IG92ZXJsYXBwaW5nXG4gIGNvbnN0IGlzT3ZlcmxhcCA9IChhcnJheSkgPT4gb2NjdXBpZWQuc29tZSgoY29vcikgPT4gYXJyYXkuc29tZSgocG9zKSA9PiBwb3Muam9pbigpID09PSBjb29yLmpvaW4oKSkpO1xuICAvLyBHb2VzIHRocm91Z2ggaW5HYW1lIGFycmF5IHRvIHByZXZlbnQgZHVwbGljYXRlIHNoaXAgdHlwZXNcbiAgY29uc3QgaXNQbGFjZWQgPSAoc2hpcCkgPT4gaW5HYW1lLnNvbWUoKHZlc3NlbCkgPT4gc2hpcC5uYW1lID09PSB2ZXNzZWwubmFtZSk7XG4gIC8vIEdldHMgc2hpcCBmcm9tIGhhcmJvciBhcnJheVxuICBjb25zdCBnZXRTaGlwID0gKG5hbWUpID0+IGhhcmJvci5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IG5hbWUpO1xuICAvLyBDcmVhdGVzIHRoZSBzaGlwJ3MgcGF0aFxuICBjb25zdCBtYWtlUGF0aCA9IChzaXplLCByb3QsIGNvb3IpID0+IHtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgaWYgKHJvdCAhPT0gJ0gnKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkgKz0gMSkge1xuICAgICAgICBwYXRoLnB1c2goW2Nvb3JbMF0sIGNvb3JbMV0gLSB5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCArPSAxKSB7XG4gICAgICAgIHBhdGgucHVzaChbY29vclswXSArIHgsIGNvb3JbMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgLy8gQ2hlY2sgdmFsaWQgc2hpcCBwbGFjZW1lbnRcbiAgbGV0IHBvc2l0aW9uID0gbnVsbDsgLy8gVmFyaWFibGUgdG8gc3RvcmUgc2hpcCdzIHBhdGhcbiAgY29uc3QgaXNWYWxQb3MgPSAoc2hpcCwgY29vcikgPT4geyAvLyBDb21iaW5lcyBhbGwgdmFsaWRpdHkgdGVzdHNcbiAgICBwb3NpdGlvbiA9IG1ha2VQYXRoKHNoaXAudHlwZS5zaXplLCBzaGlwLnR5cGUucm90YXRpb24sIGNvb3IpOyAvLyBDcmVhdGUgdGhlIHBvc3NpYmxlIHBhdGhcbiAgICByZXR1cm4gKGlzSW5ib3VuZHMocG9zaXRpb25bcG9zaXRpb24ubGVuZ3RoIC0gMV0pICYmICFpc092ZXJsYXAocG9zaXRpb24pICYmICFpc1BsYWNlZChzaGlwKSk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBOYW1lLCBjb29yKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGdldFNoaXAoc2hpcE5hbWUpO1xuICAgIGlmIChpc1ZhbFBvcyhzaGlwLCBjb29yKSkgeyAvLyBDaGVjayBwbGFjZW1lbnQgdmFsaWRpdHlcbiAgICAgIHBvc2l0aW9uLmZvckVhY2goKHBvcykgPT4gc2hpcC50eXBlLnBvc2l0aW9uLnB1c2gocG9zKSk7XG4gICAgICBwb3NpdGlvbi5mb3JFYWNoKChwb3MpID0+IG9jY3VwaWVkLnB1c2gocG9zKSk7XG4gICAgICBpbkdhbWUucHVzaChzaGlwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb24gPSBudWxsOyAvLyBSZXNldCB0aGUgcG9zaXRpb24gYXJyYXlcbiAgICAgIC8vIFJlcG9ydCBlcnJvciBpZihpc092ZXJsYXAocG9zaXRpb24pKSBlcnJvckhhbmRsZXIoMSlcbiAgICB9XG4gICAgcmV0dXJuIGluR2FtZTtcbiAgfTtcblxuICAvLyBDaGVja3MgdmFsaWQgYXR0YWNrXG4gIGNvbnN0IGtub3duID0gKGNvb3IpID0+IGJvbWJlZC5zb21lKChwb3MpID0+IHBvcy5qb2luKCkgPT09IGNvb3Iuam9pbigpKTtcbiAgLy8gQ2hlY2tzIGF0dGFjayBzdWNjZXNzXG4gIGNvbnN0IGJ1bGxzZXllID0gKGNvb3IpID0+IG9jY3VwaWVkLnNvbWUoKHBvcykgPT4gcG9zLmpvaW4oKSA9PT0gY29vci5qb2luKCkpO1xuICAvLyBGaW5kcyB0aGUgYXR0YWNrZWQgc2hpcFxuICBjb25zdCBmaW5kU2hpcCA9IChjb29yKSA9PiBpbkdhbWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUucG9zaXRpb24uZmluZCgocG9zKSA9PiBwb3Muam9pbigpID09PSBjb29yLmpvaW4oKSkpWzBdO1xuICAvLyBDaGVja3MgZGVzdHJveWVkIHNoaXBcbiAgY29uc3QgaXNEZXN0cm95ZWQgPSAoc2hpcCkgPT4gc2hpcC50eXBlLmlzU3VuaygpO1xuICAvLyBTdG9yZSBhbGwgdW5ib21iZWQgY2VsbHNcbiAgY29uc3QgdW5rbm93biA9ICgpID0+IG9jZWFuLmZpbHRlcigoaXRlbSkgPT4gYm9tYmVkLmV2ZXJ5KChwb3MpID0+IGl0ZW0uam9pbigpICE9PSBwb3Muam9pbigpKSk7XG4gIC8vIENyZWF0ZXMgYSBhdHRhY2sgcXVldWUgZm9yIHRoZSBjcHUgcGxheWVyXG4gIGNvbnN0IFEgPSBbXTtcbiAgY29uc3QgbmV4dEF0dGFja3MgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgdXAgPSBbYXJyWzBdLCBhcnJbMV0gKyAxXTtcbiAgICBjb25zdCByaWdodCA9IFthcnJbMF0gKyAxLCBhcnJbMV1dO1xuICAgIGNvbnN0IGRvd24gPSBbYXJyWzBdLCBhcnJbMV0gLSAxXTtcbiAgICBjb25zdCBsZWZ0ID0gW2FyclswXSAtIDEsIGFyclsxXV07XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFt1cCwgcmlnaHQsIGRvd24sIGxlZnRdO1xuICAgIGNvbnN0IGlzSW4gPSBkaXJlY3Rpb25zLmZpbHRlcigoaXRlbSkgPT4gaXNJbmJvdW5kcyhpdGVtKSk7XG4gICAgY29uc3QgaXNGcmVlID0gaXNJbi5maWx0ZXIoKHBvcykgPT4gIWtub3duKHBvcykpO1xuICAgIGNvbnN0IG5vdEluUSA9IGlzRnJlZS5maWx0ZXIoKGxvYykgPT4gUS5ldmVyeSgoZWwpID0+IGVsLmpvaW4oKSAhPT0gbG9jLmpvaW4oKSkpO1xuICAgIG5vdEluUS5mb3JFYWNoKChjb29yKSA9PiBRLnB1c2goY29vcikpO1xuICB9O1xuICAvLyBQbGFjZXMgYXR0YWNrc1xuICBjb25zdCBmaXJlID0gKGNvb3IpID0+IHtcbiAgICBpZiAoa25vd24oY29vcikpIHJldHVybiBudWxsO1xuICAgIGlmIChidWxsc2V5ZShjb29yKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZFNoaXAoY29vcik7XG4gICAgICB0YXJnZXQudHlwZS5pc0hpdCgpO1xuICAgICAgbmV4dEF0dGFja3MoY29vcik7XG4gICAgICBvblRhcmdldC5wdXNoKGNvb3IpO1xuICAgICAgLy8gY29uc29sZS5sb2coYGhpdCAke2Nvb3J9YCk7XG4gICAgICBpZiAoaXNEZXN0cm95ZWQodGFyZ2V0KSkge1xuICAgICAgICBkZXN0cm95ZWQucHVzaCh0YXJnZXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXN0cm95ZWQpO1xuICAgICAgfSAvLyBSZXBvcnQgc3VjY2Vzc1xuICAgICAgYm9tYmVkLnB1c2goY29vcik7XG4gICAgfSBlbHNlIGlmICgha25vd24oY29vcikgJiYgIWJ1bGxzZXllKGNvb3IpKSB7XG4gICAgICAvLyBSZXBvcnQgbWlzc1xuICAgICAgYm9tYmVkLnB1c2goY29vcik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnTUlTUycpO1xuICAgIH1cbiAgICByZXR1cm4gYm9tYmVkO1xuICB9O1xuXG4gIGNvbnN0IGFsbEluUGxhY2UgPSAoKSA9PiAoaW5HYW1lLmxlbmd0aCA9PT0gNSk7XG5cbiAgcmV0dXJuIHtcbiAgICBvY2VhbixcbiAgICBvY2N1cGllZCxcbiAgICBoYXJib3IsXG4gICAgaW5HYW1lLFxuICAgIGJvbWJlZCxcbiAgICBkZXN0cm95ZWQsXG4gICAgUSxcbiAgICBvblRhcmdldCxcbiAgICBpc0luYm91bmRzLFxuICAgIGlzT3ZlcmxhcCxcbiAgICBpc1BsYWNlZCxcbiAgICBnZXRTaGlwLFxuICAgIGlzVmFsUG9zLFxuICAgIHBsYWNlU2hpcCxcbiAgICBrbm93bixcbiAgICBmaXJlLFxuICAgIGFsbEluUGxhY2UsXG4gICAgdW5rbm93bixcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkO1xuIiwiY29uc3QgZWxlbWVudE1ha2VyID0gKG5hbSwgY2xhcywgY29udGVudCwgaWQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXMpO1xuICBpZiAoaWQgPT09IG51bGwgfHwgY29udGVudCA9PT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG4gIGlmIChjb250ZW50ICE9PSBudWxsKSBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgaWYgKGlkICE9PSBudWxsKSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50TWFrZXI7XG4iLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXIgPSAoaWQsIG9wcCkgPT4gKHtcbiAgaWQsXG4gIG9wcCxcbiAgYm9hcmQ6IGdhbWVib2FyZCgpLFxuICByYW5Db29yKCkge1xuICAgIGNvbnN0IHJhbk51bSA9IChtaW4gPSAwLCBtYXggPSAxMCkgPT4ge1xuICAgICAgY29uc3QgaW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgICAgcmV0dXJuIGludDtcbiAgICB9O1xuICAgIGNvbnN0IHggPSByYW5OdW0oKTtcbiAgICBjb25zdCB5ID0gcmFuTnVtKCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfSxcbiAgcmFuU2hpcCgpIHtcbiAgICB3aGlsZSAodGhpcy5ib2FyZC5pbkdhbWUubGVuZ3RoIDwgdGhpcy5ib2FyZC5oYXJib3IubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJvYXJkLmhhcmJvclsyXS50eXBlLnJvdGF0ZSgpO1xuICAgICAgdGhpcy5ib2FyZC5oYXJib3IuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIHRoaXMucmFuQ29vcigpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmFuRmlyZSgpIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yYW5Db29yKCk7XG4gICAgaWYgKHRoaXMub3BwLmJvYXJkLlEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV4dCA9IHRoaXMub3BwLmJvYXJkLlEuc2hpZnQoKTtcbiAgICAgIHRoaXMub3BwLmJvYXJkLmZpcmUobmV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wcC5ib2FyZC5ib21iZWQubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5vcHAuYm9hcmQuZmlyZSh0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQgPSB0aGlzLm9wcC5ib2FyZC51bmtub3duKClbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vcHAuYm9hcmQudW5rbm93bigpLmxlbmd0aCldO1xuICAgICAgdGhpcy5vcHAuYm9hcmQuZmlyZSh0YXJnZXQpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhvcHAuYm9hcmQuYm9tYmVkW29wcC5ib2FyZC5ib21iZWQubGVuZ3RoIC0gMV0pO1xuICB9LFxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XG4iLCJjb25zdCBzaGlwRmFjID0gKG5hbWUsIHNpemUpID0+ICh7XG4gIG5hbWUsXG4gIHNpemUsXG4gIGRhbWFnZTogMCxcbiAgcm90YXRpb246ICdIJyxcbiAgcG9zaXRpb246IFtdLFxuICBpc0hpdCgpIHtcbiAgICB0aGlzLmRhbWFnZSArPSAxO1xuICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgfSxcbiAgcm90YXRlKCkge1xuICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSAnVicpIHtcbiAgICAgIHRoaXMucm90YXRpb24gPSAnVic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm90YXRpb24gPSAnSCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLnNpemUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gcmV0dXJuIGZhbHNlO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhYztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==