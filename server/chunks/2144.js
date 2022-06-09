exports.id = 2144;
exports.ids = [2144];
exports.modules = {

/***/ 2144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_products_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1117);
/* harmony import */ var _components_elements_products_ProductWide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7492);
/* harmony import */ var _components_partials_shop_modules_ModuleShopSortBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2968);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6367);
/* harmony import */ var _components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4804);








/*
 * NOTICE!
 * This component just dipslay product items, not fetching data.
 * */

const ProductItems = ({
  products,
  columns = 4
}) => {
  const {
    0: listView,
    1: setListView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: productItems,
    1: setProductItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: total,
    1: setTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: classes,
    1: setClasses
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');

  function handleChangeViewMode(e) {
    e.preventDefault();
    setListView(!listView);
  }

  function handleSetColumns() {
    switch (columns) {
      case 2:
        setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
        return 3;
        break;

      case 4:
        setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
        return 4;
        break;

      case 6:
        setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
        return 6;
        break;

      default:
        setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleSetColumns();
    setTotal(products.length);
    setProductItems(products);
  }, [products]); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      if (listView) {
        const items = productItems.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: classes,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            product: item
          })
        }, item.id));
        productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-shop-items",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: items
          })
        });
      } else {
        productItemsView = productItems.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_ProductWide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          product: item
        }));
      }
    } else {
      productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    const skeletonItems = (0,_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_6__/* .generateTempArray */ .Z)(12).map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
    }, item));
    productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: skeletonItems
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-shopping",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-shopping__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
          className: "mr-2",
          children: total
        }), "Products found"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-shopping__actions",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_shop_modules_ModuleShopSortBy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-shopping__view",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "View"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "ps-tab-list",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: listView === true ? 'active' : '',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                onClick: e => handleChangeViewMode(e),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "icon-grid"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: listView !== true ? 'active' : '',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                onClick: e => handleChangeViewMode(e),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "icon-list4"
                })
              })
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-shopping__content",
      children: productItemsView
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductItems);

/***/ })

};
;