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


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: 'Inconsolata';\n    text-align: left;\n    margin-left: 20%;\n    margin-right: 20%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 5px;\n    border: 1px solid #e6e6e6;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: 100%;\n    opacity: 0.8;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    display: block;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    margin: 0px;\n    left: 0;\n    right: 0;\n    bottom: 0%;\n    width: 60%;\n    color: white;\n    font-size: 4em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Post = function Post(data) {
  var postTitle = data.postTitle,
      postMainImage = data.postMainImage,
      postCreationDate = data.postCreationDate,
      postBody = data.postBody,
      postTags = data.postTags;
  var tags = postTags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostTag, {
      key: tag
    }, tag);
  });
  return data && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostHeader, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      background: "linear-gradient(to bottom, #000000 70%, #e6e6e6 100%)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostHeaderImage, {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostTitleContainer, null, postTitle)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostTagsContainer, null, tags), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostDateContainer, null, postCreationDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostBodyContainer, null, postBody));
};

var PostTitleContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject());
var PostDateContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h3(_templateObject2());
var PostHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var PostHeaderImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject4());
var PostTag = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());
var PostTagsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6());
var PostBodyContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject7());

Post.getInitialProps = function (context) {
  return context.query.post.fields;
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.a495845bfaf90e9f5c4d.hot-update.js.map