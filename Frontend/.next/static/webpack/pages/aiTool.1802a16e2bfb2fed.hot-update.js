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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Dalle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), prompt = ref[0], setprompt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), imageUrl = ref1[0], setImageUrl = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), typing = ref3[0], setTyping = ref3[1];\n    var handleChange = function(e) {\n        setTyping(true);\n        var value = e.target.value;\n        setprompt(value);\n    };\n    var handleSubmit = function(e) {\n        setTyping(false);\n        setLoading(true);\n        e.preventDefault();\n        console.log(prompt);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\" http://192.168.43.250:5000/dalle\", {\n            prompt: prompt\n        }).then(function(res) {\n            setImageUrl(res.data);\n            console.log(res);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    var sectionStyle = {\n        backgroundImage: \"url(\".concat(BannerImage, \")\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: sectionStyle,\n        className: \" bg-gradient-to-bl from-[#c22547] to-[#130e91] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-start \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center mt-10 bg-white bg-opacity-30 p-4 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"input\",\n                                        value: prompt,\n                                        required: true,\n                                        autoComplete: \"off\",\n                                        name: \"prompt\",\n                                        onChange: handleChange,\n                                        placeholder: \" Please write a prompt of image content\",\n                                        className: \"file:bg-gradient-to-b h-12 w-96 font-bold file:rounded-sm file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \" rounded-full border-gray-300 shadow-sm px-4 py-4 text-[#ffffff] font-bold bg-blue-600 hover:bg-indigo-800 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            children: \"GO\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-10 items-center\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-max\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, _this),\n            imageUrl !== \"\" && !loading && !typing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-6/12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.DalleOutput, {\n                        image: imageUrl,\n                        noiseType: prompt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\aiTool.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Dalle, \"54jlZbZu0m682VPD4A/qPBmhGFQ=\");\n_c = Dalle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dalle);\nvar _c;\n$RefreshReg$(_c, \"Dalle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9haVRvb2wuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUF1QztBQUNkO0FBQzBCO0FBQ25ELElBQU1LLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUE0QkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqQ0ssTUFBTSxHQUFlTCxHQUFZLEdBQTNCLEVBQUVNLFNBQVMsR0FBSU4sR0FBWSxHQUFoQjtJQUN4QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQ08sUUFBUSxHQUFpQlAsSUFBWSxHQUE3QixFQUFFUSxXQUFXLEdBQUlSLElBQVksR0FBaEI7SUFDNUIsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENTLE9BQU8sR0FBZ0JULElBQWUsR0FBL0IsRUFBRVUsVUFBVSxHQUFJVixJQUFlLEdBQW5CO0lBQzFCLElBQTRCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5DVyxNQUFNLEdBQWVYLElBQWMsR0FBN0IsRUFBRVksU0FBUyxHQUFJWixJQUFjLEdBQWxCO0lBQ3hCLElBQU1hLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDMUJGLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDZixJQUFNLEtBQU8sR0FBS0UsQ0FBQyxDQUFDRSxNQUFNLENBQWxCRCxLQUFLO1FBQ2JULFNBQVMsQ0FBQ1MsS0FBSyxDQUFDO0tBQ2pCO0lBQ0QsSUFBTUUsWUFBWSxHQUFHLFNBQUNILENBQUMsRUFBSztRQUMxQkYsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNoQkYsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQkksQ0FBQyxDQUFDSSxjQUFjLEVBQUU7UUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixNQUFNLENBQUM7UUFDbkJKLGlEQUNPLENBQUMsbUNBQW1DLEVBQUU7WUFBRUksTUFBTSxFQUFFQSxNQUFNO1NBQUUsQ0FBQyxDQUM3RGlCLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7WUFDYmYsV0FBVyxDQUFDZSxHQUFHLENBQUNDLElBQUksQ0FBQztZQUNyQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQztZQUNoQmIsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNsQixDQUFDLENBQ0RlLEtBQUssQ0FBQyxTQUFDQyxHQUFHLEVBQUs7WUFDZFAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLEdBQUcsQ0FBQztTQUNqQixDQUFDO0tBQ0w7SUFDRCxJQUFJQyxZQUFZLEdBQUc7UUFDakJDLGVBQWUsRUFBRSxNQUFLLENBQWMsTUFBQyxDQUFiQyxXQUFXLEVBQUMsR0FBQyxDQUFDO0tBQ3ZDO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsS0FBSyxFQUFFSixZQUFZO1FBQ25CSyxTQUFTLEVBQUMsNkRBQTZEOzswQkFFdkUsOERBQUNGLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyxrQ0FBbUM7MEJBQ2hELDRFQUFDRixLQUFHOzhCQUNGLDRFQUFDRyxNQUFJO3dCQUFDQyxRQUFRLEVBQUVqQixZQUFZO2tDQUMxQiw0RUFBQ2EsS0FBRzs0QkFBQ0UsU0FBUyxFQUFDLDhFQUErRTs7OENBQzVGLDhEQUFDRixLQUFHOzhDQUNGLDRFQUFDSyxPQUFLO3dDQUNKQyxJQUFJLEVBQUMsTUFBTTt3Q0FDWEMsRUFBRSxFQUFDLE9BQU87d0NBQ1Z0QixLQUFLLEVBQUVWLE1BQU07d0NBQ2JpQyxRQUFRO3dDQUNSQyxZQUFZLEVBQUMsS0FBSzt3Q0FDbEJDLElBQUksRUFBQyxRQUFRO3dDQUNiQyxRQUFRLEVBQUU1QixZQUFZO3dDQUN0QjZCLFdBQVcsRUFBQyx5Q0FBeUM7d0NBQ3JEVixTQUFTLEVBQUMsMFBBYUc7Ozs7OzZDQUNiOzs7Ozt5Q0FDRTs4Q0FDTiw4REFBQ0YsS0FBRzs7d0NBQ0QsR0FBRztzREFDSiw4REFBQ2EsUUFBTTs0Q0FDTFAsSUFBSSxFQUFDLFFBQVE7NENBQ2JKLFNBQVMsRUFBQyxvS0FBdUs7c0RBRWxMLElBRUQ7Ozs7O2lEQUFTOzs7Ozs7eUNBQ0w7Ozs7OztpQ0FDRjs7Ozs7NkJBQ0Q7Ozs7O3lCQUNIOzs7OztxQkFDRjtZQUNMdkIsT0FBTyxrQkFDTiw4REFBQ3FCLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyx3Q0FBd0M7O29CQUNwRCxHQUFHO2tDQUNKLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsT0FBTztrQ0FDcEIsNEVBQUM5QiwrQ0FBTTs0QkFBQ08sT0FBTyxFQUFFQSxPQUFPOzs7OztpQ0FBSTs7Ozs7NkJBQ3hCOzs7Ozs7cUJBQ0Y7WUFHUEYsUUFBUSxLQUFLLEVBQUUsSUFBSSxDQUFDRSxPQUFPLElBQUksQ0FBQ0UsTUFBTSxrQkFDckMsOERBQUNtQixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsMkJBQTJCOzBCQUN4Qyw0RUFBQ0YsS0FBRztvQkFBQ0UsU0FBUyxFQUFDLFFBQVE7OEJBQ3JCLDRFQUFDN0Isb0RBQVc7d0JBQUN5QyxLQUFLLEVBQUVyQyxRQUFRO3dCQUFFc0MsU0FBUyxFQUFFeEMsTUFBTTs7Ozs7NkJBQUk7Ozs7O3lCQUMvQzs7Ozs7cUJBQ0Y7Ozs7OzthQUVKLENBQ1A7Q0FDRjtHQWhHS0QsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBa0dYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FpVG9vbC5qc3g/ODA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBMb2FkZXIsIERhbGxlT3V0cHV0IH0gZnJvbSAnLi4vQ29tcG9uZW50cydcclxuY29uc3QgRGFsbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb21wdCwgc2V0cHJvbXB0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3R5cGluZywgc2V0VHlwaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFR5cGluZyh0cnVlKVxyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldHByb21wdCh2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIHNldFR5cGluZyhmYWxzZSlcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2cocHJvbXB0KVxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoJyBodHRwOi8vMTkyLjE2OC40My4yNTA6NTAwMC9kYWxsZScsIHsgcHJvbXB0OiBwcm9tcHQgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsKHJlcy5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgdmFyIHNlY3Rpb25TdHlsZSA9IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckltYWdlfSlgLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17c2VjdGlvblN0eWxlfVxyXG4gICAgICBjbGFzc05hbWU9XCIgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1bI2MyMjU0N10gdG8tWyMxMzBlOTFdIG1pbi1oLXNjcmVlblwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEwICBiZy13aGl0ZSBiZy1vcGFjaXR5LTMwIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJvbXB0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgUGxlYXNlIHdyaXRlIGEgcHJvbXB0IG9mIGltYWdlIGNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlOmJnLWdyYWRpZW50LXRvLWIgXHJcbiAgICAgICAgICAgICAgICBoLTEyXHJcbiAgICAgICBcclxuICAgICAgICAgICAgIHctOTZcclxuICAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICBmaWxlOnJvdW5kZWQtc21cclxuICAgICAgICAgICBmaWxlOnRleHQtd2hpdGUgXHJcbiAgICAgICAgICAgICBmaWxlOmN1cnNvci1wb2ludGVyIGZpbGU6c2hhZG93LWxnXHJcbiAgICAgICAgICAgZmlsZTpzaGFkb3ctYmx1ZS02MDAvNTAgYmctZ3JhZGllbnQtdG8tYnJcclxuICAgICAgICAgICBmcm9tLWdyYXktNjAwIHRvLWdyYXktNzAwXHJcbiAgICAgICAgICAgdGV4dC13aGl0ZS84MCByb3VuZGVkLWZ1bGwgXHJcbiAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBzaGFkb3cteGxcclxuICAgICAgICAgICBzaGFkb3ctZ3JheS03MDAvNjAgXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1mdWxsICBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTQgcHktNCAgdGV4dC1bI2ZmZmZmZl0gZm9udC1ib2xkIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWluZGlnby04MDAgZm9jdXM6b3V0bGluZS1ub25lICBzbTptdC0wIHNtOm1sLTMgc206dy1hdXRvIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHT1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4XCI+XHJcbiAgICAgICAgICAgIDxMb2FkZXIgbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2ltYWdlVXJsICE9PSAnJyAmJiAhbG9hZGluZyAmJiAhdHlwaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02LzEyXCI+XHJcbiAgICAgICAgICAgIDxEYWxsZU91dHB1dCBpbWFnZT17aW1hZ2VVcmx9IG5vaXNlVHlwZT17cHJvbXB0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbGxlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb2FkZXIiLCJEYWxsZU91dHB1dCIsIkRhbGxlIiwicHJvbXB0Iiwic2V0cHJvbXB0IiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidHlwaW5nIiwic2V0VHlwaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJzZWN0aW9uU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJJbWFnZSIsImRpdiIsInN0eWxlIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaW1hZ2UiLCJub2lzZVR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aiTool.jsx\n"));

/***/ })

});