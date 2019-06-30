webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FilterBar/FilterBar.tsx":
/*!********************************************!*\
  !*** ./components/FilterBar/FilterBar.tsx ***!
  \********************************************/
/*! exports provided: FilterBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return FilterBar; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/FilterBar/components.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);




var FilterBar = function FilterBar(_ref) {
  var tags = _ref.tags;
  var allTags = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a([]);

  var addAllTags = function addAllTags(tags) {
    tags.forEach(function (tag) {
      return allTags.add(tag);
    });
    allTags.add("all");
  };

  tags.data.map(function (tag) {
    addAllTags(tag.fields.postTags);
  });

  var tagArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(allTags);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FilterContainer"], null, tagArr && tagArr.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FilterItemButton"], {
      onClick: function onClick() {
        filterSelection(tag);
      },
      key: tag
    }, tag);
  }));
};

var filterSelection = function filterSelection(tag) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
    if (!x[i].classList.contains(tag)) {
      x[i].setAttribute("style", "display: none");
    } else {
      x[i].setAttribute("style", "display: block");
    }

    if (tag == "all") {
      x[i].setAttribute("style", "display: block");
    }
  }
};

/***/ }),

/***/ "./components/FilterBar/components.tsx":
/*!*********************************************!*\
  !*** ./components/FilterBar/components.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

})
//# sourceMappingURL=index.js.b480900c8855e6006350.hot-update.js.map