webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/08/actions/transactionPackActions.js":
/*!**************************************************!*\
  !*** ./src/08/actions/transactionPackActions.js ***!
  \**************************************************/
/*! exports provided: resetTransactionList, FETCH_TRANSACTION_LIST, FETCH_TRANSACTION, UPDATE_TRANSACTION, CREATE_TRANSACTION, requestTransactionList, createTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTransactionList", function() { return resetTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSACTION_LIST", function() { return FETCH_TRANSACTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSACTION", function() { return FETCH_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TRANSACTION", function() { return UPDATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TRANSACTION", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTransactionList", function() { return requestTransactionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransaction", function() { return createTransaction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api */ "./src/08/Api.js");
/* harmony import */ var _11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../11/api-redux-pack/createActions */ "./src/11/api-redux-pack/createActions.js");




var _createActions = Object(_11_api_redux_pack_createActions__WEBPACK_IMPORTED_MODULE_2__["default"])('transactions'),
    collection = _createActions.collection,
    create = _createActions.create,
    reset = _createActions.reset;

var PAGE_SIZE = 10;
var resetTransactionList = reset;
var FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
var FETCH_TRANSACTION = 'transaction/FETCH_TRANSACTION';
var UPDATE_TRANSACTION = 'transaction/UPDATE_TRANSACTION';
var CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';
function requestTransactionList(params) {
  var _page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트했습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.'
    }
  };
  return collection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
    _page,
    _limit: PAGE_SIZE
  }), meta);
}
function createTransaction(data, onComplete) {
  var meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다.'
    }
  };
  return create(data, {}, meta);
}

/***/ })

})
//# sourceMappingURL=_app.js.9d230199fe201bacfbdd.hot-update.js.map