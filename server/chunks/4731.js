exports.id = 4731;
exports.ids = [4731];
exports.modules = {

/***/ 7760:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




const Logo = ({
  type
}) => {
  let data;

  if (type === 'autopart') {
    data = {
      url: '/home/autopart',
      img: 'img/logo-autopart.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'electronic') {
    data = {
      url: '/home/electronic',
      img: 'static/img/logo-electronic.png'
    };
  } else if (type === 'furniture') {
    data = {
      url: '/home/furniture',
      img: 'static/img/logo-furniture.png'
    };
  } else if (type === 'organic') {
    data = {
      url: '/home/organic',
      img: 'static/img/logo-organic.png'
    };
  } else {
    data = {
      url: '/',
      img: '/static/img/logo_light.png'
    };
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: data.url,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "ps-logo",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: data.img,
        alt: ""
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Logo);

/***/ }),

/***/ 4731:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7760);
/* harmony import */ var _components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5828);
/* harmony import */ var _components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2271);
/* harmony import */ var _components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7006);
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8079);










const HeaderDefault = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    className: "header header--1",
    "data-sticky": "true",
    id: "headerSticky",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "header__left",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "header__center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "header__right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {})
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (HeaderDefault);

/***/ }),

/***/ 7006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1453);
/* harmony import */ var _components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6176);








const HeaderActions = props => {
  const {
    compare,
    wishlist,
    auth
  } = props; // views

  let headerAuthView;

  if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
    headerAuthView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      isLoggedIn: true
    });
  } else {
    headerAuthView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      isLoggedIn: false
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "header__actions",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: "/account/compare",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "header__extra",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-chart-bars"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            children: compare ? compare.compareTotal : 0
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: "/account/wishlist",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "header__extra",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "icon-heart"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            children: wishlist ? wishlist.wishlistTotal : 0
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), headerAuthView]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(HeaderActions));

/***/ }),

/***/ 8079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6916);
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8594);






const MenuCategoriesDropdown = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "menu--product-categories",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "menu__toggle",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        className: "icon-menu"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: "Shop by Department"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "menu__content",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__/* .product_categories */ .a,
        className: "menu--dropdown"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (MenuCategoriesDropdown);

/***/ }),

/***/ 2271:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8594);
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6916);
/* harmony import */ var _headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4510);
/* harmony import */ var _headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4236);
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8079);











class NavigationDefault extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_3__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
      className: "navigation",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "navigation__left",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "navigation__right",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            source: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__/* .menuPrimary.menu_1 */ .A.u,
            className: "menu"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: "/vendor/become-a-vendor",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: "Sell on Martfury"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: "/account/order-tracking",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: "Tract your order"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {})
            })]
          })]
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (NavigationDefault);

/***/ })

};
;