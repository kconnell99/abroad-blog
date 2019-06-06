webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/PhotoGrid/components.tsx":
/*!*********************************************!*\
  !*** ./components/PhotoGrid/components.tsx ***!
  \*********************************************/
/*! exports provided: PhotoContainer, ImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoContainer", function() { return PhotoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 100%;\n    max-height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 5px solid white;\n    max-width: 300px;\n    max-height: 300px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 25px;\n    padding: 10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PhotoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());

/***/ }),

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_CMSrequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CMSrequest */ "./services/CMSrequest.ts");
/* harmony import */ var _components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PhotoGrid/components */ "./components/PhotoGrid/components.tsx");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post */ "./pages/post.tsx");








var About = function About(data) {
  var aboutPageTitle = data.aboutPageTitle,
      aboutPageImage = data.aboutPageImage,
      aboutPageText = data.aboutPageText;
  return data && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_6__["PostTitleContainer"], null, aboutPageTitle), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__["PhotoContainer"], {
    style: {
      margin: "auto",
      width: "50%",
      cursor: "auto"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_5__["ImageContainer"], {
    src: aboutPageImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_6__["PostBodyContainer"], {
    style: {
      marginLeft: "40%",
      marginRight: "40%",
      marginTop: "5%"
    }
  }, aboutPageText));
};

About.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_services_CMSrequest__WEBPACK_IMPORTED_MODULE_4__["makeCMSEntryRequest"])('2XFjJ40DoLno1olFIeSA78');

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data.fields);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

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
/* harmony import */ var _components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PhotoGrid/components */ "./components/PhotoGrid/components.tsx");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: left;\n    margin-left: 20%;\n    margin-right: 20%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n"]);

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
  return data && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostTitleContainer, null, postTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_4__["PhotoContainer"], {
    style: {
      margin: "auto",
      width: "50%",
      cursor: "auto"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PhotoGrid_components__WEBPACK_IMPORTED_MODULE_4__["ImageContainer"], {
    src: postMainImage.fields.file.url
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostDateContainer, null, postCreationDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostBodyContainer, null, postBody));
};

var PostTitleContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject());
var PostDateContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h3(_templateObject2());
var PostBodyContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject3());

Post.getInitialProps = function (context) {
  return context.query.post.fields;
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=about.js.41ac39583710983ed974.hot-update.js.map