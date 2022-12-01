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

/***/ "./Components/ImageViewer.jsx":
/*!************************************!*\
  !*** ./Components/ImageViewer.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./Components/Toggle.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ImageViewer = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), modelCase = ref[0], setModelCase = ref[1];\n    var cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var open = props.open, imageUrl = props.imageUrl, setView = props.setView, setOpen = props.setOpen, setEdgeDetection = props.setEdgeDetection, setLoading = props.setLoading, setBack = props.setBack;\n    var edgeClick = function() {\n        setOpen(false);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://192.168.3.33:5000/edgeDetection\", {\n            image: imageUrl\n        }).then(function(res) {\n            setEdgeDetection(res.data);\n            setView(true);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    var noiseDetectionClick = function() {\n        setOpen(false);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://192.168.3.33:5000/noise\", {\n            image: imageUrl,\n            modelCase: modelCase\n        }).then(function(res) {\n            setData(res.data);\n            setView(true);\n            setLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {\n        show: open,\n        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n            as: \"div\",\n            className: \"fixed z-10 inset-0 overflow-y-auto\",\n            initialFocus: cancelButtonRef,\n            onClose: setOpen,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        enter: \"ease-out duration-300\",\n                        enterFrom: \"opacity-0\",\n                        enterTo: \"opacity-100\",\n                        leave: \"ease-in duration-200\",\n                        leaveFrom: \"opacity-100\",\n                        leaveTo: \"opacity-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Overlay, {\n                            className: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"hidden sm:inline-block sm:align-middle sm:h-screen\",\n                        \"aria-hidden\": \"true\",\n                        children: \"​\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                        enter: \"ease-out duration-300\",\n                        enterFrom: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\",\n                        enterTo: \"opacity-100 translate-y-0 sm:scale-100\",\n                        leave: \"ease-in duration-200\",\n                        leaveFrom: \"opacity-100 translate-y-0 sm:scale-100\",\n                        leaveTo: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-1 relative inline-block align-bottom bg-white rounded-lg bg-opacity-40 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imageUrl,\n                                    className: \"w-full w-full rounded-t-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-md font-bold\",\n                                            children: [\n                                                \" \",\n                                                \"Which model do you think is the closest?\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        modelCase: modelCase,\n                                        setModelCase: setModelCase\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm break-normal italic\",\n                                                children: \"Model A: Salt&Pepper/Speckle\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm break-normal italic\",\n                                                children: \"Model B: Exponential/Guassian/Rayleigh/Uniform/Poisson\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gray-50 px-4 py-3 sm:px-6 sm:flex flex justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-[#ffffff] font-bold bg-[#00A884] hover:bg-[#0b5e4c] focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            onClick: function() {\n                                                return edgeClick();\n                                            },\n                                            ref: cancelButtonRef,\n                                            children: \"Edge Detection\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-[#ffffff] font-bold bg-[#130e91] hover:bg-[#04015c] focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            onClick: function() {\n                                                return noiseDetectionClick();\n                                            },\n                                            children: \"Restore Image\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sawwa\\\\OneDrive\\\\Desktop\\\\New folder (8)\\\\Front\\\\Components\\\\ImageViewer.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(ImageViewer, \"JYviziK8+ApBEM+PND75ysK72/A=\");\n_c = ImageViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageViewer);\nvar _c;\n$RefreshReg$(_c, \"ImageViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs0Q0FDTEMsSUFBSSxFQUFDLFFBQVE7NENBQ2JqQixTQUFTLEVBQUMsK01BQWlOOzRDQUMzTmtCLE9BQU8sRUFBRTt1REFBTWpDLFNBQVMsRUFBRTs2Q0FBQTs0Q0FDMUJrQyxHQUFHLEVBQUUxQyxlQUFlO3NEQUNyQixnQkFFRDs7Ozs7aURBQVM7c0RBQ1QsOERBQUN1QyxRQUFNOzRDQUNMQyxJQUFJLEVBQUMsUUFBUTs0Q0FDYmpCLFNBQVMsRUFBQywrTUFBaU47NENBQzNOa0IsT0FBTyxFQUFFO3VEQUFNdkIsbUJBQW1CLEVBQUU7NkNBQUE7c0RBQ3JDLGVBRUQ7Ozs7O2lEQUFTOzs7Ozs7eUNBQ0w7Ozs7OztpQ0FDRjs7Ozs7NkJBQ1c7Ozs7OztxQkFDZjs7Ozs7aUJBQ0M7Ozs7O2FBQ08sQ0FDbkI7Q0FDRjtHQWhJS3RCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWlJakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9JbWFnZVZpZXdlci5qc3g/ZDFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9Ub2dnbGUnXHJcbmNvbnN0IEltYWdlVmlld2VyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW21vZGVsQ2FzZSwgc2V0TW9kZWxDYXNlXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvblJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHtcclxuICAgIG9wZW4sXHJcbiAgICBpbWFnZVVybCxcclxuICAgIHNldFZpZXcsXHJcbiAgICBzZXRPcGVuLFxyXG4gICAgc2V0RWRnZURldGVjdGlvbixcclxuICAgIHNldExvYWRpbmcsXHJcbiAgICBzZXRCYWNrLFxyXG4gIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGVkZ2VDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnaHR0cDovLzE5Mi4xNjguMy4zMzo1MDAwL2VkZ2VEZXRlY3Rpb24nLCB7XHJcbiAgICAgICAgaW1hZ2U6IGltYWdlVXJsLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0RWRnZURldGVjdGlvbihyZXMuZGF0YSlcclxuICAgICAgICBzZXRWaWV3KHRydWUpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG5vaXNlRGV0ZWN0aW9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoJ2h0dHA6Ly8xOTIuMTY4LjMuMzM6NTAwMC9ub2lzZScsIHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VVcmwsXHJcbiAgICAgICAgbW9kZWxDYXNlOiBtb2RlbENhc2UsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhKVxyXG4gICAgICAgIHNldFZpZXcodHJ1ZSlcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e29wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgIDxEaWFsb2dcclxuICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgei0xMCBpbnNldC0wIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgaW5pdGlhbEZvY3VzPXtjYW5jZWxCdXR0b25SZWZ9XHJcbiAgICAgICAgb25DbG9zZT17c2V0T3Blbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB0LTQgcHgtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTBcIj5cclxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIiAvPlxyXG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206YWxpZ24tbWlkZGxlIHNtOmgtc2NyZWVuXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIHJlbGF0aXZlIGlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyBiZy1vcGFjaXR5LTQwIHRleHQtbGVmdCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBzbTpteS04IHNtOmFsaWduLW1pZGRsZSBzbTptYXgtdy1sZyBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT1cInctZnVsbCB3LWZ1bGwgcm91bmRlZC10LW1kXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICBXaGljaCBtb2RlbCBkbyB5b3UgdGhpbmsgaXMgdGhlIGNsb3Nlc3Q/XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFRvZ2dsZSBtb2RlbENhc2U9e21vZGVsQ2FzZX0gc2V0TW9kZWxDYXNlPXtzZXRNb2RlbENhc2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gYnJlYWstbm9ybWFsIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1vZGVsIEE6IFNhbHQmUGVwcGVyL1NwZWNrbGVcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBicmVhay1ub3JtYWwgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9kZWwgQjogRXhwb25lbnRpYWwvR3Vhc3NpYW4vUmF5bGVpZ2gvVW5pZm9ybS9Qb2lzc29uXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHB4LTQgcHktMyBzbTpweC02IHNtOmZsZXggZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyB3LWZ1bGwgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTIgIHRleHQtWyNmZmZmZmZdIGZvbnQtYm9sZCBiZy1bIzAwQTg4NF0gaG92ZXI6YmctWyMwYjVlNGNdIGZvY3VzOm91dGxpbmUtbm9uZSAgc206bXQtMCBzbTptbC0zIHNtOnctYXV0byBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRnZUNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17Y2FuY2VsQnV0dG9uUmVmfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFZGdlIERldGVjdGlvblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHctZnVsbCBpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTQgcHktMiAgdGV4dC1bI2ZmZmZmZl0gZm9udC1ib2xkIGJnLVsjMTMwZTkxXSBob3ZlcjpiZy1bIzA0MDE1Y10gZm9jdXM6b3V0bGluZS1ub25lICBzbTptdC0wIHNtOm1sLTMgc206dy1hdXRvIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBub2lzZURldGVjdGlvbkNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlc3RvcmUgSW1hZ2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VWaWV3ZXJcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiYXhpb3MiLCJUb2dnbGUiLCJJbWFnZVZpZXdlciIsInByb3BzIiwibW9kZWxDYXNlIiwic2V0TW9kZWxDYXNlIiwiY2FuY2VsQnV0dG9uUmVmIiwib3BlbiIsImltYWdlVXJsIiwic2V0VmlldyIsInNldE9wZW4iLCJzZXRFZGdlRGV0ZWN0aW9uIiwic2V0TG9hZGluZyIsInNldEJhY2siLCJlZGdlQ2xpY2siLCJwb3N0IiwiaW1hZ2UiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm5vaXNlRGV0ZWN0aW9uQ2xpY2siLCJzZXREYXRhIiwiUm9vdCIsInNob3ciLCJhcyIsImNsYXNzTmFtZSIsImluaXRpYWxGb2N1cyIsIm9uQ2xvc2UiLCJkaXYiLCJDaGlsZCIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsIk92ZXJsYXkiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJpbWciLCJzcmMiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ImageViewer.jsx\n"));

/***/ })

});