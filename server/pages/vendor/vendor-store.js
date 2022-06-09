(function() {
var exports = {};
exports.id = 1880;
exports.ids = [1880];
exports.modules = {

/***/ 1332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ vendor_store; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/shared/footers/FooterDefault.jsx
var FooterDefault = __webpack_require__(5392);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/commons/Newletters.jsx
var Newletters = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/shared/headers/HeaderDefault.jsx
var HeaderDefault = __webpack_require__(4731);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./public/static/data/product.json
var product = __webpack_require__(3778);
// EXTERNAL MODULE: ./components/elements/products/Product.jsx
var Product = __webpack_require__(1117);
// EXTERNAL MODULE: ./components/elements/products/ProductWide.jsx + 1 modules
var ProductWide = __webpack_require__(7492);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(6873);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./components/elements/detail/ProductDetailQuickView.jsx
var ProductDetailQuickView = __webpack_require__(4189);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__(5671);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__(8483);
;// CONCATENATED MODULE: ./components/elements/products/ProductOffline.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class ProductOffline_Product extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddItemToCart", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch((0,action/* addItem */.jX)(product));
    });

    _defineProperty(this, "handleAddItemToCompare", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch((0,compare_action/* addItemToCompare */.sG)(product));
    });

    _defineProperty(this, "handleAddItemToWishlist", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch((0,wishlist_action/* addItemToWishlist */.yK)(product));
    });

    _defineProperty(this, "handleShowQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: true
      });
    });

    _defineProperty(this, "handleHideQuickView", e => {
      e.preventDefault();
      this.setState({
        isQuickView: false
      });
    });

    this.state = {
      isQuickView: false
    };
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    let productBadge = null;

    if (product.badge && product.badge !== null) {
      product.badge.map(badge => {
        if (badge.type === 'sale') {
          return productBadge = /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-product__badge",
            children: badge.value
          });
        } else if (badge.type === 'outStock') {
          return productBadge = /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-product__badge out-stock",
            children: badge.value
          });
        } else {
          return productBadge = /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-product__badge hot",
            children: badge.value
          });
        }
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__thumbnail",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[pid]",
          as: `/product/${product.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_lazyload_default()), {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: product.thumbnail.url,
                alt: "martfury"
              })
            })
          })
        }), product.badge ? productBadge : '', /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "ps-product__actions",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Read More",
              onClick: this.handleAddItemToCart.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-bag2"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Quick View",
              onClick: this.handleShowQuickView.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-eye"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Add to wishlist",
              onClick: this.handleAddItemToWishlist.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-heart"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Compare",
              onClick: this.handleAddItemToCompare.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-chart-bars"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-product__vendor",
            children: "Young Shop"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/product/[pid]",
            as: `/product/${product.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-product__title",
              children: product.title
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__rating",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: product.ratingCount
            })]
          }), product.is_sale === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "ps-product__price sale",
            children: [currency ? currency.symbol : '$', (0,product_helper/* formatCurrency */.xG)(product.price), /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
              className: "ml-2",
              children: [currency ? currency.symbol : '$', (0,product_helper/* formatCurrency */.xG)(product.sale_price)]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "ps-product__price",
            children: [currency ? currency.symbol : '$', (0,product_helper/* formatCurrency */.xG)(product.price)]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__content hover",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/product/[pid]",
            as: `/product/${product.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ps-product__title",
              children: product.title
            })
          }), product.is_sale === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "ps-product__price sale",
            children: [currency ? currency.symbol : '$', (0,product_helper/* formatCurrency */.xG)(product.price), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
              className: "ml-2",
              children: [currency ? currency.symbol : '$', product.sale_price]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "ps-product__price",
            children: [currency ? currency.symbol : '$', (0,product_helper/* formatCurrency */.xG)(product.price)]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
        title: product.title,
        centered: true,
        footer: null,
        width: 1024,
        onCancel: this.handleHideQuickView,
        visible: this.state.isQuickView,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductDetailQuickView/* default */.Z, {
          product: product
        })
      })]
    });
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var ProductOffline = ((0,external_react_redux_.connect)(mapStateToProps)(ProductOffline_Product));
;// CONCATENATED MODULE: ./components/partials/vendor/modules/VendorProducts.jsx



function VendorProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class VendorProducts extends external_react_.Component {
  constructor(...args) {
    super(...args);

    VendorProducts_defineProperty(this, "state", {
      listView: true
    });

    VendorProducts_defineProperty(this, "handleChangeViewMode", event => {
      event.preventDefault();
      this.setState({
        listView: !this.state.listView
      });
    });
  }

  render() {
    const viewMode = this.state.listView;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-shopping vendor-shop",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-shopping__header",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
            children: [' ', product/* relatedProduct */.wZ ? product/* relatedProduct.length */.wZ.length : 0]
          }), ' ', "Products found"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-shopping__actions",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
            className: "ps-select",
            "data-placeholder": "Sort Items",
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Sort by latest"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Sort by popularity"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Sort by average rating"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Sort by price: low to high"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              children: "Sort by price: high to low"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-shopping__view",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "View"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "ps-tab-list",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: viewMode === true ? 'active' : '',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: this.handleChangeViewMode,
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-grid"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: viewMode !== true ? 'active' : '',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: this.handleChangeViewMode,
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-list4"
                  })
                })
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ps-shopping__content",
        children: viewMode === true ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-shopping-product",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: product/* relatedProduct */.wZ && product/* relatedProduct.length */.wZ.length > 0 ? product/* relatedProduct.map */.wZ.map(product => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3 col-md-4 col-sm-6 col-6 ",
              children: /*#__PURE__*/jsx_runtime_.jsx(ProductOffline, {
                product: product
              })
            }, product.id)) : ''
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-shopping-product",
          children: product/* relatedProduct */.wZ && product/* relatedProduct.length */.wZ.length > 0 ? product/* relatedProduct.map */.wZ.map(product => /*#__PURE__*/jsx_runtime_.jsx(ProductWide/* default */.Z, {
            product: product
          }, product.id)) : ''
        })
      })]
    });
  }

}

/* harmony default export */ var modules_VendorProducts = (VendorProducts);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(184);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7974);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
;// CONCATENATED MODULE: ./components/partials/vendor/VendorStore.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { VendorStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VendorStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class VendorStore extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-vendor-store",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-section__container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-section__left",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--vendor",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__thumbnail",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/static/img/vendor/vendor-store.jpg",
                  alt: "martfury"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__container",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-block__header",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: "Digitalworld us"
                  }), /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "85% Positive"
                    }), " (562 rating)"]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-block__divider"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "Digiworld US"
                    }), ", New York\u2019s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "ps-block__divider"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "Address"
                    }), " 325 Orchard Str, New York, NY 10002"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
                      children: "Foloow us on social"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "ps-list--social-color",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "facebook",
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-facebook"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "twitter",
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-twitter"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "linkedin",
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-linkedin"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "feed",
                          href: "#",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-feed"
                          })
                        })
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-block__footer",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Call us directly", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: "(+053) 77-637-3300"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "or Or if you have any question"
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "ps-btn ps-btn--fullwidth",
                    href: "",
                    children: "Contact Seller"
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-section__right",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block--vendor-filter",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__left",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "active",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Products"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "Reviews"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: "About"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-block__right",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  className: "ps-form--search",
                  action: "/",
                  method: "get",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: "Search in this shop"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-search"
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-vendor-best-seller",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-section__header",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Best Seller items"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "ps-section__nav",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "ps-carousel__prev",
                    href: "#vendor-bestseller",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "icon-chevron-left"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "ps-carousel__next",
                    href: "#vendor-bestseller",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "icon-chevron-right"
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ps-section__content",
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, carousel_helpers/* carouselStandard */.aL), {}, {
                  className: "ps-carousel",
                  children: product/* relatedProduct */.wZ && product/* relatedProduct.map */.wZ.map(product => /*#__PURE__*/jsx_runtime_.jsx(ProductOffline, {
                    product: product
                  }, product.id))
                }))
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(modules_VendorProducts, {})]
          })]
        })
      })
    });
  }

}

/* harmony default export */ var vendor_VendorStore = (VendorStore);
// EXTERNAL MODULE: ./components/shared/headers/HeaderMobile.jsx
var HeaderMobile = __webpack_require__(8260);
// EXTERNAL MODULE: ./components/shared/navigation/NavigationList.jsx + 5 modules
var NavigationList = __webpack_require__(7095);
;// CONCATENATED MODULE: ./pages/vendor/vendor-store.jsx











const VendorStorePage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Vendor store'
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "site-content",
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderDefault/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationList/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--single ps-page--vendor",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(vendor_VendorStore, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(Newletters/* default */.Z, {
      layout: "container"
    }), /*#__PURE__*/jsx_runtime_.jsx(FooterDefault/* default */.Z, {})]
  });
};

/* harmony default export */ var vendor_store = (VendorStorePage);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,8483,5671,8006,1117,8283,7492,3778], function() { return __webpack_exec__(1332); });
module.exports = __webpack_exports__;

})();