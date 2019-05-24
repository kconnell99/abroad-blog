webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts/PostCard.tsx":
/*!***************************************!*\
  !*** ./components/Posts/PostCard.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var PostCard = function PostCard(_ref) {
  var post = _ref.post,
      handleClick = _ref.handleClick;
  var _post$fields = post.fields,
      postTitle = _post$fields.postTitle,
      postMainImage = _post$fields.postMainImage,
      postCreationDate = _post$fields.postCreationDate,
      postBody = _post$fields.postBody;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "test-post-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, postTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, postCreationDate)));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.25873f9dc84e57df592e.hot-update.js.map