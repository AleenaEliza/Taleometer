(function() {
var exports = {};
exports.id = 1796;
exports.ids = [1796];
exports.modules = {

/***/ 1707:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ edit_address; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/partials/account/modules/FormEditAddress.jsx




class FormEditAddress extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "ps-form--edit-address",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-form__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Billing address"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-form__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["FirstName ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Lastname ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            children: "Company Name"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Country ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Street Address ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["State ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Postcode ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Email address ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
              children: "*"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "",
            className: "form-control"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "form-group submit",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "ps-btn",
            children: "Save Address"
          })
        })]
      })]
    });
  }

}

/* harmony default export */ var modules_FormEditAddress = (FormEditAddress);
;// CONCATENATED MODULE: ./components/partials/account/EditAddress.jsx






class EditAddress extends external_react_.Component {
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
      icon: 'icon-papers'
    }, {
      text: 'Address',
      url: '/account/addresses',
      icon: 'icon-map-marker',
      active: true
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product',
      icon: 'icon-store'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist',
      icon: 'icon-heart'
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
            className: "col-lg-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__content",
              children: /*#__PURE__*/jsx_runtime_.jsx(modules_FormEditAddress, {})
            })
          })]
        })
      })
    });
  }

}

/* harmony default export */ var account_EditAddress = (EditAddress);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/edit-address.jsx







const EditAddressPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Edit address'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Edit Address",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_EditAddress, {})]
    })
  });
};

/* harmony default export */ var edit_address = (EditAddressPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596], function() { return __webpack_exec__(1707); });
module.exports = __webpack_exports__;

})();