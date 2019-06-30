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





function PhotoGrid(_ref) {
  var photos = _ref.photos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      photoChosen = _useState2[0],
      setPhotoChosen = _useState2[1];

  var showModal = function showModal(photo) {
    setPhotoChosen(photo);
  };

  var displayImage = function displayImage(photo) {
    return photo.fields.photo.fields.file.url;
  };

  var displayCaption = function displayCaption(photo) {
    return photo.fields.photo.fields.description;
  };

  var closeModal = function closeModal() {
    setPhotoChosen(null);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Photos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PhotoGridContainer"], null, photos && photos.data.map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PhotoContainer"], {
      onClick: function onClick() {
        return showModal(photo);
      },
      key: photo.sys.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ImageContainer"], {
      src: photo.fields.photo.fields.file.url
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CaptionOverlay"], {
      className: "overlay"
    }, photo.fields.photo.fields.description));
  })), photoChosen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ModalClose"], {
    role: "button",
    onClick: closeModal
  }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    src: displayImage(photoChosen)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ModalCaption"], null, displayCaption(photoChosen))));
}

/***/ })

})
//# sourceMappingURL=photos.js.0503098653fe138fd2c6.hot-update.js.map