(function() {
var exports = {};
exports.id = 7831;
exports.ids = [7831];
exports.modules = {

/***/ 5304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ furniture; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
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
;// CONCATENATED MODULE: ./components/shared/headers/HeaderFurniture.jsx












const HeaderFurniture = () => {
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "header header--furniture",
    id: "headerSticky",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__left",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/home/furniture",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/logo-furniture.png",
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
                data: menu/* product_categories */.a,
                className: "menu--dropdown"
              })
            })]
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
          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
            source: menu/* menuPrimary.menu_1 */.A.u,
            className: "menu menu--furniture"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navigation__right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/page/blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Sell on Martfury"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/page/blank",
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
      })
    })]
  });
};

/* harmony default export */ var headers_HeaderFurniture = (HeaderFurniture);
// EXTERNAL MODULE: ./components/shared/headers/modules/MobileHeaderActions.jsx + 1 modules
var MobileHeaderActions = __webpack_require__(6216);
;// CONCATENATED MODULE: ./components/shared/headers/HeaderMobileFurniture.jsx








class HeaderMobileFurniture extends external_react_.Component {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header header--mobile furniture",
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
                src: "/static/img/logo-furniture.png",
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

/* harmony default export */ var headers_HeaderMobileFurniture = (HeaderMobileFurniture);
// EXTERNAL MODULE: ./components/shared/footers/FooterSecond.jsx
var FooterSecond = __webpack_require__(4348);
;// CONCATENATED MODULE: ./components/layouts/ContainerHomeFurniture.jsx









const ContainerHomeFurniture = ({
  children,
  title = 'Home Furniture'
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
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderFurniture, {}), /*#__PURE__*/jsx_runtime_.jsx(headers_HeaderMobileFurniture, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      id: "homepage-8",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterSecond/* default */.Z, {
      classes: "ps-footer--furniture"
    })]
  });
};

/* harmony default export */ var layouts_ContainerHomeFurniture = (ContainerHomeFurniture);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureBanner.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FurnitureBanner = () => {
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
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, carouselSettings), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--furniture",
          style: {
            backgroundImage: `url(/static/img/slider/home-8/1.jpg)`
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-8/1.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Limit Edition"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["SCADINAVIA ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " COLLECTIONS FOR YOUR ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "BEDROOM JUST ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: " 40%"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-btn",
              href: "#",
              children: "Shop Now"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-banner--furniture",
          style: {
            backgroundImage: `url(/static/img/slider/home-8/2.jpg)`
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/slider/home-8/2.jpg",
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-banner__content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Version 2018"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              children: ["HAPPY SUMMER ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " WOODEN FURNTITURE ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ' ', "SALE ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
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
    })
  });
};

/* harmony default export */ var furniture_FurnitureBanner = (FurnitureBanner);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureSiteFeatures.jsx




const FurnitureTrendingProduct = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-trending-products ps-section--furniture",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__header",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "BEST SELLER PRODUCTS"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section__content"
    })]
  })
});

/* harmony default export */ var FurnitureSiteFeatures = (FurnitureTrendingProduct);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurniturePromotions.jsx




const FurniturePromotions = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-promotions",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-section__header",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["WELCOME TO ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "MARTFURY"
        }), " \u2013 CUSTOM FURNITURE", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "SHOPPING STORE ONLINE"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Designer furniture. Locally designed. Globally Crafted."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-8/1.jpg",
            alt: "martfury"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ps-collection",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/img/promotions/home-8/2.jpg",
            alt: "martfury"
          })
        })
      })]
    })]
  })
});

/* harmony default export */ var furniture_FurniturePromotions = (FurniturePromotions);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureCategories.jsx





const FurnitureCategories = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-home-categories ps-section--furniture",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Shop by categories"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/1.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Sofas"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/2.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Chairs"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/3.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Tables"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/4.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "TV Boards"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/5.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Storages"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/6.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Rugs"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/7.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lamp & Lighting"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/8.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Furnishings"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/9.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Ottomans"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/10.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Shelfs"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/11.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Kid Furnitures"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/shop",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {})
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/categories/furniture/12.png",
                alt: "martfury"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Kitchen"
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var furniture_FurnitureCategories = (FurnitureCategories);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurniturePromotions2.jsx




const FurniturePromotions2 = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-home-promotions ps-home-promotions-2",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/shop",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "ps-collection",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/img/promotions/home-8/1.jpg",
          alt: "martfury"
        })
      })
    })
  })
});

/* harmony default export */ var furniture_FurniturePromotions2 = (FurniturePromotions2);
// EXTERNAL MODULE: ./utilities/common-helpers.js
var common_helpers = __webpack_require__(6367);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProduct.jsx
var SkeletonProduct = __webpack_require__(4804);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureTrendingProducts.jsx



function FurnitureTrendingProducts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FurnitureTrendingProducts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FurnitureTrendingProducts_ownKeys(Object(source), true).forEach(function (key) { FurnitureTrendingProducts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FurnitureTrendingProducts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FurnitureTrendingProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FurnitureTrendingProducts = ({
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
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), FurnitureTrendingProducts_objectSpread(FurnitureTrendingProducts_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-home-trending-products ps-section--furniture",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "TRENDING PRODUCTS"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: productItemsView
      })]
    })
  });
};

/* harmony default export */ var furniture_FurnitureTrendingProducts = (FurnitureTrendingProducts);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureShopByRoom.jsx





class FurnitureShopByRoom extends external_react_.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const furnitureRoom = [{
      imagePath: '/static/img/categories/furniture/room-1.png',
      title: 'Living Rooom'
    }, {
      imagePath: '/static/img/categories/furniture/room-2.png',
      title: 'Bedroom'
    }, {
      imagePath: '/static/img/categories/furniture/room-3.png',
      title: 'Dinning Room'
    }, {
      imagePath: '/static/img/categories/furniture/room-4.png',
      title: 'Kitchen'
    }, {
      imagePath: '/static/img/categories/furniture/room-5.png',
      title: 'Bathroom'
    }, {
      imagePath: '/static/img/categories/furniture/room-6.png',
      title: "Kid's Room"
    }, {
      imagePath: '/static/img/categories/furniture/room-7.png',
      title: 'Patio & Outdoor'
    }, {
      imagePath: '/static/img/categories/furniture/room-8.png',
      title: 'Office'
    }];
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-section--furniture ps-home-shop-by-room",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Shop By Room"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-section__content",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: furnitureRoom.map(room => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-3 col-md-4 col-sm-6 col-12",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block--category-room",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-block__thumbnail",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: room.imagePath,
                        alt: "martfury"
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-block__content",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: room.title
                    })
                  })
                })]
              })
            }, room.title))
          })
        })]
      })
    });
  }

}

/* harmony default export */ var furniture_FurnitureShopByRoom = (FurnitureShopByRoom);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureBestSaleBrands.jsx





const FurnitureBestSaleBrands = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
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
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-1.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-2.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-3.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-4.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-5.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-6.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-7.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-8.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-9.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/static/img/brand/2-10.jpg",
                alt: "martfury"
              }), ' ']
            })
          }), ' ']
        })]
      })
    })]
  })
});

/* harmony default export */ var furniture_FurnitureBestSaleBrands = (FurnitureBestSaleBrands);
;// CONCATENATED MODULE: ./components/partials/homepage/furniture/FurnitureBestSeller.jsx



function FurnitureBestSeller_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FurnitureBestSeller_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FurnitureBestSeller_ownKeys(Object(source), true).forEach(function (key) { FurnitureBestSeller_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FurnitureBestSeller_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FurnitureBestSeller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FurnitureBestSeller = ({
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
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), FurnitureBestSeller_objectSpread(FurnitureBestSeller_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-home-trending-products ps-section--furniture",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__header",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "BEST SELLER PRODUCTS"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-section__content",
        children: productItemsView
      })]
    })
  });
};

/* harmony default export */ var furniture_FurnitureBestSeller = (FurnitureBestSeller);
;// CONCATENATED MODULE: ./pages/home/furniture.jsx















const HomeFurniturePage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_ContainerHomeFurniture, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(FurnitureSiteFeatures, {}), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurniturePromotions, {}), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureBestSeller, {
      collectionSlug: "furniture-best-sellers"
    }), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurniturePromotions2, {}), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureTrendingProducts, {
      collectionSlug: "furniture-trending-products"
    }), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureShopByRoom, {}), /*#__PURE__*/jsx_runtime_.jsx(furniture_FurnitureBestSaleBrands, {})]
  });
};

/* harmony default export */ var furniture = ((0,external_react_redux_.connect)()(HomeFurniturePage));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,8483,5671,8006,1117,8661,8283,1380,5963,7143,4348], function() { return __webpack_exec__(5304); });
module.exports = __webpack_exports__;

})();