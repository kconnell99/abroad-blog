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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./components/PhotoGrid/components.tsx");
/* harmony import */ var _Popups_Popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Popups/Popups */ "./components/Popups/Popups.tsx");





function PhotoGrid(_ref) {
  var photos = _ref.photos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      photoEnlarged = _useState2[0],
      setPhotoEnlarged = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      photoChosen = _useState4[0],
      setPhotoChosen = _useState4[1];

  var togglePhoto = function togglePhoto(photo) {
    setPhotoEnlarged(!photoEnlarged);
    setPhotoChosen(photo);
  };

  var showPic = function showPic(photo) {
    // console.log(photo.fields.photo.fields.description)
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ImageContainer"], {
      src: photo.fields.photo.fields.file.url
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PhotoGridContainer"], null, photos && photos.data.map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PhotoContainer"], {
      onClick: function onClick() {
        return togglePhoto(photo);
      },
      key: photo.sys.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ImageContainer"], {
      src: photo.fields.photo.fields.file.url
    }), photoEnlarged && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_3__["PopupBackgroundContainer"], {
      onClick: togglePhoto
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_3__["PopupImageContent"], null, photoChosen && showPic(photoChosen))));
  })));
}

/***/ })

})
//# sourceMappingURL=photos.js.faa5d77c07436d1ad1cd.hot-update.js.map