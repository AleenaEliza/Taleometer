(function() {
var exports = {};
exports.id = 1803;
exports.ids = [1803];
exports.modules = {

/***/ 2473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ technology; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
// EXTERNAL MODULE: ./components/partials/homepage/autopart/SiteFeatures.jsx
var SiteFeatures = __webpack_require__(7734);
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderTechnology.jsx












const HeaderTechnology = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  const menuTechnology = [{
    text: 'Hot Deal',
    url: '/home/technology',
    icon: 'icon-star'
  }, {
    text: 'Smartphone',
    url: '/home/technology',
    icon: 'icon-smartphone'
  }, {
    text: 'Tablets',
    url: '/home/technology',
    icon: 'ion-ipad'
  }, {
    text: 'Laptop',
    url: '/home/technology',
    icon: 'icon-laptop'
  }, {
    text: 'Sounds',
    url: '/home/technology',
    icon: 'icon-headphone'
  }, {
    text: 'Technology Toys',
    url: '/home/technology',
    icon: 'icon-mic2'
  }, {
    text: 'Accesories',
    url: '/home/technology',
    icon: 'icon-headphones'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--technology",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["SHOPPING CENTER", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
              className: "ml-1",
              children: [' ', "for all orders over $100"]
            })]
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
            href: "/home/technology",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-technology.png",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu--product-categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu__toggle",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-menu"
              })
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
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
          source: menuTechnology,
          className: "menu menu--technology"
        })
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderTechnology = (HeaderTechnology);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMobileTechnology.jsx








class HeaderMobileTechnology extends external_react_.Component {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile technology",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header__top",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__left",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Welcome to Martfury Online Shopping Store !"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
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
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navigation--mobile",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navigation__left",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-technology.png",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(MobileHeaderActions/* default */.Z, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-search--mobile",
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          className: "ps-form--search-mobile",
          action: "/",
          method: "get",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-group--nest",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "form-control",
              type: "text",
              placeholder: "Search something..."
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-magnifier"
              })
            })]
          })
        })
      })]
    });
  }

}

/* harmony default export */ var headers_HeaderMobileTechnology = (HeaderMobileTechnology);
// EXTERNAL MODULE: ./components/shared/footers/FooterSecond.jsx
var FooterSecond = __webpack_require__(4348);
;// CONCATENATED MODULE: ./components/layouts/ContainerHomeTechnology.jsx










const ContainerHomeTechnology = ({
  children,
  title = 'Home Technology'
}) => {
  let titleView;

  if (title !== '') {
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderTechnology, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMobileTechnology, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "homepage-10",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(SiteFeatures/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(FooterSecond/* default */.Z, {
        classes: "ps-footer--technology"
      })]
    })]
  });
};

/* harmony default export */ var layouts_ContainerHomeTechnology = (ContainerHomeTechnology);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupDealOfDay.jsx
var ProductGroupDealOfDay = __webpack_require__(2793);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(6367);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(4804);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/homepage/technology/TechnologyProductGroupWithCarousel.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TechnologyProductGroupWithCarousel = ({
  collectionSlug,
  categorySlug,
  links,
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
    let responseData;

    if (collectionSlug) {
      responseData = await (0,strapi_fetch_data_helpers/* getProductsByCollectionHelper */.l)(collectionSlug);
    }

    if (categorySlug) {
      responseData = await (0,strapi_fetch_data_helpers/* getProductsByCategoriesHelper */.b)(categorySlug);
    }

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

  let productItemsView, linksView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
        product: item
      }, item.id));
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
        arrows: false,
        className: "ps-carousel outside",
        children: slideItems
      }));
      linksView = links.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Iphone"
          })
        })
      }, item));
    } else {
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    const skeletons = (0,common_helpers/* generateTempArray */.Z)(6).map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-xl-2 col-lg-3 col-sm-3 col-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(SkeletonProduct/* default */.Z, {})
    }, item));
    productItemsView = /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: skeletons
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-product-list",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-section__links",
          children: [linksView, /*#__PURE__*/jsx_runtime_.jsx("li", {
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

/* harmony default export */ var technology_TechnologyProductGroupWithCarousel = (TechnologyProductGroupWithCarousel);
;// CONCATENATED MODULE: ./components/partials/homepage/technology/TechnologyBanner.jsx



function TechnologyBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TechnologyBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TechnologyBanner_ownKeys(Object(source), true).forEach(function (key) { TechnologyBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TechnologyBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TechnologyBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TechnologyBanner = () => {
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
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), TechnologyBanner_objectSpread(TechnologyBanner_objectSpread({}, carouselSettings), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--technology",
        style: {
          backgroundImage: "url('/static/img/slider/home-10/1.jpg')"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-10/1.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Weekend Promotions"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["Mini Helicopter ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Mini Helicopter ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " sale", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: " 40% Off"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            children: "Shop Now"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-banner--technology",
        style: {
          backgroundImage: "url('/static/img/slider/home-10/2.jpg')"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/slider/home-10/2.jpg",
          alt: "martfury"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Weekend Promotions"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["iLuv Aud Mini & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Ultra Slim Pocket-Sized", ' ', /*#__PURE__*/jsx_runtime_.jsx("br", {}), " speaker just", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: " 40% Off"
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

/* harmony default export */ var technology_TechnologyBanner = (TechnologyBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/technology/TechnologySiteFeatures.jsx




const TechnologySiteFeatures = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
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

/* harmony default export */ var technology_TechnologySiteFeatures = (TechnologySiteFeatures);
;// CONCATENATED MODULE: ./components/partials/homepage/technology/TechnologyPromotions.jsx





const TechnologyPromotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-promotions",
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
              src: "/static/img/promotions/home-10/1.jpg",
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
              src: "/static/img/promotions/home-10/2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    })
  })
});

/* harmony default export */ var technology_TechnologyPromotions = (TechnologyPromotions);
;// CONCATENATED MODULE: ./components/partials/homepage/technology/TechnologyTopCategories.jsx




const TechnologyTopCategories = () => {
  const topCategories = [{
    imagePath: '/static/img/categories/technology/1.jpg',
    title: 'Smartphone'
  }, {
    imagePath: '/static/img/categories/technology/2.jpg',
    title: 'Tables'
  }, {
    imagePath: '/static/img/categories/technology/3.jpg',
    title: 'Laptops'
  }, {
    imagePath: '/static/img/categories/technology/4.jpg',
    title: 'Sounds'
  }, {
    imagePath: '/static/img/categories/technology/5.jpg',
    title: 'Technology Toys'
  }, {
    imagePath: '/static/img/categories/technology/6.jpg',
    title: 'Accessories'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-top-categories",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Top categories of the month"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: topCategories.map(category => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: category.imagePath,
                alt: "martfury"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__content",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: category.title
              })
            })]
          })
        }, category.title))
      })]
    })
  });
};

/* harmony default export */ var technology_TechnologyTopCategories = (TechnologyTopCategories);
;// CONCATENATED MODULE: ./pages/home/technology.jsx











const HomeTechnologyPage = () => {
  const smartPhoneLinks = ['Iphone, Ipad, Samsung'];
  const laptopAndSoundLinks = ['Apple', 'Laptop', 'Asus', 'Mashall', 'Speaker', 'JBL', 'Speaker'];
  const toysLink = ['Micro', 'Drone/Flycam', 'JQOS'];
  const goodPriceLinks = ['Headphone', 'Charge', 'Case USB', 'Hard Driver', 'TV Box'];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerHomeTechnology, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologySiteFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupDealOfDay/* default */.Z, {
      categorySlug: "computers-and-technologies",
      boxed: true
    }), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyPromotions, {}), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyTopCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyProductGroupWithCarousel, {
      categorySlug: "phones-and-accessories",
      title: "Popular Smartphones & Tablets",
      links: smartPhoneLinks
    }), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyProductGroupWithCarousel, {
      categorySlug: "computers-and-technologies",
      title: "Best Seller Laptops & Sounds",
      links: laptopAndSoundLinks
    }), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyProductGroupWithCarousel, {
      collectionSlug: "technology-toys",
      title: "Technology Toys Recommended For You",
      links: toysLink
    }), /*#__PURE__*/jsx_runtime_.jsx(technology_TechnologyProductGroupWithCarousel, {
      collectionSlug: "technology-good-price",
      title: "Good Price Accessories",
      links: goodPriceLinks
    })]
  });
};

/* harmony default export */ var technology = (HomeTechnologyPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,8483,5671,8006,1117,8661,8283,1380,5963,7143,5944,4348,2793,7734], function() { return __webpack_exec__(2473); });
module.exports = __webpack_exports__;

})();