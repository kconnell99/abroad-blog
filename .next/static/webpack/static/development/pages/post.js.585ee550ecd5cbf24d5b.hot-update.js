webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: PostTitleContainer, PostBodyContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTitleContainer", function() { return PostTitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBodyContainer", function() { return PostBodyContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: 'Inconsolata';\n    text-align: left;\n    margin-left: 20%;\n    margin-right: 20%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n    font-family: 'Inconsolata';\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: white;\n    text-align: center;\n    position: absolute;\n    padding: 10px 5px 10px 10px;\n    bottom: -18px;\n    right: 200px;\n    border-bottom: 1px solid #e6e6e6;\n    font-size: 2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Post = function Post(data) {
  var postTitle = data.postTitle,
      postMainImage = data.postMainImage,
      postCreationDate = data.postCreationDate,
      postBody = data.postBody;
  return data && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostHeader, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostTitleContainer, null, postTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostHeaderImage, {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostDateContainer, null, postCreationDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostBodyContainer, null, postBody));
};

var PostTitleContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject());
var PostDateContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h3(_templateObject2());
var PostHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var PostHeaderImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject4());
var PostBodyContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject5());

Post.getInitialProps = function (context) {
  return context.query.post.fields;
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.585ee550ecd5cbf24d5b.hot-update.js.map