webpackHotUpdate("static/development/pages/photos.js",{

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
/* harmony import */ var _Popups_Popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Popups/Popups */ "./components/Popups/Popups.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./components/NavBar/components.tsx");







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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, props.children))));
  }

  if (linkName === 'contact') {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], {
      onClick: togglePopup
    }, props.children), contactIsShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_3__["PopupBackgroundContainer"], {
      onClick: togglePopup
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popups_Popups__WEBPACK_IMPORTED_MODULE_3__["PopupContent"], {
      onClick: handleChildClick
    }, "Email: ktconnell99@gmail.com")));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/' + linkName
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["NavBarItemContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ }),

/***/ "./components/NavBar/components.tsx":
/*!******************************************!*\
  !*** ./components/NavBar/components.tsx ***!
  \******************************************/
/*! exports provided: NavBarItemContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarItemContainer", function() { return NavBarItemContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n  display: inline-block;\n  transition: all .4s;\n  text-align: center;\n  &:hover{\n    background: #bccbde;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NavBarItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=photos.js.8e79292517b0c14fb213.hot-update.js.map