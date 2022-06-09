(function() {
var exports = {};
exports.id = 5260;
exports.ids = [5260];
exports.modules = {

/***/ 1275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6916);
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8594);





const MenuCategories = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
  source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__/* .product_categories */ .a,
  className: "menu--dropdown"
});

/* harmony default export */ __webpack_exports__["Z"] = (MenuCategories);

/***/ }),

/***/ 410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _pid_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/layouts/ContainerProductDetail.jsx + 1 modules
var ContainerProductDetail = __webpack_require__(9470);
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProductDetail.jsx
var SkeletonProductDetail = __webpack_require__(6239);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/product/ProductWidgets.jsx + 3 modules
var ProductWidgets = __webpack_require__(3543);
// EXTERNAL MODULE: ./components/elements/detail/ProductDetailFullwidth.jsx
var ProductDetailFullwidth = __webpack_require__(4939);
// EXTERNAL MODULE: ./components/partials/product/CustomerBought.jsx
var CustomerBought = __webpack_require__(8405);
// EXTERNAL MODULE: ./components/partials/product/RelatedProduct.jsx
var RelatedProduct = __webpack_require__(5331);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/shared/headers/modules/MenuCategories.jsx
var MenuCategories = __webpack_require__(1275);
// EXTERNAL MODULE: ./components/shared/headers/modules/SearchHeader.jsx
var SearchHeader = __webpack_require__(5828);
// EXTERNAL MODULE: ./components/shared/headers/modules/HeaderActions.jsx
var HeaderActions = __webpack_require__(7006);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationDefault.jsx
var NavigationDefault = __webpack_require__(2271);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
;// CONCATENATED MODULE: ./components/elements/products/ProductOnHeader.jsx








const ProductOnHeader = ({
  product
}) => {
  // Views
  const priceView = (0,product_helper/* StrapiProductPrice */.xB)(product);
  const thumbnailImage = (0,product_helper/* StrapiProductThumbnail */.$J)(product);
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleAddItemToCart = e => {
    e.preventDefault();
    dispatch((0,action/* addItem */.jX)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product--header-sticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-product__thumbnail",
      children: thumbnailImage
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-product__content",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__shopping",
        children: [priceView, /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-btn",
          href: "#",
          onClick: e => handleAddItemToCart(e),
          children: "Add to Cart"
        })]
      })]
    })]
  });
};

/* harmony default export */ var products_ProductOnHeader = (ProductOnHeader);
// EXTERNAL MODULE: ./components/elements/common/Logo.js
var Logo = __webpack_require__(7760);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderProduct.jsx












const HeaderProduct = ({
  product
}) => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--1 header--product",
    "data-sticky": "true",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__left",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu--product-categories",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "menu__toggle",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-menu"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: " Shop by Department"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu__content",
              children: /*#__PURE__*/jsx_runtime_.jsx(MenuCategories/* default */.Z, {})
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__center",
          children: /*#__PURE__*/jsx_runtime_.jsx(SearchHeader/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__right",
          children: /*#__PURE__*/jsx_runtime_.jsx(HeaderActions/* default */.Z, {})
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NavigationDefault/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navigation navigation--product",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(products_ProductOnHeader, {
          product: product
        })
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderProduct = (HeaderProduct);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__(4731);
;// CONCATENATED MODULE: ./pages/product/[pid].jsx

















const ProductDefaultPage = () => {
  const router = (0,router_.useRouter)();
  const {
    pid
  } = router.query;
  const {
    0: product,
    1: setProduct
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  async function getProduct(pid) {
    setLoading(true);
    const responseData = await ProductRepository/* default.getProductsById */.Z.getProductsById(pid);

    if (responseData) {
      setProduct(responseData);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProduct(pid);
  }, [pid]);
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop',
    url: '/shop'
  }, {
    text: product ? product.title : 'Loading...'
  }]; // Views

  let productView, headerView;

  if (!loading) {
    if (product) {
      productView = /*#__PURE__*/jsx_runtime_.jsx(ProductDetailFullwidth/* default */.Z, {
        product: product
      });
      headerView = /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderProduct, {
        product: product
      });
    } else {
      headerView = /*#__PURE__*/jsx_runtime_.jsx(HeaderDefault/* default */.Z, {});
    }
  } else {
    productView = /*#__PURE__*/jsx_runtime_.jsx(SkeletonProductDetail/* default */.Z, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerProductDetail/* default */.Z, {
    title: product ? product.title : 'Loading...',
    children: [headerView, /*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb,
      layout: "fullwidth"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page--product",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-page__container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-page__left",
            children: productView
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-page__right",
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductWidgets/* default */.Z, {})
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(CustomerBought/* default */.Z, {
          layout: "fullwidth",
          collectionSlug: "deal-of-the-day"
        }), /*#__PURE__*/jsx_runtime_.jsx(RelatedProduct/* default */.Z, {
          collectionSlug: "shop-recommend-items"
        })]
      })
    })]
  });
};

/* harmony default export */ var _pid_ = (ProductDefaultPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483,5671,8006,1117,8661,8283,1380,5963,9775,7037,7140], function() { return __webpack_exec__(410); });
module.exports = __webpack_exports__;

})();