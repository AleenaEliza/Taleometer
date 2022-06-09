(function() {
var exports = {};
exports.id = 2743;
exports.ids = [2743];
exports.modules = {

/***/ 7696:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4063);






const ProductCart = ({
  product
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product--cart",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-product__thumbnail",
      children: (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__/* .StrapiProductThumbnail */ .$J)(product)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-product__content",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-product__title",
          children: product.title
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductCart);

/***/ }),

/***/ 4401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ wishlist; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__(8483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./components/elements/products/ProductCart.jsx
var ProductCart = __webpack_require__(7696);
;// CONCATENATED MODULE: ./components/partials/account/Wishlist.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Wishlist extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddItemToCart", (e, product) => {
      this.props.dispatch((0,action/* addItem */.jX)(product));
    });

    _defineProperty(this, "handleRemoveWishListItem", (e, product) => {
      e.preventDefault();
      this.props.dispatch((0,wishlist_action/* removeWishlistItem */.Q9)(product));
    });
  }

  render() {
    const {
      wishlistItems
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section--shopping ps-whishlist",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Wishlist"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__content",
          children: wishlistItems && wishlistItems.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "alert alert-danger",
            role: "alert",
            children: "Wishlist is empty!"
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table ps-table--whishlist",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {}), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Product name"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Unit Price"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Vendor"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {})]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                children: wishlistItems.map(product => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      onClick: e => this.handleRemoveWishListItem(e, product),
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "icon-cross"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(ProductCart/* default */.Z, {
                      product: product
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                    className: "price",
                    children: ["$", product.price]
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: product.vendor
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "ps-btn",
                      href: "",
                      onClick: e => this.handleAddItemToCart(e, product),
                      children: "Add to cart"
                    })
                  })]
                }, product.id))
              })]
            })
          })
        })]
      })
    });
  }

}

const mapStateToProps = state => {
  return state.wishlist;
};

/* harmony default export */ var account_Wishlist = ((0,external_react_redux_.connect)(mapStateToProps)(Wishlist));
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/wishlist.jsx







const WishlistPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Wishlist'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "wishlist",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Wishlist, {})]
    })
  });
};

/* harmony default export */ var wishlist = (WishlistPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483], function() { return __webpack_exec__(4401); });
module.exports = __webpack_exports__;

})();