"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aiTool",{

/***/ "./pages/aiTool.jsx":
/*!**************************!*\
  !*** ./pages/aiTool.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Dalle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), prompt = ref[0], setprompt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), imageUrl = ref1[0], setImageUrl = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), typing = ref3[0], setTyping = ref3[1];\n    var handleChange = function(e) {\n        setTyping(true);\n        var value = e.target.value;\n        setprompt(value);\n    };\n    var handleSubmit = function(e) {\n        setTyping(false);\n        setLoading(true);\n        e.preventDefault();\n        console.log(prompt);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\" http://192.168.43.250:5000/dalle\", {\n            prompt: prompt\n        }).then(function(res) {\n            setImageUrl(res.data);\n            console.log(res);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-bl from-[#c22547] to-[#130e91] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-start \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center mt-10 bg-white bg-opacity-30 p-4 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"input\",\n                                        value: prompt,\n                                        required: true,\n                                        autoComplete: \"off\",\n                                        name: \"prompt\",\n                                        onChange: handleChange,\n                                        placeholder: \" Please write a prompt of image content\",\n                                        className: \"file:bg-gradient-to-b h-12 w-96 font-bold file:rounded-sm file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \" rounded-full border-gray-300 shadow-sm px-4 py-4 text-[#ffffff] font-bold bg-blue-600 hover:bg-indigo-800 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            children: \"GO\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-10 items-center\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-max\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this),\n            imageUrl !== \"\" && !loading && !typing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.DalleOutput, {\n                        image: imageUrl,\n                        noiseType: prompt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dalle, \"54jlZbZu0m682VPD4A/qPBmhGFQ=\");\n_c = Dalle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dalle);\nvar _c;\n$RefreshReg$(_c, \"Dalle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7b0JBQ3BELEdBQUc7a0NBQ0osOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPO2tDQUNwQiw0RUFBQzFCLCtDQUFNOzRCQUFDTyxPQUFPLEVBQUVBLE9BQU87Ozs7O2lDQUFJOzs7Ozs2QkFDeEI7Ozs7OztxQkFDRjtZQUdQRixRQUFRLEtBQUssRUFBRSxJQUFJLENBQUNFLE9BQU8sSUFBSSxDQUFDRSxNQUFNLGtCQUNyQyw4REFBQ2dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7MEJBQ3hDLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFDbEIsNEVBQUN6QixvREFBVzt3QkFBQ3FDLEtBQUssRUFBRWpDLFFBQVE7d0JBQUVrQyxTQUFTLEVBQUVwQyxNQUFNOzs7Ozs2QkFBSTs7Ozs7eUJBQy9DOzs7OztxQkFDRjs7Ozs7O2FBRUosQ0FDUDtDQUNGO0dBM0ZLRCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE2RlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWlUb29sLmpzeD84MDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IExvYWRlciwgRGFsbGVPdXRwdXQgfSBmcm9tICcuLi9Db21wb25lbnRzJ1xyXG5jb25zdCBEYWxsZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvbXB0LCBzZXRwcm9tcHRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdHlwaW5nLCBzZXRUeXBpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VHlwaW5nKHRydWUpXHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgc2V0cHJvbXB0KHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgc2V0VHlwaW5nKGZhbHNlKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9tcHQpXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnIGh0dHA6Ly8xOTIuMTY4LjQzLjI1MDo1MDAwL2RhbGxlJywgeyBwcm9tcHQ6IHByb21wdCB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwocmVzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWdyYWRpZW50LXRvLWJsIGZyb20tWyNjMjI1NDddIHRvLVsjMTMwZTkxXSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTAgIGJnLXdoaXRlIGJnLW9wYWNpdHktMzAgcC00IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBQbGVhc2Ugd3JpdGUgYSBwcm9tcHQgb2YgaW1hZ2UgY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGU6YmctZ3JhZGllbnQtdG8tYiBcclxuICAgICAgICAgICAgICAgIGgtMTJcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgdy05NlxyXG4gICAgICAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIGZpbGU6cm91bmRlZC1zbVxyXG4gICAgICAgICAgIGZpbGU6dGV4dC13aGl0ZSBcclxuICAgICAgICAgICAgIGZpbGU6Y3Vyc29yLXBvaW50ZXIgZmlsZTpzaGFkb3ctbGdcclxuICAgICAgICAgICBmaWxlOnNoYWRvdy1ibHVlLTYwMC81MCBiZy1ncmFkaWVudC10by1iclxyXG4gICAgICAgICAgIGZyb20tZ3JheS02MDAgdG8tZ3JheS03MDBcclxuICAgICAgICAgICB0ZXh0LXdoaXRlLzgwIHJvdW5kZWQtZnVsbCBcclxuICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIHNoYWRvdy14bFxyXG4gICAgICAgICAgIHNoYWRvdy1ncmF5LTcwMC82MCBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gcHgtNCBweS00ICB0ZXh0LVsjZmZmZmZmXSBmb250LWJvbGQgYmctYmx1ZS02MDAgaG92ZXI6YmctaW5kaWdvLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgIHNtOm10LTAgc206bWwtMyBzbTp3LWF1dG8gc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oXCJcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEdPXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTEwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cclxuICAgICAgICAgICAgPExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aW1hZ2VVcmwgIT09ICcnICYmICFsb2FkaW5nICYmICF0eXBpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LS9cIj5cclxuICAgICAgICAgICAgPERhbGxlT3V0cHV0IGltYWdlPXtpbWFnZVVybH0gbm9pc2VUeXBlPXtwcm9tcHR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFsbGVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxvYWRlciIsIkRhbGxlT3V0cHV0IiwiRGFsbGUiLCJwcm9tcHQiLCJzZXRwcm9tcHQiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0eXBpbmciLCJzZXRUeXBpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuYW1lIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImltYWdlIiwibm9pc2VUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aiTool.jsx\n"));

/***/ })

});