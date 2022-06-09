(function() {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 5421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ search; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(4804);
// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(8661);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(6367);
;// CONCATENATED MODULE: ./components/partials/product/ProductGroupGridItems.jsx








const ProductGroupGridItems = ({
  collectionSlug,
  columns = 3,
  pageSize = 12
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: classes,
    1: setClasses
  } = (0,external_react_.useState)('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');

  async function getProduct() {
    let queries, SPProducts;

    if (collectionSlug !== undefined) {
      SPProducts = await CollectionRepository/* default.getProductsByCollectionSlug */.Z.getProductsByCollectionSlug(collectionSlug);
    } else {
      queries = {
        _limit: pageSize
      };
      SPProducts = await ProductRepository/* default.getProducts */.Z.getProducts(queries);
    }

    if (SPProducts) {
      setTimeout(function () {
        setLoading(false);
      }, 200);

      if (SPProducts.items.length > 0) {
        setProductItems(SPProducts.items);
      }

      return SPProducts;
    } else {
      setProductItems(null);
      return null;
    }
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

  (0,external_react_.useEffect)(() => {
    getProduct();
    handleSetColumns();
  }, [columns, collectionSlug, pageSize]); // Views

  let productItemsView;

  if (!loading && productItems) {
    if (productItems.length > 0) {
      const items = productItems.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes,
          children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
            product: item
          })
        }, item.id);
      });
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: items
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product(s) found."
      });
    }
  } else {
    const skeletonItems = (0,common_helpers/* generateTempArray */.Z)(columns * 2).map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes,
      children: /*#__PURE__*/jsx_runtime_.jsx(SkeletonProduct/* default */.Z, {})
    }, item));
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: skeletonItems
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-shop-items",
    children: productItemsView
  });
};

/* harmony default export */ var product_ProductGroupGridItems = (ProductGroupGridItems);
;// CONCATENATED MODULE: ./pages/search/index.jsx









const SearchPage = ({
  query
}) => {
  const {
    0: pageSize
  } = (0,external_react_.useState)(100);
  const {
    0: keyword,
    1: setKeyword
  } = (0,external_react_.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);

  function handleSetKeyword() {
    if (query && query.keyword !== '') {
      setKeyword(query.keyword);
    } else {
      setKeyword('');
    }
  }

  async function getProductsByKeyword(keyword) {
    handleSetKeyword();
    const queries = {
      _limit: pageSize,
      title_contains: keyword
    };
    setLoading(true);
    const SPProducts = await ProductRepository/* default.getProducts */.Z.getProducts(queries);

    if (SPProducts) {
      if (SPProducts.items.length > 0) {
        setProductItems(SPProducts);
      } else {
        setProductItems(null);
      }

      setTimeout(function () {
        setLoading(false);
      }, 500);
      return SPProducts;
    } else {
      setProductItems(null);
      return null;
    }
  }

  (0,external_react_.useEffect)(() => {
    getProductsByKeyword(query.keyword);
  }, [query]);
  const breadcrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Search Result'
  }];
  let shopItemsView, statusView;

  if (!loading) {
    if (productItems) {
      shopItemsView = /*#__PURE__*/jsx_runtime_.jsx(product_ProductGroupGridItems, {
        columns: 6,
        pageSize: pageSize
      });

      if (productItems.items.length > 0) {
        const items = productItems.items.map(item => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-3 col-sm-6 col-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
              product: item
            })
          }, item.id);
        });
        shopItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-product-items row",
          children: items
        });
        statusView = /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            style: {
              color: '#000'
            },
            children: productItems.totalItems
          }), ' ', "record(s) found."]
        });
      } else {
        shopItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "No product(s) found."
        });
      }
    } else {
      shopItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product(s) found."
      });
    }
  } else {
    statusView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Searching..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerPage/* default */.Z, {
    title: `Search results for: "${keyword}" `,
    boxed: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page",
      children: /*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadcrumb
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-shop ps-shop--search",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-shop__header",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              children: ["Search result for: \"", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: keyword
              }), "\""]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-shop__content",
            children: [statusView, shopItemsView]
          })]
        })
      })
    })]
  });
};

SearchPage.getInitialProps = async ({
  query
}) => {
  return {
    query: query
  };
};

/* harmony default export */ var search = (SearchPage);

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

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

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483,5671,8006,1117,8661,1380], function() { return __webpack_exec__(5421); });
module.exports = __webpack_exports__;

})();