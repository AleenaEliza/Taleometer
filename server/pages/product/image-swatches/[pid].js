(function() {
var exports = {};
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 7399:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _pid_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/layouts/ContainerProductDetail.jsx + 1 modules
var ContainerProductDetail = __webpack_require__(9470);
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/elements/skeletons/SkeletonProductDetail.jsx
var SkeletonProductDetail = __webpack_require__(6239);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/product/ProductWidgets.jsx + 3 modules
var ProductWidgets = __webpack_require__(3543);
// EXTERNAL MODULE: ./components/elements/detail/ProductDetailFullwidth.jsx
var ProductDetailFullwidth = __webpack_require__(4939);
// EXTERNAL MODULE: ./components/partials/product/CustomerBought.jsx
var CustomerBought = __webpack_require__(8405);
// EXTERNAL MODULE: ./components/partials/product/RelatedProduct.jsx
var RelatedProduct = __webpack_require__(5331);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
// EXTERNAL MODULE: ./components/elements/detail/thumbnail/ThumbnailDefault.jsx
var ThumbnailDefault = __webpack_require__(6305);
// EXTERNAL MODULE: ./components/elements/detail/description/DefaultDescription.jsx
var DefaultDescription = __webpack_require__(8645);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleProductDetailSharing.js
var ModuleProductDetailSharing = __webpack_require__(3665);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleProductDetailSpecification.js
var ModuleProductDetailSpecification = __webpack_require__(1123);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleProductDetailDescription.js
var ModuleProductDetailDescription = __webpack_require__(1544);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(6302);
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(184);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7974);
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(7836);
;// CONCATENATED MODULE: ./components/elements/detail/thumbnail/ThumbnailHasVariant.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class ThumbnailHasVariant extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOpenLightbox", (e, imageIndex) => {
      e.preventDefault();
      this.setState({
        photoIndex: imageIndex,
        isOpen: true
      });
    });

    this.state = {
      galleryCarousel: null,
      variantCarousel: null,
      photoIndex: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    this.setState({
      galleryCarousel: this.slider1,
      variantCarousel: this.slider2
    });
  }

  render() {
    const gallerySetting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: /*#__PURE__*/jsx_runtime_.jsx(NextArrow/* default */.Z, {}),
      prevArrow: /*#__PURE__*/jsx_runtime_.jsx(PrevArrow/* default */.Z, {})
    };
    const variantSetting = {
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false
        }
      }]
    };
    const {
      product
    } = this.props;
    const {
      photoIndex,
      isOpen
    } = this.state;
    const productImages = [];
    product.images.map(variant => {
      productImages.push(`${Repository/* baseUrl */.FH}${variant.url}`);
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__thumbnail",
      "data-vertical": "true",
      children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, gallerySetting), {}, {
            ref: slider => this.slider1 = slider,
            asNavFor: this.state.variantCarousel,
            className: "ps-product__gallery ps-carousel inside",
            children: product.images.map((variant, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                onClick: e => this.handleOpenLightbox(e, index),
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: `${Repository/* baseUrl */.FH}${variant.url}`,
                  alt: "martfury-image"
                })
              })
            }, variant.id))
          }))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        asNavFor: this.state.galleryCarousel,
        ref: slider => this.slider2 = slider,
        swipeToSlide: true,
        arrows: false,
        slidesToShow: 3,
        vertical: true,
        focusOnSelect: true
      }, variantSetting), {}, {
        className: "ps-product__variants",
        children: product.images.map(variant => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `${Repository/* baseUrl */.FH}${variant.url}`,
            alt: "martfury-image"
          })
        }, variant.id))
      })), isOpen && /*#__PURE__*/jsx_runtime_.jsx((external_react_image_lightbox_default()), {
        mainSrc: productImages[photoIndex],
        nextSrc: productImages[(photoIndex + 1) % productImages.length],
        prevSrc: productImages[(photoIndex + productImages.length - 1) % productImages.length],
        onCloseRequest: () => this.setState({
          isOpen: false
        }),
        onMovePrevRequest: () => this.setState({
          photoIndex: (photoIndex + productImages.length - 1) % productImages.length
        }),
        onMoveNextRequest: () => this.setState({
          photoIndex: (photoIndex + 1) % productImages.length
        })
      })]
    });
  }

}

/* harmony default export */ var thumbnail_ThumbnailHasVariant = (ThumbnailHasVariant);
// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__(7359);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__(5671);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__(8483);
;// CONCATENATED MODULE: ./components/elements/detail/modules/ModuleProductHasVariants.js



function ModuleProductHasVariants_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class ModuleProductHasVariants extends external_react_.Component {
  constructor(props) {
    super(props);

    ModuleProductHasVariants_defineProperty(this, "handleAddItemToCart", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      let tempProduct = product;
      tempProduct.quantity = this.state.quantity;
      this.props.dispatch((0,action/* addItem */.jX)(product));
    });

    ModuleProductHasVariants_defineProperty(this, "handleAddItemToCompare", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch((0,compare_action/* addItemToCompare */.sG)(product));
    });

    ModuleProductHasVariants_defineProperty(this, "handleAddItemToWishlist", e => {
      e.preventDefault();
      const {
        product
      } = this.props;
      this.props.dispatch((0,wishlist_action/* addItemToWishlist */.yK)(product));
    });

    ModuleProductHasVariants_defineProperty(this, "handleIncreaseItemQty", e => {
      e.preventDefault();
      this.setState({
        quantity: this.state.quantity + 1
      });
    });

    ModuleProductHasVariants_defineProperty(this, "handleDecreaseItemQty", e => {
      e.preventDefault();

      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      }
    });

    this.state = {
      quantity: 1,
      selectedVariant: null,
      selectedSize: null,
      sizeItems: null,
      price: null
    };
  }

  handleSelectColor(colorId) {
    const {
      product
    } = this.props;

    if (product && product.variants.length > 0) {
      const selectedVariant = product.variants.find(item => item.id === colorId);

      if (selectedVariant) {
        const sizeItems = selectedVariant.sizes;
        this.setState({
          sizeItems: sizeItems
        });
      }

      this.setState({
        selectedVariant: selectedVariant
      });
    }
  }

  handleSelectSize(sizeId) {
    const {
      sizeItems
    } = this.state;

    if (sizeItems && sizeItems) {
      const selectedSizeItem = sizeItems.find(item => item.id === sizeId);

      if (selectedSizeItem) {
        this.setState({
          selectedSize: selectedSizeItem
        });
      }
    }
  }

  componentDidMount() {
    const {
      product
    } = this.props;

    if (product && product.variants.length > 0) {
      this.setState({
        selectedVariant: product.variants[0]
      });
    }
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    const {
      selectedVariant,
      selectedSize,
      sizeItems
    } = this.state;
    let variants, sizeSelectionArea, priceArea, thumbnailArea;

    if (selectedVariant !== null) {
      if (selectedVariant.is_sale) {
        priceArea = /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
          className: "ps-product__price sale",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
            className: "mr-2",
            children: [currency ? currency.symbol : '$', selectedVariant.sale_price]
          }), currency ? currency.symbol : '$', selectedVariant.price]
        });
      } else {
        priceArea = /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
          className: "ps-selectedVariant__price",
          children: [currency ? currency.symbol : '$', selectedVariant.price]
        });
      }

      thumbnailArea = /*#__PURE__*/jsx_runtime_.jsx(thumbnail_ThumbnailHasVariant, {
        product: selectedVariant
      });
    }

    if (product) {
      if (product.variants.length > 0) {
        let colorSelectionArea = product.variants.map(item => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `ps-variant ps-variant--image ${selectedVariant && selectedVariant.id === item.id ? 'active' : ''}`,
            onClick: e => this.handleSelectColor(item.id),
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "ps-variant__tooltip",
              children: item.name
            }), item.thumbnail !== null ? /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `${Repository/* baseUrl */.FH}${item.thumbnail.url}`,
              alt: ""
            }) : '']
          }, item.id);
        });

        if (sizeItems !== null) {
          sizeSelectionArea = sizeItems.map(item => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id ? 'active' : ''}`,
              onClick: e => this.handleSelectSize(item.id),
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ps-variant__tooltip",
                children: item.name
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ps-variant__size",
                children: item.character
              })]
            }, item.id);
          });
        }

        variants = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__variations",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figcaption", {
              children: ["Color:", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: selectedVariant !== null ? selectedVariant.name : 'Choose an option'
              })]
            }), colorSelectionArea]
          }), selectedVariant !== null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figcaption", {
              children: ["Size:", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                className: "pl-1",
                children: selectedSize !== null ? selectedSize.name : 'Choose an option'
              })]
            }), sizeSelectionArea]
          })]
        });
      } else {
        if (product.is_sale) {
          priceArea = /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "ps-product__price sale",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
              className: "mr-2",
              children: [currency ? currency.symbol : '$', product.sale_price]
            }), currency ? currency.symbol : '$', product.price]
          });
        } else {
          priceArea = /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "ps-product__price",
            children: [currency ? currency.symbol : '$', product.price]
          });
        }
      }
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__header",
      children: [thumbnailArea, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: product.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__meta",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["Brand:", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/shop",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ml-2 text-capitalize",
                children: product.vendor
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__rating",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "(1 review)"
            })]
          })]
        }), priceArea, /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailDescription/* default */.Z, {
          product: product
        }), variants, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__shopping",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("figcaption", {
              children: "Quantity"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group--number",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "up",
                onClick: this.handleIncreaseItemQty.bind(this),
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fa fa-plus"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "down",
                onClick: this.handleDecreaseItemQty.bind(this),
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fa fa-minus"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "form-control",
                type: "text",
                placeholder: this.state.quantity,
                disabled: true
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn ps-btn--black",
            href: "#",
            onClick: this.handleAddItemToCart.bind(this),
            children: "Add to cart"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            onClick: this.handleAddItemToCart.bind(this),
            children: "Buy Now"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__actions",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              onClick: this.handleAddItemToWishlist.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-heart"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              onClick: this.handleAddItemToCompare.bind(this),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-chart-bars"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailSpecification/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailSharing/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__actions-mobile",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn ps-btn--black",
            href: "#",
            onClick: this.handleAddItemToCart.bind(this),
            children: "Add to cart"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "ps-btn",
            href: "#",
            onClick: this.handleAddItemToCart.bind(this),
            children: "Buy Now"
          })]
        })]
      })]
    });
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ var modules_ModuleProductHasVariants = ((0,external_react_redux_.connect)(mapStateToProps)(ModuleProductHasVariants));
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailShoppingActions.jsx
var ModuleDetailShoppingActions = __webpack_require__(9672);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailActionsMobile.jsx
var ModuleDetailActionsMobile = __webpack_require__(3582);
// EXTERNAL MODULE: ./components/elements/detail/modules/ModuleDetailTopInformation.jsx
var ModuleDetailTopInformation = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/elements/detail/ProductDetailVariants.jsx













const ProductDetailVariants = ({
  product
}) => {
  if (product !== null && typeof product !== 'Array') {
    if (product.variants.length > 0) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product--detail ps-product--fullwidth",
        children: [/*#__PURE__*/jsx_runtime_.jsx(modules_ModuleProductHasVariants, {
          product: product
        }), /*#__PURE__*/jsx_runtime_.jsx(DefaultDescription/* default */.Z, {})]
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product--detail ps-product--fullwidth",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__header",
          children: [/*#__PURE__*/jsx_runtime_.jsx(ThumbnailDefault/* default */.Z, {
            product: product
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__info",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ModuleDetailTopInformation/* default */.Z, {
              product: product
            }), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailDescription/* default */.Z, {
              product: product
            }), /*#__PURE__*/jsx_runtime_.jsx(ModuleDetailShoppingActions/* default */.Z, {
              product: product
            }), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailSpecification/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(ModuleProductDetailSharing/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(ModuleDetailActionsMobile/* default */.Z, {})]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(DefaultDescription/* default */.Z, {})]
      });
    }
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "No Data"
    });
  }
};

/* harmony default export */ var detail_ProductDetailVariants = (ProductDetailVariants);
;// CONCATENATED MODULE: ./pages/product/image-swatches/[pid].jsx
















const ProductDetailHasVariantsPage = () => {
  const router = (0,router_.useRouter)();
  const {
    pid
  } = router.query;
  const {
    0: product,
    1: setProduct
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  async function getProduct(pid) {
    setLoading(true);
    const responseData = await ProductRepository/* default.getProductsById */.Z.getProductsById(pid);

    if (responseData) {
      setProduct(responseData);
      setTimeout(function () {
        setLoading(false);
      }.bind(this), 250);
    }
  }

  (0,external_react_.useEffect)(() => {
    getProduct(pid);
  }, [pid]);
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shop',
    url: '/shop'
  }, {
    text: product ? product.title : 'Loading...'
  }]; // Views

  let productView;

  if (!loading) {
    if (product) {
      productView = /*#__PURE__*/jsx_runtime_.jsx(detail_ProductDetailVariants, {
        product: product
      });
    } else {}
  } else {
    productView = /*#__PURE__*/jsx_runtime_.jsx(SkeletonProductDetail/* default */.Z, {});
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerPage/* default */.Z, {
    title: product ? product.title : 'Loading...',
    children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
      breacrumb: breadCrumb,
      layout: "fullwidth"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-page--product",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-page__container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-page__left",
            children: productView
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-page__right",
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductWidgets/* default */.Z, {})
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(CustomerBought/* default */.Z, {
          layout: "fullwidth",
          collectionSlug: "deal-of-the-day"
        }), /*#__PURE__*/jsx_runtime_.jsx(RelatedProduct/* default */.Z, {
          collectionSlug: "shop-recommend-items"
        })]
      })
    })]
  });
};

/* harmony default export */ var _pid_ = (ProductDetailHasVariantsPage);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,8483,5671,8006,1117,8661,8283,1380,5963,9775,7037,7140], function() { return __webpack_exec__(7399); });
module.exports = __webpack_exports__;

})();