(function() {
var exports = {};
exports.id = 4709;
exports.ids = [4709];
exports.modules = {

/***/ 5822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shop_carousel; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/layouts/ContainerShop.jsx
var ContainerShop = __webpack_require__(3646);
// EXTERNAL MODULE: ./store/collection/action.js
var action = __webpack_require__(4459);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/shop/ShopCarouselBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ShopCarouselBanner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-shop-banner",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
      className: "ps-carousel inside",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/shop-default/1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/shop-default/2.jpg",
            alt: "martfury"
          })
        })
      })]
    }))
  });
};

/* harmony default export */ var shop_ShopCarouselBanner = (ShopCarouselBanner);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./components/elements/products/ProductHorizontal.jsx
var ProductHorizontal = __webpack_require__(1050);
;// CONCATENATED MODULE: ./components/partials/shop/ShopCarouselTopDeal.jsx








const ShopCarouselTopDeal = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemView = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: item
        })
      }, item.id));
    } else {
      productItemView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--container-hightlight",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__header",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Top Deals Super Hot Today"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: productItemView
      })
    })]
  });
};

/* harmony default export */ var shop_ShopCarouselTopDeal = (ShopCarouselTopDeal);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupByCarousel.jsx
var ProductGroupByCarousel = __webpack_require__(8999);
;// CONCATENATED MODULE: ./pages/shop/shop-carousel.jsx











const ShopCategoriesPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop Carousel'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerShop/* default */.Z, {
    title: "Shop Carousel",
    boxed: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb,
      layout: "fullwidth"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page--shop",
      id: "shop-carousel",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(shop_ShopCarouselBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(shop_ShopCarouselTopDeal, {
          collectionSlug: "shop-top-deals-super-hot-today"
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupByCarousel/* default */.Z, {
          collectionSlug: "best-seller-products",
          title: "Best Seller Products"
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupByCarousel/* default */.Z, {
          collectionSlug: "new-arrivals-products",
          title: "Best Seller Products"
        })]
      })
    })]
  });
};

/* harmony default export */ var shop_carousel = (ShopCategoriesPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,8483,5671,8006,1117,8661,8283,1380,5963,3646,1050,8999,4459], function() { return __webpack_exec__(5822); });
module.exports = __webpack_exports__;

})();