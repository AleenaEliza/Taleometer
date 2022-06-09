(function() {
var exports = {};
exports.id = 8015;
exports.ids = [8015];
exports.modules = {

/***/ 8837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shipping; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/partials/account/modules/ModulePaymentOrderSummary.js
var ModulePaymentOrderSummary = __webpack_require__(3121);
;// CONCATENATED MODULE: ./components/partials/account/Shipping.jsx






const Shipping = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-checkout ps-section--shopping",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Shipping Information"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-8 col-lg-8 col-md-12 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--shipping",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__panel",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
                    children: "Contact"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "test@gmail.com"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/checkout",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Change"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
                    children: "Ship to"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "2015 South Street, Midland, Texas"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/checkout",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Change"
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Shipping Method"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__panel",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
                    children: "International Shipping"
                  }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "$20.00"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__footer",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/account/checkout",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "icon-arrow-left mr-2"
                    }), "Return to information"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/account/payment",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "ps-btn",
                    children: "Continue to payment"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-form__orders",
              children: /*#__PURE__*/jsx_runtime_.jsx(ModulePaymentOrderSummary/* default */.Z, {
                shipping: true
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var account_Shipping = (Shipping);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/shipping.jsx









const ShippingPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shopping Cart',
    url: '/account/shopping-cart'
  }, {
    text: 'Checkout Information',
    url: '/account/checkout'
  }, {
    text: 'Shipping'
  }];
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    dispatch((0,action/* getCart */.dv)());
  }, [dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Shipping",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Shipping, {})]
    })
  });
};

/* harmony default export */ var shipping = ((0,external_react_redux_.connect)()(ShippingPage));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,3121], function() { return __webpack_exec__(8837); });
module.exports = __webpack_exports__;

})();