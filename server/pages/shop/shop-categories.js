(function() {
var exports = {};
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 1540:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shop_categories; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/ContainerShop.jsx
var ContainerShop = __webpack_require__(3646);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./public/static/data/shopCategories.json
var shopCategories = __webpack_require__(3197);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/partials/shop/CatalogTop.jsx






const CatalogTop = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "ps-catalog-top",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "row",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-block--menu-categories",
        "data-mh": "catalog-top",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__header",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Categories"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__content",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "ps-list--menu-cateogories",
            children: shopCategories/* shop_categories_catalog */.nF && shopCategories/* shop_categories_catalog.map */.nF.map(catalog => {
              if (catalog.extraClass) {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: catalog.extraClass,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: catalog.text
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    className: catalog.subClass,
                    children: catalog.subMenu.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: item.text,
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/shop",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          children: item.text
                        })
                      })
                    }, item.text))
                  })]
                }, catalog.text);
              } else {
                return /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: catalog.text
                    })
                  })
                });
              }
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-block--categories-grid",
        "data-mh": "catalog-top",
        children: shopCategories/* categories */.bd && shopCategories/* categories.map */.bd.map((category, index) => {
          if (index < 6) {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--category-2",
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
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: category.links && category.links.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/shop",
                      as: `/shop`,
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: link
                      })
                    })
                  }, link))
                })]
              })]
            }, category.id);
          }
        })
      })
    })]
  })
});

/* harmony default export */ var shop_CatalogTop = (CatalogTop);
;// CONCATENATED MODULE: ./components/partials/shop/categories-box/ConsummerElectronics.jsx





const ConsummerElectronics = ({
  data
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
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
            children: "Best Sellers"
          })
        })
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-block__content",
    children: data && data.map(category => {
      if (category.type === 'large') {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__banner",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          })
        }, category.text);
      } else {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-block__overlay"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [category.text, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [category.item, " Items"]
          })]
        }, category.text);
      }
    })
  })]
});

/* harmony default export */ var categories_box_ConsummerElectronics = (ConsummerElectronics);
;// CONCATENATED MODULE: ./components/partials/shop/MoreCategories.jsx





const MoreCategories = ({
  data
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "ps-product-list ps-product-list--2 ps-more-categories",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-section__header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Best Seller Items"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "ps-section__links",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "shop-grid.html",
            children: "Clothing & Apparel"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "shop-grid.html",
          children: "Garden & Kitchen"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "shop-grid.html",
          children: "Consumer Electrics"
        })
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-section__content",
    children: data.map(category => {
      if (category.id < 6) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block--category-vertical",
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
              children: category.links.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/shop",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: item
                  })
                })
              }, item))
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: "Shop All"
            })]
          })]
        }, category.id);
      }
    })
  })]
});

/* harmony default export */ var shop_MoreCategories = (MoreCategories);
;// CONCATENATED MODULE: ./components/partials/shop/categories-box/GardenAndKitchen.jsx





const GardenAndKitchen = ({
  data
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "ps-block--categories-box",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-block__header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Home, Garden and Kitchen"
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
            children: "Best Sellers"
          })
        })
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-block__content",
    children: data && data.map(category => {
      if (category.type === 'large') {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__banner",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          })
        }, category.text);
      } else {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-block__overlay"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [category.text, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [category.item, " Items"]
          })]
        }, category.text);
      }
    })
  })]
});

/* harmony default export */ var categories_box_GardenAndKitchen = (GardenAndKitchen);
;// CONCATENATED MODULE: ./components/partials/shop/categories-box/ClothingAndApparel.jsx





const ClothingAndApparel = ({
  data
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
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
            children: "Best Sellers"
          })
        })
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-block__content",
    children: data && data.map(category => {
      if (category.type === 'large') {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-block__banner",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          })
        }, category.text);
      } else {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-block__item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/shop",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-block__overlay"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: category.imagePath,
            alt: "martfury"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [category.text, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [category.item, " Items"]
          })]
        }, category.text);
      }
    })
  })]
});

/* harmony default export */ var categories_box_ClothingAndApparel = (ClothingAndApparel);
;// CONCATENATED MODULE: ./pages/shop/shop-categories.jsx












const ShopCategoriesPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop Default'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerShop/* default */.Z, {
    title: "Shop Categories",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--shop",
      id: "shop-categories",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(shop_CatalogTop, {}), /*#__PURE__*/jsx_runtime_.jsx(categories_box_ConsummerElectronics, {
          data: shopCategories/* electronicCollection */.v0
        }), /*#__PURE__*/jsx_runtime_.jsx(categories_box_ClothingAndApparel, {
          data: shopCategories/* clothingCollection */.Gk
        }), /*#__PURE__*/jsx_runtime_.jsx(categories_box_GardenAndKitchen, {
          data: shopCategories/* kitchenCollection */.gH
        }), /*#__PURE__*/jsx_runtime_.jsx(shop_MoreCategories, {
          data: shopCategories/* categories */.bd
        })]
      })]
    })
  });
};

/* harmony default export */ var shop_categories = (ShopCategoriesPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,3646,3197], function() { return __webpack_exec__(1540); });
module.exports = __webpack_exports__;

})();