webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Modals/ModalPopup.tsx":
/*!******************************************!*\
  !*** ./components/Modals/ModalPopup.tsx ***!
  \******************************************/
/*! exports provided: ModalPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopup", function() { return ModalPopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ModalPopup = function ModalPopup(body) {
  var background = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(body);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "mailto:ktconnell99@gmail.com",
    method: "POST",
    enctype: "multipart/form-data",
    name: "EmailTestForm"
  }, "Your Name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "VisitorName"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Your Comment:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "VisitorComment"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Email This Form"
  })));
};

/***/ }),

/***/ "./components/NavBar/NavBarItem.tsx":
/*!******************************************!*\
  !*** ./components/NavBar/NavBarItem.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modals_ModalPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/ModalPopup */ "./components/Modals/ModalPopup.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./components/NavBar/components.tsx");




 // import {PopupBackgroundContainer, PopupTextContent} from '../Popups/Popups';



var NavBarItem = function NavBarItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      contactIsShown = _useState2[0],
      setContactIsShown = _useState2[1];

  var togglePopup = function togglePopup() {
    return setContactIsShown(!contactIsShown);
  };

  var handleChildClick = function handleChildClick(e) {
    e.stopPropagation();
  };

  var linkName = props.children.toLowerCase();

  if (linkName === 'home') {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: './'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemText"], null, props.children))));
  }

  if (linkName === 'contact') {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], {
      onClick: togglePopup
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemText"], null, props.children)), contactIsShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modals_ModalPopup__WEBPACK_IMPORTED_MODULE_3__["ModalPopup"], null));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/' + linkName
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemText"], null, props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ }),

/***/ "./components/PhotoGrid/components.tsx":
/*!*********************************************!*\
  !*** ./components/PhotoGrid/components.tsx ***!
  \*********************************************/
/*! exports provided: PhotoContainer, ImageContainer, PhotoGridContainer, CaptionOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoContainer", function() { return PhotoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGridContainer", function() { return PhotoGridContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionOverlay", function() { return CaptionOverlay; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: .5s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    &:hover{\n        opacity: 1;\n        border: 1px solid #efefef;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: block; \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-height:300px;\n    max-width: 300px;\n    margin: 10px;\n    border: 1px solid white;\n    position: relative;\n    cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PhotoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var PhotoGridContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var CaptionOverlay = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./components/Popups/ModalPopup.tsx":
false

})
//# sourceMappingURL=about.js.379ee8b18c0f2e451567.hot-update.js.map