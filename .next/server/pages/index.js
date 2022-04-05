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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst App = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: props.gists.map((gist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: gist.description\n            }, gist.id, false, {\n                fileName: \"/Users/alejandrotoledo/Documents/Study Books, projects and notes/React Deisgn Patterns and best practices/SSR/next-project/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/alejandrotoledo/Documents/Study Books, projects and notes/React Deisgn Patterns and best practices/SSR/next-project/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nApp.getInitialProps = async ()=>{\n    const url = \"https://api.github.com/users/gaearon/gists\";\n    const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);\n    const gists = await response.json();\n    return {\n        gists\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXFDO0FBRXJDLE1BQU1DLEdBQUcsR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDckIscUJBQ0UsOERBQUNDLElBQUU7a0JBQ0FELEtBQUssQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDcEIsOERBQUNDLElBQUU7MEJBQWdCRCxJQUFJLENBQUNFLFdBQVc7ZUFBMUJGLElBQUksQ0FBQ0csRUFBRTs7Ozt5QkFBeUI7UUFDMUMsQ0FBQzs7Ozs7aUJBQ0MsQ0FDTDtDQUNIO0FBRURSLEdBQUcsQ0FBQ1MsZUFBZSxHQUFHLFVBQVk7SUFDaEMsTUFBTUMsR0FBRyxHQUFHLDRDQUE0QztJQUN4RCxNQUFNQyxRQUFRLEdBQUcsTUFBTVosdURBQUssQ0FBQ1csR0FBRyxDQUFDO0lBQ2pDLE1BQU1QLEtBQUssR0FBRyxNQUFNUSxRQUFRLENBQUNDLElBQUksRUFBRTtJQUNuQyxPQUFPO1FBQ0xULEtBQUs7S0FDTixDQUFDO0NBQ0gsQ0FBQztBQUVGLGlFQUFlSCxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Byb3BzLmdpc3RzLm1hcCgoZ2lzdCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtnaXN0LmlkfT57Z2lzdC5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dhZWFyb24vZ2lzdHMnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGdpc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ge1xuICAgIGdpc3RzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbImZldGNoIiwiQXBwIiwicHJvcHMiLCJ1bCIsImdpc3RzIiwibWFwIiwiZ2lzdCIsImxpIiwiZGVzY3JpcHRpb24iLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInVybCIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();