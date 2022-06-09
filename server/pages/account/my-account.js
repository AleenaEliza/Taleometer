(function() {
var exports = {};
exports.id = 7993;
exports.ids = [7993];
exports.modules = {

/***/ 247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ my_account; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/partials/account/MyAccount.jsx





class MyAccount extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "ps-my-account ps-page--account",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-section__left",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
                className: "ps-widget--account-dashboard",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-widget__header",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/img/users/3.jpg"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                      children: "Hello"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "username@gmail.com"
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-widget__content",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "active",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/account/my-account",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: "Dashboard"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/account/my-account",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: "Orders"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/account/my-account",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: "Addresses"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/account/my-account",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: "Account Details"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/account/my-account",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: "Logout"
                        })
                      })
                    })]
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-page__dashboard",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Hello ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "user@gmail.com"
                  }), "!"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["From your account dashboard you can view your", ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/orders",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "recent orders"
                    })
                  }), ", manage your", ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/user-information",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "shipping and billing addresses"
                    })
                  }), ", and", ' ', /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/account/user-information",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "edit your password and account details"
                    })
                  }), "."]
                })]
              })
            })
          })]
        })
      })
    });
  }

}

/* harmony default export */ var account_MyAccount = (MyAccount);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/my-account.jsx







const MyAccountPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'My Account'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "My account",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: undefined.state.breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_MyAccount, {})]
    })
  });
};

/* harmony default export */ var my_account = (MyAccountPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(247); });
module.exports = __webpack_exports__;

})();