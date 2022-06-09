exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ product_ProductGroupDealHot; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./utilities/strapi-fetch-data-helpers.jsx
var strapi_fetch_data_helpers = __webpack_require__(5963);
// EXTERNAL MODULE: ./utilities/carousel-helpers.js
var carousel_helpers = __webpack_require__(8283);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utilities/product-helper.js
var product_helper = __webpack_require__(4063);
// EXTERNAL MODULE: ./components/elements/Rating.jsx
var Rating = __webpack_require__(1974);
// EXTERNAL MODULE: ./components/elements/CountDown.jsx
var CountDown = __webpack_require__(472);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(6302);
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(7836);
// EXTERNAL MODULE: ./components/elements/carousel/NextArrow.jsx
var NextArrow = __webpack_require__(184);
// EXTERNAL MODULE: ./components/elements/carousel/PrevArrow.jsx
var PrevArrow = __webpack_require__(7974);
;// CONCATENATED MODULE: ./components/elements/detail/thumbnail/ThumbnailWithBadge.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ThumbnailWithBadge = ({
  product,
  vertical = true
}) => {
  const galleryCarousel = (0,external_react_.useRef)(null);
  const variantCarousel = (0,external_react_.useRef)(null);
  const {
    0: gallery,
    1: setGallery
  } = (0,external_react_.useState)(null);
  const {
    0: variant,
    1: setVariant
  } = (0,external_react_.useState)(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,external_react_.useState)(0);
  const {
    0: productImages,
    1: setProductImages
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    let images = [];

    if (product && product.images.length > 0) {
      product.images.map(item => {
        images.push(`${Repository/* baseUrl */.FH}${item.url}`);
      });
      setProductImages(images);
    }

    setGallery(galleryCarousel.current);
    setVariant(variantCarousel.current);
  }, [product]);
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
  }; //Views

  let lightboxView, variantCarouselView, imagesView, galleryImagesView;

  if (productImages.length > 0) {
    imagesView = productImages.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "item",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: item,
        alt: item
      })
    }, item));
    galleryImagesView = productImages.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "item",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: item,
          alt: item
        })
      })
    }, item));
  }

  if (vertical) {
    variantCarouselView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 3,
      vertical: true,
      infinite: true,
      focusOnSelect: true
    }, variantSetting), {}, {
      className: "ps-product__variants",
      children: imagesView
    }));
  } else {
    variantCarouselView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), {
      asNavFor: gallery,
      ref: slider => variantCarousel.current = slider,
      swipeToSlide: true,
      arrows: false,
      slidesToShow: 6,
      vertical: false,
      centered: true,
      infinite: false,
      focusOnSelect: true,
      className: "ps-product__variants",
      children: imagesView
    });
  }

  if (isOpen) {
    lightboxView = /*#__PURE__*/jsx_runtime_.jsx((external_react_image_lightbox_default()), {
      mainSrc: productImages[photoIndex],
      nextSrc: productImages[(photoIndex + 1) % productImages.length],
      prevSrc: productImages[(photoIndex + productImages.length - 1) % productImages.length],
      onCloseRequest: () => {
        setIsOpen(false);
      },
      onMovePrevRequest: () => {
        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length);
      },
      onMoveNextRequest: () => {
        setPhotoIndex((photoIndex + 1) % productImages.length);
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ps-product__thumbnail",
    "data-vertical": vertical ? 'true' : 'false',
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, gallerySetting), {}, {
          ref: slider => galleryCarousel.current = slider,
          asNavFor: variant,
          className: "ps-product__gallery ps-carousel inside",
          children: galleryImagesView
        })), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-product__badge",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["Save ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " $280.00"]
          })
        })]
      })
    }), variantCarouselView]
  });
};

/* harmony default export */ var thumbnail_ThumbnailWithBadge = (ThumbnailWithBadge);
;// CONCATENATED MODULE: ./components/elements/products/ProductDealHot.jsx










const ProductDealHot = ({
  product
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-product--detail ps-product--hot-deal",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-product__header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(thumbnail_ThumbnailWithBadge, {
        product: product
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ps-product__info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: "Investor"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "ps-product__name",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/product/[pid]",
            as: `/product/${product.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: product.title
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__meta",
          children: [product.is_sale === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "ps-product__price sale",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
              className: "mr-2",
              children: ["$", (0,product_helper/* formatCurrency */.xG)(product.sale_price)]
            }), "$", (0,product_helper/* formatCurrency */.xG)(product.price)]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            className: "ps-product__price",
            children: ["$", (0,product_helper/* formatCurrency */.xG)(product.price)]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-product__rating",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "(1 review)"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ps-product__specification",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Status:", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                className: "in-stock",
                children: "In Stock"
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__expires",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Expires In"
          }), /*#__PURE__*/jsx_runtime_.jsx(CountDown/* default */.Z, {
            timeTillDate: "12 31 2021, 6:00 am",
            timeFormat: "MM DD YYYY, h:mm a"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ps-product__processs-bar",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Progress, {
            percent: 60,
            showInfo: false
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "4/79"
            }), " Sold"]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var products_ProductDealHot = (ProductDealHot);
// EXTERNAL MODULE: ./components/elements/products/ProductHorizontal.jsx
var ProductHorizontal = __webpack_require__(1050);
;// CONCATENATED MODULE: ./components/partials/product/ProductGroupDealHot.jsx



function ProductGroupDealHot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductGroupDealHot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductGroupDealHot_ownKeys(Object(source), true).forEach(function (key) { ProductGroupDealHot_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductGroupDealHot_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductGroupDealHot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductGroupDealHot = ({
  collectionSlug
}) => {
  const sliderRef = (0,external_react_.useRef)(null);
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

  const handleCarouselPrev = e => {
    e.preventDefault();
    sliderRef.current.slickPrev();
  };

  const handleCarouselNext = e => {
    e.preventDefault();
    sliderRef.current.slickNext();
  };

  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []);
  let productItemsView, relatedView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(products_ProductDealHot, {
        product: item
      }, item.id));
      const relatedItems = productItems.map((item, index) => {
        if (index > 1 && index < 6) {
          return /*#__PURE__*/jsx_runtime_.jsx(ProductHorizontal/* default */.Z, {
            product: item
          }, item.id);
        }
      });
      productItemsView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), ProductGroupDealHot_objectSpread(ProductGroupDealHot_objectSpread({
        ref: slider => sliderRef.current = slider
      }, carousel_helpers/* carouselSingle */.Wm), {}, {
        fade: true,
        className: "ps-carousel",
        children: slideItems
      }));
      relatedView = /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), ProductGroupDealHot_objectSpread(ProductGroupDealHot_objectSpread({}, carousel_helpers/* carouselSingle */.Wm), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ps-product-group",
          children: relatedItems
        }, "group-1")
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ps-deal-hot",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ps-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "ps-block--deal-hot",
            "data-mh": "dealhot",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ps-block__header",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "New Deals Daily "
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-block__navigation",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-carousel__prev",
                  href: "#",
                  onClick: e => handleCarouselPrev(e),
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-chevron-left"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ps-carousel__next",
                  href: ".ps-carousel--deal-hot",
                  onClick: e => handleCarouselNext(e),
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-chevron-right"
                  })
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-product__content",
              children: productItemsView
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
            className: "widget widget_best-sale",
            "data-mh": "dealhot",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "widget-title",
              children: "Top Best Seller"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "widget__content",
              children: relatedView
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var product_ProductGroupDealHot = (ProductGroupDealHot);

/***/ })

};
;