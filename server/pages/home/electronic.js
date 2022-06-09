(function() {
var exports = {};
exports.id = 9019;
exports.ids = [9019];
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

/***/ 924:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ electronic; }
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
// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var FooterDefault = __webpack_require__(5392);
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderElectronic.jsx












const HeaderElectronic = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  const menuElectronic = [{
    text: 'Hot Deal',
    url: '/shop',
    icon: 'icon-star'
  }, {
    text: 'Home Electronics',
    url: '/shop',
    icon: 'icon-laundry'
  }, {
    text: 'Computer & Technology',
    url: '/shop',
    icon: 'icon-laptop'
  }, {
    text: 'Camera & Videos',
    url: '/shop',
    icon: 'icon-camera2'
  }, {
    text: 'Office Electronics',
    url: '/shop',
    icon: 'icon-surveillance'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--standard header--electronic",
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
            href: "/home/electronic",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-electronic.png",
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
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
          source: menuElectronic,
          className: "menu menu--electronic"
        })
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderElectronic = (HeaderElectronic);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMobileElectronic.jsx








class HeaderMobileElectronic extends external_react_.Component {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile electronic",
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
                src: "/static/img/logo-electronic.png",
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

/* harmony default export */ var headers_HeaderMobileElectronic = (HeaderMobileElectronic);
;// CONCATENATED MODULE: ./components/layouts/ContainerHomeElectronics.jsx










const ContainerHomeElectronics = ({
  children,
  title = 'Home Electronics'
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderElectronic, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMobileElectronic, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "homepage-7",
      children: [children, /*#__PURE__*/jsx_runtime_.jsx(SiteFeatures/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterDefault/* default */.Z, {})]
  });
};

/* harmony default export */ var layouts_ContainerHomeElectronics = (ContainerHomeElectronics);
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
;// CONCATENATED MODULE: ./components/partials/homepage/electronic/ElectronicProductGroupWithCarousel.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ElectronicProductGroupWithCarousel = ({
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
            children: item
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

/* harmony default export */ var electronic_ElectronicProductGroupWithCarousel = (ElectronicProductGroupWithCarousel);
;// CONCATENATED MODULE: ./components/partials/homepage/electronic/ElectronicBanner.jsx



function ElectronicBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ElectronicBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ElectronicBanner_ownKeys(Object(source), true).forEach(function (key) { ElectronicBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ElectronicBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ElectronicBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ElectronicBanner extends external_react_.Component {
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
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), ElectronicBanner_objectSpread(ElectronicBanner_objectSpread({}, carouselSettings), {}, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/img/slider/home-7/1.jpg",
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
                    src: "/static/img/slider/home-7/2.jpg",
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
                    src: "/static/img/slider/home-7/3.jpg",
                    alt: "martfury"
                  })
                })
              })
            })]
          }))
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__right",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-collection",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-7/promotion-1.jpg",
                alt: "martfury"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-collection",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/slider/home-7/promotion-2.jpg",
                alt: "martfury"
              })
            })
          })]
        })]
      })
    });
  }

}

/* harmony default export */ var electronic_ElectronicBanner = (ElectronicBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/electronic/ElectronicTopCategories.jsx





class ElectronicTopCategories extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const homeCategories = [{
      thumbnail: '/static/img/categories/electronic/2.jpg',
      title: 'Tv Televisions',
      links: ['Smart TV', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Accessories']
    }, {
      thumbnail: '/static/img/categories/electronic/4.jpg',
      title: 'Air Conditioners',
      links: ['Type Hanging On Wall', 'Type Erect', 'Type Hanging On Celling', 'Accessories']
    }, {
      thumbnail: '/static/img/categories/electronic/3.jpg',
      title: 'Washing Machine',
      links: ['Type Hanging On Wall', 'Type Erect', 'Type Hanging On Celling', 'Accessories']
    }, {
      thumbnail: '/static/img/categories/electronic/1.jpg',
      title: 'Audios & Theaters',
      links: ['Speakers', 'Home Theater System', 'Wireless Audio', 'Headphone', 'Accessories']
    }, {
      thumbnail: '/static/img/categories/electronic/6.jpg',
      title: 'Office Electronics',
      links: ['Printers', 'Store & Business', 'Scanners', 'Projectors', 'Phones']
    }, {
      thumbnail: '/static/img/categories/electronic/8.jpg',
      title: 'Phones',
      links: ['Printers', 'Store & Business', 'Scanners', 'Projectors', 'Phones']
    }];
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-top-categories",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Top categories of the month"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: homeCategories.map(category => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4 col-sm-6 col-12 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category-2",
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
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: category.links.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/shop",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: link
                      })
                    })
                  }, link))
                })]
              })]
            })
          }, category.title))
        })]
      })
    });
  }

}

/* harmony default export */ var electronic_ElectronicTopCategories = (ElectronicTopCategories);
;// CONCATENATED MODULE: ./components/partials/homepage/electronic/ElectronicPromotions2.jsx




const ElectronicPromotions2 = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-promotions",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/shop",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-collection",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/promotions/home-7/3.jpg",
          alt: "martfury"
        })
      })
    })
  })
});

/* harmony default export */ var electronic_ElectronicPromotions2 = (ElectronicPromotions2);
;// CONCATENATED MODULE: ./pages/home/electronic.jsx










const HomeElectronicsPage = () => {
  const smartPhoneLinks = ['Iphone, Ipad, Samsung'];
  const electronicLinks = ['Smart', 'TV LED', 'Air Conditions', 'Sony Speakers', 'Panasonic Refrigerations'];
  const computerLinks = ['Laptop', 'Desktop PC', 'Smartphone', 'Mainboards', 'PC Gaming', 'Accessories'];
  const cameraLinks = ['Videos', 'Projectors', 'Digital Cameras', 'Printers & Scanners', 'Accessorices'];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerHomeElectronics, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicTopCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductGroupDealOfDay/* default */.Z, {
      categorySlug: "computers-and-technologies",
      boxed: true
    }), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicProductGroupWithCarousel, {
      collectionSlug: "electronics-best-sellers",
      title: "Best Seller In The Last Month",
      links: smartPhoneLinks
    }), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicPromotions2, {}), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicProductGroupWithCarousel, {
      collectionSlug: "electronic_computer_technology",
      title: "Computers & Technology",
      links: computerLinks
    }), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicProductGroupWithCarousel, {
      categorySlug: "consumer-electrics",
      title: "Home Electronics",
      links: electronicLinks
    }), /*#__PURE__*/jsx_runtime_.jsx(electronic_ElectronicProductGroupWithCarousel, {
      collectionSlug: "electronics-cameras-and-videos",
      title: "Cameras & Videos",
      links: cameraLinks
    })]
  });
};

/* harmony default export */ var electronic = (HomeElectronicsPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8483,5671,8006,1117,8661,8283,1380,5963,7143,5944,2793,7734], function() { return __webpack_exec__(924); });
module.exports = __webpack_exports__;

})();