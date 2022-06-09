(function() {
var exports = {};
exports.id = 2263;
exports.ids = [2263];
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

/***/ 51:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
;// CONCATENATED MODULE: ./components/partials/stores/modules/ModuleStoreInformation.jsx





const ModuleStoreInformation = ({
  store
}) => {
  if (store) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block--vendor",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-block__thumbnail",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/vendor/vendor-store.jpg",
          alt: "martfury"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__header",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: store.name
          }), /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "85% Positive"
            }), " (562 rating)"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__divider"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Digiworld US"
            }), ", New York\u2019s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online"]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ps-block__divider"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Address"
            }), " ", store.address]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
              children: "Foloow us on social"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "ps-list--social-color",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "facebook",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-facebook"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "twitter",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-twitter"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "linkedin",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-linkedin"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "feed",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-feed"
                  })
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__footer",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Call us directly", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: store.phone
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "or Or if you have any question"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn ps-btn--fullwidth",
            href: "#",
            onClick: e => e.preventDefault(),
            children: "Contact Seller"
          })]
        })]
      })]
    });
  } else {
    retu;
  }
};

/* harmony default export */ var modules_ModuleStoreInformation = (ModuleStoreInformation);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupByCarousel.jsx
var ProductGroupByCarousel = __webpack_require__(8999);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./components/elements/products/ProductWide.jsx + 1 modules
var ProductWide = __webpack_require__(7492);
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/partials/shop/modules/ModuleShopSortBy.jsx
var ModuleShopSortBy = __webpack_require__(2968);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(6367);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(4804);
// EXTERNAL MODULE: ./repositories/StoreRepository.js
var StoreRepository = __webpack_require__(8124);
;// CONCATENATED MODULE: ./components/partials/stores/modules/ModuleStoreItems.jsx












const ModuleStoreItems = ({
  products,
  columns = 4,
  pageSize = 12
}) => {
  const Router = (0,router_.useRouter)();
  const {
    slug
  } = Router.query;
  const {
    0: listView,
    1: setListView
  } = (0,external_react_.useState)(true);
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: total,
    1: setTotal
  } = (0,external_react_.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: classes,
    1: setClasses
  } = (0,external_react_.useState)('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');

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

  (0,external_react_.useEffect)(() => {
    if (products) {
      setProductItems(products);
      setTotal(products.length);
    }

    handleSetColumns();
  }, [products]); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      if (listView) {
        const items = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes,
          children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
            product: item
          })
        }, item.id));
        productItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-shop-items",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: items
          })
        });
      } else {
        productItemsView = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(ProductWide/* default */.Z, {
          product: item
        }));
      }
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    const skeletonItems = (0,common_helpers/* generateTempArray */.Z)(12).map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes,
      children: /*#__PURE__*/jsx_runtime_.jsx(SkeletonProduct/* default */.Z, {})
    }, item));
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: skeletonItems
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-shopping",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-shopping__header",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "mr-2",
          children: total
        }), "Products found"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-shopping__actions",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ModuleShopSortBy/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-shopping__view",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "ps-tab-list",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: listView === true ? 'active' : '',
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                onClick: e => handleChangeViewMode(e),
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-grid"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: listView !== true ? 'active' : '',
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                onClick: e => handleChangeViewMode(e),
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-list4"
                })
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-shopping__content",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_ModuleStoreItems = (ModuleStoreItems);
;// CONCATENATED MODULE: ./components/partials/stores/StoreDetail.jsx









const StoreDetail = () => {
  const Router = (0,router_.useRouter)();
  const {
    slug
  } = Router.query;
  const {
    0: store,
    1: setStore
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  async function getStore(params) {
    setLoading(true);
    const responseData = await StoreRepository/* default.getStoreBySlug */.Z.getStoreBySlug(params);

    if (responseData) {
      setStore(responseData);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getStore(slug);
  }, [slug]); //Views

  let storeProductsView;

  if (!loading) {
    if (store && store.products.length > 0) {
      storeProductsView = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-store-products",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ProductGroupByCarousel/* default */.Z, {
          collectionSlug: "best-seller-products",
          title: "Best Seller Products"
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleStoreItems, {
          products: store.products
        })]
      });
    } else {
      storeProductsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    storeProductsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-vendor-store",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-section__container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__left",
          children: store !== null && /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleStoreInformation, {
            store: store && store !== null ? store : null
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__right",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--vendor-filter",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__left"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__right",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                className: "ps-form--search",
                action: "/",
                method: "get",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "form-control",
                  type: "text",
                  placeholder: "Search in this shop"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-search"
                  })
                })]
              })
            })]
          }), storeProductsView]
        })]
      })
    })
  });
};

/* harmony default export */ var stores_StoreDetail = (StoreDetail);
;// CONCATENATED MODULE: ./pages/store/[slug].jsx







const StoreDetailPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Store list',
    url: '/stores'
  }, {
    text: 'Store Detail'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerPage/* default */.Z, {
    title: "Store",
    boxed: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb
    }), /*#__PURE__*/jsx_runtime_.jsx(stores_StoreDetail, {})]
  });
};

/* harmony default export */ var _slug_ = (StoreDetailPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483,5671,8006,1117,8661,8283,1380,5963,7492,8999,8124], function() { return __webpack_exec__(51); });
module.exports = __webpack_exports__;

})();