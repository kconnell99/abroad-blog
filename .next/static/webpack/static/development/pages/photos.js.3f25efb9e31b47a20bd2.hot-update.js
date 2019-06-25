webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./components/PhotoGrid/components.tsx":
/*!*********************************************!*\
  !*** ./components/PhotoGrid/components.tsx ***!
  \*********************************************/
/*! exports provided: PhotoContainer, ImageContainer, PhotoGridContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoContainer", function() { return PhotoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGridContainer", function() { return PhotoGridContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-height:600px;\n    max-width: 600px;\n    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    &:after{\n        content: \"\";\n        position: absolute;\n        z-index: -1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n        opacity: 0;\n        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n    &:hover{\n        -webkit-transform: scale(1.10, 1.10);\n        transform: scale(1.10, 1.10);\n        &:after{\n            opacity: 1;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PhotoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var PhotoGridContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ })

})
//# sourceMappingURL=photos.js.3f25efb9e31b47a20bd2.hot-update.js.map