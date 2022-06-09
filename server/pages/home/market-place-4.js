(function() {
var exports = {};
exports.id = 2009;
exports.ids = [2009];
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

/***/ 727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ market_place_4; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/shared/headers/HeaderMobile.jsx
var HeaderMobile = __webpack_require__(8260);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
// EXTERNAL MODULE: ./components/shared/footers/FooterMarketPlace2.jsx
var FooterMarketPlace2 = __webpack_require__(6567);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__(4510);
// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__(4236);
// EXTERNAL MODULE: ./components/shared/headers/modules/SearchHeader.jsx
var SearchHeader = __webpack_require__(5828);
// EXTERNAL MODULE: ./components/shared/headers/modules/ElectronicHeaderActions.jsx
var ElectronicHeaderActions = __webpack_require__(7143);
// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__(8594);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMarketPlace4.jsx












const HeaderMarketPlace4 = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--market-place-4",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Welcome to Martfury Online Shopping Store !"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "header__top-links",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/vendor/store-list",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Store Location"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/page/blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Track Your Order"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(CurrencyDropdown/* default */.Z, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LanguageSwicher/* default */.Z, {})
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__content-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/home/market-place-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo_light.png",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu--product-categories",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "menu__toggle",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-menu"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: " Shop by Department"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu__content",
              children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
                source: menu/* product_categories */.a,
                className: "menu--dropdown"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__content-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(SearchHeader/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "iphone x"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "virtual"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "apple"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "wireless"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "simple chair"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "classic watch"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "macbook"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__content-right",
          children: /*#__PURE__*/jsx_runtime_.jsx(ElectronicHeaderActions/* default */.Z, {})
        })]
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderMarketPlace4 = (HeaderMarketPlace4);
;// CONCATENATED MODULE: ./components/layouts/ContainerMarketPlace4.jsx









const ContainerMarketPlace4 = ({
  children,
  title
}) => {
  let titleView;

  if (title !== null) {
    titleView = process.env.title + ' | ' + title;
  } else {
    titleView = process.env.title + ' | ' + process.env.titleDescription;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "martfury",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: titleView
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMarketPlace4, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      id: "homepage-6",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterMarketPlace2/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerMarketPlace4 = (ContainerMarketPlace4);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/MartketPlace4Banner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MartketPlace4Banner = () => {
  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-home-banner",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--market-4",
        style: {
          backgroundImage: `url(/static/img/slider/home-6/1.jpg)`
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-6/1.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Limit Edition"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["HAPPY SUMMER ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " COMBO SUPER COOL ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " UP TO", ' ', /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: " 40%"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--market-4",
        style: {
          backgroundImage: `url(/static/img/slider/home-6/2.jpg)`
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-6/2.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Version 2018"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["EXPERIENCE FEEL ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " GREATEST WITH VITURAL ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "REALITY JUST ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: " $599"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      })]
    }))
  });
};

/* harmony default export */ var marketplace4_MartketPlace4Banner = (MartketPlace4Banner);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/MartketPlace4SiteFeatures.jsx




const MartketPlace4SiteFeatures = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-site-features",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block--site-features ps-block--site-features-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-rocket"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Free Delivery"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "For all oders over $99"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-sync"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "90 Days Return"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "If goods have problems"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-credit-card"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Secure Payment"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "100% secure payment"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__item",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-bubbles"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "24/7 Support"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Dedicated support"
          })]
        })]
      })]
    })
  })
});

/* harmony default export */ var marketplace4_MartketPlace4SiteFeatures = (MartketPlace4SiteFeatures);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/MartketPlace4Promotions.jsx





const MartketPlace4Promotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-collection",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-6/1.jpg",
              alt: "martfury"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-collection",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-6/2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    })
  })
});

/* harmony default export */ var marketplace4_MartketPlace4Promotions = (MartketPlace4Promotions);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/MartketPlace4TopCategories.jsx





class MartketPlace4TopCategories extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-top-categories",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Top categories of the month"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/1.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Electronics"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/2.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Clothings"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/3.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Computers"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/4.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Home & Kitchen"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/5.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Health & Beauty"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-block__overlay"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/6.jpg",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Health & Beauty"
              })]
            })
          })]
        })]
      })
    });
  }

}

/* harmony default export */ var marketplace4_MartketPlace4TopCategories = (MartketPlace4TopCategories);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/modules/CategoriesBoxConsumerElectronics.jsx





const CategoriesBoxConsumerElectronics = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "ps-block--categories-box",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Consumer Electronics"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "New Arrivals"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Best Seller"
          })
        })
      })]
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__content",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__banner",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/large.jpg",
        alt: "martfury"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/1.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Audios & Theaters "
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/2.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "TV Televisions"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/3.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Washing Machines"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "4 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/4.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Air Conditioners"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "5 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/5.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Refrigerators"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "10 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/6.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Office Electronics"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/electronic/7.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Car Electronics"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "3 Items"
      })]
    })]
  })]
});

/* harmony default export */ var modules_CategoriesBoxConsumerElectronics = (CategoriesBoxConsumerElectronics);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/modules/CategoriesBoxClothings.jsx





const CategoriesBoxClothings = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "ps-block--categories-box",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Clothing & Apparel"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "New Arrivals"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Best Seller"
          })
        })
      })]
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__content",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__banner",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/large.jpg",
        alt: "martfury"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/1.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Womens"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/2.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Mens"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/3.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Shoes"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "4 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/4.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Bags"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "5 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/5.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Sunglasses"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "10 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/6.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Accessories"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/clothing/7.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Kid's Fashion"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "3 Items"
      })]
    })]
  })]
});

/* harmony default export */ var modules_CategoriesBoxClothings = (CategoriesBoxClothings);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace4/modules/CategoriesBoxGardenAndKitchen.jsx





const CategoriesBoxGardenAndKitchen_CategoriesBoxClothings = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "ps-block--categories-box",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Home, Garden & Kitchen"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "New Arrivals"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Best Seller"
          })
        })
      })]
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__content",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__banner",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/large.jpg",
        alt: "martfury"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/1.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Furniture"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/2.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Decoration"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/3.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Utensil & Gadget"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "4 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/4.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Cookware"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "5 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/5.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Powers And Hand Tools"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "10 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/6.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Garden Tools"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "2 Items"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-block__overlay"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/categories/kitchen/7.jpg",
        alt: "martfury"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Home Improvement"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "3 Items"
      })]
    })]
  })]
});

/* harmony default export */ var CategoriesBoxGardenAndKitchen = (CategoriesBoxGardenAndKitchen_CategoriesBoxClothings);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupDealHot.jsx + 2 modules
var ProductGroupDealHot = __webpack_require__(866);
;// CONCATENATED MODULE: ./pages/home/market-place-4.jsx













const HomeMarketPlace4Page = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerMarketPlace4, {
    title: "Home Marketplace v4",
    children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace4_MartketPlace4Banner, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace4_MartketPlace4SiteFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace4_MartketPlace4Promotions, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupDealHot/* default */.Z, {
        collectionSlug: "deal-of-the-day"
      }), /*#__PURE__*/jsx_runtime_.jsx(marketplace4_MartketPlace4TopCategories, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-categories-box",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(modules_CategoriesBoxConsumerElectronics, {}), /*#__PURE__*/jsx_runtime_.jsx(modules_CategoriesBoxClothings, {}), /*#__PURE__*/jsx_runtime_.jsx(CategoriesBoxGardenAndKitchen, {})]
      })
    })]
  });
};

/* harmony default export */ var market_place_4 = (HomeMarketPlace4Page);

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

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

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,8661,8283,5963,7143,1050,472,866,6567], function() { return __webpack_exec__(727); });
module.exports = __webpack_exports__;

})();