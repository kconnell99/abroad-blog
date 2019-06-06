webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./components/PhotoGrid/PhotoGrid.tsx":
/*!********************************************!*\
  !*** ./components/PhotoGrid/PhotoGrid.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./components/PhotoGrid/components.tsx");
/* harmony import */ var _Popups_Popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Popups/Popups */ "./components/Popups/Popups.tsx");



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






function PhotoGrid(_ref) {
  var photos = _ref.photos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      photoEnlarged = _useState2[0],
      setPhotoEnlarged = _useState2[1];

  var togglePhoto = function togglePhoto() {
    return setPhotoEnlarged(!photoEnlarged);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, photoEnlarged && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_5__["PopupBackgroundContainer"], {
    onClick: togglePhoto
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_5__["PopupContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ImageContainer"], {
    src: photo.fields.photo.fields.file.url
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PhotoGridContainer, null, photos && photos.data.map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["PhotoContainer"], {
      onClick: togglePhoto,
      key: photo.sys.id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ImageContainer"], {
      src: photo.fields.photo.fields.file.url
    }));
  })));
}
var PhotoGridContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var PhotoEnlarged = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());

/***/ }),

/***/ "./components/PhotoGrid/components.tsx":
/*!*********************************************!*\
  !*** ./components/PhotoGrid/components.tsx ***!
  \*********************************************/
/*! exports provided: PhotoContainer, ImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoContainer", function() { return PhotoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 100%;\n    max-height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 5px solid white;\n    max-width: 300px;\n    max-height: 300px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 25px;\n    padding: 10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PhotoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());

/***/ })

})
//# sourceMappingURL=photos.js.41ac39583710983ed974.hot-update.js.map