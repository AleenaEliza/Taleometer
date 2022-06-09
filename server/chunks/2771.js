exports.id = 2771;
exports.ids = [2771];
exports.modules = {

/***/ 2968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleShopSortBy = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
    className: "ps-select form-control",
    "data-placeholder": "Sort Items",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by latest"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by popularity"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by average rating"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by price: low to high"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      children: "Sort by price: high to low"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleShopSortBy);

/***/ }),

/***/ 5187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);









const WidgetShopBrands = () => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    slug
  } = Router.query;
  const {
    0: brands,
    1: setBrands
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function getCategories() {
    setLoading(true);
    const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__/* .default.getBrands */ .Z.getBrands();

    if (responseData) {
      let brandsGroup = [];

      if (responseData.length > 0) {
        responseData.forEach(brand => {
          brandsGroup.push({
            id: brand.id,
            value: brand.slug,
            label: brand.name
          });
        });
      }

      setBrands(brandsGroup);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  function handleSelectBrand(e) {
    Router.push(`/brand/${e.target.value}`);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCategories();
  }, []); // Views

  let brandsView;

  if (!loading) {
    if (brands && brands.length > 0) {
      const items = brands.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: `shop/${item.slug}`,
          children: item.name
        })
      }, item.id));
      brandsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "ps-list--brands",
        children: items
      });
    } else {}
  } else {
    brandsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
    className: "widget widget_shop widget_shop--brand",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: "widget-title",
      children: "By Brands"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Radio.Group, {
        defaultValue: slug,
        options: brands,
        onChange: handleSelectBrand
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetShopBrands);

/***/ }),

/***/ 8111:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);







const WidgetShopCategories = () => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    slug
  } = Router.query;

  async function getCategories() {
    setLoading(true);
    const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__/* .default.getProductCategories */ .Z.getProductCategories();

    if (responseData) {
      setCategories(responseData);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCategories();
  }, []); // Views

  let categoriesView;

  if (!loading) {
    if (categories && categories.length > 0) {
      const items = categories.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: item.slug === slug ? 'active' : '',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: `/category/${item.slug}`,
          children: item.name
        })
      }, item.slug));
      categoriesView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "ps-list--categories",
        children: items
      });
    } else {}
  } else {
    categoriesView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
    className: "widget widget_shop",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: "widget-title",
      children: "Categories"
    }), categoriesView]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetShopCategories);

/***/ }),

/***/ 3513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






const WidgetShopFilterByPriceRange = () => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: min,
    1: setMin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: max,
    1: setMax
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2000);

  function handleChangeRange(value) {
    setMin(value[0]);

    price_lt: value[1], setMax(value[1]);
    /*  const params = {
        price_gt: value[0],
    };*/


    Router.push(`/shop?price_gt=${value[0]}&price_lt=${value[1]}`);
    /*this.props.dispatch(getProductsByPrice(params));*/
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
    className: "widget widget_shop",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: "widget-title",
        children: "By Price"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Slider, {
        range: true,
        defaultValue: [0, 2000],
        max: 2000,
        onAfterChange: e => handleChangeRange(e)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: ["Price: $", min, " - $ ", max]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WidgetShopFilterByPriceRange);

/***/ })

};
;