exports.id = 5671;
exports.ids = [5671];
exports.modules = {

/***/ 5671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "M_": function() { return /* binding */ getCompareListSuccess; },
/* harmony export */   "sG": function() { return /* binding */ addItemToCompare; },
/* harmony export */   "MH": function() { return /* binding */ removeCompareItem; },
/* harmony export */   "ej": function() { return /* binding */ updateCompareListSuccess; }
/* harmony export */ });
/* unused harmony exports getCompareList, clearCompare */
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ })

};
;