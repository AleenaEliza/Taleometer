(function() {
var exports = {};
exports.id = 8074;
exports.ids = [8074];
exports.modules = {

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog_small_thumbnail; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/elements/BreadCrumb2.jsx
var BreadCrumb2 = __webpack_require__(685);
// EXTERNAL MODULE: ./components/partials/blog/BlogItemsSmallThumbView.jsx + 1 modules
var BlogItemsSmallThumbView = __webpack_require__(5949);
// EXTERNAL MODULE: ./components/partials/blog/modules/ModulePostGridItems.jsx
var ModulePostGridItems = __webpack_require__(2671);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogSearch.jsx
var WidgetBlogSearch = __webpack_require__(7695);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogCategories.jsx
var WidgetBlogCategories = __webpack_require__(6470);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentPosts.jsx
var WidgetBlogRecentPosts = __webpack_require__(8776);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentComments.jsx
var WidgetBlogRecentComments = __webpack_require__(9850);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(8672);
// EXTERNAL MODULE: ./components/elements/post/PostGrid.jsx
var PostGrid = __webpack_require__(4925);
// EXTERNAL MODULE: ./components/elements/common/CustomPagination.jsx
var CustomPagination = __webpack_require__(9786);
// EXTERNAL MODULE: ./components/elements/post/PostSmallThumbnail.jsx
var PostSmallThumbnail = __webpack_require__(4268);
;// CONCATENATED MODULE: ./components/partials/blog/modules/ModulePostSmallThumbItems.jsx









const ModulePostSmallThumbItems = ({
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
      return /*#__PURE__*/jsx_runtime_.jsx(PostSmallThumbnail/* default */.Z, {
        post: item
      }, item.id);
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-post-items",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: postItemsView
    }), /*#__PURE__*/jsx_runtime_.jsx(CustomPagination/* default */.Z, {})]
  });
};

/* harmony default export */ var modules_ModulePostSmallThumbItems = (ModulePostSmallThumbItems);
;// CONCATENATED MODULE: ./pages/blog/blog-small-thumbnail.jsx













const BlogSmallThumbnailPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Blog Small Thumbnail'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Blog",
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
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-blog--sidebar",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-blog__left",
            children: /*#__PURE__*/jsx_runtime_.jsx(modules_ModulePostSmallThumbItems, {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-blog__right",
            children: [/*#__PURE__*/jsx_runtime_.jsx(WidgetBlogSearch/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogCategories/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogRecentPosts/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogRecentComments/* default */.Z, {})]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var blog_small_thumbnail = (BlogSmallThumbnailPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,1596,8672,5905,4337,3299,2671,5949], function() { return __webpack_exec__(2864); });
module.exports = __webpack_exports__;

})();