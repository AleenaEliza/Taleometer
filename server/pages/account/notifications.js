(function() {
var exports = {};
exports.id = 2769;
exports.ids = [2769];
exports.modules = {

/***/ 5776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ notifications; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/account/Addresses.jsx
var Addresses = __webpack_require__(3589);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./components/partials/account/modules/AccountMenuSidebar.jsx
var AccountMenuSidebar = __webpack_require__(281);
// EXTERNAL MODULE: ./components/partials/account/modules/TableNotifications.jsx
var TableNotifications = __webpack_require__(6269);
;// CONCATENATED MODULE: ./components/partials/account/Notifications.jsx








class Notifications extends external_react_.Component {
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
      icon: 'icon-alarm-ringing',
      active: true
    }, {
      text: 'Invoices',
      url: '/account/invoices',
      icon: 'icon-papers'
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
                  children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Notifications"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-section__content",
                  children: /*#__PURE__*/jsx_runtime_.jsx(TableNotifications/* default */.Z, {})
                })]
              })
            })
          })]
        })
      })
    });
  }

}

/* harmony default export */ var account_Notifications = (Notifications);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/notifications.jsx








const AccountNotificationsPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Addresses'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Notifications",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Notifications, {})]
    })
  });
};

/* harmony default export */ var notifications = (AccountNotificationsPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,281,3589,6269], function() { return __webpack_exec__(5776); });
module.exports = __webpack_exports__;

})();