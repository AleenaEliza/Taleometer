(function() {
var exports = {};
exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ organic; }
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
// EXTERNAL MODULE: ./public/static/data/menu.json
var menu = __webpack_require__(6916);
// EXTERNAL MODULE: ./components/shared/headers/modules/SearchHeader.jsx
var SearchHeader = __webpack_require__(5828);
// EXTERNAL MODULE: ./components/shared/headers/modules/ElectronicHeaderActions.jsx
var ElectronicHeaderActions = __webpack_require__(7143);
// EXTERNAL MODULE: ./components/elements/menu/Menu.jsx + 2 modules
var Menu = __webpack_require__(8594);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderOrganic.jsx










const HeaderOrganic = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--organic",
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
            href: "/home/organic",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-organic.png",
                alt: "martfury"
              })
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
            className: "menu menu--organic"
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

/* harmony default export */ var headers_HeaderOrganic = (HeaderOrganic);
// EXTERNAL MODULE: ./components/shared/headers/modules/CurrencyDropdown.jsx
var CurrencyDropdown = __webpack_require__(4510);
// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageSwicher.jsx
var LanguageSwicher = __webpack_require__(4236);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMobileOrganic.jsx








class HeaderMobileOrganic extends external_react_.Component {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile organic",
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
                src: "/static/img/logo-organic.png",
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

/* harmony default export */ var headers_HeaderMobileOrganic = (HeaderMobileOrganic);
// EXTERNAL MODULE: ./components/shared/footers/FooterSecond.jsx
var FooterSecond = __webpack_require__(4348);
;// CONCATENATED MODULE: ./components/layouts/ContainerHomeOrganic.jsx









const ContainerHomeOrganic = ({
  children,
  title = 'Home Organic'
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderOrganic, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMobileOrganic, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      id: "homepage-9",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterSecond/* default */.Z, {
      classes: "ps-footer--organic"
    })]
  });
};

/* harmony default export */ var layouts_ContainerHomeOrganic = (ContainerHomeOrganic);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrganicBanner extends external_react_.Component {
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
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--organic",
          style: {
            backgroundImage: `url(/static/img/slider/home-9/1.jpg)`
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-9/1.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Weekend Promotions"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["Happy Summer ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " combo super discount ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "up to", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "40% Off"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-btn",
              href: "#",
              children: "Shop Now"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--organic",
          style: {
            backgroundImage: `url(/static/img/slider/home-9/2.jpg)`
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-9/2.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Weekend Promotions"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["Fresh vegetables & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " fruits basket ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "up to", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "40% Off"
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
  }

}

/* harmony default export */ var organic_OrganicBanner = (OrganicBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicSiteFeatures.jsx




const OrganicSiteFeatures = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
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

/* harmony default export */ var organic_OrganicSiteFeatures = (OrganicSiteFeatures);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicTopCategories.jsx




const OrganicTopCategories = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-top-categories",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Top categories of the month"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/1.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Milks & Creams"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/2.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Fruits"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/3.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Vegetables"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/4.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Ocean Foods"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/5.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Butters & Eggs"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__thumbnail",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/categories/organic/6.jpg",
              alt: "martfury"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-block__content",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Fresh Meats"
            })
          })]
        })
      })]
    })]
  })
});

/* harmony default export */ var organic_OrganicTopCategories = (OrganicTopCategories);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicPromotions.jsx





const OrganicPromotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-promotion",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-collection",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-9/1.jpg",
              alt: "martfury"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-collection",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/img/promotions/home-9/2.jpg",
              alt: "martfury"
            })
          })
        })
      })]
    })
  })
});

/* harmony default export */ var organic_OrganicPromotions = (OrganicPromotions);
// EXTERNAL MODULE: ./components/partials/product/ProductGroupDealHot.jsx + 2 modules
var ProductGroupDealHot = __webpack_require__(866);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicNewArrivals.jsx







const OrganicNewArrivals = ({
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

  async function getProducts(collectionSlug) {
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
    getProducts(collectionSlug);
  }, [collectionSlug]); // Views

  let productItemView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      productItemView = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: item
        })
      }, item.id));
    } else {
      productItemView = /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    productItemView = /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-product-list ps-product-list--2",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-section__header",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "New Arrivals"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-section__links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Milks & Creams"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Fruits"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Vegetables"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Ocean Foods"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Fresh Meats"
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
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: productItemView
        })
      })]
    })
  });
};

/* harmony default export */ var organic_OrganicNewArrivals = (OrganicNewArrivals);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicClientSay.jsx



function OrganicClientSay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function OrganicClientSay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { OrganicClientSay_ownKeys(Object(source), true).forEach(function (key) { OrganicClientSay_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { OrganicClientSay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function OrganicClientSay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OrganicClientSay extends external_react_.Component {
  constructor(props) {
    super(props);

    OrganicClientSay_defineProperty(this, "handleCarouselPrev", e => {
      e.preventDefault();
      this.slider.slickPrev();
    });

    OrganicClientSay_defineProperty(this, "handleCarouselNext", e => {
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
      style: {
        backgroundImage: `url(/static/img/bg/testimonial-organic.jpg)`
      },
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
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), OrganicClientSay_objectSpread(OrganicClientSay_objectSpread({
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

/* harmony default export */ var organic_OrganicClientSay = (OrganicClientSay);
;// CONCATENATED MODULE: ./components/partials/homepage/organic/OrganicBlog.jsx





const OrganicBlog = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-section--default ps-home-blog",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-section__header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "News"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "ps-section__links",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "News"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Review Products"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Tips & Tricks"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Promotions"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Videos"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "See All"
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-post",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__thumbnail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__overlay",
                href: "blog-detail.html"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/blog/organic/1.jpg",
                alt: "martfury"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__meta",
                href: "#",
                children: "Tips & Tricks"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__title",
                href: "#",
                children: "How To Make A Fresh Juice Blended For Your Family?"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["December 17, 2017 by", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: " drfurion"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-post",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__thumbnail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-post__badge",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-volume-high"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__overlay",
                href: "blog-detail.html"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/blog/organic/2.jpg",
                alt: "martfury"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__meta",
                href: "#",
                children: "Review Product"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__title",
                href: "#",
                children: "Fresh Eggs From Caroline\u2019s Farm"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["December 17, 2017 by", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: " drfurion"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-post",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__thumbnail",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-post__badge",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-volume-high"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-post__badge",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-volume-high"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__overlay",
                href: "blog-detail.html"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/blog/organic/3.jpg",
                alt: "martfury"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-post__content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__meta",
                href: "#",
                children: "News"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ps-post__title",
                href: "#",
                children: "Discover Fresh Organic Farms In Switzeland Villages"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["December 17, 2017 by", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: " drfurion"
                })]
              })]
            })]
          })
        })]
      })
    })]
  })
});

/* harmony default export */ var organic_OrganicBlog = (OrganicBlog);
;// CONCATENATED MODULE: ./pages/home/organic.jsx













const HomeOrganicPage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "site-content",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerHomeOrganic, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(organic_OrganicBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicSiteFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicTopCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicPromotions, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupDealHot/* default */.Z, {
        collectionSlug: "organic-products"
      }), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicNewArrivals, {
        collectionSlug: "organic-products"
      }), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicClientSay, {}), /*#__PURE__*/jsx_runtime_.jsx(organic_OrganicBlog, {})]
    })
  });
};

/* harmony default export */ var organic = (HomeOrganicPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,8483,5671,8006,1117,8661,8283,5963,7143,1050,472,866,4348], function() { return __webpack_exec__(746); });
module.exports = __webpack_exports__;

})();