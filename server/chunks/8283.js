exports.id = 8283;
exports.ids = [8283];
exports.modules = {

/***/ 8283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aL": function() { return /* binding */ carouselStandard; },
/* harmony export */   "Kp": function() { return /* binding */ carouselFullwidth; },
/* harmony export */   "Wm": function() { return /* binding */ carouselSingle; }
/* harmony export */ });
/* unused harmony export carouselInSidebar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(184);
/* harmony import */ var _components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7974);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const carouselStandard = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 750,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselInSidebar = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const carouselFullwidth = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}),
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
};
const carouselSingle = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_NextArrow__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}),
  prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_carousel_PrevArrow__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
};

/***/ })

};
;