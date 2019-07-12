webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./services/CMSrequest.ts":
/*!********************************!*\
  !*** ./services/CMSrequest.ts ***!
  \********************************/
/*! exports provided: client, makeCMSEntryRequest, makeCMSContentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCMSEntryRequest", function() { return makeCMSEntryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCMSContentRequest", function() { return makeCMSContentRequest; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./env.ts");




var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var envVars = _env__WEBPACK_IMPORTED_MODULE_2__["default"].API_SPACE_KEY ? _env__WEBPACK_IMPORTED_MODULE_2__["default"] : process.env;
var client = contentful.createClient({
  space: envVars.API_SPACE_KEY,
  environment: 'master',
  // defaults to 'master' if not set
  accessToken: envVars.API_ACCESS_TOKEN
});
var makeCMSEntryRequest =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(entryID) {
    var entry;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.getEntry(entryID);

          case 3:
            entry = _context.sent;
            return _context.abrupt("return", entry);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
            ;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function makeCMSEntryRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var makeCMSContentRequest =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(contentID) {
    var _ref3, items;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return client.getEntries({
              'content_type': contentID
            });

          case 3:
            _ref3 = _context2.sent;
            items = _ref3.items;
            return _context2.abrupt("return", items);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 11:
            ;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function makeCMSContentRequest(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=photos.js.54c4b0b458054e899e89.hot-update.js.map