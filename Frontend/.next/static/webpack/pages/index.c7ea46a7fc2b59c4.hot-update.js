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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/ImageViewer */ \"./Components/ImageViewer.jsx\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Firebase/Config */ \"./Firebase/Config.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), image = ref1[0], setImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref2[0], setOpen = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), edgeDetection = ref3[0], setEdgeDetection = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), view = ref4[0], setView = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        noise: \"\",\n        fiter: \"\"\n    }), data = ref5[0], setData = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref6[0], setLoading = ref6[1];\n    var uploadImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var file, storageRef, metadata;\n            return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (event.target.files) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        setLoading(true);\n                        file = event.target.files[0];\n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_Firebase_Config__WEBPACK_IMPORTED_MODULE_5__.storage, \"Images/\".concat(file.name));\n                        metadata = {\n                            contentType: file.type\n                        };\n                        _ctx.next = 8;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytes)(storageRef, file, metadata);\n                    case 8:\n                        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef).then(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                                return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            setImage(res);\n                                            setOpen(true);\n                                        case 2:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(res) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }());\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function uploadImage(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: open,\n                setOpen: setOpen,\n                imageUrl: image,\n                setImage: setImage,\n                setEdgeDetection: setEdgeDetection,\n                setLoading: setLoading,\n                setView: setView,\n                setBack: setBack\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"h-screen bg-gradient-to-bl from-[#c11e38] to-[#130e91] flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Loader, {\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    image === \"\" && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: uploadImage,\n                            className: \"file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 font-bold file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this),\n                    image !== \"\" && view === true && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: image,\n                                noiseType: \"Original Image \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ArrowNarrowRightIcon, {\n                                className: \"h-40 w-40 text-indigo-700\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this),\n                            edgeDetection !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: edgeDetection,\n                                noiseType: \"Edge Detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, _this),\n                            back && edgeDetection === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                image: back,\n                                noiseType: \"Hello world\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"azS+HNGAtBngyaBR1+P0VTyLIHM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFQSxPQUFPOzs7Ozs2QkFBSTtvQkFDM0JiLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQ2EsT0FBTyxrQkFDdkIsOERBQUNjLEtBQUc7a0NBQ0YsNEVBQUNJLE9BQUs7NEJBQ0pQLElBQUksRUFBQyxNQUFNOzRCQUNYUSxRQUFRLEVBQUVqQixXQUFXOzRCQUNyQmEsU0FBUyxFQUFDLG1VQWNNOzs7OztpQ0FDaEI7Ozs7OzZCQUNFO29CQUVQNUIsS0FBSyxLQUFLLEVBQUUsSUFBSU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDTyxPQUFPLGtCQUN4Qyw4REFBQ2MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7MENBQ2hDLDhEQUFDakMsK0NBQU07Z0NBQUNLLEtBQUssRUFBRUEsS0FBSztnQ0FBRWlDLFNBQVMsRUFBQyxpQkFBa0I7Ozs7O3FDQUFHOzBDQUNyRCw4REFBQ3BDLHdFQUFvQjtnQ0FBQytCLFNBQVMsRUFBQywyQkFBMkI7Ozs7O3FDQUFHOzRCQUM3RHhCLGFBQWEsS0FBSyxFQUFFLGtCQUNuQiw4REFBQ1QsK0NBQU07Z0NBQUNLLEtBQUssRUFBRUksYUFBYTtnQ0FBRTZCLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O3FDQUFHOzRCQUU1REMsSUFBSSxJQUFJOUIsYUFBYSxLQUFLLEVBQUUsa0JBQzNCLDhEQUFDVCwrQ0FBTTtnQ0FBQ0ssS0FBSyxFQUFFa0MsSUFBSTtnQ0FBRUQsU0FBUyxFQUFDLGFBQWE7Ozs7O3FDQUFHOzs7Ozs7NkJBRTdDOzs7Ozs7cUJBRUo7Ozs7OzthQUNGLENBQ1A7Q0FDRjtHQWhGS2xDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQWtGViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlVmlld2VyIGZyb20gJy4uL0NvbXBvbmVudHMvSW1hZ2VWaWV3ZXInXHJcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL0ZpcmViYXNlL0NvbmZpZydcclxuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnLi4vQ29tcG9uZW50cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBcnJvd05hcnJvd1JpZ2h0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL0NvbXBvbmVudHMnXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZWRnZURldGVjdGlvbiwgc2V0RWRnZURldGVjdGlvbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgbm9pc2U6ICcnLFxyXG4gICAgZml0ZXI6ICcnLFxyXG4gIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5maWxlcykgcmV0dXJuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGBJbWFnZXMvJHtmaWxlLm5hbWV9YClcclxuICAgIGNvbnN0IG1ldGFkYXRhID0ge1xyXG4gICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxyXG4gICAgfVxyXG4gICAgYXdhaXQgdXBsb2FkQnl0ZXMoc3RvcmFnZVJlZiwgZmlsZSwgbWV0YWRhdGEpXHJcbiAgICBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgc2V0SW1hZ2UocmVzKVxyXG4gICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxJbWFnZVZpZXdlclxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cclxuICAgICAgICBpbWFnZVVybD17aW1hZ2V9XHJcbiAgICAgICAgc2V0SW1hZ2U9e3NldEltYWdlfVxyXG4gICAgICAgIHNldEVkZ2VEZXRlY3Rpb249e3NldEVkZ2VEZXRlY3Rpb259XHJcbiAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgICBzZXRWaWV3PXtzZXRWaWV3fVxyXG4gICAgICAgIHNldEJhY2s9e3NldEJhY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gIGJnLWdyYWRpZW50LXRvLWJsIGZyb20tWyNjMTFlMzhdIHRvLVsjMTMwZTkxXSBmbGV4ICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICB7LyogSGVyZSBpcyAgKi99XHJcbiAgICAgICAgPExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgIHtpbWFnZSA9PT0gJycgJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlOmJnLWdyYWRpZW50LXRvLWIgXHJcbiAgICAgICAgICAgICBmaWxlOmZyb20tYmx1ZS01MDBcclxuICAgICAgICAgICAgIGZpbGU6dG8tYmx1ZS02MDAgXHJcbiAgICAgICAgICAgICBmaWxlOnB4LTYgZmlsZTpweS0zXHJcbiAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgIGZpbGU6bS01IFxyXG4gICAgICAgICAgICAgZmlsZTpib3JkZXItbm9uZVxyXG4gICAgICAgICAgICAgZmlsZTpyb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICBmaWxlOnRleHQtd2hpdGUgXHJcbiAgICAgICAgICAgICBmaWxlOmN1cnNvci1wb2ludGVyIGZpbGU6c2hhZG93LWxnXHJcbiAgICAgICAgICAgZmlsZTpzaGFkb3ctYmx1ZS02MDAvNTAgYmctZ3JhZGllbnQtdG8tYnJcclxuICAgICAgICAgICBmcm9tLWdyYXktNjAwIHRvLWdyYXktNzAwXHJcbiAgICAgICAgICAgdGV4dC13aGl0ZS84MCByb3VuZGVkLWZ1bGwgXHJcbiAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBzaGFkb3cteGxcclxuICAgICAgICAgICBzaGFkb3ctZ3JheS03MDAvNjBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7aW1hZ2UgIT09ICcnICYmIHZpZXcgPT09IHRydWUgJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8T3V0cHV0IGltYWdlPXtpbWFnZX0gbm9pc2VUeXBlPVwiT3JpZ2luYWwgSW1hZ2UgIFwiIC8+XHJcbiAgICAgICAgICAgIDxBcnJvd05hcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJoLTQwIHctNDAgdGV4dC1pbmRpZ28tNzAwXCIgLz5cclxuICAgICAgICAgICAge2VkZ2VEZXRlY3Rpb24gIT09ICcnICYmIChcclxuICAgICAgICAgICAgICA8T3V0cHV0IGltYWdlPXtlZGdlRGV0ZWN0aW9ufSBub2lzZVR5cGU9XCJFZGdlIERldGVjdGlvblwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtiYWNrICYmIGVkZ2VEZXRlY3Rpb24gPT09ICcnICYmIChcclxuICAgICAgICAgICAgICA8T3V0cHV0IGltYWdlPXtiYWNrfSBub2lzZVR5cGU9XCJIZWxsbyB3b3JsZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlVmlld2VyIiwicmVmIiwidXBsb2FkQnl0ZXMiLCJnZXREb3dubG9hZFVSTCIsInN0b3JhZ2UiLCJPdXRwdXQiLCJheGlvcyIsIkFycm93TmFycm93UmlnaHRJY29uIiwiTG9hZGVyIiwiSG9tZSIsImltYWdlIiwic2V0SW1hZ2UiLCJvcGVuIiwic2V0T3BlbiIsImVkZ2VEZXRlY3Rpb24iLCJzZXRFZGdlRGV0ZWN0aW9uIiwidmlldyIsInNldFZpZXciLCJ1cmwiLCJub2lzZSIsImZpdGVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEltYWdlIiwiZXZlbnQiLCJmaWxlIiwic3RvcmFnZVJlZiIsIm1ldGFkYXRhIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiY29udGVudFR5cGUiLCJ0eXBlIiwidGhlbiIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlVXJsIiwic2V0QmFjayIsImlucHV0Iiwib25DaGFuZ2UiLCJub2lzZVR5cGUiLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});