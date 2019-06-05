webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar/NavBarItem.tsx":
/*!******************************************!*\
  !*** ./components/NavBar/NavBarItem.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");



function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;  \n  background-color: white;\n  position: fixed;\n  padding: 10px;\n  width: 500px;\n  height: 200px;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px; /* Negative half of height. */\n  margin-left: -250px; /* Negative half of width. */\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: fixed;\n  width: 100%;  \n  height: 100%;  \n  top: 0;  \n  left: 0;  \n  right: 0;  \n  bottom: 0;  \n  margin: auto;  \n  background-color: rgba(0,0,0, 0.5);   \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  background: transparent;\n  color: white;\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n  transition: all .4s;\n  text-align: center;\n  &:hover{\n    background: #bccbde;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n  display: inline-block;\n  transition: all .4s;\n  text-align: center;\n  &:hover{\n    background: #bccbde;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var NavBarItem = function NavBarItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      contactIsShown = _useState2[0],
      setContactIsShown = _useState2[1];

  var hide = function hide() {
    return setContactIsShown(false);
  };

  var show = function show() {
    return setContactIsShown(true);
  };

  var linkName = props.children.toLowerCase();

  if (linkName === 'home') {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: './'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavBarItemContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, props.children))));
  }

  if (linkName === 'contact') {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavBarButtonContainer, {
      onClick: show
    }, props.children), contactIsShown && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PopupBackgroundContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PopupContent, null, "Email: ktconnell99@gmail.com", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: hide
    }, "X"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/' + linkName
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavBarItemContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, props.children))));
};

var NavBarItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var NavBarButtonContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject2());
var PopupBackgroundContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var PopupContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ })

})
//# sourceMappingURL=index.js.95d309f256b624daa256.hot-update.js.map