(function() {
var exports = {};
exports.id = 7274;
exports.ids = [7274];
exports.modules = {

/***/ 2968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleShopSortBy = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
    className: "ps-select form-control",
    "data-placeholder": "Sort Items",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by latest"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by popularity"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by average rating"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by price: low to high"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by price: high to low"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleShopSortBy);

/***/ }),

/***/ 8060:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3646);
/* harmony import */ var _components_partials_shop_ShopBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6338);
/* harmony import */ var _components_partials_shop_ShopBrands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7310);
/* harmony import */ var _components_partials_shop_ShopCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1358);
/* harmony import */ var _components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9616);
/* harmony import */ var _components_partials_shop_ShopItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3875);
/* harmony import */ var _components_partials_product_ProductGroupByCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8999);











const ShopFullwidthPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop layout fullwidth'
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_ContainerShop__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Shop layout fullwidth",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-page--shop",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        breacrumb: breadCrumb,
        layout: "fullwidth"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_shop_ShopBanner__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_shop_ShopBrands__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_shop_ShopCategories__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_ProductGroupByCarousel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          layout: "fullwidth",
          collectionSlug: "shop-best-seller-items",
          title: "Best Sale Items"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_ProductGroupByCarousel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          layout: "fullwidth",
          collectionSlug: "shop-recommend-items",
          title: "Recommended Items"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_shop_ShopItems__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          columns: 6,
          pageSize: 18
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ShopFullwidthPage);

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 6873:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,8483,5671,8006,1117,8661,8283,1380,5963,7492,3646,8999,3875,3197,5502], function() { return __webpack_exec__(8060); });
module.exports = __webpack_exports__;

})();