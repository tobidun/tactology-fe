"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/departments/page",{

/***/ "(app-pages-browser)/./lib/graphql/queries.ts":
/*!********************************!*\
  !*** ./lib/graphql/queries.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CREATE_DEPARTMENT: function() { return /* binding */ CREATE_DEPARTMENT; },\n/* harmony export */   DELETE_DEPARTMENT: function() { return /* binding */ DELETE_DEPARTMENT; },\n/* harmony export */   GET_DEPARTMENTS: function() { return /* binding */ GET_DEPARTMENTS; },\n/* harmony export */   GET_DEPARTMENT_BY_ID: function() { return /* binding */ GET_DEPARTMENT_BY_ID; },\n/* harmony export */   LOGIN: function() { return /* binding */ LOGIN; },\n/* harmony export */   UPDATE_DEPARTMENT: function() { return /* binding */ UPDATE_DEPARTMENT; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/graphql-tag/lib/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation login($username: String!, $password: String!) {\\n    login(username: $username, password: $password)\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query GetDepartments {\\n    departments {\\n      id\\n      name\\n      createdBy {\\n        id\\n        username\\n      }\\n      subDepartments {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query department($id: Float!) {\\n    department(id: $id) {\\n      name\\n      subDepartments {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation createDepartment($input: CreateDepartmentInput!) {\\n    createDepartment(input: $input) {\\n      id\\n      name\\n      subDepartments {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation updateDepartment($input: UpdateDepartmentInput!) {\\n    updateDepartment(input: $input) {\\n      id\\n      name\\n      subDepartments {\\n        name\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation deleteDepartment($id: ID!) {\\n    deleteDepartment(id: $id) {\\n      id\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst LOGIN = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nconst GET_DEPARTMENTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nconst GET_DEPARTMENT_BY_ID = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nconst CREATE_DEPARTMENT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\nconst UPDATE_DEPARTMENT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4());\nconst DELETE_DEPARTMENT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9ncmFwaHFsL3F1ZXJpZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLFFBQVFELG1EQUFHQSxvQkFJdEI7QUFFSyxNQUFNRSxrQkFBa0JGLG1EQUFHQSxxQkFlaEM7QUFFSyxNQUFNRyx1QkFBdUJILG1EQUFHQSxxQkFVckM7QUFFSyxNQUFNSSxvQkFBb0JKLG1EQUFHQSxxQkFXbEM7QUFFSyxNQUFNSyxvQkFBb0JMLG1EQUFHQSxxQkFVbEM7QUFFSyxNQUFNTSxvQkFBb0JOLG1EQUFHQSxxQkFNbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2dyYXBocWwvcXVlcmllcy50cz85MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgTE9HSU4gPSBncWxgXG4gIG11dGF0aW9uIGxvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgbG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZClcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UUyA9IGdxbGBcbiAgcXVlcnkgR2V0RGVwYXJ0bWVudHMge1xuICAgIGRlcGFydG1lbnRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBjcmVhdGVkQnkge1xuICAgICAgICBpZFxuICAgICAgICB1c2VybmFtZVxuICAgICAgfVxuICAgICAgc3ViRGVwYXJ0bWVudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfQllfSUQgPSBncWxgXG4gIHF1ZXJ5IGRlcGFydG1lbnQoJGlkOiBGbG9hdCEpIHtcbiAgICBkZXBhcnRtZW50KGlkOiAkaWQpIHtcbiAgICAgIG5hbWVcbiAgICAgIHN1YkRlcGFydG1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVEZXBhcnRtZW50KCRpbnB1dDogQ3JlYXRlRGVwYXJ0bWVudElucHV0ISkge1xuICAgIGNyZWF0ZURlcGFydG1lbnQoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHN1YkRlcGFydG1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVEZXBhcnRtZW50KCRpbnB1dDogVXBkYXRlRGVwYXJ0bWVudElucHV0ISkge1xuICAgIHVwZGF0ZURlcGFydG1lbnQoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHN1YkRlcGFydG1lbnRzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBBUlRNRU5UID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVEZXBhcnRtZW50KCRpZDogSUQhKSB7XG4gICAgZGVsZXRlRGVwYXJ0bWVudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJncWwiLCJMT0dJTiIsIkdFVF9ERVBBUlRNRU5UUyIsIkdFVF9ERVBBUlRNRU5UX0JZX0lEIiwiQ1JFQVRFX0RFUEFSVE1FTlQiLCJVUERBVEVfREVQQVJUTUVOVCIsIkRFTEVURV9ERVBBUlRNRU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/graphql/queries.ts\n"));

/***/ })

});