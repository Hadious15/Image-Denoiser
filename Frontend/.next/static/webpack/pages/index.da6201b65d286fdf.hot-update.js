"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Toggle.jsx":
/*!*******************************!*\
  !*** ./Components/Toggle.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript */ \"./node_modules/typescript/lib/typescript.js\");\n/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar Toggle = function(props) {\n    var modelCase = props.modelCase, setModelCase = props.setModelCase;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"isolate inline-flex rounded-md shadow-sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \" mx-2 relative -ml-px inline-flex items-center rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500\",\n                    onClick: function() {\n                        return setModelCase(1);\n                    },\n                    children: \"Model A\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\Toggle.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \" mx-2 relative -ml-px inline-flex items-center rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500\",\n                    onClick: function() {\n                        return setModelCase(2);\n                    },\n                    children: \"Model B\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\Toggle.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\Toggle.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\Toggle.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Toggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1RvZ2dsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUE4RDtBQUNyQztBQUN5QjtBQUNsRCxJQUFNRyxNQUFNLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3hCLElBQVFDLFNBQVMsR0FBbUJELEtBQUssQ0FBakNDLFNBQVMsRUFBRUMsWUFBWSxHQUFLRixLQUFLLENBQXRCRSxZQUFZO0lBRS9CLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLO2tCQUNsQiw0RUFBQ0MsTUFBSTtZQUFDRCxTQUFTLEVBQUMsMENBQTBDOzs4QkFDeEQsOERBQUNFLFFBQU07b0JBQ0xDLElBQUksRUFBQyxRQUFRO29CQUNiSCxTQUFTLEVBQUMsK09BQStPO29CQUN6UEksT0FBTyxFQUFFOytCQUFNTixZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUFBOzhCQUMvQixTQUVEOzs7Ozt5QkFBUztnQkFBQyxHQUFHOzhCQUNiLDhEQUFDSSxRQUFNO29CQUNMQyxJQUFJLEVBQUMsUUFBUTtvQkFDYkgsU0FBUyxFQUFDLCtPQUErTztvQkFDelBJLE9BQU8sRUFBRTsrQkFBTU4sWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFBQTs4QkFDL0IsU0FFRDs7Ozs7eUJBQVM7Ozs7OztpQkFDSjs7Ozs7YUFDSCxDQUNQO0NBQ0Y7QUF2QktILEtBQUFBLE1BQU07QUF3QlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ub2dnbGUuanN4PzQwOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hldnJvbkRvdWJsZUxlZnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpc0NvbnN0cnVjdG9yVHlwZU5vZGUgfSBmcm9tICd0eXBlc2NyaXB0J1xyXG5jb25zdCBUb2dnbGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG1vZGVsQ2FzZSwgc2V0TW9kZWxDYXNlIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXNvbGF0ZSBpbmxpbmUtZmxleCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIG14LTIgcmVsYXRpdmUgLW1sLXB4IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgcHgtMiBweS0yIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MCBmb2N1czp6LTEwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGVsQ2FzZSgxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBNb2RlbCBBXHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBteC0yIHJlbGF0aXZlIC1tbC1weCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTIgcHktMiB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6ei0xMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlbENhc2UoMil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTW9kZWwgQlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlXHJcbiJdLCJuYW1lcyI6WyJDaGV2cm9uRG91YmxlTGVmdEljb24iLCJSZWFjdCIsImlzQ29uc3RydWN0b3JUeXBlTm9kZSIsIlRvZ2dsZSIsInByb3BzIiwibW9kZWxDYXNlIiwic2V0TW9kZWxDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Toggle.jsx\n"));

/***/ })

});