webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/PhotoGrid/PhotoGrid.tsx":
false,

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_CMSrequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CMSrequest */ "./services/CMSrequest.ts");
/* harmony import */ var _components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PhotoGrid/components */ "./components/PhotoGrid/components.tsx");
/* harmony import */ var _components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post */ "./pages/post.tsx");








var About = function About(data) {
  var aboutPageTitle = data.aboutPageTitle,
      aboutPageImage = data.aboutPageImage,
      aboutPageText = data.aboutPageText;
  return data && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_6__["PostTitleContainer"], null, aboutPageTitle), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__["PhotoContainer"], {
    style: {
      margin: "auto",
      width: "50%",
      cursor: "auto"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__["ImageContainer"], {
    src: aboutPageImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_6__["PostBodyContainer"], {
    style: {
      marginLeft: "40%",
      marginRight: "40%",
      marginTop: "5%"
    }
  }, aboutPageText));
};

About.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_services_CMSrequest__WEBPACK_IMPORTED_MODULE_4__["makeCMSEntryRequest"])('2XFjJ40DoLno1olFIeSA78');

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data.fields);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.efe1a2e0b251088fa44e.hot-update.js.map