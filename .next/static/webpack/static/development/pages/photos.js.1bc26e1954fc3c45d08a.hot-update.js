webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./components/Modals/components.tsx":
/*!******************************************!*\
  !*** ./components/Modals/components.tsx ***!
  \******************************************/
/*! exports provided: Modal, ModalClose, ModalContent, ModalCaption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return ModalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCaption", function() { return ModalCaption; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    animation-name: zoom;\n    animation-duration: 0.6s;\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n    &:hover,&:focus{\n        color: #bbb;\n        text-decoration: none;\n        cursor: pointer; \n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0,0,0,0.9);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Modal = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ModalClose = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var ModalContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var ModalCaption = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

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
/* harmony import */ var _Modals_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/components */ "./components/Modals/components.tsx");





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
  })), photoChosen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_components__WEBPACK_IMPORTED_MODULE_3__["ModalClose"], {
    role: "button",
    onClick: closeModal
  }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_components__WEBPACK_IMPORTED_MODULE_3__["ModalContent"], {
    src: displayImage(photoChosen)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_components__WEBPACK_IMPORTED_MODULE_3__["ModalCaption"], null, displayCaption(photoChosen))));
}

/***/ })

})
//# sourceMappingURL=photos.js.1bc26e1954fc3c45d08a.hot-update.js.map