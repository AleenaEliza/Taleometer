(function() {
var exports = {};
exports.id = 8366;
exports.ids = [8366];
exports.modules = {

/***/ 5392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4613);
/* harmony import */ var _modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(948);







const FooterDefault = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
  className: "ps-footer",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
  })
});

/* harmony default export */ __webpack_exports__["Z"] = (FooterDefault);

/***/ }),

/***/ 71:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ market_place; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__(4731);
// EXTERNAL MODULE: ./components/shared/headers/HeaderMobile.jsx
var HeaderMobile = __webpack_require__(8260);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var FooterDefault = __webpack_require__(5392);
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlacePromotionHeader.jsx




const MarketPlacePromotionHeader = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-block--promotion-header bg--cover",
  style: {
    backgroundImage: `url(/static/img/promotions/header-promotion.jpg)`
  },
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "20%"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Discount"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "For Books Of March"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Enter Promotion", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Sale2019"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "ps-btn ps-btn--sm",
      href: "#",
      children: "Shop now"
    })]
  })
});

/* harmony default export */ var marketplace_MarketPlacePromotionHeader = (MarketPlacePromotionHeader);
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMarketPlace.jsx












const HeaderMarketPlace = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--market-place-1",
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
            href: "/home/market-place",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo.png",
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(SearchHeader/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__content-right",
          children: /*#__PURE__*/jsx_runtime_.jsx(ElectronicHeaderActions/* default */.Z, {})
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navigation",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navigation__left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
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
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navigation__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
            source: menu/* menuPrimary.menu_1 */.A.u,
            className: "menu"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block--header-hotline inline",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-telephone"
              }), "Hotline:", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: " 1-800-234-5678"
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderMarketPlace = (HeaderMarketPlace);
;// CONCATENATED MODULE: ./components/layouts/ContainerMarketPlace.jsx












const ContainerMarketPlace = ({
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
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace_MarketPlacePromotionHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMarketPlace, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "homepage-3",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(Newletters/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterDefault/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerMarketPlace = (ContainerMarketPlace);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(184);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7974);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MartketPlaceHomeBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MarketPlaceHomeBanner = () => {
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/jsx_runtime_.jsx(NextArrow/* default */.Z, {}),
    prevArrow: /*#__PURE__*/jsx_runtime_.jsx(PrevArrow/* default */.Z, {})
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-home-banner",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
      className: "ps-carousel",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--market-1",
        style: {
          backgroundImage: `url(/static/img/slider/home-3/home-banner/1.jpg)`
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-3/home-banner/1.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "Mega Sale Nov 2019"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["Double Combo With ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " The Body Shop"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Sale up to ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "50% Off "
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--market-1",
        style: {
          backgroundImage: `url(/static/img/slider/home-3/home-banner/2.jpg)`
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-3/home-banner/2.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "Mega Sale Nov 2017"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["IKEA Minimalist ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Otoman"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Discount ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "50% Off "
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

/* harmony default export */ var MartketPlaceHomeBanner = (MarketPlaceHomeBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlaceSiteFeatures.jsx




const MarketPlaceSiteFeatures = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
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

/* harmony default export */ var marketplace_MarketPlaceSiteFeatures = (MarketPlaceSiteFeatures);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/MarketPlacePromotions.jsx




const MarketPlacePromotion = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-3-1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-3-2.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-3-3.jpg",
            alt: "martfury"
          })
        })
      })]
    })
  })
});

/* harmony default export */ var MarketPlacePromotions = (MarketPlacePromotion);
// EXTERNAL MODULE: ./components/partials/homepage/marketplace/MarketPlaceDealOfDay.jsx
var MarketPlaceDealOfDay = __webpack_require__(8441);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: ./components/elements/products/modules/ModuleProductActions.js
var ModuleProductActions = __webpack_require__(8006);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
;// CONCATENATED MODULE: ./components/elements/products/ProductSimple.jsx








const ProductSimple = ({
  product
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product ps-product--simple",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__thumbnail",
      children: [(0,product_helper/* StrapiProductThumbnail */.$J)(product), (0,product_helper/* StrapiProductBadge */.zm)(product), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductActions/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-product__container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[pid]",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-product__title",
            children: product.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__rating",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: product.ratingCount
          })]
        }), (0,product_helper/* StrapiProductPrice */.xB)(product)]
      })
    })]
  });
};

/* harmony default export */ var products_ProductSimple = (ProductSimple);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketClothingsAndApparel.jsx



function MarketClothingsAndApparel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketClothingsAndApparel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketClothingsAndApparel_ownKeys(Object(source), true).forEach(function (key) { MarketClothingsAndApparel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketClothingsAndApparel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketClothingsAndApparel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketClothingsAndApparel = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Clothing & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Apparel"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Women"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Men"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/girls",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Girls"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/boys",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Boys"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/baby",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Baby"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MarketClothingsAndApparel_objectSpread(MarketClothingsAndApparel_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/clothing-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/clothing-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/clothing-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketClothingsAndApparel = (MarketClothingsAndApparel);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketConsumerElectronics.jsx



function MarketConsumerElectronics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketConsumerElectronics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketConsumerElectronics_ownKeys(Object(source), true).forEach(function (key) { MarketConsumerElectronics_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketConsumerElectronics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketConsumerElectronics_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MarketConsumerElectronics = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Consumer Electronics"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/tv-television",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "TV Television"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/air-conditions",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Air Condition"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/washing-machine",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Washing Machine"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/microware",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Microwave"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/refrigerator",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Refrigerator"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/office-electronic",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Office Electronic"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/car-electronic",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Car Electronic"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MarketConsumerElectronics_objectSpread(MarketConsumerElectronics_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/electronic-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/electronic-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/electronic-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketConsumerElectronics = ((0,external_react_redux_.connect)(state => state.collection)(MarketConsumerElectronics));
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketComputerAndTechnology.jsx



function MarketComputerAndTechnology_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketComputerAndTechnology_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketComputerAndTechnology_ownKeys(Object(source), true).forEach(function (key) { MarketComputerAndTechnology_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketComputerAndTechnology_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketComputerAndTechnology_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketComputerAndTechnology = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Computer & Techologies"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Desktop PC"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Laptop"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/smartphone",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Smartphones"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/tablets",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Tablets"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/storage-and-memory",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Storage & Memory"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/pc-component",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "PC Component"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/game-accessories",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Game Accessories"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MarketComputerAndTechnology_objectSpread(MarketComputerAndTechnology_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/technology-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/technology-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/technology-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketComputerAndTechnology = (MarketComputerAndTechnology);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketGardenAndKitchen.jsx



function MarketGardenAndKitchen_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketGardenAndKitchen_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketGardenAndKitchen_ownKeys(Object(source), true).forEach(function (key) { MarketGardenAndKitchen_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketGardenAndKitchen_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketGardenAndKitchen_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketGardenAndKitchen = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Home ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Garden & Kitchen"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/furniture",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Furniture"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/home-decor",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Home Decor"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/cookware",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Cookware"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/utensils-and-gadget",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Utensils & Gadget"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/garden-tools",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Garden Tools"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/acessesories",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Acessesories"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MarketGardenAndKitchen_objectSpread(MarketGardenAndKitchen_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/kitchen-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/kitchen-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/kitchen-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketGardenAndKitchen = (MarketGardenAndKitchen);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty.jsx



function MarketHeathyAndBeauty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MarketHeathyAndBeauty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketHeathyAndBeauty_ownKeys(Object(source), true).forEach(function (key) { MarketHeathyAndBeauty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketHeathyAndBeauty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketHeathyAndBeauty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MarketHeathyAndBeauty = ({
  collectionSlug
}) => {
  const {
    0: productItems,
    1: setProductItems
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCategoriesHelper */.b)(collectionSlug);

    if (responseData) {
      setProductItems(responseData.items);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []); // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemsView = productItems.map((item, index) => {
        if (index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(products_ProductSimple, {
            product: item
          }, item.id);
        }
      });
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--products-of-category",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__categories",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Health & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Beauty"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/best-seller",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Best Seller"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/new-arrivals",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "New Arrivals"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/women",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Women"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/men",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Men"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/girls",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Girls"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/boys",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Boys"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/baby",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Baby"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            as: "/shop/sale-and-deal",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Sales & Deals"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-block__more-link",
          children: "View All"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__slider",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MarketHeathyAndBeauty_objectSpread(MarketHeathyAndBeauty_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        className: "ps-carousel",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/healthy-1.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/healthy-2.jpg",
            alt: "martfury"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-3/healthy-3.jpg",
            alt: "martfury"
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block__product-box",
      children: productItemsView
    })]
  });
};

/* harmony default export */ var modules_MarketHeathyAndBeauty = (MarketHeathyAndBeauty);
;// CONCATENATED MODULE: ./pages/home/market-place.jsx














const HomeMarketPlacePage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerMarketPlace, {
    title: "Home Market Place",
    children: [/*#__PURE__*/jsx_runtime_.jsx(MartketPlaceHomeBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace_MarketPlaceSiteFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(MarketPlacePromotions, {}), /*#__PURE__*/jsx_runtime_.jsx(MarketPlaceDealOfDay/* default */.Z, {
      collectionSlug: "deal-of-the-day"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section--gray",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(modules_MarketClothingsAndApparel, {
          collectionSlug: "clothings"
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_MarketConsumerElectronics, {
          collectionSlug: "consumer-electronics"
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_MarketComputerAndTechnology, {
          collectionSlug: "customer-bought-products"
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_MarketGardenAndKitchen, {
          collectionSlug: "garden-and-kitchen"
        }), /*#__PURE__*/jsx_runtime_.jsx(modules_MarketHeathyAndBeauty, {
          collectionSlug: "health-and-beauty"
        })]
      })
    })]
  });
};

/* harmony default export */ var market_place = (HomeMarketPlacePage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,8483,5671,8006,8661,8283,1380,5963,7143,5944,8441], function() { return __webpack_exec__(71); });
module.exports = __webpack_exports__;

})();