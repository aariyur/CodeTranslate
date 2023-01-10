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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/index.module.css */ \"./pages/styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea */ \"./pages/textarea.jsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/react-codemirror */ \"./node_modules/@uiw/react-codemirror/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        event.preventDefault();\n        if (loading) {\n            return;\n        }\n        setLoading(true);\n        setResult(\"\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                language,\n                code\n            })\n        });\n        const data = await response.json();\n        setResult(data.result);\n        setLoading(false);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Code Translator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Code Translator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lang\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Programming Language\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"Programming Language\",\n                                        value: language,\n                                        onChange: (e)=>setLanguage(e.target.value),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"c++\",\n                                                children: \"C++\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"java\",\n                                                children: \"Java\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Python2\",\n                                                children: \"Python\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Python3\",\n                                                children: \"Python3\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"C\",\n                                                children: \"C\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"C#\",\n                                                children: \"Java\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Javascript\",\n                                                children: \"Javascript\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Ruby\",\n                                                children: \"Ruby\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Swift\",\n                                                children: \"Swift\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Go\",\n                                                children: \"Go\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Scala\",\n                                                children: \"Scala\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Kotlin\",\n                                                children: \"Kotlin\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"PHP\",\n                                                children: \"PHP\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Rust\",\n                                                children: \"Rust\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Typescript\",\n                                                children: \"Typescript\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Erlang\",\n                                                children: \"Erlang\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Elixir\",\n                                                children: \"Elixir\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Racket\",\n                                                children: \"Racket\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"Dart\",\n                                                children: \"Dart\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"codebox\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    value: code,\n                                    onChange: (editor)=>{\n                                        setCode(editor.getValue());\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Translate Code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Translating Code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_textarea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        value: result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Power\\\\OneDrive\\\\Desktop\\\\Demo Product\\\\chatbot\\\\openai-quickstart-node\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6hmmcan384J8RALpHLLsSvpBjO0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7MENBTXhELDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBU1IsT0FBTTs7Ozs7Ozs7Ozs7O29CQUU1QnpCLHlCQUNDLDhEQUFDZ0I7OzBDQUNDLDhEQUFDSTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDYzswQ0FBRTs7Ozs7Ozs7Ozs7O29CQUdOLENBQUNsQyx5QkFDQSw4REFBQ1IsaURBQVFBO3dCQUFDaUMsT0FBT3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztHQTVGdUJQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gXCJAdWl3L3JlYWN0LWNvZGVtaXJyb3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0UmVzdWx0KCcnKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2xhbmd1YWdlLCBjb2RlIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhci8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db2RlIFRyYW5zbGF0b3I8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDM+Q29kZSBUcmFuc2xhdG9yPC9oMz5cclxuICAgICAgICBcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Qcm9ncmFtbWluZyBMYW5ndWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjKytcIj5DKys8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YVwiPkphdmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHl0aG9uMlwiPlB5dGhvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQeXRob24zXCI+UHl0aG9uMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Qzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDI1wiPkphdmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YXNjcmlwdFwiPkphdmFzY3JpcHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUnVieVwiPlJ1Ynk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3dpZnRcIj5Td2lmdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHb1wiPkdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjYWxhXCI+U2NhbGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS290bGluXCI+S290bGluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIUFwiPlBIUDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSdXN0XCI+UnVzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUeXBlc2NyaXB0XCI+VHlwZXNjcmlwdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcmxhbmdcIj5Fcmxhbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRWxpeGlyXCI+RWxpeGlyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJhY2tldFwiPlJhY2tldDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEYXJ0XCI+RGFydDwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2RlYm94Jz5cclxuICAgICAgICAgICAgICA8Q29kZU1pcnJvciBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWRpdG9yKSA9PiB7c2V0Q29kZShlZGl0b3IuZ2V0VmFsdWUoKSk7fX1cclxuICAgICAgICAgICAgPjwvQ29kZU1pcnJvcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVHJhbnNsYXRlIENvZGVcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VHJhbnNsYXRpbmcgQ29kZTwvaDM+XHJcbiAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8VGV4dGFyZWEgdmFsdWU9e3Jlc3VsdH0+PC9UZXh0YXJlYT5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiVGV4dGFyZWEiLCJOYXZiYXIiLCJDb2RlTWlycm9yIiwiSG9tZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJjb2RlIiwic2V0Q29kZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZGl2IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwibGFiZWwiLCJzZWxlY3QiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJlZGl0b3IiLCJnZXRWYWx1ZSIsImlucHV0IiwidHlwZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});