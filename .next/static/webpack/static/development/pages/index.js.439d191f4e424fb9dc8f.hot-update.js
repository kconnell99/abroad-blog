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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/Posts/components.tsx");




var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  var _post$fields = post.fields,
      postTitle = _post$fields.postTitle,
      postMainImage = _post$fields.postMainImage,
      postCreationDate = _post$fields.postCreationDate,
      postUrl = _post$fields.postUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: postUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostImage"], {
    src: postMainImage.fields.file.url
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostTitle"], null, postTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostDate"], null, postCreationDate))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/Posts/components.tsx":
/*!*****************************************!*\
  !*** ./components/Posts/components.tsx ***!
  \*****************************************/
/*! exports provided: PostContainer, PostImage, PostTitle, PostDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContainer", function() { return PostContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostImage", function() { return PostImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTitle", function() { return PostTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDate", function() { return PostDate; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0;\n    text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0;\n    padding: 5px;\n    text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    max-height: 75%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 5px solid white;\n    width: 300px;\n    height: 300px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 25px;\n    padding: 5px 10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PostContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var PostImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var PostTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3());
var PostDate = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject4());

/***/ })

})
//# sourceMappingURL=index.js.439d191f4e424fb9dc8f.hot-update.js.map