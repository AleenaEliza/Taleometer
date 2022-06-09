(function() {
var exports = {};
exports.id = 3699;
exports.ids = [3699];
exports.modules = {

/***/ 2118:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog_right_sidebar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var footers_FooterDefault = __webpack_require__(5392);
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var headers_HeaderDefault = __webpack_require__(4731);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var navigation_NavigationList = __webpack_require__(7095);
;// CONCATENATED MODULE: ./components/layouts/LayoutDefault.jsx




/*import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';*/






const LayoutDefault = ({
  children,
  title
}) => {
  let titleView;

  if (title !== undefined) {
    titleView = process.env.title + ' | ' + title;
  } else {
    titleView = process.env.title + ' | ' + process.env.titleDescription;
  }

  return /*#__PURE__*/_jsxs("div", {
    className: "martfury",
    children: [/*#__PURE__*/_jsx(Head, {
      children: /*#__PURE__*/_jsx("title", {
        children: titleView
      })
    }), /*#__PURE__*/_jsx(HeaderDefault, {}), /*#__PURE__*/_jsx(NavigationList, {}), children, /*#__PURE__*/_jsx(Newsletters, {
      layout: "container"
    }), /*#__PURE__*/_jsx(FooterDefault, {})]
  });
};

/* harmony default export */ var layouts_LayoutDefault = ((/* unused pure expression or super */ null && (LayoutDefault)));
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/elements/BreadCrumb2.jsx
var BreadCrumb2 = __webpack_require__(685);
// EXTERNAL MODULE: ./components/partials/blog/BlogItemsSmallThumbView.jsx + 1 modules
var BlogItemsSmallThumbView = __webpack_require__(5949);
// EXTERNAL MODULE: ./components/elements/common/CustomPagination.jsx
var CustomPagination = __webpack_require__(9786);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogSearch.jsx
var WidgetBlogSearch = __webpack_require__(7695);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogCategories.jsx
var WidgetBlogCategories = __webpack_require__(6470);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentPosts.jsx
var WidgetBlogRecentPosts = __webpack_require__(8776);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentComments.jsx
var WidgetBlogRecentComments = __webpack_require__(9850);
// EXTERNAL MODULE: ./components/partials/blog/modules/ModulePostGridItems.jsx
var ModulePostGridItems = __webpack_require__(2671);
;// CONCATENATED MODULE: ./pages/blog/blog-right-sidebar.jsx














const BlogRightSidebarPage = () => {
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
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-blog--sidebar",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-blog__left",
            children: /*#__PURE__*/jsx_runtime_.jsx(ModulePostGridItems/* default */.Z, {
              columns: 3
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-blog__right",
            children: [/*#__PURE__*/jsx_runtime_.jsx(WidgetBlogSearch/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogCategories/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogRecentPosts/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(WidgetBlogRecentComments/* default */.Z, {})]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var blog_right_sidebar = (BlogRightSidebarPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,1596,8672,5905,4337,3299,2671,5949], function() { return __webpack_exec__(2118); });
module.exports = __webpack_exports__;

})();