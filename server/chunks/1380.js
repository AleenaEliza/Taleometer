exports.id = 1380;
exports.ids = [1380];
exports.modules = {

/***/ 4804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





const SkeletonProduct = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-skeleton ps-skeleton--product",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Skeleton.Input, {
      active: true,
      size: 350,
      style: {
        height: 160
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
      paragraph: {
        rows: 4,
        title: true
      }
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SkeletonProduct);

/***/ }),

/***/ 6367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ generateTempArray; }
/* harmony export */ });
/* unused harmony export stickyHeader */
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const generateTempArray = maxItems => {
  let result = [];

  for (let i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

/***/ })

};
;