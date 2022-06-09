exports.id = 8857;
exports.ids = [8857];
exports.modules = {

/***/ 8857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4063);



class MediaRespository {
  async getBannersBySlugs(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/banners?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBannersBySlug(payload) {
    const endPoint = `banners?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlug(payload) {
    const endPoint = `promotions?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlugs(payload) {
    const query = (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__/* .convertSlugsQueryString */ .sj)(payload);
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .FH}/promotions?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new MediaRespository());

/***/ })

};
;