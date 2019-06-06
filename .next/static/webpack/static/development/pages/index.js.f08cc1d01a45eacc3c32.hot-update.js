webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts/PostGrid.tsx":
/*!***************************************!*\
  !*** ./components/Posts/PostGrid.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCard */ "./components/Posts/PostCard.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./components/Posts/components.tsx");



function PostGrid(_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostGridContainer"], null, posts && posts.data.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.sys.id,
      post: post
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.f08cc1d01a45eacc3c32.hot-update.js.map