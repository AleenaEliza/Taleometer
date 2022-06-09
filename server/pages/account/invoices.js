(function() {
var exports = {};
exports.id = 2575;
exports.ids = [2575];
exports.modules = {

/***/ 6780:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ invoices; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/elements/BreadCrumb.jsx
var BreadCrumb = __webpack_require__(9616);
// EXTERNAL MODULE: ./components/partials/account/modules/AccountMenuSidebar.jsx
var AccountMenuSidebar = __webpack_require__(281);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/partials/account/modules/TableInvoices.jsx






class TableInvoices extends external_react_.Component {
  render() {
    /*
        You can change data by API
        example: https://ant.design/components/table/
    */
    const tableData = [{
      id: '1',
      invoiceId: '500884010',
      title: 'Marshall Kilburn Portable Wireless Speaker',
      dateCreate: '20-1-2020',
      amount: '42.99',
      status: 'Successful delivery'
    }, {
      id: '2',
      invoiceId: '593347935',
      title: 'Herschel Leather Duffle Bag In Brown Color',
      dateCreate: '20-1-2020',
      amount: '199.99',
      status: 'Cancel'
    }, {
      id: '3',
      invoiceId: '593347935',
      title: 'Xbox One Wireless Controller Black Color',
      dateCreate: '20-1-2020',
      amount: '199.99',
      status: 'Cancel'
    }, {
      id: '4',
      invoiceId: '615397400',
      title: 'Grand Slam Indoor Of Show Jumping Novel',
      dateCreate: '20-1-2020',
      amount: '41.00',
      status: 'Cancel'
    }];
    const tableColumn = [{
      title: 'Id',
      dataIndex: 'invoiceId',
      rowKey: 'invoiceId',
      key: 'invoiceId',
      width: '120px',
      render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/account/invoice-detail",
        children: record.invoiceId
      })
    }, {
      title: 'Title',
      dataIndex: 'title',
      rowKey: 'title',
      key: 'title'
    }, {
      title: 'Date',
      rowKey: 'dateCreate',
      dataIndex: 'dateCreate',
      key: 'dateCreate',
      width: '120px'
    }, {
      title: 'Amount',
      rowKey: 'amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text, record) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-right",
        children: ["$", record.amount]
      })
    }, {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      rowKey: 'status',
      width: '150px',
      render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-right",
        children: record.amount
      })
    }];
    return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
      columns: tableColumn,
      dataSource: tableData,
      rowKey: record => record.id
    });
  }

}

/* harmony default export */ var modules_TableInvoices = (TableInvoices);
;// CONCATENATED MODULE: ./components/partials/account/Invoices.jsx






class Invoices extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const accountLinks = [{
      text: 'Account Information',
      url: '/account/user-information',
      icon: 'icon-user'
    }, {
      text: 'Notifications',
      url: '/account/notifications',
      icon: 'icon-alarm-ringing'
    }, {
      text: 'Invoices',
      url: '/account/invoices',
      icon: 'icon-papers',
      active: true
    }, {
      text: 'Address',
      url: '/account/addresses',
      icon: 'icon-papers'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product',
      icon: 'icon-papers'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist',
      icon: 'icon-papers'
    }];
    return /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "ps-my-account ps-page--account",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__left",
              children: /*#__PURE__*/jsx_runtime_.jsx(AccountMenuSidebar/* default */.Z, {
                data: accountLinks
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "ps-page__content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ps-section--account-setting",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-section__header",
                  children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "Invoices"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ps-section__content",
                  children: /*#__PURE__*/jsx_runtime_.jsx(modules_TableInvoices, {})
                })]
              })
            })
          })]
        })
      })
    });
  }

}

/* harmony default export */ var account_Invoices = (Invoices);
// EXTERNAL MODULE: ./components/layouts/ContainerPage.jsx
var ContainerPage = __webpack_require__(1596);
;// CONCATENATED MODULE: ./pages/account/invoices.jsx







const InvoicePage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Invoices'
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(ContainerPage/* default */.Z, {
    title: "Invoice",
    boxed: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ps-page--my-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BreadCrumb/* default */.Z, {
        breacrumb: breadCrumb
      }), /*#__PURE__*/jsx_runtime_.jsx(account_Invoices, {})]
    })
  });
};

/* harmony default export */ var invoices = (InvoicePage);

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6873:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5484,3574,4247,7517,2641,8260,4731,7786,9500,1596,281], function() { return __webpack_exec__(6780); });
module.exports = __webpack_exports__;

})();