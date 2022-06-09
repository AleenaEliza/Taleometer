exports.id = 8999;
exports.ids = [8999];
exports.modules = {

/***/ 8999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4804);
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6367);
/* harmony import */ var _utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5963);
/* harmony import */ var _components_elements_products_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1117);
/* harmony import */ var _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8283);
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184);
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7974);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ProductGroupByCarousel = ({
  collectionSlug,
  title,
  layout = 'standard'
}) => {
  const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: productItems,
    1: setProductItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  async function getProducts() {
    setLoading(true);
    const responseData = await (0,_utilities_strapi_fetch_data_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getProductsByCollectionHelper */ .l)(collectionSlug);

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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts();
  }, []);
  const carouselFullwidth = {
    dots: false,
    infinite: productItems && productItems.length > 7 ? true : false,
    speed: 750,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}),
    prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {}),
    lazyload: true,
    responsive: [{
      breakpoint: 1750,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false
      }
    }]
  }; // Views

  let productItemsView;

  if (!loading) {
    if (productItems && productItems.length > 0) {
      const slideItems = productItems.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_products_Product__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        product: item
      }, item.id));

      if (layout !== 'standard') {
        productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
          ref: slider => sliderRef.current = slider
        }, carouselFullwidth), {}, {
          arrows: false,
          className: "ps-carousel outside",
          children: slideItems
        }));
      } else {
        productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
          ref: slider => sliderRef.current = slider
        }, _utilities_carousel_helpers__WEBPACK_IMPORTED_MODULE_6__/* .carouselStandard */ .aL), {}, {
          arrows: false,
          className: "ps-carousel outside",
          children: slideItems
        }));
      }
    } else {
      productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No product found."
      });
    }
  } else {
    const skeletons = (0,_utilities_common_helpers__WEBPACK_IMPORTED_MODULE_9__/* .generateTempArray */ .Z)(6).map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "col-xl-2 col-lg-3 col-sm-3 col-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_skeletons_SkeletonProduct__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
    }, item));
    productItemsView = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: skeletons
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ps-block--shop-features",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "ps-block__header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ps-block__navigation",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-carousel__prev",
          onClick: e => handleCarouselPrev(e),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "icon-chevron-left"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "ps-carousel__next",
          onClick: e => handleCarouselNext(e),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "icon-chevron-right"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ps-block__content",
      children: productItemsView
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductGroupByCarousel);

/***/ })

};
;