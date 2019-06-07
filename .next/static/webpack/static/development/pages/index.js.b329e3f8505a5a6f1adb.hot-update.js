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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/Posts/components.tsx");





var tagsToString = function tagsToString(tags) {
  var ret = "filterDiv";
  ret += tags.join(" ");
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: postUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostContainer"], {
    className: tagsToString(postTags)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostImage"], {
    src: postMainImage.fields.file.url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostTitle"], null, postTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostDate"], null, postCreationDate))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.b329e3f8505a5a6f1adb.hot-update.js.map