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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/ImageViewer */ \"./Components/ImageViewer.jsx\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Firebase/Config */ \"./Firebase/Config.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), image = ref1[0], setImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref2[0], setOpen = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), edgeDetection = ref3[0], setEdgeDetection = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), view = ref4[0], setView = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        noise: \"\",\n        filter: \"\"\n    }), data = ref5[0], setData = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref6[0], setLoading = ref6[1];\n    var uploadImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var file, storageRef, metadata;\n            return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (event.target.files) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        setLoading(true);\n                        file = event.target.files[0];\n                        storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_Firebase_Config__WEBPACK_IMPORTED_MODULE_5__.storage, \"Images/\".concat(file.name));\n                        metadata = {\n                            contentType: file.type\n                        };\n                        _ctx.next = 8;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytes)(storageRef, file, metadata);\n                    case 8:\n                        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef).then(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                                return C_Users_sawwa_OneDrive_Desktop_New_folder_8_Front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            setImage(res);\n                                            setOpen(true);\n                                        case 2:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(res) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }());\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function uploadImage(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(data.url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-cover items-center bg-top bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"/aiTool\",\n                className: \" items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-700 hover:text-gray-700\",\n                children: \"AiTool\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-cover flex justify-center items-center bg-top bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_ImageViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: open,\n                        setOpen: setOpen,\n                        imageUrl: image,\n                        setImage: setImage,\n                        setEdgeDetection: setEdgeDetection,\n                        setLoading: setLoading,\n                        setView: setView,\n                        setData: setData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Loader, {\n                                loading: loading\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            image === \"\" && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    onChange: uploadImage,\n                                    className: \"file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 font-bold file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this),\n                            image !== \"\" && view === true && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Original, {\n                                        image: image,\n                                        message: \"Original Image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ArrowNarrowRightIcon, {\n                                        className: \"h-40 w-40 text-indigo-700\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, _this),\n                                    edgeDetection !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Original, {\n                                        image: edgeDetection,\n                                        message: \"Canny edge detection\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, _this),\n                                    data.url !== \"\" && edgeDetection === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_6__.Output, {\n                                        data: data,\n                                        noiseType: \"Hello world\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\pages\\\\index.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"I6P7nHuFiix7Hg5OiQ48MjvXzbk=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU1Qzs7Ozs7OzZCQUVKOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ1A7Q0FDRjtHQTlGS3RDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQWdHViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlVmlld2VyIGZyb20gJy4uL0NvbXBvbmVudHMvSW1hZ2VWaWV3ZXInXHJcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL0ZpcmViYXNlL0NvbmZpZydcclxuaW1wb3J0IHsgT3V0cHV0LCBPcmlnaW5hbCB9IGZyb20gJy4uL0NvbXBvbmVudHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQXJyb3dOYXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9Db21wb25lbnRzJ1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2VkZ2VEZXRlY3Rpb24sIHNldEVkZ2VEZXRlY3Rpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXJsOiAnJyxcclxuICAgIG5vaXNlOiAnJyxcclxuICAgIGZpbHRlcjogJycsXHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmZpbGVzKSByZXR1cm5cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoc3RvcmFnZSwgYEltYWdlcy8ke2ZpbGUubmFtZX1gKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICB9XHJcbiAgICBhd2FpdCB1cGxvYWRCeXRlcyhzdG9yYWdlUmVmLCBmaWxlLCBtZXRhZGF0YSlcclxuICAgIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICBzZXRJbWFnZShyZXMpXHJcbiAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGRhdGEudXJsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNvdmVyICAgaXRlbXMtY2VudGVyICBiZy10b3AgYmctW3VybCgnaHR0cHM6Ly9tZWRpYS5pZG93bmxvYWRibG9nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9pUGFkLWdyYWRpZW50LXdhbGxwYXBlci1pZG93bmxvYWRibG9nLVY4YnlBcnRodXIxOTkyYXMuanBlZycpXVwiPlxyXG4gICAgICB7JyAnfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCIvYWlUb29sXCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgICBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiAgcHgtMSBwdC0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTEwMCBob3Zlcjpib3JkZXItZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgID5cclxuICAgICAgICBBaVRvb2xcclxuICAgICAgPC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1jb3ZlciAgZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBiZy10b3AgYmctW3VybCgnaHR0cHM6Ly9tZWRpYS5pZG93bmxvYWRibG9nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9pUGFkLWdyYWRpZW50LXdhbGxwYXBlci1pZG93bmxvYWRibG9nLVY4YnlBcnRodXIxOTkyYXMuanBlZycpXVwiPlxyXG4gICAgICAgIDxJbWFnZVZpZXdlclxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICBpbWFnZVVybD17aW1hZ2V9XHJcbiAgICAgICAgICBzZXRJbWFnZT17c2V0SW1hZ2V9XHJcbiAgICAgICAgICBzZXRFZGdlRGV0ZWN0aW9uPXtzZXRFZGdlRGV0ZWN0aW9ufVxyXG4gICAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cclxuICAgICAgICAgIHNldFZpZXc9e3NldFZpZXd9XHJcbiAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxyXG4gICAgICAgICAgey8qIEhlcmUgaXMgICovfVxyXG4gICAgICAgICAgPExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAge2ltYWdlID09PSAnJyAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlOmJnLWdyYWRpZW50LXRvLWIgXHJcbiAgICAgICAgICAgICBmaWxlOmZyb20tYmx1ZS01MDBcclxuICAgICAgICAgICAgIGZpbGU6dG8tYmx1ZS02MDAgXHJcbiAgICAgICAgICAgICBmaWxlOnB4LTYgZmlsZTpweS0zXHJcbiAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgIGZpbGU6bS01IFxyXG4gICAgICAgICAgICAgZmlsZTpib3JkZXItbm9uZVxyXG4gICAgICAgICAgICAgZmlsZTpyb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICBmaWxlOnRleHQtd2hpdGUgXHJcbiAgICAgICAgICAgICBmaWxlOmN1cnNvci1wb2ludGVyIGZpbGU6c2hhZG93LWxnXHJcbiAgICAgICAgICAgZmlsZTpzaGFkb3ctYmx1ZS02MDAvNTAgYmctZ3JhZGllbnQtdG8tYnJcclxuICAgICAgICAgICBmcm9tLWdyYXktNjAwIHRvLWdyYXktNzAwXHJcbiAgICAgICAgICAgdGV4dC13aGl0ZS84MCByb3VuZGVkLWZ1bGwgXHJcbiAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBzaGFkb3cteGxcclxuICAgICAgICAgICBzaGFkb3ctZ3JheS03MDAvNjBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtpbWFnZSAhPT0gJycgJiYgdmlldyA9PT0gdHJ1ZSAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8T3JpZ2luYWwgaW1hZ2U9e2ltYWdlfSBtZXNzYWdlPVwiT3JpZ2luYWwgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDxBcnJvd05hcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJoLTQwIHctNDAgdGV4dC1pbmRpZ28tNzAwXCIgLz5cclxuICAgICAgICAgICAgICB7ZWRnZURldGVjdGlvbiAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgPE9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtlZGdlRGV0ZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlPVwiQ2FubnkgZWRnZSBkZXRlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkYXRhLnVybCAhPT0gJycgJiYgZWRnZURldGVjdGlvbiA9PT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgPE91dHB1dCBkYXRhPXtkYXRhfSBub2lzZVR5cGU9XCJIZWxsbyB3b3JsZFwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlVmlld2VyIiwicmVmIiwidXBsb2FkQnl0ZXMiLCJnZXREb3dubG9hZFVSTCIsInN0b3JhZ2UiLCJPdXRwdXQiLCJPcmlnaW5hbCIsImF4aW9zIiwiQXJyb3dOYXJyb3dSaWdodEljb24iLCJMb2FkZXIiLCJIb21lIiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm9wZW4iLCJzZXRPcGVuIiwiZWRnZURldGVjdGlvbiIsInNldEVkZ2VEZXRlY3Rpb24iLCJ2aWV3Iiwic2V0VmlldyIsInVybCIsIm5vaXNlIiwiZmlsdGVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEltYWdlIiwiZXZlbnQiLCJmaWxlIiwic3RvcmFnZVJlZiIsIm1ldGFkYXRhIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiY29udGVudFR5cGUiLCJ0eXBlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImltYWdlVXJsIiwiaW5wdXQiLCJvbkNoYW5nZSIsIm1lc3NhZ2UiLCJub2lzZVR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});