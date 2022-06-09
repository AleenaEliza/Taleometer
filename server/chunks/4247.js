exports.id = 4247;
exports.ids = [4247];
exports.modules = {

/***/ 4247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "Ud": function() { return /* binding */ getBrandsSuccess; },
/* harmony export */   "Kt": function() { return /* binding */ getProductCategoriesSuccess; },
/* harmony export */   "Em": function() { return /* binding */ getTotalProductsSuccess; },
/* harmony export */   "Oo": function() { return /* binding */ getProductsSuccess; },
/* harmony export */   "OG": function() { return /* binding */ getProductByKeywordsSuccess; },
/* harmony export */   "LY": function() { return /* binding */ getSingleProductsSuccess; },
/* harmony export */   "TQ": function() { return /* binding */ getProductsError; },
/* harmony export */   "BN": function() { return /* binding */ getProductsByKeyword; }
/* harmony export */ });
/* unused harmony exports getProducts, getTotalProducts, getBrands, getProductCategories, getProductsByCategory, getProductsByBrand, getProductsById, getProductsByPrice */
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ })

};
;