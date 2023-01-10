"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { language , code  } = req.body;\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: generatePrompt(language, code),\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(language, code) {\n    return `translate the following code to ${language}$ : ${code}}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNLEVBQUNDLFNBQVEsRUFBRUMsS0FBSSxFQUFDLEdBQUdILElBQUlJLElBQUk7SUFDakMsTUFBTUMsYUFBYSxNQUFNTixPQUFPTyxnQkFBZ0IsQ0FBQztRQUMvQ0MsT0FBTztRQUNQQyxRQUFRQyxlQUFlUCxVQUFVQztRQUNqQ08sYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQVYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRVCxXQUFXVSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFBQztBQUNqRSxDQUFDO0FBRUQsU0FBU1IsZUFBZVAsUUFBUSxFQUFFQyxJQUFJLEVBQUU7SUFDdEMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFRCxTQUFTLElBQUksRUFBRUMsS0FBSyxDQUFDLENBQUM7QUFDbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxufSk7XHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zdCB7bGFuZ3VhZ2UsIGNvZGV9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcclxuICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXHJcbiAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KGxhbmd1YWdlLCBjb2RlKSxcclxuICAgIHRlbXBlcmF0dXJlOiAwLjYsXHJcbiAgICBtYXhfdG9rZW5zOiAyMDQ4LFxyXG4gIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChsYW5ndWFnZSwgY29kZSkge1xyXG4gIHJldHVybiBgdHJhbnNsYXRlIHRoZSBmb2xsb3dpbmcgY29kZSB0byAke2xhbmd1YWdlfSQgOiAke2NvZGV9fWA7XHJcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJsYW5ndWFnZSIsImNvZGUiLCJib2R5IiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();