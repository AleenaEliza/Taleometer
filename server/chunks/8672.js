exports.id = 8672;
exports.ids = [8672];
exports.modules = {

/***/ 8672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7836);


class PostRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getPosts(payload) {
    const endPoint = `posts?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .basePostUrl */ .$Y}/${endPoint}`).then(response => {
      if (response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPostBySlug(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .basePostUrl */ .$Y}/posts?slug=${payload}`).then(response => {
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

  async getPostsByCollectionSlug(payload) {
    const endPoint = `collections?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__/* .serializeQuery */ .Y$)(payload)}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .basePostUrl */ .$Y}/${endPoint}`).then(response => {
      if (response.data && response.data[0].posts.length > 0) {
        return response.data[0].posts;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPostItemsByKeyword(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .basePostUrl */ .$Y}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getPostItemsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .ZP.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__/* .basePostUrl */ .$Y}/posts?title_contains=${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new PostRepository());

/***/ })

};
;