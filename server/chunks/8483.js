exports.id = 8483;
exports.ids = [8483];
exports.modules = {

/***/ 8483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "zA": function() { return /* binding */ getWishlistListSuccess; },
/* harmony export */   "yK": function() { return /* binding */ addItemToWishlist; },
/* harmony export */   "Q9": function() { return /* binding */ removeWishlistItem; },
/* harmony export */   "Zb": function() { return /* binding */ updateWishlistListSuccess; }
/* harmony export */ });
/* unused harmony exports getWishlistList, clearWishlist */
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(data) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    data
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ })

};
;