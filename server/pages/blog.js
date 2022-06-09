(function() {
var exports = {};
exports.id = 9195;
exports.ids = [9195];
exports.modules = {

/***/ 9210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(8672);
// EXTERNAL MODULE: ./components/elements/post/PostGrid.jsx
var PostGrid = __webpack_require__(4925);
// EXTERNAL MODULE: ./components/elements/common/CustomPagination.jsx
var CustomPagination = __webpack_require__(9786);
;// CONCATENATED MODULE: ./components/partials/blog/BlogItemsGridView.jsx








const BlogItemsGridView = ({
  collectionSlug,
  columns
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  const {
    0: posts,
    1: setPosts
  } = (0,external_react_.useState)(null);

  async function getPosts() {
    let queries, APIPosts;

    if (collectionSlug !== undefined) {
      queries = {
        slug_eq: collectionSlug
      };
      APIPosts = await PostRepository/* default.getPostsByCollectionSlug */.Z.getPostsByCollectionSlug(queries);
    } else {
      queries = {
        _limit: 6
      };
      APIPosts = await PostRepository/* default.getPosts */.Z.getPosts(queries);
    }

    console.log(APIPosts);

    if (APIPosts) {
      setTimeout(function () {
        setLoading(false);
      }, 200);
      setPosts(APIPosts);
      return APIPosts;
    } else {
      setPosts(null);
      return null;
    }
  }

  (0,external_react_.useEffect)(() => {
    getPosts();
  }, []);
  let postItemsView;

  if (!loading && posts) {
    postItemsView = posts.map(item => {
      if (columns === 4) {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: " col-md-4 col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx(PostGrid/* default */.Z, {
            post: item
          })
        }, item.id);
      } else if (columns === 4) {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-4 col-sm-6",
          children: /*#__PURE__*/jsx_runtime_.jsx(PostGrid/* default */.Z, {
            post: item
          })
        }, item.id);
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx(PostGrid/* default */.Z, {
            post: item
          })
        }, item.id);
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-blog",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-blog__header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "ps-list--blog-links",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "active",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "All"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Life Style"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Technology"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Entertaiment"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Business"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Others"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Fashion"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-blog__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: postItemsView
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomPagination/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ var blog_BlogItemsGridView = (BlogItemsGridView);
// EXTERNAL MODULE: ./components/elements/BreadCrumb2.jsx
var BreadCrumb2 = __webpack_require__(685);
;// CONCATENATED MODULE: ./pages/blog/index.jsx







const BlogGridPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Our Press'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Blog",
    boxed: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page--blog",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-page__header",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Our Press"
          }), /*#__PURE__*/jsx_runtime_.jsx(BreadCrumb2/* default */.Z, {
            breacrumb: breadCrumb
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(blog_BlogItemsGridView, {
          columns: 4
        })]
      })
    })
  });
};

/* harmony default export */ var blog = (BlogGridPage);

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

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,1596,8672,5905,3299], function() { return __webpack_exec__(9210); });
module.exports = __webpack_exports__;

})();