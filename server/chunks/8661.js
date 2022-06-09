exports.id = 8661;
exports.ids = [8661];
exports.modules = {

/***/ 8661:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);


class CollectionRepository {
  async getCollections(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/collections?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoriesBySlug(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/product-categories?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCollectionSlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/collections?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsByCategorySlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/product-categories?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new CollectionRepository());

/***/ })

};
;