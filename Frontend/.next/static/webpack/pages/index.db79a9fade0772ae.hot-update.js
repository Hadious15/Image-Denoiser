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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/ImageViewer */ \"./Components/ImageViewer.jsx\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Firebase/Config */ \"./Firebase/Config.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), image = ref1[0], setImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref2[0], setOpen = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), edgeDetection = ref3[0], setEdgeDetection = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), view = ref4[0], setView = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        noiseType: \"\",\n        filterApplied: \"\"\n    }), data = ref5[0], setData = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref6[0], setLoading = ref6[1];\n    var uploadImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var file, storageRef, metadata;\n            return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (event.target.files) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        setLoading(true);\n                        file = event.target.files[0];\n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_Firebase_Config__WEBPACK_IMPORTED_MODULE_5__.storage, \"Images/\".concat(file.name));\n                        metadata = {\n                            contentType: file.type\n                        };\n                        _ctx.next = 8;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytes)(storageRef, file, metadata);\n                    case 8:\n                        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef).then(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                                return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            setImage(res);\n                                            setOpen(true);\n                                        case 2:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(res) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }());\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function uploadImage(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: open,\n                setOpen: setOpen,\n                imageUrl: image,\n                setImage: setImage,\n                setEdgeDetection: setEdgeDetection,\n                setLoading: setLoading,\n                setView: setView,\n                setBack: setBack\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"h-screen bg-gradient-to-bl from-[#c11e38] to-[#130e91] flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Loader, {\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    image === \"\" && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: uploadImage,\n                            className: \"file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 font-bold file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this),\n                    image !== \"\" && view === true && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: image,\n                                noiseType: \"Original Image \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ArrowNarrowRightIcon, {\n                                className: \"h-40 w-40 text-indigo-700\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this),\n                            edgeDetection !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: edgeDetection,\n                                noiseType: \"Edge Detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, _this),\n                            back && edgeDetection === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: back,\n                                noiseType: \"Hello world\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"hfimaX2laCEKqfgLy2lmh4TEHDw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRUEsT0FBTzs7Ozs7NkJBQUk7b0JBQzNCYixLQUFLLEtBQUssRUFBRSxJQUFJLENBQUNhLE9BQU8sa0JBQ3ZCLDhEQUFDYyxLQUFHO2tDQUNGLDRFQUFDSSxPQUFLOzRCQUNKUCxJQUFJLEVBQUMsTUFBTTs0QkFDWFEsUUFBUSxFQUFFakIsV0FBVzs0QkFDckJhLFNBQVMsRUFBQyxtVUFjTTs7Ozs7aUNBQ2hCOzs7Ozs2QkFDRTtvQkFFUDVCLEtBQUssS0FBSyxFQUFFLElBQUlNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQ08sT0FBTyxrQkFDeEMsOERBQUNjLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBDQUNoQyw4REFBQ2pDLCtDQUFNO2dDQUFDSyxLQUFLLEVBQUVBLEtBQUs7Z0NBQUVTLFNBQVMsRUFBQyxpQkFBa0I7Ozs7O3FDQUFHOzBDQUNyRCw4REFBQ1osd0VBQW9CO2dDQUFDK0IsU0FBUyxFQUFDLDJCQUEyQjs7Ozs7cUNBQUc7NEJBQzdEeEIsYUFBYSxLQUFLLEVBQUUsa0JBQ25CLDhEQUFDVCwrQ0FBTTtnQ0FBQ0ssS0FBSyxFQUFFSSxhQUFhO2dDQUFFSyxTQUFTLEVBQUMsZ0JBQWdCOzs7OztxQ0FBRzs0QkFFNUR3QixJQUFJLElBQUk3QixhQUFhLEtBQUssRUFBRSxrQkFDM0IsOERBQUNULCtDQUFNO2dDQUFDSyxLQUFLLEVBQUVpQyxJQUFJO2dDQUFFeEIsU0FBUyxFQUFDLGFBQWE7Ozs7O3FDQUFHOzs7Ozs7NkJBRTdDOzs7Ozs7cUJBRUo7Ozs7OzthQUNGLENBQ1A7Q0FDRjtHQWhGS1YsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBa0ZWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2VWaWV3ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9JbWFnZVZpZXdlcidcclxuaW1wb3J0IHsgcmVmLCB1cGxvYWRCeXRlcywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vRmlyZWJhc2UvQ29uZmlnJ1xyXG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICcuLi9Db21wb25lbnRzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEFycm93TmFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vQ29tcG9uZW50cydcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlZGdlRGV0ZWN0aW9uLCBzZXRFZGdlRGV0ZWN0aW9uXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVybDogJycsXHJcbiAgICBub2lzZVR5cGU6ICcnLFxyXG4gICAgZmlsdGVyQXBwbGllZDogJycsXHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmZpbGVzKSByZXR1cm5cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgYEltYWdlcy8ke2ZpbGUubmFtZX1gKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICB9XHJcbiAgICBhd2FpdCB1cGxvYWRCeXRlcyhzdG9yYWdlUmVmLCBmaWxlLCBtZXRhZGF0YSlcclxuICAgIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICBzZXRJbWFnZShyZXMpXHJcbiAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPEltYWdlVmlld2VyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgIGltYWdlVXJsPXtpbWFnZX1cclxuICAgICAgICBzZXRJbWFnZT17c2V0SW1hZ2V9XHJcbiAgICAgICAgc2V0RWRnZURldGVjdGlvbj17c2V0RWRnZURldGVjdGlvbn1cclxuICAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgIHNldFZpZXc9e3NldFZpZXd9XHJcbiAgICAgICAgc2V0QmFjaz17c2V0QmFja31cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiAgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1bI2MxMWUzOF0gdG8tWyMxMzBlOTFdIGZsZXggIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIHsvKiBIZXJlIGlzICAqL31cclxuICAgICAgICA8TG9hZGVyIGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAge2ltYWdlID09PSAnJyAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGU6YmctZ3JhZGllbnQtdG8tYiBcclxuICAgICAgICAgICAgIGZpbGU6ZnJvbS1ibHVlLTUwMFxyXG4gICAgICAgICAgICAgZmlsZTp0by1ibHVlLTYwMCBcclxuICAgICAgICAgICAgIGZpbGU6cHgtNiBmaWxlOnB5LTNcclxuICAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgZmlsZTptLTUgXHJcbiAgICAgICAgICAgICBmaWxlOmJvcmRlci1ub25lXHJcbiAgICAgICAgICAgICBmaWxlOnJvdW5kZWQtZnVsbFxyXG4gICAgICAgICAgIGZpbGU6dGV4dC13aGl0ZSBcclxuICAgICAgICAgICAgIGZpbGU6Y3Vyc29yLXBvaW50ZXIgZmlsZTpzaGFkb3ctbGdcclxuICAgICAgICAgICBmaWxlOnNoYWRvdy1ibHVlLTYwMC81MCBiZy1ncmFkaWVudC10by1iclxyXG4gICAgICAgICAgIGZyb20tZ3JheS02MDAgdG8tZ3JheS03MDBcclxuICAgICAgICAgICB0ZXh0LXdoaXRlLzgwIHJvdW5kZWQtZnVsbCBcclxuICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIHNoYWRvdy14bFxyXG4gICAgICAgICAgIHNoYWRvdy1ncmF5LTcwMC82MFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtpbWFnZSAhPT0gJycgJiYgdmlldyA9PT0gdHJ1ZSAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxPdXRwdXQgaW1hZ2U9e2ltYWdlfSBub2lzZVR5cGU9XCJPcmlnaW5hbCBJbWFnZSAgXCIgLz5cclxuICAgICAgICAgICAgPEFycm93TmFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNDAgdy00MCB0ZXh0LWluZGlnby03MDBcIiAvPlxyXG4gICAgICAgICAgICB7ZWRnZURldGVjdGlvbiAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgIDxPdXRwdXQgaW1hZ2U9e2VkZ2VEZXRlY3Rpb259IG5vaXNlVHlwZT1cIkVkZ2UgRGV0ZWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2JhY2sgJiYgZWRnZURldGVjdGlvbiA9PT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgIDxPdXRwdXQgaW1hZ2U9e2JhY2t9IG5vaXNlVHlwZT1cIkhlbGxvIHdvcmxkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2VWaWV3ZXIiLCJyZWYiLCJ1cGxvYWRCeXRlcyIsImdldERvd25sb2FkVVJMIiwic3RvcmFnZSIsIk91dHB1dCIsImF4aW9zIiwiQXJyb3dOYXJyb3dSaWdodEljb24iLCJMb2FkZXIiLCJIb21lIiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm9wZW4iLCJzZXRPcGVuIiwiZWRnZURldGVjdGlvbiIsInNldEVkZ2VEZXRlY3Rpb24iLCJ2aWV3Iiwic2V0VmlldyIsInVybCIsIm5vaXNlVHlwZSIsImZpbHRlckFwcGxpZWQiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXBsb2FkSW1hZ2UiLCJldmVudCIsImZpbGUiLCJzdG9yYWdlUmVmIiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJjb250ZW50VHlwZSIsInR5cGUiLCJ0aGVuIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2VVcmwiLCJzZXRCYWNrIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});