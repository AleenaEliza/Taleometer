(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 7736:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shop_sidebar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerShop.jsx
var ContainerShop = __webpack_require__(3646);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopCategories.jsx
var WidgetShopCategories = __webpack_require__(8111);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopBrands.jsx
var WidgetShopBrands = __webpack_require__(5187);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetShopFilterByPriceRange.jsx
var WidgetShopFilterByPriceRange = __webpack_require__(3513);
// EXTERNAL MODULE: ./components/partials/shop/ShopItems.jsx
var ShopItems = __webpack_require__(3875);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupByCarousel.jsx
var ProductGroupByCarousel = __webpack_require__(8999);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/shop/ShopSidebarBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ShopSidebarBanner extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-shop-banner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel blur",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/slider/shop-sidebar/1.jpg",
              alt: "martfury"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/slider/shop-sidebar/2.jpg",
              alt: "martfury"
            })
          })
        })]
      }))
    });
  }

}

/* harmony default export */ var shop_ShopSidebarBanner = (ShopSidebarBanner);
;// CONCATENATED MODULE: ./pages/shop/shop-sidebar.jsx












const ShopSidebarPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop Sidebar'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerShop/* default */.Z, {
    title: "Shop Sidebar",
    boxed: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page--shop",
      id: "shop-sidebar",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-layout--shop",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-layout__left",
            children: [/*#__PURE__*/jsx_runtime_.jsx(WidgetShopCategories/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetShopBrands/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetShopFilterByPriceRange/* default */.Z, {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-layout__right",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-page__header",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Shop Sidebar"
              }), /*#__PURE__*/jsx_runtime_.jsx(shop_ShopSidebarBanner, {})]
            }), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupByCarousel/* default */.Z, {
              collectionSlug: "shop-best-seller-items",
              title: "Best Sale Items"
            }), /*#__PURE__*/jsx_runtime_.jsx(ShopItems/* default */.Z, {
              columns: 4,
              pageSize: 12
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var shop_sidebar = (ShopSidebarPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,8483,5671,8006,1117,8661,8283,1380,5963,7492,3646,8999,2771,3875], function() { return __webpack_exec__(7736); });
module.exports = __webpack_exports__;

})();