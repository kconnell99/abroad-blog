webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./components/PhotoGrid/PhotoGrid.tsx":
/*!********************************************!*\
  !*** ./components/PhotoGrid/PhotoGrid.tsx ***!
  \********************************************/
/*! exports provided: default, PhotoContainer, ImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoContainer", function() { return PhotoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _NavBar_NavBarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar/NavBarItem */ "./components/NavBar/NavBarItem.tsx");



function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 100%;\n    max-height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 5px solid white;\n    max-width: 300px;\n    max-height: 300px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 25px;\n    padding: 10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    photoEnlarged = _useState2[0],
    setPhotoEnlarged = _useState2[1];

var togglePhoto = function togglePhoto() {
  return setPhotoEnlarged(!photoEnlarged);
};

function PhotoGrid(_ref) {
  var photos = _ref.photos;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, photoEnlarged && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavBar_NavBarItem__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PhotoGridContainer, null, photos && photos.data.map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PhotoContainer, {
      onClick: togglePhoto,
      key: photo.sys.id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageContainer, {
      src: photo.fields.photo.fields.file.url
    }));
  })));
}
var PhotoGridContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var PhotoEnlarged = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var PhotoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject4());

/***/ })

})
//# sourceMappingURL=photos.js.fb024a646f42cfa38bdc.hot-update.js.map