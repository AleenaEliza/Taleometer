(function() {
var exports = {};
exports.id = 4862;
exports.ids = [4862];
exports.modules = {

/***/ 2718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ order_tracking; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/partials/account/OrderTracking.jsx




const OrderTracking = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-order-tracking",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-section__header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Order Tracking"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "To track your order please enter your Order ID in the box below and press the \"Track\" button. This was given to you\x03on your receipt and in the confirmation email you should have received."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "ps-form--order-tracking",
        action: "/",
        method: "get",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            children: "Order ID"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "text",
            placeholder: "Found in your order confimation email"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            children: "Billing Email"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "form-control",
            type: "text",
            placeholder: ""
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-group",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "ps-btn ps-btn--fullwidth",
            children: "Track Your Order"
          })
        })]
      })
    })]
  })
});

/* harmony default export */ var account_OrderTracking = (OrderTracking);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/order-tracking.jsx







const OrderTrackingPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Order Tracking'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Order Tracking",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_OrderTracking, {})]
    })
  });
};

/* harmony default export */ var order_tracking = (OrderTrackingPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(2718); });
module.exports = __webpack_exports__;

})();