"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/test",{

/***/ "./pages/products/test/index.js":
/*!**************************************!*\
  !*** ./pages/products/test/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Product */ \"./components/Product.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/products/test/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/products/index.js\n\n\n\n\n\nfunction AllTestPage(param) {\n    let { products  } = param;\n    console.log(products);\n    let url = \"\";\n    products.map((product)=>{\n        console.log(product.fields.title);\n        console.log(product.fields.description);\n        console.log(product.fields.id);\n        console.log(product.fields.inStock);\n        console.log(product.fields.price);\n        console.log(product.fields.title);\n        product.fields.image.map((image)=>{\n            console.log(image.fields.file.url);\n            url = image.fields.file.url;\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"All Products\"\n            }, void 0, false, {\n                fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().products),\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/products/[id]\",\n                        as: \"/products/\".concat(product.fields.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().product),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                ...product.fields\n                            }, void 0, false, {\n                                fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, product.fields.id, false, {\n                        fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nicholashooley/Documents/refresh-gaming-next-app/refresh-gaming-next-app/pages/products/test/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = AllTestPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllTestPage);\nvar _c;\n$RefreshReg$(_c, \"AllTestPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy90ZXN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7QUFDMUI7QUFBMEI7QUFDRztBQUVxQjtBQUNWO0FBRXhDLFNBQVNJLFlBQVksS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7SUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixJQUFJRyxNQUFNO0lBRVZILFNBQVNJLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO1FBQ3hCSixRQUFRQyxHQUFHLENBQUNHLFFBQVFDLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ04sUUFBUUMsR0FBRyxDQUFDRyxRQUFRQyxNQUFNLENBQUNFLFdBQVc7UUFDdENQLFFBQVFDLEdBQUcsQ0FBQ0csUUFBUUMsTUFBTSxDQUFDRyxFQUFFO1FBQzdCUixRQUFRQyxHQUFHLENBQUNHLFFBQVFDLE1BQU0sQ0FBQ0ksT0FBTztRQUNsQ1QsUUFBUUMsR0FBRyxDQUFDRyxRQUFRQyxNQUFNLENBQUNLLEtBQUs7UUFDaENWLFFBQVFDLEdBQUcsQ0FBQ0csUUFBUUMsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDRixRQUFRQyxNQUFNLENBQUNNLEtBQUssQ0FBQ1IsR0FBRyxDQUFDLENBQUNRLFFBQVU7WUFDbENYLFFBQVFDLEdBQUcsQ0FBQ1UsTUFBTU4sTUFBTSxDQUFDTyxJQUFJLENBQUNWLEdBQUc7WUFDakNBLE1BQU1TLE1BQU1OLE1BQU0sQ0FBQ08sSUFBSSxDQUFDVixHQUFHO1FBQzdCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBV2pCLG9FQUFnQjs7MEJBQzlCLDhEQUFDbUI7Z0JBQUdGLFdBQVdqQixnRUFBWTswQkFBRTs7Ozs7OzBCQUM3Qiw4REFBQ2dCO2dCQUFJQyxXQUFXakIsbUVBQWU7MEJBQzVCRSxTQUFTSSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNULGtEQUFJQTt3QkFDSHNCLE1BQUs7d0JBQ0xDLElBQUksYUFBK0IsT0FBbEJkLFFBQVFDLE1BQU0sQ0FBQ0csRUFBRTtrQ0FHbEMsNEVBQUNLOzRCQUFJQyxXQUFXakIsa0VBQWM7c0NBQzVCLDRFQUFDRCwyREFBT0E7Z0NBQUUsR0FBR1EsUUFBUUMsTUFBTTs7Ozs7Ozs7Ozs7dUJBSHhCRCxRQUFRQyxNQUFNLENBQUNHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEM7S0FwQ1NWOztBQWlEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy90ZXN0L2luZGV4LmpzP2NiMGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcHJvZHVjdHMvaW5kZXguanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICcuLi8uLi9hcGkvcHJvZHVjdHMnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQWxsVGVzdFBhZ2UoeyBwcm9kdWN0cyB9KSB7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcblxuICBsZXQgdXJsID0gJyc7XG5cbiAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdC5maWVsZHMudGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuZmllbGRzLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0LmZpZWxkcy5pZCk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdC5maWVsZHMuaW5TdG9jayk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdC5maWVsZHMucHJpY2UpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuZmllbGRzLnRpdGxlKTtcbiAgICBwcm9kdWN0LmZpZWxkcy5pbWFnZS5tYXAoKGltYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpbWFnZS5maWVsZHMuZmlsZS51cmwpO1xuICAgICAgdXJsID0gaW1hZ2UuZmllbGRzLmZpbGUudXJsO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+QWxsIFByb2R1Y3RzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHN9PlxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHMvW2lkXVwiXG4gICAgICAgICAgICBhcz17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuZmllbGRzLmlkfWB9XG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QuZmllbGRzLmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XG4gICAgICAgICAgICAgIDxQcm9kdWN0IHsuLi5wcm9kdWN0LmZpZWxkc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBGZXRjaCB0aGUgcHJvZHVjdHMgZnJvbSB0aGUgYXBpXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxUZXN0UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJQcm9kdWN0Iiwic3R5bGVzIiwiQWxsVGVzdFBhZ2UiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJtYXAiLCJwcm9kdWN0IiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiaW5TdG9jayIsInByaWNlIiwiaW1hZ2UiLCJmaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJocmVmIiwiYXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/test/index.js\n"));

/***/ })

});