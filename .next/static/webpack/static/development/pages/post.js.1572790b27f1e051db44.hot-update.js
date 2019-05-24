webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Post = function Post(data) {
  var postTitle = data.postTitle,
      postMainImage = data.postMainImage,
      postCreationDate = data.postCreationDate,
      postBody = data.postBody;
  console.log(data);
  return data && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, postTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, postCreationDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, postBody));
};

Post.getInitialProps = function (context) {
  return context.query.post.fields;
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.1572790b27f1e051db44.hot-update.js.map