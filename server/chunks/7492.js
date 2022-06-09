exports.id = 7492;
exports.ids = [7492];
exports.modules = {

/***/ 7492:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ products_ProductWide; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/compare/action.js
var action = __webpack_require__(5671);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__(8483);
;// CONCATENATED MODULE: ./components/elements/products/modules/ModuleProductWideActions.js








const ModuleProductWideActions = ({
  product
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleAddItemToCompare = e => {
    e.preventDefault();
    dispatch((0,action/* addItemToCompare */.sG)(product));
  };

  const handleAddItemToWishlist = e => {
    e.preventDefault();
    dispatch((0,wishlist_action/* addItemToWishlist */.yK)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product__shopping",
    children: [(0,product_helper/* StrapiProductPrice */.xB)(product), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "ps-btn",
      href: "#",
      children: "Add to cart"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "ps-product__actions",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#",
          onClick: e => handleAddItemToWishlist(e),
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-heart"
          }), " Wishlist"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#",
          onClick: e => handleAddItemToCompare(e),
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-chart-bars"
          }), " Compare"]
        })
      })]
    })]
  });
};

/* harmony default export */ var modules_ModuleProductWideActions = (ModuleProductWideActions);
;// CONCATENATED MODULE: ./components/elements/products/ProductWide.jsx







const ProductWide = ({
  product
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product ps-product--wide",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-product__thumbnail",
      children: (0,product_helper/* StrapiProductThumbnail */.$J)(product)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "ps-product__vendor",
          children: ["Sold by:", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: product.vendor
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-product__desc",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Unrestrained and portable active stereo speaker"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: " Free from the confines of wires and chords"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: " 20 hours of portable capabilities"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Double-ended Coil Cord with 3.5mm Stereo Plugs Included"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: " 3/4\u2033 Dome Tweeters: 2X and 4\u2033 Woofer: 1X"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleProductWideActions, {
        product: product
      })]
    })]
  });
};

/* harmony default export */ var products_ProductWide = (ProductWide);

/***/ })

};
;