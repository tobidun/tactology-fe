/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/graphql-tag";
exports.ids = ["vendor-chunks/graphql-tag"];
exports.modules = {

/***/ "(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js":
/*!*********************************************************!*\
  !*** ./node_modules/graphql-tag/lib/graphql-tag.umd.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("(function (global, factory) {\n     true ? factory(exports, __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\"), __webpack_require__(/*! graphql */ \"(ssr)/./node_modules/graphql/index.js\")) :\n    0;\n}(this, (function (exports, tslib, graphql) { 'use strict';\n\n    var docCache = new Map();\n    var fragmentSourceMap = new Map();\n    var printFragmentWarnings = true;\n    var experimentalFragmentVariables = false;\n    function normalize(string) {\n        return string.replace(/[\\s,]+/g, ' ').trim();\n    }\n    function cacheKeyFromLoc(loc) {\n        return normalize(loc.source.body.substring(loc.start, loc.end));\n    }\n    function processFragments(ast) {\n        var seenKeys = new Set();\n        var definitions = [];\n        ast.definitions.forEach(function (fragmentDefinition) {\n            if (fragmentDefinition.kind === 'FragmentDefinition') {\n                var fragmentName = fragmentDefinition.name.value;\n                var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);\n                var sourceKeySet = fragmentSourceMap.get(fragmentName);\n                if (sourceKeySet && !sourceKeySet.has(sourceKey)) {\n                    if (printFragmentWarnings) {\n                        console.warn(\"Warning: fragment with name \" + fragmentName + \" already exists.\\n\"\n                            + \"graphql-tag enforces all fragment names across your application to be unique; read more about\\n\"\n                            + \"this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names\");\n                    }\n                }\n                else if (!sourceKeySet) {\n                    fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);\n                }\n                sourceKeySet.add(sourceKey);\n                if (!seenKeys.has(sourceKey)) {\n                    seenKeys.add(sourceKey);\n                    definitions.push(fragmentDefinition);\n                }\n            }\n            else {\n                definitions.push(fragmentDefinition);\n            }\n        });\n        return tslib.__assign(tslib.__assign({}, ast), { definitions: definitions });\n    }\n    function stripLoc(doc) {\n        var workSet = new Set(doc.definitions);\n        workSet.forEach(function (node) {\n            if (node.loc)\n                delete node.loc;\n            Object.keys(node).forEach(function (key) {\n                var value = node[key];\n                if (value && typeof value === 'object') {\n                    workSet.add(value);\n                }\n            });\n        });\n        var loc = doc.loc;\n        if (loc) {\n            delete loc.startToken;\n            delete loc.endToken;\n        }\n        return doc;\n    }\n    function parseDocument(source) {\n        var cacheKey = normalize(source);\n        if (!docCache.has(cacheKey)) {\n            var parsed = graphql.parse(source, {\n                experimentalFragmentVariables: experimentalFragmentVariables,\n                allowLegacyFragmentVariables: experimentalFragmentVariables\n            });\n            if (!parsed || parsed.kind !== 'Document') {\n                throw new Error('Not a valid GraphQL document.');\n            }\n            docCache.set(cacheKey, stripLoc(processFragments(parsed)));\n        }\n        return docCache.get(cacheKey);\n    }\n    function gql(literals) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (typeof literals === 'string') {\n            literals = [literals];\n        }\n        var result = literals[0];\n        args.forEach(function (arg, i) {\n            if (arg && arg.kind === 'Document') {\n                result += arg.loc.source.body;\n            }\n            else {\n                result += arg;\n            }\n            result += literals[i + 1];\n        });\n        return parseDocument(result);\n    }\n    function resetCaches() {\n        docCache.clear();\n        fragmentSourceMap.clear();\n    }\n    function disableFragmentWarnings() {\n        printFragmentWarnings = false;\n    }\n    function enableExperimentalFragmentVariables() {\n        experimentalFragmentVariables = true;\n    }\n    function disableExperimentalFragmentVariables() {\n        experimentalFragmentVariables = false;\n    }\n    var extras = {\n        gql: gql,\n        resetCaches: resetCaches,\n        disableFragmentWarnings: disableFragmentWarnings,\n        enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,\n        disableExperimentalFragmentVariables: disableExperimentalFragmentVariables\n    };\n    (function (gql_1) {\n        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;\n    })(gql || (gql = {}));\n    gql[\"default\"] = gql;\n    var gql$1 = gql;\n\n    exports.default = gql$1;\n    exports.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;\n    exports.disableFragmentWarnings = disableFragmentWarnings;\n    exports.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;\n    exports.gql = gql;\n    exports.resetCaches = resetCaches;\n\n    Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceMappingURL=graphql-tag.umd.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbGliL2dyYXBocWwtdGFnLnVtZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsdURBQU8sR0FBRyxtQkFBTyxDQUFDLHNEQUFTO0FBQ3ZILElBQUksQ0FDNkk7QUFDakosQ0FBQyw2Q0FBNkM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0NBQStDLFVBQVUsMEJBQTBCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtCQUFrQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtdGFnL2xpYi9ncmFwaHFsLXRhZy51bWQuanM/NmY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgndHNsaWInKSwgcmVxdWlyZSgnZ3JhcGhxbCcpKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICd0c2xpYicsICdncmFwaHFsJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbFsnZ3JhcGhxbC10YWcnXSA9IHt9LCBnbG9iYWwudHNsaWIsIGdsb2JhbC5ncmFwaHFsKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgdHNsaWIsIGdyYXBocWwpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRvY0NhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciBmcmFnbWVudFNvdXJjZU1hcCA9IG5ldyBNYXAoKTtcbiAgICB2YXIgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gdHJ1ZTtcbiAgICB2YXIgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xccyxdKy9nLCAnICcpLnRyaW0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2FjaGVLZXlGcm9tTG9jKGxvYykge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKGxvYy5zb3VyY2UuYm9keS5zdWJzdHJpbmcobG9jLnN0YXJ0LCBsb2MuZW5kKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGcmFnbWVudHMoYXN0KSB7XG4gICAgICAgIHZhciBzZWVuS2V5cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdmFyIGRlZmluaXRpb25zID0gW107XG4gICAgICAgIGFzdC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChmcmFnbWVudERlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnROYW1lID0gZnJhZ21lbnREZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZUtleSA9IGNhY2hlS2V5RnJvbUxvYyhmcmFnbWVudERlZmluaXRpb24ubG9jKTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlS2V5U2V0ID0gZnJhZ21lbnRTb3VyY2VNYXAuZ2V0KGZyYWdtZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUtleVNldCAmJiAhc291cmNlS2V5U2V0Lmhhcyhzb3VyY2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmludEZyYWdtZW50V2FybmluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGZyYWdtZW50IHdpdGggbmFtZSBcIiArIGZyYWdtZW50TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzLlxcblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcImdyYXBocWwtdGFnIGVuZm9yY2VzIGFsbCBmcmFnbWVudCBuYW1lcyBhY3Jvc3MgeW91ciBhcHBsaWNhdGlvbiB0byBiZSB1bmlxdWU7IHJlYWQgbW9yZSBhYm91dFxcblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcInRoaXMgaW4gdGhlIGRvY3M6IGh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vY29yZS9mcmFnbWVudHMuaHRtbCN1bmlxdWUtbmFtZXNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNvdXJjZUtleVNldCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNvdXJjZU1hcC5zZXQoZnJhZ21lbnROYW1lLCBzb3VyY2VLZXlTZXQgPSBuZXcgU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291cmNlS2V5U2V0LmFkZChzb3VyY2VLZXkpO1xuICAgICAgICAgICAgICAgIGlmICghc2VlbktleXMuaGFzKHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlbktleXMuYWRkKHNvdXJjZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goZnJhZ21lbnREZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGFzdCksIHsgZGVmaW5pdGlvbnM6IGRlZmluaXRpb25zIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdHJpcExvYyhkb2MpIHtcbiAgICAgICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KGRvYy5kZWZpbml0aW9ucyk7XG4gICAgICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubG9jKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlLmxvYztcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5vZGVba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB3b3JrU2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbG9jID0gZG9jLmxvYztcbiAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgZGVsZXRlIGxvYy5zdGFydFRva2VuO1xuICAgICAgICAgICAgZGVsZXRlIGxvYy5lbmRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZURvY3VtZW50KHNvdXJjZSkge1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSBub3JtYWxpemUoc291cmNlKTtcbiAgICAgICAgaWYgKCFkb2NDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gZ3JhcGhxbC5wYXJzZShzb3VyY2UsIHtcbiAgICAgICAgICAgICAgICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlczogZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgYWxsb3dMZWdhY3lGcmFnbWVudFZhcmlhYmxlczogZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFwYXJzZWQgfHwgcGFyc2VkLmtpbmQgIT09ICdEb2N1bWVudCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIEdyYXBoUUwgZG9jdW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2NDYWNoZS5zZXQoY2FjaGVLZXksIHN0cmlwTG9jKHByb2Nlc3NGcmFnbWVudHMocGFyc2VkKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2NDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBncWwobGl0ZXJhbHMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsaXRlcmFscyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxpdGVyYWxzID0gW2xpdGVyYWxzXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gbGl0ZXJhbHNbMF07XG4gICAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnLCBpKSB7XG4gICAgICAgICAgICBpZiAoYXJnICYmIGFyZy5raW5kID09PSAnRG9jdW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGFyZy5sb2Muc291cmNlLmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYXJnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9IGxpdGVyYWxzW2kgKyAxXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZURvY3VtZW50KHJlc3VsdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0Q2FjaGVzKCkge1xuICAgICAgICBkb2NDYWNoZS5jbGVhcigpO1xuICAgICAgICBmcmFnbWVudFNvdXJjZU1hcC5jbGVhcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncygpIHtcbiAgICAgICAgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICAgICAgICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcygpIHtcbiAgICAgICAgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4dHJhcyA9IHtcbiAgICAgICAgZ3FsOiBncWwsXG4gICAgICAgIHJlc2V0Q2FjaGVzOiByZXNldENhY2hlcyxcbiAgICAgICAgZGlzYWJsZUZyYWdtZW50V2FybmluZ3M6IGRpc2FibGVGcmFnbWVudFdhcm5pbmdzLFxuICAgICAgICBlbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlczogZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsXG4gICAgICAgIGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlczogZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzXG4gICAgfTtcbiAgICAoZnVuY3Rpb24gKGdxbF8xKSB7XG4gICAgICAgIGdxbF8xLmdxbCA9IGV4dHJhcy5ncWwsIGdxbF8xLnJlc2V0Q2FjaGVzID0gZXh0cmFzLnJlc2V0Q2FjaGVzLCBncWxfMS5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncyA9IGV4dHJhcy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncywgZ3FsXzEuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBleHRyYXMuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsIGdxbF8xLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGV4dHJhcy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG4gICAgfSkoZ3FsIHx8IChncWwgPSB7fSkpO1xuICAgIGdxbFtcImRlZmF1bHRcIl0gPSBncWw7XG4gICAgdmFyIGdxbCQxID0gZ3FsO1xuXG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gZ3FsJDE7XG4gICAgZXhwb3J0cy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG4gICAgZXhwb3J0cy5kaXNhYmxlRnJhZ21lbnRXYXJuaW5ncyA9IGRpc2FibGVGcmFnbWVudFdhcm5pbmdzO1xuICAgIGV4cG9ydHMuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBlbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbiAgICBleHBvcnRzLmdxbCA9IGdxbDtcbiAgICBleHBvcnRzLnJlc2V0Q2FjaGVzID0gcmVzZXRDYWNoZXM7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JhcGhxbC10YWcudW1kLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/graphql-tag/main.js":
/*!******************************************!*\
  !*** ./node_modules/graphql-tag/main.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// For backwards compatibility, make sure require(\"graphql-tag\") returns\n// the gql function, rather than an exports object.\nmodule.exports = __webpack_require__(/*! ./lib/graphql-tag.umd.js */ \"(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js\").gql;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsbUlBQXdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtdGFnL21haW4uanM/OTc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIG1ha2Ugc3VyZSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIikgcmV0dXJuc1xuLy8gdGhlIGdxbCBmdW5jdGlvbiwgcmF0aGVyIHRoYW4gYW4gZXhwb3J0cyBvYmplY3QuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2dyYXBocWwtdGFnLnVtZC5qcycpLmdxbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphql-tag/main.js\n");

/***/ })

};
;