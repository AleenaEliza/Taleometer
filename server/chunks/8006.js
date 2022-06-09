exports.id = 8006;
exports.ids = [8006];
exports.modules = {

/***/ 184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NextArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: `slick-arrow slick-next ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: icon
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "icon-chevron-right"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NextArrow);

/***/ }),

/***/ 7974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PrevArrow = props => {
  const {
    className,
    onClick,
    icon
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: `slick-arrow slick-prev ${className}`,
    onClick: onClick,
    children: icon ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: icon
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "icon-chevron-left"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (PrevArrow);

/***/ }),

/***/ 4189:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6305);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1544);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9672);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1123);
/* harmony import */ var _components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3665);
/* harmony import */ var _components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3582);











const ProductDetailQuickView = ({
  product
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
  className: "ps-product--detail ps-product--quickview",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__header",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_thumbnail_ThumbnailDefault__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      product: product,
      vertical: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__info",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailTopInformation__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        product: product
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailDescription__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        product: product
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailShoppingActions__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        product: product,
        extended: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailSpecification__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleProductDetailSharing__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_modules_ModuleDetailActionsMobile__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {})]
    })]
  })
});

/* harmony default export */ __webpack_exports__["Z"] = (ProductDetailQuickView);

/***/ }),

/***/ 3582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7359);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);






const ModuleDetailActionsMobile = ({
  product
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const handleAddItemToCart = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = 1;
    dispatch((0,_store_cart_action__WEBPACK_IMPORTED_MODULE_2__/* .addItem */ .jX)(tmp));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__actions-mobile",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "ps-btn ps-btn--black",
      href: "#",
      onClick: e => handleAddItemToCart(e),
      children: "Add to cart"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "ps-btn",
      href: "#",
      onClick: e => handleAddItemToCart(e),
      children: "Buy Now"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailActionsMobile);

/***/ }),

/***/ 9672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7359);
/* harmony import */ var _store_compare_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5671);
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8483);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);









const ModuleDetailShoppingActions = ({
  product,
  extended = false
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  const handleAddItemToCart = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = quantity;
    dispatch((0,_store_cart_action__WEBPACK_IMPORTED_MODULE_2__/* .addItem */ .jX)(tmp));
  };

  const handleBuynow = e => {
    e.preventDefault();
    let tmp = product;
    tmp.quantity = quantity;
    dispatch((0,_store_cart_action__WEBPACK_IMPORTED_MODULE_2__/* .addItem */ .jX)(tmp));
    setTimeout(function () {
      Router.push('/account/checkout');
    }, 1000);
  };

  const handleAddItemToCompare = e => {
    e.preventDefault();
    dispatch((0,_store_compare_action__WEBPACK_IMPORTED_MODULE_3__/* .addItemToCompare */ .sG)(product));
  };

  const handleAddItemToWishlist = e => {
    e.preventDefault();
    const {
      product
    } = undefined.props;
    dispatch((0,_store_wishlist_action__WEBPACK_IMPORTED_MODULE_4__/* .addItemToWishlist */ .yK)(product));
  };

  const handleIncreaseItemQty = e => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseItemQty = e => {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!extended) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__shopping",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
          children: "Quantity"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "form-group--number",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "up",
            onClick: e => handleIncreaseItemQty(e),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
              className: "fa fa-plus"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "down",
            onClick: e => handleDecreaseItemQty(e),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
              className: "fa fa-minus"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            className: "form-control",
            type: "text",
            placeholder: quantity,
            disabled: true
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "ps-btn ps-btn--black",
        href: "#",
        onClick: e => handleAddItemToCart(e),
        children: "Add to cart"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "ps-btn",
        href: "#",
        onClick: e => handleBuynow(e),
        children: "Buy Now"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__actions",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "#",
          onClick: e => handleAddItemToWishlist(e),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "icon-heart"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "#",
          onClick: e => handleAddItemToCompare(e),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "icon-chart-bars"
          })
        })]
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__shopping extend",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__btn-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
            children: "Quantity"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group--number",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              className: "up",
              onClick: e => handleIncreaseItemQty(e),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "fa fa-plus"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              className: "down",
              onClick: e => handleDecreaseItemQty(e),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "fa fa-minus"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: quantity,
              disabled: true
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-btn ps-btn--black",
          href: "#",
          onClick: e => handleAddItemToCart(e),
          children: "Add to cart"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "ps-product__actions",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "#",
            onClick: e => handleAddItemToWishlist(e),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
              className: "icon-heart"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "#",
            onClick: e => handleAddItemToCompare(e),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
              className: "icon-chart-bars"
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "ps-btn",
        href: "#",
        onClick: e => handleBuynow(e),
        children: "Buy Now"
      })]
    });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailShoppingActions);

/***/ }),

/***/ 2805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1974);






const ModuleDetailTopInformation = ({
  product
}) => {
  // Views
  let priceView;

  if (product.is_sale) {
    priceView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
      className: "ps-product__price sale",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
        className: "mr-2",
        children: ["&", product.sale_price]
      }), "$", product.price]
    });
  } else {
    priceView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
      className: "ps-product__price",
      children: ["$", product.price]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: product.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__meta",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: ["Brand:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/shop",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "ml-2 text-capitalize",
            children: product.vendor
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__rating",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "(1 review)"
        })]
      })]
    }), priceView]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleDetailTopInformation);

/***/ }),

/***/ 1544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ModuleProductDetailDescription = ({
  product
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "ps-product__desc",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    children: ["Sold By:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
          children: [" ", product.vendor]
        })
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
    className: "ps-list--dot",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: "Unrestrained and portable active stereo speaker"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: " Free from the confines of wires and chords"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: " 20 hours of portable capabilities"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: "Double-ended Coil Cord with 3.5mm Stereo Plugs Included"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: " 3/4\u2033 Dome Tweeters: 2X and 4\u2033 Woofer: 1X"
    })]
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductDetailDescription);

/***/ }),

/***/ 3665:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ModuleProductDetailSharing = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "ps-product__sharing",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "facebook",
    href: "#",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "fa fa-facebook"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "twitter",
    href: "#",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "fa fa-twitter"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "google",
    href: "#",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "fa fa-google-plus"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "linkedin",
    href: "#",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "fa fa-linkedin"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "instagram",
    href: "#",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "fa fa-instagram"
    })
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductDetailSharing);

/***/ }),

/***/ 1123:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ModuleProductDetailSpecification = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "ps-product__specification",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/page/blank",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "report",
      children: "Report Abuse"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
      children: "SKU:"
    }), " SF1133569600-1"]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    className: "categories",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
      children: " Categories:"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "Consumer Electronics"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "Refrigerator"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "Babies & Moms"
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
    className: "tags",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
      children: " Tags"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "sofa"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "technologies"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: "/shop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "wireless"
      })
    })]
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductDetailSpecification);

/***/ }),

/***/ 6305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7836);
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(184);
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7974);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ThumbnailDefault = ({
  product,
  vertical = true
}) => {
  const galleryCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const variantCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: gallery,
    1: setGallery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: variant,
    1: setVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: productImages,
    1: setProductImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    setPhotoIndex(imageIndex);
    setIsOpen(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let images = [];

    if (product && product.images.length > 0) {
      product.images.map(item => {
        images.push(`${_repositories_Repository__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH}${item.url}`);
      });
      setProductImages(images);
    }

    setGallery(galleryCarousel.current);
    setVariant(variantCarousel.current);
  }, [product]);
  const gallerySetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}),
    prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})
  };
  const variantSetting = {
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }]
  }; //Views

  let lightboxView, variantCarouselView, imagesView, galleryImagesView;

  if (productImages.length > 0) {
    imagesView = productImages.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "item",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: item,
        alt: item
      })
    }, item));
    galleryImagesView = productImages.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "item",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        onClick: e => handleOpenLightbox(e, index),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: item,
          alt: item
        })
      })
    }, item));
  }

  if (vertical) {
    variantCarouselView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 3,
      vertical: true,
      infinite: true,
      focusOnSelect: true
    }, variantSetting), {}, {
      className: "ps-product__variants",
      children: imagesView
    }));
  } else {
    variantCarouselView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 6,
      vertical: false,
      centered: true,
      infinite: false,
      focusOnSelect: true,
      className: "ps-product__variants",
      children: imagesView
    });
  }

  if (isOpen) {
    lightboxView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
      mainSrc: productImages[photoIndex],
      nextSrc: productImages[(photoIndex + 1) % productImages.length],
      prevSrc: productImages[(photoIndex + productImages.length - 1) % productImages.length],
      onCloseRequest: () => {
        setIsOpen(false);
      },
      onMovePrevRequest: () => {
        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length);
      },
      onMoveNextRequest: () => {
        setPhotoIndex((photoIndex + 1) % productImages.length);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product__thumbnail",
    "data-vertical": vertical ? 'true' : 'false',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ps-wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, gallerySetting), {}, {
          ref: slider => galleryCarousel.current = slider,
          asNavFor: variant,
          className: "ps-product__gallery ps-carousel inside",
          children: galleryImagesView
        }))
      })
    }), variantCarouselView, lightboxView]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ThumbnailDefault);

/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7359);
/* harmony import */ var _store_compare_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5671);
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8483);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_elements_detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4189);










const ModuleProductActions = ({
  product
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const {
    0: isQuickView,
    1: setIsQuickView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleAddItemToCart = e => {
    e.preventDefault();
    dispatch((0,_store_cart_action__WEBPACK_IMPORTED_MODULE_3__/* .addItem */ .jX)(product));
  };

  const handleAddItemToCompare = e => {
    e.preventDefault();
    dispatch((0,_store_compare_action__WEBPACK_IMPORTED_MODULE_4__/* .addItemToCompare */ .sG)(product));
  };

  const handleAddItemToWishlist = e => {
    dispatch((0,_store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__/* .addItemToWishlist */ .yK)(product));
  };

  const handleShowQuickView = e => {
    e.preventDefault();
    setIsQuickView(true);
  };

  const handleHideQuickView = e => {
    e.preventDefault();
    setIsQuickView(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
    className: "ps-product__actions",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Add To Cart",
        onClick: handleAddItemToCart,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-bag2"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Quick View",
        onClick: handleShowQuickView,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-eye"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Add to wishlist",
        onClick: handleAddItemToWishlist,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-heart"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "Compare",
        onClick: handleAddItemToCompare,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-chart-bars"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      centered: true,
      footer: null,
      width: 1024,
      onCancel: e => handleHideQuickView(e),
      visible: isQuickView,
      closeIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        className: "icon icon-cross2"
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: "Quickview"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        product: product
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ModuleProductActions);

/***/ })

};
;