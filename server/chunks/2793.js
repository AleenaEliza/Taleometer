exports.id = 2793;
exports.ids = [2793];
exports.modules = {

/***/ 2793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_elements_products_ProductDealOfDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1523);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6367);
/* harmony import */ var _components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4804);
/* harmony import */ var _utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5963);
/* harmony import */ var _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8283);
/* harmony import */ var _components_elements_CountDownSimple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8058);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ProductGroupDealOfDay = ({
  collectionSlug,
  categorySlug,
  boxed = false
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  async function getProducts() {
    setLoading(true);
    let responseData;

    if (collectionSlug) {
      responseData = await (0,_utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProductsByCollectionHelper */ .l)(collectionSlug);
    }

    if (categorySlug) {
      responseData = await (0,_utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProductsByCategoriesHelper */ .b)(categorySlug);
    }

    if (responseData) {
      console.log(responseData);
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_ProductDealOfDay__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        product: item
      }, item.id));
      productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_7__/* .carouselStandard */ .aL), {}, {
        className: "ps-carousel outside",
        children: slideItems
      }));
    } else {
      productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    const skeletons = (0,_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__/* .generateTempArray */ .Z)(6).map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "col-xl-2 col-lg-3 col-sm-3 col-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
    }, item));
    productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: skeletons
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "ps-deal-of-day",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: boxed ? 'ps-container' : 'ps-container',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-block--countdown-deal",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "ps-block__left",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              children: "Auction"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "ps-block__right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                children: "End in:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_CountDownSimple__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                timeTillDate: "12 31 2021, 6:00 am",
                timeFormat: "MM DD YYYY, h:mm a"
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/shop",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "View all"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ps-section__content",
        children: productItemsView
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductGroupDealOfDay);

/***/ })

};
;