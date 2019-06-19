webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBarItem */ "./components/NavBar/NavBarItem.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./components/NavBar/components.tsx");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["*{\n            color: black;\n            // color: hotpink!important;\n            font-family: 'Josefin Sans', arial, sans-serif;\n        }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function NavBar() {
  var options = ["HOME", "ABOUT", "PHOTOS", "CONTACT"];
  var layoutOptions = options.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item
    }, item);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Josefin+Sans",
    rel: "stylesheet",
    key: "google-font-josefin+sans"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Inconsolata",
    rel: "stylesheet",
    key: "google-font-inconsolata"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["Global"], {
    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject())
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["FullNavBarContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: './'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["NavBarTitle"], null, "Blog title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["NavBarItemsContainer"], null, layoutOptions)));
}

/***/ })

})
//# sourceMappingURL=index.js.f068731f1552a43893ed.hot-update.js.map