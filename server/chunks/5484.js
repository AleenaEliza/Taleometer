exports.id = 5484;
exports.ids = [5484];
exports.modules = {

/***/ 8930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);


class ProductRepository {
  async getRecords(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(params)}`).then(response => {
      return {
        items: response.data,
        totalItems: response.data.length
      };
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/product-categories?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrand(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/brands?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new ProductRepository());

/***/ }),

/***/ 7836:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Y": function() { return /* binding */ basePostUrl; },
/* harmony export */   "r": function() { return /* binding */ baseStoreURL; },
/* harmony export */   "FH": function() { return /* binding */ baseUrl; },
/* harmony export */   "Y$": function() { return /* binding */ serializeQuery; }
/* harmony export */ });
/* unused harmony export customHeaders */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'https://beta.apinouthemes.com'; // API for products

const basePostUrl = 'https://beta.apinouthemes.com'; // API for post

const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["ZP"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ 7042:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "x4": function() { return /* binding */ login; },
/* harmony export */   "he": function() { return /* binding */ loginSuccess; },
/* harmony export */   "ni": function() { return /* binding */ logOut; },
/* harmony export */   "Gd": function() { return /* binding */ logOutSuccess; }
/* harmony export */ });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login() {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
}
function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ 7359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "dv": function() { return /* binding */ getCart; },
/* harmony export */   "hn": function() { return /* binding */ getCartSuccess; },
/* harmony export */   "hC": function() { return /* binding */ getCartError; },
/* harmony export */   "jX": function() { return /* binding */ addItem; },
/* harmony export */   "cl": function() { return /* binding */ removeItem; },
/* harmony export */   "zb": function() { return /* binding */ increaseItemQty; },
/* harmony export */   "WG": function() { return /* binding */ decreaseItemQty; },
/* harmony export */   "xM": function() { return /* binding */ updateCartSuccess; }
/* harmony export */ });
/* unused harmony export updateCartError */
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ 211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "sy": function() { return /* binding */ changeCurrency; },
/* harmony export */   "EJ": function() { return /* binding */ changeCurrencySuccess; }
/* harmony export */ });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ 4063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xG": function() { return /* binding */ formatCurrency; },
/* harmony export */   "QR": function() { return /* binding */ getItemBySlug; },
/* harmony export */   "sj": function() { return /* binding */ convertSlugsQueryString; },
/* harmony export */   "zm": function() { return /* binding */ StrapiProductBadge; },
/* harmony export */   "xB": function() { return /* binding */ StrapiProductPrice; },
/* harmony export */   "cg": function() { return /* binding */ StrapiProductPriceExpanded; },
/* harmony export */   "$J": function() { return /* binding */ StrapiProductThumbnail; }
/* harmony export */ });
/* unused harmony export getColletionBySlug */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7836);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);



/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */




function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}
function StrapiProductBadge(product) {
  let view;

  if (product.badge && product.badge !== null) {
    view = product.badge.map(badge => {
      if (badge.type === 'sale') {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-product__badge",
          children: badge.value
        });
      } else if (badge.type === 'outStock') {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-product__badge out-stock",
          children: badge.value
        });
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "ps-product__badge hot",
          children: badge.value
        });
      }
    });
  }

  return view;
}
function StrapiProductPrice(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      })]
    });
  } else {
    view = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductPriceExpanded(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
        children: "18% off"
      })]
    });
  } else {
    view = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductThumbnail(product) {
  let view;

  if (product.thumbnail) {
    view = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_2___default()), {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__/* .baseUrl */ .FH}${product.thumbnail.url}`,
            alt: product.title
          })
        })
      })
    });
  } else {
    view = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_2___default()), {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          })
        })
      })
    });
  }

  return view;
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;