exports.id = 3574;
exports.ids = [3574];
exports.modules = {

/***/ 1974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Rating = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
  className: "ps-rating",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
    className: "fa fa-star-o"
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (Rating);

/***/ }),

/***/ 8594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ menu_Menu; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/elements/menu/MenuDropdown.jsx





const MenuDropdown = ({
  source
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "menu-item-has-children dropdown",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: source.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: source.text
      })
    }), source.subMenu && /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: source.subClass,
      children: source.subMenu.map((subMenuItem, index) => /*#__PURE__*/jsx_runtime_.jsx(MenuDropdown, {
        source: subMenuItem
      }, index))
    })]
  });
};

/* harmony default export */ var menu_MenuDropdown = (MenuDropdown);
;// CONCATENATED MODULE: ./components/elements/menu/MegaMenu.jsx





const MegaMenu = ({
  source
}) => {
  let megaContentView;

  if (source) {
    megaContentView = source.megaContent.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mega-menu__column",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: item.heading
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "mega-menu__list",
        children: item.megaItems.map(subItem => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: subItem.url,
            as: subItem.url,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: subItem.text
            })
          })
        }, subItem.text))
      })]
    }, item.heading));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "menu-item-has-children has-mega-menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: source.url !== '' ? source.url : '/',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        children: [source.icon && /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: source.icon
        }), source.text]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mega-menu",
      children: megaContentView
    })]
  });
};

/* harmony default export */ var menu_MegaMenu = (MegaMenu);
;// CONCATENATED MODULE: ./components/elements/menu/Menu.jsx







const Menu = ({
  source,
  className
}) => {
  // Views
  let menuView;

  if (source) {
    menuView = source.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/jsx_runtime_.jsx(menu_MenuDropdown, {
          source: item
        }, item.text);
      } else if (item.megaContent) {
        return /*#__PURE__*/jsx_runtime_.jsx(menu_MegaMenu, {
          source: item
        }, item.text);
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: item.url,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [item.icon && /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: item.icon
              }), item.text]
            })
          })
        }, item.text);
      }
    });
  } else {
    menuView = /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        children: "No menu item."
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: className,
    children: menuView
  });
};

/* harmony default export */ var menu_Menu = (Menu);

/***/ }),

/***/ 9712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4063);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1974);







const ProductSearchResult = ({
  product
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-product ps-product--wide ps-product--search-result",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-product__thumbnail",
      children: (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__/* .StrapiProductThumbnail */ .$J)(product)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-product__title",
          children: product.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-product__rating",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: product.ratingCount
        })]
      }), (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_3__/* .StrapiProductPrice */ .xB)(product)]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductSearchResult);

/***/ }),

/***/ 6176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7042);







const AccountQuickLinks = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  const handleLogout = e => {
    e.preventDefault();
    dispatch((0,_store_auth_action__WEBPACK_IMPORTED_MODULE_4__/* .logOut */ .ni)());
  };

  const accountLinks = [{
    text: 'Account Information',
    url: '/account/user-information'
  }, {
    text: 'Notifications',
    url: '/account/notifications'
  }, {
    text: 'Invoices',
    url: '/account/invoices'
  }, {
    text: 'Address',
    url: '/account/addresses'
  }, {
    text: 'Recent Viewed Product',
    url: '/account/recent-viewed-product'
  }, {
    text: 'Wishlist',
    url: '/account/wishlist'
  }];
  const {
    isLoggedIn
  } = props; // View

  const linksView = accountLinks.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: item.url,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: item.text
      })
    })
  }, item.text));

  if (isLoggedIn === true) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-block--user-account",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        className: "icon-user"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ps-block__content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
          className: "ps-list--arrow",
          children: [linksView, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "ps-block__footer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              href: "#",
              onClick: e => handleLogout(e),
              children: "Logout"
            })
          })]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-block--user-header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ps-block__left",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-user"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-block__right",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/account/login",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "Login"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/account/register",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "Register"
          })
        })]
      })]
    });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(AccountQuickLinks));

/***/ }),

/***/ 4510:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(211);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CurrencyDropdown extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeCurrency", (e, currency) => {
      e.preventDefault();
      this.props.dispatch((0,_store_setting_action__WEBPACK_IMPORTED_MODULE_4__/* .changeCurrency */ .sy)(currency));
    });
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    const {
      currency
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-dropdown",
      children: [currency ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "/",
        onClick: e => e.preventDefault(),
        children: currency.text
      }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '$',
              text: 'USD'
            }),
            children: "USD"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '€',
              text: 'EURO'
            }),
            children: "EURO"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '£',
              text: 'GBP'
            }),
            children: "GBP"
          })
        })]
      })]
    });
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(CurrencyDropdown));

/***/ }),

/***/ 4236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





class LanguageSwicher extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-dropdown language",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "#",
        onClick: this.handleFeatureWillUpdate.bind(this),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "/static/img/flag/en.png",
          alt: "martfury"
        }), "English"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/static/img/flag/germany.png",
              alt: "martfury"
            }), "Germany"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/static/img/flag/fr.png",
              alt: "martfury"
            }), "France"]
          })
        })]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (LanguageSwicher);

/***/ }),

/***/ 1453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_MiniCart; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
;// CONCATENATED MODULE: ./components/elements/products/ProductOnCart.jsx








const ProductOnCart = ({
  product
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleRemoveCartItem = e => {
    e.preventDefault();
    dispatch((0,action/* removeItem */.cl)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product--cart-mobile",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-product__thumbnail",
      children: (0,product_helper/* StrapiProductThumbnail */.$J)(product)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-product__remove",
        onClick: e => handleRemoveCartItem(e),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "icon-cross"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-product__title",
          children: product.title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
          children: ["$", product.price, " x ", product.quantity]
        })
      })]
    })]
  });
};

/* harmony default export */ var products_ProductOnCart = (ProductOnCart);
;// CONCATENATED MODULE: ./components/shared/headers/modules/MiniCart.jsx








class MiniCart extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch((0,action/* getCart */.dv)());
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props; // views

    let cartItemsView;

    if (cartItems && cartItems.length > 0) {
      const productItems = cartItems.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(products_ProductOnCart, {
          product: item
        }, item.id);
      });
      cartItemsView = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-cart__content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-cart__items",
          children: productItems
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-cart__footer",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["Sub Total:", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
              children: ["$", amount ? amount : 0]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/account/shopping-cart",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-btn",
                children: "View Cart"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/account/checkout",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-btn",
                children: "Checkout"
              })
            })]
          })]
        })]
      });
    } else {
      cartItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-cart__content",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-cart__items",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "No products in cart"
          })
        })
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-cart--mini",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "header__extra",
        href: "#",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "icon-bag2"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            children: cartTotal ? cartTotal : 0
          })
        })]
      }), cartItemsView]
    });
  }

}

/* harmony default export */ var modules_MiniCart = ((0,external_react_redux_.connect)(state => state.cart)(MiniCart));

/***/ }),

/***/ 5828:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9712);








const exampleCategories = ['All', 'Babies & Moms', 'Books & Office', 'Cars & Motocycles', 'Clothing & Apparel', ' Accessories', 'Bags', 'Kid’s Fashion', 'Mens', 'Shoes', 'Sunglasses', 'Womens', 'Computers & Technologies', 'Desktop PC', 'Laptop', 'Smartphones', 'Consumer Electrics', 'Air Conditioners', 'Accessories', 'Type Hanging Cell', 'Audios & Theaters', 'Headphone', 'Home Theater System', 'Speakers', 'Car Electronics', 'Audio & Video', 'Car Security', 'Radar Detector', 'Vehicle GPS', 'Office Electronics', 'Printers', 'Projectors', 'Scanners', 'Store & Business', 'Refrigerators', 'TV Televisions', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Washing Machines', 'Type Drying Clothes', 'Type Horizontal', 'Type Vertical', 'Garden & Kitchen', 'Cookware', 'Decoration', 'Furniture', 'Garden Tools', 'Home Improvement', 'Powers And Hand Tools', 'Utensil & Gadget', 'Health & Beauty', 'Equipments', 'Hair Care', 'Perfumer', 'Wine Cabinets'];

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const SearchHeader = () => {
  const inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isSearch,
    1: setIsSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: resultItems,
    1: setResultItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);

  function handleClearKeyword() {
    setKeyword('');
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/search?keyword=${keyword}`);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      if (keyword) {
        const queries = {
          _limit: 5,
          title_contains: keyword
        };
        const products = _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__/* .default.getRecords */ .Z.getRecords(queries);
        products.then(result => {
          console.log(result);
          setLoading(false);
          setResultItems(result);
          setIsSearch(true);
        });
      } else {
        setIsSearch(false);
        setKeyword('');
      }

      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]); // Views

  let productItemsView, clearTextView, selectOptionView, loadingView, loadMoreView;

  if (!loading) {
    if (resultItems && resultItems.length > 0) {
      if (resultItems.length > 5) {
        loadMoreView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-panel__footer text-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "/search",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "See all results"
            })
          })
        });
      }

      productItemsView = resultItems.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        product: product
      }, product.id));
    } else {
      productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No product found."
      });
    }

    if (keyword !== '') {
      clearTextView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "ps-form__action",
        onClick: handleClearKeyword,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon icon-cross2"
        })
      });
    }
  } else {
    loadingView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "ps-form__action",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Spin, {
        size: "small"
      })
    });
  }

  selectOptionView = exampleCategories.map(option => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
    value: option,
    children: option
  }, option));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
    className: "ps-form--quick-search",
    method: "get",
    action: "/",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-form__categories",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
        className: "form-control",
        children: selectOptionView
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-form__input",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        ref: inputEl,
        className: "form-control",
        type: "text",
        value: keyword,
        placeholder: "I'm shopping for...",
        onChange: e => setKeyword(e.target.value)
      }), clearTextView, loadingView]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      onClick: handleSubmit,
      children: "Search"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `ps-panel--search-result${isSearch ? ' active ' : ''}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ps-panel__content",
        children: productItemsView
      }), loadMoreView]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SearchHeader);

/***/ }),

/***/ 6916:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"A":{"u":[{"text":"Home","url":"/","extraClass":"menu-item-has-children","subClass":"sub-menu"},{"text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Catalog Pages","megaItems":[{"text":"Shop Default","url":"/shop"},{"text":"Shop Fullwidth","url":"/shop/shop-fullwidth"},{"text":"Shop Categories","url":"/shop/shop-categories"},{"text":"Shop Sidebar","url":"/shop/shop-sidebar"},{"text":"Shop Without Banner","url":"/shop/shop-sidebar-without-banner"},{"text":"Shop Carousel","url":"/shop/shop-carousel"}]},{"heading":"Product Layout","megaItems":[{"text":"Default","url":"/product/3"},{"text":"Extended","url":"/product/extended/7"},{"text":"Full Content","url":"/product/full-content/7"},{"text":"Boxed","url":"/product/boxed/7"},{"text":"Sidebar","url":"/product/sidebar/7"}]},{"heading":"Product Types","megaItems":[{"text":"Simple","url":"/product/3"},{"text":"Image swatches","url":"/product/image-swatches/11"},{"text":"Countdown","url":"/product/countdown/10"},{"text":"Affiliate","url":"/product/affiliate/7"},{"text":"On sale","url":"/product/on-sale/7"},{"text":"Grouped","url":"/product/groupped/22"},{"text":"Out Of Stock","url":"/product/out-of-stock/7"}]},{"heading":"Ecomerce Pages","megaItems":[{"text":"Shopping Cart","url":"/account/shopping-cart"},{"text":"Checkout","url":"/account/checkout"},{"text":"Whishlist","url":"/account/wishlist"},{"text":"Compare","url":"/account/compare"},{"text":"Order Tracking","url":"/account/order-tracking"},{"text":"My Account","url":"/account/login"},{"text":"Login / Register","url":"/account/login"}]}]},{"text":"Pages","url":"","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Basic Page","megaItems":[{"text":"About Us","url":"/page/about-us"},{"text":"Contact","url":"/page/contact-us"},{"text":"Faqs","url":"/page/faqs"},{"text":"404 Page","url":"/page/page-404"}]},{"heading":"Vendor Pages","megaItems":[{"text":"Become a Vendor","url":"/vendor/become-a-vendor"},{"text":"Vendor Store","url":"/vendor/vendor-store"},{"text":"Store List","url":"/stores"}]}]},{"text":"Blogs","url":"/blog","current":"shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Blog Layout","megaItems":[{"text":"Grid","url":"/blog"},{"text":"Small Thumb","url":"/blog/blog-small-thumbnail"},{"text":"Left Sidebar","url":"/blog/blog-left-sidebar"},{"text":"Right Sidebar","url":"/blog/blog-right-sidebar"}]},{"heading":"Single Blog","megaItems":[{"text":"Single 1","url":"/post/default"},{"text":"Single 2","url":"/post/detail-2"},{"text":"Single 3","url":"/post/detail-3"}]}]}]},"a":[{"icon":"icon-star","text":"Hot Promotions","url":"/shop"},{"icon":"icon-laundry","text":"Consumer Electronic","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":true,"megaContent":[{"heading":"Electronic","megaItems":[{"text":"Home Audio & Theathers","url":"/shop"},{"text":"TV & Videos","url":"/shop"},{"text":"Camera, Photos & Videos","url":"/shop"},{"text":"Cellphones & Accessories","url":"/shop"},{"text":"Headphones","url":"/shop"},{"text":"Videosgames","url":"/shop"},{"text":"Wireless Speakers","url":"/shop"},{"text":"Office Electronic","url":"/shop"}]},{"heading":"Accessories & Parts","megaItems":[{"text":"Digital Cables","url":"/shop"},{"text":"Audio & Video Cables","url":"/shop"},{"text":"Batteries","url":"/shop"}]}]},{"icon":"icon-shirt","text":"Clothing & Apparel","url":"/shop"},{"icon":"icon-lampshade","text":"Home, Garden & Kitchen","url":"/shop"},{"icon":"icon-heart-pulse","text":"Health & Beauty","url":"/shop"},{"icon":"icon-diamond2","text":"Yewelry & Watches","url":"/shop"},{"icon":"icon-desktop","text":"Computer & Technology","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Computer & Technologies","megaItems":[{"text":"Computer & Tablets","url":"/shop"},{"text":"Laptop","url":"/shop"},{"text":"Monitors","url":"/shop"},{"text":"Networking","url":"/shop"},{"text":"Drive & Storages","url":"/shop"},{"text":"Computer Components","url":"/shop"},{"text":"Security & Protection","url":"/shop"},{"text":"Gaming Laptop","url":"/shop"},{"text":"Accessories","url":"/shop"}]}]},{"icon":"icon-baby-bottle","text":"Babies & Moms","url":"/shop"},{"icon":"icon-baseball","text":"Sport & Outdoor","url":"/shop"},{"icon":"icon-smartphone","text":"Phones & Accessories","url":"/shop"},{"icon":"icon-book2","text":"Books & Office","url":"/shop"},{"icon":"icon-car-siren","text":"Cars & Motocycles","url":"/shop"},{"icon":"icon-wrench","text":"Home Improments","url":"/shop"},{"icon":"icon-tag","text":"Vouchers & Services","url":"/shop"}]}');

/***/ })

};
;