exports.id = 2671;
exports.ids = [2671];
exports.modules = {

/***/ 2671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8672);
/* harmony import */ var _components_elements_post_PostGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4925);
/* harmony import */ var _components_elements_common_CustomPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9786);








const ModulePostGridItems = ({
  collectionSlug,
  columns
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  async function getPosts() {
    let queries, APIPosts;

    if (collectionSlug !== undefined) {
      queries = {
        slug_eq: collectionSlug
      };
      APIPosts = await _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_3__/* .default.getPostsByCollectionSlug */ .Z.getPostsByCollectionSlug(queries);
    } else {
      queries = {
        _limit: 6
      };
      APIPosts = await _repositories_PostRepository__WEBPACK_IMPORTED_MODULE_3__/* .default.getPosts */ .Z.getPosts(queries);
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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getPosts();
  }, []);
  let postItemsView;

  if (!loading && posts) {
    postItemsView = posts.map(item => {
      if (columns === 4) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: " col-md-4 col-sm-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_post_PostGrid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            post: item
          })
        }, item.id);
      } else if (columns === 4) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-lg-3 col-md-4 col-sm-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_post_PostGrid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            post: item
          })
        }, item.id);
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_post_PostGrid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            post: item
          })
        }, item.id);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-post-items",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: postItemsView
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_common_CustomPagination__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModulePostGridItems);

/***/ })

};
;