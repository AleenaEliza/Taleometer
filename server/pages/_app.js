(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-saga"
var external_next_redux_saga_namespaceObject = require("next-redux-saga");;
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
var external_redux_persist_namespaceObject = require("redux-persist");;
;// CONCATENATED MODULE: external "redux-persist/integration/react"
var react_namespaceObject = require("redux-persist/integration/react");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-saga"
var external_redux_saga_namespaceObject = require("redux-saga");;
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
var storage_namespaceObject = require("redux-persist/lib/storage");;
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./store/post/action.js
const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  GET_FEATURED_POST: 'GET_FEATURED_POST',
  GET_FEATURED_POST_SUCCESS: 'GET_FEATURED_POST_SUCCESS',
  GET_FEATURED_POST_ERROR: 'GET_FEATURED_POST_ERROR',
  GET_RECENT_POSTS: 'GET_RECENT_POSTS',
  GET_RECENT_POSTS_SUCCESS: 'GET_RECENT_POSTS_SUCCESS',
  GET_RECENT_POSTS_ERROR: 'GET_RECENT_POSTS_ERROR',
  GET_POST_CATEGORIES: 'GET_POST_CATEGORIES',
  GET_POST_CATEGORIES_SUCCESS: 'GET_POST_CATEGORIES_SUCCESS',
  GET_POST_CATEGORIES_ERROR: 'GET_POST_CATEGORIES_ERROR'
};
function getPosts() {
  return {
    type: actionTypes.GET_POSTS
  };
}
function getPostsSuccess(data) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    data
  };
}
function getPostsError(error) {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    error
  };
}
function getFeaturedPost() {
  return {
    type: actionTypes.GET_FEATURED_POST
  };
}
function getFeaturedPostSuccess(data) {
  return {
    type: actionTypes.GET_FEATURED_POST_SUCCESS,
    data
  };
}
function getFeaturedPostError(error) {
  return {
    type: actionTypes.GET_FEATURED_POST_ERROR,
    error
  };
}
function getRecentPosts() {
  return {
    type: actionTypes.GET_RECENT_POSTS
  };
}
function getRecentPostsSuccess(data) {
  return {
    type: actionTypes.GET_RECENT_POSTS_SUCCESS,
    data
  };
}
function getRecentPostsError(error) {
  return {
    type: actionTypes.GET_RECENT_POSTS_ERROR,
    error
  };
}
function getPostCategories() {
  return {
    type: actionTypes.GET_POST_CATEGORIES
  };
}
function getPostCategoriesSuccess(data) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_SUCCESS,
    data
  };
}
function getPostCategoriesError(error) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_ERROR,
    error
  };
}
;// CONCATENATED MODULE: ./store/post/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  featuredPost: null,
  recentPost: [],
  categories: [],
  error: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        posts: action.data
      });

    case actionTypes.GET_FEATURED_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        featuredPost: action.data
      });

    case actionTypes.GET_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        recentPost: action.data
      });

    case actionTypes.GET_POST_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.data
      });

    case actionTypes.GET_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_FEATURED_POST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_RECENT_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_POST_CATEGORIES_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var post_reducer = (reducer);
// EXTERNAL MODULE: ./store/product/action.js
var product_action = __webpack_require__(4247);
;// CONCATENATED MODULE: ./store/product/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  allProducts: null,
  singleProduct: null,
  error: false,
  totalProducts: 0,
  categories: null,
  brands: [],
  productsLoading: true,
  productLoading: true,
  searchResults: null
};

function reducer_reducer(state = reducer_initialState, action) {
  switch (action.type) {
    case product_action/* actionTypes.GET_PRODUCTS_SUCCESS */.Hp.GET_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        allProducts: action.data,
        productsLoading: false
      });

    case product_action/* actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS */.Hp.GET_TOTAL_OF_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        totalProducts: action.payload
      });

    case product_action/* actionTypes.GET_BRANDS_SUCCESS */.Hp.GET_BRANDS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        brands: action.payload
      });

    case product_action/* actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS */.Hp.GET_PRODUCT_CATEGORIES_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        categories: action.payload
      });

    case product_action/* actionTypes.GET_PRODUCT_BY_ID_SUCCESS */.Hp.GET_PRODUCT_BY_ID_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        singleProduct: action.data,
        productLoading: false
      });

    case product_action/* actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS */.Hp.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        searchResults: action.payload
      });

    case product_action/* actionTypes.GET_PRODUCTS_ERROR */.Hp.GET_PRODUCTS_ERROR:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var product_reducer = (reducer_reducer);
// EXTERNAL MODULE: ./store/setting/action.js
var setting_action = __webpack_require__(211);
;// CONCATENATED MODULE: ./store/setting/reducer.js
function setting_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function setting_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { setting_reducer_ownKeys(Object(source), true).forEach(function (key) { setting_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { setting_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function setting_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const setting_reducer_initialState = {
  currency: {
    symbol: '$',
    text: 'USD'
  }
};

function setting_reducer_reducer(state = setting_reducer_initialState, action) {
  switch (action.type) {
    case setting_action/* actionTypes.CHANGE_CURRENCY_SUCCESS */.Hp.CHANGE_CURRENCY_SUCCESS:
      return setting_reducer_objectSpread(setting_reducer_objectSpread({}, state), {
        currency: action.currency
      });

    default:
      return state;
  }
}

/* harmony default export */ var setting_reducer = (setting_reducer_reducer);
// EXTERNAL MODULE: ./store/cart/action.js
var cart_action = __webpack_require__(7359);
;// CONCATENATED MODULE: ./store/cart/reducer.js
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  cartItems: [],
  amount: 0,
  cartTotal: 0
};

function cart_reducer_reducer(state = initCart, action) {
  switch (action.type) {
    case cart_action/* actionTypes.GET_CART_SUCCESS */.Hp.GET_CART_SUCCESS:
      return cart_reducer_objectSpread({}, state);

    case cart_action/* actionTypes.UPDATE_CART_SUCCESS */.Hp.UPDATE_CART_SUCCESS:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action/* actionTypes.CLEAR_CART_SUCCESS */.Hp.CLEAR_CART_SUCCESS:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action/* actionTypes.GET_CART_ERROR */.Hp.GET_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    case cart_action/* actionTypes.UPDATE_CART_ERROR */.Hp.UPDATE_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var cart_reducer = (cart_reducer_reducer);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__(5671);
;// CONCATENATED MODULE: ./store/compare/reducer.js
function compare_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function compare_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compare_reducer_ownKeys(Object(source), true).forEach(function (key) { compare_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compare_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compare_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initCart = {
  compareItems: [],
  compareTotal: 0
};

function compare_reducer_reducer(state = reducer_initCart, action) {
  switch (action.type) {
    case compare_action/* actionTypes.GET_COMPARE_LIST_SUCCESS */.Hp.GET_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        cart: action.data
      });

    case compare_action/* actionTypes.UPDATE_COMPARE_LIST_SUCCESS */.Hp.UPDATE_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        compareItems: action.payload.compareItems,
        compareTotal: action.payload.compareTotal
      });

    case compare_action/* actionTypes.GET_COMPARE_LIST_ERROR */.Hp.GET_COMPARE_LIST_ERROR:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var compare_reducer = (compare_reducer_reducer);
// EXTERNAL MODULE: ./store/auth/action.js
var auth_action = __webpack_require__(7042);
;// CONCATENATED MODULE: ./store/auth/reducer.js
function auth_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_reducer_ownKeys(Object(source), true).forEach(function (key) { auth_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false
};

function auth_reducer_reducer(state = initState, action) {
  switch (action.type) {
    case auth_action/* actionTypes.LOGIN_SUCCESS */.Hp.LOGIN_SUCCESS:
      return auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: true
      });

    case auth_action/* actionTypes.LOGOUT_SUCCESS */.Hp.LOGOUT_SUCCESS:
      return auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ var auth_reducer = (auth_reducer_reducer);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__(8483);
;// CONCATENATED MODULE: ./store/wishlist/reducer.js
function wishlist_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wishlist_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlist_reducer_ownKeys(Object(source), true).forEach(function (key) { wishlist_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlist_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlist_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initState = {
  wishlistItems: [],
  wishlistTotal: 0
};

function wishlist_reducer_reducer(state = reducer_initState, action) {
  switch (action.type) {
    case wishlist_action/* actionTypes.GET_WISHLIST_LIST_SUCCESS */.Hp.GET_WISHLIST_LIST_SUCCESS:
      return wishlist_reducer_objectSpread({}, state);

    case wishlist_action/* actionTypes.UPDATE_WISHLISH_LIST_SUCCESS */.Hp.UPDATE_WISHLISH_LIST_SUCCESS:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        wishlistItems: action.payload.wishlistItems,
        wishlistTotal: action.payload.wishlistTotal
      });

    case wishlist_action/* actionTypes.GET_WISHLIST_LIST_ERROR */.Hp.GET_WISHLIST_LIST_ERROR:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var wishlist_reducer = (wishlist_reducer_reducer);
// EXTERNAL MODULE: ./store/collection/action.js
var collection_action = __webpack_require__(4459);
;// CONCATENATED MODULE: ./store/collection/reducer.js
function collection_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function collection_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { collection_reducer_ownKeys(Object(source), true).forEach(function (key) { collection_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { collection_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function collection_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const collection_reducer_initialState = {
  collections: [],
  categories: [],
  collection: {}
};

function collection_reducer_reducer(state = collection_reducer_initialState, action) {
  switch (action.type) {
    case collection_action/* actionTypes.GET_COLLECTIONS_SUCCESS */.Hp.GET_COLLECTIONS_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collections: action.payload
      });

    case collection_action/* actionTypes.GET_COLLECTION_SUCCESS */.Hp.GET_COLLECTION_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collection: action.payload
      });

    case collection_action/* actionTypes.GET_CATEGORIES_SUCCESS */.Hp.GET_CATEGORIES_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        categories: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var collection_reducer = (collection_reducer_reducer);
;// CONCATENATED MODULE: ./store/media/action.js
const action_actionTypes = {
  GET_BANNERS: 'GET_BANNERS',
  GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS'
};
function getBannersBySlugs(payload) {
  return {
    type: action_actionTypes.GET_BANNERS,
    payload
  };
}
function getBannersSuccess(payload) {
  return {
    type: action_actionTypes.GET_BANNERS_SUCCESS,
    payload
  };
}
function getPromotionsBySlugs(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS,
    payload
  };
}
function getPromotionsSuccess(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS_SUCCESS,
    payload
  };
}
;// CONCATENATED MODULE: ./store/media/reducer.js
function media_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_reducer_ownKeys(Object(source), true).forEach(function (key) { media_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const media_reducer_initialState = {
  banners: [],
  promotions: []
};

function media_reducer_reducer(state = media_reducer_initialState, action) {
  switch (action.type) {
    case action_actionTypes.GET_BANNERS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        banners: action.payload
      });

    case action_actionTypes.GET_PROMOTIONS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        promotions: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var media_reducer = (media_reducer_reducer);
;// CONCATENATED MODULE: ./store/app/action.js
const app_action_actionTypes = {
  SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
  SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS'
};
function switchDemoPanel(payload) {
  return {
    type: app_action_actionTypes.SWITCH_DEMO_PANEL,
    payload
  };
}
function switchDemoPanelSuccess(payload) {
  return {
    type: app_action_actionTypes.SWITCH_DEMO_PANEL_SUCCESS,
    payload
  };
}
;// CONCATENATED MODULE: ./store/app/reducer.js
function app_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function app_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { app_reducer_ownKeys(Object(source), true).forEach(function (key) { app_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { app_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function app_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const app_reducer_initState = {
  isShowDemoPanel: false
};

function app_reducer_reducer(state = app_reducer_initState, action) {
  switch (action.type) {
    case app_action_actionTypes.SWITCH_DEMO_PANEL_SUCCESS:
      return app_reducer_objectSpread(app_reducer_objectSpread({}, state), {
        isShowDemoPanel: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var app_reducer = (app_reducer_reducer);
;// CONCATENATED MODULE: ./store/rootReducer.js











/* harmony default export */ var rootReducer = ((0,external_redux_namespaceObject.combineReducers)({
  auth: auth_reducer,
  post: post_reducer,
  product: product_reducer,
  setting: setting_reducer,
  cart: cart_reducer,
  compare: compare_reducer,
  wishlist: wishlist_reducer,
  collection: collection_reducer,
  media: media_reducer,
  app: app_reducer
}));
;// CONCATENATED MODULE: external "redux-saga/effects"
var effects_namespaceObject = require("redux-saga/effects");;
;// CONCATENATED MODULE: external "es6-promise"
var external_es6_promise_namespaceObject = require("es6-promise");;
;// CONCATENATED MODULE: ./public/static/data/blog-grid.json
var blog_grid_namespaceObject = JSON.parse('{"sJ":[{"id":"1","text":"Business"},{"id":"2","text":"Entertaiment"},{"id":"3","text":"Fashion"},{"id":"4","text":"Life style"},{"id":"5","text":"Others"},{"id":"6","text":"Technology"},{"id":"7","text":"Others"}],"yM":{"id":"1","title":"Harman Kadon Onyx Studio Mini, Reviews & Experiences","thumbnail":"/static/img/blog/grid/large.jpg","type":"large","categories":["Technology"]},"xu":[{"id":"2","title":"Experience Great Sound With Beats’s Headphone","thumbnail":"/static/img/blog/grid/1.jpg","type":"normal","badge":"icon-volume-high","categories":[{"id":"2","text":"Entertaiment"},{"id":"6","text":"Technology"}]},{"id":"3","title":"Products Necessery For Mom","thumbnail":"/static/img/blog/grid/2.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"4","title":"Home Interior: Modern Style 2017","thumbnail":"/static/img/blog/grid/3.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"5","title":"DeerCo – A New Look About Startup In Product Manufacture Field7","thumbnail":"/static/img/blog/grid/4.jpg","type":"normal","badge":"icon-picture","categories":[{"id":"2","text":"Entertaiment"}]},{"id":"6","title":"B&O Play – Best Headphone For You","thumbnail":"/static/img/blog/grid/5.jpg","type":"normal","badge":"icon-camera-play","categories":[{"id":"6","text":"Technology"}]},{"id":"7","title":"Unique Products For Your Kitchen From IKEA Design","thumbnail":"/static/img/blog/grid/6.jpg","type":"normal","categories":[{"id":"1","text":"Business"},{"id":"6","text":"Technology"}]}],"NZ":[{"id":"3","title":"Products Necessery For Mom","thumbnail":"/static/img/blog/grid/2.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"4","title":"Home Interior: Modern Style 2017","thumbnail":"/static/img/blog/grid/3.jpg","type":"normal","categories":[{"id":"4","text":"Life style"}]},{"id":"5","title":"DeerCo – A New Look About Startup In Product Manufacture Field7","thumbnail":"/static/img/blog/grid/4.jpg","type":"normal","badge":"icon-picture","categories":[{"id":"2","text":"Entertaiment"}]},{"id":"6","title":"B&O Play – Best Headphone For You","thumbnail":"/static/img/blog/grid/5.jpg","type":"normal","badge":"icon-camera-play","categories":[{"id":"6","text":"Technology"}]}]}');
;// CONCATENATED MODULE: ./store/post/saga.js




(0,external_es6_promise_namespaceObject.polyfill)();

function* getPostsSaga() {
  try {
    const data = blog_grid_namespaceObject.xu;
    yield (0,effects_namespaceObject.put)(getPostsSuccess(data));
  } catch (err) {
    yield (0,effects_namespaceObject.put)(getPostsError(err));
  }
}

function* getFeaturedPostSaga() {
  try {
    const data = blog_grid_namespaceObject.yM;
    yield (0,effects_namespaceObject.put)(getFeaturedPostSuccess(data));
  } catch (err) {
    yield (0,effects_namespaceObject.put)(getFeaturedPostError(err));
  }
}

function* getRecentPostSaga() {
  try {
    const data = blog_grid_namespaceObject.NZ;
    yield (0,effects_namespaceObject.put)(getRecentPostsSuccess(data));
  } catch (err) {
    yield (0,effects_namespaceObject.put)(getRecentPostsError(err));
  }
}

function* saga_getPostCategories() {
  try {
    const data = blog_grid_namespaceObject.sJ;
    yield (0,effects_namespaceObject.put)(getPostCategoriesSuccess(data));
  } catch (err) {
    yield (0,effects_namespaceObject.put)(getPostCategoriesError(err));
  }
}

function* rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(actionTypes.GET_POSTS, getPostsSaga), (0,effects_namespaceObject.takeEvery)(actionTypes.GET_FEATURED_POST, getFeaturedPostSaga), (0,effects_namespaceObject.takeEvery)(actionTypes.GET_RECENT_POSTS, getRecentPostSaga), (0,effects_namespaceObject.takeEvery)(actionTypes.GET_POST_CATEGORIES, saga_getPostCategories)]);
}
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(8930);
;// CONCATENATED MODULE: ./store/product/saga.js




(0,external_es6_promise_namespaceObject.polyfill)();

function* getProducts({
  payload
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getRecords */.Z.getRecords, payload);
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsSuccess */.Oo)(data));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* getTotalOfProducts() {
  try {
    const result = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getTotalRecords */.Z.getTotalRecords);
    yield (0,effects_namespaceObject.put)((0,product_action/* getTotalProductsSuccess */.Em)(result));
  } catch (err) {
    console.log(err);
  }
}

function* getBrands() {
  try {
    const result = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getBrands */.Z.getBrands);
    yield (0,effects_namespaceObject.put)((0,product_action/* getBrandsSuccess */.Ud)(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductCategories() {
  try {
    const result = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getProductCategories */.Z.getProductCategories);
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductCategoriesSuccess */.Kt)(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductById({
  id
}) {
  try {
    const product = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getProductsById */.Z.getProductsById, id);
    yield (0,effects_namespaceObject.put)((0,product_action/* getSingleProductsSuccess */.LY)(product));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* getProductByCategory({
  category
}) {
  try {
    const result = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getProductsByCategory */.Z.getProductsByCategory, category);
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsSuccess */.Oo)(result));
    yield (0,effects_namespaceObject.put)((0,product_action/* getTotalProductsSuccess */.Em)(result.length));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* getProductByPriceRange({
  payload
}) {
  try {
    const products = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getProductsByPriceRange */.Z.getProductsByPriceRange, payload);
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsSuccess */.Oo)(products));
    yield (0,effects_namespaceObject.put)((0,product_action/* getTotalProductsSuccess */.Em)(products.length));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* getProductByBrand({
  payload
}) {
  try {
    const brands = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getProductsByBrands */.Z.getProductsByBrands, payload);
    const products = [];
    brands.forEach(brand => {
      brand.products.forEach(product => {
        products.push(product);
      });
    });
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsSuccess */.Oo)(products));
    yield (0,effects_namespaceObject.put)((0,product_action/* getTotalProductsSuccess */.Em)(products.length));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* getProductByKeyword({
  keyword
}) {
  try {
    const searchParams = {
      title_contains: keyword
    };
    const result = yield (0,effects_namespaceObject.call)(ProductRepository/* default.getRecords */.Z.getRecords, searchParams);
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductByKeywordsSuccess */.OG)(result));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,product_action/* getProductsError */.TQ)(err));
  }
}

function* saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCTS */.Hp.GET_PRODUCTS, getProducts)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_TOTAL_OF_PRODUCTS */.Hp.GET_TOTAL_OF_PRODUCTS, getTotalOfProducts)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_BRANDS */.Hp.GET_BRANDS, getBrands)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCT_CATEGORIES */.Hp.GET_PRODUCT_CATEGORIES, getProductCategories)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCTS_BY_CATEGORY */.Hp.GET_PRODUCTS_BY_CATEGORY, getProductByCategory)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCTS_BY_PRICE_RANGE */.Hp.GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCTS_BY_BRAND */.Hp.GET_PRODUCTS_BY_BRAND, getProductByBrand)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCTS_BY_KEYWORD */.Hp.GET_PRODUCTS_BY_KEYWORD, getProductByKeyword)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(product_action/* actionTypes.GET_PRODUCT_BY_ID */.Hp.GET_PRODUCT_BY_ID, getProductById)]);
}
;// CONCATENATED MODULE: ./store/setting/saga.js



function* changeCurrencySaga({
  currency
}) {
  try {
    yield (0,effects_namespaceObject.put)((0,setting_action/* changeCurrencySuccess */.EJ)(currency));
  } catch (err) {
    console.error(err);
  }
}

function* setting_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(setting_action/* actionTypes.CHANGE_CURRENCY */.Hp.CHANGE_CURRENCY, changeCurrencySaga)]);
}
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./store/cart/saga.js




const modalSuccess = type => {
  external_antd_.notification[type]({
    message: 'Success',
    description: 'This product has been added to your cart!',
    duration: 1
  });
};

const modalWarning = type => {
  external_antd_.notification[type]({
    message: 'Remove A Item',
    description: 'This product has been removed from your cart!',
    duration: 1
  });
};

const calculateAmount = obj => Object.values(obj).reduce((acc, {
  quantity,
  price
}) => acc + quantity * price, 0).toFixed(2);

function* getCartSaga() {
  try {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartSuccess */.hn)());
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartError */.hC)(err));
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    let currentCart = JSON.parse(localCart);
    let existItem = currentCart.cartItems.find(item => item.id === product.id);

    if (existItem) {
      existItem.quantity += product.quantity;
    } else {
      if (!product.quantity) {
        product.quantity = 1;
      }

      currentCart.cartItems.push(product);
    }

    currentCart.amount = calculateAmount(currentCart.cartItems);
    currentCart.cartTotal++;
    yield (0,effects_namespaceObject.put)((0,cart_action/* updateCartSuccess */.xM)(currentCart));
    modalSuccess('success');
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartError */.hC)(err));
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let index = localCart.cartItems.findIndex(item => item.id === product.id);
    localCart.cartTotal = localCart.cartTotal - product.quantity;
    localCart.cartItems.splice(index, 1);
    localCart.amount = calculateAmount(localCart.cartItems);

    if (localCart.cartItems.length === 0) {
      localCart.cartItems = [];
      localCart.amount = 0;
      localCart.cartTotal = 0;
    }

    yield (0,effects_namespaceObject.put)((0,cart_action/* updateCartSuccess */.xM)(localCart));
    modalWarning('warning');
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartError */.hC)(err));
  }
}

function* increaseQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity++;
      localCart.cartTotal++;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield (0,effects_namespaceObject.put)((0,cart_action/* updateCartSuccess */.xM)(localCart));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartError */.hC)(err));
  }
}

function* decreaseItemQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity--;
      localCart.cartTotal--;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield (0,effects_namespaceObject.put)((0,cart_action/* updateCartSuccess */.xM)(localCart));
  } catch (err) {
    yield (0,effects_namespaceObject.put)((0,cart_action/* getCartError */.hC)(err));
  }
}

function* clearCartSaga() {
  try {
    const emptyCart = {
      cartItems: [],
      amount: 0,
      cartTotal: 0
    };
    yield put(updateCartSuccess(emptyCart));
  } catch (err) {
    yield put(updateCartError(err));
  }
}

function* cart_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(cart_action/* actionTypes.GET_CART */.Hp.GET_CART, getCartSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(cart_action/* actionTypes.ADD_ITEM */.Hp.ADD_ITEM, addItemSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(cart_action/* actionTypes.REMOVE_ITEM */.Hp.REMOVE_ITEM, removeItemSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(cart_action/* actionTypes.INCREASE_QTY */.Hp.INCREASE_QTY, increaseQtySaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(cart_action/* actionTypes.DECREASE_QTY */.Hp.DECREASE_QTY, decreaseItemQtySaga)]);
}
;// CONCATENATED MODULE: ./store/auth/saga.js




const saga_modalSuccess = type => {
  external_antd_.notification[type]({
    message: 'Wellcome back',
    description: 'You are login successful!'
  });
};

const saga_modalWarning = type => {
  external_antd_.notification[type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function* loginSaga() {
  try {
    yield (0,effects_namespaceObject.put)((0,auth_action/* loginSuccess */.he)());
    saga_modalSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield (0,effects_namespaceObject.put)((0,auth_action/* logOutSuccess */.Gd)());
    saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* auth_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(auth_action/* actionTypes.LOGIN_REQUEST */.Hp.LOGIN_REQUEST, loginSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(auth_action/* actionTypes.LOGOUT */.Hp.LOGOUT, logOutSaga)]);
}
;// CONCATENATED MODULE: ./store/compare/saga.js




const compare_saga_modalSuccess = type => {
  notification[type]({
    message: 'Added to compare list!',
    description: 'This product has been added to compare list!'
  });
};

const compare_saga_modalWarning = type => {
  external_antd_.notification[type]({
    message: 'Removed to compare list',
    description: 'This product has been removed from compare list!'
  });
};

function* getCompareListSaga() {
  try {
    const localCompareList = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    yield (0,effects_namespaceObject.put)((0,compare_action/* getCompareListSuccess */.M_)(localCompareList));
  } catch (err) {
    console.log(err);
  }
}

function* saga_addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let existItem = localCompare.compareItems.find(item => item.id === product.id);

    if (!existItem) {
      product.quantity = 1;
      localCompare.compareItems.push(product);
      localCompare.compareTotal++;
      yield (0,effects_namespaceObject.put)((0,compare_action/* updateCompareListSuccess */.ej)(localCompare));
    }
  } catch (err) {
    console.log(err);
  }
}

function* saga_removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let index = localCompare.compareItems.indexOf(product);
    localCompare.compareTotal = localCompare.compareTotal - 1;
    localCompare.compareItems.splice(index, 1);
    yield (0,effects_namespaceObject.put)((0,compare_action/* updateCompareListSuccess */.ej)(localCompare));
    compare_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearCompareListSaga() {
  try {
    const emptyCart = {
      compareItems: [],
      compareTotal: 0
    };
    yield put(updateCompareListSuccess(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* compare_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(compare_action/* actionTypes.GET_COMPARE_LIST */.Hp.GET_COMPARE_LIST, getCompareListSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(compare_action/* actionTypes.ADD_ITEM_COMPARE */.Hp.ADD_ITEM_COMPARE, saga_addItemSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(compare_action/* actionTypes.REMOVE_ITEM_COMPARE */.Hp.REMOVE_ITEM_COMPARE, saga_removeItemSaga)]);
}
;// CONCATENATED MODULE: ./store/wishlist/saga.js




const wishlist_saga_modalSuccess = type => {
  external_antd_.notification[type]({
    message: 'Added to wishlisht!',
    description: 'This product has been added to wishlist!'
  });
};

const wishlist_saga_modalWarning = type => {
  external_antd_.notification[type]({
    message: 'Removed from wishlist',
    description: 'This product has been removed from wishlist!'
  });
};

function* getWishlistListSaga() {
  try {
    const localWishlistList = JSON.parse(localStorage.getItem('persist:martfury')).wishlist;
    yield (0,effects_namespaceObject.put)((0,wishlist_action/* getWishlistListSuccess */.zA)(localWishlistList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemToWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let existItem = localWishlist.wishlistItems.find(item => item.id === product.id);

    if (!existItem) {
      localWishlist.wishlistItems.push(product);
      localWishlist.wishlistTotal++;
      yield (0,effects_namespaceObject.put)((0,wishlist_action/* updateWishlistListSuccess */.Zb)(localWishlist));
      wishlist_saga_modalSuccess('success');
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let index = localWishlist.wishlistItems.indexOf(product);
    localWishlist.wishlistTotal = localWishlist.wishlistTotal - 1;
    localWishlist.wishlistItems.splice(index, 1);
    yield (0,effects_namespaceObject.put)((0,wishlist_action/* updateWishlistListSuccess */.Zb)(localWishlist));
    wishlist_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearWishlistListSaga() {
  try {
    const emptyCart = {
      wishlistItems: [],
      wishlistTotal: 0
    };
    yield put(updateWishlistListSuccess(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* wishlist_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(wishlist_action/* actionTypes.GET_WISHLIST_LIST */.Hp.GET_WISHLIST_LIST, getWishlistListSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(wishlist_action/* actionTypes.ADD_ITEM_WISHLISH */.Hp.ADD_ITEM_WISHLISH, addItemToWishlistSaga)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(wishlist_action/* actionTypes.REMOVE_ITEM_WISHLISH */.Hp.REMOVE_ITEM_WISHLISH, removeItemWishlistSaga)]);
}
// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(8661);
;// CONCATENATED MODULE: ./store/collection/saga.js




(0,external_es6_promise_namespaceObject.polyfill)();

function* getCollections({
  payload
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(CollectionRepository/* default.getCollections */.Z.getCollections, payload);
    yield (0,effects_namespaceObject.put)((0,collection_action/* getCollectionsSuccess */.Og)(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCollectionByCategories({
  payload
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(CollectionRepository/* default.getCategoriesBySlug */.Z.getCategoriesBySlug, payload);
    yield (0,effects_namespaceObject.put)((0,collection_action/* getCategoriesSuccess */.Oj)(data));
  } catch (err) {
    console.log(err);
  }
}

function* collection_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(collection_action/* actionTypes.GET_COLLECTIONS */.Hp.GET_COLLECTIONS, getCollections)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(collection_action/* actionTypes.GET_CATEGORIES */.Hp.GET_CATEGORIES, getCollectionByCategories)]);
}
// EXTERNAL MODULE: ./repositories/MediaRepository.js
var MediaRepository = __webpack_require__(8857);
;// CONCATENATED MODULE: ./store/media/saga.js




(0,external_es6_promise_namespaceObject.polyfill)();

function* saga_getBannersBySlugs({
  payload
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(MediaRepository/* default.getBannersBySlugs */.Z.getBannersBySlugs, payload);
    yield (0,effects_namespaceObject.put)(getBannersSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* saga_getPromotionsBySlugs({
  payload
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(MediaRepository/* default.getPromotionsBySlugs */.Z.getPromotionsBySlugs, payload);
    yield (0,effects_namespaceObject.put)(getPromotionsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* media_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(action_actionTypes.GET_BANNERS, saga_getBannersBySlugs)]);
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(action_actionTypes.GET_PROMOTIONS, saga_getPromotionsBySlugs)]);
}
;// CONCATENATED MODULE: ./store/app/saga.js



function* saga_switchDemoPanel({
  payload
}) {
  try {
    console.log(payload.payload);
    yield (0,effects_namespaceObject.put)(switchDemoPanelSuccess(payload));
  } catch (err) {
    console.log(err);
  }
}

function* app_saga_rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.takeEvery)(app_action_actionTypes.SWITCH_DEMO_PANEL, saga_switchDemoPanel)]);
}
;// CONCATENATED MODULE: ./store/rootSaga.js











function* rootSaga_rootSaga() {
  yield (0,effects_namespaceObject.all)([rootSaga(), saga_rootSaga(), setting_saga_rootSaga(), cart_saga_rootSaga(), auth_saga_rootSaga(), compare_saga_rootSaga(), wishlist_saga_rootSaga(), collection_saga_rootSaga(), media_saga_rootSaga(), app_saga_rootSaga()]);
}
;// CONCATENATED MODULE: ./store/store.js







const bindMiddleware = middleware => {
  if (false) {}

  return (0,external_redux_namespaceObject.applyMiddleware)(...middleware);
};

const persistConfig = {
  key: 'martfury',
  storage: (storage_default()),
  whitelist: ['cart', 'compare', 'auth', 'wishlist']
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);

function configureStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = (0,external_redux_namespaceObject.createStore)(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga_rootSaga);
  return store;
}

/* harmony default export */ var store = (configureStore);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layouts/modules/Head.jsx





const StyleSheets = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
  children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
    children: "Martfury - React eCommerce Template"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "32x32"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "192x192"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon-precomposed",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "format-detection",
    content: "telephone=no"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "author",
    content: "nouthemes"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "keywords",
    content: "Martfury, React, eCommerce, Template"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "description",
    content: "Martfury - React eCommerce Template"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
    rel: "stylesheet"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    href: "/static/fonts/font-awesome/css/font-awesome.min.css"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/slick.min.css"
  })]
});

/* harmony default export */ var Head = (StyleSheets);
;// CONCATENATED MODULE: ./components/layouts/DefaultLayout.jsx







const DefaultLayout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "layout--default",
  children: [/*#__PURE__*/jsx_runtime_.jsx(Head, {}), children, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "loader-wrapper",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "loader-section section-left"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "loader-section section-right"
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.BackTop, {
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "ps-btn--backtop",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon-arrow-up"
      })
    })
  })]
});

/* harmony default export */ var layouts_DefaultLayout = (DefaultLayout);
;// CONCATENATED MODULE: ./pages/_app.jsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























class MyApp extends app.default {
  constructor(props) {
    super(props);
    this.persistor = (0,external_redux_persist_namespaceObject.persistStore)(props.store);
  }

  componentDidMount() {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
    this.setState({
      open: true
    });
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;

    const getLayout = Component.getLayout || (page => /*#__PURE__*/jsx_runtime_.jsx(layouts_DefaultLayout, {
      children: page
    }));

    return getLayout( /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
        loading: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)),
        persistor: this.persistor,
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })
    }));
  }

}

/* harmony default export */ var _app = (external_next_redux_wrapper_default()(store)(external_next_redux_saga_default()(MyApp)));

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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,7544,5484,4247,8483,5671,8661,8857,4459], function() { return __webpack_exec__(4285); });
module.exports = __webpack_exports__;

})();