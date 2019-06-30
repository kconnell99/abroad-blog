webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/Pages/components.tsx":
/*!*****************************************!*\
  !*** ./components/Pages/components.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var _components_Pages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pages/components */ "./components/Pages/components.tsx");
/* harmony import */ var _components_Pages_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__);




var Post = function Post(data) {
  var postTitle = data.postTitle,
      postMainImage = data.postMainImage,
      postCreationDate = data.postCreationDate,
      postBody = data.postBody,
      postTags = data.postTags;
  var tags = postTags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostTag, {
      key: tag
    }, tag);
  });
  return data && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: "linear-gradient(to bottom, #000000 70%, #e6e6e6 100%)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostHeaderImage"], {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostTitleContainer"], null, postTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostDescription"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostTagsContainer"], null, tags), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostDateContainer"], null, postCreationDate)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pages_components__WEBPACK_IMPORTED_MODULE_2__["PostBodyContainer"], null, postBody));
};

Post.getInitialProps = function (context) {
  return context.query.post.fields;
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.81a98966afc51304cb91.hot-update.js.map