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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _Image_background_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image/background.jpeg */ \"./Image/background.jpeg\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Dalle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), prompt = ref[0], setprompt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), imageUrl = ref1[0], setImageUrl = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), typing = ref3[0], setTyping = ref3[1];\n    var handleChange = function(e) {\n        setTyping(true);\n        var value = e.target.value;\n        setprompt(value);\n    };\n    var handleSubmit = function(e) {\n        setTyping(false);\n        setLoading(true);\n        e.preventDefault();\n        console.log(prompt);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://127.0.0.1:5000/dalle\", {\n            prompt: prompt\n        }).then(function(res) {\n            setImageUrl(res.data);\n            console.log(res);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    var sectionStyle = {\n        backgroundImage: \"url(\".concat(_Image_background_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \")\"),\n        backgroundSize: \"cover\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: sectionStyle,\n        className: \" min-h-screen bg-no-repeat bg-scroll bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/aiTool\",\n                    className: \" items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-700 hover:text-gray-700\",\n                    children: \"AiTool\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-start \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center mt-10 bg-white bg-opacity-30 p-4 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"input\",\n                                        value: prompt,\n                                        required: true,\n                                        autoComplete: \"off\",\n                                        name: \"prompt\",\n                                        onChange: handleChange,\n                                        placeholder: \" Please write a prompt of image content\",\n                                        className: \"file:bg-gradient-to-b h-12 w-96 font-bold file:rounded-sm file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \" rounded-full border-gray-300 shadow-sm px-4 py-4 text-[#ffffff] font-bold bg-blue-600 hover:bg-indigo-800 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            children: \"GO\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-10 items-center\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-max\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, _this),\n            imageUrl !== \"\" && !loading && !typing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-6/12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.DalleOutput, {\n                        image: imageUrl,\n                        noiseType: prompt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dalle, \"54jlZbZu0m682VPD4A/qPBmhGFQ=\");\n_c = Dalle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dalle);\nvar _c;\n$RefreshReg$(_c, \"Dalle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsMFBBYUc7Ozs7OzZDQUNiOzs7Ozt5Q0FDRTs4Q0FDTiw4REFBQ0YsS0FBRzs7d0NBQ0QsR0FBRztzREFDSiw4REFBQ2UsUUFBTTs0Q0FDTFAsSUFBSSxFQUFDLFFBQVE7NENBQ2JOLFNBQVMsRUFBQyxvS0FBdUs7c0RBRWxMLElBRUQ7Ozs7O2lEQUFTOzs7Ozs7eUNBQ0w7Ozs7OztpQ0FDRjs7Ozs7NkJBQ0Q7Ozs7O3lCQUNIOzs7OztxQkFDRjtZQUNMdkIsT0FBTyxrQkFDTiw4REFBQ3FCLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyx3Q0FBd0M7O29CQUNwRCxHQUFHO2tDQUNKLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsT0FBTztrQ0FDcEIsNEVBQUMvQiwrQ0FBTTs0QkFBQ1EsT0FBTyxFQUFFQSxPQUFPOzs7OztpQ0FBSTs7Ozs7NkJBQ3hCOzs7Ozs7cUJBQ0Y7WUFHUEYsUUFBUSxLQUFLLEVBQUUsSUFBSSxDQUFDRSxPQUFPLElBQUksQ0FBQ0UsTUFBTSxrQkFDckMsOERBQUNtQixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsMkJBQTJCOzBCQUN4Qyw0RUFBQ0YsS0FBRztvQkFBQ0UsU0FBUyxFQUFDLFFBQVE7OEJBQ3JCLDRFQUFDOUIsb0RBQVc7d0JBQUM0QyxLQUFLLEVBQUV2QyxRQUFRO3dCQUFFd0MsU0FBUyxFQUFFMUMsTUFBTTs7Ozs7NkJBQUk7Ozs7O3lCQUMvQzs7Ozs7cUJBQ0Y7Ozs7OzthQUVKLENBQ1A7Q0FDRjtHQXpHS0QsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMkdYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FpVG9vbC5qc3g/ODA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBMb2FkZXIsIERhbGxlT3V0cHV0IH0gZnJvbSAnLi4vQ29tcG9uZW50cydcclxuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tICcuLi9JbWFnZS9iYWNrZ3JvdW5kLmpwZWcnXHJcblxyXG5jb25zdCBEYWxsZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvbXB0LCBzZXRwcm9tcHRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdHlwaW5nLCBzZXRUeXBpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VHlwaW5nKHRydWUpXHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgc2V0cHJvbXB0KHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgc2V0VHlwaW5nKGZhbHNlKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9tcHQpXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2RhbGxlJywgeyBwcm9tcHQ6IHByb21wdCB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VVcmwocmVzLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICB2YXIgc2VjdGlvblN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXtzZWN0aW9uU3R5bGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cIiAgbWluLWgtc2NyZWVuIGJnLW5vLXJlcGVhdCBiZy1zY3JvbGwgYmctW3VybCgnaHR0cHM6Ly9tZWRpYS5pZG93bmxvYWRibG9nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9pUGFkLWdyYWRpZW50LXdhbGxwYXBlci1pZG93bmxvYWRibG9nLVY4YnlBcnRodXIxOTkyYXMuanBlZycpXVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIvYWlUb29sXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiAgIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yICBweC0xIHB0LTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktMTAwIGhvdmVyOmJvcmRlci1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBaVRvb2xcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xMCAgYmctd2hpdGUgYmctb3BhY2l0eS0zMCBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb21wdH1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByb21wdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFBsZWFzZSB3cml0ZSBhIHByb21wdCBvZiBpbWFnZSBjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZTpiZy1ncmFkaWVudC10by1iIFxyXG4gICAgICAgICAgICAgICAgaC0xMlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB3LTk2XHJcbiAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgZmlsZTpyb3VuZGVkLXNtXHJcbiAgICAgICAgICAgZmlsZTp0ZXh0LXdoaXRlIFxyXG4gICAgICAgICAgICAgZmlsZTpjdXJzb3ItcG9pbnRlciBmaWxlOnNoYWRvdy1sZ1xyXG4gICAgICAgICAgIGZpbGU6c2hhZG93LWJsdWUtNjAwLzUwIGJnLWdyYWRpZW50LXRvLWJyXHJcbiAgICAgICAgICAgZnJvbS1ncmF5LTYwMCB0by1ncmF5LTcwMFxyXG4gICAgICAgICAgIHRleHQtd2hpdGUvODAgcm91bmRlZC1mdWxsIFxyXG4gICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgc2hhZG93LXhsXHJcbiAgICAgICAgICAgc2hhZG93LWdyYXktNzAwLzYwIFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCAgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTQgIHRleHQtWyNmZmZmZmZdIGZvbnQtYm9sZCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1pbmRpZ28tODAwIGZvY3VzOm91dGxpbmUtbm9uZSAgc206bXQtMCBzbTptbC0zIHNtOnctYXV0byBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0T3BlbihcIlwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgR09cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxyXG4gICAgICAgICAgICA8TG9hZGVyIGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtpbWFnZVVybCAhPT0gJycgJiYgIWxvYWRpbmcgJiYgIXR5cGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNi8xMlwiPlxyXG4gICAgICAgICAgICA8RGFsbGVPdXRwdXQgaW1hZ2U9e2ltYWdlVXJsfSBub2lzZVR5cGU9e3Byb21wdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWxsZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTG9hZGVyIiwiRGFsbGVPdXRwdXQiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJEYWxsZSIsInByb21wdCIsInNldHByb21wdCIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInR5cGluZyIsInNldFR5cGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwic2VjdGlvblN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJkaXYiLCJzdHlsZSIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaW1hZ2UiLCJub2lzZVR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aiTool.jsx\n"));

/***/ })

});