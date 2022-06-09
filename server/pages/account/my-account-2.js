(function() {
var exports = {};
exports.id = 7743;
exports.ids = [7743];
exports.modules = {

/***/ 9971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ my_account_2; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
;// CONCATENATED MODULE: ./components/partials/account/MyAccount2.jsx




class MyAccount extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-my-account-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-section__left",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              className: "ps-form--account ps-tab-root",
              action: "link.html",
              method: "get",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "ps-tab-list",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "active",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#sign-in",
                    children: "Login"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#register",
                    children: "Register"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-tabs",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-tab active",
                  id: "sign-in",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "ps-form__content",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                      children: "Log In Your Account"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                        className: "form-control",
                        type: "text",
                        placeholder: "Username or email address"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "form-group form-forgot",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                        className: "form-control",
                        type: "text",
                        placeholder: "Password"
                      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "",
                        children: "Forgot?"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "ps-checkbox",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          className: "form-control",
                          type: "checkbox",
                          id: "remember-me",
                          name: "remember-me"
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "remember-me",
                          children: "Rememeber me"
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group submit",
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "ps-btn ps-btn--fullwidth",
                        children: "Login"
                      })
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-tab",
                  id: "register",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "ps-form__content",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                      children: "Register An Account"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                        className: "form-control",
                        type: "text",
                        placeholder: "Username or email address"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group",
                      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                        className: "form-control",
                        type: "text",
                        placeholder: "Password"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "ps-form__decs",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "ps-radio",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          className: "form-control",
                          type: "radio",
                          id: "user-type-1",
                          name: "user-type"
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "user-type-1",
                          children: "I am a customer"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "ps-radio",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          className: "form-control",
                          type: "radio",
                          id: "user-type-2",
                          name: "user-type"
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "user-type-2",
                          children: "I am a vendor"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                        children: ["Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our", /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "privacy policy."
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "form-group submit",
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "ps-btn ps-btn--fullwidth",
                        children: "Register"
                      })
                    })]
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-section__right",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
              className: "ps-section__desc",
              children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                children: "Sign up today and you will be able to:"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "MartFury Buyer Protection has you covered from click to delivery. Sign up or sign in and you will be able to:"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "ps-list",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-credit-card"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "SPEED YOUR WAY THROUGH CHECKOUT"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-clipboard-check"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "TRACK YOUR ORDERS EASILY"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-bag2"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "KEEP A RECORD OF ALL YOUR PURCHASES"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-section__coupon",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "$25"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: "A small gift for your first purchase"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Martfury give $25 as a small gift for your first purchase. Welcome to Martfury!"
                })]
              })]
            })]
          })]
        })
      })
    });
  }

}

/* harmony default export */ var MyAccount2 = (MyAccount);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/my-account-2.jsx







class MyAccountPage2 extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadCrumb: [{
        text: 'Home',
        url: '/'
      }, {
        text: 'My Account'
      }]
    };
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
      title: "My account 2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-page--my-account",
        children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
          breacrumb: this.state.breadCrumb
        }), /*#__PURE__*/jsx_runtime_.jsx(MyAccount2, {})]
      })
    });
  }

}

/* harmony default export */ var my_account_2 = (MyAccountPage2);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(9971); });
module.exports = __webpack_exports__;

})();