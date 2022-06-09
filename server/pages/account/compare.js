(function() {
var exports = {};
exports.id = 6265;
exports.ids = [6265];
exports.modules = {

/***/ 7601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ compare; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/partials/account/Compare.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Compare extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddItemToCart", product => {
      this.props.dispatch((0,action/* addItem */.jX)(product));
    });

    _defineProperty(this, "handleRemoveCompareItem", (e, product) => {
      e.preventDefault();
      this.props.dispatch((0,compare_action/* removeCompareItem */.MH)(product));
    });
  }

  render() {
    const {
      compareItems
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-compare ps-section--shopping",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Compare Product"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__content",
          children: compareItems && compareItems.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "alert alert-danger",
            role: "alert",
            children: "Compare list is empty!"
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/jsx_runtime_.jsx("table", {
              className: "table ps-table--compare",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "heading",
                    rowSpan: "2",
                    children: "Product"
                  }), compareItems && compareItems.length > 0 ? compareItems.map(product => /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      onClick: e => this.handleRemoveCompareItem(e, product),
                      children: "Remove"
                    })
                  }, product.id)) : /*#__PURE__*/jsx_runtime_.jsx("td", {})]
                }), /*#__PURE__*/jsx_runtime_.jsx("tr", {
                  children: compareItems && compareItems.length > 0 ? compareItems.map(product => /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "ps-product--compare",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "ps-product__thumbnail",
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/product/[pid]",
                          as: `/product/${product.id}`,
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                              src: product.thumbnail,
                              alt: "martfury"
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "ps-product__content",
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/product/[pid]",
                          as: `/product/${product.id}`,
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "ps-product__title",
                            children: product.title
                          })
                        })
                      })]
                    })
                  }, product.id)) : /*#__PURE__*/jsx_runtime_.jsx("td", {})
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "heading",
                    children: "Rating"
                  }), compareItems && compareItems.length > 0 ? compareItems.map(product => /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Rate, {
                      disabled: true,
                      defaultValue: 4
                    })
                  }, product.id)) : /*#__PURE__*/jsx_runtime_.jsx("td", {})]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "heading",
                    children: "Price"
                  }), compareItems && compareItems.length > 0 ? compareItems.map(product => {
                    if (product.sale === true) {
                      return /*#__PURE__*/jsx_runtime_.jsx("td", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                          className: "price sale",
                          children: ["$", product.price, /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
                            children: ["$", product.salePrice]
                          })]
                        })
                      }, product.id);
                    } else return /*#__PURE__*/jsx_runtime_.jsx("td", {
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        className: "price",
                        children: ["$", ' ', product.price]
                      })
                    }, product.id);
                  }) : /*#__PURE__*/jsx_runtime_.jsx("td", {})]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "heading",
                    children: "Sold By"
                  }), compareItems && compareItems.length > 0 ? compareItems.map(product => /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/vendor/store-list",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: product.vendor
                      })
                    })
                  }, product.id)) : /*#__PURE__*/jsx_runtime_.jsx("td", {})]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "heading"
                  }), compareItems && compareItems.length > 0 ? compareItems.map(product => /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "ps-btn",
                      children: "Add To Cart"
                    })
                  }, product.id)) : /*#__PURE__*/jsx_runtime_.jsx("td", {})]
                })]
              })
            })
          })
        })]
      })
    });
  }

}

const mapStateToProps = state => {
  return state.compare;
};

/* harmony default export */ var account_Compare = ((0,external_react_redux_.connect)(mapStateToProps)(Compare));
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/compare.jsx







const ComparePage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Compare'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Compare",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--simple",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Compare, {})]
    })
  });
};

/* harmony default export */ var compare = (ComparePage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,5671], function() { return __webpack_exec__(7601); });
module.exports = __webpack_exports__;

})();