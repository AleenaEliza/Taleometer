exports.id = 5949;
exports.ids = [5949];
exports.modules = {

/***/ 4268:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7836);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);








const PostSmallThumbnail = ({
  post
}) => {
  let imageThumbnailView, categoriesView;

  if (post) {
    if (post.thumbnail !== null) {
      imageThumbnailView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__/* .basePostUrl */ .$Y}${post.thumbnail.url}`,
          alt: "img"
        })
      });
    }

    if (post.categories) {
      if (post.categories.length > 0) {
        categoriesView = post.categories.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/category/[slug]",
          as: `/categories/${item.slug}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: item.name
          })
        }, item.id));
      } else {
        categoriesView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/blog",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "Others"
          })
        });
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
    className: "ps-post ps-post--small-thumbnail",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-post__thumbnail",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/post/[pid]",
        as: `/post/${post.id}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-post__overlay"
        })
      }), imageThumbnailView]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-post__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-post__top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-post__meta",
          children: categoriesView
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/post/[pid]",
          as: `/post/${post.id}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "ps-post__title",
            children: post.title
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: "Lorem ipsum dolor sit amet, dolor siterim consectetur adipiscing elit. Phasellus duio faucibus est sed\u2026"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(post.created_at).format('ll'), " by", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/blog",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "#",
            children: " drfurion"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (PostSmallThumbnail);

/***/ }),

/***/ 5949:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./repositories/PostRepository.js
var repositories_PostRepository = __webpack_require__(8672);
// EXTERNAL MODULE: ./components/elements/post/PostGrid.jsx
var post_PostGrid = __webpack_require__(4925);
// EXTERNAL MODULE: ./components/elements/common/CustomPagination.jsx
var common_CustomPagination = __webpack_require__(9786);
// EXTERNAL MODULE: ./components/elements/post/PostSmallThumbnail.jsx
var PostSmallThumbnail = __webpack_require__(4268);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogSearch.jsx
var widgets_WidgetBlogSearch = __webpack_require__(7695);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogCategories.jsx
var widgets_WidgetBlogCategories = __webpack_require__(6470);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentPosts.jsx
var widgets_WidgetBlogRecentPosts = __webpack_require__(8776);
// EXTERNAL MODULE: ./components/shared/widgets/WidgetBlogRecentComments.jsx
var widgets_WidgetBlogRecentComments = __webpack_require__(9850);
;// CONCATENATED MODULE: ./components/partials/blog/modules/Sidebar.jsx








class Sidebar extends (/* unused pure expression or super */ null && (Component)) {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      recentPosts
    } = this.props;
    return /*#__PURE__*/_jsx("div", {
      className: "sidebar"
    });
  }

}

/* harmony default export */ var modules_Sidebar = ((/* unused pure expression or super */ null && (Sidebar)));
;// CONCATENATED MODULE: ./components/partials/blog/BlogItemsSmallThumbView.jsx














const BlogItemsSmallThumbView = ({
  collectionSlug,
  columns,
  layout
}) => {
  const {
    0: loading,
    1: setLoading
  } = useState(true);
  const {
    0: posts,
    1: setPosts
  } = useState(null);

  async function getPosts() {
    let queries, APIPosts;

    if (collectionSlug !== undefined) {
      queries = {
        slug_eq: collectionSlug
      };
      APIPosts = await PostRepository.getPostsByCollectionSlug(queries);
    } else {
      queries = {
        _limit: 6
      };
      APIPosts = await PostRepository.getPosts(queries);
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

  useEffect(() => {
    getPosts();
  }, []);
  let postItemsView;

  if (!loading && posts) {
    postItemsView = posts.map(item => {
      if (columns === 4) {
        return /*#__PURE__*/_jsx("div", {
          className: " col-md-4 col-sm-6",
          children: /*#__PURE__*/_jsx(PostGrid, {
            post: item
          })
        }, item.id);
      } else if (columns === 4) {
        return /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-md-4 col-sm-6",
          children: /*#__PURE__*/_jsx(PostGrid, {
            post: item
          })
        }, item.id);
      } else {
        return /*#__PURE__*/_jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/_jsx(PostGrid, {
            post: item
          })
        }, item.id);
      }
    });
  }

  return /*#__PURE__*/_jsxs("div", {
    className: layout === 'left' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar',
    children: [/*#__PURE__*/_jsxs("div", {
      className: "ps-blog__left",
      children: [/*#__PURE__*/_jsx("div", {
        className: "row",
        children: postItemsView
      }), /*#__PURE__*/_jsx(CustomPagination, {})]
    }), /*#__PURE__*/_jsxs("div", {
      className: "ps-blog__right",
      children: [/*#__PURE__*/_jsx(WidgetBlogSearch, {}), /*#__PURE__*/_jsx(WidgetBlogCategories, {}), /*#__PURE__*/_jsx(WidgetBlogRecentPosts, {}), /*#__PURE__*/_jsx(WidgetBlogRecentComments, {})]
    })]
  });
};

/* harmony default export */ var blog_BlogItemsSmallThumbView = ((/* unused pure expression or super */ null && (BlogItemsSmallThumbView)));

/***/ })

};
;