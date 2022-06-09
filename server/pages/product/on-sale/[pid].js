(function() {
var exports = {};
exports.id = 9677;
exports.ids = [9677];
exports.modules = {

/***/ 5893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_ContainerProductDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9470);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _components_elements_skeletons_SkeletonProductDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6239);
/* harmony import */ var _components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9616);
/* harmony import */ var _components_partials_product_ProductWidgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3543);
/* harmony import */ var _components_elements_detail_ProductDetailFullwidth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4939);
/* harmony import */ var _components_partials_product_CustomerBought__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8405);
/* harmony import */ var _components_partials_product_RelatedProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5331);
/* harmony import */ var _components_layouts_ContainerPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1596);















const ProductDefaultPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    pid
  } = router.query;
  const {
    0: product,
    1: setProduct
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function getProduct(pid) {
    setLoading(true);
    const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__/* .default.getProductsById */ .Z.getProductsById(pid);

    if (responseData) {
      setProduct(responseData);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProduct(pid);
  }, [pid]);
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop',
    url: '/shop'
  }, {
    text: 'Product on Sale'
  }]; // Views

  let productView;

  if (!loading) {
    if (product) {
      productView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_ProductDetailFullwidth__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        product: product
      });
    } else {}
  } else {
    productView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_skeletons_SkeletonProductDetail__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_ContainerPage__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    title: product ? product.title : 'Loading...',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      breacrumb: breadCrumb,
      layout: "fullwidth"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-page--product",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-page__container",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "ps-page__left",
            children: productView
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "ps-page__right",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_ProductWidgets__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {})
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_CustomerBought__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          layout: "fullwidth",
          collectionSlug: "deal-of-the-day"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_RelatedProduct__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
          collectionSlug: "shop-recommend-items"
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductDefaultPage);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483,5671,8006,1117,8661,8283,1380,5963,9775,7037,7140], function() { return __webpack_exec__(5893); });
module.exports = __webpack_exports__;

})();