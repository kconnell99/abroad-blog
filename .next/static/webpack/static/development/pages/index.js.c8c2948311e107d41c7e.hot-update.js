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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Posts_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Posts/PostCard */ "./components/Posts/PostCard.tsx");



var FilterBar = function FilterBar() {
  var tagArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_Posts_PostCard__WEBPACK_IMPORTED_MODULE_2__["allTags"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tagArr && tagArr.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return filterSelection(tag);
      },
      key: tag
    }, tag);
  }));
}; // function filterSelection(tag: string) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (tag == "all") tag = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(tag) > -1) w3AddClass(x[i], "show");
//   }
// }

function filterSelection(tag) {
  var x, i;
  var removeArr = [];
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
    if (!x[i].classList.contains(tag)) {
      console.log(x[i].attributes);
      x[i].setAttribute("style", "visibility: hidden"); // removeArr.push(x[i]);
    }
  } // for(i=0;i<removeArr.length;i++){
  //   removeArr[i].remove();
  // }

} // Show filtered elements


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
} // Hide elements that are not selected


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  console.log(arr1);
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(" ");
} // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

/***/ })

})
//# sourceMappingURL=index.js.c8c2948311e107d41c7e.hot-update.js.map