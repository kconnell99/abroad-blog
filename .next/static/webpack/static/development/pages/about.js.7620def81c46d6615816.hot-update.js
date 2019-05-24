webpackHotUpdate("static/development/pages/about.js",{

/***/ "./services/CMSrequest.js":
/*!********************************!*\
  !*** ./services/CMSrequest.js ***!
  \********************************/
/*! exports provided: makeCMSEntryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCMSEntryRequest", function() { return makeCMSEntryRequest; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");



var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var client = contentful.createClient({
  space: '7nio64lc6xum',
  environment: 'master',
  // defaults to 'master' if not set
  accessToken: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
});
var makeCMSEntryRequest =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(entryID) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client.getEntry(entryID).then(function (entry) {
              // console.log(entry);
              // console.log(entry.fields.blogTitle)
              return entry;
            }).catch(console.error);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeCMSEntryRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=about.js.7620def81c46d6615816.hot-update.js.map