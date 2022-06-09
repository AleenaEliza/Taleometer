exports.id = 7140;
exports.ids = [7140];
exports.modules = {

/***/ 4939:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6305);
/* harmony import */ var _components_elements_detail_description_DefaultDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8645);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1544);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9672);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1123);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3665);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3582);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2805);












const ProductDetailFullwidth = ({
  product
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product--detail ps-product--fullwidth",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        product: product
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__info",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
          product: product
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          product: product
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          product: product
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {})]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_description_DefaultDescription__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductDetailFullwidth);

/***/ }),

/***/ 9470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_ContainerProductDetail; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/shared/footers/FooterFullwidth.jsx
var FooterFullwidth = __webpack_require__(5068);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/shared/header-mobile/HeaderMobileProduct.jsx







const HeaderMobileProduct = () => {
  const stickyHeader = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById('header-mobile');

    if (header !== null) {
      if (number >= 300) {
        header.classList.add('header--sticky');
      } else {
        header.classList.remove('header--sticky');
      }
    }
  };

  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "header header--mobile header--mobile-product",
    id: "header-mobile",
    "data-sticky": "true",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navigation--mobile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "navigation__left",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "/",
            className: "header__back",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon-chevron-left"
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Back to previous"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "navigation__right",
        children: /*#__PURE__*/jsx_runtime_.jsx(MobileHeaderActions/* default */.Z, {})
      })]
    })
  });
};

/* harmony default export */ var header_mobile_HeaderMobileProduct = (HeaderMobileProduct);
;// CONCATENATED MODULE: ./components/layouts/ContainerProductDetail.jsx








const ContainerProductDetail = ({
  children,
  title
}) => {
  let titleView;

  if (title !== null) {
    titleView = process.env.title + ' | ' + title;
  } else {
    titleView = process.env.title + ' | ' + process.env.titleDescription;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "martfury",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: titleView
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(header_mobile_HeaderMobileProduct, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Newletters/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(FooterFullwidth/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerProductDetail = (ContainerProductDetail);

/***/ })

};
;