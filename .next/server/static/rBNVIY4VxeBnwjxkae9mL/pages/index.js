module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+diC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// CONCATENATED MODULE: ./components/Modals/ModalPopup.tsx

var ModalPopup_ModalPopup = function ModalPopup(body) {
  var background = Object(external_react_["useRef"])(body);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("form", {
    action: "mailto:ktconnell99@gmail.com",
    method: "POST",
    enctype: "multipart/form-data",
    name: "EmailTestForm"
  }, "Your Name:", external_react_default.a.createElement("br", null), external_react_default.a.createElement("input", {
    type: "text",
    name: "VisitorName"
  }), external_react_default.a.createElement("br", null), "Your Comment:", external_react_default.a.createElement("br", null), external_react_default.a.createElement("textarea", {
    name: "VisitorComment"
  }), external_react_default.a.createElement("input", {
    type: "submit",
    value: "Email This Form"
  })));
};
// EXTERNAL MODULE: ./components/Modals/components.tsx
var components = __webpack_require__("XFXx");

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// CONCATENATED MODULE: ./components/NavBar/components.tsx


function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\ntransition: .3s all ease;\n  &:hover{\n    color: rgba(0, 0, 0, 0.5);\n    transition: .3s all ease;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    text-align: center;\n    padding: 25px;\n    margin: 0px;\n    cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 100%;\n    padding: 25px;\n    display: flex;\n    float: bottom;\n    flex-direction: row;\n    justify-content: space-around;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 100vw;\n    height: 200px;\n    display: relative;\n    border-bottom: 1px solid #e6e6e6;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  text-decoration: none;\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n  display: inline-block;\n  transition: all .4s;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NavBarItemContainer = styled_default.a.div(_templateObject());
var FullNavBarContainer = styled_default.a.div(_templateObject2());
var NavBarItemsContainer = styled_default.a.div(_templateObject3());
var NavBarTitle = styled_default.a.h1(_templateObject4());
var NavBarItemText = styled_default.a.a(_templateObject5());
// CONCATENATED MODULE: ./components/NavBar/NavBarItem.tsx







var NavBarItem_NavBarItem = function NavBarItem(props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      contactIsShown = _useState2[0],
      setContactIsShown = _useState2[1];

  var togglePopup = function togglePopup() {
    return setContactIsShown(!contactIsShown);
  };

  var handleChildClick = function handleChildClick(e) {
    e.stopPropagation();
  };

  var linkName = props.children.toLowerCase();

  if (linkName === 'home') {
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
      href: './'
    }, external_react_default.a.createElement(NavBarItemContainer, null, external_react_default.a.createElement(NavBarItemText, null, props.children))));
  }

  if (linkName === 'contact') {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(NavBarItemContainer, {
      onClick: togglePopup
    }, external_react_default.a.createElement(NavBarItemText, null, props.children)), contactIsShown && external_react_default.a.createElement(ModalPopup_ModalPopup, null)), contactIsShown && external_react_default.a.createElement(components["a" /* Modal */], null, external_react_default.a.createElement(components["c" /* ModalClose */], {
      role: "button",
      onClick: function onClick() {
        return setContactIsShown(false);
      }
    }, "X"), external_react_default.a.createElement(ModalPopup_ModalPopup, null)));
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
    href: '/' + linkName
  }, external_react_default.a.createElement(NavBarItemContainer, null, external_react_default.a.createElement(NavBarItemText, null, props.children))));
};

/* harmony default export */ var NavBar_NavBarItem = (NavBarItem_NavBarItem);
// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./components/NavBar/NavBar.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });


function NavBar_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["*{\n            color: black;\n            font-family: 'Josefin Sans', arial, sans-serif;\n        }"]);

  NavBar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function NavBar() {
  var options = ["HOME", "ABOUT", "PHOTOS", "CONTACT"];
  var layoutOptions = options.map(function (item) {
    return external_react_default.a.createElement(NavBar_NavBarItem, {
      key: item
    }, item);
  });
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Josefin+Sans",
    rel: "stylesheet",
    key: "google-font-josefin+sans"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Inconsolata",
    rel: "stylesheet",
    key: "google-font-inconsolata"
  }), external_react_default.a.createElement(core_["Global"], {
    styles: Object(core_["css"])(NavBar_templateObject())
  }), external_react_default.a.createElement(FullNavBarContainer, null, external_react_default.a.createElement(link_default.a, {
    href: './'
  }, external_react_default.a.createElement(NavBarTitle, null, "Blog title")), external_react_default.a.createElement(NavBarItemsContainer, null, layoutOptions)));
}

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./components/NavBar/NavBar.tsx + 3 modules
var NavBar = __webpack_require__("+diC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/set.js
var set = __webpack_require__("ttDY");
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// CONCATENATED MODULE: ./components/Posts/components.tsx


function _templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    padding-top: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    text-align: center;\n    font-family: 'Inconsolata';\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-weight: 700;\n    font-size: 28px;\n    margin: 0 0 20px 0;\n    text-align: left;\n    &:hover{\n        text-decoration: underline;\n\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-family: \"Roboto\", Arial, sans-serif;\n    padding: 20px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    overflow: hidden;\n    width: 100%;\n    height: 200px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin: 20px;\n    cursor: pointer;\n    flex: 0 1 calc(30% - 1em);\n    border: 1px solid #efefef;\n    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    &:after{\n        content: \"\";\n        position: absolute;\n        z-index: -1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n        opacity: 0;\n        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n    &:hover{\n        -webkit-transform: scale(1.10, 1.10);\n        transform: scale(1.10, 1.10);\n        &:after{\n            opacity: 1;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PostContainer = styled_default.a.div(_templateObject());
var PostImageContainer = styled_default.a.div(_templateObject2());
var PostImage = styled_default.a.img(_templateObject3());
var PostDescription = styled_default.a.div(_templateObject4());
var PostTitle = styled_default.a.h2(_templateObject5());
var PostDate = styled_default.a.h3(_templateObject6());
var PostGridContainer = styled_default.a.div(_templateObject7());
var PostGridTitle = styled_default.a.h2(_templateObject8());
// CONCATENATED MODULE: ./components/Posts/PostCard.tsx





var tagsToString = function tagsToString(tags) {
  var ret = tags.join(" ");
  return ret;
};

var PostCard_allTags = new set_default.a([]);

var PostCard_addAllTags = function addAllTags(tags) {
  tags.forEach(function (tag) {
    return PostCard_allTags.add(tag);
  });
};

var PostCard_PostCard = function PostCard(_ref) {
  var post = _ref.post;
  var _post$fields = post.fields,
      postTitle = _post$fields.postTitle,
      postMainImage = _post$fields.postMainImage,
      postCreationDate = _post$fields.postCreationDate,
      postUrl = _post$fields.postUrl,
      postTags = _post$fields.postTags;
  PostCard_addAllTags(postTags);
  return external_react_default.a.createElement(PostContainer, {
    style: {
      display: "block"
    },
    id: postUrl,
    className: "filterDiv ".concat(tagsToString(postTags))
  }, external_react_default.a.createElement(link_default.a, {
    href: postUrl
  }, external_react_default.a.createElement("a", {
    style: {
      textDecoration: "none",
      display: "block"
    }
  }, external_react_default.a.createElement(PostImageContainer, null, external_react_default.a.createElement(PostImage, {
    src: postMainImage.fields.file.url
  })), external_react_default.a.createElement(PostDescription, null, external_react_default.a.createElement(PostDate, null, postCreationDate), external_react_default.a.createElement(PostTitle, null, postTitle)))));
};

/* harmony default export */ var Posts_PostCard = (PostCard_PostCard);
// CONCATENATED MODULE: ./components/Posts/PostGrid.tsx



function PostGrid(_ref) {
  var posts = _ref.posts;
  return external_react_default.a.createElement(PostGridContainer, null, posts && posts.data.map(function (post) {
    return external_react_default.a.createElement(Posts_PostCard, {
      key: post.sys.id,
      post: post
    });
  }));
}
// EXTERNAL MODULE: ./services/CMSrequest.ts + 1 modules
var CMSrequest = __webpack_require__("piDg");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// CONCATENATED MODULE: ./components/FilterBar/components.tsx


function components_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    border-radius: 5px;\n    padding: 5px;\n    margin: 5px;\n    display: block;\n    outline: 0;\n"]);

  components_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function components_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  border-radius: 5px;\n  padding: 5px;\n  margin: 5px;\n  &:focus{\n    background-color: yellow;\n    outline: 0;\n  }\n"]);

  components_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function components_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  transition: visibility 0s, opacity 0.5s linear;\n  padding: 0;\n  display: flex;\n  margin: 0;\n"]);

  components_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FilterContainer = styled_default.a.ul(components_templateObject());
var FilterItemButton = styled_default.a.button(components_templateObject2());
var FilterBarButton = styled_default.a.button(components_templateObject3());
// CONCATENATED MODULE: ./components/FilterBar/FilterBar.tsx




var FilterBar_FilterBar = function FilterBar(_ref) {
  var tags = _ref.tags;
  var allTags = new set_default.a([]);

  var addAllTags = function addAllTags(tags) {
    tags.forEach(function (tag) {
      return allTags.add(tag);
    });
    allTags.add("all");
  };

  tags.data.map(function (tag) {
    addAllTags(tag.fields.postTags);
  });

  var tagArr = from_default()(allTags);

  return external_react_default.a.createElement(FilterContainer, null, tagArr && tagArr.map(function (tag) {
    return external_react_default.a.createElement(FilterItemButton, {
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
// CONCATENATED MODULE: ./components/FilterBar/FilterButton.tsx





var FilterButton_FilterButton = function FilterButton(_ref) {
  var tags = _ref.tags;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isFilterBarShown = _useState2[0],
      setIsFilterBarShown = _useState2[1];

  var handleClick = function handleClick() {
    setIsFilterBarShown(!isFilterBarShown);
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(FilterBarButton, {
    onClick: handleClick
  }, "Filter"), isFilterBarShown && external_react_default.a.createElement(FilterBar_FilterBar, {
    tags: tags
  }));
};
// CONCATENATED MODULE: ./pages/index.tsx




function pages_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  background-color: white;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 100vh;\n  width: 100 vw;\n  "]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var pages_Index = function Index(data) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(NavBar["a" /* default */], null), external_react_default.a.createElement(PostGridTitle, null, "Latest Posts", external_react_default.a.createElement(FilterButton_FilterButton, {
    tags: data
  })), external_react_default.a.createElement(HomePageContainer, null, external_react_default.a.createElement(PostGrid, {
    posts: data
  })));
};

pages_Index.getInitialProps =
/*#__PURE__*/
Object(asyncToGenerator["a" /* default */])(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var data;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(CMSrequest["a" /* makeCMSContentRequest */])('blogPost');

        case 2:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
var HomePageContainer = styled_default.a.div(pages_templateObject());
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XFXx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalCaption; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rt45");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n    animation-name: zoom;\n    animation-duration: 0.6s;\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n    &:hover,&:focus{\n        color: #bbb;\n        text-decoration: none;\n        cursor: pointer; \n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto;\n    background-color: rgba(0,0,0,0.9);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Modal = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ModalClose = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var ModalContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3());
var ModalCaption = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "piDg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// CONCATENATED MODULE: ./env.ts
/* harmony default export */ var env = ({
  API_SPACE_KEY: '7nio64lc6xum',
  API_ACCESS_TOKEN: '2BRt1UfcIexpHhwfkP98K0ydPgIB8vATWysOcDrOI78'
});
// CONCATENATED MODULE: ./services/CMSrequest.ts
/* unused harmony export client */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeCMSEntryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCMSContentRequest; });




var contentful = __webpack_require__("5NG/");

var envVars = env.API_SPACE_KEY ? env : process.env;
var client = contentful.createClient({
  space: envVars.API_SPACE_KEY,
  environment: 'master',
  // defaults to 'master' if not set
  accessToken: envVars.API_ACCESS_TOKEN
});
var makeCMSEntryRequest =
/*#__PURE__*/
function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(entryID) {
    var entry;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.getEntry(entryID);

          case 3:
            entry = _context.sent;
            return _context.abrupt("return", entry);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
            ;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function makeCMSEntryRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var makeCMSContentRequest =
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(contentID) {
    var _ref3, items;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return client.getEntries({
              'content_type': contentID
            });

          case 3:
            _ref3 = _context2.sent;
            items = _ref3.items;
            return _context2.abrupt("return", items);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 11:
            ;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function makeCMSContentRequest(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });