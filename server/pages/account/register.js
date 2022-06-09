(function() {
var exports = {};
exports.id = 1854;
exports.ids = [1854];
exports.modules = {

/***/ 2611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ register; }
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
// EXTERNAL MODULE: ./store/auth/action.js
var action = __webpack_require__(7042);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/partials/account/Register.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Register extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.dispatch((0,action/* login */.x4)());
          router_default().push('/account/login');
        } else {}
      });
    });

    this.state = {};
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-my-account",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
          className: "ps-form--account",
          onSubmit: this.handleSubmit,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "ps-tab-list",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/account/login",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Login"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "active",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/account/register",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Register"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-tab active",
            id: "register",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-form__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: "Register An Account"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                  name: "email",
                  rules: [{
                    required: true,
                    message: 'Please input your email!'
                  }],
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                    className: "form-control",
                    type: "email",
                    placeholder: "Email address"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-group form-forgot",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                  name: "password",
                  rules: [{
                    required: true,
                    message: 'Please input your password!'
                  }],
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                    className: "form-control",
                    type: "password",
                    placeholder: "Password..."
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-group submit",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  className: "ps-btn ps-btn--fullwidth",
                  children: "Register"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-form__footer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Connect with:"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "ps-list--social",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "facebook",
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-facebook"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "google",
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-google-plus"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "twitter",
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-twitter"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "instagram",
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-instagram"
                    })
                  })
                })]
              })]
            })]
          })]
        })
      })
    });
  }

}

const mapStateToProps = state => {
  return state.auth;
};

/* harmony default export */ var account_Register = ((0,external_react_redux_.connect)(mapStateToProps)(Register));
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/register.jsx







const RegisterPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Register an account'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Register",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Register, {})]
    })
  });
};

/* harmony default export */ var register = (RegisterPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(2611); });
module.exports = __webpack_exports__;

})();