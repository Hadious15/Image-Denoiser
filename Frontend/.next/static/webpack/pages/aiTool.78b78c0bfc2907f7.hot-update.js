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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Dalle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), prompt = ref[0], setprompt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), imageUrl = ref1[0], setImageUrl = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), typing = ref3[0], setTyping = ref3[1];\n    var handleChange = function(e) {\n        setTyping(true);\n        var value = e.target.value;\n        setprompt(value);\n    };\n    var handleSubmit = function(e) {\n        setTyping(false);\n        setLoading(true);\n        e.preventDefault();\n        console.log(prompt);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\" http://192.168.43.250:5000/dalle\", {\n            prompt: prompt\n        }).then(function(res) {\n            setImageUrl(res.data);\n            console.log(res);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-bl from-[#c22547] to-[#130e91] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center mt-10 bg-white bg-opacity-30 p-2 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"input\",\n                                    value: prompt,\n                                    required: true,\n                                    autoComplete: \"off\",\n                                    name: \"prompt\",\n                                    onChange: handleChange,\n                                    placeholder: \" Please write a prompt of image content\",\n                                    className: \"file:bg-gradient-to-b w-96 font-bold file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \" rounded-full border-gray-300 shadow-sm px-4 py-4 text-[#ffffff] font-bold bg-blue-600 hover:bg-indigo-800 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                        children: \"GO\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-10 items-center\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-max\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this),\n            imageUrl !== \"\" && !loading && !typing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.DalleOutput, {\n                        image: imageUrl,\n                        noiseType: prompt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dalle, \"54jlZbZu0m682VPD4A/qPBmhGFQ=\");\n_c = Dalle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dalle);\nvar _c;\n$RefreshReg$(_c, \"Dalle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87a0NBQ3BCLDRFQUFDMUIsK0NBQU07NEJBQUNPLE9BQU8sRUFBRUEsT0FBTzs7Ozs7aUNBQUk7Ozs7OzZCQUN4Qjs7Ozs7O3FCQUNGO1lBR1BGLFFBQVEsS0FBSyxFQUFFLElBQUksQ0FBQ0UsT0FBTyxJQUFJLENBQUNFLE1BQU0sa0JBQ3JDLDhEQUFDZ0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjswQkFDeEMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxPQUFPOzhCQUNwQiw0RUFBQ3pCLG9EQUFXO3dCQUFDcUMsS0FBSyxFQUFFakMsUUFBUTt3QkFBRWtDLFNBQVMsRUFBRXBDLE1BQU07Ozs7OzZCQUFJOzs7Ozt5QkFDL0M7Ozs7O3FCQUNGOzs7Ozs7YUFFSixDQUNQO0NBQ0Y7R0F4RktELEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTBGWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9haVRvb2wuanN4PzgwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgTG9hZGVyLCBEYWxsZU91dHB1dCB9IGZyb20gJy4uL0NvbXBvbmVudHMnXHJcbmNvbnN0IERhbGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9tcHQsIHNldHByb21wdF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0eXBpbmcsIHNldFR5cGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRUeXBpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICBzZXRwcm9tcHQodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBzZXRUeXBpbmcoZmFsc2UpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHByb21wdClcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KCcgaHR0cDovLzE5Mi4xNjguNDMuMjUwOjUwMDAvZGFsbGUnLCB7IHByb21wdDogcHJvbXB0IH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZVVybChyZXMuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1bI2MyMjU0N10gdG8tWyMxMzBlOTFdIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEwIGJnLXdoaXRlIGJnLW9wYWNpdHktMzAgcC0yIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb21wdH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInByb21wdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgUGxlYXNlIHdyaXRlIGEgcHJvbXB0IG9mIGltYWdlIGNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZTpiZy1ncmFkaWVudC10by1iIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB3LTk2XHJcbiAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgZmlsZTpyb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICBmaWxlOnRleHQtd2hpdGUgXHJcbiAgICAgICAgICAgICBmaWxlOmN1cnNvci1wb2ludGVyIGZpbGU6c2hhZG93LWxnXHJcbiAgICAgICAgICAgZmlsZTpzaGFkb3ctYmx1ZS02MDAvNTAgYmctZ3JhZGllbnQtdG8tYnJcclxuICAgICAgICAgICBmcm9tLWdyYXktNjAwIHRvLWdyYXktNzAwXHJcbiAgICAgICAgICAgdGV4dC13aGl0ZS84MCByb3VuZGVkLWZ1bGwgXHJcbiAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBzaGFkb3cteGxcclxuICAgICAgICAgICBzaGFkb3ctZ3JheS03MDAvNjAgXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCAgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTQgIHRleHQtWyNmZmZmZmZdIGZvbnQtYm9sZCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1pbmRpZ28tODAwIGZvY3VzOm91dGxpbmUtbm9uZSAgc206bXQtMCBzbTptbC0zIHNtOnctYXV0byBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oXCJcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR09cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTEwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cclxuICAgICAgICAgICAgPExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aW1hZ2VVcmwgIT09ICcnICYmICFsb2FkaW5nICYmICF0eXBpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxyXG4gICAgICAgICAgICA8RGFsbGVPdXRwdXQgaW1hZ2U9e2ltYWdlVXJsfSBub2lzZVR5cGU9e3Byb21wdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWxsZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTG9hZGVyIiwiRGFsbGVPdXRwdXQiLCJEYWxsZSIsInByb21wdCIsInNldHByb21wdCIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInR5cGluZyIsInNldFR5cGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaW1hZ2UiLCJub2lzZVR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aiTool.jsx\n"));

/***/ })

});