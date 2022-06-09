(function() {
var exports = {};
exports.id = 4086;
exports.ids = [4086];
exports.modules = {

/***/ 5914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ user_information; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/shared/FormChangeUserInformation.js





const FormChangeUserInformation = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: "ps-form--account-setting",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-form__header",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Account Information"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-form__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group",
        children: /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "form-control",
          type: "text",
          placeholder: "Username or email address"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "First name"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Last name"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Phone Number"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Email Address"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Address"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "City"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Country"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "form-group submit",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "ps-btn",
          children: "Update profile"
        })
      })]
    })]
  });
};

/* harmony default export */ var shared_FormChangeUserInformation = (FormChangeUserInformation);
;// CONCATENATED MODULE: ./components/partials/account/UserInformation.jsx






const UserInformation = () => {
  const accountLinks = [{
    text: 'Account Information',
    url: '/account/user-information',
    icon: 'icon-user',
    active: true
  }, {
    text: 'Notifications',
    url: '/account/notifications',
    icon: 'icon-alarm-ringing'
  }, {
    text: 'Invoices',
    url: '/account/invoices',
    icon: 'icon-papers'
  }, {
    text: 'Address',
    url: '/account/addresses',
    icon: 'icon-map-marker'
  }, {
    text: 'Recent Viewed Product',
    url: '/account/recent-viewed-product',
    icon: 'icon-store'
  }, {
    text: 'Wishlist',
    url: '/account/wishlist',
    icon: 'icon-heart'
  }]; //Views

  const accountLinkView = accountLinks.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: item.active ? 'active' : '',
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: item.url,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: item.icon
        }), item.text]
      })
    })
  }, item.text));
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-my-account ps-page--account",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3",
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
                  className: "ps-list--user-links",
                  children: [accountLinks.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: link.active ? 'active' : '',
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: link.url,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: link.icon
                        }), link.text]
                      })
                    })
                  }, link.text)), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/account/my-account",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "icon-power-switch"
                        }), "Logout"]
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
            children: /*#__PURE__*/jsx_runtime_.jsx(shared_FormChangeUserInformation, {})
          })
        })]
      })
    })
  });
};

/* harmony default export */ var account_UserInformation = (UserInformation);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/user-information.jsx







const UserInformationPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'User Information'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "User Information",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_UserInformation, {})]
    })
  });
};

/* harmony default export */ var user_information = (UserInformationPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(5914); });
module.exports = __webpack_exports__;

})();