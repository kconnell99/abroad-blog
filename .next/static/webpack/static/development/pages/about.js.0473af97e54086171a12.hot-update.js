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
var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var makeCMSEntryRequest = function makeCMSEntryRequest(entryID) {
  var client = contentful.createClient({
    space: '7nio64lc6xum',
    environment: 'master',
    // defaults to 'master' if not set
    accessToken: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
  });
  client.getEntry(entryID).then(function (entry) {
    // console.log(entry);
    // console.log(entry.fields.blogTitle)
    return entry;
  }).catch(console.error);
};

/***/ })

})
//# sourceMappingURL=about.js.0473af97e54086171a12.hot-update.js.map