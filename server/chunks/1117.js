exports.id = 1117;
exports.ids = [1117];
exports.modules = {

/***/ 1117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4063);
/* harmony import */ var _components_elements_products_modules_ModuleProductActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8006);








const Product = ({
  product
}) => {
  // Views
  const priceView = (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__/* .StrapiProductPrice */ .xB)(product);
  const thumbnailImage = (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__/* .StrapiProductThumbnail */ .$J)(product);
  const badgeView = (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__/* .StrapiProductBadge */ .zm)(product);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [thumbnailImage, badgeView, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_modules_ModuleProductActions__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        product: product
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/shop",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-product__vendor",
          children: "Young Shop"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-product__rating",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rating__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "02"
          })]
        }), priceView]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__content hover",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), priceView]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Product);

/***/ })

};
;