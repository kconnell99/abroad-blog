webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_CMSrequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CMSrequest */ "./services/CMSrequest.js");
/* harmony import */ var _services_CMSrequest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_CMSrequest__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/katherineconnell/Projects/abroad-blog/pages/about.jsx";


 // import contentful from 'contentful';

var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var About = function About() {
  console.log(Object(_services_CMSrequest__WEBPACK_IMPORTED_MODULE_3__["makeCMSEntryRequest"])("3OQQ36FBlNJVh4CbEbz4OB"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      aboutData = _useState2[0],
      setAboutData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// console.log(makeCMSEntryRequest("3OQQ36FBlNJVh4CbEbz4OB"))
    // setAboutData(makeCMSEntryRequest('3OQQ36FBlNJVh4CbEbz4OB'))
    // const client = contentful.createClient({
    //     space: '7nio64lc6xum',
    //     environment: 'master', // defaults to 'master' if not set
    //     accessToken: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
    //     })
    // client.getEntry('3OQQ36FBlNJVh4CbEbz4OB')
    // .then((entry) => {
    //     // console.log(entry);
    //     // console.log(entry.fields.blogTitle)
    // })
    // .catch(console.error)
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Blog Title"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, aboutData && aboutData.fields.blogTitle));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.d1c877fc60d313a7cb42.hot-update.js.map