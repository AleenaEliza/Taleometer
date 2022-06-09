exports.id = 4459;
exports.ids = [4459];
exports.modules = {

/***/ 4459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": function() { return /* binding */ actionTypes; },
/* harmony export */   "Og": function() { return /* binding */ getCollectionsSuccess; },
/* harmony export */   "Oj": function() { return /* binding */ getCategoriesSuccess; }
/* harmony export */ });
/* unused harmony exports getCollections, getCategories, getCollection, getCollectionSuccess */
const actionTypes = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS'
};
function getCollections(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionsSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}
function getCategories(payload) {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload
  };
}
function getCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload
  };
}
function getCollection(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}

/***/ })

};
;