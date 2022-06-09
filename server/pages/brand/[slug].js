(function() {
var exports = {};
exports.id = 4627;
exports.ids = [4627];
exports.modules = {

/***/ 4191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3646);
/* harmony import */ var _components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9616);
/* harmony import */ var _components_shared_widgets_WidgetShopCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8111);
/* harmony import */ var _components_shared_widgets_WidgetShopBrands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5187);
/* harmony import */ var _components_shared_widgets_WidgetShopFilterByPriceRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3513);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8930);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_partials_product_ProductItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2144);












const ProductByBrandScreen = () => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    slug
  } = Router.query;
  const {
    0: brand,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function getCategry() {
    setLoading(true);

    if (slug) {
      const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_7__/* .default.getProductsByBrand */ .Z.getProductsByBrand(slug);

      if (responseData) {
        setCategory(responseData);
        setTimeout(function () {
          setLoading(false);
        }.bind(this), 250);
      }
    } else {
      await Router.push('/shop');
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCategry();
  }, [slug]);
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop',
    url: '/'
  }, {
    text: brand ? brand.name : 'Product brand'
  }]; //Views

  let productItemsViews;

  if (!loading) {
    if (brand && brand.products.length > 0) {
      productItemsViews = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_product_ProductItems__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        columns: 4,
        products: brand.products
      });
    } else {
      productItemsViews = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No Product found"
      });
    }
  } else {
    productItemsViews = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_ContainerShop__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: brand ? brand.name : 'Brand',
    boxed: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-page--shop",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-layout--shop ps-shop--category",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "ps-layout__left",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_widgets_WidgetShopCategories__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_widgets_WidgetShopBrands__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_widgets_WidgetShopFilterByPriceRange__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "ps-layout__right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
              className: "ps-shop__heading",
              children: ["Brand: ", brand && brand.name]
            }), productItemsViews]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductByBrandScreen);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,8483,5671,8006,1117,1380,7492,3646,2771,2144], function() { return __webpack_exec__(4191); });
module.exports = __webpack_exports__;

})();