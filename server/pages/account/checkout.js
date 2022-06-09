(function() {
var exports = {};
exports.id = 9838;
exports.ids = [9838];
exports.modules = {

/***/ 2179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ checkout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/partials/account/modules/FormCheckoutInformation.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FormCheckoutInformation extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLoginSubmit", () => {
      router_default().push('/account/shipping');
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
      className: "ps-form__billing-info",
      onFinish: this.handleLoginSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "ps-form__heading",
        children: "Contact information"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "name",
          rules: [{
            required: false,
            message: 'Enter an email or mobile phone number!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            className: "form-control",
            type: "text",
            placeholder: "Email or phone number"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "checkbox",
            id: "keep-update"
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "keep-update",
            children: "Keep me up to date on news and exclusive offers?"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "ps-form__heading",
        children: "Shipping address"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
              name: "firstName",
              rules: [{
                required: false,
                message: 'Enter your first name!'
              }],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                className: "form-control",
                type: "text",
                placeholder: "First Name"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
              name: "lastName",
              rules: [{
                required: false,
                message: 'Enter your last name!'
              }],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                className: "form-control",
                type: "text",
                placeholder: "Last Name"
              })
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "address",
          rules: [{
            required: false,
            message: 'Enter an address!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            className: "form-control",
            type: "text",
            placeholder: "Address"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "apartment",
          rules: [{
            required: false,
            message: 'Enter an Apartment!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            className: "form-control",
            type: "text",
            placeholder: "Apartment, suite, etc. (optional)"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
              name: "city",
              rules: [{
                required: false,
                message: 'Enter a city!'
              }],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                className: "form-control",
                type: "city",
                placeholder: "City"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
              name: "postalCode",
              rules: [{
                required: false,
                message: 'Enter a postal oce!'
              }],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                className: "form-control",
                type: "postalCode",
                placeholder: "Postal Code"
              })
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-checkbox",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "checkbox",
            id: "save-information"
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "save-information",
            children: "Save this information for next time"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-form__submit",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/account/cart",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon-arrow-left mr-2"
            }), "Return to shopping cart"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__footer",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "ps-btn",
            children: "Continue to shipping"
          })
        })]
      })]
    });
  }

}

/* harmony default export */ var modules_FormCheckoutInformation = (FormCheckoutInformation);
// EXTERNAL MODULE: ./components/partials/account/modules/ModulePaymentOrderSummary.js
var ModulePaymentOrderSummary = __webpack_require__(3121);
;// CONCATENATED MODULE: ./components/partials/account/Checkout.jsx






const Checkout = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-checkout ps-section--shopping",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Checkout Information"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-form--checkout",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-form__content",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-xl-8 col-lg-8 col-md-12 col-sm-12",
                children: /*#__PURE__*/jsx_runtime_.jsx(modules_FormCheckoutInformation, {})
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-form__orders",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Your order"
                  }), /*#__PURE__*/jsx_runtime_.jsx(ModulePaymentOrderSummary/* default */.Z, {})]
                })
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ var account_Checkout = (Checkout);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/checkout.jsx









const CheckoutPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shopping Cart',
    url: '/account/shopping-cart'
  }, {
    text: 'Checkout Information'
  }];
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    dispatch((0,action/* getCart */.dv)());
  }, [dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Checkout",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Checkout, {})]
    })
  });
};

/* harmony default export */ var checkout = ((0,external_react_redux_.connect)()(CheckoutPage));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,3121], function() { return __webpack_exec__(2179); });
module.exports = __webpack_exports__;

})();