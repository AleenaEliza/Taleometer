exports.id = 6269;
exports.ids = [6269];
exports.modules = {

/***/ 6269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);





class TableNotifications extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    /* 
        You can change data by API
        example: https://ant.design/components/table/
    */
    const tableData = [{
      key: '1',
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
      dateCreate: '20-1-2020',
      tags: ['sale']
    }, {
      key: '2',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
      dateCreate: '21-1-2020',
      tags: ['new']
    }, {
      key: '3',
      title: ' Et harum quidem rerum',
      dateCreate: '21-1-2020',
      tags: ['new']
    }, {
      key: '4',
      title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      dateCreate: '21-1-2020',
      tags: ['sale']
    }];
    const tableColumn = [{
      title: 'Date Create',
      dataIndex: 'dateCreate',
      key: 'dateCreate',
      render: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: text
      }),
      width: '100px'
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: 'Category',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'sale') {
            color = 'volcano';
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
            color: color,
            children: tag.toUpperCase()
          }, tag);
        })
      })
    }, {
      title: 'Action',
      key: 'action',
      width: '200px',
      render: (text, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          children: ["Mark as read ", record.name]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {
          type: "vertical"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          children: "Delete"
        })]
      })
    }];
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {
      columns: tableColumn,
      dataSource: tableData
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (TableNotifications);

/***/ })

};
;