(function() {
var exports = {};
exports.id = 4685;
exports.ids = [4685];
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

/***/ 6325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shopping_cart; }
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/products/ProductCart.jsx
var ProductCart = __webpack_require__(7696);
;// CONCATENATED MODULE: ./components/partials/account/ShoppingCart.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ShoppingCart extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRemoveCartItem", product => {
      this.props.dispatch((0,action/* removeItem */.cl)(product));
    });
  }

  componentDidMount() {
    this.props.dispatch((0,action/* getCart */.dv)());
  }

  handleIncreaseItemQty(product) {
    this.props.dispatch((0,action/* increaseItemQty */.zb)(product));
  }

  handleDecreaseItemQty(product) {
    this.props.dispatch((0,action/* decreaseItemQty */.WG)(product));
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props;
    let currentCartItems = [];

    if (cartItems && cartItems.length > 0) {
      currentCartItems = cartItems;
    }

    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section--shopping ps-shopping-cart",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Shopping Cart"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table ps-table--shopping-cart",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Product"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Price"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Quantity"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Total"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                children: currentCartItems.map(product => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(ProductCart/* default */.Z, {
                      product: product
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                    className: "price",
                    children: ["$", product.price]
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "form-group--number",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "up",
                        onClick: this.handleIncreaseItemQty.bind(this, product),
                        children: "+"
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "down",
                        onClick: this.handleDecreaseItemQty.bind(this, product),
                        children: "-"
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        className: "form-control",
                        type: "text",
                        placeholder: "1",
                        value: product.quantity,
                        readOnly: true
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                    children: ["$", product.quantity * product.price]
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      onClick: this.handleRemoveCartItem.bind(this, product),
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "icon-cross"
                      })
                    })
                  })]
                }, product.id))
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-section__cart-actions",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-arrow-left mr-2"
                }), "Back to Shop"]
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__footer",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row justify-content-end",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block--shopping-total",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-block__header",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Subtotal ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: [" $", amount]
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                    className: "ps-block__product",
                    children: cartItems.length > 0 ? cartItems.map((product, index) => {
                      if (index < 3) {
                        return /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "ps-block__estimate",
                            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                              href: "/product/[pid]",
                              as: `/product/${product.id}`,
                              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                                className: "ps-product__title",
                                children: [product.title, /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "x", ' ', product.quantity]
                              })
                            })
                          })
                        }, product.id);
                      }
                    }) : ''
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                    children: ["Total ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: ["$", amount]
                    })]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/account/checkout",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-btn ps-btn--fullwidth",
                  children: "Proceed to checkout"
                })
              })]
            })
          })
        })]
      })
    });
  }

}

const mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ var account_ShoppingCart = ((0,external_react_redux_.connect)(mapStateToProps)(ShoppingCart));
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/shopping-cart.jsx







const ShoppingCartPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shopping Cart'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Shopping Cart",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_ShoppingCart, {})]
    })
  });
};

/* harmony default export */ var shopping_cart = (ShoppingCartPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(6325); });
module.exports = __webpack_exports__;

})();