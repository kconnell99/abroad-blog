webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts/PostCard.tsx":
/*!***************************************!*\
  !*** ./components/Posts/PostCard.tsx ***!
  \***************************************/
/*! exports provided: allTags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTags", function() { return allTags; });
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./components/Posts/components.tsx");




var tagsToString = function tagsToString(tags) {
  var ret = tags.join(" ");
  return ret;
};

var allTags = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a([]);

var addAllTags = function addAllTags(tags) {
  tags.forEach(function (tag) {
    return allTags.add(tag);
  });
};

var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  var _post$fields = post.fields,
      postTitle = _post$fields.postTitle,
      postMainImage = _post$fields.postMainImage,
      postCreationDate = _post$fields.postCreationDate,
      postUrl = _post$fields.postUrl,
      postTags = _post$fields.postTags;
  addAllTags(postTags);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: postUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostContainer"], {
    className: tagsToString(postTags)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      display: "block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostImageContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostImage"], {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostDescription"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostDate"], null, postCreationDate), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostTitle"], null, postTitle)))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.f1f5f1273075b0bece6d.hot-update.js.map