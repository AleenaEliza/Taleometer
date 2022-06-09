(function() {
var exports = {};
exports.id = 6147;
exports.ids = [6147];
exports.modules = {

/***/ 4101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ vendor_dashboard_free; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var FooterDefault = __webpack_require__(5392);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__(4731);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
;// CONCATENATED MODULE: ./components/partials/vendor/VendorDashboard.jsx




const VendorDashboard = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-vendor-dashboard",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-section__header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Vendor Dasboard Free"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Designed base on WC Vendor Plugin. Martfury also fully comptatiable with other popular plugins as Dokan, YITH, etc .Can help you turns your site into multi-vendor eCommerce site."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-section__content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "ps-section__links",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "active",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: "Dashboard"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: "Products"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: "Order"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: "Setting"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: "View Store"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block--vendor-dashboard",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Sale Report"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("form", {
            className: "ps-form--vendor-datetimepicker",
            action: "/",
            method: "get",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "input-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group-prepend",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "input-group-text",
                      id: "time-from",
                      children: "From"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control ps-datepicker",
                    "aria-label": "Username",
                    "aria-describedby": "time-from"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "input-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group-prepend",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "input-group-text",
                      id: "time-form",
                      children: "To"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control ps-datepicker",
                    "aria-label": "Username",
                    "aria-describedby": "time-to"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                  className: "ps-btn",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-sync2"
                  }), " Update"]
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table ps-table ps-table--vendor",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "date"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Product"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Price"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Sold"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Commission"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Rate"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 4, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Marshall Kilburn Portable Wireless Bluetooth Spe..."
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$235.35"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "25"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$2940.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "24.5%"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 4, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Unero Military Classical Backpack"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$42.35"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "10"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$211.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "17.5%"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 4, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Sleeve Linen Blend Caro Pana T-Shirt"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$23.35"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "80"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$935.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "62.5%"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 30, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Harman Kardon Onyx Studio 2.0"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$299.35"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "14"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$2095.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "62.5%"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 30, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Korea Long Sofa Fabric In Blu Navy Color"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$299.35"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "5"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$6095.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "62.5%"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    colSpan: "3",
                    children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "Total"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "124 Sale"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    colSpan: "2",
                    children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "$12.104.725"
                    })
                  })]
                })]
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block--vendor-dashboard",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Recent Orders"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__content",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "table ps-table ps-table--vendor",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "date"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Order ID"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Shipping"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Total Price"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Status"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    children: "Information"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 4, 2019"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "MS46891357"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$00.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$295.47"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Open"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "View Detail"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Nov 2, 2017"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "AP47305441"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$00.00"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "$25.47"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: "Close"
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "View Detail"
                    })
                  })]
                })]
              })]
            })
          })
        })]
      })]
    })]
  })
});

/* harmony default export */ var vendor_VendorDashboard = (VendorDashboard);
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/shared/headers/HeaderMobile.jsx
var HeaderMobile = __webpack_require__(8260);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
;// CONCATENATED MODULE: ./pages/vendor/vendor-dashboard-free.jsx











const VendorDashboardFreeLayoutPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Vendor dashboard'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "site-content",
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderDefault/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--single",
      children: [/*#__PURE__*/jsx_runtime_.jsx(vendor_VendorDashboard, {}), /*#__PURE__*/jsx_runtime_.jsx(Newletters/* default */.Z, {
        layout: "container"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterDefault/* default */.Z, {})]
  });
};

/* harmony default export */ var vendor_dashboard_free = (VendorDashboardFreeLayoutPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500], function() { return __webpack_exec__(4101); });
module.exports = __webpack_exports__;

})();