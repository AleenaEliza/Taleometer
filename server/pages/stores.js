(function() {
var exports = {};
exports.id = 3813;
exports.ids = [3813];
exports.modules = {

/***/ 2552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ stores; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./repositories/StoreRepository.js
var StoreRepository = __webpack_require__(8124);
;// CONCATENATED MODULE: ./utilities/store-helpers.jsx
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */


async function getStoresHelper(pageSize = 12) {
  let stores;
  const queries = {
    _limit: pageSize
  };
  stores = await StoreRepository/* default.getStores */.Z.getStores(queries);

  if (stores) {
    return stores;
  } else {
    return null;
  }
}
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/elements/stores/StoreDefault.jsx






const StoreDefault = ({
  source
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "ps-block--store-2",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__content bg--cover",
      style: {
        background: `url('/static/img/vendor/store/default-store-banner.png')`
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/store/[slug]",
            as: `/store/${source.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: source.name
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__rating",
          children: /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: source.address
        }), source.phone && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-telephone"
          }), " ", source.phone]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__author",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__user",
        href: "#",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/vendor/store/vendor-150x150.jpg",
          alt: "martfury"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/store/[slug]",
        as: `/store/${source.slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-btn",
          children: "Visit Store"
        })
      })]
    })]
  });
};

/* harmony default export */ var stores_StoreDefault = (StoreDefault);
;// CONCATENATED MODULE: ./components/partials/stores/StoreItems.jsx





const StoreItems = () => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: stores,
    1: setStores
  } = (0,external_react_.useState)(null);

  async function getStores() {
    setLoading(true);
    const responseData = await getStoresHelper();

    if (responseData) {
      setLoading(false);

      if (responseData.length > 0) {
        setStores(responseData);
      }
    }
  }

  (0,external_react_.useEffect)(() => {
    getStores();
  }, []); // Views

  let storesItemsView;

  if (!loading) {
    if (stores) {
      storesItemsView = stores.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(stores_StoreDefault, {
          source: item
        })
      }, item.id));
    } else {
      storesItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No store found."
      });
    }
  } else {
    storesItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-stores-items row",
    children: storesItemsView
  });
};

/* harmony default export */ var stores_StoreItems = (StoreItems);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
;// CONCATENATED MODULE: ./pages/stores/index.jsx







const StoreListPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Stores'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Store list",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--single ps-page--vendor",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "ps-store-list",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-section__header",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Store list"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-section__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-section__search row",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "icon-magnifier"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "Search vendor..."
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(stores_StoreItems, {})]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var stores = (StoreListPage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8124], function() { return __webpack_exec__(2552); });
module.exports = __webpack_exports__;

})();