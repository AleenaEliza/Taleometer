(function() {
var exports = {};
exports.id = 9035;
exports.ids = [9035];
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

/***/ 6467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ invoice_detail; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/account/modules/AccountMenuSidebar.jsx
var AccountMenuSidebar = __webpack_require__(281);
// EXTERNAL MODULE: ./components/partials/account/modules/TableNotifications.jsx
var TableNotifications = __webpack_require__(6269);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/products/ProductCart.jsx
var ProductCart = __webpack_require__(7696);
;// CONCATENATED MODULE: ./components/partials/account/InvoiceDetail.jsx








class InvoiceDetail extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const accountLinks = [{
      text: 'Account Information',
      url: '/account/user-information',
      icon: 'icon-user'
    }, {
      text: 'Notifications',
      url: '/account/notifications',
      icon: 'icon-alarm-ringing'
    }, {
      text: 'Invoices',
      url: '/account/invoices',
      icon: 'icon-papers',
      active: true
    }, {
      text: 'Address',
      url: '/account/addresses',
      icon: 'icon-papers'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product',
      icon: 'icon-papers'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist',
      icon: 'icon-papers'
    }];
    const invoiceProducts = [{
      id: '6',
      thumbnail: '/static/img/products/shop/5.jpg',
      title: 'Grand Slam Indoor Of Show Jumping Novel',
      vendor: "Robert's Store",
      sale: true,
      price: '32.99',
      salePrice: '41.00',
      rating: true,
      ratingCount: '4',
      badge: [{
        type: 'sale',
        value: '-37%'
      }]
    }, {
      id: '7',
      thumbnail: '/static/img/products/shop/6.jpg',
      title: 'Sound Intone I65 Earphone White Version',
      vendor: 'Youngshop',
      sale: true,
      price: '100.99',
      salePrice: '106.00',
      rating: true,
      ratingCount: '5',
      badge: [{
        type: 'sale',
        value: '-5%'
      }]
    }];
    return /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "ps-my-account ps-page--account",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__left",
              children: /*#__PURE__*/jsx_runtime_.jsx(AccountMenuSidebar/* default */.Z, {
                data: accountLinks
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-section--account-setting",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-section__header",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                    children: ["Invoice #500884010 -", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "Successful delivery"
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-section__content",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-md-4 col-12",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                        className: "ps-block--invoice",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                          children: "Address"
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "ps-block__content",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                            children: "John Walker"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Address: 3481 Poe Lane, Westphalia, Kansas"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Phone: 913-489-1853"
                          })]
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-md-4 col-12",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                        className: "ps-block--invoice",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                          children: "Shipping Fee"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "ps-block__content",
                          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Shipping Fee: Free"
                          })
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-md-4 col-12",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                        className: "ps-block--invoice",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                          children: "Payment"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "ps-block__content",
                          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Payment Method: Visa"
                          })
                        })]
                      })
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
                            children: "Amount"
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                        children: invoiceProducts.map(product => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                            children: /*#__PURE__*/jsx_runtime_.jsx(ProductCart/* default */.Z, {
                              product: product
                            })
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                            className: "price",
                            children: ["$", product.price]
                          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                            children: "1"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                            className: "price",
                            children: ["$", product.price]
                          })]
                        }, product.id))
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/invoices",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "ps-btn ps-btn--sm ",
                      children: "Back to invoices"
                    })
                  })]
                })]
              })
            })
          })]
        })
      })
    });
  }

}

/* harmony default export */ var account_InvoiceDetail = (InvoiceDetail);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/invoice-detail.jsx







const InvoiceDetailPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Invoice Detail'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Invoice detail",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_InvoiceDetail, {})]
    })
  });
};

/* harmony default export */ var invoice_detail = (InvoiceDetailPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,281,6269], function() { return __webpack_exec__(6467); });
module.exports = __webpack_exports__;

})();