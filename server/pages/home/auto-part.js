(function() {
var exports = {};
exports.id = 1733;
exports.ids = [1733];
exports.modules = {

/***/ 462:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auto_part; }
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__(8594);
// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__(4510);
// EXTERNAL MODULE: ./components/shared/headers/modules/AccountQuickLinks.jsx
var AccountQuickLinks = __webpack_require__(6176);
// EXTERNAL MODULE: ./components/shared/headers/modules/SearchHeader.jsx
var SearchHeader = __webpack_require__(5828);
// EXTERNAL MODULE: ./components/shared/headers/modules/MiniCart.jsx + 1 modules
var MiniCart = __webpack_require__(1453);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderAutoPart.jsx











const HeaderAutoPart = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  const menuAutopart = [{
    text: 'Interior',
    url: '/shop'
  }, {
    text: 'Exterior',
    url: '/shop'
  }, {
    text: 'Body parts',
    url: '/shop'
  }, {
    text: 'Wheels & Tires',
    url: '/shop'
  }, {
    text: 'Lighting',
    url: '/shop'
  }, {
    text: 'Performance',
    url: '/shop'
  }, {
    text: 'Repare part',
    url: '/shop'
  }, {
    text: 'Tools & Garage',
    url: '/shop'
  }];
  const menuAutopartCategories = ['Interior', 'Interior', 'Wheels & Tires', 'Exterior', 'Performance', 'Body parts', 'Lighting', 'Accessories']; // views

  const menuCategoriesView = menuAutopartCategories.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/shop",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: item
      })
    })
  }, item));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--autopart",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "FREE SHIPPING"
            }), " for all orders over $100"]
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
                href: "/account/order-tracking",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Tract your order"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(CurrencyDropdown/* default */.Z, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(AccountQuickLinks/* default */.Z, {
                isLoggedIn: false
              })
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
            href: "/home/auto-part",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-autopart.png",
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
                children: "Shop by Department"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu__content",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "menu--dropdown",
                children: menuCategoriesView
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(SearchHeader/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__content-right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "header__actions",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--header-hotline",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__left",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-telephone"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__right",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Hotline", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "1-800-234-5678"
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(MiniCart/* default */.Z, {})]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navigation",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
          source: menuAutopart,
          className: "menu menu--technology"
        })
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderAutoPart = (HeaderAutoPart);
// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__(4236);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMobileAutopart.jsx








class HeaderMobileAutopart extends external_react_.Component {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile autopart",
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
                src: "/static/img/logo-autopart.png",
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

/* harmony default export */ var headers_HeaderMobileAutopart = (HeaderMobileAutopart);
// EXTERNAL MODULE: ./components/partials/homepage/autopart/SiteFeatures.jsx
var SiteFeatures = __webpack_require__(7734);
// EXTERNAL MODULE: ./components/shared/footers/FooterSecond.jsx
var FooterSecond = __webpack_require__(4348);
;// CONCATENATED MODULE: ./components/layouts/ContainerHomeAutopart.jsx










const ContainerHomeAutopart = ({
  children,
  title = 'Home Autopart'
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderAutoPart, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMobileAutopart, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "homepage-2",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(SiteFeatures/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(FooterSecond/* default */.Z, {
        classes: "autopart"
      })]
    })]
  });
};

/* harmony default export */ var layouts_ContainerHomeAutopart = (ContainerHomeAutopart);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AutopartBanner = () => {
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
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--autopart",
          style: {
            backgroundImage: "url('/static/img/bg/blog-detail.jpg')"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/autopart/1.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Version 2018"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["DUNLOP TIRES ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " FASTER"]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "New version 2018 with many powerful features."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "Faster, Friction better & Cheap Price"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-btn",
              href: "#",
              children: "Shop Now"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--autopart",
          style: {
            backgroundImage: `url(/static/img/bg/blog-detail.jpg)`
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/autopart/2.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Version 2018"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["CASTROL ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " MOTOR OILS"]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "New version 2018 with many powerful features."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "Faster, Friction better & Cheap Price"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-btn",
              href: "#",
              children: "Shop Now"
            })]
          })]
        })
      })]
    }))
  });
};

/* harmony default export */ var autopart_AutopartBanner = (AutopartBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartCategories.jsx





const AutopartCategories = () => {
  const autoPartCategories = [{
    thumbnail: '/static/img/categories/home-2/1.jpg',
    title: 'INTERIOR',
    links: ['Seats', 'Steering Wheels', 'Dash Cover', 'Floor Mats']
  }, {
    thumbnail: '/static/img/categories/home-2/2.jpg',
    title: 'EXTERIOR',
    links: ['Running Boards', 'Custom Grilles', 'Off-Road Bumpers', 'Body Kits']
  }, {
    thumbnail: '/static/img/categories/home-2/3.jpg',
    title: 'WHEELS & TIRES',
    links: ['Custom Wheels', 'Tires', 'Factory Wheels', 'Center Caps']
  }, {
    thumbnail: '/static/img/categories/home-2/4.jpg',
    title: 'PERFORMANCE',
    links: ['Exhausted System', 'Brakes', 'Performance Chips', 'Starting & Charging']
  }, {
    thumbnail: '/static/img/categories/home-2/5.jpg',
    title: 'BODY PARTS',
    links: ['Mirrors', 'Hoods', 'Bumpers', 'Quater Panels']
  }, {
    thumbnail: '/static/img/categories/home-2/6.jpg',
    title: 'LIGHTING',
    links: ['Headlight', 'Off-Road Light', 'WSingnal Light']
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-top-categories",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "TOP CATEGORIES OF THE MONTH"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row align-content-lg-stretch",
        children: autoPartCategories.map(category => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 col-sm-6 col-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--category-2 ps-block--category-auto-part",
            "data-mh": "categories",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-block__thumbnail",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: category.thumbnail,
                alt: "martfury"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: category.title
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [category.links && category.links.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: link
                    })
                  })
                }, link)), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "more",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      children: ["More", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "icon-chevron-right"
                      })]
                    })
                  })
                })]
              })]
            })]
          })
        }, category.title))
      })]
    })
  });
};

/* harmony default export */ var autopart_AutopartCategories = (AutopartCategories);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartPromotions.jsx




const AutopartPromotions = () => /*#__PURE__*/jsx_runtime_.jsx("section", {
  className: "ps-home-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection mb-30",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-2-1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection mb-30",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-2-2.jpg",
            alt: "martfury"
          })
        })
      })]
    })
  })
});

/* harmony default export */ var autopart_AutopartPromotions = (AutopartPromotions);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartPromotions2.jsx




const AutopartPromotions2 = () => /*#__PURE__*/jsx_runtime_.jsx("section", {
  className: "ps-home-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection mb-30",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-2-1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection mb-30",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-2-2.jpg",
            alt: "martfury"
          })
        })
      })]
    })
  })
});

/* harmony default export */ var autopart_AutopartPromotions2 = (AutopartPromotions2);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(6367);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(4804);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartRecommendForYou.jsx



function AutopartRecommendForYou_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AutopartRecommendForYou_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AutopartRecommendForYou_ownKeys(Object(source), true).forEach(function (key) { AutopartRecommendForYou_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AutopartRecommendForYou_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AutopartRecommendForYou_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const AutopartRecommendForYou = ({
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
      const slideItems = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
        product: item
      }, item.id));
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), AutopartRecommendForYou_objectSpread(AutopartRecommendForYou_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
        arrows: false,
        className: "ps-carousel outside",
        children: slideItems
      }));
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

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "ps-product-list ps-recommend-for-you",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "RECOMMENDED FOR YOU"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-section__links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Best Seller"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "New Arrival"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Top Rated"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Trending Products"
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

/* harmony default export */ var autopart_AutopartRecommendForYou = (AutopartRecommendForYou);
;// CONCATENATED MODULE: ./components/partials/commons/ClientSay.jsx



function ClientSay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ClientSay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ClientSay_ownKeys(Object(source), true).forEach(function (key) { ClientSay_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ClientSay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ClientSay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ClientSay extends external_react_.Component {
  constructor(props) {
    super(props);

    ClientSay_defineProperty(this, "handleCarouselPrev", e => {
      e.preventDefault();
      this.slider.slickPrev();
    });

    ClientSay_defineProperty(this, "handleCarouselNext", e => {
      e.preventDefault();
      this.slider.slickNext();
    });
  }

  render() {
    const carouselSetting = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }]
    };
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-client-say",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__header",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "What client say"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-section__nav",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-carousel__prev",
              href: "#",
              onClick: this.handleCarouselPrev,
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-chevron-left"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-carousel__next",
              href: "#",
              onClick: this.handleCarouselNext,
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-chevron-right"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__content",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), ClientSay_objectSpread(ClientSay_objectSpread({
            ref: slider => this.slider = slider
          }, carouselSetting), {}, {
            className: "ps-carousel outside",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--testimonial",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__header",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/users/1.jpg",
                  alt: "martfury"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-quote-close"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  children: ["Kanye West", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Head Chef at BBQ Restaurant"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--testimonial",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__header",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/users/2.png",
                  alt: "martfury"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-quote-close"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  children: ["Anabella Kleva", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Boss at TocoToco"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--testimonial",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__header",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/users/3.jpg",
                  alt: "martfury"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-quote-close"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  children: ["William Roles", /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Head Chef at BBQ Restaurant"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                })]
              })]
            })]
          }))
        })]
      })
    });
  }

}

/* harmony default export */ var commons_ClientSay = (ClientSay);
;// CONCATENATED MODULE: ./components/partials/homepage/autopart/AutopartBestSaleBrand.jsx





const TechnologyBestSaleBrands = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-best-sale-brands ps-section--furniture",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__header",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "BEST SELLER BRANDS"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "ps-image-list",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-1.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-2.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-3.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-4.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-5.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-6.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-7.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-8.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-9.jpg",
                alt: "martfury"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-10.jpg",
                alt: "martfury"
              })
            })
          })
        })]
      })
    })]
  })
});

/* harmony default export */ var AutopartBestSaleBrand = (TechnologyBestSaleBrands);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupDealHot.jsx + 2 modules
var ProductGroupDealHot = __webpack_require__(866);
;// CONCATENATED MODULE: ./pages/home/auto-part.jsx













const HomeAutopartPage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerHomeAutopart, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(autopart_AutopartBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(autopart_AutopartCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(autopart_AutopartPromotions, {}), /*#__PURE__*/jsx_runtime_.jsx(autopart_AutopartRecommendForYou, {
      collectionSlug: "autopart-recommend-products"
    }), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupDealHot/* default */.Z, {
      collectionSlug: "autopart-recommend-products"
    }), /*#__PURE__*/jsx_runtime_.jsx(autopart_AutopartPromotions2, {}), /*#__PURE__*/jsx_runtime_.jsx(AutopartBestSaleBrand, {}), /*#__PURE__*/jsx_runtime_.jsx(commons_ClientSay, {})]
  });
};

/* harmony default export */ var auto_part = (HomeAutopartPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,8483,5671,8006,1117,8661,8283,1380,5963,1050,472,866,4348,7734], function() { return __webpack_exec__(462); });
module.exports = __webpack_exports__;

})();