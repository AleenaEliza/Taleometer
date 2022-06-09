(function() {
var exports = {};
exports.id = 4553;
exports.ids = [4553];
exports.modules = {

/***/ 831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ market_place_2; }
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
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMarketPlace2.jsx












const HeaderMarketPlace2 = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  const menuMarket2 = [{
    text: 'All Categories',
    url: '/shop'
  }, {
    text: 'Today Deals',
    url: '/shop'
  }, {
    text: 'Electronics',
    url: '/shop'
  }, {
    text: 'Clothing',
    url: '/shop'
  }, {
    text: 'Computers',
    url: '/shop'
  }, {
    text: 'Furnitures',
    url: '/shop'
  }, {
    text: 'Mom & baby',
    url: '/shop'
  }, {
    text: 'Book & More',
    url: '/shop'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--market-place-2",
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
            href: "/home/market-place-2",
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
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navigation",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
          source: menuMarket2,
          className: "menu menu--market-2"
        })
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderMarketPlace2 = (HeaderMarketPlace2);
// EXTERNAL MODULE: ./components/shared/footers/FooterMarketPlace2.jsx
var FooterMarketPlace2 = __webpack_require__(6567);
;// CONCATENATED MODULE: ./components/layouts/ContainerMarketPlace2.jsx










const ContainerMarketPlace2 = ({
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMarketPlace2, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      id: "homepage-4",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterMarketPlace2/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerMarketPlace2 = (ContainerMarketPlace2);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace2/Market2ProductGroupByCategory.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Market2ProductGroupByCategory = ({
  categorySlug,
  title
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

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const carouselItems = productItems.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: item
        }, item.id);
      });
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
        className: "ps-carousel outside",
        children: carouselItems
      }));
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

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-product-list",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-section__links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "active",
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
                children: "Best seller"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Must Popular"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "View All"
              })
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: productItemsView
      })]
    })
  });
};

/* harmony default export */ var marketplace2_Market2ProductGroupByCategory = (Market2ProductGroupByCategory);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(184);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7974);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace2/MartketPlace2Banner.jsx



function MartketPlace2Banner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MartketPlace2Banner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MartketPlace2Banner_ownKeys(Object(source), true).forEach(function (key) { MartketPlace2Banner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MartketPlace2Banner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MartketPlace2Banner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MartketPlace2Banner = () => {
  const carouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/jsx_runtime_.jsx(NextArrow/* default */.Z, {}),
    prevArrow: /*#__PURE__*/jsx_runtime_.jsx(PrevArrow/* default */.Z, {})
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-home-banner",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__left",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MartketPlace2Banner_objectSpread(MartketPlace2Banner_objectSpread({}, carouselSettings), {}, {
          className: "ps-carousel",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/slider/home-4/1.jpg",
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
                  src: "/static/img/slider/home-4/2.jpg",
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
                  src: "/static/img/slider/home-4/3.jpg",
                  alt: "martfury"
                })
              })
            })
          })]
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__right",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-collection",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/slider/home-4/left.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ var marketplace2_MartketPlace2Banner = (MartketPlace2Banner);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace2/MarketPlace2Promotions.jsx



const MarketPlace2Promotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "ps-collection",
      href: "shop-default.html",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/promotions/home-4-1.jpg",
        alt: "martfury"
      })
    })
  })
});

/* harmony default export */ var marketplace2_MarketPlace2Promotions = (MarketPlace2Promotions);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace2/MarketPlace2Download.jsx




const MarketPlace2Download = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-download-app",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-block--download-app",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/app.png",
              alt: "martfury"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Download Martfury App Now!"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Shopping fastly and easily more with our app. Get a link to download the app on your phone"
            }), /*#__PURE__*/jsx_runtime_.jsx("form", {
              className: "ps-form--download-app",
              action: "do_action",
              method: "post",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group--nest",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "form-control",
                  type: "Email",
                  placeholder: "Email Address"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "ps-btn",
                  children: "Subscribe"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "download-link",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/google-play.png",
                  alt: "martfury"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/app-store.png",
                  alt: "martfury"
                })
              })]
            })]
          })
        })]
      })
    })
  })
});

/* harmony default export */ var marketplace2_MarketPlace2Download = (MarketPlace2Download);
;// CONCATENATED MODULE: ./components/partials/homepage/marketplace2/MarketPlace2Categories.jsx





const MarketPlace2Categories = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-categories",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__header",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Top Categories Of The Month"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row align-content-lg-stretch",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/5.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Electronics"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "TV Televisions"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Air Conditioners"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Washing Machines"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Audio & Theaters"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Audio & Theaters"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Office Electronics"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/1.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Clothings"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Office Electronics"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Womens"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Mens"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Bags & Backpacks"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Accessories"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/9.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Computers"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Desktop PC"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Laptop"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "PC Gaming"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Storage & Memory"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "PC Components"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/2.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Home & Kitchen"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Funitures"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Decor"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Cookwares"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Utensil & Gadgets"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Garden Tools"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/10.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Healthy & Beauty"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Makeup"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Skin Care"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Hair Care"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Tools & Equipments"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Perfurmes"
                    })
                  })
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/shop/6.jpg",
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Jewelry & Watch"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Pendant"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Necklace"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Watch"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Bracelets"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Accessories"
                    })
                  })
                })]
              })]
            })]
          })
        })]
      })
    })]
  })
});

/* harmony default export */ var marketplace2_MarketPlace2Categories = (MarketPlace2Categories);
;// CONCATENATED MODULE: ./pages/home/market-place-2.jsx










const HomeMarketPlace2Page = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerMarketPlace2, {
    title: "Home Marketplace 2",
    children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace2_MartketPlace2Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_MarketPlace2Categories, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_MarketPlace2Promotions, {}), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_Market2ProductGroupByCategory, {
      categorySlug: "consumer-electrics",
      title: "Consumer Electronics"
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_Market2ProductGroupByCategory, {
      categorySlug: "clothing-and-parel",
      title: "Clothings & Apparel"
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_Market2ProductGroupByCategory, {
      categorySlug: "computers-and-technologies",
      title: "Computer & Technologies"
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_Market2ProductGroupByCategory, {
      categorySlug: "garden-and-kitchen",
      title: "Garden & Kitchen"
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_Market2ProductGroupByCategory, {
      categorySlug: "health-and-beauty",
      title: "Heath & beauty"
    }), /*#__PURE__*/jsx_runtime_.jsx(marketplace2_MarketPlace2Download, {})]
  });
};

/* harmony default export */ var market_place_2 = (HomeMarketPlace2Page);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,7786,8483,5671,8006,1117,8661,8283,5963,7143,6567], function() { return __webpack_exec__(831); });
module.exports = __webpack_exports__;

})();