exports.id = 3646;
exports.ids = [3646];
exports.modules = {

/***/ 3646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4731);
/* harmony import */ var _components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8260);
/* harmony import */ var _components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7095);
/* harmony import */ var _components_partials_commons_Newletters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7786);
/* harmony import */ var _components_shared_footers_FooterFullwidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5068);
/* harmony import */ var _components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5392);











const ContainerShop = ({
  children,
  title,
  boxed = false
}) => {
  let titleView;

  if (title !== null) {
    titleView = process.env.title + ' | ' + title;
  } else {
    titleView = process.env.title + ' | ' + process.env.titleDescription;
  }

  if (boxed) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "martfury",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
          children: titleView
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_commons_Newletters__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        layout: "container"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "martfury",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
          children: titleView
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_commons_Newletters__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_footers_FooterFullwidth__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})]
    });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (ContainerShop);

/***/ }),

/***/ 5068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4613);
/* harmony import */ var _modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(948);







const FooterFullwidth = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
  className: "ps-footer",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
  })
});

/* harmony default export */ __webpack_exports__["Z"] = (FooterFullwidth);

/***/ })

};
;