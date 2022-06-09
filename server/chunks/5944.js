exports.id = 5944;
exports.ids = [5944];
exports.modules = {

/***/ 8058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);





class CountDownSimple extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
      days: null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {
        timeTillDate,
        timeFormat
      } = this.props;
      const then = moment__WEBPACK_IMPORTED_MODULE_2___default()(timeTillDate, timeFormat);
      const now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      const countdown = moment__WEBPACK_IMPORTED_MODULE_2___default()(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      className: "ps-countdown",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "days mr-1",
          children: days
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "hours ml-1 mr-1",
          children: hours
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "minutes ml-1 mr-1",
          children: minutes
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "seconds ml-1",
          children: seconds
        })
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (CountDownSimple);

/***/ }),

/***/ 1523:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ products_ProductDealOfDay; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductActions.js
var ModuleProductActions = __webpack_require__(8006);
;// CONCATENATED MODULE: ./components/elements/products/modules/ModuleProductProgressbar.jsx




const ModuleProductProgressbar = ({
  product
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product__progress-bar ps-progress",
    "data-value": product.inventory,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-progress__value",
      children: product.depot / product.inventory * 100 < 100 ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          width: product.depot / product.inventory * 100 + '%'
        }
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          width: '100%'
        }
      })
    }), product.inventory - product.depot >= 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Sold: ", product.inventory - product.depot]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Sold: ", product.inventory]
    })]
  });
};

/* harmony default export */ var modules_ModuleProductProgressbar = (ModuleProductProgressbar);
;// CONCATENATED MODULE: ./components/elements/products/ProductDealOfDay.jsx










const ProductDealOfDay = ({
  product
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product ps-product--inner",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [(0,product_helper/* StrapiProductThumbnail */.$J)(product), (0,product_helper/* StrapiProductBadge */.zm)(product), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductActions/* default */.Z, {
        product: product
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-product__vendor",
          children: "Young Shop"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__content",
        children: [(0,product_helper/* StrapiProductPriceExpanded */.cg)(product), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__rating",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: product.ratingCount
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleProductProgressbar, {
          product: product
        })]
      })]
    })]
  });
};

/* harmony default export */ var products_ProductDealOfDay = ((0,external_react_redux_.connect)()(ProductDealOfDay));

/***/ })

};
;