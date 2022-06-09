(function() {
var exports = {};
exports.id = 4522;
exports.ids = [4522];
exports.modules = {

/***/ 1275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6916);
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8594);





const MenuCategories = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
  source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__/* .product_categories */ .a,
  className: "menu--dropdown"
});

/* harmony default export */ __webpack_exports__["Z"] = (MenuCategories);

/***/ }),

/***/ 6335:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ market_place_3; }
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMarketPlace3.jsx












const HeaderMarketPlace3 = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--market-place-3",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__left",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
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
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/home/market-place-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "ps-logo",
              children: ["q", /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo_light.png",
                alt: "martfury"
              })]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__center",
          children: /*#__PURE__*/jsx_runtime_.jsx(SearchHeader/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__right",
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
              className: "menu__toggle active",
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
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "menu menu--recent-view",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "menu-item-has-children",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/page/blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Your Recently Viewed"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "navigation__recent-products",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/page/blank",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "See all your recently viewed items"
                    })
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/vendor/become-a-vendor",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Sell on Martfury"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/account/order-tracking",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Tract your order"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(CurrencyDropdown/* default */.Z, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LanguageSwicher/* default */.Z, {})
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderMarketPlace3 = (HeaderMarketPlace3);
;// CONCATENATED MODULE: ./components/layouts/ContainerMarketPlace3.jsx









const ContainerMarketPlace3 = ({
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMarketPlace3, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      id: "homepage-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterMarketPlace2/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerMarketPlace3 = (ContainerMarketPlace3);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/shared/headers/modules/MenuCategories.jsx
var MenuCategories = __webpack_require__(1275);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace3/MartketPlace3Banner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MartketPlace3Banner extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "ps-home-banner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__left",
          children: /*#__PURE__*/jsx_runtime_.jsx(MenuCategories/* default */.Z, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/img/slider/home-5/1.jpg",
                    alt: "martfury"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/img/slider/home-5/2.jpg",
                    alt: "martfury"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/img/slider/home-5/3.jpg",
                    alt: "martfury"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item"
            })]
          })), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-6.jpg",
                alt: "martfury"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-1.jpg",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-2.jpg",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "wide",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-3.jpg",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-4.jpg",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-5/promotion-5.jpg",
                alt: "martfury"
              })
            })
          })]
        })]
      })
    });
  }

}

/* harmony default export */ var marketplace3_MartketPlace3Banner = (MartketPlace3Banner);
// EXTERNAL MODULE: ./components/partials/homepage/marketplace3/MarketPlace3SearchTrending.jsx
var MarketPlace3SearchTrending = __webpack_require__(684);
// EXTERNAL MODULE: ./components/partials/homepage/marketplace/MarketPlaceDealOfDay.jsx
var MarketPlaceDealOfDay = __webpack_require__(8441);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace3/MarketPlace3Promotions.jsx




const MarketPlace3Promotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/promotions/home-5/simple.jpg",
        alt: "martfury"
      })
    })
  })
});

/* harmony default export */ var marketplace3_MarketPlace3Promotions = (MarketPlace3Promotions);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./components/elements/products/ProductHorizontal.jsx
var ProductHorizontal = __webpack_require__(1050);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace3/Market3ProductGroup.jsx








const {
  TabPane
} = external_antd_.Tabs;

const Market3ProductGroup = ({
  categorySlug,
  banners,
  links,
  heading
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
    const responseData = await (0,strapi_fetch_data_helpers/* getProductsByCategoriesHelper */.b)(categorySlug);

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

  let productItemsView, recommendView, tab1View, tab2View, tab3View, linksView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const carouselItems = productItems.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: item
        }, item.id);
      });
      tab1View = productItems.map((item, index) => {
        if (index < 4) {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-3 col-sm-4 col-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
              product: item
            }, item.id)
          }, item.id);
        }
      });
      tab2View = productItems.map((item, index) => {
        if (index > 1 && index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-3 col-sm-4 col-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
              product: item
            }, item.id)
          }, item.id);
        }
      });
      tab3View = productItems.map((item, index) => {
        if (index > 0 && index < 5) {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-3 col-sm-4 col-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
              product: item
            }, item.id)
          }, item.id);
        }
      });
      recommendView = productItems.map((item, index) => {
        if (index > 3 && index < 8) {
          return /*#__PURE__*/jsx_runtime_.jsx(ProductHorizontal/* default */.Z, {
            product: item
          }, item.id);
        }
      });
      linksView = links.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: item
          })
        })
      }, item));
    } else {}
  } else {
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block--product-box",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__header",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: heading.icon
        }), " ", heading.title]
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: linksView
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-block__content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block__left",
        children: [banners, /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__products",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Tabs, {
            defaultActiveKey: "1",
            children: [/*#__PURE__*/jsx_runtime_.jsx(TabPane, {
              tab: "New Arrivals",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: tab1View
              })
            }, "1"), /*#__PURE__*/jsx_runtime_.jsx(TabPane, {
              tab: "Best Seller",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: tab2View
              })
            }, "2"), /*#__PURE__*/jsx_runtime_.jsx(TabPane, {
              tab: "Sale",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "row",
                  children: tab3View
                })
              })
            }, "3")]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-block__right",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
            children: "Recommended For You"
          }), recommendView]
        })
      })]
    })]
  });
};

/* harmony default export */ var marketplace3_Market3ProductGroup = (Market3ProductGroup);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace3/modules/ModuleMarket3ProductGroupBanners.jsx



function ModuleMarket3ProductGroupBanners_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ModuleMarket3ProductGroupBanners_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModuleMarket3ProductGroupBanners_ownKeys(Object(source), true).forEach(function (key) { ModuleMarket3ProductGroupBanners_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModuleMarket3ProductGroupBanners_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModuleMarket3ProductGroupBanners_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ModuleMarket3ProductGroupBanners = ({
  type
}) => {
  if (type === 'electronic') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), ModuleMarket3ProductGroupBanners_objectSpread(ModuleMarket3ProductGroupBanners_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
      fade: true,
      className: "ps-carousel",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/electronic-1.jpg",
              alt: "martfury"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/electronic-2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    }));
  }

  if (type === 'clothing') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), ModuleMarket3ProductGroupBanners_objectSpread(ModuleMarket3ProductGroupBanners_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
      fade: true,
      className: "ps-carousel",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/clothing-1.jpg",
              alt: "martfury"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/clothing-2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    }));
  }

  if (type === 'garden') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), ModuleMarket3ProductGroupBanners_objectSpread(ModuleMarket3ProductGroupBanners_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
      fade: true,
      className: "ps-carousel",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/kitchen-1.jpg",
              alt: "martfury"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-5/kitchen-2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    }));
  }
};

/* harmony default export */ var modules_ModuleMarket3ProductGroupBanners = (ModuleMarket3ProductGroupBanners);
;// CONCATENATED MODULE: ./pages/home/market-place-3.jsx











const HomeMarketPlace3Page = () => {
  const electricsLinks = ['TV Televisions', 'Air Conditioner', 'Washing Machine', 'Refrigerator', 'Microwave'];
  const clothingsLinks = ['Women', 'Men', 'Girl', 'Boy', 'Baby', 'Accessories'];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerMarketPlace3, {
    title: "Home Marketplace 3",
    children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace3_MartketPlace3Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(MarketPlace3SearchTrending/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(MarketPlaceDealOfDay/* default */.Z, {
      collectionSlug: "deal-of-the-day"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace3_MarketPlace3Promotions, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace3_Market3ProductGroup, {
        heading: {
          icon: 'icon-laundry',
          title: 'Consumer Electronic'
        },
        categorySlug: "clothing-and-parel",
        links: electricsLinks,
        banners: /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleMarket3ProductGroupBanners, {
          type: "electronic"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(marketplace3_Market3ProductGroup, {
        heading: {
          icon: 'icon-shirt',
          title: 'Clothings & Apparel'
        },
        categorySlug: "clothing-and-parel",
        links: clothingsLinks,
        banners: /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleMarket3ProductGroupBanners, {
          type: "clothing"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(marketplace3_Market3ProductGroup, {
        heading: {
          icon: 'icon-home6',
          title: 'Clothings & Apparel'
        },
        categorySlug: "garden-and-kitchen",
        links: clothingsLinks,
        banners: /*#__PURE__*/jsx_runtime_.jsx(modules_ModuleMarket3ProductGroupBanners, {
          type: "garden"
        })
      })]
    })]
  });
};

/* harmony default export */ var market_place_3 = (HomeMarketPlace3Page);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,8483,5671,8006,1117,8661,8283,1380,5963,7143,1050,5944,6567,684,8441], function() { return __webpack_exec__(6335); });
module.exports = __webpack_exports__;

})();