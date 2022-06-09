exports.id = 5963;
exports.ids = [5963];
exports.modules = {

/***/ 5963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ getProductsByCollectionHelper; },
/* harmony export */   "b": function() { return /* binding */ getProductsByCategoriesHelper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8661);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



async function getProductsByCollectionHelper(collectionSlug, pageSize = 12) {
  let products;

  if (collectionSlug) {
    products = await _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getProductsByCollectionSlug */ .Z.getProductsByCollectionSlug(collectionSlug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__/* .default.getRecords */ .Z.getRecords(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}
async function getProductsByCategoriesHelper(slug, pageSize = 12) {
  let products;

  if (slug) {
    products = await _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_1__/* .default.getProductsByCategorySlug */ .Z.getProductsByCategorySlug(slug);
  } else {
    const queries = {
      _limit: pageSize
    };
    products = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__/* .default.getRecords */ .Z.getRecords(queries);
  }

  if (products) {
    return products;
  } else {
    return null;
  }
}

/***/ })

};
;