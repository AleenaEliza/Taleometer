exports.id = 8124;
exports.ids = [8124];
exports.modules = {

/***/ 8124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);


class StoreRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getStores(payload) {
    const endPoint = `stores?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseStoreURL */ .r}/${endPoint}`).then(response => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getStoreBySlug(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseStoreURL */ .r}/stores?slug=${payload}`).then(response => {
      if (response.data.length > 0) {
        return response.data[0];
      } else {
        return null;
      }
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getStoreItemsByKeyword(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseStoreURL */ .r}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPostItemsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseStoreURL */ .r}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new StoreRepository());

/***/ })

};
;