exports.id = 7037;
exports.ids = [7037];
exports.modules = {

/***/ 8645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_detail_description_PartialDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9183);
/* harmony import */ var _components_elements_detail_description_PartialSpecification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3458);
/* harmony import */ var _components_elements_detail_description_PartialVendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7947);
/* harmony import */ var _components_elements_detail_description_PartialReview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7080);
/* harmony import */ var _components_elements_detail_description_PartialOffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7084);









const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__.Tabs;

const DefaultDescription = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "ps-product__content ps-tab-root",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      defaultActiveKey: "1",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "Description",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_PartialDescription__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
      }, "1"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "Specification",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_PartialSpecification__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})
      }, "2"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "Vendor",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_PartialVendor__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
      }, "3"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "Reviews (1)",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_PartialReview__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})
      }, "4"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "Questions and Answers",
        children: "Content of Tab Pane 3"
      }, "5"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
        tab: "More Offers",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_PartialOffer__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {})
      }, "6")]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DefaultDescription);

/***/ }),

/***/ 3543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ product_ProductWidgets; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetProductFeatures.jsx




const WidgetProductFeatures = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "widget widget_product widget_features",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-network"
      }), " Shipping worldwide"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-3d-rotate"
      }), " Free 7-day return if eligible, so easy"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-receipt"
      }), " Supplier give bills for this product."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-credit-card"
      }), " Pay online or when receiving goods"]
    })]
  });
};

/* harmony default export */ var widgets_WidgetProductFeatures = (WidgetProductFeatures);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetSaleOnSite.jsx





const WidgetSaleOnSite = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: "widget widget_sell-on-site",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-store"
      }), " Sell on Martfury?", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/account/register",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: " Register Now !"
        })
      })]
    })
  });
};

/* harmony default export */ var widgets_WidgetSaleOnSite = (WidgetSaleOnSite);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetProductSameBrands.jsx
var WidgetProductSameBrands = __webpack_require__(1599);
;// CONCATENATED MODULE: ./components/shared/widgets/WidgetShopAds.jsx




const WidgetShopAds = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: "widget widget_ads",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/shop",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/ads/product-ads.png",
          alt: "martfury"
        })
      })
    })
  });
};

/* harmony default export */ var widgets_WidgetShopAds = (WidgetShopAds);
;// CONCATENATED MODULE: ./components/partials/product/ProductWidgets.jsx








const ProductWidgets = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(widgets_WidgetProductFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(widgets_WidgetSaleOnSite, {}), /*#__PURE__*/jsx_runtime_.jsx(widgets_WidgetShopAds, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetProductSameBrands/* default */.Z, {
      collectionSlug: "shop-same-brand"
    })]
  });
};

/* harmony default export */ var product_ProductWidgets = (ProductWidgets);

/***/ })

};
;